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
  const [selectedRootName, setSelectedRootName] = useState(catalogTaxonomy[0]?.name ?? '');
  const [selectedGroupName, setSelectedGroupName] = useState(catalogTaxonomy[0]?.children?.[0]?.name ?? '');
  const q = normalize(query.trim());

  const stats = useMemo(() => {
    const leaves = catalogTaxonomy.flatMap(leavesOf);
    const groups = catalogTaxonomy.reduce((sum, root) => sum + (root.children?.length ?? 0), 0);
    return { roots: catalogTaxonomy.length, groups, leafGroups: leaves.length, variants: leaves.length * VARIANTS_PER_LEAF };
  }, []);

  const visibleRoots = useMemo(() => {
    if (!q) return catalogTaxonomy;
    return catalogTaxonomy.filter((root) => {
      if (normalize(root.name).includes(q)) return true;
      return (root.children ?? []).some((child) => normalize(child.name).includes(q) || leavesOf(child).some((leaf) => normalize(leaf.name).includes(q)));
    });
  }, [q]);

  const selectedRoot = visibleRoots.find((root) => root.name === selectedRootName) ?? visibleRoots[0] ?? catalogTaxonomy[0];
  const groups = (selectedRoot?.children ?? []).filter((group) => !q || normalize(group.name).includes(q) || leavesOf(group).some((leaf) => normalize(leaf.name).includes(q)) || normalize(selectedRoot.name).includes(q));
  const selectedGroup = groups.find((group) => group.name === selectedGroupName) ?? groups[0];
  const leaves = selectedGroup ? leavesOf(selectedGroup).filter((leaf) => !q || normalize(leaf.name).includes(q) || normalize(selectedGroup.name).includes(q) || normalize(selectedRoot?.name ?? '').includes(q)) : [];

  const chooseRoot = (root: TaxonomyBranch) => {
    setSelectedRootName(root.name);
    setSelectedGroupName(root.children?.[0]?.name ?? '');
  };

  const chooseGroup = (group: TaxonomyBranch) => setSelectedGroupName(group.name);

  return (
    <section className="section full-catalog-tree">
      <div className="taxonomy-leaf-heading">
        <div>
          <p className="eyebrow">GLOBALNY KATALOG SOURCINGOWY B2B</p>
          <h2>Rozbudowane drzewo kategorii i ofert PROFESJA</h2>
          <p>Nawigacja prowadzi od działu głównego przez grupę i typ produktu do konkretnego wariantu zapytania. Nazewnictwo kategorii jest zwięzłe i branżowe, a treści handlowe pozostają własne dla PROFESJA PREMIUM LIMITED™.</p>
        </div>
      </div>

      <div className="catalog-meta catalog-meta-wide">
        <div><strong>{stats.roots}</strong><span>głównych działów</span></div>
        <div><strong>{stats.groups}</strong><span>grup produktowych</span></div>
        <div><strong>{stats.leafGroups}</strong><span>typów i rodzin produktów</span></div>
        <div><strong>{stats.variants.toLocaleString('pl-PL')}+</strong><span>konfiguracji zapytań</span></div>
      </div>

      <div className="catalog-toolbar full-tree-toolbar">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Szukaj produktu, grupy lub kategorii…" aria-label="Szukaj w pełnym drzewie katalogu" />
      </div>

      {visibleRoots.length === 0 ? <div className="catalog-empty">Brak dopasowania. Możesz złożyć indywidualne zapytanie sourcingowe także dla produktu spoza widocznego drzewa.</div> : (
        <div className="marketplace-megamenu">
          <nav className="mega-root-column" aria-label="Główne kategorie">
            {visibleRoots.map((root) => <button key={root.name} type="button" onClick={() => chooseRoot(root)} className={root.name === selectedRoot?.name ? 'mega-root active' : 'mega-root'}><span>{root.name}</span><b>›</b></button>)}
          </nav>

          <nav className="mega-group-column" aria-label="Grupy produktowe">
            <div className="mega-column-heading"><span>DZIAŁ</span><strong>{selectedRoot?.name}</strong></div>
            {groups.map((group) => <button key={group.name} type="button" onClick={() => chooseGroup(group)} className={group.name === selectedGroup?.name ? 'mega-group active' : 'mega-group'}><span>{group.name}</span><small>{leavesOf(group).length} typów • {leavesOf(group).length * VARIANTS_PER_LEAF} konfiguracji</small></button>)}
          </nav>

          <div className="mega-product-column">
            <div className="mega-column-heading"><span>GRUPA</span><strong>{selectedGroup?.name ?? 'Wybierz grupę'}</strong></div>
            <div className="mega-product-grid">
              {leaves.map((leaf) => <article className="mega-product-card" key={leaf.name}>
                <h3>{leaf.name}</h3>
                <p>Wybierz profil produktu. W zapytaniu określisz zastosowanie, parametry, ilość, budżet, rynek docelowy, dokumentację i warunki dostawy.</p>
                <div className="catalog-variant-grid">
                  {variantLabels.map((variant, index) => {
                    const label = `${leaf.name} — ${variant}`;
                    const params = new URLSearchParams({product: label, category: selectedRoot?.name ?? '', group: selectedGroup?.name ?? '', source: 'catalog-tree'});
                    return <a key={variant} href={`/offers/new?${params.toString()}`} title={`Przygotuj zapytanie: ${label}`}><span>{String(index + 1).padStart(2,'0')}</span>{variant}</a>;
                  })}
                </div>
              </article>)}
            </div>
          </div>
        </div>
      )}

      <div className="catalog-sourcing-note"><strong>Standard publikacji konkretnej oferty:</strong> drzewo pozostaje szerokim indeksem sourcingowym. Karta handlowa jest publikowana osobno dopiero po kwalifikacji źródła i zawiera właściwe zdjęcia, krótkie wideo/demo jeżeli jest dostępne u źródła, opis funkcji i zastosowania, parametry, aktualną cenę/wycenę, MOQ, dostępność, gwarancję/RMA, instrukcję, dokumentację, logistykę oraz odnośnik do źródła. Niepełne lub niepotwierdzone dane nie są przedstawiane jako zweryfikowana oferta.</div>
    </section>
  );
}
