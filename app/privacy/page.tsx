import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="section legal-page">
        <p className="eyebrow">Informacje prawne</p>
        <h1>Polityka prywatności</h1>

        <h2>Administrator i kontakt</h2>
        <p>Administratorem danych przetwarzanych w ramach serwisu jest <strong>Metropolis Corp. Marcin Szewczyk</strong>, prowadzący projekt PROFESJA PREMIUM LIMITED™, NIP: <strong>886-2655-482</strong>, REGON: <strong>36061155</strong>. Kontakt w sprawach dotyczących danych i prywatności: <a href="mailto:profesja.premium@gmail.com">profesja.premium@gmail.com</a>, tel. <a href="tel:+48886636981">+48 886 636 981</a>.</p>
        <p>Jeżeli przepisy właściwe dla działalności lub konkretnego procesu wymagają podania dodatkowych danych administratora, w szczególności adresu, dane te powinny zostać uzupełnione przed produkcyjnym wykorzystaniem danego procesu.</p>

        <h2>Zakres danych</h2>
        <p>W formularzu zapytania B2B mogą być przetwarzane: nazwa firmy, imię i nazwisko osoby kontaktowej, adres e-mail, numer telefonu, produkt lub usługa, ilość, rynek docelowy, budżet oraz dodatkowe wymagania przekazane przez użytkownika. W toku konkretnej sprawy mogą być przetwarzane również e-dokumenty i pliki elektroniczne niezbędne do przygotowania oferty, realizacji zamówienia, dostawy lub procesu finansowania.</p>

        <h2>Cel przetwarzania</h2>
        <p>Dane są wykorzystywane do rejestracji i obsługi zapytań B2B, przygotowania ofert, prowadzenia i archiwizacji korespondencji związanej z daną sprawą, tworzenia i realizacji zamówień, przygotowania dokumentów handlowych, organizacji finansowania za pośrednictwem uprawnionych partnerów oraz obsługi dostawy i statusu realizacji.</p>

        <h2>Automatyzacja Finansowo‑Sprzedażowa</h2>
        <p>System może automatycznie porządkować etapy obsługi sprawy, wskazywać następną czynność operacyjną, rejestrować status oferty, zamówienia i organizacji finansowania oraz przygotowywać minimalny zakres informacji potrzebny do realizacji procesu. Automatyzacja nie podejmuje decyzji kredytowych ani finansowych w imieniu banku lub innej uprawnionej instytucji.</p>

        <h2>Poufność i minimalizacja danych</h2>
        <p>Automatyzacja działa domyślnie w trybie STRICT. Informacje dotyczące konkurencji i kontaktów zawodowych z konkurencją, informacje z miejsca pracy, dane osobowe, wewnętrzne informacje handlowe oraz informacje objęte tajemnicą przedsiębiorstwa nie są przeznaczone do zewnętrznego udostępniania. Integracje zewnętrzne mają domyślnie zablokowany eksport danych, a ewentualne rozszerzenie zakresu wymaga odrębnej podstawy, celu, konfiguracji i kontroli dostępu.</p>

        <h2>Przechowywanie w systemie</h2>
        <p>Zapytania, automatyzacja procesu i zamówienia mogą być zapisywane w produkcyjnej bazie danych PostgreSQL. Dostęp do danych operacyjnych po stronie administracyjnej jest ograniczony do chronionej strefy OWNER.</p>

        <h2>Dane zapisane na urządzeniu</h2>
        <p>Po wysłaniu zapytania podstawowe informacje o ostatniej sprawie mogą zostać zapisane lokalnie w pamięci przeglądarki użytkownika (`localStorage`) wyłącznie w celu wygodnego wyświetlenia ostatniego zgłoszenia w panelu klienta. Użytkownik może usunąć te dane przez wyczyszczenie danych witryny w przeglądarce.</p>

        <h2>Sprawdzanie statusu</h2>
        <p>Do bezpiecznego sprawdzania statusu zapytania lub zamówienia serwis wykorzystuje numer sprawy albo numer zamówienia oraz adres e-mail użyty przy składaniu zapytania. Publiczny widok nie udostępnia pełnej bazy klientów ani danych administracyjnych.</p>

        <h2>Hosting i usługi techniczne</h2>
        <p>Serwis może korzystać z zewnętrznych usług hostingowych i bazodanowych. Ich ostateczna lista, lokalizacja przetwarzania, okresy retencji oraz właściwe podstawy przetwarzania powinny odpowiadać rzeczywiście wdrożonej konfiguracji produkcyjnej.</p>

        <h2>Kontakt</h2>
        <p>W sprawach dotyczących prywatności można kontaktować się pod adresem <a href="mailto:profesja.premium@gmail.com">profesja.premium@gmail.com</a> lub numerem <a href="tel:+48886636981">+48 886 636 981</a>.</p>
      </main>
      <Footer />
    </>
  );
}
