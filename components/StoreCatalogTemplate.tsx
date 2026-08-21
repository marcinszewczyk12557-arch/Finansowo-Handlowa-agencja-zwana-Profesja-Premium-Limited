'use client';
import {useMemo,useState} from 'react';
import type {StoreSpec} from '../lib/stores02to06';
import {MIN_ORDER_PLN} from '../lib/stores02to06';

export default function StoreCatalogTemplate({store}:{store:StoreSpec}){
 const [q,setQ]=useState(''); const [group,setGroup]=useState('all');
 const allRows=useMemo(()=>{let n=0;return store.tree.flatMap(g=>g.types.map(type=>{n+=1;return {group:g.group,type,sku:`${store.id}-${String(n).padStart(3,'0')}`};}));},[store]);
 const rows=useMemo(()=>allRows.filter(x=>(group==='all'||x.group===group)&&(`${x.group} ${x.type}`.toLowerCase().includes(q.trim().toLowerCase()))),[q,group,allRows]);
 const structuredData={
  '@context':'https://schema.org','@graph':[
   {'@type':'Organization','@id':'/#organization',name:'PROFESJA PREMIUM LIMITED™',url:'/'},
   {'@type':'WebPage','@id':`/sklepy/${store.slug}#webpage`,name:`${store.name} — katalog B2B`,isPartOf:{'@id':'/#organization'},about:{'@id':`/sklepy/${store.slug}#service`},description:'Katalog profili RFQ. Dane handlowe i zgodność konkretnego produktu są potwierdzane przed przedstawieniem wiążącej oferty.'},
   {'@type':'BreadcrumbList',itemListElement:[
    {'@type':'ListItem',position:1,name:'PROFESJA PREMIUM LIMITED',item:'/'},
    {'@type':'ListItem',position:2,name:'Sklepy',item:'/katalog'},
    {'@type':'ListItem',position:3,name:store.name,item:`/sklepy/${store.slug}`}
   ]},
   {'@type':'Service','@id':`/sklepy/${store.slug}#service`,name:`${store.name} — sourcing i obsługa B2B`,provider:{'@id':'/#organization'},serviceType:store.name,areaServed:'PL',description:'Sourcing, weryfikacja dokumentacji, Product Compliance, organizacja oferty i logistyki B2B. Parametry handlowe są potwierdzane dla konkretnego zapytania.'},
   {'@type':'ItemList',name:`${store.name} — profile zapytań handlowych`,numberOfItems:allRows.length,itemListElement:allRows.map((r,index)=>({'@type':'ListItem',position:index+1,item:{'@type':'Product','@id':`/sklepy/${store.slug}#${r.sku}`,name:r.type,category:r.group,sku:r.sku,description:'Profil zapytania handlowego. Marka, model, cena, dostępność, certyfikaty i właściwości wymagają potwierdzenia przed publikacją jako oferta.',additionalProperty:[{'@type':'PropertyValue',name:'Status danych',value:'RFQ / wymaga weryfikacji'}]}}))}
  ]
 };
 return <main style={{maxWidth:1180,margin:'0 auto',padding:'32px 20px',fontFamily:'Arial,sans-serif'}}>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
  <header><p>{store.id} · PROFESJA PREMIUM LIMITED™</p><h1>{store.name}</h1><p>Profesjonalny katalog B2B. Każda pozycja jest profilem zapytania handlowego do sourcingu i weryfikacji, a nie deklaracją dostępności konkretnej marki lub modelu.</p></header>
  <nav aria-label="Ścieżka katalogu" style={{margin:'18px 0'}}><a href="/">PROFESJA</a> → <a href="/katalog">Katalog</a> → <span>{store.name}</span> → produkt → RFQ</nav>
  <section aria-label="Wyszukiwanie i filtry" style={{display:'flex',gap:12,flexWrap:'wrap',margin:'24px 0'}}><input aria-label="Szukaj" value={q} onChange={e=>setQ(e.target.value)} placeholder="Szukaj typu produktu" style={{padding:12,minWidth:260,flex:'1 1 260px'}}/><select aria-label="Filtr specjalizacji" value={group} onChange={e=>setGroup(e.target.value)} style={{padding:12,maxWidth:'100%'}}><option value="all">Wszystkie specjalizacje</option>{store.tree.map(g=><option key={g.group}>{g.group}</option>)}</select><span aria-live="polite" style={{padding:12}}>{rows.length} z {allRows.length} profili</span></section>
  <section><h2>Drzewo specjalizacji</h2>{store.tree.map(g=><div key={g.group}><h3>{g.group}</h3><p>{g.types.join(' · ')}</p></div>)}</section>
  <section><h2>Karty produktów / RFQ</h2><p><strong>Uwaga o danych:</strong> schema Product opisuje wyłącznie profil RFQ. Schema Offer nie jest emitowana, dopóki cena, waluta, dostępność, sprzedawca i warunki konkretnej oferty nie zostaną potwierdzone.</p><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(250px,100%),1fr))',gap:16}}>{rows.map(r=><article id={r.sku} key={r.sku} style={{border:'1px solid #ccc',borderRadius:14,padding:18}}><small>{r.sku}</small><h3>{r.type}</h3><p>{r.group}</p><p><strong>Status:</strong> do sourcingu i Product Compliance.</p><p><strong>Do potwierdzenia:</strong> producent i autentyczność produktu, dokładny model, parametry, cena, MOQ, dostępność, gwarancja/RMA, legalne multimedia, deklaracje zgodności i dokumentacja wymagana dla danego zastosowania.</p><p><strong>Logistyka:</strong> gabaryty, masa, Incoterms, termin, sposób transportu, ubezpieczenie i dokumenty przewozowe ustalane po kwalifikacji źródła.</p><a href={`/contact?store=${encodeURIComponent(store.id)}&sku=${encodeURIComponent(r.sku)}&product=${encodeURIComponent(r.type)}`}>Wyślij RFQ</a></article>)}</div></section>
  <section style={{marginTop:28}}><h2>Warunki i bezpieczeństwo procesu</h2><p>Minimalna wartość pojedynczego zamówienia: <strong>{MIN_ORDER_PLN.toLocaleString('pl-PL')} zł</strong>. Złożenie RFQ nie tworzy zobowiązania finansowego. Wiążące warunki powstają dopiero w odrębnym, zaakceptowanym procesie transakcyjnym.</p><p>Sourcing → weryfikacja dostawcy → Product Compliance i dokumenty → potwierdzenie parametrów/ceny/dostępności → logistyka i warunki dostawy → oferta do akceptacji.</p></section>
 </main>
}
