import Link from 'next/link';
import { redirect } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import VeloxDispatcherControl from '../../../components/VeloxDispatcherControl';
import { isOwnerSession, ownerAuthConfigured } from '../../../lib/ownerAuth';
import { prisma } from '../../../lib/prisma';

export const dynamic = 'force-dynamic';

function dispatcherLabel(status: string) {
  const labels: Record<string, string> = {
    RECEIVED: 'PRZYJĘTE',
    CARRIER_SELECTED: 'PRZEWOŹNIK WYBRANY',
    PICKUP_SCHEDULED: 'ODBIÓR ZAPLANOWANY',
    PICKED_UP: 'ODEBRANO',
    IN_TRANSIT: 'W TRANSPORCIE',
    DELIVERED: 'DORĘCZONO',
    CANCELLED: 'ANULOWANO',
  };
  return labels[status] || status;
}

export default async function VeloxDispatcherDashboard() {
  if (!ownerAuthConfigured()) redirect('/owner/login?error=config');
  if (!(await isOwnerSession())) redirect('/owner/login');

  let orders: any[] = [];
  let databaseError = false;

  try {
    orders = await prisma.order.findMany({
      where: { product: { contains: 'VELOX', mode: 'insensitive' } },
      orderBy: { updatedAt: 'desc' },
      take: 100,
      include: { offer: { select: { number: true, market: true } } },
    });
  } catch (error) {
    console.error('VELOX dispatcher dashboard failed', error);
    databaseError = true;
  }

  const inTransit = orders.filter((order) => ['PICKED_UP', 'IN_TRANSIT'].includes(order.dispatcherStatus)).length;
  const waiting = orders.filter((order) => ['RECEIVED', 'CARRIER_SELECTED', 'PICKUP_SCHEDULED'].includes(order.dispatcherStatus)).length;
  const delivered = orders.filter((order) => order.dispatcherStatus === 'DELIVERED').length;

  return (
    <>
      <Header />
      <main className="section">
        <p className="eyebrow">OWNER • VELOX LOGISTICS</p>
        <h1>Dyspozytornia transportu door-to-door</h1>
        <p>Operacyjny panel organizacji odbioru, wyboru przewoźnika, śledzenia transportu i potwierdzenia doręczenia dla spraw VELOX.</p>

        <section className="admin-stats">
          <article className="card"><strong>{orders.length}</strong><span>zleceń VELOX</span></article>
          <article className="card"><strong>{waiting}</strong><span>oczekujących / planowanych</span></article>
          <article className="card"><strong>{inTransit}</strong><span>w transporcie</span></article>
          <article className="card"><strong>{delivered}</strong><span>doręczonych</span></article>
        </section>

        <section className="admin-note">
          <h2>Zasada działania dyspozytorni</h2>
          <p>VELOX rejestruje i koordynuje dyspozycję transportową. Przewoźnik, numer śledzenia, okno odbioru i dokument transportowy są przypisywane do konkretnego zamówienia. Status dyspozytorski jest prowadzony niezależnie od ogólnego statusu handlowego zamówienia.</p>
        </section>

        {databaseError ? <section className="admin-note"><h2>Baza danych niedostępna</h2><p>Sprawdź DATABASE_URL i wdrożenie najnowszej migracji Prisma.</p></section> : null}

        {!databaseError && orders.length ? (
          <section className="grid" style={{ marginTop: 24 }}>
            {orders.map((order) => (
              <article className="card" key={order.id}>
                <p className="eyebrow">{dispatcherLabel(order.dispatcherStatus)}</p>
                <h2>{order.number}</h2>
                <p><strong>Sprawa PPL:</strong> {order.offer.number}</p>
                <p><strong>Firma:</strong> {order.company || '—'}</p>
                <p><strong>Kontakt:</strong> {order.contact}</p>
                <p><strong>Trasa / rynek:</strong> {order.offer.market || '—'}</p>
                <p><strong>Przesyłka:</strong> {order.quantity || '—'}</p>
                <p><strong>Wartość / budżet:</strong> {order.amount || '—'}</p>
                <p><strong>Przewoźnik:</strong> {order.carrier || 'nie wybrano'}</p>
                <p><strong>Tracking:</strong> {order.trackingNumber || '—'}</p>
                {order.pickupAt ? <p><strong>Odbiór:</strong> {order.pickupAt.toLocaleString('pl-PL')}</p> : null}
                {order.estimatedDelivery ? <p><strong>Doręczenie planowane:</strong> {order.estimatedDelivery.toLocaleString('pl-PL')}</p> : null}
                <VeloxDispatcherControl order={{
                  id: order.id,
                  dispatcherStatus: order.dispatcherStatus,
                  pickupAddress: order.pickupAddress,
                  shippingAddress: order.shippingAddress,
                  shippingMethod: order.shippingMethod,
                  carrier: order.carrier,
                  trackingNumber: order.trackingNumber,
                  trackingUrl: order.trackingUrl,
                  pickupAt: order.pickupAt?.toISOString() || null,
                  estimatedDelivery: order.estimatedDelivery?.toISOString() || null,
                  transportDocument: order.transportDocument,
                  notes: order.notes,
                }} />
              </article>
            ))}
          </section>
        ) : null}

        {!databaseError && !orders.length ? <section className="admin-note"><h2>Brak zleceń VELOX</h2><p>Po zaakceptowaniu dyspozycji transportowej i utworzeniu zamówienia pojawi się ona w tym panelu.</p></section> : null}

        <section className="grid" style={{ marginTop: 24 }}>
          <article className="card"><h2>Nowa dyspozycja</h2><Link href="/shops/velox-logistics"><button>Otwórz VELOX</button></Link></article>
          <article className="card"><h2>Wszystkie zamówienia</h2><Link href="/admin/orders"><button>Centrum zamówień</button></Link></article>
          <article className="card"><h2>Automatyzacja</h2><Link href="/admin/automation"><button>Proces PROFESJA</button></Link></article>
        </section>
      </main>
      <Footer />
    </>
  );
}
