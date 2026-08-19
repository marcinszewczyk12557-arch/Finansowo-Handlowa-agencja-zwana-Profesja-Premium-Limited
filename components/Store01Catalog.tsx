'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { STORE01_MIN_ORDER_PLN, store01Categories, store01Products } from '../data/store01Mobile';

export default function Store01Catalog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('ALL');

  const products = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return store01Products.filter((product) => {
      const categoryMatch = category === 'ALL' || product.category === category;
      const queryMatch = !normalized || [product.id, product.title, product.category, product.subcategory, product.purpose, ...product.variants]
        .join(' ')
        .toLowerCase()
        .includes(normalized);
      return categoryMatch && queryMatch;
    });
  }, [query, category]);

  return (
    <section className="section" aria-label="Sklep 01 katalog urządzeń mobilnych">
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,2fr) minmax(220px,1fr)', gap: 12, marginBottom: 20 }}>
          <label>
            <span style={{ display: 'block', marginBottom: 6, fontWeight: 800 }}>Szukaj w sklepie 01</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="np. rugged, 5G, VoIP, stacja dokująca" style={{ width: '100%' }} />
          </label>
          <label>
            <span style={{ display: 'block', marginBottom: 6, fontWeight: 800 }}>Kategoria</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)} style={{ width: '100%' }}>
              <option value="ALL">Wszystkie kategorie</option>
              {store01Categories.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
        </div>

        <p style={{ marginBottom: 18 }}><strong>{products.length}</strong> pozycji w aktualnym widoku. Minimalna wartość pojedynczego zamówienia B2B: <strong>{STORE01_MIN_ORDER_PLN.toLocaleString('pl-PL')} zł</strong>.</p>

        <div className="taxonomy-product-grid">
          {products.map((product) => (
            <article key={product.id} className="taxonomy-product-card professional-offer-card">
              <div className="taxonomy-product-number">{product.id}</div>
              <p className="eyebrow">{product.category} • {product.subcategory}</p>
              <h3>{product.title}</h3>
              <p className="offer-lead">{product.purpose}</p>
              <div className="offer-spec-grid">
                <div><span>Warianty / konfiguracje</span><strong>{product.variants.join(' • ')}</strong></div>
                <div><span>Status handlowy</span><strong>Wycena indywidualna po potwierdzeniu modelu, ilości, dostępności i rynku.</strong></div>
                <div><span>Product Compliance</span><strong>{product.compliance}</strong></div>
                <div><span>Minimalna wartość zamówienia</span><strong>{STORE01_MIN_ORDER_PLN.toLocaleString('pl-PL')} zł brutto/netto zgodnie z ofertą i statusem transakcji.</strong></div>
              </div>
              <div className="offer-actions">
                <Link className="taxonomy-offer-link" href={`/offers/new?product=${encodeURIComponent(`${product.id} — ${product.title}`)}&budget=${STORE01_MIN_ORDER_PLN}&store=01`}>
                  Poproś o ofertę dla {product.id} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
