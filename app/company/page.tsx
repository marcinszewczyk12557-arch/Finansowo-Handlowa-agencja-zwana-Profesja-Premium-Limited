import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main className="section legal-page">
        <p className="eyebrow">Dane przedsiębiorcy • informacje transakcyjne</p>
        <h1>Metropolis Corp. Marcin Szewczyk</h1>
        <p><strong>PROFESJA PREMIUM LIMITED™</strong> jest projektem finansowo-handlowej agencji prowadzonym w ramach działalności Metropolis Corp. Marcin Szewczyk. Projekt koncentruje się na usługach i produktach dobieranych z naciskiem na bezpieczeństwo transakcji, jakość, wzornictwo i oryginalność, w tym na asortymencie pozyskiwanym z magazynów i źródeł dostaw zlokalizowanych głównie poza Polską, w szczególności na terenie UE.</p>

        <h2>Dane rejestracyjne i kontakt</h2>
        <p><strong>Nazwa przedsiębiorcy:</strong> Metropolis Corp. Marcin Szewczyk<br />
        <strong>NIP:</strong> 886-2655-482<br />
        <strong>REGON:</strong> 36061155<br />
        <strong>Telefon:</strong> <a href="tel:+48886636981">+48 886 636 981</a><br />
        <strong>E-mail:</strong> <a href="mailto:profesja.premium@gmail.com">profesja.premium@gmail.com</a></p>

        <h2>Model obsługi online</h2>
        <p>Obsługa zapytań, negocjacji, uzgodnień i dokumentacji odbywa się przede wszystkim online. Ustalenia dotyczące konkretnej transakcji są prowadzone w przypisanym do niej wątku korespondencji oraz w dokumentach elektronicznych, tak aby zachować możliwie pełną historię negocjacyjno-transakcyjną i jednoznacznie powiązać ustalenia z daną sprawą.</p>
        <p>Produkty mogą być realizowane z wykorzystaniem transportu kurierskiego, pocztowego lub innego uzgodnionego sposobu dostawy. Koszt i sposób transportu, w tym ewentualna usługa door-to-door, są każdorazowo określane w konkretnej ofercie lub zamówieniu. Jeżeli strony uzgodnią, że koszt dostawy ponosi klient, staje się to elementem warunków danej transakcji.</p>

        <h2>Finalizacja i formalności</h2>
        <p>Przejście do kolejnego etapu obsługi oznacza kontynuowanie procesu na podstawie parametrów wskazanych w zapytaniu i późniejszych uzgodnień stron. Przed zawarciem wiążącej transakcji klient otrzymuje możliwość zapoznania się z właściwą ofertą, warunkami płatności, zakresem usługi, sposobem i kosztem dostawy oraz wymaganymi dokumentami.</p>
        <p>W zależności od rodzaju zlecenia proces może obejmować kompletację e-dokumentów i innych informacji lub plików elektronicznych niezbędnych do przygotowania oferty, organizacji dostawy, obsługi większego zatowarowania albo przygotowania wniosku o finansowanie inwestycyjne. Zakres wymaganych danych jest ograniczany do informacji potrzebnych dla konkretnego celu.</p>

        <h2>Finansowanie</h2>
        <p>Agencja może wspierać organizację procesu finansowania przedsiębiorstwa, w tym przygotowanie dokumentacji dla rozwiązań inwestycyjnych. Informacja o możliwości finansowania, również bez wkładu własnego, nie stanowi obietnicy jego uzyskania. Dostępność, warunki i ostateczna decyzja należą do właściwej instytucji finansującej i zależą od konkretnej transakcji oraz oceny klienta.</p>

        <h2>Poufność i bezpieczeństwo informacji</h2>
        <p>Korespondencja i dokumentacja transakcyjna powinny dotyczyć wyłącznie informacji niezbędnych do realizacji sprawy. Dane osobowe, tajemnice przedsiębiorstwa, informacje o konkurencji, wewnętrzne dane handlowe i inne informacje poufne podlegają zasadom minimalizacji oraz kontroli dostępu opisanym w Polityce prywatności i zasadach Automatyzacji Finansowo-Sprzedażowej.</p>

        <h2>Ważna informacja o adresie przedsiębiorcy</h2>
        <p>Model świadczenia usług online nie znosi obowiązków informacyjnych wynikających z bezwzględnie obowiązujących przepisów. Jeżeli dla danej formy działalności lub rodzaju transakcji wymagane jest wskazanie adresu przedsiębiorcy, adresu do doręczeń albo innych danych rejestrowych, dane te powinny zostać uzupełnione przed wykorzystaniem serwisu do zawierania takich transakcji.</p>
      </main>
      <Footer />
    </>
  );
}
