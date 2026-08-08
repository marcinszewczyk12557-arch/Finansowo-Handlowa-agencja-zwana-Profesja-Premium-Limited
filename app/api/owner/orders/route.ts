import { randomBytes } from 'node:crypto';
import { NextResponse } from 'next/server';
import { isOwnerSession } from '../../../../lib/ownerAuth';
import { prisma } from '../../../../lib/prisma';
import { ensureSalesAutomationCase } from '../../../../lib/salesAutomation';

const ORDER_STATUSES = ['CREATED', 'CONFIRMED', 'IN_PROGRESS', 'READY_TO_SHIP', 'SHIPPED', 'DELIVERED', 'COMPLETED', 'CANCELLED'] as const;
const DISPATCHER_STATUSES = ['RECEIVED', 'CARRIER_SELECTED', 'PICKUP_SCHEDULED', 'PICKED_UP', 'IN_TRANSIT', 'DELIVERED', 'CANCELLED'] as const;

function clean(value: unknown, max = 2000) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function optionalDate(value: unknown) {
  const text = clean(value, 64);
  if (!text) return null;
  const date = new Date(text);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

function orderNumber() {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replace(/-/g, '');
  const random = randomBytes(4).toString('hex').toUpperCase();
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

    const isVelox = offer.product.toUpperCase().includes('VELOX');
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
        dispatcherStatus: isVelox ? 'RECEIVED' : 'RECEIVED',
      },
    });

    try {
      await ensureSalesAutomationCase(offer.id);
    } catch (automationError) {
      console.error('Sales automation sync after order creation failed', automationError);
    }

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
  if (!Number.isInteger(orderId) || orderId <= 0) {
    return NextResponse.json({ ok: false, error: 'Nieprawidłowy identyfikator zamówienia.' }, { status: 400 });
  }

  const data: Record<string, unknown> = {};
  if (body.status !== undefined) {
    const status = clean(body.status, 40).toUpperCase();
    if (!ORDER_STATUSES.includes(status as (typeof ORDER_STATUSES)[number])) {
      return NextResponse.json({ ok: false, error: 'Nieprawidłowy status zamówienia.' }, { status: 400 });
    }
    data.status = status;
    if (status === 'CONFIRMED') data.confirmedAt = new Date();
    if (status === 'SHIPPED') data.shippedAt = new Date();
    if (status === 'DELIVERED') data.deliveredAt = new Date();
  }

  if (body.dispatcherStatus !== undefined) {
    const dispatcherStatus = clean(body.dispatcherStatus, 40).toUpperCase();
    if (!DISPATCHER_STATUSES.includes(dispatcherStatus as (typeof DISPATCHER_STATUSES)[number])) {
      return NextResponse.json({ ok: false, error: 'Nieprawidłowy status dyspozytorski.' }, { status: 400 });
    }
    data.dispatcherStatus = dispatcherStatus;
    if (dispatcherStatus === 'PICKED_UP' || dispatcherStatus === 'IN_TRANSIT') data.shippedAt = new Date();
    if (dispatcherStatus === 'DELIVERED') data.deliveredAt = new Date();
  }

  const stringFields = ['shippingMethod', 'pickupAddress', 'shippingAddress', 'carrier', 'trackingNumber', 'trackingUrl', 'orderConfirmation', 'commercialOffer', 'fulfillmentDocument', 'transportDocument', 'notes'] as const;
  for (const field of stringFields) {
    if (body[field] !== undefined) data[field] = clean(body[field], ['pickupAddress', 'shippingAddress', 'notes'].includes(field) ? 5000 : 2000) || null;
  }

  for (const field of ['pickupAt', 'estimatedDelivery'] as const) {
    if (body[field] !== undefined) {
      const parsed = optionalDate(body[field]);
      if (parsed === undefined) return NextResponse.json({ ok: false, error: field === 'pickupAt' ? 'Nieprawidłowy termin odbioru.' : 'Nieprawidłowy termin dostawy.' }, { status: 400 });
      data[field] = parsed;
    }
  }

  if (!Object.keys(data).length) {
    return NextResponse.json({ ok: false, error: 'Brak danych do aktualizacji.' }, { status: 400 });
  }

  try {
    const order = await prisma.order.update({
      where: { id: orderId },
      data,
      select: { id: true, offerId: true, number: true, status: true, dispatcherStatus: true },
    });

    try {
      await ensureSalesAutomationCase(order.offerId);
    } catch (automationError) {
      console.error('Sales automation sync after order update failed', automationError);
    }

    return NextResponse.json({ ok: true, order });
  } catch (error) {
    console.error('OWNER order update failed', error);
    return NextResponse.json({ ok: false, error: 'Nie udało się zaktualizować zamówienia.' }, { status: 500 });
  }
}
