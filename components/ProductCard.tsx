import Link from 'next/link';

type Product = {
  id: number;
  name: string;
  description: string;
  category: string;
  priceLabel: string;
  certificates?: string[];
  warranty?: string;
  mediaStatus?: string;
  minimumOrder?: string;
  rating?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card product-card">
      <div className="product-card__badge">Oferta {String(product.id).padStart(2, '0')}</div>
      <p className="eyebrow">{product.category}</p>
      <h3>{product.name}</h3>
      {product.rating ? <p><strong>Ocena konfiguracji:</strong> {product.rating}</p> : null}
      <p>{product.description}</p>
      {product.minimumOrder ? <p><strong>Warunki handlowe:</strong> {product.minimumOrder}</p> : null}
      {product.certificates?.length ? <p><strong>Dokumentacja:</strong> {product.certificates.join(', ')}</p> : null}
      {product.warranty ? <p><strong>Gwarancja:</strong> {product.warranty}</p> : null}
      {product.mediaStatus ? <p><strong>Materiały:</strong> {product.mediaStatus}</p> : null}
      <p className="product-price"><strong>{product.priceLabel}</strong></p>
      <div className="cta-row">
        <Link href={`/products/${product.id}`}><button>Zobacz szczegóły</button></Link>
        <Link href={`/offers/new?product=${encodeURIComponent(product.name)}`}><button className="cta-secondary">Poproś o ofertę</button></Link>
      </div>
    </article>
  );
}
