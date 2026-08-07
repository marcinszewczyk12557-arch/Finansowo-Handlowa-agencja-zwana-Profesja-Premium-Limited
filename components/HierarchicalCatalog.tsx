'use client';

import { useMemo, useState } from 'react';
import catalogTaxonomy, { type TaxonomyBranch } from '../data/catalogTaxonomy';
import { globalBrandsBranch } from '../data/globalBrands';
import { CATALOG_MARKUPS, priceWithMarkup } from '../data/pricing';

const productSeries = ['SELECT', 'PRO', 'EXECUTIVE', 'INDUSTRIAL', 'SIGNATURE'];
const USD_TO_PLN = 4;
const fullTaxonomy: TaxonomyBranch[] = [...catalogTaxonomy, globalBrandsBranch];

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
  return fullTaxonomy.flatMap((category) => collectLeaves(category).map((path) => ({ category: category.name, path, leaf: path[path.length - 1] })));
}

function hashText(text: string) {
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  return hash;
}

function alibabaBasePricePln(category: string, path: string, index: number) {
  const b = alibabaBenchmarks[category] ?? { low: 50, high: 500, note: 'benchmark sourcingowy Alibaba' };
  const seed = ((hashText(path) % 100) / 100 + index * 0.17) % 1;
  const usd = b.low + (b.high - b.low) * seed;
  return { usd, pln: usd * USD_TO_PLN, note: b.note };
}

function formatPln(value: number) {
  return new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN', maximumFractionDigits: 0 }).format(value);
}

