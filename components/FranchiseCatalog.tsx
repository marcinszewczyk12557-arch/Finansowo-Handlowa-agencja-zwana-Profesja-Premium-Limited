import Link from 'next/link';
import { featuredFranchiseProducts, franchiseCatalog, franchiseCategories } from '../data/franchiseCatalog';
import BrandProductExplorer from './BrandProductExplorer';

type Props = { mode?: 'home' | 'catalog' };

const openingStores = [
  ['01', 'Premium Mobile & Communication', 'Smartfony Premium i komunikacja mobilna', 'MOBILE'],
  ['02', 'Business Computing', 'Laptopy, stacje robocze i komputery biznesowe', 'COMPUTE'],
  ['03', 'Energy & Photovoltaics', 'Fotowoltaika, magazyny energii i systemy hybrydowe', 'ENERGY'],
  ['04', 'HVAC & Climate', 'Klimatyzacja, wentylacja i rozwiązania HVAC', 'CLIMATE'],
  ['05', 'Premium Office & Furniture', 'Meble premium, recepcje i przestrzenie executive', 'OFFICE'],
  ['06', 'Doors, Gates & Access', 'Drzwi, bramy, automatyka i kontrola dostępu', 'ACCESS'],
  ['07', 'Heavy Machinery', 'Maszyny budowlane, komunalne, rolnicze, wydobywcze i przemysłowe', 'MACHINERY'],
  ['08', 'Enterprise Equipment', 'Wyposażenie przedsiębiorstw, narzędzia i stanowiska pracy', 'EQUIPMENT'],
  ['09', 'Wellness & SPA', 'Wyposażenie wellness, SPA i hospitality', 'WELLNESS'],
  ['10', 'Smart Building', 'Smart Home, automatyka i inteligentne systemy budynkowe', 'SMART'],
  ['11', 'Luxury Interior', 'Wyposażenie i zabudowy wnętrz reprezentacyjnych', 'INTERIOR'],
  ['12', 'Outdoor Premium', 'Tarasy, pergole i profesjonalne strefy zewnętrzne', 'OUTDOOR'],
  ['13', 'Professional Lighting', 'Oświetlenie dekoracyjne, techniczne i sterowanie', 'LIGHT'],
  ['14', 'Executive Office', 'Gabinet zarządu i profesjonalne przestrzenie executive', 'EXECUTIVE'],
  ['15', 'Hospitality', 'Wyposażenie hoteli, apartamentów i obiektów usługowych', 'HOSPITALITY'],
  ['16', 'Audio Video & Conference', 'Systemy AV, wideokonferencje i multimedia', 'AV'],
  ['17', 'E-Mobility', 'Ładowanie, infrastruktura i elektromobilność', 'E-MOBILITY'],
  ['18', 'Leisure & Professional Lifestyle', 'Rekreacja i wyposażenie profesjonalnych stref czasu wolnego', 'LEISURE'],
] as const;

