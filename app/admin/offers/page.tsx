import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Prisma } from '@prisma/client';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import OfferStatusControl from '../../../components/OfferStatusControl';
import CreateOrderControl from '../../../components/CreateOrderControl';
import SalesAutomationControl from '../../../components/SalesAutomationControl';
import { isOwnerSession, ownerAuthConfigured } from '../../../lib/ownerAuth';
import { prisma } from '../../../lib/prisma';

export const dynamic = 'force-dynamic';
type OfferWithRelations = Prisma.OfferGetPayload<{ include: { order: true; automation: true } }>;

export default async function AdminOffers() {
  if (!ownerAuthConfigured()) redirect('/owner/login?error=config');
  if (!(await isOwnerSession())) redirect('/owner/login');

  let offers: OfferWithRelations[] = [];
  let databaseError = false;

  try {
    offers = await prisma.offer.findMany({ include: { order: true, automation: true }, orderBy: { createdAt: 'desc' }, take: 50 });
  } catch (error) {
    console.error('OWNER offers inbox failed', error);
    databaseError = true;
  }

  const newCount = offers.filter((offer) => offer.status === 'NEW').length;
  const preparingCount = offers.filter((offer) => offer.status === 'PREPARING').length;
  const acceptedCount = offers.filter((offer) => offer.status === 'ACCEPTED').length;
  const inProgressCount = offers.filter((offer) => offer.status === 'IN_PROGRESS').length;
  const completedCount = offers.filter((offer) => offer.status === 'COMPLETED').length;
  const orderCount = offers.filter((offer) => offer.order).length;
  const financingCount = offers.filter((offer) => offer.automation?.financingRequested).length;

  return (
    <>
      <Header />
      <main className="section">
        <p className="eyebrow">OWNER • Panel administratora</p>
        <h1>Zapytania, oferty i zamówienia B2B</h1>
        <p>Chroniona skrzynka operacyjna do obsługi zapytań, indywidualnych wycen, finansowania organizowanego przez partnerów, zamówień i realizacji.</p>

        <section className="admin-stats">
          <article className="card"><strong>{newCount}</strong><span>nowych zapytań</span></article>
          <article className="card"><strong>{preparingCount}</strong><span>ofert w przygotowaniu</span></article>
          <article className="card"><strong>{acceptedCount}</strong><span>ofert zaakceptowanych</span></article>
          <article className="card"><strong>{financingCount}</strong><span>spraw z finansowaniem</span></article>
          <article className="card"><strong>{orderCount}</strong><span>utworzonych zamówień</span></article>
          <article className="card"><strong>{completedCount}</strong><span>zakończonych</span></article>
        </section>

        <section className="section admin-note">
          <h2>Zasada poufności automatyzacji</h2>
          <p>Domyślny poziom to <strong>STRICT</strong>. Dane o konkurencji, kontaktach zawodowych z konkurencją, informacje z miejsca pracy, dane osobowe oraz tajemnica handlowa nie są przeznaczone do udostępniania poza uprawnionym procesem transakcyjnym. Integracje zewnętrzne mają domyślnie zablokowany eksport danych.</p>
        </section>

        {databaseError ? (
          <section className="section admin-note">
            <h2>Baza danych nie jest jeszcze dostępna</h2>
            <p>Skonfiguruj DATABASE_URL i uruchom migracje Prisma. Po połączeniu baza automatycznie zasili ten widok rzeczywistymi zapytaniami B2B.</p>
          </section>
        ) : null}

        {!databaseError && offers.length ? (
          <section className="section">
            <p className="eyebrow">Najnowsze zgłoszenia</p>
            <h2>Ostatnie {offers.length} zapytań</h2>
            <div className="grid">
              {offers.map((offer) => (
                <article className="card" key={offer.id}>
                  <p className="eyebrow">{offer.status}</p>
                  <h3>{offer.number}</h3>
                  <p><strong>Firma:</strong> {offer.company || '—'}</p>
                  <p><strong>Kontakt:</strong> {offer.contact}</p>
                  <p><strong>E-mail:</strong> <a href={`mailto:${offer.email}`}>{offer.email}</a></p>
                  <p><strong>Telefon:</strong> {offer.phone || '—'}</p>
                  <p><strong>Produkt / usługa:</strong> {offer.product}</p>
                  <p><strong>Ilość:</strong> {offer.quantity || '—'} • <strong>Rynek:</strong> {offer.market || '—'}</p>
                  <p><strong>Budżet:</strong> {offer.budget || '—'}</p>
                  {offer.details ? <p><strong>Wymagania:</strong> {offer.details}</p> : null}
                  {offer.automation ? (
                    <div className="admin-note" style={{ marginTop: 12 }}>
                      <p><strong>Automatyzacja:</strong> {offer.automation.stage}</p>
                      <p><strong>Następna czynność:</strong> {offer.automation.nextAction || '—'}</p>
                      <p><small>Poufność: {offer.automation.confidentialityLevel} • eksport zewnętrzny: {offer.automation.externalDisclosureAllowed ? 'dozwolony' : 'zablokowany'}</small></p>
                    </div>
                  ) : null}
                  <OfferStatusControl offerId={offer.id} currentStatus={offer.status} />
                  <SalesAutomationControl
                    offerId={offer.id}
                    financingRequested={offer.automation?.financingRequested}
                    financingAmount={offer.automation?.financingAmount}
                    financingStatus={offer.automation?.financingStatus}
                  />
                  <CreateOrderControl offerId={offer.id} offerStatus={offer.status} orderNumber={offer.order?.number} />
                  <p><small>{offer.createdAt.toLocaleString('pl-PL')}</small></p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {!databaseError && !offers.length ? (
          <section className="section admin-note">
            <h2>Brak zapisanych zapytań</h2>
            <p>Pierwsze zgłoszenie wysłane przez formularz B2B pojawi się tutaj automatycznie.</p>
          </section>
        ) : null}

        <section className="grid">
          <article className="card"><h2>Zamówienia</h2><p>Przejdź do centrum realizacji, dokumentów i wysyłki.</p><Link href="/admin/orders"><button>Otwórz zamówienia</button></Link></article>
          <article className="card"><h2>Katalog</h2><p>Zweryfikuj opis, dokumentację, gwarancję i materiały dla pozycji będącej podstawą oferty.</p><Link href="/admin/products"><button>Zarządzaj katalogiem</button></Link></article>
          <article className="card"><h2>Panel OWNER</h2><p>Wróć do głównego chronionego obszaru zarządzania projektem.</p><Link href="/owner"><button>Panel OWNER</button></Link></article>
        </section>

        <section className="section admin-note">
          <h2>Proces handlowy</h2>
          <p>INTAKE → QUALIFIED → QUOTE_PREPARATION → CUSTOMER_DECISION → opcjonalnie FINANCING_PREPARATION → ORDER_CREATION → FULFILLMENT → COMPLETED. Automatyzacja organizuje proces, lecz nie podejmuje decyzji kredytowych za instytucję finansującą.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
