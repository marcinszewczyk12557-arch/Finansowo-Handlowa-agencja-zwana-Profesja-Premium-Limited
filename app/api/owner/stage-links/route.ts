import { NextResponse } from 'next/server';
import { isOwnerSession } from '../../../../lib/ownerAuth';
import { createStageLink, disableStageLink, getStageLinkWithEvents } from '../../../../lib/stageLinkService';

export async function POST(request: Request) {
  if (!(await isOwnerSession())) {
    return NextResponse.json({ ok: false, error: 'Brak autoryzacji OWNER.' }, { status: 401 });
  }

  try {
    const body = await request.json().catch(() => ({}));

    if (body.action === 'DISABLE') {
      const linkId = Number(body.linkId);
      if (!Number.isInteger(linkId) || linkId <= 0) {
        return NextResponse.json({ ok: false, error: 'Nieprawidłowy identyfikator linku.' }, { status: 400 });
      }
      const link = await disableStageLink(linkId);
      return NextResponse.json({ ok: true, link }, { headers: { 'Cache-Control': 'no-store' } });
    }

    if (body.action === 'GET_EVENTS') {
      const token = typeof body.token === 'string' ? body.token.trim() : '';
      if (!token) {
        return NextResponse.json({ ok: false, error: 'Brak tokenu linku.' }, { status: 400 });
      }
      const link = await getStageLinkWithEvents(token);
      if (!link) {
        return NextResponse.json({ ok: false, error: 'Link nie znaleziony.' }, { status: 404 });
      }
      return NextResponse.json({ ok: true, link }, { headers: { 'Cache-Control': 'no-store' } });
    }

    // Default: create a new stage link
    const offerId = Number(body.offerId);
    if (!Number.isInteger(offerId) || offerId <= 0) {
      return NextResponse.json({ ok: false, error: 'Nieprawidłowy identyfikator oferty.' }, { status: 400 });
    }
    if (!body.stage || !body.purpose) {
      return NextResponse.json({ ok: false, error: 'Etap i cel linku są wymagane.' }, { status: 400 });
    }

    const longUrl = typeof body.longUrl === 'string' ? body.longUrl.slice(0, 2000) : undefined;

    // Validate longUrl does not contain sensitive query params
    if (longUrl) {
      try {
        const url = new URL(longUrl);
        const sensitive = ['email', 'password', 'token', 'secret', 'key', 'apikey'];
        for (const param of sensitive) {
          if (url.searchParams.has(param)) {
            return NextResponse.json(
              { ok: false, error: 'URL nie może zawierać wrażliwych parametrów.' },
              { status: 400 },
            );
          }
        }
      } catch {
        return NextResponse.json({ ok: false, error: 'Nieprawidłowy format URL.' }, { status: 400 });
      }
    }

    const { link, token, shortUrl } = await createStageLink({
      offerId,
      stage:    String(body.stage).slice(0, 64),
      purpose:  String(body.purpose).slice(0, 255),
      provider: body.provider ?? 'none',
      longUrl,
      expiresAt:body.expiresAt ? new Date(body.expiresAt) : null,
    });

    return NextResponse.json({ ok: true, link, token, shortUrl }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Stage link operation failed', error);
    return NextResponse.json({ ok: false, error: 'Operacja nie powiodła się.' }, { status: 500 });
  }
}
