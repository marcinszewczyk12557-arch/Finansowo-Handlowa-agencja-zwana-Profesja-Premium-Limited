import Link from 'next/link';
import { redirect } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AutomationRunControl from '../../../components/AutomationRunControl';
import FormalitiesStatusControl from '../../../components/FormalitiesStatusControl';
import { isOwnerSession, ownerAuthConfigured } from '../../../lib/ownerAuth';
import { prisma } from '../../../lib/prisma';
import { formalitiesReadyForExecution } from '../../../lib/transactionFormalities';

export const dynamic = 'force-dynamic';

const formalitiesLabels = [
  ['clientDeclarationStatus', 'Oświadczenie klienta'],
  ['insuranceConsentStatus', 'Ubezpieczenie / warunek ubezpieczeniowy'],
  ['shippingConsentStatus', 'Warunki wysyłki'],
  ['businessUseConsentStatus', 'Przeznaczenie biznesowe'],
  ['interestConsentStatus', 'Warunki oprocentowania'],
  ['intermediationConsentStatus', 'Pośrednictwo'],
  ['monthlySettlementStatus', 'Rozliczenia miesięczne'],
  ['earlyTerminationStatus', 'Wcześniejsze zakończenie'],
  ['finalSignatureStatus', 'Podpis końcowy'],
] as const;

function statusLabel(status: string) {
  if (status === 'ACCEPTED') return 'zaakceptowano';
  if (status === 'NOT_APPLICABLE') return 'nie dotyczy';
  if (status === 'REJECTED') return 'odrzucono';
  return 'oczekuje';
}

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
        offer: { include: { order: true, formalities: true } },
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
  const readyFormalities = cases.filter((item) => item.offer.formalities && formalitiesReadyForExecution(item.offer.formalities)).length;

  return (
    <>
      <Header />
      <main className="section">
        <p className="eyebrow">OWNER • Automatyzacja</p>
        <h1>Automatyzacja Finansowo‑Sprzedażowa</h1>
        <p>Centralny proces od zapytania przez ofertę i opcjonalne finansowanie po formalności, zamówienie, dokumenty, logistykę i zamknięcie sprawy.</p>

        <section className="admin-stats">
          <article className="card"><strong>{cases.length}</strong><span>aktywnych/ostatnich spraw</span></article>
          <article className="card"><strong>{financing}</strong><span>ścieżek finansowania</span></article>
          <article className="card"><strong>{readyFormalities}</strong><span>pakietów formalności gotowych</span></article>
          <article className="card"><strong>{blocked}</strong><span>spraw z blokadą eksportu</span></article>
          <article className="card"><strong>{completed}</strong><span>zakończonych</span></article>
        </section>

        <section className="section admin-note">
          <h2>Formalności + poufność STRICT</h2>
          <p>Dane wynikające z negocjacji i transakcji mogą być uzupełniane automatycznie. Zgody oraz podpis końcowy pozostają czynnościami wymagającymi odrębnej akceptacji i nie są ustawiane przez automat.</p>
          <p>OWNER może jedynie zarejestrować status, który został wcześniej rzeczywiście potwierdzony przez klienta. Każda taka zmiana jest logowana jako ręcznie zweryfikowana czynność wraz z krótkim odniesieniem dowodowym.</p>
          <p>Domyślnie żadna sprawa nie zezwala na zewnętrzne ujawnianie danych. Informacje o konkurencji, kontaktach zawodowych z konkurencją, informacje z pracy, dane osobowe, źródła dostaw, marże i tajemnice handlowe pozostają poza automatycznym eksportem.</p>
          <p>Automatyzacja finansowa przygotowuje proces i rejestruje wynik partnera, ale nie podejmuje decyzji kredytowej ani nie zatwierdza finansowania w imieniu instytucji finansującej.</p>
        </section>

        {!databaseError ? <AutomationRunControl /> : null}

        {databaseError ? <section className="admin-note"><h2>Baza niedostępna</h2><p>Uruchom migracje i sprawdź DATABASE_URL.</p></section> : null}

        {!databaseError && cases.length ? (
          <section className="grid">
            {cases.map((item) => {
              const formalities = item.offer.formalities;
              const ready = formalities ? formalitiesReadyForExecution(formalities) : false;
              const acceptedCount = formalities
                ? formalitiesLabels.filter(([key]) => ['ACCEPTED', 'NOT_APPLICABLE'].includes(String(formalities[key]))).length
                : 0;
              return (
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

                  <div className="admin-note" style={{ marginTop: 14 }}>
                    <h3>Formalności transakcyjne</h3>
                    {formalities ? <>
                      <p><strong>Status:</strong> {ready ? 'GOTOWE DO DALSZEGO WYKONANIA' : `W TRAKCIE • ${acceptedCount}/${formalitiesLabels.length}`}</p>
                      <p><strong>Negocjacje:</strong> {formalities.negotiationStatus}</p>
                      <p><strong>Automatyczne uzupełnienie:</strong> {formalities.autoFilledAt ? formalities.autoFilledAt.toLocaleString('pl-PL') : '—'}</p>
                      <details>
                        <summary>Status zgód i podpisu</summary>
                        {formalitiesLabels.map(([key, label]) => <p key={key}><small><strong>{label}:</strong> {statusLabel(formalities[key])}</small></p>)}
                      </details>
                    </> : <p>Pakiet formalności jeszcze nie został utworzony dla tej sprawy. Pierwsza rejestracja zweryfikowanego statusu utworzy go automatycznie.</p>}
                    <FormalitiesStatusControl offerId={item.offer.id} />
                  </div>

                  {item.events?.length ? (
                    <details>
                      <summary>Ostatnie zdarzenia audytowe</summary>
                      {item.events.map((event: any) => <p key={event.id}><small>{event.createdAt.toLocaleString('pl-PL')} — {event.message}</small></p>)}
                    </details>
                  ) : null}
                </article>
              );
            })}
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
