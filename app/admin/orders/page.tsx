import Link from 'next/link';
import { redirect } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import OrderStatusControl from '../../../components/OrderStatusControl';
import OrderFulfillmentControl from '../../../components/OrderFulfillmentControl';
import { isOwnerSession, ownerAuthConfigured } from '../../../lib/ownerAuth';
import { prisma } from '../../../lib/prisma';

export const dynamic = 'force-dynamic';

export default async function AdminOrders() {
  if (!ownerAuthConfigured()) redirect('/owner/login?error=config');
  if (!(await isOwnerSession())) redirect('/owner/login');

  let orders: Awaited<ReturnType<typeof prisma.order.findMany>> = [];
  let databaseError = false;

  try {
    orders = await prisma.order.findMany({ orderBy: { createdAt: 'desc' }, take: 100 });
  } catch (error) {
    console.error('OWNER orders workspace failed', error);
    databaseError = true;
  }

  const active = orders.filter((order) => !['COMPLETED', 'CANCELLED'].includes(order.status)).length;
  const shipping = orders.filter((order) => ['READY_TO_SHIP', 'SHIPPED'].includes(order.status)).length;
  const completed = orders.filter((order) => order.status === 'COMPLETED').length;

  return (
    <>
      <Header />
      <main className="section">
        <p className="eyebrow">OWNER • Zamówienia B2B</p>
        <h1>Centrum realizacji zamówień</h1>
        <p>Obsługa zaakceptowanych zamówień, dokumentów handlowych, danych wysyłki i statusów realizacji.</p>

        <section className="admin-stats">
          <article className="card"><strong>{orders.length}</strong><span>wszystkich zamówień</span></article>
          <article className="card"><strong>{active}</strong><span>aktywnych</span></article>
          <article className="card"><strong>{shipping}</strong><span>w przygotowaniu / wysyłce</span></article>
          <article className="card"><strong>{completed}</strong><span>zakończonych</span></article>
        </section>

        {databaseError ? (
          <section className="section admin-note"><h2>Baza danych niedostępna</h2><p>Sprawdź DATABASE_URL i migracje Prisma.</p></section>
        ) : null}

        {!databaseError && orders.length ? (
          <section className="section">
            <div className="grid">
              {orders.map((order) => (
                <article className="card" key={order.id}>
                  <p className="eyebrow">{order.status}</p>
                  <h3>{order.number}</h3>
                  <p><strong>Firma:</strong> {order.company || '—'}</p>
                  <p><strong>Kontakt:</strong> {order.contact}</p>
                  <p><strong>E-mail:</strong> <a href={`mailto:${order.email}`}>{order.email}</a></p>
                  <p><strong>Produkt / usługa:</strong> {order.product}</p>
                  <p><strong>Ilość:</strong> {order.quantity || '—'}</p>
                  <p><strong>Wartość / budżet:</strong> {order.amount || '—'}</p>
                  {order.carrier || order.trackingNumber ? <p><strong>Dostawa:</strong> {order.carrier || '—'} {order.trackingNumber ? `• ${order.trackingNumber}` : ''}</p> : null}
                  {order.estimatedDelivery ? <p><strong>Planowana dostawa:</strong> {order.estimatedDelivery.toLocaleString('pl-PL')}</p> : null}
                  {order.orderConfirmation ? <p><strong>Potwierdzenie zamówienia:</strong> {order.orderConfirmation}</p> : null}
                  {order.commercialOffer ? <p><strong>Oferta / wycena:</strong> {order.commercialOffer}</p> : null}
                  {order.fulfillmentDocument ? <p><strong>Dokument realizacji:</strong> {order.fulfillmentDocument}</p> : null}
                  <OrderStatusControl orderId={order.id} currentStatus={order.status} />
                  <OrderFulfillmentControl order={{
                    id: order.id,
                    shippingMethod: order.shippingMethod,
                    shippingAddress: order.shippingAddress,
                    carrier: order.carrier,
                    trackingNumber: order.trackingNumber,
                    trackingUrl: order.trackingUrl,
                    estimatedDelivery: order.estimatedDelivery?.toISOString() || null,
                    orderConfirmation: order.orderConfirmation,
                    commercialOffer: order.commercialOffer,
                    fulfillmentDocument: order.fulfillmentDocument,
                    notes: order.notes,
                  }} />
                  <p><small>Utworzono: {order.createdAt.toLocaleString('pl-PL')}</small></p>
                  <p><small>Aktualizacja: {order.updatedAt.toLocaleString('pl-PL')}</small></p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {!databaseError && !orders.length ? (
          <section className="section admin-note"><h2>Brak zamówień</h2><p>Zamówienie pojawi się tutaj po utworzeniu go z zaakceptowanej oferty.</p></section>
        ) : null}

        <section className="grid">
          <article className="card"><h2>Zapytania i oferty</h2><p>Wróć do obsługi zapytań i akceptacji ofert.</p><Link href="/admin/offers"><button>Otwórz oferty</button></Link></article>
          <article className="card"><h2>Panel OWNER</h2><p>Wróć do głównego obszaru zarządczego.</p><Link href="/owner"><button>Panel OWNER</button></Link></article>
          <article className="card"><h2>Widok klienta</h2><p>Sprawdź publiczny mechanizm weryfikacji statusu zamówienia.</p><Link href="/dashboard"><button>Panel klienta</button></Link></article>
        </section>
      </main>
      <Footer />
    </>
  );
}
