import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

function text(value: unknown, max = 500) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function referenceNumber() {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replace(/-/g, '');
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `PPL-${date}-${random}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const contact = text(body.contact, 160);
    const email = text(body.email, 254).toLowerCase();
    const product = text(body.product, 300);

    if (!contact || !email || !product || !email.includes('@')) {
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

    return NextResponse.json({ ok: true, offer }, { status: 201 });
  } catch (error) {
    console.error('B2B offer submission failed', error);
    return NextResponse.json(
      { ok: false, error: 'Nie udało się zapisać zapytania. Spróbuj ponownie lub skontaktuj się e-mailem.' },
      { status: 500 },
    );
  }
}
