import Link from 'next/link';
import { featuredFranchiseProducts, franchiseCatalog, franchiseCategories } from '../data/franchiseCatalog';

type Props = { mode?: 'home' | 'catalog' };

const openingDaysHeadline = 'NAJBEZPIECZNIEJSZE NA ŚWIECIE LUKSUSOWE NOWOŚCI TECHNOLOGICZNE W KRAJU W NAJLEPSZYCH Z RYNKOWYCH CEN I 0-WYM %-OWANIEM Z PEŁNĄ PRZYZNAWALNOŚCIĄ A TAKŻE NAJLEPSZĄ FINANSOWO-HANDLOWĄ USŁUGĄ';

export default function FranchiseCatalog({ mode = 'catalog' }: Props){
  const products = mode === 'home' ? featuredFranchiseProducts : franchiseCatalog;
  return (
    <section className="section taxonomy-browser" aria-label="Katalog franczyzowy PROFESJA">
      <div className="source-dossier" style={{ marginBottom: 24 }}>
        <p className="eyebrow">DNI OTWARCIA • UWARUNKOWANIA PROMOCJI SPRZEDAŻOWEJ</p>
        <h2>{openingDaysHeadline}</h2>
        <p>
          Hasło określa założenia i docelowe korzyści promocji „Dni Otwarcia” projektu agencji usługowej PROFESJA PREMIUM LIMITED. Każda konkretna oferta podlega indywidualnemu potwierdzeniu ceny, dostępności, finansowania, zdolności/kwalifikacji klienta oraz dokumentacji produktu. Finansowanie 0% i jego przyznanie obowiązują wyłącznie wtedy, gdy zostaną potwierdzone w warunkach konkretnej oferty przez właściwego finansującego; nie stanowią bezwarunkowej gwarancji finansowania.
        </p>
      </div>

      <div className="taxonomy-leaf-heading">
        <div>
          <p className="eyebrow">PROFESJA FRANCHISE COMMERCE</p>
          <h2>{mode === 'home' ? '50 kategorii biznesowych — po 1 wyróżnionej ofercie' : '50 kategorii biznesowych — po 3 propozycje produktowe'}</h2>
          <p>
            Publiczna karta zawiera wyłącznie nazwę handlową PROFESJA, zastosowanie i ścieżkę zapytania. Dane źródłowego dostawcy, ceny zakupu, negocjacje oraz dokumentacja sourcingowa pozostają w warstwie wewnętrznej. Wiążąca oferta powstaje dopiero po ponownej weryfikacji dostawcy, produktu, dokumentów, dostępności i warunków transakcji.
          </p>
        </div>
        <span>{mode === 'home' ? featuredFranchiseProducts.length : franchiseCatalog.length} pozycji</span>
      </div>

      <div className="catalog-meta">
        <div><strong>50</strong><span>kategorii biznesowych</span></div>
        <div><strong>3</strong><span>propozycje na kategorię</span></div>
        <div><strong>1</strong><span>wyróżniona pozycja na kategorię</span></div>
      </div>

      <div className="taxonomy-product-grid">
        {products.map((product) => (
          <article className="taxonomy-product-card professional-offer-card" key={product.id}>
            <div className="taxonomy-product-number">{product.category}</div>
            <p className="eyebrow">OFERTA PROFESJA • WYCENA INDYWIDUALNA</p>
            <h3>{product.title}</h3>
            <p className="offer-lead">{product.use}</p>
            <div className="offer-spec-grid">
              <div><span>Status zgodności</span><strong>Weryfikowany przed publikacją wiążącej oferty</strong></div>
              <div><span>CE / RoHS</span><strong>Wymagane wyłącznie tam, gdzie mają zastosowanie przepisy właściwe dla danego typu produktu; potwierdzane deklaracją zgodności i dokumentacją techniczną.</strong></div>
              <div><span>ISO / normy</span><strong>Normy i certyfikaty właściwe dla produktu lub systemu producenta są wskazywane dopiero po sprawdzeniu autentycznego dokumentu, zakresu i jednostki wystawiającej.</strong></div>
            </div>
            <div className="source-dossier">
              <h4>Bezpieczny model realizacji</h4>
              <p>
                Finalny producent i kanał dostawy nie są publikowane w karcie klienta. Przed zamówieniem weryfikowane są co najmniej: tożsamość kontrahenta, staż dostawcy, zabezpieczenia transakcji, specyfikacja, deklaracja zgodności UE i oznakowanie CE — jeżeli wymagane, zgodność RoHS dla właściwego sprzętu elektrycznego/elektronicznego, właściwe normy ISO/EN/IEC, gwarancja, dostępność, cena, MOQ i warunki dostawy. Produkt nie jest przedstawiany jako certyfikowany, dopóki dokumentacja konkretnego modelu nie zostanie zweryfikowana.
              </p>
            </div>
            <div className="offer-actions">
              <Link className="taxonomy-offer-link" href={`/offers/new?product=${encodeURIComponent(product.title)}&category=${encodeURIComponent(product.category)}`}>
                Poproś o ofertę PROFESJA →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {mode === 'home' ? (
        <div className="cta-row" style={{ marginTop: 24 }}>
          <Link href="/catalog"><button>ZOBACZ WSZYSTKIE {franchiseCategories.length} KATEGORII</button></Link>
          <Link href="mailto:profesja.premium@gmail.com"><button className="cta-secondary">PROFESJA.PREMIUM@GMAIL.COM</button></Link>
        </div>
      ) : null}
    </section>
  );
}
