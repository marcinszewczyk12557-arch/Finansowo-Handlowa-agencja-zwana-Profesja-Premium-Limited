import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const metadata: Metadata = {
  title: 'Finansowanie inwestycyjne B2B i wynajem długoterminowy',
  description: 'Warunkowe zapytania o finansowanie inwestycyjne i wynajem długoterminowy dla zakupów B2B realizowanych przez PROFESJA PREMIUM LIMITED™.',
};

export default function InvestmentFinancePage(){
  return <>
    <Header/>
    <main>
      <section className="hero compact-hero">
        <p className="eyebrow">FINANSOWANIE INWESTYCYJNE • B2B</p>
        <h1>Finansowanie i wynajem długoterminowy — warunki ustalane indywidualnie</h1>
        <p>PROFESJA PREMIUM LIMITED™ może organizować zapytania o finansowanie zakupów inwestycyjnych oraz wynajem długoterminowy. Dostępność, poziom finansowania, okres, oprocentowanie, wymagany wkład własny i decyzja zależą od konkretnego finansującego, rodzaju aktywa i kwalifikacji transakcji. Żaden wariant nie jest gwarantowany bezwarunkowo.</p>
        <div className="cta-row"><Link href="/offers/new?product=Finansowanie%20inwestycyjne%20B2B"><button>ZŁÓŻ ZAPYTANIE</button></Link><Link href="/catalog"><button className="cta-secondary">WYBIERZ TOWAR Z KATALOGU</button></Link></div>
      </section>

      <section className="section">
        <p className="eyebrow">MOŻLIWE STRUKTURY</p>
        <h2>Dobór rozwiązania do konkretnej transakcji</h2>
        <div className="offer-spec-grid">
          <div><span>Finansowanie zakupu</span><strong>Zakres i udział finansowania ustala finansujący po analizie transakcji.</strong></div>
          <div><span>Wynajem długoterminowy</span><strong>Możliwy dla kwalifikowanych aktywów; okres i warunki ustalane indywidualnie.</strong></div>
          <div><span>KYC / KYB / AML</span><strong>Weryfikacja klienta i stron transakcji zgodnie z wymaganiami właściwego procesu.</strong></div>
          <div><span>Ocena produktu</span><strong>Finansowanie nie zastępuje weryfikacji dostawcy, zgodności, ceny i dokumentacji towaru.</strong></div>
        </div>
      </section>

      <section className="section premium-contact-block">
        <div><p className="eyebrow">PROFESJA PREMIUM LIMITED™</p><h2>Jedno zapytanie: towar + sourcing + dostawa + możliwe finansowanie</h2><p>Oferta końcowa powstaje po potwierdzeniu produktu, dostawcy, ceny, dokumentacji i warunków finansowania.</p></div>
        <div className="cta-row"><Link href="/offers/new"><button>OPISZ OCZEKIWANIA</button></Link></div>
      </section>
    </main>
    <Footer/>
  </>;
}
