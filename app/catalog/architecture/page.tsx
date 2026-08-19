import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { catalogueScaleTarget, franchiseOfferMatrix, franchiseStoreCategories } from '../../../data/franchiseOfferMatrix';

export const metadata = { title: 'Catalogue Architecture Preview | PROFESJA PREMIUM LIMITED™' };

export default function CatalogueArchitecturePage(){
  return <><Header/><main className="section" style={{maxWidth:1180,margin:'0 auto'}}>
    <p className="eyebrow">CATALOGUE SCALE PREVIEW • ARCHITEKTURA KATALOGU</p>
    <h1>Architecture for ~200,000 B2B product positions</h1>
    <p>50 specialised stores × target ~4,000 positions per store. The current 250 sourcing profiles are a controlled seed layer, not 250 claims of verified inventory. Product records are intended to be loaded and paginated from a lawful, verified source rather than rendered as one static page.</p>
    <p><strong>PL:</strong> 50 wyspecjalizowanych sklepów × docelowo ok. 4 000 pozycji na sklep. Obecne 250 profili sourcingowych jest kontrolowaną warstwą startową, a nie deklaracją 250 zweryfikowanych stanów magazynowych. Rekordy produktowe mają być ładowane i stronicowane ze zgodnego z prawem, zweryfikowanego źródła zamiast renderowania całego katalogu statycznie.</p>

    <div className="catalog-meta" style={{marginTop:24}}>
      <div><strong>{catalogueScaleTarget.targetItems.toLocaleString('en-US')}</strong><span>target positions / pozycji docelowych</span></div>
      <div><strong>{franchiseStoreCategories.length}</strong><span>specialised stores / sklepów</span></div>
      <div><strong>{catalogueScaleTarget.defaultPageSize}</strong><span>default page size / domyślnie na stronę</span></div>
    </div>

    <section className="source-dossier" style={{marginTop:28}}>
      <h2>Filtering & pagination / Filtrowanie i paginacja</h2>
      <p>Planned filters: store/category, search query, application role, Value/Standard/Professional/Premium/Luxury-Industrial tier and verification state. Page sizes: {catalogueScaleTarget.allowedPageSizes.join(' / ')}.</p>
      <p><strong>PL:</strong> Planowane filtry: sklep/kategoria, wyszukiwanie, rola zastosowania, poziom Value/Standard/Professional/Premium/Luxury-Industrial oraz status weryfikacji. Rozmiary strony: {catalogueScaleTarget.allowedPageSizes.join(' / ')}.</p>
    </section>

    <section className="source-dossier" style={{marginTop:20}}>
      <h2>Sourcing & verification / Sourcing i weryfikacja</h2>
      <p>Alibaba search links are discovery inputs only. Price, MOQ, stock/availability, warranty, brand authenticity and compliance remain unverified until supported by evidence. Automated refresh is enabled only after lawful API access or another verified data source is available.</p>
      <p><strong>PL:</strong> Linki wyszukiwania Alibaba są wyłącznie wejściem do procesu sourcingowego. Cena, MOQ, stan/dostępność, gwarancja, autentyczność marki i zgodność pozostają niezweryfikowane do czasu uzyskania dowodu. Automatyczne aktualizacje będą uruchamiane dopiero po uzyskaniu legalnego dostępu do API lub innego zweryfikowanego źródła danych.</p>
    </section>

    <section className="source-dossier" style={{marginTop:20}}>
      <h2>Fulfilment / Realizacja</h2>
      <p>Door-to-door logistics is the target service model. Tracking, cargo insurance, Incoterms, warranty, post-warranty service, spare parts and consumables are transaction fields and must be confirmed before a binding offer.</p>
      <p><strong>PL:</strong> Logistyka door-to-door jest docelowym modelem obsługi. Tracking, ubezpieczenie ładunku, Incoterms, gwarancja, serwis pogwarancyjny, części i materiały eksploatacyjne są polami transakcyjnymi i wymagają potwierdzenia przed ofertą wiążącą.</p>
    </section>

    <section style={{marginTop:28}}>
      <h2>Seed sourcing profiles / Startowe profile sourcingowe</h2>
      <p>{franchiseOfferMatrix.length} profiles = 50 stores × 5 commercial tiers. They provide a safe schema for future verified product ingestion.</p>
      <p><strong>PL:</strong> {franchiseOfferMatrix.length} profili = 50 sklepów × 5 poziomów handlowych. Stanowią bezpieczny schemat pod przyszły import zweryfikowanych produktów.</p>
      <Link href="/catalog"><button>OPEN PUBLIC CATALOGUE / OTWÓRZ KATALOG</button></Link>
    </section>
  </main><Footer/></>;
}