export default function FranchiseCatalog({ mode = 'catalog' }: Props){
  const products = mode === 'home' ? featuredFranchiseProducts : franchiseCatalog;
  return (
    <section className="section taxonomy-browser" aria-label="PROFESJA Opening Days ALL IN ONE and transport goods catalogue">
      <div className="source-dossier" style={{ marginBottom: 24 }}>
        <p className="eyebrow">OPENING DAYS • ALL IN ONE • B2B COMMERCE</p>
        <h2>18 flagship multi-industry stores connected to one professional service tree</h2>
        <p>One controlled path for product discovery, RFQ, sourcing, compliance review, logistics, optional financing or long-term rental, documentation and post-sale coordination. Prices, brands, technical claims and multimedia are treated as verified only after documentary confirmation.</p>
        <p style={{ marginTop: 12, opacity: .86 }}><strong>PL:</strong> Jedna kontrolowana ścieżka obsługi: wyszukiwanie produktu, zapytanie ofertowe, sourcing, weryfikacja zgodności, logistyka, opcjonalne finansowanie lub najem długoterminowy, dokumentacja i obsługa posprzedażowa. Cena, marka, parametry i multimedia otrzymują status zweryfikowanych dopiero po potwierdzeniu dokumentacji.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 14, marginBottom: 30 }}>
        {openingStores.map(([no, en, pl, mark]) => (
          <article key={no} style={{ border: '1px solid #d9e0e3', borderRadius: 16, padding: 18, background: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div aria-hidden="true" style={{ width: 52, height: 52, borderRadius: 14, border: '1px solid #c9d1d5', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 900, letterSpacing: '.08em', textAlign: 'center', lineHeight: 1.05, padding: 4 }}>{mark}</div>
              <div><span style={{ fontWeight: 900, letterSpacing: '.12em' }}>PROFESJA {no}</span><div style={{ fontSize: 11, opacity: .66 }}>ALL IN ONE • ORIGINAL CATEGORY ID</div></div>
            </div>
            <h3 style={{ marginBottom: 6 }}>{en}</h3><p style={{ marginTop: 0 }}>{pl}</p>
            <Link href={`/offers/new?category=${encodeURIComponent(pl)}&campaign=${encodeURIComponent('Opening Days ALL IN ONE')}`} style={{ fontWeight: 700 }}>Request an offer / Poproś o ofertę →</Link>
          </article>
        ))}
      </div>

      <BrandProductExplorer />
      <div className="source-dossier" style={{ marginBottom: 24 }}><p className="eyebrow">SAFE COMMERCIAL RULES • ZASADY BEZPIECZNEJ OBSŁUGI</p><h3>Evidence before claims / Najpierw dowód, potem deklaracja</h3><p>Supplier identity, authenticity, specification, compliance documents, warranty, availability, price, MOQ and delivery conditions are checked before order acceptance. Public presentation of a brand does not imply partnership, authorisation or official representation unless explicitly documented.</p><p style={{ marginTop: 12, opacity: .86 }}><strong>PL:</strong> Tożsamość dostawcy, autentyczność, specyfikacja, dokumenty zgodności, gwarancja, dostępność, cena, MOQ i warunki dostawy są sprawdzane przed przyjęciem zamówienia. Prezentacja marki nie oznacza partnerstwa ani autoryzacji bez jednoznacznego dowodu.</p></div>

      <div className="taxonomy-leaf-heading"><div><p className="eyebrow">TRANSPORT GOODS • TOWARY PRZEWOZOWE • B2B CATALOGUE</p><h2>{mode === 'home' ? '50 business categories — one featured proposal per category' : '50 business categories — three product proposals per category'}</h2><p><strong>PL:</strong> Publiczna karta pokazuje zakres zastosowania i ścieżkę zapytania. Dane źródłowego dostawcy, ceny zakupu, negocjacje i dokumentacja sourcingowa pozostają w warstwie wewnętrznej. Konkretna marka lub model są publikowane dopiero po ich potwierdzeniu.</p></div><span>{mode === 'home' ? featuredFranchiseProducts.length : franchiseCatalog.length} items / pozycji</span></div>
      <div className="catalog-meta"><div><strong>18</strong><span>flagship stores / sklepy flagowe</span></div><div><strong>50</strong><span>business categories / kategorii biznesowych</span></div><div><strong>24+ months</strong><span>optional rental after qualification / opcjonalny najem po kwalifikacji</span></div></div>
      <div className="taxonomy-product-grid">{products.map((product) => (<article className="taxonomy-product-card professional-offer-card" key={product.id}><div className="taxonomy-product-number">{product.category}</div><p className="eyebrow">PROFESJA OFFER • INDIVIDUAL QUOTATION / WYCENA INDYWIDUALNA</p><h3>{product.title}</h3><p className="offer-lead">{product.use}</p><div className="offer-spec-grid"><div><span>Technical profile / Profil techniczny</span><strong>Matched to use, availability, compliance and budget / Dobierany do zastosowania, dostępności, zgodności i budżetu.</strong></div><div><span>Compliance / Zgodność</span><strong>Verified before a binding offer / Weryfikowana przed ofertą wiążącą.</strong></div><div><span>CE / RoHS / ISO / EN / IEC</span><strong>Shown only after authentic evidence is checked / Wyłącznie po sprawdzeniu autentycznego dowodu.</strong></div><div><span>Financing / rental</span><strong>Optional enquiry; provider decision applies / Opcjonalne zapytanie; decyzja należy do finansującego.</strong></div></div><div className="offer-actions"><Link className="taxonomy-offer-link" href={`/offers/new?product=${encodeURIComponent(product.title)}&category=${encodeURIComponent(product.category)}&campaign=${encodeURIComponent('Opening Days ALL IN ONE')}`}>Request a PROFESJA offer / Poproś o ofertę PROFESJA →</Link></div></article>))}</div>
      {mode === 'home' ? <div className="cta-row" style={{ marginTop: 24 }}><Link href="/catalog"><button>VIEW ALL {franchiseCategories.length} CATEGORIES / ZOBACZ WSZYSTKIE</button></Link><Link href="/finansowanie/kredyt-inwestycyjny-bez-wkladu-wlasnego"><button className="cta-secondary">FINANCING / RENTAL 24+ MONTHS • FINANSOWANIE / NAJEM</button></Link></div> : null}
    </section>
  );
}
