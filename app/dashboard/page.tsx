import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="section">
        <p className="eyebrow">Strefa klienta</p>
        <h1>Panel Klienta B2B</h1>
        <p>Jedno miejsce do obsługi zapytań, ofert i dokumentacji związanej ze współpracą z profesja/premium/limited.</p>

        <section className="admin-stats" aria-label="Podsumowanie konta">
          <article className="card"><strong>0</strong><span>aktywnych zapytań</span></article>
          <article className="card"><strong>0</strong><span>ofert oczekujących</span></article>
          <article className="card"><strong>0</strong><span>zamówień w realizacji</span></article>
        </section>

        <section className="grid">
          <article className="card">
            <h2>Nowe zapytanie</h2>
            <p>Opisz produkt, ilość, termin i dodatkowe wymagania. Zapytanie może dotyczyć produktu katalogowego lub indywidualnego sourcingu.</p>
            <Link href="/offers/new"><button>Złóż zapytanie</button></Link>
          </article>

          <article className="card">
            <h2>Katalog premium</h2>
            <p>Przeglądaj aktualne kategorie i pozycje przygotowane do indywidualnej wyceny.</p>
            <Link href="/catalog"><button>Otwórz katalog</button></Link>
          </article>

          <article className="card">
            <h2>Sprzedaż ratalna</h2>
            <p>Skorzystaj z orientacyjnego kalkulatora rat. Ostateczne warunki zależą od konkretnej oferty finansowania.</p>
            <Link href="/#raty"><button>Policz ratę</button></Link>
          </article>
        </section>

        <section className="section admin-note">
          <h2>Historia współpracy</h2>
          <p>Po uruchomieniu warstwy danych w tej sekcji pojawią się historia zapytań, statusy ofert, dokumenty i informacje o realizacji zamówień.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
