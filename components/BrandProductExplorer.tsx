'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type Brand = { name: string; slug: string; icon?: string; groups: string[] };
type BrandProduct = { id: string; brand: string; title: string; category: string; image: string; note: string };

const brands: Brand[] = [
  { name:'Apple', slug:'apple', icon:'apple', groups:['Elektronika','Smartfony'] },
  { name:'Samsung', slug:'samsung', icon:'samsung', groups:['Elektronika','Smartfony','AGD'] },
  { name:'Huawei', slug:'huawei', icon:'huawei', groups:['Elektronika','Smartfony'] },
  { name:'Xiaomi', slug:'xiaomi', icon:'xiaomi', groups:['Elektronika','Smartfony'] },
  { name:'OPPO', slug:'oppo', icon:'oppo', groups:['Smartfony'] },
  { name:'vivo', slug:'vivo', icon:'vivo', groups:['Smartfony'] },
  { name:'realme', slug:'realme', icon:'realme', groups:['Smartfony'] },
  { name:'OnePlus', slug:'oneplus', icon:'oneplus', groups:['Smartfony'] },
  { name:'HONOR', slug:'honor', icon:'honor', groups:['Smartfony'] },
  { name:'Nubia / REDMAGIC', slug:'nubia-redmagic', groups:['Smartfony','Gaming'] },
  { name:'Motorola', slug:'motorola', icon:'motorola', groups:['Smartfony'] },
  { name:'Google', slug:'google', icon:'google', groups:['Smartfony','Elektronika'] },
  { name:'Sony', slug:'sony', icon:'sony', groups:['Elektronika'] },
  { name:'Lenovo', slug:'lenovo', icon:'lenovo', groups:['Komputery'] },
  { name:'ASUS', slug:'asus', icon:'asus', groups:['Komputery'] },
  { name:'Acer', slug:'acer', icon:'acer', groups:['Komputery'] },
  { name:'Dell', slug:'dell', icon:'dell', groups:['Komputery'] },
  { name:'HP', slug:'hp', icon:'hp', groups:['Komputery'] },
  { name:'Microsoft', slug:'microsoft', icon:'microsoft', groups:['Komputery'] },
  { name:'Intel', slug:'intel', icon:'intel', groups:['Komputery','Podzespoły'] },
  { name:'AMD', slug:'amd', icon:'amd', groups:['Komputery','Podzespoły'] },
  { name:'NVIDIA', slug:'nvidia', icon:'nvidia', groups:['Komputery','Podzespoły'] },
  { name:'Bosch', slug:'bosch', icon:'bosch', groups:['Narzędzia','Automatyka','AGD'] },
  { name:'Siemens', slug:'siemens', icon:'siemens', groups:['Automatyka','Przemysł'] },
  { name:'LG', slug:'lg', icon:'lg', groups:['Elektronika','AGD'] },
  { name:'Panasonic', slug:'panasonic', icon:'panasonic', groups:['Elektronika','Przemysł'] },
  { name:'Philips', slug:'philips', icon:'philips', groups:['Elektronika','Oświetlenie'] },
  { name:'DJI', slug:'dji', icon:'dji', groups:['Elektronika','Drony'] },
  { name:'Anker', slug:'anker', icon:'anker', groups:['Akcesoria'] },
  { name:'Baseus', slug:'baseus', icon:'baseus', groups:['Akcesoria'] },
  { name:'UGREEN', slug:'ugreen', icon:'ugreen', groups:['Akcesoria'] },
  { name:'Hilti', slug:'hilti', icon:'hilti', groups:['Narzędzia','Budownictwo'] },
  { name:'Milwaukee', slug:'milwaukee', icon:'milwaukee', groups:['Narzędzia','Budownictwo'] },
  { name:'Makita', slug:'makita', icon:'makita', groups:['Narzędzia','Budownictwo'] },
  { name:'Festool', slug:'festool', icon:'festool', groups:['Narzędzia'] },
  { name:'DeWalt', slug:'dewalt', icon:'dewalt', groups:['Narzędzia','Budownictwo'] },
];

