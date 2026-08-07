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
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card">
      <p className="eyebrow">{product.category}</p>
      <h3>{product.name}</h3>
      <p>{product.description}</p>

      {product.certificates?.length ? (
        <p><strong>Dokumentacja:</strong> {product.certificates.join(', ')}</p>
      ) : null}

      {product.warranty ? <p><strong>Gwarancja:</strong> {product.warranty}</p> : null}
      {product.mediaStatus ? <p><strong>Materiały:</strong> {product.mediaStatus}</p> : null}

      <p><strong>{product.priceLabel}</strong></p>
      <Link href="/offers/new">
        <button>Poproś o ofertę</button>
      </Link>
    </article>
  );
}
