import { NextResponse } from 'next/server';
import { isOwnerSession } from '../../../../../../lib/ownerAuth';
import { prisma } from '../../../../../../lib/prisma';
import { ensureSalesAutomationCase } from '../../../../../../lib/salesAutomation';

const ALLOWED_STATUSES = [
  'NEW',
  'PREPARING',
  'OFFER_SENT',
  'ACCEPTED',
  'IN_PROGRESS',
  'COMPLETED',
  'CANCELLED',
] as const;

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  if (!(await isOwnerSession())) {
    return NextResponse.json({ ok: false, error: 'Brak autoryzacji OWNER.' }, { status: 401 });
  }

  const { id } = await context.params;
  const offerId = Number(id);
  if (!Number.isInteger(offerId) || offerId <= 0) {
    return NextResponse.json({ ok: false, error: 'Nieprawidłowy identyfikator zapytania.' }, { status: 400 });
  }

  const body = await request.json().catch(() => ({}));
  const status = typeof body.status === 'string' ? body.status.trim().toUpperCase() : '';
  if (!ALLOWED_STATUSES.includes(status as (typeof ALLOWED_STATUSES)[number])) {
    return NextResponse.json({ ok: false, error: 'Nieprawidłowy status.' }, { status: 400 });
  }

  try {
    const offer = await prisma.offer.update({
      where: { id: offerId },
      data: { status },
      select: { id: true, number: true, status: true },
    });

    try {
      await ensureSalesAutomationCase(offerId);
    } catch (automationError) {
      console.error('Sales automation sync after offer status failed', automationError);
    }

    return NextResponse.json({ ok: true, offer });
  } catch (error) {
    console.error('OWNER offer status update failed', error);
    return NextResponse.json({ ok: false, error: 'Nie udało się zaktualizować statusu.' }, { status: 500 });
  }
}
