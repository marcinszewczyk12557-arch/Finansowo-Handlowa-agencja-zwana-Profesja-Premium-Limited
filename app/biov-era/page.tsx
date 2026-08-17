import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MedicalShowcase from '../../components/MedicalShowcase';

export const metadata = {
  title: 'BIOVERA | PROFESJA PREMIUM LIMITED™',
  description: 'Specjalistyczne rodziny produktów medycznych z dowodową weryfikacją producenta i dokumentacji zgodności.',
};

export default function BioveraPage() {
  return (
    <>
      <Header />
      <main className="premium-home">
        <section className="section" style={{ paddingBottom: 18 }}>
          <p className="eyebrow">BIOVERA • PREVIEW</p>
          <h1>Profesjonalny sourcing aparatury i urządzeń medycznych</h1>
          <p style={{ maxWidth: 920, lineHeight: 1.7 }}>
            BIOVERA prezentuje rodziny produktów przeznaczone do indywidualnego sourcingu B2B.
            Konkretna oferta może zostać oznaczona jako zweryfikowana dopiero po pozytywnej kontroli
            producenta, modelu, rynku docelowego oraz właściwych dokumentów zgodności. System nie
            generuje certyfikatów i nie traktuje opisu sprzedawcy, logotypu, wiadomości z komunikatora
            ani badge marketplace jako dowodu CE lub ISO.
          </p>
        </section>
        <MedicalShowcase />
      </main>
      <Footer />
    </>
  );
}
