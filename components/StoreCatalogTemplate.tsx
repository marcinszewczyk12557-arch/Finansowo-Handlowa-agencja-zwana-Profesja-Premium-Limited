'use client';
import {useMemo,useState} from 'react';
import type {StoreSpec} from '../lib/stores02to06';
import {MIN_ORDER_PLN} from '../lib/stores02to06';

export default function StoreCatalogTemplate({store}:{store:StoreSpec}){
 const [q,setQ]=useState(''); const [group,setGroup]=useState('all');
 const rows=useMemo(()=>store.tree.flatMap(g=>g.types.map((type,i)=>({group:g.group,type,sku:`${store.id}-${String(i+1).padStart(3,'0')}`}))).filter(x=>(group==='all'||x.group===group)&&(`${x.group} ${x.type}`.toLowerCase().includes(q.toLowerCase()))),[q,group,store]);
 const structuredData={
  '@context':'https://schema.org','@graph':[
   {'@type':'Organization','@id':'/#organization',name:'PROFESJA PREMIUM LIMITED™',url:'/'},
   {'@type':'Service',name:`${store.name} — sourcing i obsługa B2B`,provider:{'@id':'/#organization'},serviceType:store.name,areaServed:'PL',description:'Sourcing, weryfikacja dokumentacji, Product Compliance, organizacja oferty i logistyki B2B. Parametry handlowe są potwierdzane dla konkretnego zapytania.'},
   {'@type':'ItemList',name:`${store.name} — profile zapytań handlowych`,numberOfItems:rows.length,itemListElement:rows.map((r,index)=>({'@type':'ListItem',position:index+1,item:{'@type':'Product',name:r.type,category:r.group,sku:r.sku,description:'Profil zapytania handlowego. Marka, model, cena, dostępność, certyfikaty i właściwości wymagają potwierdzenia przed publikacją jako oferta.'}}))}
  ]
 };
 return <main style={{maxWidth:1180,margin:'0 auto',padding:'32px 20px',fontFamily:'Arial,sans-serif'}}>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
  <header><p>{store.id} · PROFESJA PREMIUM LIMITED™</p><h1>{store.name}</h1><p>Profesjonalny katalog B2B. Każda pozycja jest profilem zapytania handlowego do sourcingu i weryfikacji, a nie deklaracją dostępności konkretnej marki lub modelu.</p></header>
  <section aria-label="Wyszukiwanie i filtry" style={{display:'flex',gap:12,flexWrap:'wrap',margin:'24px 0'}}><input aria-label="Szukaj" value={q} onChange={e=>setQ(e.target.value)} placeholder="Szukaj typu produktu" style={{padding:12,minWidth:260}}/><select aria-label="Filtr specjalizacji" value={group} onChange={e=>setGroup(e.target.value)} style={{padding:12}}><option value="all">Wszystkie specjalizacje</option>{store.tree.map(g=><option key={g.group}>{g.group}</option>)}</select></section>
  <section><h2>Drzewo specjalizacji</h2>{store.tree.map(g=><div key={g.group}><h3>{g.group}</h3><p>{g.types.join(' · ')}</p></div>)}</section>
  <section><h2>Karty produktów / RFQ</h2><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:16}}>{rows.map(r=><article key={r.sku} style={{border:'1px solid #ccc',borderRadius:14,padding:18}}><small>{r.sku}</small><h3>{r.type}</h3><p>{r.group}</p><p><strong>Status:</strong> do sourcingu i Product Compliance.</p><p>Marka, model, cena, MOQ, dostępność, certyfikaty, gwarancja i multimedia: publikowane dopiero po weryfikacji dowodów.</p><a href={`/contact?store=${encodeURIComponent(store.id)}&product=${encodeURIComponent(r.type)}`}>Wyślij RFQ</a></article>)}</div></section>
  <section style={{marginTop:28}}><h2>Warunki i bezpieczeństwo procesu</h2><p>Minimalna wartość pojedynczego zamówienia: <strong>{MIN_ORDER_PLN.toLocaleString('pl-PL')} zł</strong>. Złożenie RFQ nie tworzy zobowiązania finansowego. Wiążące warunki powstają dopiero w odrębnym, zaakceptowanym procesie transakcyjnym.</p><p>Sourcing → weryfikacja dostawcy → Product Compliance i dokumenty → potwierdzenie parametrów/ceny/dostępności → logistyka i warunki dostawy → oferta do akceptacji.</p></section>
 </main>
}
