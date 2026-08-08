import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FullCatalogTree from '../../components/FullCatalogTree';
import HierarchicalCatalog from '../../components/HierarchicalCatalog';
import InstallmentCalculator from '../../components/InstallmentCalculator';
import LandedCostCalculator from '../../components/LandedCostCalculator';
import './catalog-enhancements.css';
import './full-catalog-tree.css';

export default function CatalogPage(){
  return <>
    <Header/>
    <main>
      <section className='hero compact-hero'>
        <p className='eyebrow'>PROFESJA PREMIUM LIMITED™</p>
        <h2>Maksymalnie rozbudowany katalog sourcingowy B2B</h2>
        <p>Pełne drzewo obejmuje szeroki zakres kategorii, grup produktowych i wariantów dostępnych do indywidualnego pozyskania. Osobno publikujemy oferty, dla których zakończono kwalifikację dostawcy i materiału źródłowego. Dzięki temu katalog jest bardzo szeroki, a status „zweryfikowana oferta” pozostaje zarezerwowany wyłącznie dla pozycji faktycznie potwierdzonych.</p>
      </section>
      <FullCatalogTree/>
      <HierarchicalCatalog/>
      <section className='section catalog-calculators'>
        <div className='taxonomy-leaf-heading'>
          <div><p className='eyebrow'>KALKULATORY OFERTY</p><h2>Finansowanie i pełny koszt importu</h2><p>Orientacyjne narzędzia do przygotowania zapytania. Finalne warunki są potwierdzane indywidualnie.</p></div>
        </div>
        <div className='catalog-calculator-grid'>
          <LandedCostCalculator/>
          <InstallmentCalculator/>
        </div>
      </section>
    </main>
    <Footer/>
  </>;
}
