import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

function clean(value: string | null, max = 254) {
  return (value || '').trim().slice(0, max);
}

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
        createdAt: true,
        updatedAt: true,
        offer: { select: { number: true } },
      },
    });

    if (!order) {
      return NextResponse.json({ ok: false, error: 'Nie znaleziono zamówienia dla podanych danych.' }, { status: 404 });
    }

    return NextResponse.json({ ok: true, order });
  } catch (error) {
    console.error('Client order lookup failed', error);
    return NextResponse.json({ ok: false, error: 'Nie udało się sprawdzić zamówienia.' }, { status: 500 });
  }
}
