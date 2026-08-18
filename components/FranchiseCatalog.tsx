import Link from 'next/link';
import { featuredFranchiseProducts, franchiseCatalog, franchiseCategories } from '../data/franchiseCatalog';

type Props = { mode?: 'home' | 'catalog' };

export default function FranchiseCatalog({ mode = 'catalog' }: Props){
  const products = mode === 'home' ? featuredFranchiseProducts : franchiseCatalog;
  return (
    <section className="section taxonomy-browser" aria-label="Katalog franczyzowy PROFESJA">
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
            <div className="source-dossier">
              <h4>Bezpieczny model realizacji</h4>
              <p>
                Finalny producent i kanał dostawy nie są publikowane w karcie klienta. Przed zamówieniem weryfikowane są co najmniej: tożsamość kontrahenta, staż dostawcy, zabezpieczenia transakcji, specyfikacja, certyfikaty właściwe dla produktu, gwarancja, dostępność, cena, MOQ i warunki dostawy.
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