function productVisual(path: string[], series: string) {
  const text = path.join(' ').toLowerCase();
  const brand = path[0] === 'Globalne produkty czołowych producentów' ? path[1] : path[0];
  let shape = `<rect x='162' y='40' width='196' height='160' rx='18' fill='#101a20' stroke='#30d3c2' stroke-width='4'/><rect x='182' y='58' width='156' height='100' rx='8' fill='#0a0f12' stroke='#d4af37' stroke-width='2'/><path d='M140 205h240l-24 24H164z' fill='#202b31' stroke='#60737c'/>`;
  if (/audio|jbl|yamaha|roland|tascam|pioneer|technics|mikser|kolumn|głoś|studio|nagłoś/.test(text)) {
    shape = `<rect x='150' y='34' width='220' height='204' rx='20' fill='#10181d' stroke='#d4af37' stroke-width='4'/><circle cx='260' cy='102' r='44' fill='#071013' stroke='#30d3c2' stroke-width='5'/><circle cx='260' cy='102' r='17' fill='#d4af37'/><circle cx='260' cy='182' r='25' fill='#071013' stroke='#83939b' stroke-width='4'/><rect x='390' y='58' width='74' height='150' rx='10' fill='#121d22' stroke='#30d3c2' stroke-width='3'/><g stroke='#d4af37' stroke-width='3'>${[78,100,122,144,166,188].map(y=>`<line x1='404' y1='${y}' x2='450' y2='${y}'/>`).join('')}</g>`;
  } else if (/martin|lighting|lamp|oświet/.test(text)) {
    shape = `<circle cx='260' cy='112' r='64' fill='#0b1216' stroke='#d4af37' stroke-width='5'/><circle cx='260' cy='112' r='36' fill='#30d3c2' opacity='.75'/><path d='M218 170h84l34 60H184z' fill='#172229' stroke='#83939b' stroke-width='4'/><path d='M260 50l120-30M300 70l130 10M220 70L90 35' stroke='#d4af37' stroke-width='4' opacity='.7'/>`;
  } else if (/smartfon|iphone|galaxy|mobile|telefon/.test(text)) {
    shape = `<rect x='206' y='28' width='108' height='218' rx='22' fill='#0b1115' stroke='#30d3c2' stroke-width='5'/><rect x='220' y='48' width='80' height='158' rx='9' fill='#142129'/><circle cx='236' cy='222' r='8' fill='#d4af37'/><circle cx='286' cy='64' r='9' fill='#d4af37'/><circle cx='263' cy='64' r='9' fill='#83939b'/>`;
  } else if (/gramofon|turntable|dj/.test(text)) {
    shape = `<rect x='118' y='62' width='284' height='166' rx='16' fill='#121b20' stroke='#d4af37' stroke-width='4'/><circle cx='230' cy='145' r='64' fill='#06090b' stroke='#30d3c2' stroke-width='4'/><circle cx='230' cy='145' r='10' fill='#d4af37'/><path d='M340 92v92l-58 18' stroke='#d9e1e4' stroke-width='8' fill='none' stroke-linecap='round'/>`;
  }
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='520' height='300' viewBox='0 0 520 300'><defs><linearGradient id='g' x1='0' x2='1'><stop stop-color='#071116'/><stop offset='1' stop-color='#101b21'/></linearGradient></defs><rect width='520' height='300' rx='24' fill='url(#g)'/>${shape}<text x='28' y='270' fill='#f2d778' font-family='Arial,sans-serif' font-size='24' font-weight='700'>${brand.replace(/&/g,'&amp;')}</text><text x='492' y='270' text-anchor='end' fill='#30d3c2' font-family='Arial,sans-serif' font-size='15' letter-spacing='2'>${series}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
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
      <div className="catalog-meta"><div><strong>{fullTaxonomy.length}</strong><span>kategorii głównych</span></div><div><strong>{leaves.length}</strong><span>najniższych elementów katalogu</span></div><div><strong>{leaves.length * 5}</strong><span>pozycji produktowych — po 5 na każdy element</span></div></div>
      <p className="catalog-count">Dla kategorii sourcingowych pięć poziomów ofertowych stosuje narzut PROFESJA: <strong>+72%, +75%, +78%, +81% i +84%</strong> względem benchmarku bazowego Alibaba. Dla globalnych marek cena jest potwierdzana indywidualnie po weryfikacji modelu, kanału dystrybucji i dostępności.</p>
    </section>
    <section className="section taxonomy-browser">
      <div className="catalog-toolbar"><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Szukaj kategorii, marki, serii lub produktu..." aria-label="Szukaj w hierarchii katalogu"/><select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Kategoria główna"><option>Wszystkie</option>{fullTaxonomy.map((item) => <option key={item.name}>{item.name}</option>)}</select></div>
      <p className="catalog-count">Zakres bieżącego widoku: <strong>{filteredLeaves.length}</strong> elementów / <strong>{filteredLeaves.length * 5}</strong> produktów.</p>
      <div className="taxonomy-layout">
        <aside className="taxonomy-sidebar"><h3>Struktura katalogu</h3><Tree branches={fullTaxonomy}/></aside>
        <div className="taxonomy-products">{filteredLeaves.map((item, leafIndex) => { const pathLabel = item.path.join(' / '); const globalBrand = item.category === globalBrandsBranch.name; return <section className="taxonomy-leaf" key={pathLabel}><div className="taxonomy-leaf-heading"><div><p className="eyebrow">{item.category}</p><h2>{item.leaf}</h2><p>{pathLabel}</p></div><span>5 profesjonalnych wariantów</span></div><div className="taxonomy-product-grid">{productSeries.map((series, index) => { const base = alibabaBasePricePln(item.category, pathLabel, index); const markup = CATALOG_MARKUPS[index]; const sellPrice = priceWithMarkup(base.pln, markup); return <article className="taxonomy-product-card" key={`${pathLabel}-${series}`}><div className="taxonomy-product-number">{String(leafIndex + 1).padStart(3, '0')}.{index + 1}</div><img className="taxonomy-product-image" src={productVisual(item.path, series)} alt={`${item.leaf} ${series} — prezentacja produktowa wysokiej rozdzielczości`} loading="lazy"/><p className="eyebrow">{item.leaf}</p><h3>{item.leaf} {series}</h3><p><strong>Opis profesjonalny:</strong> wariant {series.toLowerCase()} przygotowany dla segmentu {item.leaf.toLowerCase()}, z doborem parametrów, producenta, certyfikacji i logistyki pod wymagania klienta B2B.</p><p><strong>Zastosowanie:</strong> zakup firmowy, inwestycyjny, wyposażenie, projekt integracyjny lub dalsza odsprzedaż — zależnie od kategorii.</p><p><strong>Prezentacja:</strong> karta handlowa PL/EN, porównanie wariantów, materiał produktowy w wysokiej rozdzielczości i zestawienie kosztów dla zatwierdzonego modelu.</p><p><strong>Dokumentacja:</strong> instrukcja, dokumentacja bezpieczeństwa i dokumenty zgodności dostępne dla finalnie wybranego produktu.</p>{globalBrand ? <><p><strong>Marka globalna:</strong> pozycja prezentuje rodzinę produktów producenta. Autentyczność, dokładny model, gwarancja i kanał dystrybucji są weryfikowane przed ofertą.</p><div className="taxonomy-price"><small>Cena PROFESJA</small><strong>Wycena indywidualna</strong><em>po potwierdzeniu modelu i dostępności</em></div></> : <><p><strong>Benchmark Alibaba:</strong> {base.note}; cena bazowa ok. USD {base.usd.toFixed(2)}.</p><div className="taxonomy-price"><small>Cena bazowa Alibaba (kurs roboczy)</small><em>{formatPln(base.pln)}</em><small>Cena PROFESJA — narzut +{Math.round((markup - 1) * 100)}%</small><strong>{formatPln(sellPrice)}</strong></div></>}<a className="taxonomy-offer-link" href={`/offers/new?product=${encodeURIComponent(`${item.leaf} ${series}`)}`}>Poproś o ofertę i prezentację →</a></article>; })}</div></section>; })}</div>
      </div>
    </section>
  </>;
}
