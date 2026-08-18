import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const metadata: Metadata = {
  title: 'Kredyt inwestycyjny bez wkładu własnego — finansowanie B2B i wynajem długoterminowy',
  description: 'Finansowanie inwestycyjne do 100% wartości kwalifikowanego zakupu, gdy dopuszcza je konkretny partner finansujący, oraz wynajem długoterminowy towarów z oferty PROFESJA PREMIUM LIMITED™.',
  keywords: [
    'kredyt inwestycyjny bez wkładu własnego',
    'finansowanie inwestycji 100%',
    'wynajem długoterminowy dla firm',
    'finansowanie B2B',
    'nowość technologiczna',
    'rewolucja technologiczna',
    'PROFESJA PREMIUM LIMITED',
  ],
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Finansowanie inwestycyjne i wynajem długoterminowy PROFESJA',
  provider: { '@type': 'Organization', name: 'PROFESJA PREMIUM LIMITED™' },
  areaServed: ['PL', 'EU'],
  serviceType: 'Organizacja finansowania inwestycyjnego B2B i wynajmu długoterminowego towarów',
  description: 'Obsługa zapytań o finansowanie inwestycyjne do 100% wartości kwalifikowanego zakupu, jeśli taki wariant dopuszcza partner finansujący, oraz wynajem długoterminowy od 24 miesięcy.',
};

export default function InvestmentFinancePage(){
  return <>
    <Header/>
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}/>
      <section className="hero compact-hero">
        <p className="eyebrow">NOWOŚĆ • TECHNOLOGICZNE FINANSOWANIE B2B</p>
        <h1>Kredyt inwestycyjny bez wkładu własnego</h1>
        <p>
          PROFESJA PREMIUM LIMITED™ organizuje zapytania o finansowanie inwestycyjne przedsiębiorstw, w tym warianty do 100% wartości kwalifikowanego zakupu, jeżeli są dostępne u konkretnego partnera finansującego i klient spełni jego warunki. Brak wkładu własnego nie jest gwarantowany dla każdego klienta ani każdej transakcji.
        </p>
        <div className="cta-row">
          <Link href="/offers/new?product=Finansowanie%20inwestycyjne%20B2B"><button>ZŁÓŻ ZAPYTANIE O FINANSOWANIE</button></Link>
          <Link href="/catalog"><button className="cta-secondary">WYBIERZ TOWAR Z KATALOGU</button></Link>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">WYNAJEM DŁUGOTERMINOWY • MINIMUM 24 MIESIĄCE</p>
        <h2>Finansowanie użytkowania towarów z katalogu PROFESJA</h2>
        <p>
          Dla kwalifikowanych produktów możliwa jest organizacja modelu długoterminowego użytkowania od 24 miesięcy. Struktura może obejmować najem, leasing albo inne finansowanie B2B — zależnie od rodzaju aktywa, dostawcy, finansującego i sytuacji przedsiębiorstwa.
        </p>
        <div className="offer-spec-grid">
          <div><span>Wartość i ilość</span><strong>Od pojedynczych urządzeń do zamówień wielosztukowych; limity potwierdzane dla konkretnej transakcji.</strong></div>
          <div><span>Okres użytkowania</span><strong>Docelowo od 24 miesięcy, z warunkami ustalanymi indywidualnie.</strong></div>
          <div><span>Parametry</span><strong>Dobór wariantu o najwyższych uzasadnionych parametrach technicznych dostępnych dla wskazanego zastosowania i budżetu.</strong></div>
          <div><span>Warunki ekstremalne</span><strong>W razie potrzeby sourcing wersji rugged / industrial z potwierdzonym zakresem temperatur, IP, odpornością na wstrząsy, wibracje lub inne czynniki środowiskowe.</strong></div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">BEZPIECZEŃSTWO PRODUKTU</p>
        <h2>Parametry odporności tylko na podstawie dokumentacji konkretnego modelu</h2>
        <p>
          Określenia takie jak „wodoodporny”, „wstrząsoodporny”, „do ekstremalnych temperatur” lub „najwyższa możliwa odporność” są publikowane dopiero po potwierdzeniu normy, klasy IP, zakresu temperatur, wyników badań albo innych dokumentów producenta dotyczących konkretnego modelu. Oferta nie przypisuje produktu do warunków, których jego dokumentacja nie obejmuje.
        </p>
      </section>

      <section className="section premium-contact-block">
        <div>
          <p className="eyebrow">PROFESJA PREMIUM LIMITED™</p>
          <h2>Jedno zapytanie: towar + sourcing + dostawa + finansowanie</h2>
          <p>Prześlij oczekiwania zakupowe i zastosowanie. Oferta końcowa powstaje po weryfikacji produktu, dostawcy, ceny, dokumentacji oraz warunków finansowania.</p>
        </div>
        <div className="cta-row">
          <Link href="/offers/new"><button>OPISZ SWOJE OCZEKIWANIA</button></Link>
          <a href="mailto:profesja.premium@gmail.com"><button className="cta-secondary">PROFESJA.PREMIUM@GMAIL.COM</button></a>
        </div>
      </section>
    </main>
    <Footer/>
  </>;
}
