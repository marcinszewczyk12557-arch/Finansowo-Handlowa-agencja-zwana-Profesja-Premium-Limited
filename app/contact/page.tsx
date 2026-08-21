import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OfferForm from '../../components/OfferForm';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero compact-hero">
          <p className="eyebrow">Kontakt</p>
          <h2>Rozpocznij współpracę</h2>
          <p>
            PROFESJA PREMIUM LIMITED działa online w modelu globalnym. Kontakt handlowy rozpoczyna się przez
            formularz zgłoszeniowy, który porządkuje dane potrzebne do analizy produktu, ilości, rynku docelowego,
            finansowania, logistyki i wymaganej dokumentacji.
          </p>
        </section>

        <section className="section contact-grid">
          <article className="card">
            <h2>Bezpieczny kanał zgłoszeniowy</h2>
            <p>Publiczny adres skrzynki operacyjnej nie jest wyświetlany. Zgłoszenia są kierowane przez formularz do wewnętrznego procesu obsługi PROFESJA PREMIUM LIMITED.</p>
            <p><strong>Obszar działalności:</strong><br />Internet — działalność o zasięgu globalnym</p>
          </article>
          <article className="card">
            <h2>Obsługa zapytań</h2>
            <p>Podaj możliwie dokładne parametry, ilość, oczekiwany termin, rynek docelowy oraz wymagania dotyczące gwarancji, zgodności, logistyki i dokumentacji. Dane finansowe lub rozliczeniowe powinny być przekazywane dopiero w zabezpieczonym etapie właściwym dla danej sprawy.</p>
          </article>
        </section>

        <OfferForm />
      </main>
      <Footer />
    </>
  );
}
