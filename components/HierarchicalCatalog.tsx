'use client';

import { useMemo, useState } from 'react';
import catalogTaxonomy, { type TaxonomyBranch } from '../data/catalogTaxonomy';
import { globalBrandsBranch } from '../data/globalBrands';
import { markupForVariant, priceWithMarkup } from '../data/pricing';
import { defaultSafetyNotice, smartphoneProfiles, variantsForCategory } from '../data/catalogOfferProfiles';
import { homeAssets1 } from '../data/homeAssets1';
import { homeAssets2 } from '../data/homeAssets2';
import { homeAssets3 } from '../data/homeAssets3';
import { homeAssets4 } from '../data/homeAssets4';

const USD_TO_PLN = 3.8;
const fullTaxonomy: TaxonomyBranch[] = [...catalogTaxonomy, globalBrandsBranch];
const variantNames = ['SELECT', 'STANDARD', 'PLUS', 'PRO', 'PRO MAX', 'BUSINESS', 'CREATOR', 'PERFORMANCE', 'INDUSTRIAL', 'SIGNATURE', 'ULTRA', 'CUSTOM', 'ENTERPRISE', 'SPECIAL'];
const smartphoneImages = [
  homeAssets1.nubia01, homeAssets1.nubia02, homeAssets1.nubia03, homeAssets1.nubia04,
  homeAssets2.nubia05, homeAssets2.nubia06, homeAssets2.nubia07, homeAssets2.nubia08,
  homeAssets3.nubia09, homeAssets3.nubia10, homeAssets3.nubia11, homeAssets3.nubia12,
  homeAssets4.nubia13, homeAssets4.nubia14, homeAssets4.nubia15,
];

