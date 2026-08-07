import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
          <h2>Pełny katalog B2B — kategorie, podkategorie i kolejne poziomy</h2>
          <p>
            Katalog został zbudowany wielopoziomowo: kategoria główna → podkategoria → podpodkategoria / element szczegółowy.
            Każdy najniższy element struktury zawiera dokładnie pięć różnych pozycji sprzedażowych. Wszystkie ceny katalogowe
            zostały skorygowane o 19% w dół względem poprzedniej wersji. Każda oferta zawiera tytuł, opis, zastosowanie,
            prezentację, instrukcję obsługi oraz skorygowaną cenę; dokumentacja i parametry są potwierdzane dla finalnego modelu.
          </p>
        </section>

        <RedmagicSourceGallery />
        <HierarchicalCatalog />
      </main>
      <Footer />
    </>
  );
}
