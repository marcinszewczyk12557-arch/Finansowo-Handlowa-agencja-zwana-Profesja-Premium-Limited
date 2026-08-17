import { NextResponse } from 'next/server';
import { isOwnerSession } from '../../../../../lib/ownerAuth';
import { getInvoiceWithFactoring } from '../../../../../lib/invoiceGeneration';
import { buildFactoringExport, markFactoringAssignment } from '../../../../../lib/factoringExport';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await isOwnerSession())) {
    return NextResponse.json({ ok: false, error: 'Brak autoryzacji OWNER.' }, { status: 401 });
  }

  const { id } = await params;
  const invoiceId = Number(id);
  if (!Number.isInteger(invoiceId) || invoiceId <= 0) {
    return NextResponse.json({ ok: false, error: 'Nieprawidłowy identyfikator faktury.' }, { status: 400 });
  }

  const invoice = await getInvoiceWithFactoring(invoiceId);
  if (!invoice) {
    return NextResponse.json({ ok: false, error: 'Faktura nie znaleziona.' }, { status: 404 });
  }

  return NextResponse.json({ ok: true, invoice }, { headers: { 'Cache-Control': 'no-store' } });
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await isOwnerSession())) {
    return NextResponse.json({ ok: false, error: 'Brak autoryzacji OWNER.' }, { status: 401 });
  }

  const { id } = await params;
  const invoiceId = Number(id);
  if (!Number.isInteger(invoiceId) || invoiceId <= 0) {
    return NextResponse.json({ ok: false, error: 'Nieprawidłowy identyfikator faktury.' }, { status: 400 });
  }

  try {
    const body = await request.json().catch(() => ({}));

    if (body.action === 'FACTORING_EXPORT') {
      const payload = await buildFactoringExport(invoiceId);
      return NextResponse.json({ ok: true, factoringExport: payload }, { headers: { 'Cache-Control': 'no-store' } });
    }

    if (body.action === 'FACTORING_ASSIGNMENT') {
      const allowed = ['NOT_ASSIGNED', 'CONSENT_PENDING', 'ASSIGNED', 'REJECTED'] as const;
      type Allowed = typeof allowed[number];
      if (!allowed.includes(body.assignmentStatus as Allowed)) {
        return NextResponse.json({ ok: false, error: 'Nieprawidłowy status cesji.' }, { status: 400 });
      }
      const pkg = await markFactoringAssignment(
        invoiceId,
        body.assignmentStatus as Allowed,
        body.note,
        body.auditReference,
      );
      return NextResponse.json({ ok: true, factoringPackage: pkg }, { headers: { 'Cache-Control': 'no-store' } });
    }

    return NextResponse.json({ ok: false, error: 'Nieznana akcja.' }, { status: 400 });
  } catch (error) {
    console.error('Invoice action failed', error);
    return NextResponse.json({ ok: false, error: 'Operacja nie powiodła się.' }, { status: 500 });
  }
}
