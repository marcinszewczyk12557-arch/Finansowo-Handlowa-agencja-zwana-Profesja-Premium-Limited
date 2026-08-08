import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import OfferForm from '../../../components/OfferForm';

export default function NewOffer() {
  return (
    <>
      <Header />
      <main className="section">
        <p className="eyebrow">PROFESJA PREMIUM LIMITED™</p>
        <h1>Indywidualne zapytanie ofertowe B2B</h1>
        <p>
          Wskaż produkt, ilość, rynek i wymagania. Po wysłaniu system nada numer sprawy, który pozwoli jednoznacznie identyfikować zapytanie w dalszej obsłudze.
        </p>
        <OfferForm />
      </main>
      <Footer />
    </>
  );
}
