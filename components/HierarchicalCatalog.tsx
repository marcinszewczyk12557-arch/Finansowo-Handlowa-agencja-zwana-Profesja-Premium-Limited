'use client';

import { useMemo, useState } from 'react';
import { publicQualifiedOffers, qualifiedCategories } from '../data/qualifiedMarketplaceOffers';

function visual(label:string){
  const safe=label.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const s=`<svg xmlns='http://www.w3.org/2000/svg' width='900' height='520'><rect width='100%' height='100%' fill='#0b171b'/><circle cx='450' cy='205' r='118' fill='#101f25' stroke='#d4af37' stroke-width='5'/><text x='50%' y='43%' text-anchor='middle' fill='#d4af37' font-size='50' font-family='Arial' font-weight='700'>PREMIUM</text><text x='50%' y='64%' text-anchor='middle' fill='#d7e3e5' font-size='24' font-family='Arial'>${safe.slice(0,64)}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(s)}`;
}

export default function HierarchicalCatalog(){
  const offers=useMemo(()=>publicQualifiedOffers(),[]);
  const [selectedCategory,setSelectedCategory]=useState(qualifiedCategories[0] ?? '');
  const [query,setQuery]=useState('');

  const visible=useMemo(()=>{
    const q=query.trim().toLowerCase();
    return offers.filter((offer)=>offer.category===selectedCategory && (!q || `${offer.title} ${offer.use} ${offer.purpose} ${offer.function}`.toLowerCase().includes(q)));
  },[offers,selectedCategory,query]);

  return <>
    <section className='section catalog-taxonomy-summary'>
      <div className='catalog-meta'>
        <div><strong>{qualifiedCategories.length}</strong><span>starannie wybranych kategorii</span></div>
        <div><strong>{offers.length}</strong><span>unikalnych ofert po bramce dostawcy</span></div>
        <div><strong>3+ lata</strong><span>minimalny staż dostawcy</span></div>
      </div>
      <p className='catalog-count'>Asortyment PROFESJA jest celowo mniejszy od globalnego marketplace. Nie publikujemy sztucznych wariantów ani duplikatów. Każda widoczna pozycja ma przypisane źródłowe potwierdzenie dostawcy z co najmniej 3-letnim stażem oraz ochroną transakcji. Ochrona transakcji działa wyłącznie wtedy, gdy konkretne zamówienie zostanie zawarte zgodnie z warunkami programu ochrony kupującego.</p>
    </section>

    <section className='section taxonomy-browser'>
      <div className='catalog-toolbar'>
        <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Szukaj w wybranej kategorii…' aria-label='Szukaj ofert'/>
      </div>
      <div className='taxonomy-layout'>
        <aside className='taxonomy-sidebar'>
          <h3>Kategorie asortymentu</h3>
          <nav className='qualified-category-list' aria-label='Kategorie katalogu'>
            {qualifiedCategories.map((category)=>{
              const count=offers.filter((offer)=>offer.category===category).length;
              const active=category===selectedCategory;
              return <button type='button' key={category} className={active?'qualified-category active':'qualified-category'} onClick={()=>setSelectedCategory(category)} aria-pressed={active}>
                <span>{category}</span><strong>{count}</strong>
              </button>;
            })}
          </nav>
        </aside>

        <div className='taxonomy-products'>
          <section className='taxonomy-leaf'>
            <div className='taxonomy-leaf-heading'>
              <div><p className='eyebrow'>ZWERYFIKOWANY ASORTYMENT</p><h2>{selectedCategory}</h2><p>Kliknięcie kategorii po lewej natychmiast zmienia zestaw ofert.</p></div>
              <span>{visible.length} ofert</span>
            </div>
            {visible.length===0 ? <div className='catalog-empty'>Brak ofert pasujących do wyszukiwania. Wyczyść pole wyszukiwania lub wybierz inną kategorię.</div> : null}
            <div className='taxonomy-product-grid'>
              {visible.map((offer,index)=><article className='taxonomy-product-card' key={offer.id}>
                <div className='taxonomy-product-number'>{String(index+1).padStart(2,'0')}</div>
                <img className='taxonomy-product-image' src={visual(offer.title)} alt={`${offer.title} — oferta PROFESJA`} loading='lazy'/>
                <p className='eyebrow'>ZWERYFIKOWANY DOSTAWCA • {offer.supplierYears}+ LAT • OCHRONA TRANSAKCJI</p>
                <h3>{offer.title}</h3>
                <p><strong>Do czego można użyć:</strong> {offer.use}.</p>
                <p><strong>Przeznaczenie:</strong> {offer.purpose}.</p>
                <p><strong>Jaką funkcję spełnia:</strong> {offer.function}.</p>
                <p><strong>Kwalifikacja dostawcy:</strong> wewnętrzny rejestr PROFESJA zawiera źródło potwierdzające wymagany staż i program ochrony transakcji. Dane dostawcy nie są ujawniane publicznie w katalogu.</p>
                <p><strong>Warunek finalny:</strong> przed złożeniem wiążącego zamówienia ponownie potwierdzamy aktualny status dostawcy, dostępność, specyfikację, gwarancję, dokumenty zgodności oraz objęcie konkretnego zamówienia ochroną transakcji.</p>
                <a className='taxonomy-offer-link' href={`/offers/new?product=${encodeURIComponent(offer.title)}&category=${encodeURIComponent(offer.category)}`}>Poproś o ofertę i potwierdzenie warunków →</a>
              </article>)}
            </div>
          </section>
        </div>
      </div>
    </section>
  </>;
}
