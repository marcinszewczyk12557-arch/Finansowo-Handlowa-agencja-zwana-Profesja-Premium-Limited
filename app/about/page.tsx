import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { publicPositioning } from '@/lib/publicPositioning';

export default function AboutPage() {
  const pl = publicPositioning.pl;
  const en = publicPositioning.en;

  return (
    <>
      <Header />
      <main className="section">
        <p className="eyebrow">O nas / About</p>
        <h1>{publicPositioning.name}</h1>
        <p><strong>{pl.headline}.</strong> {pl.description}</p>
        <p><strong>EN — {en.headline}.</strong> {en.description}</p>

        <div className="grid">
          <article className="card">
            <h2>Kapitał prywatny / Private capital</h2>
            <p>{pl.investorActivity}</p>
            <p><strong>EN:</strong> {en.investorActivity}</p>
          </article>
          <article className="card">
            <h2>Agencja B2B / B2B agency</h2>
            <p>{pl.agencyServices}</p>
            <p><strong>EN:</strong> {en.agencyServices}</p>
          </article>
          <article className="card">
            <h2>Finansowanie / Financing</h2>
            <p>{pl.financing}</p>
            <p><strong>EN:</strong> {en.financing}</p>
          </article>
        </div>

        <section className="card" style={{ marginTop: 24 }}>
          <h2>LEGAL_REVIEW — przed produkcją / before production</h2>
          <p>{pl.legalReview}</p>
          <p><strong>EN:</strong> {en.legalReview}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
