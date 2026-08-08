import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HierarchicalCatalog from '../../components/HierarchicalCatalog';
import InstallmentCalculator from '../../components/InstallmentCalculator';
import LandedCostCalculator from '../../components/LandedCostCalculator';
import './catalog-enhancements.css';

export default function CatalogPage(){
  return <>
    <Header/>
    <main>
      <section className='hero compact-hero'>
        <p className='eyebrow'>PROFESJA PREMIUM LIMITED™</p>
        <h2>Wyselekcjonowany katalog produktów PREMIUM</h2>
        <p>Asortyment agencji jest celowo mniejszy niż oferta globalnych marketplace B2B. Publikujemy tylko unikalne pozycje, dla których wewnętrznie potwierdziliśmy dostawcę spełniającego minimalne kryteria stażu i ochrony transakcji. Każde konkretne zamówienie jest ponownie weryfikowane przed zawarciem transakcji.</p>
      </section>
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
