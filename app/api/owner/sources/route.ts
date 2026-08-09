import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { isOwnerSession } from '../../../../lib/ownerAuth';

function text(value: unknown, max = 1000) {
  return typeof value === 'string' ? value.trim().replace(/\u0000/g, '').slice(0, max) : '';
}

function validUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:';
  } catch {
    return false;
  }
}

async function authorized() {
  return await isOwnerSession();
}

export async function GET() {
  if (!(await authorized())) return NextResponse.json({ ok: false }, { status: 401 });
  const records = await prisma.ownerSupplierSource.findMany({ orderBy: { updatedAt: 'desc' } });
  return NextResponse.json({ ok: true, records }, { headers: { 'Cache-Control': 'no-store, private' } });
}

export async function POST(request: Request) {
  if (!(await authorized())) return NextResponse.json({ ok: false }, { status: 401 });
  if (!(request.headers.get('content-type') || '').includes('application/json')) {
    return NextResponse.json({ ok: false, error: 'Nieprawidłowy format.' }, { status: 415 });
  }

  const body = await request.json();
  const id = text(body.id, 80);
  const catalogPath = text(body.catalogPath, 1200);
  const publicName = text(body.publicName, 300);
  const supplierUrl = text(body.supplierUrl, 2000);
  const supplierName = text(body.supplierName, 300) || null;
  const supplierType = ['MANUFACTURER', 'WHOLESALER', 'SUPPLIER'].includes(text(body.supplierType, 30)) ? text(body.supplierType, 30) : 'SUPPLIER';
  const platform = text(body.platform, 60) || 'ALIBABA';
  const status = ['DRAFT', 'VERIFIED', 'READY'].includes(text(body.status, 30)) ? text(body.status, 30) : 'DRAFT';
  const warrantyMonths = Math.max(0, Math.min(120, Number.parseInt(text(String(body.warrantyMonths ?? ''), 4), 10) || 12));

  if (!catalogPath || !publicName || !supplierUrl || !validUrl(supplierUrl)) {
    return NextResponse.json({ ok: false, error: 'Ścieżka, nazwa i poprawny adres HTTPS źródła są wymagane.' }, { status: 400 });
  }

  const data = {
    catalogPath,
    publicName,
    supplierName,
    supplierType,
    platform,
    supplierUrl,
    sku: text(body.sku, 200) || null,
    basePrice: text(body.basePrice, 120) || null,
    currency: text(body.currency, 12) || 'USD',
    warrantyMonths,
    notes: text(body.notes, 5000) || null,
    status,
  };

  const record = id
    ? await prisma.ownerSupplierSource.upsert({ where: { id }, create: { id, ...data }, update: data })
    : await prisma.ownerSupplierSource.create({ data });

  return NextResponse.json({ ok: true, record }, { status: 200, headers: { 'Cache-Control': 'no-store, private' } });
}

export async function DELETE(request: Request) {
  if (!(await authorized())) return NextResponse.json({ ok: false }, { status: 401 });
  const id = new URL(request.url).searchParams.get('id')?.trim() || '';
  if (!id) return NextResponse.json({ ok: false, error: 'Brak identyfikatora.' }, { status: 400 });
  await prisma.ownerSupplierSource.delete({ where: { id } }).catch(() => null);
  return NextResponse.json({ ok: true }, { headers: { 'Cache-Control': 'no-store, private' } });
}
