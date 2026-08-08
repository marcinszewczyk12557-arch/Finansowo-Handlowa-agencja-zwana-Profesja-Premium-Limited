'use client';

import { useMemo, useState } from 'react';
import catalogTaxonomy, { TaxonomyBranch } from '../data/catalogTaxonomy';

const VARIANTS_PER_LEAF = 12;
const variantLabels = ['PREMIUM','PRO','INDUSTRIAL','BUSINESS','HEAVY DUTY','COMPACT','ENERGY EFFICIENT','SMART / CONNECTED','OEM','PRIVATE LABEL','CUSTOM CONFIGURATION','BULK / CONTRACT'];

function leavesOf(node: TaxonomyBranch): TaxonomyBranch[] {
  if (!node.children?.length) return [node];
  return node.children.flatMap(leavesOf);
}

function normalize(value: string) {
  return value.toLocaleLowerCase('pl-PL').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export default function FullCatalogTree() {
  const [query, setQuery] = useState('');
  const q = normalize(query.trim());

  const stats = useMemo(() => {
    const leaves = catalogTaxonomy.flatMap(leavesOf);
    const secondLevel = catalogTaxonomy.reduce((sum, root) => sum + (root.children?.length ?? 0), 0);
    return { roots: catalogTaxonomy.length, groups: secondLevel, leafGroups: leaves.length, variants: leaves.length * VARIANTS_PER_LEAF };
  }, []);

  const filtered = useMemo(() => {
    if (!q) return catalogTaxonomy;
    return catalogTaxonomy.map((root) => {
      if (normalize(root.name).includes(q)) return root;
      const children = (root.children ?? []).filter((child) => normalize(child.name).includes(q) || leavesOf(child).some((leaf) => normalize(leaf.name).includes(q)));
      return children.length ? { ...root, children } : null;
    }).filter(Boolean) as TaxonomyBranch[];
  }, [q]);

  return (
    <section className="section full-catalog-tree">
      <div className="taxonomy-leaf-heading"><div>
        <p className="eyebrow">MAKSYMALNY ZAKRES SOURCINGU B2B</p>
        <h2>Pełne drzewo kategorii i produktów dostępnych na zapytanie</h2>
        <p>Pozycje w tym drzewie są konfiguracjami zapytania RFQ, a nie finalnymi ofertami handlowymi. Każda finalna oferta PROFESJA przygotowana na podstawie wybranej konfiguracji ma zawierać zdjęcia produktu, krótkie wideo lub demo producenta, opis funkcji i zastosowania, przeznaczenie, cenę, warunki gwarancji/RMA, instrukcję lub kartę techniczną, źródła materiałów, status dostępności, MOQ, logistykę i wymagane dokumenty zgodności.</p>
      </div></div>

      <div className="catalog-meta catalog-meta-wide">
        <div><strong>{stats.roots}</strong><span>głównych działów</span></div>
        <div><strong>{stats.groups}</strong><span>grup produktowych</span></div>
        <div><strong>{stats.leafGroups}</strong><span>najniższych gałęzi</span></div>
        <div><strong>{stats.variants.toLocaleString('pl-PL')}+</strong><span>konfiguracji RFQ</span></div>
      </div>

      <div className="catalog-toolbar full-tree-toolbar">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Szukaj kategorii, grupy lub rodzaju produktu…" aria-label="Szukaj w pełnym drzewie katalogu" />
      </div>

      {filtered.length === 0 ? <div className="catalog-empty">Brak dopasowania. Możesz wysłać indywidualne zapytanie sourcingowe także dla produktu spoza widocznego drzewa.</div> : (
        <div className="full-tree-grid">
          {filtered.map((root) => (
            <details className="catalog-tree-root" key={root.name} open={Boolean(q)}>
              <summary><span>{root.name}</span><strong>{(root.children ?? []).length} grup</strong></summary>
              <div className="catalog-tree-branches">
                {(root.children ?? []).map((child) => (
                  <details className="catalog-tree-branch" key={`${root.name}-${child.name}`} open={Boolean(q)}>
                    <summary><span>{child.name}</span><strong>{leavesOf(child).length * VARIANTS_PER_LEAF} konfiguracji</strong></summary>
                    <div className="catalog-tree-products">
                      {leavesOf(child).map((leaf) => (
                        <article className="catalog-tree-product" key={`${root.name}-${child.name}-${leaf.name}`}>
                          <h3>{leaf.name}</h3>
                          <p>Wybierz wariant RFQ. Po kwalifikacji źródła finalna karta oferty otrzyma pełny pakiet: zdjęcia, krótkie wideo/demo, parametry, zastosowanie, cenę, gwarancję, instrukcję, dokumentację i logistykę.</p>
                          <div className="catalog-variant-grid">
                            {variantLabels.map((variant, index) => {
                              const label = `${leaf.name} — ${variant}`;
                              return <a key={variant} href={`/offers/new?product=${encodeURIComponent(label)}&category=${encodeURIComponent(root.name)}`} title={`Zapytaj o ${label}`}><span>{String(index + 1).padStart(2, '0')}</span>{variant}</a>;
                            })}
                          </div>
                        </article>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </details>
          ))}
        </div>
      )}

      <div className="catalog-sourcing-note"><strong>Standard publikacji finalnej oferty:</strong> żadna pozycja po przejściu z RFQ do oferty handlowej nie powinna być publikowana bez materiału zdjęciowego, krótkiego wideo/demo lub wskazania materiału producenta, danych technicznych, ceny, zastosowania, warunków gwarancji, instrukcji/dokumentacji oraz informacji o dostępności i logistyce.</div>
    </section>
  );
}
