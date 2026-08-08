'use client';

import { useMemo, useState } from 'react';
import catalogTaxonomy, { TaxonomyBranch } from '../data/catalogTaxonomy';

const VARIANTS_PER_LEAF = 12;

const variantLabels = [
  'PREMIUM',
  'PRO',
  'INDUSTRIAL',
  'BUSINESS',
  'HEAVY DUTY',
  'COMPACT',
  'ENERGY EFFICIENT',
  'SMART / CONNECTED',
  'OEM',
  'PRIVATE LABEL',
  'CUSTOM CONFIGURATION',
  'BULK / CONTRACT',
];

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
    return {
      roots: catalogTaxonomy.length,
      groups: secondLevel,
      leafGroups: leaves.length,
      variants: leaves.length * VARIANTS_PER_LEAF,
    };
  }, []);

  const filtered = useMemo(() => {
    if (!q) return catalogTaxonomy;
    return catalogTaxonomy
      .map((root) => {
        if (normalize(root.name).includes(q)) return root;
        const children = (root.children ?? []).filter((child) => {
          if (normalize(child.name).includes(q)) return true;
          return leavesOf(child).some((leaf) => normalize(leaf.name).includes(q));
        });
        return children.length ? { ...root, children } : null;
      })
      .filter(Boolean) as TaxonomyBranch[];
  }, [q]);

  return (
    <section className="section full-catalog-tree">
      <div className="taxonomy-leaf-heading">
        <div>
          <p className="eyebrow">MAKSYMALNY ZAKRES SOURCINGU B2B</p>
          <h2>Pełne drzewo kategorii i produktów dostępnych na zapytanie</h2>
          <p>
            To szeroki zakres produktowy obsługiwany przez PROFESJA PREMIUM LIMITED™. Pozycje w tym drzewie oznaczają możliwość pozyskania i przygotowania oferty B2B; status dostawcy, cena, MOQ, zgodność, gwarancja i dostępność są potwierdzane dla konkretnego zapytania przed transakcją.
          </p>
        </div>
      </div>

      <div className="catalog-meta catalog-meta-wide">
        <div><strong>{stats.roots}</strong><span>głównych działów</span></div>
        <div><strong>{stats.groups}</strong><span>grup produktowych</span></div>
        <div><strong>{stats.leafGroups}</strong><span>najniższych gałęzi</span></div>
        <div><strong>{stats.variants.toLocaleString('pl-PL')}+</strong><span>wariantów ofertowych / konfiguracji</span></div>
      </div>

      <div className="catalog-toolbar full-tree-toolbar">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Szukaj kategorii, grupy lub rodzaju produktu…"
          aria-label="Szukaj w pełnym drzewie katalogu"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="catalog-empty">Brak dopasowania. Możesz wysłać indywidualne zapytanie sourcingowe także dla produktu spoza widocznego drzewa.</div>
      ) : (
        <div className="full-tree-grid">
          {filtered.map((root) => (
            <details className="catalog-tree-root" key={root.name} open={Boolean(q)}>
              <summary>
                <span>{root.name}</span>
                <strong>{(root.children ?? []).length} grup</strong>
              </summary>
              <div className="catalog-tree-branches">
                {(root.children ?? []).map((child) => (
                  <details className="catalog-tree-branch" key={`${root.name}-${child.name}`} open={Boolean(q)}>
                    <summary>
                      <span>{child.name}</span>
                      <strong>{leavesOf(child).length * VARIANTS_PER_LEAF} wariantów</strong>
                    </summary>
                    <div className="catalog-tree-products">
                      {leavesOf(child).map((leaf) => (
                        <article className="catalog-tree-product" key={`${root.name}-${child.name}-${leaf.name}`}>
                          <h3>{leaf.name}</h3>
                          <p>Oferta konfigurowana pod zastosowanie, budżet, ilość, rynek docelowy, logistykę i wymagane dokumenty.</p>
                          <div className="catalog-variant-grid">
                            {variantLabels.map((variant, index) => {
                              const label = `${leaf.name} — ${variant}`;
                              return (
                                <a
                                  key={variant}
                                  href={`/offers/new?product=${encodeURIComponent(label)}&category=${encodeURIComponent(root.name)}`}
                                  title={`Zapytaj o ${label}`}
                                >
                                  <span>{String(index + 1).padStart(2, '0')}</span>{variant}
                                </a>
                              );
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

      <div className="catalog-sourcing-note">
        <strong>Nie widzisz produktu?</strong> Katalog nie ogranicza zapytania. Dla legalnych i dopuszczonych do obrotu produktów B2B można złożyć indywidualne RFQ poza drzewem, a zespół kwalifikuje źródło i warunki przed przedstawieniem finalnej oferty.
      </div>
    </section>
  );
}
