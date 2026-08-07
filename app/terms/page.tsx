import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="section legal-page">
        <p className="eyebrow">Informacje prawne</p>
        <h1>Regulamin serwisu</h1>
        <p>Niniejsza wersja ma charakter roboczy i porządkuje podstawowe zasady korzystania z serwisu profesja/premium/limited. Przed rozpoczęciem pełnej sprzedaży produkcyjnej regulamin powinien zostać zweryfikowany pod kątem rzeczywistego modelu sprzedaży i obowiązujących przepisów.</p>
        <h2>Charakter serwisu</h2>
        <p>Serwis prezentuje ofertę handlową, umożliwia składanie zapytań B2B oraz korzystanie z funkcji informacyjnych, w tym katalogu i kalkulatora ratalnego.</p>
        <h2>Oferty i ceny</h2>
        <p>Informacje publikowane w katalogu mogą wymagać indywidualnego potwierdzenia. Wiążące warunki handlowe są ustalane w konkretnej ofercie przekazanej klientowi.</p>
        <h2>Dokumentacja i gwarancja</h2>
        <p>Zakres dokumentacji, zgodności, certyfikatów i gwarancji jest potwierdzany dla konkretnego produktu i rynku docelowego przed zawarciem transakcji.</p>
        <h2>Kontakt</h2>
        <p>Pytania dotyczące warunków korzystania z serwisu można kierować na <a href="mailto:profesja.premium@gmail.com">profesja.premium@gmail.com</a>.</p>
      </main>
      <Footer />
    </>
  );
}
