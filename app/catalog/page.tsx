import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import products from '../../data/products';

export default function CatalogPage() {
  const categories = Array.from(new Set(products.map((product) => product.category)));

  return (
    <>
      <Header />
      <main>
        <section className="hero compact-hero">
          <p className="eyebrow">Katalog profesja/premium/limited</p>
          <h2>Pełna oferta premium</h2>
          <p>
            Katalog prezentuje aktualne grupy produktowe i przykładowe warianty ofertowe. Dokumentacja,
            certyfikaty i warunki gwarancji są potwierdzane dla konkretnego modelu przed przedstawieniem oferty.
          </p>
        </section>

        <section className="section">
          <div className="catalog-meta">
            <div><strong>{products.length}</strong><span>pozycji katalogowych</span></div>
            <div><strong>{categories.length}</strong><span>kategorii premium</span></div>
            <div><strong>PL / EN</strong><span>materiały na życzenie</span></div>
          </div>
        </section>

        {categories.map((category) => (
          <section key={category} className="section catalog-section">
            <p className="eyebrow">{category}</p>
            <div className="grid catalog-grid">
              {products.filter((product) => product.category === category).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
