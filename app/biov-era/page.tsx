import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MedicalShowcase from '../../components/MedicalShowcase';

export const metadata = {
  title: 'BIOVERA — maszyny, urządzenia i aparatura specjalistyczna | PROFESJA PREMIUM LIMITED™',
  description: 'BIOVERA: specjalistyczny dział B2B maszyn, urządzeń i aparatury. Parametry, zastosowania, dokumentacja, marka i zgodność są potwierdzane przed ofertą wiążącą.',
};

export default function BioveraPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'BIOVERA — sourcing maszyn, urządzeń i aparatury specjalistycznej',
    provider: { '@type': 'Organization', name: 'PROFESJA PREMIUM LIMITED' },
    serviceType: 'B2B sourcing and procurement of specialist machinery, equipment and apparatus',
    areaServed: 'PL',
    description: 'Indywidualny sourcing B2B specjalistycznych maszyn, urządzeń i aparatury z dowodową weryfikacją parametrów i dokumentacji dla konkretnej konfiguracji.',
  };

  return (
    <>
      <Header />
      <main className="premium-home">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
        <section className="section" style={{ paddingBottom: 18 }}>
          <p className="eyebrow">BIOVERA • MASZYNY • URZĄDZENIA • APARATURA SPECJALISTYCZNA</p>
          <h1>Specjalistyczne maszyny, urządzenia i aparatura dla przedsiębiorstw</h1>
          <p style={{ maxWidth: 920, lineHeight: 1.7 }}>
            BIOVERA jest działem PROFESJA PREMIUM LIMITED przeznaczonym do indywidualnego sourcingu B2B
            maszyn, urządzeń i aparatury specjalistycznej. Dobór rozpoczyna się od zastosowania i wymagań
            technicznych klienta, a następnie obejmuje kwalifikację konkretnego producenta, modelu,
            konfiguracji, rynku docelowego, dokumentacji oraz warunków dostawy i obsługi.
          </p>
          <p style={{ maxWidth: 920, lineHeight: 1.7 }}>
            Marka, model, cena, dostępność, parametry, właściwości, multimedia i deklaracje zgodności są
            publikowane jako potwierdzone wyłącznie wtedy, gdy istnieje odpowiedni dowód dla konkretnej
            konfiguracji. System nie generuje certyfikatów i nie traktuje opisu sprzedawcy, logotypu,
            wiadomości z komunikatora ani badge marketplace jako dowodu CE, ISO lub innej zgodności.
          </p>
        </section>
        <MedicalShowcase />
      </main>
      <Footer />
    </>
  );
}
