import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

const MAX_BODY_BYTES = 4096;

function clean(value: unknown, max = 254) {
  return typeof value === 'string' ? value.trim().replace(/\u0000/g, '').slice(0, max) : '';
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value);
}

const formalitiesSelect = {
  sourceDocumentVersion: true,
  negotiationStatus: true,
  productSnapshot: true,
  quantitySnapshot: true,
  marketSnapshot: true,
  valueSnapshot: true,
  financingRequested: true,
  financingAmount: true,
  shippingMethodSnapshot: true,
  estimatedDeliverySnapshot: true,
  clientDeclarationStatus: true,
  insuranceConsentStatus: true,
  shippingConsentStatus: true,
  businessUseConsentStatus: true,
  interestConsentStatus: true,
  intermediationConsentStatus: true,
  monthlySettlementStatus: true,
  earlyTerminationStatus: true,
  finalSignatureStatus: true,
  signatureMethod: true,
  signedAt: true,
  autoFilledAt: true,
  updatedAt: true,
} as const;

function json(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: {
      'Cache-Control': 'no-store, max-age=0',
      Pragma: 'no-cache',
      'X-Robots-Tag': 'noindex, nofollow, noarchive',
    },
  });
}

export async function GET() {
  return json(
    { ok: false, error: 'Ta operacja wymaga bezpiecznego żądania POST.' },
    405,
  );
}

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.toLowerCase().includes('application/json')) {
    return json({ ok: false, error: 'Nieprawidłowy format żądania.' }, 415);
  }

  const contentLength = Number(request.headers.get('content-length') || '0');
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return json({ ok: false, error: 'Żądanie jest zbyt duże.' }, 413);
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'Nieprawidłowe dane żądania.' }, 400);
  }

  const reference = clean(body.reference, 80);
  const email = clean(body.email, 254).toLowerCase();

  if (!reference || !isEmail(email)) {
    return json({ ok: false, error: 'Podaj numer sprawy lub zamówienia oraz poprawny adres e-mail.' }, 400);
  }

  try {
    const order = await prisma.order.findFirst({
      where: {
        email,
        OR: [
          { number: reference },
          { offer: { number: reference } },
        ],
      },
      select: {
        number: true,
        product: true,
        quantity: true,
        amount: true,
        status: true,
        dispatcherStatus: true,
        shippingMethod: true,
        carrier: true,
        trackingNumber: true,
        trackingUrl: true,
        pickupAt: true,
        estimatedDelivery: true,
        transportDocument: true,
        confirmedAt: true,
        shippedAt: true,
        deliveredAt: true,
        orderConfirmation: true,
        commercialOffer: true,
        fulfillmentDocument: true,
        createdAt: true,
        updatedAt: true,
        offer: {
          select: {
            number: true,
            formalities: { select: formalitiesSelect },
          },
        },
      },
    });

    if (order) {
      return json({ ok: true, kind: 'order', order });
    }

    const offer = await prisma.offer.findFirst({
      where: { number: reference, email },
      select: {
        number: true,
        product: true,
        status: true,
        createdAt: true,
        formalities: { select: formalitiesSelect },
      },
    });

    if (offer) {
      return json({
        ok: true,
        kind: 'offer',
        offer,
        message: 'Zapytanie istnieje w systemie. Dane formalności są uzupełniane z przebiegu negocjacji i transakcji, natomiast zgody i podpis wymagają odrębnej, świadomej czynności klienta.',
      });
    }

    return json({ ok: false, error: 'Nie znaleziono sprawy ani zamówienia dla podanych danych.' }, 404);
  } catch (error) {
    console.error('Client order lookup failed', error);
    return json({ ok: false, error: 'Nie udało się sprawdzić sprawy lub zamówienia.' }, 500);
  }
}
