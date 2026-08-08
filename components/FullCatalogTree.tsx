'use client';

import { useMemo, useState } from 'react';
import catalogTaxonomy, { TaxonomyBranch } from '../data/catalogTaxonomy';
import catalogTaxonomyExpansion from '../data/catalogTaxonomyExpansion';

const VARIANTS_PER_LEAF = 12;
const variantLabels = ['PREMIUM','PRO','INDUSTRIAL','BUSINESS','HEAVY DUTY','COMPACT','ENERGY EFFICIENT','SMART / CONNECTED','OEM','PRIVATE LABEL','CUSTOM CONFIGURATION','BULK / CONTRACT'];

type LeafEntry={leaf:TaxonomyBranch;path:string[]};

function mergeNodes(base:TaxonomyBranch[],extra:TaxonomyBranch[]):TaxonomyBranch[]{
  const map=new Map<string,TaxonomyBranch>();
  for(const item of base) map.set(item.name,{...item,children:item.children?[...item.children]:undefined});
  for(const item of extra){
    const existing=map.get(item.name);
    if(!existing){map.set(item.name,item);continue;}
    map.set(item.name,{...existing,children:mergeNodes(existing.children??[],item.children??[])});
  }
  return Array.from(map.values());
}

function leafEntries(node:TaxonomyBranch,path:string[]=[]):LeafEntry[]{
  const next=[...path,node.name];
  if(!node.children?.length) return [{leaf:node,path:next}];
  return node.children.flatMap(child=>leafEntries(child,next));
}

function leavesOf(node:TaxonomyBranch):TaxonomyBranch[]{return leafEntries(node).map(entry=>entry.leaf);}
function normalize(value:string){return value.toLocaleLowerCase('pl-PL').normalize('NFD').replace(/[\u0300-\u036f]/g,'');}

