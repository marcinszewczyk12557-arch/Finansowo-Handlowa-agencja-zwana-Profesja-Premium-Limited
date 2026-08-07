'use client';

import { useMemo, useState } from 'react';
import catalogTaxonomy, { type TaxonomyBranch } from '../data/catalogTaxonomy';

const PRICE_MULTIPLIER = 1.82;
const productSeries = ['SELECT', 'PRO', 'EXECUTIVE', 'INDUSTRIAL', 'SIGNATURE'];

const categoryBasePrice: Record<string, number> = {
  'Smartfony Premium': 4200,
  'Laptopy Premium': 6900,
  'Energia i Fotowoltaika': 28000,
  HVAC: 8200,
  'Meble Premium': 7200,
  'Drzwi i Bramy Premium': 6400,
  'Maszyny i Sprzęt Ciężki': 52000,
  'Wyposażenie Przedsiębiorstw': 1800,
  'Wellness Premium': 8500,
  'Smart Home Premium': 2400,
  'Luxury Interior': 6200,
  'Outdoor Luxury': 7800,
  'Premium Lighting': 1600,
  'Executive Office': 5400,
  'Hospitality Premium': 7600,
  'Audio Video Premium': 4300,
  'E-Mobility': 5200,
  'Leisure Premium': 3600,
};

type LeafPath = {
  category: string;
  path: string[];
  leaf: string;
};

function collectLeaves(branch: TaxonomyBranch, parents: string[] = []): string[][] {
  const next = [...parents, branch.name];
  if (!branch.children?.length) return [next];
  return branch.children.flatMap((child) => collectLeaves(child, next));
}

function allLeafPaths(): LeafPath[] {
  return catalogTaxonomy.flatMap((category) =>
    collectLeaves(category).map((path) => ({
      category: category.name,
      path,
      leaf: path[path.length - 1],
    })),
  );
}

function hashText(text: string) {
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  return hash;
}

function priceFor(category: string, fullPath: string, index: number) {
  const base = categoryBasePrice[category] ?? 3000;
  const variance = 0.82 + ((hashText(fullPath) % 37) / 100);
  const levelFactor = 1 + index * 0.18;
  const sourceValue = base * variance * levelFactor;
  const finalValue = sourceValue * PRICE_MULTIPLIER;
  return Math.round(finalValue / 10) * 10;
}

function formatPln(value: number) {
  return new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN', maximumFractionDigits: 0 }).format(value);
}

function Tree({ branches, depth = 0 }: { branches: TaxonomyBranch[]; depth?: number }) {
  return (
    <div className={`taxonomy-tree taxonomy-depth-${depth}`}>
      {branches.map((branch) => (
        <details key={`${depth}-${branch.name}`} open={depth === 0}>
          <summary>{branch.name}{branch.children?.length ? <span>{branch.children.length} elementy</span> : <span>5 produktów</span>}</summary>
          {branch.children?.length ? <Tree branches={branch.children} depth={depth + 1} /> : null}
        </details>
      ))}
    </div>
  );
}

export default function HierarchicalCatalog() {
  const leaves = useMemo(() => allLeafPaths(), []);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Wszystkie');

  const filteredLeaves = useMemo(() => {
    const q = query.trim().toLowerCase();
    return leaves.filter((item) => {
      const categoryMatch = category === 'Wszystkie' || item.category === category;
      const text = item.path.join(' ').toLowerCase();
      return categoryMatch && (!q || text.includes(q));
    });
  }, [leaves, query, category]);

  const productCount = filteredLeaves.length * 5;

  return (
    <>
      <section className="section catalog-taxonomy-summary">
        <div className="catalog-meta">
          <div><strong>{catalogTaxonomy.length}</strong><span>kategorii głównych</span></div>
          <div><strong>{leaves.length}</strong><span>najniższych elementów katalogu</span></div>
          <div><strong>{leaves.length * 5}</strong><span>pozycji produktowych — po 5 na każdy element</span></div>
        </div>
      </section>

      <section className="section taxonomy-browser">
        <div className="catalog-toolbar">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Szukaj kategorii, podkategorii lub produktu..." aria-label="Szukaj w hierarchii katalogu" />
          <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Kategoria główna">
            <option>Wszystkie</option>
            {catalogTaxonomy.map((item) => <option key={item.name}>{item.name}</option>)}
          </select>
        </div>
        <p className="catalog-count">Zakres bieżącego widoku: <strong>{filteredLeaves.length}</strong> elementów / <strong>{productCount}</strong> produktów.</p>

        <div className="taxonomy-layout">
          <aside className="taxonomy-sidebar">
            <h3>Struktura katalogu</h3>
            <Tree branches={catalogTaxonomy} />
          </aside>

          <div className="taxonomy-products">
            {filteredLeaves.map((item, leafIndex) => {
              const pathLabel = item.path.join(' / ');
              return (
                <section className="taxonomy-leaf" key={pathLabel}>
                  <div className="taxonomy-leaf-heading">
                    <div>
                      <p className="eyebrow">{item.category}</p>
                      <h2>{item.leaf}</h2>
                      <p>{pathLabel}</p>
                    </div>
                    <span>5 różnych produktów</span>
                  </div>

                  <div className="taxonomy-product-grid">
                    {productSeries.map((series, index) => {
                      const price = priceFor(item.category, pathLabel, index);
                      return (
                        <article className="taxonomy-product-card" key={`${pathLabel}-${series}`}>
                          <div className="taxonomy-product-number">{String(leafIndex + 1).padStart(3, '0')}.{index + 1}</div>
                          <div className="taxonomy-product-visual">{series.slice(0, 2)}</div>
                          <p className="eyebrow">{item.leaf}</p>
                          <h3>{item.leaf} {series}</h3>
                          <p>Konfiguracja {index + 1}/5 dla segmentu {item.leaf.toLowerCase()}, przeznaczona do indywidualnej oferty B2B.</p>
                          <div className="taxonomy-price"><small>Cena katalogowa</small><strong>{formatPln(price)}</strong></div>
                          <a className="taxonomy-offer-link" href={`/offers/new?product=${encodeURIComponent(`${item.leaf} ${series}`)}`}>Poproś o ofertę →</a>
                        </article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
