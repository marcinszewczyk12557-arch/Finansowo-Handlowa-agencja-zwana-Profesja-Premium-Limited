import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="section legal-page">
        <p className="eyebrow">Informacje prawne</p>
        <h1>Regulamin serwisu</h1>
        <p>Niniejsza wersja porządkuje podstawowe zasady korzystania z serwisu PROFESJA PREMIUM LIMITED™. Przed zawieraniem transakcji produkcyjnych regulamin oraz dokumenty handlowe powinny być każdorazowo dostosowane do rzeczywistego modelu danej transakcji i zweryfikowane pod kątem obowiązujących przepisów.</p>

        <h2>Charakter serwisu</h2>
        <p>Serwis jest przeznaczony do obsługi klientów B2B. Prezentuje katalog produktów i rozwiązań, umożliwia składanie zapytań ofertowych oraz kontakt w sprawie sourcingu, importu, OEM/ODM, private label, organizacji dostaw i możliwych form finansowania przedsiębiorstw.</p>

        <h2>Zapytania, oferty i ceny</h2>
        <p>Informacje publikowane w katalogu mają charakter informacyjny i mogą wymagać indywidualnego potwierdzenia. Samo wysłanie zapytania nie oznacza zawarcia umowy ani przyjęcia zamówienia. Wiążące parametry, cena, ilość, termin, zakres dostawy i warunki płatności wynikają z konkretnej zaakceptowanej oferty, potwierdzenia zamówienia lub umowy.</p>

        <h2>Finansowanie B2B</h2>
        <p>Informacje o finansowaniu mają charakter organizacyjny i informacyjny. Dostępność, koszt i decyzja finansująca zależą od wybranego finansującego, warunków transakcji oraz oceny klienta. Serwis nie stanowi gwarancji uzyskania finansowania ani decyzji kredytowej.</p>

        <h2>Rola PROFESJA w transakcji</h2>
        <p>W zależności od konkretnego zlecenia PROFESJA PREMIUM LIMITED™ może uczestniczyć w organizacji handlowej, sourcingu, imporcie, przygotowaniu oferty, koordynacji dostawy lub innych uzgodnionych czynnościach. Dokładna rola stron jest określana w dokumentach właściwych dla konkretnej transakcji.</p>

        <h2>Dokumentacja i gwarancja</h2>
        <p>Zakres dokumentacji, zgodności, certyfikatów i gwarancji jest potwierdzany dla konkretnego produktu, wariantu i rynku docelowego przed zawarciem transakcji.</p>

        <h2>Kontakt</h2>
        <p>Pytania dotyczące warunków korzystania z serwisu można kierować na <a href="mailto:profesja.premium@gmail.com">profesja.premium@gmail.com</a>.</p>
      </main>
      <Footer />
    </>
  );
}
