import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GlobalBrandsShowcase from '../../components/GlobalBrandsShowcase';
import './catalog-enhancements.css';

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero compact-hero">
          <p className="eyebrow">Katalog Profesja Premium Limited</p>
          <h2>Katalog B2B — oryginalne marki, sourcing i indywidualne wyceny</h2>
          <p>
            Oferta obejmuje oryginalne produkty markowe oraz rozwiązania sourcingowe przygotowywane indywidualnie dla klienta.
            Ceny PROFESJA są przygotowywane według wewnętrznej polityki handlowej. Dokładny model, wariant, autentyczność,
            dostępność, gwarancja i cena są potwierdzane przed złożeniem wiążącej oferty.
          </p>
        </section>

        <GlobalBrandsShowcase />

        <section className="section-shell">
          <p className="eyebrow">Pełny katalog produktowy</p>
          <h2>Oferta konfigurowana według zapytania klienta</h2>
          <p>
            Rozbudowana prezentacja wariantów jest obecnie optymalizowana do szybkiego ładowania produkcyjnego.
            Zapytania o konkretną markę, model, ilość i konfigurację można składać bezpośrednio przez formularz ofertowy.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="/zapytanie">ZAPYTAJ O OFERTĘ B2B</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}