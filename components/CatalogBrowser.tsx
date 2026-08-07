'use client';

import { useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import type { CatalogProduct } from '../data/products';

export default function CatalogBrowser({ products }: { products: CatalogProduct[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Wszystkie');
  const categories = ['Wszystkie', ...Array.from(new Set(products.map((product) => product.category)))];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = category === 'Wszystkie' || product.category === category;
      const matchesQuery = !q || `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [products, query, category]);

  return (
    <section className="section">
      <div className="catalog-toolbar">
        <input aria-label="Szukaj w katalogu" placeholder="Szukaj produktu lub kategorii..." value={query} onChange={(event) => setQuery(event.target.value)} />
        <select aria-label="Filtr kategorii" value={category} onChange={(event) => setCategory(event.target.value)}>
          {categories.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </div>
      <p className="catalog-count">Znaleziono: <strong>{filtered.length}</strong></p>
      <div className="grid catalog-grid">
        {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}
