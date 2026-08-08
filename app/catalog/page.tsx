import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HierarchicalCatalog from '../../components/HierarchicalCatalog';
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
    </main>
    <Footer/>
  </>;
}
