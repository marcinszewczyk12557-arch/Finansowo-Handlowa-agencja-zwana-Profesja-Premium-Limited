import { NextResponse } from 'next/server';
import { isOwnerSession } from '../../../../lib/ownerAuth';
import { createInvoice } from '../../../../lib/invoiceGeneration';

export async function POST(request: Request) {
  if (!(await isOwnerSession())) {
    return NextResponse.json({ ok: false, error: 'Brak autoryzacji OWNER.' }, { status: 401 });
  }

  try {
    const body = await request.json().catch(() => ({}));

    const offerId = Number(body.offerId);
    if (!Number.isInteger(offerId) || offerId <= 0) {
      return NextResponse.json({ ok: false, error: 'Nieprawidłowy identyfikator oferty.' }, { status: 400 });
    }

    if (!body.issuerName || !body.issuerAddress || !body.issuerTaxId) {
      return NextResponse.json({ ok: false, error: 'Dane wystawcy są wymagane.' }, { status: 400 });
    }
    if (!body.buyerName || !body.buyerAddress) {
      return NextResponse.json({ ok: false, error: 'Dane nabywcy są wymagane.' }, { status: 400 });
    }
    if (!body.netAmount) {
      return NextResponse.json({ ok: false, error: 'Kwota netto jest wymagana.' }, { status: 400 });
    }

    const vatInput = {
      buyerCountry: typeof body.buyerCountry === 'string' ? body.buyerCountry : undefined,
      sellerCountry: typeof body.sellerCountry === 'string' ? body.sellerCountry : 'PL',
      buyerVatVerified: body.buyerVatVerified === true,
      sellerVatEuRegistered: body.sellerVatEuRegistered === true,
      intraEuDeliveryEvidenceVerified: body.intraEuDeliveryEvidenceVerified === true,
      exportEvidenceVerified: body.exportEvidenceVerified === true,
      ownerOverride: body.vatOverride ?? null,
      ownerVatRate: typeof body.vatRate === 'string' ? body.vatRate : undefined,
      ownerNote: typeof body.vatOverrideNote === 'string' ? body.vatOverrideNote : undefined,
    };

    const dueDate = body.dueDate ? new Date(body.dueDate) : null;
    if (dueDate && Number.isNaN(dueDate.getTime())) {
      return NextResponse.json({ ok: false, error: 'Nieprawidłowy termin płatności.' }, { status: 400 });
    }

    const { invoice, vatResult } = await createInvoice({
      offerId,
      orderId: body.orderId ? Number(body.orderId) : null,
      issuerName: String(body.issuerName).slice(0, 255),
      issuerAddress: String(body.issuerAddress).slice(0, 500),
      issuerTaxId: String(body.issuerTaxId).slice(0, 60),
      buyerName: String(body.buyerName).slice(0, 255),
      buyerAddress: String(body.buyerAddress).slice(0, 500),
      buyerTaxId: body.buyerTaxId ? String(body.buyerTaxId).slice(0, 60) : null,
      currency: typeof body.currency === 'string' ? body.currency.slice(0, 3).toUpperCase() : 'PLN',
      netAmount: String(body.netAmount).slice(0, 60),
      poReference: body.poReference ? String(body.poReference).slice(0, 120) : null,
      contractReference: body.contractReference ? String(body.contractReference).slice(0, 120) : null,
      deliveryEvidence: body.deliveryEvidence ? String(body.deliveryEvidence).slice(0, 500) : null,
      dueDate,
      bankIban: body.bankIban ? String(body.bankIban).slice(0, 40) : null,
      notes: body.notes ? String(body.notes).slice(0, 1000) : null,
      status: body.status === 'ISSUED' ? 'ISSUED' : 'DRAFT',
      vatInput,
    });

    return NextResponse.json({ ok: true, invoice, vatResult }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Invoice creation failed', error);

    if (message === 'INVALID_NET_AMOUNT') {
      return NextResponse.json({ ok: false, error: 'Kwota netto musi być dodatnią liczbą z maksymalnie dwoma miejscami po przecinku.' }, { status: 400 });
    }
    if (message === 'VAT_REVIEW_REQUIRED') {
      return NextResponse.json({ ok: false, error: 'Nie można wystawić faktury przed rozstrzygnięciem stawki VAT i wymaganych dowodów.' }, { status: 422 });
    }

    return NextResponse.json({ ok: false, error: 'Nie udało się utworzyć faktury.' }, { status: 500 });
  }
}
