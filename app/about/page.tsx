import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="section">
        <p className="eyebrow">O nas</p>
        <h1>profesja/premium/limited</h1>
        <p>Finansowo-Handlowa Agencja działająca online w modelu globalnym, skoncentrowana na sourcingu, indywidualnych ofertach B2B i prezentacji starannie wyselekcjonowanych produktów premium.</p>
        <div className="grid">
          <article className="card"><h2>Misja</h2><p>Łączyć klientów i biznes z odpowiednio dobranymi rozwiązaniami produktowymi, dokumentacją oraz uporządkowanym procesem ofertowym.</p></article>
          <article className="card"><h2>Standard pracy</h2><p>Każda konkretna oferta powinna opierać się na potwierdzonych parametrach produktu, warunkach gwarancji i dokumentacji właściwej dla rynku docelowego.</p></article>
          <article className="card"><h2>Zasięg</h2><p>Działalność prowadzona jest przez Internet i może obejmować współpracę z klientami oraz dostawcami z wielu rynków.</p></article>
        </div>
      </main>
      <Footer />
    </>
  );
}
