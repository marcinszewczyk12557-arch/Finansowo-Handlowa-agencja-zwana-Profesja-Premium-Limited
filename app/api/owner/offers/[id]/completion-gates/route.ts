import { NextResponse } from 'next/server';
import { isOwnerSession } from '../../../../../../lib/ownerAuth';
import { evaluateCompletionGates, markCaseCompleted } from '../../../../../../lib/completionGate';

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
    const result = await evaluateCompletionGates(offerId);
    return NextResponse.json({ ok: true, completionGates: result }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ ok: false, error: msg }, { status: msg === 'OFFER_NOT_FOUND' ? 404 : 500 });
  }
}

export async function POST(
  request: Request,
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
    const body = await request.json().catch(() => ({}));
    if (body.action !== 'MARK_COMPLETED') {
      return NextResponse.json({ ok: false, error: 'Nieznana akcja.' }, { status: 400 });
    }

    await markCaseCompleted(offerId, typeof body.ownerNote === 'string' ? body.ownerNote.slice(0, 500) : undefined);
    return NextResponse.json(
      { ok: true, message: 'Sprawa oznaczona jako ZAKOŃCZONA po pomyślnej weryfikacji bram.' },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    const status = msg.startsWith('COMPLETION_GATES_FAILED') ? 422
      : msg === 'OFFER_NOT_FOUND' ? 404 : 500;
    return NextResponse.json({ ok: false, error: msg }, { status });
  }
}
