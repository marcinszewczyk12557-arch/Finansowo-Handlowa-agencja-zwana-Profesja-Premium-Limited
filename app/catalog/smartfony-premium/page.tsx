import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const variants = [
  { name: 'REDMAGIC 10S Pro 12GB + 256GB', finish: 'Nightfall', pricing: 'Cena detaliczna referencyjna producenta UE: 609 EUR (sprawdzono 19.08.2026; produkt oznaczony jako wyprzedany).' },
  { name: 'REDMAGIC 10S Pro 16GB + 512GB', finish: 'Dusk / Moonlight', pricing: 'Indywidualna wycena B2B po potwierdzeniu aktualnej ceny i dostępności konkretnego wariantu.' },
  { name: 'REDMAGIC 10S Pro 24GB + 1TB', finish: 'Dusk / Moonlight', pricing: 'Indywidualna wycena B2B po potwierdzeniu aktualnej ceny i dostępności konkretnego wariantu.' },
];

export default function PremiumSmartphonesPage() {
  return <>
    <Header />
    <main style={{background:'#0d1114',color:'#f5f7f8',minHeight:'100vh'}}>
      <section className='section'>
        <div style={{maxWidth:1120,margin:'0 auto'}}>
          <p className='eyebrow' style={{color:'#e2c76b'}}>SMARTFONY PREMIUM / PREMIUM SMARTPHONES</p>
          <h1>REDMAGIC 10S Pro — oferta katalogowa B2B</h1>
          <p style={{maxWidth:900,lineHeight:1.7,color:'#c7d0d4'}}>Katalog referencyjny oparty na publicznych danych producenta REDMAGIC Europe. PROFESJA PREMIUM LIMITED™ nie deklaruje oficjalnego partnerstwa, autoryzacji ani prawa do materiałów marki bez odrębnych dokumentów.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(270px,1fr))',gap:18,margin:'30px 0'}}>
            {variants.map(v => <article key={v.name} style={{background:'#171d21',border:'1px solid #2c373d',borderRadius:18,padding:22}}>
              <h2 style={{fontSize:'1.25rem'}}>{v.name}</h2>
              <p><strong>Wykończenie:</strong> {v.finish}</p>
              <p style={{lineHeight:1.65,color:'#c7d0d4'}}>{v.pricing}</p>
              <p><strong>Minimum B2B:</strong> 5 sztuk.</p>
              <p><strong>Dostępność:</strong> potwierdzana przed przyjęciem zamówienia.</p>
            </article>)}
          </div>
          <section style={{background:'#151b1f',border:'1px solid #2c373d',borderRadius:18,padding:24,margin:'28px 0'}}>
            <h2>Parametry rodziny 10S Pro</h2>
            <p style={{lineHeight:1.7,color:'#c7d0d4'}}>Według oficjalnej specyfikacji europejskiej: Snapdragon 8 Elite Leading Version, ekran AMOLED 6,853 cala do 144 Hz, bateria 7050 mAh, ładowanie 80 W, warianty pamięci 12/256 GB, 16/512 GB i 24 GB/1 TB. Zgodność pasm 4G/5G należy sprawdzić dla operatora i rynku docelowego przed ofertą.</p>
            <a href='https://eu.redmagic.gg/pages/redmagic-10s-pro-specs' target='_blank' rel='noreferrer' style={{color:'#e2c76b'}}>Oficjalna specyfikacja REDMAGIC Europe →</a>
          </section>
          <section style={{background:'#fff8df',color:'#332d1d',borderRadius:18,padding:24,lineHeight:1.7}}>
            <h2>Warunki handlowe i finansowanie</h2>
            <p><strong>Minimalne zamówienie:</strong> 5 sztuk. Cena jest ustalana dla konkretnego modelu, pamięci, koloru, ilości, dostępności i warunków dostawy.</p>
            <p>Wartość większego zamówienia może orientacyjnie zbliżać się do ok. 110 000 zł wyłącznie wtedy, gdy wynika to z faktycznej liczby urządzeń i aktualnie potwierdzonej ceny. Nie jest to automatyczna cena pakietu ani limit finansowania.</p>
            <p>W kalkulacji finansowania rozdzielamy: cenę produktu, wartość zamówienia, wkład własny, okres, koszt finansowania oraz miesięczną ratę. Nie prezentujemy 500 zł miesięcznie jako raty dla całej wartości ok. 110 000 zł bez realnego wyliczenia i kwalifikacji klienta.</p>
          </section>
          <p style={{marginTop:24,color:'#9fadb3'}}>Źródło cenowe/specyfikacyjne sprawdzone 19.08.2026: REDMAGIC Europe. Oferta wiążąca powstaje dopiero po ponownej weryfikacji dostępności i warunków.</p>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
