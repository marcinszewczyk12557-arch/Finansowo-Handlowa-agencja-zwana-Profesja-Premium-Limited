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
          <p className="eyebrow">Katalog Profesja Premium Limited</p>
          <h2>Pełna oferta B2B — 4 produkty w każdej kategorii</h2>
          <p>
            Katalog obejmuje 18 kategorii i 72 pozycje sprzedażowe. Każda kategoria zawiera cztery produkty lub konfiguracje,
            a ceny prezentowane na stronie są końcowymi cenami katalogowymi naszej agencji. Dokumentacja, certyfikaty,
            dostępność i warunki gwarancji są potwierdzane dla konkretnego wariantu przed przedstawieniem wiążącej oferty.
          </p>
        </section>

        <section className="section">
          <div className="catalog-meta">
            <div><strong>{products.length}</strong><span>pozycji katalogowych</span></div>
            <div><strong>{categories.length}</strong><span>kategorii B2B</span></div>
            <div><strong>4</strong><span>produkty w każdej kategorii</span></div>
          </div>
        </section>

        <CatalogBrowser products={products} />
      </main>
      <Footer />
    </>
  );
}
