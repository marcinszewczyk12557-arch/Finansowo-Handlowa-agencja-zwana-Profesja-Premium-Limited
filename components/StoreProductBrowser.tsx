'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type Product = {
  code: string;
  department?: string;
  title: string;
  use: string;
};

type Props = {
  products: Product[];
  category: string;
};

export default function StoreProductBrowser({ products, category }: Props) {
  const [query, setQuery] = useState('');
  const [department, setDepartment] = useState('ALL');

  const departments = useMemo(
    () => Array.from(new Set(products.map((product) => product.department).filter(Boolean))) as string[],
    [products]
  );

  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase('pl');
    return products.filter((product) => {
      const matchesDepartment = department === 'ALL' || product.department === department;
      const haystack = `${product.code} ${product.title} ${product.department ?? ''} ${product.use}`.toLocaleLowerCase('pl');
      return matchesDepartment && (!needle || haystack.includes(needle));
    });
  }, [products, query, department]);

  return (
    <>
      <div style={{ background: '#fff', border: '1px solid #dde3e6', borderRadius: 18, padding: 18, margin: '20px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 12 }}>
          <label style={{ display: 'grid', gap: 7, fontWeight: 700 }}>
            Szukaj produktu / Search
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="np. 01-025, 5G, rugged, USB-C"
              aria-label="Szukaj produktu po numerze, nazwie lub zastosowaniu"
              style={{ minHeight: 46, border: '1px solid #cfd8dc', borderRadius: 10, padding: '0 12px', font: 'inherit' }}
            />
          </label>
          <label style={{ display: 'grid', gap: 7, fontWeight: 700 }}>
            Dział / Department
            <select
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
              aria-label="Filtruj produkty według działu"
              style={{ minHeight: 46, border: '1px solid #cfd8dc', borderRadius: 10, padding: '0 12px', font: 'inherit', background: '#fff' }}
            >
              <option value="ALL">Wszystkie działy ({products.length})</option>
              {departments.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
        <div style={{ marginTop: 12, color: '#52636b' }}>
          Wyniki: <strong>{filtered.length}</strong> / {products.length}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 14 }}>
        {filtered.map((product) => (
          <article key={product.code} className="professional-offer-card" style={{ background: '#fff', border: '1px solid #dde3e6', borderRadius: 18, padding: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <p className="eyebrow" style={{ margin: 0 }}>INDIVIDUAL B2B QUOTATION</p>
              <strong style={{ color: '#122027', letterSpacing: '.12em', whiteSpace: 'nowrap' }}>PRODUCT {product.code}</strong>
            </div>
            {product.department ? <div style={{ fontSize: '.82rem', color: '#607178', marginBottom: 8 }}>{product.department}</div> : null}
            <h3><span style={{ color: '#607178' }}>{product.code}. </span>{product.title}</h3>
            <p style={{ lineHeight: 1.65 }}>{product.use}</p>
            <div style={{ borderTop: '1px solid #e3e8ea', paddingTop: 12, marginTop: 14, color: '#52636b', fontSize: '.9rem', lineHeight: 1.55 }}>
              Marka, model, wariant, cena, dostępność, zgodność, gwarancja i warunki dostawy są potwierdzane przed przedstawieniem oferty wiążącej.
            </div>
            <Link href={`/offers/new?product=${encodeURIComponent(product.title)}&category=${encodeURIComponent(category)}&productNumber=${encodeURIComponent(product.code)}`} style={{ fontWeight: 700, display: 'inline-block', marginTop: 14 }}>
              Poproś o ofertę dla produktu {product.code} →
            </Link>
          </article>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div style={{ background: '#fff', border: '1px solid #dde3e6', borderRadius: 16, padding: 24 }}>
          Brak pozycji spełniających ten filtr. Zmień dział lub wyszukiwane hasło.
        </div>
      ) : null}
    </>
  );
}
