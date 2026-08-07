'use client';

import { useMemo, useState } from 'react';
import catalogTaxonomy, { type TaxonomyBranch } from '../data/catalogTaxonomy';
import { CATALOG_MARKUPS, priceWithMarkup } from '../data/pricing';

const productSeries = ['SELECT', 'PRO', 'EXECUTIVE', 'INDUSTRIAL', 'SIGNATURE'];
const USD_TO_PLN = 4;

const alibabaBenchmarks: Record<string, { low: number; high: number; note: string }> = {
  'Smartfony Premium': { low: 44, high: 106.4, note: 'smartfony 5G / OEM / private label' },
  'Laptopy Premium': { low: 180, high: 520, note: 'laptopy biznesowe i OEM' },
  'Energia i Fotowoltaika': { low: 342, high: 5599, note: 'systemy solarne, baterie i magazyny energii' },
  HVAC: { low: 100, high: 260, note: 'klimatyzacja split i rozwiązania HVAC' },
  'Meble Premium': { low: 60, high: 800, note: 'meble biurowe, hotelowe i outdoor' },
  'Drzwi i Bramy Premium': { low: 120, high: 900, note: 'drzwi, bramy i systemy wejściowe' },
  'Maszyny i Sprzęt Ciężki': { low: 1500, high: 22000, note: 'minikoparki, ładowarki i sprzęt budowlany' },
  'Wyposażenie Przedsiębiorstw': { low: 26, high: 500, note: 'stanowiska pracy i wyposażenie komercyjne' },
  'Wellness Premium': { low: 180, high: 1800, note: 'wyposażenie wellness i spa' },
  'Smart Home Premium': { low: 18, high: 280, note: 'automatyka, sterowanie i urządzenia smart' },
  'Luxury Interior': { low: 115, high: 800, note: 'wyposażenie wnętrz i meble premium' },
  'Outdoor Luxury': { low: 115.88, high: 799, note: 'meble ogrodowe, tarasowe i hotelowe' },
  'Premium Lighting': { low: 12, high: 220, note: 'oświetlenie dekoracyjne i komercyjne' },
  'Executive Office': { low: 60, high: 500, note: 'biurka zarządcze, fotele i boksy akustyczne' },
  'Hospitality Premium': { low: 149, high: 799, note: 'wyposażenie hoteli i resortów' },
  'Audio Video Premium': { low: 35, high: 650, note: 'audio, video i systemy multimedialne' },
  'E-Mobility': { low: 59, high: 539, note: 'hulajnogi, e-bike i mobilność elektryczna' },
  'Leisure Premium': { low: 80, high: 680, note: 'rekreacja, outdoor i mobilność' },
};

type LeafPath = { category: string; path: string[]; leaf: string };

function collectLeaves(branch: TaxonomyBranch, parents: string[] = []): string[][] {
  const next = [...parents, branch.name];
  if (!branch.children?.length) return [next];
  return branch.children.flatMap((child) => collectLeaves(child, next));
}

function allLeafPaths(): LeafPath[] {
  return catalogTaxonomy.flatMap((category) => collectLeaves(category).map((path) => ({ category: category.name, path, leaf: path[path.length - 1] })));
}

function hashText(text: string) {
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  return hash;
}

function alibabaBasePricePln(category: string, path: string, index: number) {
  const b = alibabaBenchmarks[category] ?? { low: 50, high: 500, note: 'benchmark sourcingowy' };
  const seed = ((hashText(path) % 100) / 100 + index * 0.17) % 1;
  const usd = b.low + (b.high - b.low) * seed;
  return { usd, pln: usd * USD_TO_PLN, note: b.note };
}

function formatPln(value: number) {
  return new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN', maximumFractionDigits: 0 }).format(value);
}

function Tree({ branches, depth = 0 }: { branches: TaxonomyBranch[]; depth?: number }) {
  return <div className={`taxonomy-tree taxonomy-depth-${depth}`}>{branches.map((branch) => <details key={`${depth}-${branch.name}`} open={depth === 0}><summary>{branch.name}{branch.children?.length ? <span>{branch.children.length} elementy</span> : <span>5 produktów</span>}</summary>{branch.children?.length ? <Tree branches={branch.children} depth={depth + 1} /> : null}</details>)}</div>;
}

