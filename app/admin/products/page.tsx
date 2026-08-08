import Link from 'next/link';
import { redirect } from 'next/navigation';
import products from '../../../data/products';
import { isOwnerSession, ownerAuthConfigured } from '../../../lib/ownerAuth';

export const dynamic = 'force-dynamic';

export default async function AdminProducts() {
  if (!ownerAuthConfigured()) redirect('/owner/login?error=config');
  if (!(await isOwnerSession())) redirect('/owner/login');

  const categories = new Set(products.map((product) => product.category)).size;

  return (
    <main className="section">
      <p className="eyebrow">OWNER • Panel administratora</p>
      <h1>Katalog publikowany</h1>
      <p>
        Chroniony podgląd katalogu PROFESJA PREMIUM LIMITED™. Publiczny katalog korzysta obecnie z wersjonowanych danych repozytorium,
        dlatego zmiany treści produktowych powinny przechodzić przez kontrolowaną publikację kodu zamiast bezpośredniej edycji w bazie.
      </p>

      <section className="admin-stats" aria-label="Statystyki katalogu">
        <article className="card"><strong>{products.length}</strong><span>produktów</span></article>
        <article className="card"><strong>{categories}</strong><span>kategorii</span></article>
        <article className="card"><strong>OWNER</strong><span>dostęp chroniony</span></article>
      </section>

      <div className="cta-row">
        <Link href="/admin"><button className="cta-secondary">Wróć do panelu</button></Link>
        <Link href="/catalog"><button>Sprawdź widok publiczny</button></Link>
        <Link href="/admin/offers"><button className="cta-secondary">Obsługa ofert</button></Link>
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
            <Link href={`/products/${product.id}`}>Otwórz kartę produktu →</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
