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
          <p className="eyebrow">GLOBALNY UKŁAD KATEGORII B2B</p>
          <h2>Drzewo kategorii odwzorowane w logice największych marketplace B2B</h2>
          <p>Układ nawigacji zachowuje model: dział główny → grupa → typ produktu → wariant zapytania. Nazewnictwo i prezentacja są własne dla PROFESJA PREMIUM LIMITED™, a każda pozycja prowadzi do indywidualnego RFQ.</p>
        </div>
      </div>

      <div className="catalog-meta catalog-meta-wide">
        <div><strong>{stats.roots}</strong><span>głównych działów</span></div>
        <div><strong>{stats.groups}</strong><span>grup produktowych</span></div>
        <div><strong>{stats.leafGroups}</strong><span>najniższych gałęzi</span></div>
        <div><strong>{stats.variants.toLocaleString('pl-PL')}+</strong><span>wariantów RFQ</span></div>
      </div>

      <div className="catalog-toolbar full-tree-toolbar">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Szukaj w całym drzewie kategorii…" aria-label="Szukaj w pełnym drzewie katalogu" />
      </div>

      {visibleRoots.length === 0 ? <div className="catalog-empty">Brak dopasowania. Możesz złożyć indywidualne zapytanie sourcingowe także dla produktu spoza widocznego drzewa.</div> : (
        <div className="marketplace-megamenu">
          <nav className="mega-root-column" aria-label="Główne kategorie">
            {visibleRoots.map((root) => <button key={root.name} type="button" onClick={() => chooseRoot(root)} className={root.name === selectedRoot?.name ? 'mega-root active' : 'mega-root'}><span>{root.name}</span><b>›</b></button>)}
          </nav>

          <nav className="mega-group-column" aria-label="Grupy produktowe">
            <div className="mega-column-heading"><span>DZIAŁ</span><strong>{selectedRoot?.name}</strong></div>
            {groups.map((group) => <button key={group.name} type="button" onClick={() => chooseGroup(group)} className={group.name === selectedGroup?.name ? 'mega-group active' : 'mega-group'}><span>{group.name}</span><small>{leavesOf(group).length * VARIANTS_PER_LEAF} wariantów</small></button>)}
          </nav>

          <div className="mega-product-column">
            <div className="mega-column-heading"><span>GRUPA</span><strong>{selectedGroup?.name ?? 'Wybierz grupę'}</strong></div>
            <div className="mega-product-grid">
              {leaves.map((leaf) => <article className="mega-product-card" key={leaf.name}>
                <h3>{leaf.name}</h3>
                <p>Konfiguracja pod zastosowanie, budżet, ilość, rynek docelowy, logistykę i dokumentację.</p>
                <div className="catalog-variant-grid">
                  {variantLabels.map((variant, index) => {
                    const label = `${leaf.name} — ${variant}`;
                    return <a key={variant} href={`/offers/new?product=${encodeURIComponent(label)}&category=${encodeURIComponent(selectedRoot?.name ?? '')}`} title={`Zapytaj o ${label}`}><span>{String(index + 1).padStart(2,'0')}</span>{variant}</a>;
                  })}
                </div>
              </article>)}
            </div>
          </div>
        </div>
      )}

      <div className="catalog-sourcing-note"><strong>Pełna oferta handlowa:</strong> po wybraniu konfiguracji przygotowywana jest karta z właściwym zdjęciem produktu, krótkim wideo/demo, funkcjami, zastosowaniem, ceną, dostępnością, gwarancją, instrukcją, dokumentacją i źródłem dostawcy. Samo drzewo jest indeksem sourcingowym, nie deklaracją magazynową.</div>
    </section>
  );
}
