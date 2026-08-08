'use client';

import { useMemo, useState } from 'react';
import { strictPublicOffers } from '../data/strictQualifiedOffers';
import { strictPublicOfficeOffers } from '../data/strictQualifiedOffersOffice';
import { strictPublicOffersExpansion2 } from '../data/strictQualifiedOffersExpansion2';
import { strictPublicCashHandlingOffers } from '../data/strictQualifiedOffersCashHandling';
import { strictPublicWaterOffers } from '../data/strictQualifiedOffersWater';
import { strictPublicHvacOffers } from '../data/strictQualifiedOffersHvac';
import { hasFullSupplierEvidence } from '../data/supplierEvidenceRegistry';

function visual(label:string){
  const safe=label.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const s=`<svg xmlns='http://www.w3.org/2000/svg' width='900' height='520'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#07131f'/><stop offset='1' stop-color='#0a2830'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)'/><circle cx='450' cy='205' r='118' fill='#101f25' stroke='#20c9b7' stroke-width='5'/><text x='50%' y='43%' text-anchor='middle' fill='#20c9b7' font-size='50' font-family='Arial' font-weight='700'>PREMIUM</text><text x='50%' y='64%' text-anchor='middle' fill='#d7e3e5' font-size='24' font-family='Arial'>${safe.slice(0,64)}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(s)}`;
}

function subcategoryFor(category:string,title:string){
  const t=title.toLowerCase();
  if(category==='Narzędzia profesjonalne'){
    if(t.includes('wiert')) return 'Wiertarki i wkrętarki';
    if(t.includes('szlifier')) return 'Szlifierki';
    if(t.includes('młot')) return 'Młoty i narzędzia udarowe';
    if(t.includes('klucz')) return 'Klucze udarowe';
    return 'Elektronarzędzia';
  }
  if(category==='Stal i instalacje przemysłowe'){
    if(t.includes('rura')) return 'Rury i instalacje';
    if(t.includes('pręt')) return 'Pręty i półprodukty';
    return 'Materiały przemysłowe';
  }
  if(category==='Sprzęt laboratoryjny'){
    if(t.includes('autoklaw')) return 'Sterylizacja';
    if(t.includes('miernik')) return 'Aparatura pomiarowa';
    if(t.includes('mieszalnik')) return 'Przygotowanie próbek';
    if(t.includes('chłodzi')) return 'Chłodnictwo laboratoryjne';
    return 'Aparatura laboratoryjna';
  }
  if(category==='Meble biurowe premium'){
    if(t.includes('fotel')||t.includes('krzesło')) return 'Fotele i krzesła premium';
    return 'Wyposażenie biur';
  }
  if(category.toLowerCase().includes('wod')) return 'Systemy filtracji i uzdatniania';
  if(category.toLowerCase().includes('gotów')) return 'Liczenie, weryfikacja i zabezpieczenie gotówki';
  if(category.toLowerCase().includes('hvac')||category.toLowerCase().includes('klim')) return 'Klimatyzacja i systemy HVAC';
  if(category.toLowerCase().includes('solar')||category.toLowerCase().includes('falownik')) return 'Energetyka i przetwarzanie energii';
  if(category.toLowerCase().includes('pak')) return 'Automatyzacja pakowania';
  return 'Oferta specjalistyczna';
}

function warrantyText(category:string){
  if(category==='Sprzęt laboratoryjny') return 'Warunki gwarancji producenta, dostępność serwisu i części eksploatacyjnych są potwierdzane pisemnie przed zamówieniem.';
  if(category==='Meble biurowe premium') return 'Gwarancja producenta i zakres odpowiedzialności za elementy mechaniczne/tapicerskie są potwierdzane dla wybranego wariantu.';
  return 'Gwarancja producenta, okres ochrony, części zamienne i procedura RMA są potwierdzane przed zawarciem konkretnego zamówienia.';
}

