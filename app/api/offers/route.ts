import { randomBytes } from 'node:crypto';
import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { ensureSalesAutomationCase } from '../../../lib/salesAutomation';
import { syncTransactionFormalities } from '../../../lib/transactionFormalities';

function text(value: unknown, max = 500) {
  return typeof value === 'string' ? value.trim().replace(/\u0000/g, '').slice(0, max) : '';
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value);
}

function referenceNumber() {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replace(/-/g, '');
  const random = randomBytes(4).toString('hex').toUpperCase();
  return `PPL-${date}-${random}`;
}

function catalogContext(body: Record<string, unknown>) {
  const category = text(body.catalogCategory, 200);
  const group = text(body.catalogGroup, 200);
  const path = text(body.catalogPath, 1200);
  const source = text(body.catalogSource, 120);
  const lines = [
    category ? `Dział katalogu: ${category}` : '',
    group ? `Grupa katalogu: ${group}` : '',
    path ? `Ścieżka katalogowa: ${path}` : '',
    source ? `Źródło zapytania: ${source}` : '',
  ].filter(Boolean);
  return lines.length ? lines.join('\n') : '';
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return NextResponse.json({ ok: false, error: 'Nieprawidłowy format żądania.' }, { status: 415 });
    }

    const body = await request.json();
    const contact = text(body.contact, 160);
    const email = text(body.email, 254).toLowerCase();
    const product = text(body.product, 300);

    if (!contact || !isEmail(email) || !product) {
      return NextResponse.json(
        { ok: false, error: 'Uzupełnij osobę kontaktową, poprawny adres e-mail oraz produkt lub usługę.' },
        { status: 400 },
      );
    }

    const userDetails = text(body.details, 5000);
    const context = catalogContext(body as Record<string, unknown>);
    const combinedDetails = [context, userDetails].filter(Boolean).join('\n\n').slice(0, 5000) || null;

    const offer = await prisma.offer.create({
      data: {
        number: referenceNumber(),
        company: text(body.company, 200) || null,
        contact,
        email,
        phone: text(body.phone, 80) || null,
        product,
        quantity: text(body.quantity, 120) || null,
        market: text(body.market, 120) || null,
        budget: text(body.budget, 120) || null,
        details: combinedDetails,
      },
      select: {
        id: true,
        number: true,
        product: true,
        status: true,
        createdAt: true,
      },
    });

    const financingRequested = body.financingRequested === true;
    const financingAmount = text(body.financingAmount, 120) || null;

    try {
      await ensureSalesAutomationCase(offer.id, { financingRequested, financingAmount });
    } catch (automationError) {
      console.error('Sales automation initialization failed', automationError);
    }

    try {
      await syncTransactionFormalities(offer.id, { financingRequested, financingAmount });
    } catch (formalitiesError) {
      console.error('Transaction formalities initialization failed', formalitiesError);
    }

    const { id: _id, ...publicOffer } = offer;
    return NextResponse.json({ ok: true, offer: publicOffer }, { status: 201, headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('B2B offer submission failed', error);
    return NextResponse.json(
      { ok: false, error: 'Nie udało się zapisać zapytania. Spróbuj ponownie lub skontaktuj się e-mailem.' },
      { status: 500 },
    );
  }
}
