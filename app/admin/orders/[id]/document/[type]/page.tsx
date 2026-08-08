import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import PrintDocumentButton from '../../../../../../components/PrintDocumentButton';
import { isOwnerSession, ownerAuthConfigured } from '../../../../../../lib/ownerAuth';
import { prisma } from '../../../../../../lib/prisma';

export const dynamic = 'force-dynamic';

const documentTypes = {
  confirmation: {
    title: 'POTWIERDZENIE ZAMÓWIENIA B2B',
    numberField: 'orderConfirmation' as const,
    fallbackPrefix: 'PZ',
  },
  offer: {
    title: 'OFERTA HANDLOWA B2B',
    numberField: 'commercialOffer' as const,
    fallbackPrefix: 'OF',
  },
  fulfillment: {
    title: 'DOKUMENT REALIZACJI ZAMÓWIENIA',
    numberField: 'fulfillmentDocument' as const,
    fallbackPrefix: 'DR',
  },
};

export default async function OrderDocumentPage({ params }: { params: Promise<{ id: string; type: string }> }) {
  if (!ownerAuthConfigured()) redirect('/owner/login?error=config');
  if (!(await isOwnerSession())) redirect('/owner/login');

  const { id, type } = await params;
  const orderId = Number(id);
  const config = documentTypes[type as keyof typeof documentTypes];
  if (!Number.isInteger(orderId) || orderId <= 0 || !config) notFound();

  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: { offer: true },
  });
  if (!order) notFound();

  const documentNumber = order[config.numberField] || `${config.fallbackPrefix}/${order.number}`;
  const issueDate = order.updatedAt.toLocaleDateString('pl-PL');

  return (
    <main className="print-document" style={{ maxWidth: 980, margin: '0 auto', padding: '40px 28px', background: '#fff', color: '#111' }}>
      <style>{`@media print { .print-actions { display:none !important; } body { background:#fff !important; } .print-document { max-width:none !important; padding:0 !important; } }`}</style>
      <div className="print-actions" style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 28 }}>
        <Link href="/admin/orders">← Wróć do zamówień</Link>
        <PrintDocumentButton />
      </div>

      <header style={{ borderBottom: '3px solid #111', paddingBottom: 18, marginBottom: 28 }}>
        <p style={{ margin: 0, fontWeight: 700 }}>PROFESJA PREMIUM LIMITED™</p>
        <h1 style={{ margin: '8px 0 4px' }}>{config.title}</h1>
        <p style={{ margin: 0 }}>Nr dokumentu: <strong>{documentNumber}</strong> • Data: {issueDate}</p>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 28 }}>
        <div>
          <h2>Sprzedawca / obsługa handlowa</h2>
          <p><strong>PROFESJA PREMIUM LIMITED™</strong></p>
          <p>Agencja Finansowo-Handlowa B2B</p>
          <p>Kontakt: profesja.premium@gmail.com</p>
        </div>
        <div>
          <h2>Klient B2B</h2>
          <p><strong>{order.company || order.contact}</strong></p>
          <p>Osoba kontaktowa: {order.contact}</p>
          <p>E-mail: {order.email}</p>
          {order.shippingAddress ? <p>Adres dostawy: {order.shippingAddress}</p> : null}
        </div>
      </section>

      <section style={{ border: '1px solid #bbb', padding: 20, marginBottom: 24 }}>
        <h2>Dane transakcji</h2>
        <p><strong>Zamówienie:</strong> {order.number}</p>
        <p><strong>Zapytanie / sprawa:</strong> {order.offer.number}</p>
        <p><strong>Produkt / usługa:</strong> {order.product}</p>
        <p><strong>Ilość:</strong> {order.quantity || 'zgodnie z ustaleniami handlowymi'}</p>
        <p><strong>Wartość / budżet:</strong> {order.amount || 'zgodnie z zaakceptowaną wyceną'}</p>
        <p><strong>Status:</strong> {order.status}</p>
      </section>

      <section style={{ border: '1px solid #bbb', padding: 20, marginBottom: 24 }}>
        <h2>Realizacja i dostawa</h2>
        <p><strong>Sposób dostawy:</strong> {order.shippingMethod || 'do potwierdzenia'}</p>
        <p><strong>Przewoźnik:</strong> {order.carrier || 'do potwierdzenia'}</p>
        <p><strong>Numer przesyłki:</strong> {order.trackingNumber || '—'}</p>
        <p><strong>Planowany termin:</strong> {order.estimatedDelivery ? order.estimatedDelivery.toLocaleString('pl-PL') : 'do potwierdzenia'}</p>
      </section>

      <section style={{ marginBottom: 34 }}>
        <h2>Warunki i uwagi</h2>
        <p>{order.notes || 'Realizacja zgodnie z zaakceptowaną ofertą, ustaleniami handlowymi oraz potwierdzonym zakresem zamówienia.'}</p>
        <p>Dokładne parametry produktu, gwarancji, transportu i dokumentacji są wiążące zgodnie z zaakceptowaną ofertą i potwierdzeniem zamówienia.</p>
      </section>

      <footer style={{ borderTop: '1px solid #777', paddingTop: 18 }}>
        <p>PROFESJA PREMIUM LIMITED™ • Dokument wygenerowany z systemu obsługi B2B.</p>
        <p>© PROFESJA PREMIUM LIMITED™ — Wszelkie prawa zastrzeżone.</p>
      </footer>
    </main>
  );
}
