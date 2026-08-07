import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GlobalBrandsShowcase from '../../components/GlobalBrandsShowcase';
import HierarchicalCatalog from '../../components/HierarchicalCatalog';
import RedmagicSourceGallery from '../../components/RedmagicSourceGallery';
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
            Katalog działa wielopoziomowo: kategoria główna → podkategoria → element szczegółowy → pięć wariantów handlowych.
            Każda pozycja otrzymuje profesjonalny opis, zastosowanie, zakres prezentacji i dokumentacji. Dla kategorii sourcingowych
            ceny PROFESJA są prezentowane z narzutem od +72% do +84% względem benchmarku Alibaba. Dla światowych marek dokładny
            model, autentyczność, dostępność, kanał dystrybucji, gwarancja i cena są potwierdzane indywidualnie przed ofertą.
          </p>
        </section>

        <GlobalBrandsShowcase />
        <RedmagicSourceGallery />
        <HierarchicalCatalog />
      </main>
      <Footer />
    </>
  );
}
