import Link from 'next/link';
import { featuredFranchiseProducts, franchiseCatalog, franchiseCategories } from '../data/franchiseCatalog';
import BrandProductExplorer from './BrandProductExplorer';

type Props = { mode?: 'home' | 'catalog' };

const openingStores = [
  ['01', 'Premium Mobile & Communication', 'Smartfony Premium i komunikacja mobilna'],
  ['02', 'Business Computing', 'Laptopy, stacje robocze i komputery biznesowe'],
  ['03', 'Energy & Photovoltaics', 'Fotowoltaika, magazyny energii i systemy hybrydowe'],
  ['04', 'HVAC & Climate', 'Klimatyzacja, wentylacja i rozwiązania HVAC'],
  ['05', 'Premium Office & Furniture', 'Meble premium, recepcje i przestrzenie executive'],
  ['06', 'Doors, Gates & Access', 'Drzwi, bramy, automatyka i kontrola dostępu'],
  ['07', 'Heavy Machinery', 'Maszyny budowlane, komunalne, rolnicze, wydobywcze i przemysłowe'],
  ['08', 'Enterprise Equipment', 'Wyposażenie przedsiębiorstw, narzędzia i stanowiska pracy'],
  ['09', 'Wellness & SPA', 'Wyposażenie wellness, SPA i hospitality'],
  ['10', 'Smart Building', 'Smart Home, automatyka i inteligentne systemy budynkowe'],
  ['11', 'Luxury Interior', 'Wyposażenie i zabudowy wnętrz reprezentacyjnych'],
  ['12', 'Outdoor Premium', 'Tarasy, pergole i profesjonalne strefy zewnętrzne'],
  ['13', 'Professional Lighting', 'Oświetlenie dekoracyjne, techniczne i sterowanie'],
  ['14', 'Executive Office', 'Gabinet zarządu i profesjonalne przestrzenie executive'],
  ['15', 'Hospitality', 'Wyposażenie hoteli, apartamentów i obiektów usługowych'],
  ['16', 'Audio Video & Conference', 'Systemy AV, wideokonferencje i multimedia'],
  ['17', 'E-Mobility', 'Ładowanie, infrastruktura i elektromobilność'],
  ['18', 'Leisure & Professional Lifestyle', 'Rekreacja i wyposażenie profesjonalnych stref czasu wolnego'],
] as const;

