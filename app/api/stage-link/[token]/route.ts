import { NextResponse } from 'next/server';
import { recordStageLinkEvent } from '../../../../lib/stageLinkService';

/**
 * Public endpoint — records a stage-link analytics event.
 *
 * IMPORTANT: A click NEVER creates a debt, charge, financial asset
 * or any hidden obligation. This endpoint ONLY records analytics.
 */
export async function POST(
  request: Request,
  { params }: { params: Promise<{ token: string }> },
) {
  try {
    const { token } = await params;
    if (!token || token.length > 64) {
      return NextResponse.json({ ok: false, error: 'Nieprawidłowy token.' }, { status: 400 });
    }

    const body = await request.json().catch(() => ({}));

    const eventType = typeof body.eventType === 'string'
      ? body.eventType.replace(/[^A-Z_]/gi, '_').slice(0, 64).toUpperCase()
      : 'LINK_CLICKED';

    // Accept only safe string metadata (no PII, no internal data)
    const rawMeta = body.metadata;
    const metadata: Record<string, string> = {};
    if (rawMeta && typeof rawMeta === 'object' && !Array.isArray(rawMeta)) {
      const allowed = ['source', 'channel', 'ref'];
      for (const k of allowed) {
        if (typeof (rawMeta as Record<string, unknown>)[k] === 'string') {
          metadata[k] = ((rawMeta as Record<string, string>)[k]).slice(0, 128);
        }
      }
    }

    const link = await recordStageLinkEvent(token, eventType, metadata);
    if (!link) {
      // Return 200 silently — do not reveal whether token exists
      return NextResponse.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } });
    }

    return NextResponse.json(
      {
        ok: true,
        disclaimer: 'Zdarzenie analityczne zarejestrowane. Kliknięcie linku nie tworzy żadnego zobowiązania finansowego ani prawnego.',
      },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  } catch (error) {
    console.error('Stage link event recording failed', error);
    return NextResponse.json({ ok: false, error: 'Nie udało się zarejestrować zdarzenia.' }, { status: 500 });
  }
}
