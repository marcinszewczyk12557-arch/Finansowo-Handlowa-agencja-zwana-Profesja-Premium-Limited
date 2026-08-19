import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const groups = [
  {
    title: '1. Moduły fotowoltaiczne / PV modules',
    items: [
      { brand: 'DAH Solar', profile: 'Zweryfikowany producent Alibaba: 17 lat eksportu; profil wskazuje certyfikaty TUV/MCS dla modułów PV.', source: 'https://suppliers.alibaba.com/dah-solar-co-ltd_2200615182350' },
      { brand: 'Wuxi Sunket', profile: 'Zweryfikowany producent Alibaba: 14 lat eksportu; profil wskazuje certyfikaty IEC/TÜV/CE dla modułów PV.', source: 'https://suppliers.alibaba.com/wuxi-sunket-new-energy-technology-co-ltd_2201437101784' },
      { brand: 'Sail Solar Energy', profile: 'Zweryfikowany producent Alibaba: profil producenta i zakład produkcyjny widoczne w warstwie Verified Manufacturer.', source: 'https://suppliers.alibaba.com/sail-solar-energy-co-ltd_2213183285343' },
    ],
  },
  {
    title: '2. Magazyny energii LiFePO4 / Energy storage',
    items: [
      { brand: 'EITAI', profile: 'Zweryfikowany producent Alibaba: 9 lat eksportu; profil zawiera certyfikaty dla konkretnych pakietów Li-ion/LiFePO4.', source: 'https://suppliers.alibaba.com/eitai-xiamen-new-energy-technology-co-ltd_2207476916634' },
      { brand: 'PYTES', profile: 'Zweryfikowany producent Alibaba; profil wskazuje m.in. CE/CB dla określonych systemów akumulatorowych.', source: 'https://suppliers.alibaba.com/shanghai-pytes-energy-co-ltd_2208211110190' },
      { brand: 'Shenzhen EEL Battery', profile: 'Zweryfikowany producent Alibaba: 8 lat eksportu; weryfikacja on-site Intertek i certyfikaty dla określonych ogniw/baterii.', source: 'https://suppliers.alibaba.com/shenzhen-eel-battery-co-ltd_2213052347544' },
    ],
  },
  {
    title: '3. Falowniki hybrydowe / Hybrid inverters',
    items: [
      { brand: 'FoxESS', profile: 'Zweryfikowany producent Alibaba; profil zawiera dokumentację m.in. dla falowników PV i magazynowych.', source: 'https://suppliers.alibaba.com/foxess-co-ltd_2500000237014' },
      { brand: 'MUST Energy', profile: 'Zweryfikowany producent Alibaba; profil wskazuje CE/EMC/LVD/EN 50549 dla określonych falowników i urządzeń PV.', source: 'https://suppliers.alibaba.com/must-energy-guangdong-tech-co-ltd_2209521074559' },
      { brand: 'DAH Solar', profile: 'Profil Verified Manufacturer obejmuje także certyfikat EN 50549 dla określonego falownika PV.', source: 'https://suppliers.alibaba.com/dah-solar-co-ltd_2200615182350' },
    ],
  },
];

export default function PhotovoltaicsCatalogPage() {
  return <>
    <Header />
    <main style={{background:'#f6f8f9', color:'#172126', minHeight:'100vh'}}>
      <section className='section'>
        <div style={{maxWidth:1120, margin:'0 auto'}}>
          <p className='eyebrow'>PROFESJA PREMIUM LIMITED™ · PREVIEW SOURCING</p>
          <h1>Fotowoltaika Premium — macierz 3 × 3</h1>
          <p style={{maxWidth:900,lineHeight:1.7}}>Trzy rodziny produktowe i po trzech porównywalnych kandydatów sourcingowych. Status „Verified Manufacturer” oznacza weryfikację profilu dostawcy przez Alibaba/stronę trzecią, a nie automatyczne potwierdzenie autentyczności, zgodności lub dostępności każdego produktu.</p>
          <div style={{background:'#fff8df',border:'1px solid #eadb9f',borderRadius:16,padding:18,margin:'24px 0',lineHeight:1.65}}><strong>Zasada oferty:</strong> cena, MOQ, model, moc/pojemność, Incoterms, lead time, gwarancja i dokumenty zgodności są ponownie sprawdzane dla konkretnego wariantu przed przedstawieniem wiążącej oferty klientowi. Brak dowodu = brak statusu zweryfikowanego.</div>
          {groups.map(group => <section key={group.title} style={{margin:'34px 0'}}>
            <h2>{group.title}</h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:18}}>
              {group.items.map(item => <article key={item.brand} style={{background:'#fff',border:'1px solid #dde3e6',borderRadius:18,padding:22,boxShadow:'0 10px 28px rgba(20,36,44,.05)'}}>
                <h3 style={{marginTop:0}}>{item.brand}</h3>
                <p style={{lineHeight:1.65,color:'#52636b'}}>{item.profile}</p>
                <p><strong>Cena / MOQ / dostępność:</strong> indywidualna weryfikacja przed ofertą.</p>
                <p><strong>Product Compliance:</strong> dokumenty tylko dla konkretnego modelu i rynku PL/UE.</p>
                <a href={item.source} target='_blank' rel='noreferrer'>Źródło weryfikacji dostawcy →</a>
              </article>)}
            </div>
          </section>)}
          <p style={{color:'#607178'}}>Stan źródeł sprawdzony: 19.08.2026. Ta strona jest warstwą Preview i nie stanowi deklaracji partnerstwa z wymienionymi markami.</p>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
