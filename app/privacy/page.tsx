import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="section legal-page">
        <p className="eyebrow">Informacje prawne</p>
        <h1>Polityka prywatności</h1>
        <p>Ta strona informacyjna opisuje podstawowe zasady przetwarzania danych przekazywanych za pośrednictwem serwisu profesja/premium/limited. Przed uruchomieniem pełnej wersji produkcyjnej treść powinna zostać dostosowana do rzeczywistego modelu przetwarzania danych i używanych usług.</p>
        <h2>Zakres danych</h2>
        <p>Serwis może przetwarzać dane kontaktowe i handlowe przekazane dobrowolnie przez użytkownika w formularzach, wiadomościach e-mail lub podczas współpracy B2B.</p>
        <h2>Cel</h2>
        <p>Dane mogą być wykorzystywane do odpowiedzi na zapytania, przygotowania ofert, prowadzenia korespondencji oraz realizacji uzgodnionej współpracy.</p>
        <h2>Kontakt</h2>
        <p>W sprawach dotyczących prywatności można kontaktować się pod adresem <a href="mailto:profesja.premium@gmail.com">profesja.premium@gmail.com</a>.</p>
      </main>
      <Footer />
    </>
  );
}