export default function FullCatalogTree(){
  const taxonomy=useMemo(()=>mergeNodes(catalogTaxonomy,catalogTaxonomyExpansion),[]);
  const [query,setQuery]=useState('');
  const [selectedRootName,setSelectedRootName]=useState(taxonomy[0]?.name??'');
  const [selectedGroupName,setSelectedGroupName]=useState(taxonomy[0]?.children?.[0]?.name??'');
  const q=normalize(query.trim());

  const stats=useMemo(()=>{
    const entries=taxonomy.flatMap(root=>leafEntries(root));
    const groups=taxonomy.reduce((sum,root)=>sum+(root.children?.length??0),0);
    const nodes=taxonomy.reduce((sum,root)=>sum+countNodes(root),0);
    return {roots:taxonomy.length,groups,nodes,leafGroups:entries.length,variants:entries.length*VARIANTS_PER_LEAF};
  },[taxonomy]);

  const visibleRoots=useMemo(()=>{
    if(!q)return taxonomy;
    return taxonomy.filter(root=>normalize(root.name).includes(q)||leafEntries(root).some(entry=>normalize(entry.path.join(' ')).includes(q)));
  },[q,taxonomy]);

  const selectedRoot=visibleRoots.find(root=>root.name===selectedRootName)??visibleRoots[0]??taxonomy[0];
  const groups=(selectedRoot?.children??[]).filter(group=>!q||normalize(group.name).includes(q)||leafEntries(group).some(entry=>normalize(entry.path.join(' ')).includes(q))||normalize(selectedRoot.name).includes(q));
  const selectedGroup=groups.find(group=>group.name===selectedGroupName)??groups[0];
  const entries=selectedGroup?leafEntries(selectedGroup).filter(entry=>!q||normalize(entry.path.join(' ')).includes(q)||normalize(selectedRoot?.name??'').includes(q)):[];

  const chooseRoot=(root:TaxonomyBranch)=>{setSelectedRootName(root.name);setSelectedGroupName(root.children?.[0]?.name??'');};
  const chooseGroup=(group:TaxonomyBranch)=>setSelectedGroupName(group.name);

  return <section className="section full-catalog-tree">
    <div className="taxonomy-leaf-heading"><div><p className="eyebrow">GLOBALNY KATALOG SOURCINGOWY B2B</p><h2>Maksymalnie pogłębiane drzewo kategorii i ofert PROFESJA</h2><p>Nawigacja obejmuje dział główny, grupę, rodzinę, podrodzinę, typ produktu i wariant zapytania. Rozszerzenia są łączone z bazową taksonomią bez duplikowania istniejących gałęzi.</p></div></div>

    <div className="catalog-meta catalog-meta-wide">
      <div><strong>{stats.roots}</strong><span>głównych działów</span></div>
      <div><strong>{stats.nodes}</strong><span>łącznie węzłów drzewa</span></div>
      <div><strong>{stats.leafGroups}</strong><span>końcowych typów produktów</span></div>
      <div><strong>{stats.variants.toLocaleString('pl-PL')}+</strong><span>konfiguracji zapytań</span></div>
    </div>

    <div className="catalog-toolbar full-tree-toolbar"><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Szukaj produktu, rodziny, grupy lub kategorii…" aria-label="Szukaj w pełnym drzewie katalogu"/></div>

    {visibleRoots.length===0?<div className="catalog-empty">Brak dopasowania. Możesz złożyć indywidualne zapytanie sourcingowe także dla produktu spoza widocznego drzewa.</div>:
    <div className="marketplace-megamenu">
      <nav className="mega-root-column" aria-label="Główne kategorie">{visibleRoots.map(root=><button key={root.name} type="button" onClick={()=>chooseRoot(root)} className={root.name===selectedRoot?.name?'mega-root active':'mega-root'}><span>{root.name}</span><b>›</b></button>)}</nav>
      <nav className="mega-group-column" aria-label="Grupy produktowe"><div className="mega-column-heading"><span>DZIAŁ</span><strong>{selectedRoot?.name}</strong></div>{groups.map(group=><button key={group.name} type="button" onClick={()=>chooseGroup(group)} className={group.name===selectedGroup?.name?'mega-group active':'mega-group'}><span>{group.name}</span><small>{leavesOf(group).length} typów • {leavesOf(group).length*VARIANTS_PER_LEAF} konfiguracji</small></button>)}</nav>
      <div className="mega-product-column"><div className="mega-column-heading"><span>GRUPA</span><strong>{selectedGroup?.name??'Wybierz grupę'}</strong></div><div className="mega-product-grid">
        {entries.map(entry=>{
          const familyPath=entry.path.slice(0,-1);
          return <article className="mega-product-card" key={entry.path.join('>')}><div className="product-path">{familyPath.join(' › ')}</div><h3>{entry.leaf.name}</h3><p>Wybierz profil produktu. W zapytaniu określisz zastosowanie, parametry, ilość, budżet, rynek docelowy, dokumentację i warunki dostawy.</p><div className="catalog-variant-grid">{variantLabels.map((variant,index)=>{
            const label=`${entry.leaf.name} — ${variant}`;
            const params=new URLSearchParams({product:label,category:selectedRoot?.name??'',group:selectedGroup?.name??'',path:entry.path.join(' > '),source:'catalog-tree'});
            return <a key={variant} href={`/offers/new?${params.toString()}`} title={`Przygotuj zapytanie: ${label}`}><span>{String(index+1).padStart(2,'0')}</span>{variant}</a>;
          })}</div></article>;
        })}
      </div></div>
    </div>}

    <div className="catalog-sourcing-note"><strong>Standard publikacji konkretnej oferty:</strong> drzewo jest szerokim indeksem sourcingowym. Karta handlowa jest publikowana osobno po kwalifikacji źródła i zawiera właściwe zdjęcia, krótkie wideo/demo jeżeli jest dostępne u źródła, opis funkcji i zastosowania, parametry, aktualną cenę/wycenę, MOQ, dostępność, gwarancję/RMA, instrukcję, dokumentację, logistykę oraz odnośnik do źródła. Niepełne lub niepotwierdzone dane nie są przedstawiane jako zweryfikowana oferta.</div>
  </section>;
}

function countNodes(node:TaxonomyBranch):number{return 1+(node.children??[]).reduce((sum,child)=>sum+countNodes(child),0);}
