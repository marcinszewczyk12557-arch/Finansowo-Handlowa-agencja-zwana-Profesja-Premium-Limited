import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InstallmentCalculator from '../components/InstallmentCalculator';

const categories = [
  ['Smartfony Premium', '4 produkty', '01'],
  ['Laptopy Premium', '4 produkty', '02'],
  ['Energia i Fotowoltaika', '4 produkty', '03'],
  ['HVAC', '4 produkty', '04'],
  ['Meble Premium', '4 produkty', '05'],
  ['Drzwi i Bramy Premium', '4 produkty', '06'],
  ['Maszyny i Sprzęt Ciężki', '4 produkty', '07'],
  ['Wyposażenie Przedsiębiorstw', '4 produkty', '08'],
  ['Wellness Premium', '4 produkty', '09'],
  ['Smart Home Premium', '4 produkty', '10'],
  ['Luxury Interior', '4 produkty', '11'],
  ['Outdoor Luxury', '4 produkty', '12'],
  ['Premium Lighting', '4 produkty', '13'],
  ['Executive Office', '4 produkty', '14'],
  ['Hospitality Premium', '4 produkty', '15'],
  ['Audio Video Premium', '4 produkty', '16'],
  ['E-Mobility', '4 produkty', '17'],
  ['Leisure Premium', '4 produkty', '18'],
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="premium-home">
        <section className="commerce-hero">
          <div className="commerce-hero__brand">
            <img src="/profesja-logo.svg" alt="Logo Profesja Premium Limited" className="commerce-logo" />
            <h1>PROFESJA</h1>
            <div className="brand-gold">PREMIUM LIMITED</div>
            <p className="agency-label">FINANSOWO-HANDLOWA AGENCJA</p>
            <h2>KOMPLEKSOWE ROZWIĄZANIA DLA BIZNESU</h2>
            <p className="hero-services">FINANSOWANIE • IMPORT • DOSTAWY • WSPARCIE</p>

            <div className="opening-hours">
              <div className="opening-icon">DNI</div>
              <div>
                <strong>DNI OTWARCIA</strong>
                <p>Świetnie się składa — uruchamiamy pełną ofertę B2B Profesja Premium Limited.</p>
                <small>Działalność online • zasięg globalny • obsługa indywidualna</small>
              </div>
            </div>
          </div>

          <div className="product-stage" aria-label="Wybrane produkty premium">
            <div className="stage-glow" />
            <div className="laptop-mock">
              <div className="laptop-screen"><span>LEGION</span><small>AI / Business / Gaming</small></div>
              <div className="laptop-base" />
            </div>
            <div className="phone-mock phone-dark"><div className="camera-stack"><i/><i/><i/></div><span>REDMAGIC</span></div>
            <div className="phone-mock phone-display"><div className="cyber-face">R</div><span>GAMING</span></div>
            <div className="phone-mock phone-silver"><div className="camera-stack"><i/><i/><i/></div><span>PRO</span></div>
            <div className="stage-plinth" />
          </div>

          <aside className="commerce-hero__offer">
            <div className="brand-offer-label">SMARTFONY GAMINGOWE PREMIUM</div>
            <div className="nubia-word">nubia</div>
            <div className="redmagic-mark">REDMAGIC</div>
            <div className="feature-row">
              <span><b>01</b>Wysoka wydajność</span>
              <span><b>02</b>Chłodzenie</span>
              <span><b>03</b>Szybkie ładowanie</span>
              <span><b>04</b>Design premium</span>
            </div>
            <div className="trade-box">
              <h3>WARUNKI HANDLOWE B2B</h3>
              <div className="trade-grid">
                <div><small>MINIMALNE ZAMÓWIENIE</small><strong>14 szt.</strong><span>wybrane oferty smartfonów</span></div>
                <div><small>MINIMALNA WARTOŚĆ</small><strong>95 000 zł</strong><span>zamówienia B2B</span></div>
              </div>
            </div>
          </aside>
        </section>

        <section className="quick-actions">
          <Link href="/offers/new"><span>01</span><div><strong>ZAMÓW OFERTĘ</strong><small>Szybka wycena B2B</small></div><b>→</b></Link>
          <Link href="/#raty"><span>02</span><div><strong>FINANSOWANIE</strong><small>Leasing, raty, rozwiązania B2B</small></div><b>→</b></Link>
          <Link href="/about"><span>03</span><div><strong>IMPORT</strong><small>Kompleksowa organizacja</small></div><b>→</b></Link>
          <Link href="/contact"><span>04</span><div><strong>KONTAKT Z DORADCĄ</strong><small>Indywidualne wsparcie</small></div><b>→</b></Link>
        </section>

        <section className="category-section">
          <div className="section-title-line"><span>PEŁNY KATALOG — 4 PRODUKTY W KAŻDEJ KATEGORII</span></div>
          <div className="category-ribbon">
            {categories.map(([name, sub, icon]) => (
              <Link href="/catalog" className="category-tile" key={name}>
                <div className="category-visual">{icon}</div>
                <strong>{name}</strong>
                <span>{sub}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="trust-strip">
          <div><b>01</b><strong>BEZPIECZNE TRANSAKCJE</strong><span>Sprawdzane warunki i dokumentacja</span></div>
          <div><b>02</b><strong>CENY KATALOGOWE</strong><span>Gotowe ceny sprzedażowe dla ofert B2B</span></div>
          <div><b>03</b><strong>GWARANCJA</strong><span>Warunki potwierdzane przed zakupem</span></div>
          <div><b>04</b><strong>WSPARCIE B2B</strong><span>Dedykowana obsługa na każdym etapie</span></div>
          <div><b>05</b><strong>GLOBALNY ZASIĘG</strong><span>Sourcing i import międzynarodowy</span></div>
        </section>

        <section id="raty" className="section finance-section">
          <p className="eyebrow">Finansowanie B2B</p>
          <h2>Orientacyjna kalkulacja finansowania</h2>
          <p>Kalkulator umożliwia wstępne oszacowanie rat. Ostateczne warunki zależą od finansującego, oprocentowania, prowizji oraz oceny transakcji.</p>
          <InstallmentCalculator />
        </section>

        <section className="section premium-contact-block">
          <div>
            <p className="eyebrow">Profesja Premium Limited</p>
            <h2>72 produkty w 18 kategoriach B2B</h2>
            <p>Każda kategoria zawiera po cztery pozycje katalogowe. Katalog obejmuje elektronikę, energię, HVAC, luksusowe wyposażenie, ciężki sprzęt, maszyny, elektronarzędzia i rozwiązania dla przedsiębiorstw.</p>
          </div>
          <div className="cta-row">
            <Link href="/catalog"><button>Przejdź do pełnego katalogu</button></Link>
            <Link href="/offers/new"><button className="cta-secondary">Złóż zapytanie B2B</button></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
