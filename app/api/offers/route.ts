import { randomBytes } from 'node:crypto';
import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

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
        number: true,
        product: true,
        status: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ ok: true, offer }, { status: 201, headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('B2B offer submission failed', error);
    return NextResponse.json(
      { ok: false, error: 'Nie udało się zapisać zapytania. Spróbuj ponownie lub skontaktuj się e-mailem.' },
      { status: 500 },
    );
  }
}
