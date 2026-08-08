import { NextResponse } from 'next/server';
import { isOwnerSession } from '../../../../../../lib/ownerAuth';
import { prisma } from '../../../../../../lib/prisma';
import { syncTransactionFormalities } from '../../../../../../lib/transactionFormalities';

const ALLOWED_FIELDS = [
  'clientDeclarationStatus',
  'insuranceConsentStatus',
  'shippingConsentStatus',
  'businessUseConsentStatus',
  'interestConsentStatus',
  'intermediationConsentStatus',
  'monthlySettlementStatus',
  'earlyTerminationStatus',
  'finalSignatureStatus',
] as const;

const ALLOWED_STATUSES = ['PENDING', 'ACCEPTED', 'REJECTED', 'NOT_APPLICABLE'] as const;

type FormalityField = (typeof ALLOWED_FIELDS)[number];
type FormalityStatus = (typeof ALLOWED_STATUSES)[number];

function clean(value: unknown, max = 200) {
  return typeof value === 'string' ? value.trim().replace(/\u0000/g, '').slice(0, max) : '';
}

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  if (!(await isOwnerSession())) {
    return NextResponse.json({ ok: false, error: 'Brak autoryzacji OWNER.' }, { status: 401 });
  }

  const { id } = await context.params;
  const offerId = Number(id);
  if (!Number.isInteger(offerId) || offerId <= 0) {
    return NextResponse.json({ ok: false, error: 'Nieprawidłowy identyfikator sprawy.' }, { status: 400 });
  }

  const body = await request.json().catch(() => ({}));
  const field = clean(body.field, 80) as FormalityField;
  const status = clean(body.status, 40).toUpperCase() as FormalityStatus;
  const evidenceReference = clean(body.evidenceReference, 200);

  if (!ALLOWED_FIELDS.includes(field)) {
    return NextResponse.json({ ok: false, error: 'Nieprawidłowa formalność.' }, { status: 400 });
  }
  if (!ALLOWED_STATUSES.includes(status)) {
    return NextResponse.json({ ok: false, error: 'Nieprawidłowy status formalności.' }, { status: 400 });
  }
  if (status !== 'PENDING' && evidenceReference.length < 3) {
    return NextResponse.json({ ok: false, error: 'Podaj krótkie odniesienie do zweryfikowanej podstawy zmiany statusu.' }, { status: 400 });
  }

  try {
    await syncTransactionFormalities(offerId);

    const data: Record<string, unknown> = { [field]: status };
    if (field === 'finalSignatureStatus') {
      data.signedAt = status === 'ACCEPTED' ? new Date() : null;
      data.signatureMethod = status === 'ACCEPTED' ? 'VERIFIED_MANUALLY_BY_OWNER' : null;
    }

    const formalities = await prisma.transactionFormalities.update({
      where: { offerId },
      data,
    });

    const automation = await prisma.salesAutomationCase.findUnique({ where: { offerId }, select: { id: true } });
    if (automation) {
      await prisma.salesAutomationEvent.create({
        data: {
          caseId: automation.id,
          type: 'FORMALITY_STATUS_VERIFIED',
          message: status === 'PENDING'
            ? `OWNER przywrócił ${field} do statusu PENDING.`
            : `OWNER zarejestrował ${field} = ${status}. Odniesienie dowodowe: ${evidenceReference}. Automatyzacja nie utworzyła tej zgody samodzielnie.`,
        },
      });
    }

    return NextResponse.json({ ok: true, formalities });
  } catch (error) {
    console.error('OWNER formalities update failed', error);
    return NextResponse.json({ ok: false, error: 'Nie udało się zaktualizować formalności.' }, { status: 500 });
  }
}
