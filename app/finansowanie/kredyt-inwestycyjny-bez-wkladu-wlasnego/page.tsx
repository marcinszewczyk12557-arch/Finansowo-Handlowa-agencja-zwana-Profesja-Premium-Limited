import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const metadata: Metadata = {
  title: 'Finansowanie inwestycyjne B2B i wynajem długoterminowy | PROFESJA PREMIUM LIMITED',
  description: 'Warunkowe zapytania o finansowanie inwestycyjne, leasing i wynajem długoterminowy dla zakupów B2B realizowanych przez PROFESJA PREMIUM LIMITED™. Warunki zależą od konkretnego finansującego i transakcji.',
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Finansowanie inwestycyjne B2B i wynajem długoterminowy',
  provider: {
    '@type': 'Organization',
    name: 'PROFESJA PREMIUM LIMITED™',
  },
  areaServed: ['PL', 'EU'],
  serviceType: 'Organizacja zapytań o finansowanie inwestycyjne B2B, leasing i wynajem długoterminowy',
  description:
    'Obsługa zapytań o finansowanie zakupów inwestycyjnych oraz wynajem długoterminowy. Dostępność, udział finansowania, okres, koszt i decyzja zależą od konkretnego finansującego, aktywa oraz kwalifikacji transakcji.',
};

export default function InvestmentFinancePage(){
  return <>
    <Header/>
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="hero compact-hero">
        <p className="eyebrow">FINANSOWANIE INWESTYCYJNE • B2B</p>
        <h1>Finansowanie, leasing i wynajem długoterminowy — warunki ustalane indywidualnie</h1>
        <p>
          PROFESJA PREMIUM LIMITED™ może organizować zapytania o finansowanie zakupów inwestycyjnych, leasing oraz wynajem długoterminowy. Dostępność, poziom finansowania, okres, oprocentowanie lub koszt finansowania, wymagany wkład własny i decyzja zależą od konkretnego finansującego, rodzaju aktywa i kwalifikacji transakcji. Żaden wariant nie jest gwarantowany bezwarunkowo.
        </p>
        <div className="cta-row">
          <Link href="/offers/new?product=Finansowanie%20inwestycyjne%20B2B"><button>ZŁÓŻ ZAPYTANIE</button></Link>
          <Link href="/catalog"><button className="cta-secondary">WYBIERZ TOWAR Z KATALOGU</button></Link>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">MOŻLIWE STRUKTURY</p>
        <h2>Dobór rozwiązania do konkretnej transakcji</h2>
        <div className="offer-spec-grid">
          <div><span>Finansowanie zakupu</span><strong>Zakres i udział finansowania ustala finansujący po analizie transakcji.</strong></div>
          <div><span>Leasing / wynajem</span><strong>Możliwy dla kwalifikowanych aktywów; okres i warunki ustalane indywidualnie.</strong></div>
          <div><span>KYC / KYB / AML</span><strong>Weryfikacja klienta i stron transakcji zgodnie z wymaganiami właściwego procesu.</strong></div>
          <div><span>Ocena produktu</span><strong>Finansowanie nie zastępuje weryfikacji dostawcy, zgodności, ceny i dokumentacji towaru.</strong></div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">JEDEN PROCES HANDLOWY</p>
        <h2>Towar, sourcing, zgodność, logistyka i możliwe finansowanie</h2>
        <p>
          Zapytanie może łączyć wybór produktu z weryfikacją dostawcy, warunków dostawy, dokumentacji zgodności i możliwej struktury finansowania. Wiążąca oferta powstaje dopiero po potwierdzeniu konkretnego produktu, źródła, ceny, MOQ, dostępności, dokumentacji oraz decyzji właściwego finansującego.
        </p>
      </section>

      <section className="section premium-contact-block">
        <div>
          <p className="eyebrow">PROFESJA PREMIUM LIMITED™</p>
          <h2>Jedno zapytanie: towar + sourcing + dostawa + możliwe finansowanie</h2>
          <p>Oferta końcowa powstaje po potwierdzeniu produktu, dostawcy, ceny, dokumentacji i warunków finansowania.</p>
        </div>
        <div className="cta-row">
          <Link href="/offers/new"><button>OPISZ OCZEKIWANIA</button></Link>
        </div>
      </section>
    </main>
    <Footer/>
  </>;
}
