import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HierarchicalCatalog from '../../components/HierarchicalCatalog';
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
            Każdy najniższy element struktury zawiera dokładnie pięć różnych pozycji sprzedażowych. Na stronie wyświetlana jest
            końcowa cena katalogowa agencji; dostępność, dokumentacja, certyfikaty i warunki gwarancji są potwierdzane dla
            konkretnego wariantu przed przedstawieniem wiążącej oferty.
          </p>
        </section>

        <HierarchicalCatalog />
      </main>
      <Footer />
    </>
  );
}
