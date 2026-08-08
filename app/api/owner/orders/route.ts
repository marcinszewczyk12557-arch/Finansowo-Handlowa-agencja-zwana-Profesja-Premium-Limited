import { NextResponse } from 'next/server';
import { isOwnerSession } from '../../../../lib/ownerAuth';
import { prisma } from '../../../../lib/prisma';

const ORDER_STATUSES = ['CREATED', 'CONFIRMED', 'IN_PROGRESS', 'READY_TO_SHIP', 'SHIPPED', 'DELIVERED', 'COMPLETED', 'CANCELLED'] as const;

function orderNumber() {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replace(/-/g, '');
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `ORD-${date}-${random}`;
}

export async function POST(request: Request) {
  if (!(await isOwnerSession())) {
    return NextResponse.json({ ok: false, error: 'Brak autoryzacji OWNER.' }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const offerId = Number(body.offerId);
  if (!Number.isInteger(offerId) || offerId <= 0) {
    return NextResponse.json({ ok: false, error: 'Nieprawidłowe zapytanie źródłowe.' }, { status: 400 });
  }

  try {
    const offer = await prisma.offer.findUnique({ where: { id: offerId }, include: { order: true } });
    if (!offer) return NextResponse.json({ ok: false, error: 'Zapytanie nie istnieje.' }, { status: 404 });
    if (offer.order) return NextResponse.json({ ok: true, order: offer.order, existing: true });
    if (!['ACCEPTED', 'IN_PROGRESS', 'COMPLETED'].includes(offer.status)) {
      return NextResponse.json({ ok: false, error: 'Zamówienie można utworzyć dopiero po akceptacji oferty.' }, { status: 409 });
    }

    const order = await prisma.order.create({
      data: {
        number: orderNumber(),
        offerId: offer.id,
        company: offer.company,
        contact: offer.contact,
        email: offer.email,
        product: offer.product,
        quantity: offer.quantity,
        amount: offer.budget,
        notes: offer.details,
      },
    });

    return NextResponse.json({ ok: true, order }, { status: 201 });
  } catch (error) {
    console.error('OWNER order creation failed', error);
    return NextResponse.json({ ok: false, error: 'Nie udało się utworzyć zamówienia.' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  if (!(await isOwnerSession())) {
    return NextResponse.json({ ok: false, error: 'Brak autoryzacji OWNER.' }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const orderId = Number(body.orderId);
  const status = String(body.status || '').trim().toUpperCase();

  if (!Number.isInteger(orderId) || orderId <= 0 || !ORDER_STATUSES.includes(status as (typeof ORDER_STATUSES)[number])) {
    return NextResponse.json({ ok: false, error: 'Nieprawidłowy identyfikator lub status zamówienia.' }, { status: 400 });
  }

  try {
    const order = await prisma.order.update({
      where: { id: orderId },
      data: { status },
      select: { id: true, number: true, status: true, updatedAt: true },
    });
    return NextResponse.json({ ok: true, order });
  } catch (error) {
    console.error('OWNER order status update failed', error);
    return NextResponse.json({ ok: false, error: 'Nie udało się zmienić statusu zamówienia.' }, { status: 500 });
  }
}
