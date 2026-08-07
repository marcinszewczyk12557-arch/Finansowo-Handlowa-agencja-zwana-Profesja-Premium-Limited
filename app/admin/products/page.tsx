import Link from 'next/link';
import products from '../../../data/products';

export default function AdminProducts() {
  return (
    <main className="section">
      <p className="eyebrow">Panel administratora</p>
      <h1>Zarządzanie produktami</h1>
      <p>Widok roboczy katalogu profesja/premium/limited.</p>

      <div className="cta-row">
        <Link href="/admin"><button className="cta-secondary">Wróć do panelu</button></Link>
        <Link href="/offers/new"><button>Dodaj przez zapytanie robocze</button></Link>
      </div>

      <section className="grid" aria-label="Produkty katalogowe">
        {products.map((product) => (
          <article className="card" key={product.id}>
            <p className="eyebrow">{product.category}</p>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>{product.priceLabel}</strong></p>
            <p><strong>Gwarancja:</strong> {product.warranty}</p>
            <p><strong>Materiały:</strong> {product.mediaStatus}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