const internalMarketBenchmarks: Record<string, { low: number; high: number; note: string }> = {
  'Smartfony Premium': { low: 50, high: 585, note: 'smartfony 5G, flagowe, rugged i gamingowe; MOQ zwykle 1 szt.' },
  'Laptopy Premium': { low: 125, high: 955, note: 'nowe laptopy biznesowe/OEM; MOQ zwykle 1–20 szt.' },
  'Energia i Fotowoltaika': { low: 310, high: 5599, note: 'domowe i małe komercyjne systemy solarne/magazyny; duże BESS osobno' },
  HVAC: { low: 100, high: 500, note: 'urządzenia i systemy HVAC; MOQ zależnie od typu 1–50 zestawów' },
  'Meble Premium': { low: 30, high: 1888, note: 'fotele, biurka, stanowiska i boksy akustyczne; MOQ 1–20 szt.' },
  'Drzwi i Bramy Premium': { low: 100, high: 1500, note: 'automatyka drzwiowa, drzwi wejściowe i systemy przesuwne; MOQ zwykle 1–2' },
  'Maszyny i Sprzęt Ciężki': { low: 900, high: 13500, note: 'minikoparki i popularne maszyny; ciężkie jednostki wyceniane indywidualnie' },
  'Wyposażenie Przedsiębiorstw': { low: 26, high: 500, note: 'wyposażenie komercyjne i warsztatowe' },
  'Wellness Premium': { low: 104, high: 4000, note: 'SPA, sauna/red-light i profesjonalne urządzenia; MOQ zwykle 1–5' },
  'Smart Home Premium': { low: 18, high: 245, note: 'przełączniki, panele, alarmy i zamki smart; MOQ 1–20 szt.' },
  'Luxury Interior': { low: 115, high: 800, note: 'wyposażenie wnętrz i materiały premium' },
  'Outdoor Luxury': { low: 115.88, high: 799, note: 'meble i wyposażenie outdoor' },
  'Premium Lighting': { low: 12, high: 220, note: 'oświetlenie dekoracyjne, techniczne i komercyjne' },
  'Executive Office': { low: 60, high: 500, note: 'wyposażenie gabinetów i przestrzeni zarządczych' },
  'Hospitality Premium': { low: 149, high: 799, note: 'wyposażenie hoteli i resortów' },
  'Audio Video Premium': { low: 35, high: 650, note: 'audio, video, studio i systemy multimedialne' },
  'E-Mobility': { low: 59, high: 539, note: 'mobilność elektryczna i infrastruktura' },
  'Leisure Premium': { low: 80, high: 680, note: 'rekreacja i wyposażenie rozrywkowe' },
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

function basePrice(category: string, path: string, index: number) {
  const b = internalMarketBenchmarks[category] ?? { low: 50, high: 500, note: 'wewnętrzny benchmark rynkowy' };
  const seed = ((hashText(path) % 100) / 100 + index * 0.113) % 1;
  const usd = b.low + (b.high - b.low) * seed;
  return { usd, pln: usd * USD_TO_PLN, note: b.note };
}

function formatPln(value: number) {
  return new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN', maximumFractionDigits: 0 }).format(value);
}

function genericVisual(path: string[], label: string) {
  const text = path.join(' ').toLowerCase();
  const brand = path[0] === globalBrandsBranch.name ? path[1] : path[0];
  let glyph = '◈';
  if (/audio|jbl|yamaha|roland|tascam|pioneer|technics|mikser|kolumn|studio|nagłoś/.test(text)) glyph = '◉';
  else if (/lighting|lamp|oświet|martin/.test(text)) glyph = '✦';
  else if (/laptop|komputer|monitor|it|lenovo|apple|asus|acer|hp|msi|dell/.test(text)) glyph = '▰';
  else if (/energia|fotowolta|bess|falownik/.test(text)) glyph = '⚡';
  else if (/maszyn|kopark|ładowark|wózek/.test(text)) glyph = '⬢';
  else if (/meble|biurko|fotel|hotel/.test(text)) glyph = '▣';
  const safeBrand = brand.replace(/&/g, '&amp;');
  const safeLabel = label.replace(/&/g, '&amp;');
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='720' viewBox='0 0 1200 720'><defs><linearGradient id='g' x1='0' x2='1'><stop stop-color='#071116'/><stop offset='1' stop-color='#13252c'/></linearGradient></defs><rect width='1200' height='720' rx='32' fill='url(#g)'/><circle cx='600' cy='315' r='190' fill='#0d1b21' stroke='#2fcfbe' stroke-width='8'/><text x='600' y='375' text-anchor='middle' fill='#d4af37' font-family='Arial,sans-serif' font-size='180' font-weight='700'>${glyph}</text><text x='60' y='620' fill='#f2d778' font-family='Arial,sans-serif' font-size='54' font-weight='700'>${safeBrand}</text><text x='1140' y='620' text-anchor='end' fill='#30d3c2' font-family='Arial,sans-serif' font-size='34'>${safeLabel}</text><text x='60' y='672' fill='#afbec4' font-family='Arial,sans-serif' font-size='24'>Prezentacja HD • finalne zdjęcie po potwierdzeniu modelu</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function isPhoneLeaf(item: LeafPath) {
  return item.category === 'Smartfony Premium' && !/ładowark|etui|stacj|słuchawk/i.test(item.leaf);
}

function Tree({ branches, depth = 0 }: { branches: TaxonomyBranch[]; depth?: number }) {
  return <div className={`taxonomy-tree taxonomy-depth-${depth}`}>{branches.map((branch) => <details key={`${depth}-${branch.name}`} open={depth === 0}><summary>{branch.name}{branch.children?.length ? <span>{branch.children.length} elementy</span> : <span>10+ ofert</span>}</summary>{branch.children?.length ? <Tree branches={branch.children} depth={depth + 1} /> : null}</details>)}</div>;
}

export default function HierarchicalCatalog() {
  const leaves = useMemo(() => allLeafPaths(), []);
  const totalOffers = useMemo(() => leaves.reduce((sum, item) => sum + variantsForCategory(item.category, item.path.join(' / ')), 0), [leaves]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Wszystkie');
  const filteredLeaves = useMemo(() => {
    const q = query.trim().toLowerCase();
    return leaves.filter((item) => (category === 'Wszystkie' || item.category === category) && (!q || item.path.join(' ').toLowerCase().includes(q)));
  }, [leaves, query, category]);
  const visibleOfferCount = filteredLeaves.reduce((sum, item) => sum + variantsForCategory(item.category, item.path.join(' / ')), 0);

  return <>
    <section className="section catalog-taxonomy-summary">
      <div className="catalog-meta"><div><strong>{fullTaxonomy.length}</strong><span>kategorii głównych</span></div><div><strong>{leaves.length}</strong><span>najniższych elementów katalogu</span></div><div><strong>{totalOffers}</strong><span>pozycji produktowych — minimum 10 na każdy element</span></div></div>
      <p className="catalog-count">Katalog generuje minimum 10 wariantów dla każdego elementu, a w najbardziej różnorodnych segmentach 12. Ceny sprzedażowe są przygotowywane według wewnętrznej polityki handlowej PROFESJA. Dokładny model, dostępność, transport, gwarancja i zgodność są potwierdzane przed sprzedażą.</p>
    </section>

    <section className="section taxonomy-browser">
      <div className="catalog-toolbar"><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Szukaj kategorii, marki, serii lub produktu..." aria-label="Szukaj w hierarchii katalogu"/><select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Kategoria główna"><option>Wszystkie</option>{fullTaxonomy.map((item) => <option key={item.name}>{item.name}</option>)}</select></div>
      <p className="catalog-count">Zakres bieżącego widoku: <strong>{filteredLeaves.length}</strong> elementów / <strong>{visibleOfferCount}</strong> wariantów produktowych.</p>
      <div className="taxonomy-layout">
        <aside className="taxonomy-sidebar"><h3>Struktura katalogu</h3><Tree branches={fullTaxonomy}/></aside>
        <div className="taxonomy-products">
          {filteredLeaves.map((item, leafIndex) => {
            const pathLabel = item.path.join(' / ');
            const count = variantsForCategory(item.category, pathLabel);
            const globalBrand = item.category === globalBrandsBranch.name;
            return <section className="taxonomy-leaf" key={pathLabel}>
              <div className="taxonomy-leaf-heading"><div><p className="eyebrow">{item.category}</p><h2>{item.leaf}</h2><p>{pathLabel}</p></div><span>{count} zróżnicowanych ofert</span></div>
              <div className="taxonomy-product-grid">
                {Array.from({ length: count }, (_, index) => {
                  const label = variantNames[index] ?? `WARIANT ${index + 1}`;
                  const benchmark = basePrice(item.category, pathLabel, index);
                  const markup = markupForVariant(index, count);
                  const sellPrice = priceWithMarkup(benchmark.pln, markup);
                  const phone = isPhoneLeaf(item) ? smartphoneProfiles[index % smartphoneProfiles.length] : null;
                  const productName = phone ? `${phone.brand} ${phone.model}` : `${item.leaf} ${label}`;
                  const image = phone ? smartphoneImages[index % smartphoneImages.length] : genericVisual(item.path, label);
                  const warranty = phone?.warrantyMonths ?? 12;
                  const manualUrl = phone?.manualUrl || '';
                  const videoUrl = phone?.videoUrl || '';
                  return <article className="taxonomy-product-card" key={`${pathLabel}-${index}`}>
                    <div className="taxonomy-product-number">{String(leafIndex + 1).padStart(3, '0')}.{String(index + 1).padStart(2, '0')}</div>
                    <img className="taxonomy-product-image" src={image} alt={`${productName} — prezentacja oferty`} loading="lazy" decoding="async" />
                    <p className="eyebrow">{phone ? `${phone.brand} • ${phone.series}` : item.leaf}</p>
                    <h3>{productName}</h3>
                    {phone ? <>
                      <p><strong>Potwierdzony model:</strong> {phone.brand} {phone.model}. Konkretny wariant pamięci, koloru i konfiguracji jest potwierdzany przed ofertą.</p>
                      <p><strong>Funkcje:</strong> {phone.functions}</p>
                      <p><strong>Przeznaczenie:</strong> {phone.intendedUse}</p>
                      <p><strong>Bezpieczne użytkowanie:</strong> {phone.safeUse}</p>
                    </> : <>
                      <p><strong>Opis profesjonalny:</strong> zróżnicowany wariant {label.toLowerCase()} dla segmentu {item.leaf.toLowerCase()}, dobierany według marki, parametrów, funkcji i zastosowania B2B.</p>
                      <p><strong>Przeznaczenie:</strong> zakup firmowy, inwestycja, wyposażenie, integracja, projekt OEM/ODM lub dalsza odsprzedaż — zależnie od rodzaju towaru.</p>
                      <p><strong>Bezpieczne użytkowanie:</strong> {defaultSafetyNotice}</p>
                    </>}
                    <p><strong>Towar przewozowy:</strong> przed wysyłką potwierdzane są wymagania transportowe, opakowanie, oznaczenia, zasilanie lub bateria, dokumenty zgodności i ewentualne ograniczenia przewozowe właściwe dla konkretnego modelu.</p>
                    <p><strong>Gwarancja:</strong> minimum {warranty} miesięcy dla tej oferty. Produkt niespełniający minimum 12 miesięcy gwarancji nie jest kwalifikowany do publikacji jako gotowa oferta sprzedażowa.</p>
                    <div className="taxonomy-doc-links">
                      {manualUrl ? <a href={manualUrl} target="_blank" rel="noreferrer">Instrukcja / wsparcie producenta ↗</a> : <span>Instrukcja: dołączana po potwierdzeniu modelu</span>}
                      {videoUrl ? <a href={videoUrl} target="_blank" rel="noreferrer">Prezentacja / materiał producenta ↗</a> : <span>Video/prezentacja: po potwierdzeniu modelu</span>}
                    </div>
                    {globalBrand ? <div className="taxonomy-price"><small>Marka globalna — cena po potwierdzeniu modelu i dostępności</small><strong>Wycena indywidualna</strong><em>gwarancja i autentyczność weryfikowane przed ofertą</em></div> : <div className="taxonomy-price"><small>Wewnętrzna kalkulacja oferty</small><em>{benchmark.note}</em><strong>{formatPln(sellPrice)}</strong></div>}
                    <a className="taxonomy-offer-link" href={`/offers/new?product=${encodeURIComponent(productName)}`}>Poproś o ofertę, prezentację i dokumentację →</a>
                  </article>;
                })}
              </div>
            </section>;
          })}
        </div>
      </div>
    </section>
  </>;
}
