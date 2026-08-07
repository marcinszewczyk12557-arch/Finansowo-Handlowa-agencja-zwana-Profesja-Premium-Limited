import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CatalogBrowser from '../../components/CatalogBrowser';
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
            Przeglądaj aktualne grupy produktowe, wyszukuj po nazwie lub kategorii i składaj indywidualne zapytania ofertowe.
            Dokumentacja, certyfikaty i warunki gwarancji są potwierdzane dla konkretnego modelu przed przedstawieniem oferty.
          </p>
        </section>

        <section className="section">
          <div className="catalog-meta">
            <div><strong>{products.length}</strong><span>pozycji katalogowych</span></div>
            <div><strong>{categories.length}</strong><span>kategorii premium</span></div>
            <div><strong>PL / EN</strong><span>materiały na życzenie</span></div>
          </div>
        </section>

        <CatalogBrowser products={products} />
      </main>
      <Footer />
    </>
  );
}