export default function HierarchicalCatalog() {
  const leaves = useMemo(() => allLeafPaths(), []);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Wszystkie');
  const filteredLeaves = useMemo(() => {
    const q = query.trim().toLowerCase();
    return leaves.filter((item) => (category === 'Wszystkie' || item.category === category) && (!q || item.path.join(' ').toLowerCase().includes(q)));
  }, [leaves, query, category]);

  return <>
    <section className="section catalog-taxonomy-summary">
      <div className="catalog-meta"><div><strong>{catalogTaxonomy.length}</strong><span>kategorii głównych</span></div><div><strong>{leaves.length}</strong><span>najniższych elementów katalogu</span></div><div><strong>{leaves.length * 5}</strong><span>pozycji produktowych — po 5 na każdy element</span></div></div>
      <p className="catalog-count">Każdy element katalogu ma pięć poziomów ofertowych z narzutem PROFESJA: <strong>+72%, +75%, +78%, +81% i +84%</strong> względem benchmarku ceny bazowej Alibaba. Kurs roboczy do prezentacji: 4,00 PLN/USD; finalna oferta potwierdza kurs, MOQ, transport, podatki i zgodność produktu.</p>
    </section>
    <section className="section taxonomy-browser">
      <div className="catalog-toolbar"><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Szukaj kategorii, podkategorii lub produktu..." aria-label="Szukaj w hierarchii katalogu"/><select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Kategoria główna"><option>Wszystkie</option>{catalogTaxonomy.map((item) => <option key={item.name}>{item.name}</option>)}</select></div>
      <p className="catalog-count">Zakres bieżącego widoku: <strong>{filteredLeaves.length}</strong> elementów / <strong>{filteredLeaves.length * 5}</strong> produktów.</p>
      <div className="taxonomy-layout">
        <aside className="taxonomy-sidebar"><h3>Struktura katalogu</h3><Tree branches={catalogTaxonomy}/></aside>
        <div className="taxonomy-products">{filteredLeaves.map((item, leafIndex) => { const pathLabel = item.path.join(' / '); return <section className="taxonomy-leaf" key={pathLabel}><div className="taxonomy-leaf-heading"><div><p className="eyebrow">{item.category}</p><h2>{item.leaf}</h2><p>{pathLabel}</p></div><span>5 profesjonalnych wariantów</span></div><div className="taxonomy-product-grid">{productSeries.map((series, index) => { const base = alibabaBasePricePln(item.category, pathLabel, index); const markup = CATALOG_MARKUPS[index]; const sellPrice = priceWithMarkup(base.pln, markup); return <article className="taxonomy-product-card" key={`${pathLabel}-${series}`}><div className="taxonomy-product-number">{String(leafIndex + 1).padStart(3, '0')}.{index + 1}</div><div className="taxonomy-product-visual taxonomy-product-visual--sharp"><span>{series.slice(0, 2)}</span><small>{item.category}</small></div><p className="eyebrow">{item.leaf}</p><h3>{item.leaf} {series}</h3><p><strong>Opis profesjonalny:</strong> wariant {series.toLowerCase()} przygotowany dla segmentu {item.leaf.toLowerCase()}, z doborem parametrów, producenta, certyfikacji i logistyki pod wymagania klienta B2B.</p><p><strong>Zastosowanie:</strong> zakup firmowy, inwestycyjny, wyposażenie, projekt OEM/ODM lub dalsza odsprzedaż — zależnie od kategorii.</p><p><strong>Prezentacja:</strong> karta handlowa PL/EN, porównanie wariantów, materiał produktowy i zestawienie kosztów dla zatwierdzonego modelu.</p><p><strong>Dokumentacja:</strong> instrukcja, dokumentacja bezpieczeństwa i dokumenty zgodności dostępne dla finalnie wybranego produktu.</p><p><strong>Benchmark Alibaba:</strong> {base.note}; cena bazowa ok. USD {base.usd.toFixed(2)}.</p><div className="taxonomy-price"><small>Cena bazowa Alibaba (kurs roboczy)</small><em>{formatPln(base.pln)}</em><small>Cena PROFESJA — narzut +{Math.round((markup - 1) * 100)}%</small><strong>{formatPln(sellPrice)}</strong></div><a className="taxonomy-offer-link" href={`/offers/new?product=${encodeURIComponent(`${item.leaf} ${series}`)}`}>Poproś o ofertę i prezentację →</a></article>; })}</div></section>; })}</div>
      </div>
    </section>
  </>;
}
