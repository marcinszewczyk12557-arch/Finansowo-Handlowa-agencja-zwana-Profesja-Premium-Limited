import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const metadata: Metadata = {
  title: 'Fotowoltaika B2B — moduły PV, magazyny energii i falowniki | PROFESJA',
  description: 'Fotowoltaika B2B PROFESJA: sourcing modułów PV, magazynów energii i falowników hybrydowych. Parametry, cena, MOQ, dostępność i zgodność są potwierdzane dla konkretnego wariantu przed ofertą.',
  alternates: { canonical: '/catalog/fotowoltaika' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Fotowoltaika B2B | PROFESJA PREMIUM LIMITED',
    description: 'Profesjonalna ścieżka RFQ dla modułów PV, magazynów energii i falowników z weryfikacją konkretnego modelu przed ofertą.',
    type: 'website',
  },
};

const groups = [
  {
    title: '1. Moduły fotowoltaiczne / PV modules',
    applications: 'Instalacje dachowe i gruntowe dla przedsiębiorstw, obiektów komercyjnych i projektów inwestycyjnych.',
    parameters: 'Moc znamionowa, technologia ogniw, sprawność, wymiary, obciążenia mechaniczne, gwarancja produktu i uzysku — wyłącznie po potwierdzeniu konkretnego modelu.',
    items: [
      { brand: 'DAH Solar', profile: 'Kandydat sourcingowy z profilem producenta podlegającym ponownej weryfikacji przed transakcją.', source: 'https://suppliers.alibaba.com/dah-solar-co-ltd_2200615182350' },
      { brand: 'Wuxi Sunket', profile: 'Kandydat sourcingowy z profilem producenta podlegającym ponownej weryfikacji przed transakcją.', source: 'https://suppliers.alibaba.com/wuxi-sunket-new-energy-technology-co-ltd_2201437101784' },
      { brand: 'Sail Solar Energy', profile: 'Kandydat sourcingowy z profilem producenta podlegającym ponownej weryfikacji przed transakcją.', source: 'https://suppliers.alibaba.com/sail-solar-energy-co-ltd_2213183285343' },
    ],
  },
  {
    title: '2. Magazyny energii LiFePO4 / Energy storage',
    applications: 'Buforowanie energii, zwiększanie autokonsumpcji, instalacje hybrydowe i zasilanie rezerwowe — zależnie od projektu i zweryfikowanej konfiguracji.',
    parameters: 'Pojemność użyteczna, moc ładowania/rozładowania, napięcie, BMS, liczba cykli, kompatybilność i gwarancja — do potwierdzenia dla konkretnego systemu.',
    items: [
      { brand: 'EITAI', profile: 'Kandydat sourcingowy z profilem producenta podlegającym ponownej weryfikacji przed transakcją.', source: 'https://suppliers.alibaba.com/eitai-xiamen-new-energy-technology-co-ltd_2207476916634' },
      { brand: 'PYTES', profile: 'Kandydat sourcingowy z profilem producenta podlegającym ponownej weryfikacji przed transakcją.', source: 'https://suppliers.alibaba.com/shanghai-pytes-energy-co-ltd_2208211110190' },
      { brand: 'Shenzhen EEL Battery', profile: 'Kandydat sourcingowy z profilem producenta podlegającym ponownej weryfikacji przed transakcją.', source: 'https://suppliers.alibaba.com/shenzhen-eel-battery-co-ltd_2213052347544' },
    ],
  },
  {
    title: '3. Falowniki hybrydowe / Hybrid inverters',
    applications: 'Instalacje PV z magazynem energii, modernizacje instalacji i systemy zarządzania energią w przedsiębiorstwach.',
    parameters: 'Moc AC/DC, liczba MPPT, zakres napięć, sprawność, kompatybilność z bateriami, komunikacja i wymagania sieciowe — do weryfikacji modelowej.',
    items: [
      { brand: 'FoxESS', profile: 'Kandydat sourcingowy z profilem producenta podlegającym ponownej weryfikacji przed transakcją.', source: 'https://suppliers.alibaba.com/foxess-co-ltd_2500000237014' },
      { brand: 'MUST Energy', profile: 'Kandydat sourcingowy z profilem producenta podlegającym ponownej weryfikacji przed transakcją.', source: 'https://suppliers.alibaba.com/must-energy-guangdong-tech-co-ltd_2209521074559' },
      { brand: 'DAH Solar', profile: 'Kandydat sourcingowy z profilem producenta podlegającym ponownej weryfikacji przed transakcją.', source: 'https://suppliers.alibaba.com/dah-solar-co-ltd_2200615182350' },
    ],
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fotowoltaika B2B — sourcing i organizacja zakupu',
  provider: { '@type': 'Organization', name: 'PROFESJA PREMIUM LIMITED' },
  serviceType: 'B2B sourcing and procurement for photovoltaic equipment',
  areaServed: { '@type': 'Country', name: 'Poland' },
  description: 'Organizacja zapytań i sourcingu modułów PV, magazynów energii i falowników. Konkretne właściwości, ceny, dostępność oraz dokumentacja są potwierdzane przed ofertą wiążącą.',
};

export default function PhotovoltaicsCatalogPage() {
  return <>
    <Header />
    <main style={{background:'#f6f8f9', color:'#172126', minHeight:'100vh'}}>
      <script type='application/ld+json' dangerouslySetInnerHTML={{__html: JSON.stringify(serviceJsonLd)}} />
      <section className='section'>
        <div style={{maxWidth:1120, margin:'0 auto'}}>
          <p className='eyebrow'>PROFESJA PREMIUM LIMITED™ · PREVIEW SOURCING</p>
          <h1>Fotowoltaika B2B — moduły PV, magazyny energii i falowniki</h1>
          <p style={{maxWidth:900,lineHeight:1.7}}>Strona tematyczna prowadzi przedsiębiorstwo od określenia zastosowania i wymaganych parametrów do zapytania RFQ. Widoczne niżej podmioty są kandydatami sourcingowymi, a nie deklarowanymi partnerami PROFESJA. Przed ofertą potwierdzamy konkretny model, dokumentację, cenę, MOQ, dostępność, logistykę i warunki handlowe.</p>
          <div style={{background:'#fff8df',border:'1px solid #eadb9f',borderRadius:16,padding:18,margin:'24px 0',lineHeight:1.65}}><strong>Zasada evidence-first:</strong> brak aktualnego dowodu dla konkretnego modelu oznacza brak publikacji certyfikatu, ceny, dostępności lub właściwości jako potwierdzonej. Status profilu dostawcy nie jest dowodem zgodności każdego jego produktu.</div>
          {groups.map(group => <section key={group.title} style={{margin:'34px 0'}}>
            <h2>{group.title}</h2>
            <p style={{maxWidth:900,lineHeight:1.65}}><strong>Zastosowania:</strong> {group.applications}</p>
            <p style={{maxWidth:900,lineHeight:1.65,color:'#52636b'}}><strong>Parametry kwalifikowane w RFQ:</strong> {group.parameters}</p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:18}}>
              {group.items.map(item => <article key={`${group.title}-${item.brand}`} style={{background:'#fff',border:'1px solid #dde3e6',borderRadius:18,padding:22,boxShadow:'0 10px 28px rgba(20,36,44,.05)'}}>
                <h3 style={{marginTop:0}}>{item.brand}</h3>
                <p style={{lineHeight:1.65,color:'#52636b'}}>{item.profile}</p>
                <p><strong>Cena / MOQ / dostępność:</strong> indywidualna weryfikacja przed ofertą.</p>
                <p><strong>Product Compliance:</strong> dokumenty wyłącznie dla konkretnego modelu i rynku PL/UE.</p>
                <a href={item.source} target='_blank' rel='noreferrer nofollow'>Źródło profilu kandydata →</a>
              </article>)}
            </div>
            <div style={{marginTop:18}}><Link href={`/offers/new?product=${encodeURIComponent(group.title)}`} style={{fontWeight:700}}>Złóż zapytanie RFQ dla tej grupy →</Link></div>
          </section>)}
          <p style={{color:'#607178'}}>Stan shortlisty sourcingowej: 19.08.2026. Aktualność każdego źródła i konkretnego produktu jest ponownie sprawdzana przed transakcją. Ta strona Preview nie stanowi deklaracji partnerstwa z wymienionymi markami.</p>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}