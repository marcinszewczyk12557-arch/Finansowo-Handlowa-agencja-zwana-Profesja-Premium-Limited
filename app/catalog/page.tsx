import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HierarchicalCatalog from '../../components/HierarchicalCatalog';
import FranchiseCatalog from '../../components/FranchiseCatalog';
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
        <p>Asortyment agencji łączy publiczny katalog zapytań z wewnętrzną kwalifikacją dostawców. Dane źródłowe kontrahentów, warunki zakupu i negocjacje pozostają poufne, natomiast klient otrzymuje ofertę PROFESJA z parametrami, ceną i warunkami potwierdzonymi dla konkretnej transakcji.</p>
      </section>
      <FranchiseCatalog mode='catalog'/>
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
