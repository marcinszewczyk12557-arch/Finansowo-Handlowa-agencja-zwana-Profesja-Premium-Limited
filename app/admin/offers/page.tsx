import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function AdminOffers() {
  return (
    <>
      <Header />
      <main className="section">
        <p className="eyebrow">Panel administratora</p>
        <h1>Zapytania i oferty B2B</h1>
        <p>Centrum robocze do obsługi zapytań klientów, przygotowania wycen i kontroli kolejnych etapów współpracy.</p>

        <section className="admin-stats">
          <article className="card"><strong>0</strong><span>nowych zapytań</span></article>
          <article className="card"><strong>0</strong><span>ofert w przygotowaniu</span></article>
          <article className="card"><strong>0</strong><span>ofert zaakceptowanych</span></article>
        </section>

        <section className="grid">
          <article className="card">
            <h2>Nowe zapytanie</h2>
            <p>Sprawdź formularz klienta i przygotuj wiadomość ofertową.</p>
            <Link href="/offers/new"><button>Otwórz formularz</button></Link>
          </article>
          <article className="card">
            <h2>Katalog</h2>
            <p>Zweryfikuj opis, dokumentację, gwarancję i materiały dla pozycji będącej podstawą oferty.</p>
            <Link href="/admin/products"><button>Zarządzaj katalogiem</button></Link>
          </article>
          <article className="card">
            <h2>Widok klienta</h2>
            <p>Sprawdź, jakie informacje są obecnie widoczne publicznie.</p>
            <Link href="/catalog"><button>Otwórz katalog publiczny</button></Link>
          </article>
        </section>

        <section className="section admin-note">
          <h2>Proces ofertowy</h2>
          <p>Zapytanie → weryfikacja parametrów → potwierdzenie dokumentacji → wycena → przedstawienie warunków → akceptacja → realizacja.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
