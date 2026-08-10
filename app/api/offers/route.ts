import { randomBytes } from 'node:crypto';
import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { ensureSalesAutomationCase } from '../../../lib/salesAutomation';
import { syncTransactionFormalities } from '../../../lib/transactionFormalities';

const MAX_BODY_BYTES = 16 * 1024;

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

  const contact = text(body.contact, 160);
  const email = text(body.email, 254).toLowerCase();
  const product = text(body.product, 300);

  if (!contact || !isEmail(email) || !product) {
    return json(
      { ok: false, error: 'Uzupełnij osobę kontaktową, poprawny adres e-mail oraz produkt lub usługę.' },
      400,
    );
  }

  try {
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
        details: text(body.details, 5000) || null,
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
    return json({ ok: true, offer: publicOffer }, 201);
  } catch (error) {
    console.error('B2B offer submission failed', error);
    return json(
      { ok: false, error: 'Nie udało się zapisać zapytania. Spróbuj ponownie lub skontaktuj się e-mailem.' },
      500,
    );
  }
}
