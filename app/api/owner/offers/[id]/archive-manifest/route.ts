import { NextResponse } from 'next/server';
import { isOwnerSession } from '../../../../../../lib/ownerAuth';
import { buildArchiveManifest } from '../../../../../../lib/androidArchive';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await isOwnerSession())) {
    return NextResponse.json({ ok: false, error: 'Brak autoryzacji OWNER.' }, { status: 401 });
  }

  const { id } = await params;
  const offerId = Number(id);
  if (!Number.isInteger(offerId) || offerId <= 0) {
    return NextResponse.json({ ok: false, error: 'Nieprawidłowy identyfikator oferty.' }, { status: 400 });
  }

  try {
    const manifest = await buildArchiveManifest(offerId);
    return NextResponse.json(
      { ok: true, manifest },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ ok: false, error: msg }, { status: msg === 'OFFER_NOT_FOUND' ? 404 : 500 });
  }
}
