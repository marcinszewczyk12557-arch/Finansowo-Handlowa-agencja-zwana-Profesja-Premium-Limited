import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="section legal-page">
        <p className="eyebrow">Informacje prawne</p>
        <h1>Regulamin serwisu</h1>
        <p>Niniejsza wersja porządkuje podstawowe zasady korzystania z serwisu PROFESJA PREMIUM LIMITED™. Wiążące warunki konkretnej transakcji wynikają z zaakceptowanej oferty, potwierdzenia zamówienia albo właściwej umowy.</p>

        <h2>Przedsiębiorca i projekt</h2>
        <p>Serwis i projekt PROFESJA PREMIUM LIMITED™ są prowadzone w ramach działalności <strong>Metropolis Corp. Marcin Szewczyk</strong>, NIP: <strong>886-2655-482</strong>, REGON: <strong>36061155</strong>. Kontakt: <a href="tel:+48886636981">+48 886 636 981</a>, <a href="mailto:profesja.premium@gmail.com">profesja.premium@gmail.com</a>. Rozszerzone informacje o przedsiębiorcy i modelu realizacji znajdują się na stronie <Link href="/company">Dane przedsiębiorcy i transakcje</Link>.</p>

        <h2>Charakter serwisu</h2>
        <p>Serwis jest przeznaczony do obsługi klientów B2B. Prezentuje katalog produktów i rozwiązań, umożliwia składanie zapytań ofertowych oraz kontakt w sprawie sourcingu, importu, OEM/ODM, private label, organizacji dostaw i możliwych form finansowania przedsiębiorstw.</p>

        <h2>Obsługa online i archiwizacja ustaleń</h2>
        <p>Proces handlowy jest prowadzony przede wszystkim online. Strony powinny kontynuować ustalenia dotyczące konkretnej sprawy w przypisanym wątku korespondencji i dokumentach elektronicznych. Taka historia służy dokumentowaniu negocjacji i ustaleń, ale sama korespondencja nie zastępuje wymaganej prawem formy czynności ani wyraźnej akceptacji warunków, gdy jest ona wymagana.</p>

        <h2>Zapytania, oferty i ceny</h2>
        <p>Informacje publikowane w katalogu mają charakter informacyjny i mogą wymagać indywidualnego potwierdzenia. Samo wysłanie zapytania nie oznacza zawarcia umowy ani przyjęcia zamówienia. Wiążące parametry, cena, ilość, termin, zakres dostawy i warunki płatności wynikają z konkretnej zaakceptowanej oferty, potwierdzenia zamówienia lub umowy.</p>

        <h2>Dostawa i jej koszt</h2>
        <p>Realizacja może obejmować przesyłkę kurierską, pocztową albo inny uzgodniony rodzaj transportu, w tym door-to-door. Rodzaj transportu, miejsce dostawy, odpowiedzialność stron oraz koszt są określane dla konkretnej transakcji. Jeżeli oferta przewiduje, że koszt dostawy ponosi klient, informacja ta stanowi element warunków przedstawianych przed finalizacją.</p>

        <h2>Finansowanie B2B</h2>
        <p>Informacje o finansowaniu mają charakter organizacyjny i informacyjny. Agencja może wspierać przygotowanie procesu i dokumentacji, także dla rozwiązań inwestycyjnych. Dostępność finansowania, w tym wariantu bez wkładu własnego, jego koszt i decyzja zależą od finansującego, warunków transakcji oraz oceny klienta. Serwis nie stanowi gwarancji uzyskania finansowania ani decyzji kredytowej.</p>

        <h2>Rola PROFESJA w transakcji</h2>
        <p>W zależności od konkretnego zlecenia PROFESJA PREMIUM LIMITED™ może uczestniczyć w organizacji handlowej, sourcingu, imporcie, przygotowaniu oferty, koordynacji dostawy, kompletacji dokumentacji lub innych uzgodnionych czynnościach. Dokładna rola stron jest określana w dokumentach właściwych dla konkretnej transakcji.</p>

        <h2>Dokumentacja i gwarancja</h2>
        <p>Zakres dokumentacji, zgodności, certyfikatów i gwarancji jest potwierdzany dla konkretnego produktu, wariantu i rynku docelowego przed zawarciem transakcji. Klient może zostać poproszony o przekazanie e-dokumentów, danych i plików elektronicznych niezbędnych dla konkretnej usługi, z zachowaniem zasady minimalizacji danych.</p>

        <h2>Dane adresowe</h2>
        <p>Obsługa online nie wyłącza obowiązków informacyjnych wynikających z bezwzględnie obowiązujących przepisów. Jeżeli dla danej formy działalności lub rodzaju transakcji wymagane jest wskazanie adresu przedsiębiorcy, adresu do doręczeń lub innych danych, informacje te muszą zostać uzupełnione przed wykorzystaniem serwisu do zawierania takich transakcji.</p>

        <h2>Kontakt</h2>
        <p>Pytania dotyczące warunków korzystania z serwisu można kierować na <a href="mailto:profesja.premium@gmail.com">profesja.premium@gmail.com</a> lub telefonicznie pod numer <a href="tel:+48886636981">+48 886 636 981</a>.</p>
      </main>
      <Footer />
    </>
  );
}
