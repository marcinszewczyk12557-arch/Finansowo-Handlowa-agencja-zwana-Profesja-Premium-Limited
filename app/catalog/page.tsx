import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GlobalBrandsShowcase from '../../components/GlobalBrandsShowcase';
import HierarchicalCatalog from '../../components/HierarchicalCatalog';
import './catalog-enhancements.css';

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero compact-hero">
          <p className="eyebrow">Katalog Profesja Premium Limited</p>
          <h2>Rozbudowany katalog B2B — sourcing, marki globalne, prezentacje i indywidualne wyceny</h2>
          <p>
            Katalog działa wielopoziomowo: kategoria główna → podkategoria → element szczegółowy → minimum dziesięć wariantów handlowych.
            Każda pozycja otrzymuje profesjonalny opis, zastosowanie, zakres prezentacji i dokumentacji. Ceny PROFESJA są przygotowywane
            według wewnętrznej polityki handlowej. Dla światowych marek dokładny model, autentyczność, dostępność, gwarancja i cena są
            potwierdzane indywidualnie przed ofertą.
          </p>
        </section>

        <GlobalBrandsShowcase />
        <HierarchicalCatalog />
      </main>
      <Footer />
    </>
  );
}