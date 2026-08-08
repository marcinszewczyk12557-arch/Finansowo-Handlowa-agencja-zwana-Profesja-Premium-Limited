import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

function clean(value: string | null, max = 254) {
  return (value || '').trim().slice(0, max);
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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const reference = clean(searchParams.get('reference'), 80);
  const email = clean(searchParams.get('email')).toLowerCase();

  if (!reference || !email || !email.includes('@')) {
    return NextResponse.json({ ok: false, error: 'Podaj numer sprawy lub zamówienia oraz poprawny adres e-mail.' }, { status: 400 });
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
        shippingMethod: true,
        carrier: true,
        trackingNumber: true,
        trackingUrl: true,
        estimatedDelivery: true,
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
      return NextResponse.json({ ok: true, kind: 'order', order }, { headers: { 'Cache-Control': 'no-store' } });
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
      return NextResponse.json(
        {
          ok: true,
          kind: 'offer',
          offer,
          message: 'Zapytanie istnieje w systemie. Dane formalności są uzupełniane z przebiegu negocjacji i transakcji, natomiast zgody i podpis wymagają odrębnej, świadomej czynności klienta.',
        },
        { headers: { 'Cache-Control': 'no-store' } },
      );
    }

    return NextResponse.json({ ok: false, error: 'Nie znaleziono sprawy ani zamówienia dla podanych danych.' }, { status: 404 });
  } catch (error) {
    console.error('Client order lookup failed', error);
    return NextResponse.json({ ok: false, error: 'Nie udało się sprawdzić sprawy lub zamówienia.' }, { status: 500 });
  }
}