export default function FranchiseCatalog({ mode = 'catalog' }: Props){
  const products = mode === 'home' ? featuredFranchiseProducts : franchiseCatalog;
  return (
    <section className="section taxonomy-browser" aria-label="PROFESJA Opening Days ALL IN ONE and transport goods catalogue">
      <div className="source-dossier" style={{ marginBottom: 24 }}>
        <p className="eyebrow">OPENING DAYS • ALL IN ONE • B2B COMMERCE</p>
        <h2>18 flagship multi-industry stores connected to one professional service tree</h2>
        <p>
          One controlled path for product discovery, RFQ, sourcing, compliance review, logistics, optional financing or long-term rental, documentation and post-sale coordination. Prices may be presented in PLN, EUR or USD for comparison, while the final settlement currency, taxes, delivery terms and payment method are confirmed in the binding offer. Product photos, brands and technical claims are published as verified only when their source and right of use are confirmed.
        </p>
        <p style={{ marginTop: 12, opacity: .86 }}>
          <strong>PL:</strong> Jedna kontrolowana ścieżka obsługi: wyszukiwanie produktu, zapytanie ofertowe, sourcing, weryfikacja zgodności, logistyka, opcjonalne finansowanie lub najem długoterminowy, dokumentacja i obsługa posprzedażowa. Ceny mogą być prezentowane porównawczo w PLN, EUR lub USD, natomiast waluta rozliczenia, podatki, warunki dostawy i płatności są każdorazowo potwierdzane w wiążącej ofercie. Zdjęcia produktów, marki i parametry są oznaczane jako zweryfikowane wyłącznie po potwierdzeniu źródła i prawa do ich użycia.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 14, marginBottom: 30 }}>
        {openingStores.map(([no, en, pl]) => (
          <article key={no} style={{ border: '1px solid #d9e0e3', borderRadius: 16, padding: 18, background: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <img src="/profesja-logo.svg" alt="PROFESJA PREMIUM LIMITED" style={{ width: 46, height: 46, objectFit: 'contain' }} />
              <span style={{ fontWeight: 800, letterSpacing: '.12em' }}>{no}</span>
            </div>
            <h3 style={{ marginBottom: 6 }}>{en}</h3>
            <p style={{ marginTop: 0 }}>{pl}</p>
            <Link href={`/offers/new?category=${encodeURIComponent(pl)}&campaign=${encodeURIComponent('Opening Days ALL IN ONE')}`} style={{ fontWeight: 700 }}>
              Request an offer / Poproś o ofertę →
            </Link>
          </article>
        ))}
      </div>

      <BrandProductExplorer />

      <div className="source-dossier" style={{ marginBottom: 24 }}>
        <p className="eyebrow">SAFE COMMERCIAL RULES • ZASADY BEZPIECZNEJ OBSŁUGI</p>
        <h3>Identity, signatures, financing and regulated goods</h3>
        <p>
          Only genuine, legally valid identity documents may be used where identity verification is required. “Collector” or imitation identity documents are not accepted for credit, instalment sales, KYC/KYB or contract execution. Electronic and handwritten signatures may be supported only through a lawful signing process with consent, audit trail and appropriate identity verification. Disability or health information is not used to promise approval or preferential financial treatment. Excise, medical, financial or other regulated products and services are offered only where the required legal, tax, licensing and compliance conditions are met.
        </p>
        <p style={{ marginTop: 12, opacity: .86 }}>
          <strong>PL:</strong> W procesach wymagających potwierdzenia tożsamości akceptowane są wyłącznie autentyczne, prawnie ważne dokumenty. Dokumenty „kolekcjonerskie” lub imitacje nie mogą służyć do sprzedaży ratalnej, finansowania, KYC/KYB ani zawierania umów. E-podpis i podpis odręczny mogą być obsługiwane wyłącznie w zgodnym z prawem procesie z wyraźną zgodą, śladem audytowym i właściwą weryfikacją tożsamości. Dane o niepełnosprawności lub zdrowiu nie są wykorzystywane do obiecywania przyznania finansowania. Towary akcyzowe, medyczne, finansowe i inne regulowane są oferowane wyłącznie po spełnieniu wymaganych warunków prawnych, podatkowych, licencyjnych i zgodności.
        </p>
      </div>

      <div className="taxonomy-leaf-heading">
        <div>
          <p className="eyebrow">TRANSPORT GOODS • TOWARY PRZEWOZOWE • B2B CATALOGUE</p>
          <h2>{mode === 'home' ? '50 business categories — one featured proposal per category' : '50 business categories — three product proposals per category'}</h2>
          <p>
            <strong>PL:</strong> Publiczna karta pokazuje zakres zastosowania i ścieżkę zapytania. Dane źródłowego dostawcy, ceny zakupu, negocjacje i dokumentacja sourcingowa pozostają w warstwie wewnętrznej. Konkretna marka lub model są publikowane dopiero po ich potwierdzeniu; brak dowodu zgodności oznacza brak statusu „zweryfikowane”.
          </p>
        </div>
        <span>{mode === 'home' ? featuredFranchiseProducts.length : franchiseCatalog.length} items / pozycji</span>
      </div>

      <div className="catalog-meta">
        <div><strong>18</strong><span>flagship stores / sklepy flagowe</span></div>
        <div><strong>50</strong><span>business categories / kategorii biznesowych</span></div>
        <div><strong>24+ months</strong><span>optional long-term rental after qualification / opcjonalny najem po kwalifikacji</span></div>
      </div>

      <div className="taxonomy-product-grid">
        {products.map((product) => (
          <article className="taxonomy-product-card professional-offer-card" key={product.id}>
            <div className="taxonomy-product-number">{product.category}</div>
            <p className="eyebrow">PROFESJA OFFER • INDIVIDUAL QUOTATION / WYCENA INDYWIDUALNA</p>
            <h3>{product.title}</h3>
            <p className="offer-lead">{product.use}</p>
            <div className="offer-spec-grid">
              <div><span>Technical profile / Profil techniczny</span><strong>Configuration is matched to use, availability, compliance and transaction budget / Konfiguracja dobierana do zastosowania, dostępności, zgodności i budżetu.</strong></div>
              <div><span>Rugged / industrial</span><strong>Available on request; resistance parameters are published only after documentary verification / Parametry odporności publikowane dopiero po potwierdzeniu dokumentacji.</strong></div>
              <div><span>Compliance status / Status zgodności</span><strong>Verified before a binding offer / Weryfikowany przed przedstawieniem wiążącej oferty.</strong></div>
              <div><span>CE / RoHS</span><strong>Confirmed only where applicable to the specific product and market / Potwierdzane wyłącznie tam, gdzie mają zastosowanie.</strong></div>
              <div><span>ISO / EN / IEC</span><strong>Shown only after checking an authentic document, its scope and issuer / Wskazywane po sprawdzeniu autentycznego dokumentu.</strong></div>
              <div><span>Financing / rental</span><strong>Optional enquiry; approval and conditions depend on the relevant financing provider / Zapytanie opcjonalne; decyzja i warunki zależą od właściwego finansującego.</strong></div>
            </div>
            <div className="source-dossier">
              <h4>Safe sourcing and fulfilment / Bezpieczny model sourcingu i realizacji</h4>
              <p>
                Supplier identity, transaction protections, product or brand authenticity, specification, applicable compliance documents, warranty, availability, price, MOQ and delivery conditions are checked before order acceptance. Public presentation of a brand does not imply partnership, authorisation or official representation unless explicitly documented for the specific offer.
              </p>
            </div>
            <div className="offer-actions">
              <Link className="taxonomy-offer-link" href={`/offers/new?product=${encodeURIComponent(product.title)}&category=${encodeURIComponent(product.category)}&campaign=${encodeURIComponent('Opening Days ALL IN ONE')}`}>
                Request a PROFESJA offer / Poproś o ofertę PROFESJA →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {mode === 'home' ? (
        <div className="cta-row" style={{ marginTop: 24 }}>
          <Link href="/catalog"><button>VIEW ALL {franchiseCategories.length} CATEGORIES / ZOBACZ WSZYSTKIE</button></Link>
          <Link href="/finansowanie/kredyt-inwestycyjny-bez-wkladu-wlasnego"><button className="cta-secondary">FINANCING / RENTAL 24+ MONTHS • FINANSOWANIE / NAJEM</button></Link>
        </div>
      ) : null}
    </section>
  );
}
