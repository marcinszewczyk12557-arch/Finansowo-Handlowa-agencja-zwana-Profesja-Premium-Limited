/**
 * Stage-link abstraction.
 *
 * Compatible with providers: Bitly, Rebrandly, Short.io, Dub (and others).
 * A link click records an analytics event ONLY.
 * It NEVER creates a debt, charge, financial asset or hidden obligation.
 * Any binding financial consent must be explicit and separately recorded.
 *
 * Short-link creation calls external provider APIs server-side using secrets
 * held in environment variables. No secrets or sensitive data appear in URLs.
 */

import { randomBytes } from 'node:crypto';
import { prisma } from './prisma';

export type StageLinkProvider = 'bitly' | 'rebrandly' | 'shortio' | 'dub' | 'none';

export type StageLinkStage =
  | 'OFFER_SENT'
  | 'OFFER_VIEWED'
  | 'OFFER_ACCEPTED'
  | 'DOCUMENT_REQUESTED'
  | 'KYC_INITIATED'
  | 'ORDER_CONFIRMED'
  | 'PAYMENT_CONFIRMED'
  | 'DELIVERY_CONFIRMED'
  | 'CUSTOM';

export interface CreateStageLinkInput {
  offerId:   number;
  stage:     StageLinkStage | string;
  purpose:   string;
  expiresAt?: Date | null;
  provider?: StageLinkProvider;
  /** The long destination URL (public, must not contain sensitive data) */
  longUrl?:  string;
}

function generateToken(): string {
  return randomBytes(16).toString('hex');
}

/**
 * Create a short-link for a workflow stage.
 *
 * If a provider API key is configured, attempts to shorten longUrl via that provider.
 * Falls back to token-only (no external call) if provider not configured.
 */
export async function createStageLink(input: CreateStageLinkInput) {
  const token    = generateToken();
  const provider = input.provider ?? 'none';
  let shortUrl: string | null = null;

  if (input.longUrl && provider !== 'none') {
    shortUrl = await callShorteningProvider(provider, input.longUrl, token).catch((err) => {
      console.error(`StageLink: shortening via ${provider} failed`, err);
      return null;
    });
  }

  const link = await prisma.stageLink.create({
    data: {
      token,
      offerId:  input.offerId,
      stage:    input.stage,
      purpose:  input.purpose.trim().slice(0, 255),
      shortUrl: shortUrl ?? null,
      provider: provider !== 'none' ? provider : null,
      expiresAt:input.expiresAt ?? null,
      disabled: false,
    },
  });

  return { link, token, shortUrl };
}

/**
 * Record a stage-link event (analytics only).
 * A click NEVER creates a financial obligation.
 */
export async function recordStageLinkEvent(
  token: string,
  eventType: string,
  metadata?: Record<string, string>,
) {
  const link = await prisma.stageLink.findUnique({ where: { token } });
  if (!link || link.disabled) return null;
  if (link.expiresAt && link.expiresAt < new Date()) return null;

  await prisma.stageLinkEvent.create({
    data: {
      linkId:    link.id,
      eventType: eventType.slice(0, 64),
      metadata:  metadata ? JSON.stringify(metadata) : null,
    },
  });

  return link;
}

export async function getStageLinkWithEvents(token: string) {
  return prisma.stageLink.findUnique({
    where: { token },
    include: { events: { orderBy: { recordedAt: 'desc' }, take: 100 } },
  });
}

export async function disableStageLink(id: number) {
  return prisma.stageLink.update({ where: { id }, data: { disabled: true } });
}

// ---------------------------------------------------------------------------
// Provider integrations (server-side only, keys from env)
// ---------------------------------------------------------------------------

async function callShorteningProvider(
  provider: StageLinkProvider,
  longUrl:  string,
  token:    string,
): Promise<string | null> {
  switch (provider) {
    case 'bitly':     return shortenBitly(longUrl, token);
    case 'rebrandly': return shortenRebrandly(longUrl, token);
    case 'shortio':   return shortenShortIo(longUrl, token);
    case 'dub':       return shortenDub(longUrl, token);
    default:          return null;
  }
}

async function shortenBitly(longUrl: string, _token: string): Promise<string | null> {
  const apiKey = process.env.STAGELINK_BITLY_TOKEN;
  if (!apiKey) return null;
  const res = await fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({ long_url: longUrl }),
  });
  if (!res.ok) return null;
  const data = await res.json() as { link?: string };
  return data.link ?? null;
}

async function shortenRebrandly(longUrl: string, token: string): Promise<string | null> {
  const apiKey = process.env.STAGELINK_REBRANDLY_KEY;
  const domain = process.env.STAGELINK_REBRANDLY_DOMAIN;
  if (!apiKey) return null;
  const body: Record<string, unknown> = { destination: longUrl, slashtag: token };
  if (domain) body['domain'] = { fullName: domain };
  const res = await fetch('https://api.rebrandly.com/v1/links', {
    method: 'POST',
    headers: { apikey: apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) return null;
  const data = await res.json() as { shortUrl?: string };
  return data.shortUrl ? 'https://' + data.shortUrl : null;
}

async function shortenShortIo(longUrl: string, token: string): Promise<string | null> {
  const apiKey = process.env.STAGELINK_SHORTIO_KEY;
  const domain = process.env.STAGELINK_SHORTIO_DOMAIN;
  if (!apiKey || !domain) return null;
  const res = await fetch('https://api.short.io/links', {
    method: 'POST',
    headers: { authorization: apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({ originalURL: longUrl, domain, path: token }),
  });
  if (!res.ok) return null;
  const data = await res.json() as { shortURL?: string };
  return data.shortURL ?? null;
}

async function shortenDub(longUrl: string, token: string): Promise<string | null> {
  const apiKey = process.env.STAGELINK_DUB_TOKEN;
  const domain = process.env.STAGELINK_DUB_DOMAIN;
  if (!apiKey) return null;
  const body: Record<string, unknown> = { url: longUrl, key: token };
  if (domain) body['domain'] = domain;
  const res = await fetch('https://api.dub.co/links', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) return null;
  const data = await res.json() as { shortLink?: string };
  return data.shortLink ?? null;
}
