import Link from 'next/link';
import { redirect } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { isOwnerSession, ownerAuthConfigured } from '../../../lib/ownerAuth';
import { prisma } from '../../../lib/prisma';

export const dynamic = 'force-dynamic';

export default async function AutomationDashboard() {
  if (!ownerAuthConfigured()) redirect('/owner/login?error=config');
  if (!(await isOwnerSession())) redirect('/owner/login');

  let cases: any[] = [];
  let databaseError = false;

  try {
    cases = await prisma.salesAutomationCase.findMany({
      orderBy: { updatedAt: 'desc' },
      take: 50,
      include: {
        offer: { include: { order: true } },
        events: { orderBy: { createdAt: 'desc' }, take: 5 },
      },
    });
  } catch (error) {
    console.error('Automation dashboard failed', error);
    databaseError = true;
  }

  const financing = cases.filter((item) => item.financingRequested).length;
  const blocked = cases.filter((item) => !item.externalDisclosureAllowed).length;
  const completed = cases.filter((item) => item.stage === 'COMPLETED').length;

  return (
    <>
      <Header />
      <main className="section">
        <p className="eyebrow">OWNER • Automatyzacja</p>
        <h1>Automatyzacja Finansowo‑Sprzedażowa</h1>
        <p>Centralny widok procesu od zapytania przez ofertę i opcjonalne finansowanie po zamówienie, dokumenty, logistykę i zamknięcie sprawy.</p>

        <section className="admin-stats">
          <article className="card"><strong>{cases.length}</strong><span>aktywnych/ostatnich spraw</span></article>
          <article className="card"><strong>{financing}</strong><span>ścieżek finansowania</span></article>
          <article className="card"><strong>{blocked}</strong><span>spraw z blokadą eksportu</span></article>
          <article className="card"><strong>{completed}</strong><span>zakończonych</span></article>
        </section>

        <section className="section admin-note">
          <h2>Poufność STRICT</h2>
          <p>Domyślnie żadna sprawa nie zezwala na zewnętrzne ujawnianie danych. Informacje o konkurencji, kontaktach zawodowych z konkurencją, informacje z pracy, dane osobowe i tajemnice handlowe pozostają poza automatycznym eksportem. Integracje wymagają osobnego, kontrolowanego wdrożenia.</p>
        </section>

        {databaseError ? <section className="admin-note"><h2>Baza niedostępna</h2><p>Uruchom migracje i sprawdź DATABASE_URL.</p></section> : null}

        {!databaseError && cases.length ? (
          <section className="grid">
            {cases.map((item) => (
              <article className="card" key={item.id}>
                <p className="eyebrow">{item.stage}</p>
                <h2>{item.offer.number}</h2>
                <p><strong>Produkt/usługa:</strong> {item.offer.product}</p>
                <p><strong>Tryb:</strong> {item.mode}</p>
                <p><strong>Finansowanie:</strong> {item.financingRequested ? item.financingStatus : 'nie dotyczy'}</p>
                <p><strong>Poufność:</strong> {item.confidentialityLevel}</p>
                <p><strong>Eksport zewnętrzny:</strong> {item.externalDisclosureAllowed ? 'dozwolony' : 'ZABLOKOWANY'}</p>
                <p><strong>Następna czynność:</strong> {item.nextAction || '—'}</p>
                {item.offer.order ? <p><strong>Zamówienie:</strong> {item.offer.order.number} • {item.offer.order.status}</p> : null}
                {item.events?.length ? (
                  <details>
                    <summary>Ostatnie zdarzenia</summary>
                    {item.events.map((event: any) => <p key={event.id}><small>{event.createdAt.toLocaleString('pl-PL')} — {event.message}</small></p>)}
                  </details>
                ) : null}
              </article>
            ))}
          </section>
        ) : null}

        {!databaseError && !cases.length ? <section className="admin-note"><h2>Brak spraw automatyzacji</h2><p>Pojawią się po pierwszym nowym zapytaniu lub ręcznym uruchomieniu procesu z panelu ofert.</p></section> : null}

        <section className="grid">
          <article className="card"><h2>Zapytania i oferty</h2><Link href="/admin/offers"><button>Obsługuj sprawy</button></Link></article>
          <article className="card"><h2>Zamówienia</h2><Link href="/admin/orders"><button>Realizacja i logistyka</button></Link></article>
          <article className="card"><h2>Panel OWNER</h2><Link href="/admin"><button>Wróć do centrum</button></Link></article>
        </section>
      </main>
      <Footer />
    </>
  );
}