const products: BrandProduct[] = [
  { id:'apple-phone', brand:'Apple', title:'Smartfon premium dla biznesu', category:'Smartfony i urządzenia mobilne', image:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=82', note:'Zdjęcie poglądowe; model, wariant i dostępność potwierdzane przed ofertą.' },
  { id:'samsung-phone', brand:'Samsung', title:'Smartfon premium 5G', category:'Smartfony i urządzenia mobilne', image:'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=82', note:'Zdjęcie poglądowe; publikacja konkretnego modelu po weryfikacji źródła.' },
  { id:'redmagic-phone', brand:'Nubia / REDMAGIC', title:'Smartfon gamingowy klasy premium', category:'Smartfony i urządzenia mobilne', image:'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=1200&q=82', note:'Oferta B2B; konkretny model i materiały producenta po potwierdzeniu praw do wykorzystania.' },
  { id:'lenovo-laptop', brand:'Lenovo', title:'Laptop biznesowy / stacja mobilna', category:'Laptopy i komputery mobilne', image:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=82', note:'Konfiguracja dobierana do zastosowania i budżetu klienta.' },
  { id:'dell-workstation', brand:'Dell', title:'Mobilna stacja robocza', category:'Laptopy i komputery mobilne', image:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=82', note:'Parametry, cena i dostępność potwierdzane przed ofertą wiążącą.' },
  { id:'asus-computer', brand:'ASUS', title:'Komputer biznesowy premium', category:'Komputery i stacje robocze', image:'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=82', note:'Materiał poglądowy dla kategorii.' },
  { id:'bosch-tool', brand:'Bosch', title:'Profesjonalny zestaw elektronarzędzi', category:'Narzędzia profesjonalne', image:'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=82', note:'Dokładny zestaw i warunki gwarancji po potwierdzeniu oferty.' },
  { id:'hilti-tool', brand:'Hilti', title:'Elektronarzędzia dla budownictwa', category:'Narzędzia profesjonalne', image:'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=82', note:'Publikacja konkretnego SKU dopiero po potwierdzeniu źródła i dostępności.' },
  { id:'makita-tool', brand:'Makita', title:'Akumulatorowe narzędzia profesjonalne', category:'Narzędzia profesjonalne', image:'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=82', note:'Zdjęcie poglądowe; specyfikacja zależy od konfiguracji.' },
  { id:'dewalt-tool', brand:'DeWalt', title:'Zestaw narzędzi do prac ciężkich', category:'Narzędzia profesjonalne', image:'https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?auto=format&fit=crop&w=1200&q=82', note:'Model i dostępność potwierdzane w RFQ.' },
  { id:'siemens-automation', brand:'Siemens', title:'Automatyka i sterowanie przemysłowe', category:'Automatyka przemysłowa', image:'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=82', note:'Zakres systemu ustalany indywidualnie.' },
  { id:'panasonic-industry', brand:'Panasonic', title:'Elektronika i rozwiązania przemysłowe', category:'Elektronika / Przemysł', image:'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=82', note:'Materiał poglądowy; konkretne produkty po weryfikacji.' },
  { id:'lg-display', brand:'LG', title:'Profesjonalny ekran / digital signage', category:'Monitory i wyświetlacze', image:'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=82', note:'Rozmiar, jasność i wariant dobierane do miejsca instalacji.' },
  { id:'philips-light', brand:'Philips', title:'Profesjonalne oświetlenie LED', category:'Oświetlenie profesjonalne', image:'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=82', note:'Parametry instalacji i sterowania potwierdzane przed ofertą.' },
  { id:'dji-drone', brand:'DJI', title:'Dron do zastosowań biznesowych', category:'Elektronika / Drony', image:'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=82', note:'Wariant i dopuszczalne zastosowania zależą od rynku i konfiguracji.' },
  { id:'anker-accessories', brand:'Anker', title:'Zasilanie i akcesoria mobilne', category:'Akcesoria elektroniczne', image:'https://images.unsplash.com/photo-1609592424824-2f70d64a38db?auto=format&fit=crop&w=1200&q=82', note:'Dobór do urządzeń klienta.' },
  { id:'baseus-accessories', brand:'Baseus', title:'Akcesoria i stacje dokujące', category:'Akcesoria elektroniczne', image:'https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1200&q=82', note:'Materiał poglądowy; kompatybilność potwierdzana przed zakupem.' },
  { id:'ugreen-accessories', brand:'UGREEN', title:'Huby, przewody i infrastruktura stanowiska', category:'Akcesoria elektroniczne', image:'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1200&q=82', note:'Konfiguracja pod stanowisko pracy klienta.' },
];

function iconUrl(brand: Brand){
  return brand.icon ? `https://cdn.simpleicons.org/${brand.icon}/747474` : null;
}

export default function BrandProductExplorer(){
  const [selected, setSelected] = useState<string>('Apple');
  const visible = useMemo(() => products.filter((p) => p.brand === selected), [selected]);

  return (
    <section aria-label="Marki i produkty" style={{ margin:'34px 0' }}>
      <div style={{ display:'flex', alignItems:'end', justifyContent:'space-between', gap:16, flexWrap:'wrap', marginBottom:16 }}>
        <div>
          <p className="eyebrow">BRAND EXPLORER • PANEL MAREK</p>
          <h2 style={{ margin:'4px 0 8px' }}>Setki marek w 50 sklepach tematycznych</h2>
          <p style={{ margin:0, maxWidth:860, color:'#53636b', lineHeight:1.65 }}>Kliknij markę, aby zobaczyć przypisane produkty. Logotypy są prezentowane monochromatycznie wyłącznie jako identyfikacja producenta produktu; nie oznaczają partnerstwa ani autoryzacji PROFESJA.</p>
        </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))', gap:10 }}>
        {brands.map((brand) => {
          const active = brand.name === selected;
          const url = iconUrl(brand);
          return (
            <button key={brand.slug} type="button" onClick={() => setSelected(brand.name)} aria-pressed={active}
              style={{ minHeight:84, borderRadius:14, border:active ? '2px solid #1aa79b' : '1px solid #dce3e6', background:active ? '#eef9f8' : '#fff', padding:'12px 10px', cursor:'pointer', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:8 }}>
              {url ? <img src={url} alt="" aria-hidden="true" style={{ width:32, height:32, objectFit:'contain', filter:'grayscale(1)' }} /> : <span aria-hidden="true" style={{ width:32, height:32, display:'grid', placeItems:'center', borderRadius:8, background:'#eceff1', color:'#666', fontWeight:900 }}>{brand.name.slice(0,2).toUpperCase()}</span>}
              <strong style={{ color:'#454d51', fontSize:13, textAlign:'center' }}>{brand.name}</strong>
            </button>
          );
        })}
      </div>

      <div style={{ marginTop:22 }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:16, flexWrap:'wrap', marginBottom:12 }}>
          <h3 style={{ margin:0 }}>Produkty marki: {selected}</h3>
          <Link href={`/offers/new?brand=${encodeURIComponent(selected)}`} style={{ fontWeight:800 }}>Zapytaj o inną ofertę tej marki →</Link>
        </div>
        {visible.length ? (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:16 }}>
            {visible.map((product) => (
              <article key={product.id} style={{ overflow:'hidden', border:'1px solid #dde4e7', borderRadius:16, background:'#fff', boxShadow:'0 10px 28px rgba(24,45,54,.06)' }}>
                <img src={product.image} alt={`${product.title} — materiał poglądowy`} loading="lazy" style={{ width:'100%', aspectRatio:'16/10', objectFit:'cover', display:'block' }} />
                <div style={{ padding:16 }}>
                  <p className="eyebrow" style={{ marginBottom:6 }}>{product.brand} • {product.category}</p>
                  <h4 style={{ margin:'0 0 8px', fontSize:19 }}>{product.title}</h4>
                  <p style={{ color:'#64727a', lineHeight:1.55, margin:'0 0 14px' }}>{product.note}</p>
                  <Link href={`/offers/new?product=${encodeURIComponent(product.title)}&brand=${encodeURIComponent(product.brand)}&category=${encodeURIComponent(product.category)}`} style={{ fontWeight:800 }}>Poproś o ofertę PROFESJA →</Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div style={{ border:'1px dashed #cfd8dc', borderRadius:14, padding:18, background:'#fff', color:'#5b686e' }}>
            Katalog tej marki jest rozbudowywany. Możesz już złożyć zapytanie o konkretny produkt lub model.
          </div>
        )}
      </div>
    </section>
  );
}
