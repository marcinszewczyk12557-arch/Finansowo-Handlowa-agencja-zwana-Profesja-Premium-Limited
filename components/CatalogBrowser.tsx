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

  const grouped = useMemo(() => {
    const map = new Map<string, CatalogProduct[]>();
    filtered.forEach((product) => {
      const list = map.get(product.category) ?? [];
      list.push(product);
      map.set(product.category, list);
    });
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <section className="section catalog-browser">
      <div className="catalog-toolbar">
        <input aria-label="Szukaj w katalogu" placeholder="Szukaj produktu lub kategorii..." value={query} onChange={(event) => setQuery(event.target.value)} />
        <select aria-label="Filtr kategorii" value={category} onChange={(event) => setCategory(event.target.value)}>
          {categories.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </div>
      <p className="catalog-count">Znaleziono: <strong>{filtered.length}</strong> produktów w <strong>{grouped.length}</strong> kategoriach</p>

      <div className="catalog-category-list">
        {grouped.map(([categoryName, categoryProducts]) => (
          <section className="catalog-category-section" key={categoryName}>
            <div className="catalog-category-heading">
              <div>
                <p className="eyebrow">Kategoria</p>
                <h2>{categoryName}</h2>
              </div>
              <span>{categoryProducts.length} produkty</span>
            </div>
            <div className="grid catalog-grid catalog-grid-four">
              {categoryProducts.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