export default function HierarchicalCatalog(){
  const offers=useMemo(()=>{
    const candidates=[...strictPublicOffers(),...strictPublicOfficeOffers(),...strictPublicOffersExpansion2(),...strictPublicCashHandlingOffers(),...strictPublicWaterOffers(),...strictPublicHvacOffers()];
    const combined=candidates.filter(hasFullSupplierEvidence);
    const ids=new Set<string>();
    const titles=new Set<string>();
    return combined.filter((offer)=>{
      const key=offer.title.trim().toLowerCase();
      const unique=!ids.has(offer.id)&&!titles.has(key);
      ids.add(offer.id); titles.add(key);
      return unique;
    }).map((offer)=>({...offer,subcategory:subcategoryFor(offer.category,offer.title)}));
  },[]);
  const categories=useMemo(()=>Array.from(new Set(offers.map((offer)=>offer.category))),[offers]);
  const [selectedCategory,setSelectedCategory]=useState(categories[0] ?? '');
  const subcategories=useMemo(()=>Array.from(new Set(offers.filter(o=>o.category===selectedCategory).map(o=>o.subcategory))),[offers,selectedCategory]);
  const [selectedSubcategory,setSelectedSubcategory]=useState<string>('');
  const [query,setQuery]=useState('');

  const chooseCategory=(category:string)=>{
    setSelectedCategory(category);
    const first=offers.find(o=>o.category===category)?.subcategory ?? '';
    setSelectedSubcategory(first);
    setQuery('');
  };

  const effectiveSubcategory=selectedSubcategory && subcategories.includes(selectedSubcategory) ? selectedSubcategory : (subcategories[0] ?? '');

  const visible=useMemo(()=>{
    const q=query.trim().toLowerCase();
    return offers.filter((offer)=>offer.category===selectedCategory && (!effectiveSubcategory || offer.subcategory===effectiveSubcategory) && (!q || `${offer.title} ${offer.use} ${offer.purpose} ${offer.function} ${offer.subcategory}`.toLowerCase().includes(q)));
  },[offers,selectedCategory,effectiveSubcategory,query]);

  return <>
    <section className='section catalog-taxonomy-summary'>
      <div className='catalog-meta'>
        <div><strong>{categories.length}</strong><span>kategorii po pełnej kwalifikacji</span></div>
        <div><strong>{offers.length}</strong><span>unikalnych ofert z pełnym dowodem</span></div>
        <div><strong>3+ lata</strong><span>minimalny staż dostawcy</span></div>
      </div>
      <p className='catalog-count'>Każda profesjonalna oferta przechodzi wewnętrzną kwalifikację źródła i dostawcy. Dane źródłowe, profile dostawców i odnośniki do producentów pozostają wyłącznie w zapleczu PROFESJA i nie są udostępniane klientowi. Cena, gwarancja, dokumentacja, multimedia i parametry są ponownie potwierdzane przed finalnym RFQ.</p>
    </section>

    <section className='section taxonomy-browser'>
      <div className='catalog-toolbar'>
        <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Szukaj w wybranej podkategorii…' aria-label='Szukaj ofert'/>
      </div>
      <div className='taxonomy-layout'>
        <aside className='taxonomy-sidebar'>
          <h3>Kategorie asortymentu</h3>
          <nav className='qualified-category-list' aria-label='Kategorie katalogu'>
            {categories.map((category)=>{
              const count=offers.filter((offer)=>offer.category===category).length;
              const active=category===selectedCategory;
              return <button type='button' key={category} className={active?'qualified-category active':'qualified-category'} onClick={()=>chooseCategory(category)} aria-pressed={active}>
                <span>{category}</span><strong>{count}</strong>
              </button>;
            })}
          </nav>
        </aside>

        <div className='taxonomy-products'>
          <section className='taxonomy-leaf'>
            <div className='taxonomy-leaf-heading'>
              <div><p className='eyebrow'>ZWERYFIKOWANY ASORTYMENT</p><h2>{selectedCategory || 'Oferty w kwalifikacji'}</h2><p>Wybierz podkategorię, a następnie konkretny produkt i jego pełne dossier handlowe PROFESJA.</p></div>
              <span>{visible.length} ofert</span>
            </div>

            <nav className='subcategory-nav' aria-label='Podkategorie'>
              {subcategories.map((subcategory)=><button key={subcategory} type='button' onClick={()=>setSelectedSubcategory(subcategory)} className={subcategory===effectiveSubcategory?'subcategory-link active':'subcategory-link'}>{subcategory} →</button>)}
            </nav>

            {offers.length===0 ? <div className='catalog-empty'>Brak ofert z kompletnym zestawem dowodów. Kandydaci pozostają w kwalifikacji wewnętrznej i nie są publikowani do czasu potwierdzenia wszystkich warunków.</div> : null}
            {offers.length>0 && visible.length===0 ? <div className='catalog-empty'>Brak ofert pasujących do wyszukiwania. Wyczyść pole wyszukiwania lub wybierz inną podkategorię.</div> : null}
            <div className='taxonomy-product-grid'>
              {visible.map((offer,index)=><article className='taxonomy-product-card professional-offer-card' key={offer.id}>
                <div className='taxonomy-product-number'>OFERTA {String(index+1).padStart(2,'0')} • {offer.subcategory}</div>
                <div className='product-media-frame'>
                  <img className='taxonomy-product-image' src={visual(offer.title)} alt={`${offer.title} — oferta PROFESJA`} loading='lazy'/>
                  <div className='media-status'>Multimedia produktowe: materiał zweryfikowany przez PROFESJA</div>
                </div>
                <p className='eyebrow'>ZWERYFIKOWANY DOSTAWCA • {offer.supplierYears}+ LAT • UBEZPIECZENIE TRANSAKCJI WERYFIKOWANE DLA KONKRETNEJ OFERTY</p>
                <h3>{offer.title}</h3>
                <p className='offer-lead'>{offer.purpose}. Produkt przeznaczony do profesjonalnych zastosowań w segmencie {offer.category.toLowerCase()}.</p>

                <div className='offer-spec-grid'>
                  <div><span>Do czego można użyć</span><strong>{offer.use}</strong></div>
                  <div><span>Przeznaczenie</span><strong>{offer.purpose}</strong></div>
                  <div><span>Funkcja</span><strong>{offer.function}</strong></div>
                  <div><span>Cena</span><strong>Aktualna cena zakupu + wycena PROFESJA po MOQ i dostawie</strong></div>
                  <div><span>Gwarancja / RMA</span><strong>{warrantyText(offer.category)}</strong></div>
                  <div><span>Instrukcja obsługi</span><strong>Instrukcja producenta i dokumentacja techniczna są pozyskiwane dla wybranego modelu; wersja PL/EN jest weryfikowana przed finalną ofertą.</strong></div>
                </div>

                <div className='source-dossier'>
                  <h4>Weryfikacja źródła i dokumentacji</h4>
                  <p>Źródło zakupu, dane producenta, profile dostawców, dokumenty weryfikacyjne oraz zewnętrzne adresy pozostają informacją wewnętrzną PROFESJA. Klient otrzymuje komplet parametrów, zdjęcia, video/demo jeśli jest dostępne, dokumentację, warunki gwarancji, logistykę i finalne warunki handlowe bez odnośników umożliwiających kontakt z dostawcą lub producentem z pominięciem PROFESJA.</p>
                </div>

                <div className='offer-actions'>
                  <a className='taxonomy-offer-link' href={`/offers/new?product=${encodeURIComponent(offer.title)}&category=${encodeURIComponent(offer.category)}`}>Poproś o ofertę PROFESJA →</a>
                </div>
              </article>)}
            </div>
          </section>
        </div>
      </div>
    </section>
  </>;
}