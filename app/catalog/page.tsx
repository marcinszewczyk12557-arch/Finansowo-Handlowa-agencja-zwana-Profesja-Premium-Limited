import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FranchiseCatalog from '../../components/FranchiseCatalog';

const verifiedExamples = [
  {
    product: 'Wiertarko-wkrętarka akumulatorowa 21V',
    profesjaPrice: '162–223 zł',
    verification: 'Kontrahent i cena referencyjna zweryfikowane wewnętrznie 16.08.2026. Dokumenty zgodności konkretnej konfiguracji są ponownie sprawdzane przed ofertą wiążącą.',
  },
  {
    product: 'Stołowy miernik przewodności laboratoryjnej',
    profesjaPrice: '4 598–4 961 zł',
    verification: 'Kontrahent i cena referencyjna zweryfikowane wewnętrznie 16.08.2026. Wymagana dokumentacja zgodności jest sprawdzana dla konkretnego modelu i rynku docelowego.',
  },
  {
    product: 'Przenośny miernik przewodności / TDS / zasolenia',
    profesjaPrice: '4 139–4 356 zł',
    verification: 'Kontrahent i cena referencyjna zweryfikowane wewnętrznie 16.08.2026. Zgodność produktu z wymaganiami rynku docelowego jest potwierdzana przed przyjęciem zamówienia.',
  },
  {
    product: 'Fotel masażujący 4D Zero Gravity — konfiguracja profesjonalna',
    profesjaPrice: '5 203–5 809 zł',
    verification: 'Kontrahent i cena referencyjna zweryfikowane wewnętrznie 16.08.2026. Parametry, dokumentacja bezpieczeństwa i zgodność konkretnego wariantu są potwierdzane przed ofertą wiążącą.',
  },
  {
    product: 'Minikoparka 2 t — konfiguracja bazowa',
    profesjaPrice: 'ok. 21 782 zł',
    verification: 'Kontrahent i cena referencyjna zweryfikowane wewnętrznie 16.08.2026. Dokumentacja CE, silnik, osprzęt i warunki dostawy są sprawdzane dla konkretnej konfiguracji przed ofertą wiążącą.',
  },
];

export default function CatalogPage(){
  return <>
    <Header/>
    <main style={{background:'#f6f8f9', color:'#172126', minHeight:'100vh'}}>
      <section aria-label='Dni Otwarcia PROFESJA PREMIUM LIMITED' style={{background:'#122027', color:'#fff', borderBottom:'1px solid #33444c'}}>
        <div style={{maxWidth:1120, margin:'0 auto', padding:'18px 24px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:24, flexWrap:'wrap'}}>
          <div>
            <strong style={{display:'block', color:'#f0d778', letterSpacing:'.12em'}}>DNI OTWARCIA PROFESJA PREMIUM LIMITED™</strong>
            <span style={{display:'block', marginTop:6, lineHeight:1.55}}>Indywidualne warunki zakupu, dostawy i ewentualnego finansowania są potwierdzane dla konkretnej transakcji.</span>
            <small style={{display:'block', marginTop:6, color:'#c5ced2', lineHeight:1.5}}>Finansowanie, 0% ani określony limit nie są gwarantowane bezwarunkowo i wymagają akceptacji właściwego finansującego.</small>
          </div>
          <Link href='/offers/new?product=Finansowanie%20B2B' style={{color:'#f0d778', fontWeight:700, textDecoration:'none'}}>ZAPYTAJ O WARUNKI →</Link>
        </div>
      </section>

      <section className='section' style={{paddingTop:48, paddingBottom:24}}>
        <div style={{maxWidth:1120, margin:'0 auto', background:'#ffffff', border:'1px solid #dde3e6', borderRadius:20, padding:'28px clamp(20px,4vw,40px)', boxShadow:'0 12px 36px rgba(20,36,44,.06)'}}>
          <p className='eyebrow' style={{color:'#607178'}}>PROFESJA PREMIUM LIMITED™</p>
          <h1 style={{marginBottom:16, color:'#122027'}}>Profesjonalny katalog B2B — 50 kategorii wyposażenia przedsiębiorstw</h1>
          <p style={{maxWidth:900, lineHeight:1.7, color:'#45555d'}}>Publiczna warstwa katalogu nie ujawnia danych źródeł zaopatrzenia, cen zakupu ani informacji negocjacyjnych. Klient otrzymuje końcową ofertę PROFESJA dopiero po potwierdzeniu produktu, parametrów, ceny, dostępności, zgodności i warunków dostawy.</p>
          <p style={{maxWidth:900, lineHeight:1.7, color:'#45555d'}}>Brak dowodu certyfikacji lub zgodności = brak statusu „zweryfikowane”. Oznaczeń CE/ISO/EN/IEC nie przypisujemy produktowi bez dokumentu odnoszącego się do konkretnego modelu, wariantu i rynku docelowego.</p>
          <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:24}}>
            <Link href='/catalog/fotowoltaika' style={{background:'#122027',color:'#fff',padding:'12px 16px',borderRadius:12,textDecoration:'none',fontWeight:700}}>Fotowoltaika Premium — 3 × 3 →</Link>
            <Link href='/catalog/smartfony-premium' style={{background:'#e9d06f',color:'#172126',padding:'12px 16px',borderRadius:12,textDecoration:'none',fontWeight:700}}>Smartfony Premium / REDMAGIC →</Link>
          </div>
        </div>
      </section>

      <section className='section' style={{paddingTop:12}}>
        <div style={{maxWidth:1120, margin:'0 auto'}}>
          <p className='eyebrow' style={{color:'#607178'}}>PRZYKŁADY Z WEWNĘTRZNĄ WERYFIKACJĄ REFERENCYJNĄ</p>
          <div style={{overflowX:'auto', background:'#ffffff', border:'1px solid #dde3e6', borderRadius:18, boxShadow:'0 10px 30px rgba(20,36,44,.05)'}}>
            <table style={{width:'100%', borderCollapse:'collapse', minWidth:760, color:'#1b2a31'}}>
              <thead><tr style={{textAlign:'left', background:'#eef3f4', color:'#203038'}}><th style={{padding:16}}>Produkt</th><th style={{padding:16}}>Cena katalogowa PROFESJA</th><th style={{padding:16}}>Status</th></tr></thead>
              <tbody>{verifiedExamples.map((item, index)=><tr key={item.product} style={{borderTop:'1px solid #e5eaec', background:index % 2 === 0 ? '#ffffff' : '#fafcfc'}}><td style={{padding:16, verticalAlign:'top'}}><strong>{item.product}</strong></td><td style={{padding:16, verticalAlign:'top', whiteSpace:'nowrap'}}><strong>{item.profesjaPrice}</strong></td><td style={{padding:16, verticalAlign:'top', color:'#52636b'}}>{item.verification}</td></tr>)}</tbody>
            </table>
          </div>
          <p style={{marginTop:18, color:'#52636b', lineHeight:1.65}}>Ceny są orientacyjne i ponownie potwierdzane przed zawarciem transakcji.</p>
        </div>
      </section>

      <FranchiseCatalog mode='catalog'/>
    </main>
    <Footer/>
  </>;
}
