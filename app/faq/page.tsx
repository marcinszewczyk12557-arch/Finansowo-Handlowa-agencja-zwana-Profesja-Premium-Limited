import Header from '../../components/Header';
import Footer from '../../components/Footer';

const items = [
  ['Czy obsługujecie klientów B2B?', 'Tak. Serwis został przygotowany przede wszystkim do obsługi zapytań firmowych, ale wybrane oferty mogą być przedstawiane także klientom indywidualnym.'],
  ['Czy ceny są stałe?', 'Nie zawsze. W przypadku wielu produktów cena zależy od konfiguracji, ilości, dostawy, rynku docelowego i dostępności.'],
  ['Czy dokumentacja i certyfikaty są sprawdzane?', 'Dla konkretnej oferty dokumentacja, deklaracje zgodności, certyfikaty i warunki gwarancji powinny być potwierdzane przed przedstawieniem finalnych warunków klientowi.'],
  ['Czy można zamówić produkt spoza katalogu?', 'Tak. Formularz B2B może służyć także do indywidualnego sourcingu produktu niewidocznego jeszcze w katalogu.'],
  ['Czy kalkulator rat pokazuje finalną ofertę finansowania?', 'Nie. Kalkulator ma charakter wyłącznie orientacyjny i nie stanowi decyzji finansowej ani oferty kredytowej.']
];

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="section">
        <p className="eyebrow">FAQ</p>
        <h1>Najczęściej zadawane pytania</h1>
        <div className="faq-list">
          {items.map(([question, answer]) => (
            <article className="card" key={question}>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
