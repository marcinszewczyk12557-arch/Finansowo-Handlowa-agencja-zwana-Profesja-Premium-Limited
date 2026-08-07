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
            profesja/premium/limited działa online w modelu globalnym. Kontakt handlowy prowadzimy indywidualnie,
            z naciskiem na precyzyjne określenie produktu, ilości, rynku docelowego i wymaganej dokumentacji.
          </p>
        </section>

        <section className="section contact-grid">
          <article className="card">
            <h2>Kontakt bezpośredni</h2>
            <p><strong>E-mail:</strong><br /><a href="mailto:profesja.premium@gmail.com">profesja.premium@gmail.com</a></p>
            <p><strong>Obszar działalności:</strong><br />Internet — działalność o zasięgu globalnym</p>
          </article>
          <article className="card">
            <h2>Obsługa zapytań</h2>
            <p>W zapytaniu podaj możliwie dokładne parametry, ilość, oczekiwany termin, rynek docelowy i wymagania dotyczące gwarancji lub dokumentacji.</p>
          </article>
        </section>

        <OfferForm />
      </main>
      <Footer />
    </>
  );
}
