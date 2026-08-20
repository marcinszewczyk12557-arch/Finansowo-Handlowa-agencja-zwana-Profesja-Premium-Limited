import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="section">
        <p className="eyebrow">O nas / About</p>
        <h1>PROFESJA PREMIUM LIMITED™</h1>
        <p>PROFESJA PREMIUM LIMITED jest rozwijana jako prywatna działalność inwestycyjno-usługowa i agencja B2B należąca do prywatnego inwestora, w zakresie zgodnym z rzeczywistym statusem prawnym podmiotu. Organizuje sourcing, indywidualne oferty B2B, dokumentację, przebieg transakcji i logistykę.</p>
        <p><strong>EN:</strong> PROFESJA PREMIUM LIMITED is being developed as a privately owned investment-and-services activity and B2B agency, subject to confirmation of the entity’s actual legal status. Its role covers sourcing, tailored B2B offers, documentation, transaction coordination and logistics.</p>
        <div className="grid">
          <article className="card"><h2>Kapitał prywatny / Private capital</h2><p>Zaangażowanie kapitału prywatnego inwestora jest odrębną rolą od usług agencyjnych i od finansowania świadczonego przez ewentualnego zewnętrznego finansującego.</p></article>
          <article className="card"><h2>Agencja B2B / B2B agency</h2><p>Proces może obejmować sourcing, RFQ, organizację transakcji, dokumentację, compliance i logistykę. Każda konkretna oferta opiera się na zweryfikowanych warunkach właściwych dla danej transakcji.</p></article>
          <article className="card"><h2>Finansowanie / Financing</h2><p>Jeżeli w procesie uczestniczy rzeczywisty finansujący, jego tożsamość, rola, warunki i wymagane zgody są prezentowane oddzielnie. Sama platforma nie jest przedstawiana jako regulowana instytucja finansowa bez potwierdzonego zezwolenia lub rejestru.</p></article>
        </div>
        <section className="card" style={{marginTop:24}}>
          <h2>LEGAL_REVIEW — przed produkcją</h2>
          <p>Przed publikacją produkcyjną należy potwierdzić status prawny podmiotu, zakres wykonywanej działalności oraz każde twierdzenie dotyczące inwestowania lub finansowania. Bez takiego potwierdzenia treści nie mogą sugerować statusu banku, firmy inwestycyjnej, funduszu inwestycyjnego, pożyczkodawcy, ubezpieczyciela ani licencjonowanego pośrednika.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
