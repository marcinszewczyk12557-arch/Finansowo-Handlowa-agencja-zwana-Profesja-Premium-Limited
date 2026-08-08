'use client';

import { useMemo, useState } from 'react';
import { strictPublicOffers } from '../data/strictQualifiedOffers';
import { strictPublicOfficeOffers } from '../data/strictQualifiedOffersOffice';
import { strictPublicOffersExpansion2 } from '../data/strictQualifiedOffersExpansion2';
import { strictPublicCashHandlingOffers } from '../data/strictQualifiedOffersCashHandling';
import { strictPublicWaterOffers } from '../data/strictQualifiedOffersWater';

function visual(label:string){
  const safe=label.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const s=`<svg xmlns='http://www.w3.org/2000/svg' width='900' height='520'><rect width='100%' height='100%' fill='#0b171b'/><circle cx='450' cy='205' r='118' fill='#101f25' stroke='#d4af37' stroke-width='5'/><text x='50%' y='43%' text-anchor='middle' fill='#d4af37' font-size='50' font-family='Arial' font-weight='700'>PREMIUM</text><text x='50%' y='64%' text-anchor='middle' fill='#d7e3e5' font-size='24' font-family='Arial'>${safe.slice(0,64)}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(s)}`;
}

export default function HierarchicalCatalog(){
  const offers=useMemo(()=>{
    const combined=[...strictPublicOffers(),...strictPublicOfficeOffers(),...strictPublicOffersExpansion2(),...strictPublicCashHandlingOffers(),...strictPublicWaterOffers()];
    const ids=new Set<string>();
    const titles=new Set<string>();
    return combined.filter((offer)=>{
      const key=offer.title.trim().toLowerCase();
      const unique=!ids.has(offer.id)&&!titles.has(key);
      ids.add(offer.id); titles.add(key);
      return unique;
    });
  },[]);
  const categories=useMemo(()=>Array.from(new Set(offers.map((offer)=>offer.category))),[offers]);
  const [selectedCategory,setSelectedCategory]=useState(categories[0] ?? '');
  const [query,setQuery]=useState('');

  const visible=useMemo(()=>{
    const q=query.trim().toLowerCase();
    return offers.filter((offer)=>offer.category===selectedCategory && (!q || `${offer.title} ${offer.use} ${offer.purpose} ${offer.function}`.toLowerCase().includes(q)));
  },[offers,selectedCategory,query]);

  return <>
    <section className='section catalog-taxonomy-summary'>
      <div className='catalog-meta'>
        <div><strong>{categories.length}</strong><span>kwalifikowanych kategorii</span></div>
        <div><strong>{offers.length}</strong><span>unikalnych ofert po twardej bramce</span></div>
        <div><strong>3+ lata</strong><span>minimalny staż dostawcy</span></div>
      </div>
      <p className='catalog-count'>Asortyment PROFESJA jest celowo mniejszy od globalnego marketplace. Publikujemy tylko unikalne pozycje, dla których wewnętrzna dokumentacja wskazuje dostawcę ze statusem Verified Supplier i stażem minimum 3 lata. Każde realne zamówienie musi zostać ponownie zakwalifikowane do Trade Assurance i opłacone przez właściwy kanał platformy, aby ochrona zamówienia mogła obowiązywać.</p>
    </section>

    <section className='section taxonomy-browser'>
      <div className='catalog-toolbar'>
        <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Szukaj w wybranej kategorii…' aria-label='Szukaj ofert'/>
      </div>
      <div className='taxonomy-layout'>
        <aside className='taxonomy-sidebar'>
          <h3>Kategorie asortymentu</h3>
          <nav className='qualified-category-list' aria-label='Kategorie katalogu'>
            {categories.map((category)=>{
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
                <p className='eyebrow'>VERIFIED SUPPLIER • {offer.supplierYears}+ LAT • TRADE ASSURANCE WYMAGANE</p>
                <h3>{offer.title}</h3>
                <p><strong>Do czego można użyć:</strong> {offer.use}.</p>
                <p><strong>Przeznaczenie:</strong> {offer.purpose}.</p>
                <p><strong>Jaką funkcję spełnia:</strong> {offer.function}.</p>
                <p><strong>Kwalifikacja dostawcy:</strong> źródło wewnętrzne potwierdza status Verified Supplier oraz wymagany staż minimum 3 lata. Dane dostawcy pozostają poufne po stronie PROFESJA.</p>
                <p><strong>Ochrona każdej transakcji:</strong> zlecenie może przejść do zakupu wyłącznie jako kwalifikowane zamówienie Trade Assurance, po ponownym sprawdzeniu statusu dostawcy i warunków konkretnej transakcji.</p>
                <p><strong>Warunek finalny:</strong> przed zamówieniem ponownie potwierdzamy aktualną dostępność, specyfikację, gwarancję, dokumenty zgodności oraz aktywną ochronę danego zamówienia.</p>
                <a className='taxonomy-offer-link' href={`/offers/new?product=${encodeURIComponent(offer.title)}&category=${encodeURIComponent(offer.category)}`}>Poproś o ofertę i potwierdzenie warunków →</a>
              </article>)}
            </div>
          </section>
        </div>
      </div>
    </section>
  </>;
}
