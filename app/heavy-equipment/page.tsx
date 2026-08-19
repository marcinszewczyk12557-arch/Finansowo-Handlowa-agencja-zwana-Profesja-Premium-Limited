import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Sprzęt Ciężki B2B — maszyny wydobywcze, rolnicze, budowlane i przemysłowe | PROFESJA',
  description: 'Specjalistyczny dział Sprzęt Ciężki PROFESJA PREMIUM LIMITED: maszyny wydobywcze, rolnicze, budowlane, drogowe, leśne, komunalne, magazynowe, transportowe i przemysłowe. Parametry i warunki są potwierdzane przed ofertą wiążącą.',
};

const sectors = [
  ['Wydobywczy', 'Maszyny i osprzęt do robót odkrywkowych, przeładunku, kruszenia i transportu materiałów.'],
  ['Rolniczy', 'Ciągniki, ładowarki, maszyny uprawowe, transportowe i urządzenia dla gospodarstw oraz przedsiębiorstw agro.'],
  ['Budowlany', 'Koparki, minikoparki, ładowarki, spycharki i osprzęt do robót ziemnych oraz infrastrukturalnych.'],
  ['Drogowy', 'Walce, równiarki, rozściełacze i urządzenia do budowy oraz utrzymania nawierzchni.'],
  ['Leśny', 'Maszyny do pozyskania, zrywki, załadunku i transportu drewna oraz prac terenowych.'],
  ['Komunalny', 'Zamiatarki, pojazdy użytkowe, maszyny do utrzymania dróg, terenów i infrastruktury miejskiej.'],
  ['Magazynowy', 'Wózki widłowe, reach trucki, wózki paletowe i ciężki sprzęt do obsługi magazynów i terminali.'],
  ['Transportowy', 'Ciągniki terminalowe, urządzenia przeładunkowe i wyposażenie do transportu materiałów oraz ładunków.'],
  ['Przemysłowy', 'Maszyny produkcyjne, przeładunkowe, energetyczne i specjalistyczne urządzenia dla zakładów przemysłowych.'],
];

export default function HeavyEquipmentPage() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://profesja-premium-limited.vercel.app';
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Sprzęt Ciężki B2B — PROFESJA PREMIUM LIMITED',
    provider: { '@type': 'Organization', name: 'PROFESJA PREMIUM LIMITED', url: base },
    areaServed: 'PL',
    serviceType: 'Sourcing, konfiguracja i organizacja dostaw ciężkiego sprzętu B2B',
    url: `${base}/heavy-equipment`,
  };

  return <><Header/><main style={{background:'#f6f8f9',color:'#172126',minHeight:'100vh'}}>
    <script type='application/ld+json' dangerouslySetInnerHTML={{__html: JSON.stringify(serviceJsonLd)}} />
    <section style={{background:'#122027',color:'#fff',padding:'56px 24px'}}><div style={{maxWidth:1120,margin:'0 auto'}}>
      <p style={{color:'#f0d778',fontWeight:700,letterSpacing:'.12em'}}>PROFESJA PREMIUM LIMITED™ • SPRZĘT CIĘŻKI B2B</p>
      <h1>Sprzęt ciężki dla wydobycia, rolnictwa, budownictwa, logistyki i przemysłu</h1>
      <p style={{maxWidth:900,lineHeight:1.75,color:'#d5dde0'}}>Dział obejmuje dobór, konfigurację i organizację dostaw specjalistycznych maszyn dla przedsiębiorstw. Marka, model, cena, dostępność, osiągi, homologacja, CE lub inne deklaracje zgodności są publikowane jako potwierdzone wyłącznie po weryfikacji dokumentów dotyczących konkretnej maszyny i rynku docelowego.</p>
      <Link href='/offers/new?product=Sprzęt%20Ciężki%20B2B' style={{color:'#f0d778',fontWeight:700}}>ZŁÓŻ ZAPYTANIE O SPRZĘT →</Link>
    </div></section>
    <section style={{maxWidth:1120,margin:'0 auto',padding:'44px 24px'}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(270px,1fr))',gap:18}}>{sectors.map(([name,description])=><article key={name} style={{background:'#fff',border:'1px solid #dde3e6',borderRadius:16,padding:22}}><small style={{color:'#607178'}}>SEKTOR</small><h2 style={{fontSize:22}}>{name}</h2><p style={{lineHeight:1.65}}>{description}</p><p style={{fontSize:13,color:'#607178'}}>Udźwig, moc, masa robocza, napęd, osprzęt, zużycie energii/paliwa, warunki środowiskowe, dokumentacja i termin dostawy są ustalane dla konkretnego zapytania.</p><Link href={`/offers/new?product=${encodeURIComponent(`Sprzęt ciężki — ${name}`)}`}>POPROŚ O DOBÓR I WYCENĘ →</Link></article>)}</div>
    </section>
    <section style={{maxWidth:1120,margin:'0 auto',padding:'0 24px 56px'}}><div style={{background:'#fff',border:'1px solid #dde3e6',borderRadius:18,padding:28}}><h2>Proces kwalifikacji oferty</h2><p style={{lineHeight:1.7}}>Zapytanie określa zastosowanie, środowisko pracy, oczekiwane parametry, osprzęt, miejsce dostawy i wymagania formalne. Dopiero po potwierdzeniu źródła, konfiguracji, dokumentacji, dostępności, ceny, gwarancji i logistyki powstaje oferta wiążąca PROFESJA.</p><p style={{lineHeight:1.7}}>Brak potwierdzonego dowodu oznacza brak statusu „zweryfikowane”. Materiały zdjęciowe i wideo są publikowane wyłącznie, gdy istnieje prawo do ich wykorzystania.</p></div></section>
  </main><Footer/></>;
}
