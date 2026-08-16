import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const products = [
  {
    product: 'Wiertarko-wkrętarka akumulatorowa 21V',
    profesjaPrice: '162–223 zł',
    verification: 'Kontrahent i cena referencyjna zweryfikowane wewnętrznie 16.08.2026. Deklaracja zgodności, oznaczenie CE i dokumentacja dla konkretnej konfiguracji są ponownie sprawdzane przed ofertą wiążącą.',
  },
  {
    product: 'Stołowy miernik przewodności laboratoryjnej',
    profesjaPrice: '4 598–4 961 zł',
    verification: 'Kontrahent i cena referencyjna zweryfikowane wewnętrznie 16.08.2026. Wymagana dokumentacja zgodności jest sprawdzana dla konkretnego modelu i rynku docelowego przed sprzedażą.',
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

const specialistPipeline = [
  'Analizatory jakości energii', 'Kamery termowizyjne przemysłowe', 'Oscyloskopy cyfrowe', 'Mierniki izolacji', 'Mierniki rezystancji uziemienia',
  'Analizatory widma', 'Mikroskopy cyfrowe przemysłowe', 'Spektrofotometry laboratoryjne', 'Wirówki laboratoryjne', 'Inkubatory laboratoryjne',
  'Komory klimatyczne', 'Stacje lutownicze ESD', 'Zasilacze laboratoryjne', 'Elektroniczne obciążenia DC', 'Programowalne generatory funkcyjne',
  'Sprężarki śrubowe', 'Osuszacze adsorpcyjne', 'Pompy próżniowe', 'Spawarki laserowe', 'Wycinarki laserowe CNC',
  'Frezarki CNC', 'Tokarki CNC', 'Drukarki 3D przemysłowe', 'Skanery 3D metrologiczne', 'Plotery tnące',
  'Wózki widłowe elektryczne', 'Wózki paletowe elektryczne', 'Podnośniki nożycowe', 'Ładowarki kompaktowe', 'Agregaty prądotwórcze przemysłowe',
  'Magazyny energii C&I', 'Falowniki hybrydowe', 'Ładowarki EV DC', 'Systemy UPS online', 'Rozdzielnice niskiego napięcia',
  'Centrale wentylacyjne z odzyskiem ciepła', 'Agregaty wody lodowej', 'Pompy ciepła komercyjne', 'Systemy VRF', 'Kurtyny powietrzne przemysłowe',
  'Systemy kontroli dostępu', 'Rejestratory NVR klasy enterprise', 'Kamery przemysłowe IP', 'Systemy wideokonferencyjne', 'Monitory interaktywne 4K',
];

export default function CatalogPage(){
  return <>
    <Header/>
    <main style={{background:'#f6f8f9', color:'#172126', minHeight:'100vh'}}>
      <section aria-label='Dni Otwarcia PROFESJA PREMIUM LIMITED' style={{background:'#122027', color:'#fff', borderBottom:'1px solid #33444c'}}>
        <div style={{maxWidth:1120, margin:'0 auto', padding:'18px 24px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:24, flexWrap:'wrap'}}>
          <div>
            <strong style={{display:'block', color:'#f0d778', letterSpacing:'.12em'}}>DNI OTWARCIA PROFESJA PREMIUM LIMITED™</strong>
            <span style={{display:'block', marginTop:6, lineHeight:1.55}}>Promocja: możliwość 0% finansowania wybranego artykułu przy minimalnej wartości zamówienia 500 000 zł.</span>
            <small style={{display:'block', marginTop:6, color:'#c5ced2', lineHeight:1.5}}>Obowiązują warunki promocji, kryteria konkretnej transakcji, weryfikacja i odpowiedni regulamin. Finansowanie nie jest gwarantowane bezwarunkowo.</small>
          </div>
          <Link href='/offers/new?product=Finansowanie%200%25%20-%20Dni%20Otwarcia' style={{color:'#f0d778', fontWeight:700, textDecoration:'none'}}>ZAPYTAJ O WARUNKI →</Link>
        </div>
      </section>

      <section className='section' style={{paddingTop:48, paddingBottom:24}}>
        <div style={{maxWidth:1120, margin:'0 auto', background:'#ffffff', border:'1px solid #dde3e6', borderRadius:20, padding:'28px clamp(20px,4vw,40px)', boxShadow:'0 12px 36px rgba(20,36,44,.06)'}}>
          <p className='eyebrow' style={{color:'#607178'}}>PROFESJA PREMIUM LIMITED™</p>
          <h1 style={{marginBottom:16, color:'#122027'}}>Profesjonalny katalog produktów B2B</h1>
          <p style={{maxWidth:900, lineHeight:1.7, color:'#45555d'}}>Publicznie prezentujemy wyłącznie końcową cenę katalogową PROFESJA oraz informacje potrzebne klientowi. Dane źródeł zaopatrzenia, identyfikatory ofert, ceny zakupu i wewnętrzny sposób kalkulacji pozostają poufną informacją handlową.</p>
          <p style={{maxWidth:900, lineHeight:1.7, color:'#45555d'}}>Oznaczeń ISO/CE ani deklaracji zgodności nie przedstawiamy jako potwierdzonych bez dokumentu odnoszącego się do konkretnego produktu, wariantu i rynku docelowego. Transport, cło, VAT, ubezpieczenie, montaż i indywidualna konfiguracja — jeżeli występują — są potwierdzane przed ofertą wiążącą.</p>
        </div>
      </section>

      <section className='section' style={{paddingTop:12}}>
        <div style={{maxWidth:1120, margin:'0 auto'}}>
          <div style={{overflowX:'auto', background:'#ffffff', border:'1px solid #dde3e6', borderRadius:18, boxShadow:'0 10px 30px rgba(20,36,44,.05)'}}>
            <table style={{width:'100%', borderCollapse:'collapse', minWidth:760, color:'#1b2a31'}}>
              <thead>
                <tr style={{textAlign:'left', background:'#eef3f4', color:'#203038'}}>
                  <th style={{padding:16}}>Produkt</th>
                  <th style={{padding:16}}>Cena katalogowa PROFESJA</th>
                  <th style={{padding:16}}>Status weryfikacji</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index)=><tr key={item.product} style={{borderTop:'1px solid #e5eaec', background:index % 2 === 0 ? '#ffffff' : '#fafcfc'}}>
                  <td style={{padding:16, verticalAlign:'top'}}><strong>{item.product}</strong></td>
                  <td style={{padding:16, verticalAlign:'top', whiteSpace:'nowrap'}}><strong>{item.profesjaPrice}</strong></td>
                  <td style={{padding:16, verticalAlign:'top', color:'#52636b'}}>{item.verification}</td>
                </tr>)}
              </tbody>
            </table>
          </div>
          <p style={{marginTop:18, color:'#52636b', lineHeight:1.65}}>Każda cena ma charakter katalogowy i jest ponownie potwierdzana przed zawarciem transakcji. Produkt nie otrzymuje statusu „CE/ISO zweryfikowane” bez dowodu odnoszącego się do konkretnej konfiguracji.</p>
        </div>
      </section>

      <section className='section' style={{paddingTop:18, paddingBottom:56}}>
        <div style={{maxWidth:1120, margin:'0 auto', background:'#fff', border:'1px solid #dde3e6', borderRadius:18, padding:'26px clamp(20px,4vw,36px)'}}>
          <p className='eyebrow' style={{color:'#607178'}}>ROZBUDOWA KATALOGU</p>
          <h2 style={{color:'#122027'}}>Docelowo około 50 specjalistycznych pozycji</h2>
          <p style={{color:'#52636b', lineHeight:1.65, maxWidth:900}}>Poniższe rodziny produktów są kolejką do weryfikacji. Nie oznacza to potwierdzonej dostępności, certyfikacji ani gotowości do sprzedaży. Konkretna pozycja trafia do części cenowej dopiero po weryfikacji kontrahenta, parametrów, ceny referencyjnej i wymaganej dokumentacji produktu.</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:10, marginTop:20}}>
            {specialistPipeline.map((name, index)=><div key={name} style={{border:'1px solid #e0e6e8', borderRadius:10, padding:'12px 14px', background:index % 2 === 0 ? '#fafcfc' : '#fff'}}><strong style={{fontSize:13}}>{String(index+1).padStart(2,'0')}. {name}</strong><div style={{fontSize:12, color:'#687980', marginTop:5}}>status: weryfikacja przed publikacją</div></div>)}
          </div>
        </div>
      </section>
    </main>
    <Footer/>
  </>;
}
