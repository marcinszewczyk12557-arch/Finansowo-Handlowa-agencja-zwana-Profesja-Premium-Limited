import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InstallmentCalculator from '../components/InstallmentCalculator';

const categories = [
  ['Smartfony i elektronika', 'Nubia REDMAGIC', '/products/1', '01'],
  ['Laptopy i IT', 'Gaming / AI / Business', '/products/2', '02'],
  ['Fotowoltaika', 'Magazyny energii', '/products/3', '03'],
  ['Wentylacja i klimatyzacja', 'HVAC / VRF / rekuperacja', '/products/4', '04'],
  ['Luksusowe meble', 'Biuro / hotel / premium', '/products/5', '05'],
  ['Drzwi i bramy premium', 'Garaż / przemysł / smart', '/products/6', '06'],
  ['Maszyny i sprzęt ciężki', 'Budowa / inżynieria', '/products/7', '07'],
  ['Elektronarzędzia', 'Wyposażenie stanowisk', '/products/8', '08'],
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
          <div className="section-title-line"><span>NASZE KLUCZOWE KATEGORIE</span></div>
          <div className="category-ribbon">
            {categories.map(([name, sub, href, icon]) => (
              <Link href={href} className="category-tile" key={name}>
                <div className="category-visual">{icon}</div>
                <strong>{name}</strong>
                <span>{sub}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="trust-strip">
          <div><b>01</b><strong>BEZPIECZNE TRANSAKCJE</strong><span>Sprawdzane warunki i dokumentacja</span></div>
          <div><b>02</b><strong>INDYWIDUALNE CENY</strong><span>Oferta dopasowana do zamówienia</span></div>
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
            <h2>Wyposażenie przedsiębiorstw w jednym miejscu</h2>
            <p>Elektronika, energia, HVAC, luksusowe wyposażenie, ciężki sprzęt, maszyny, elektronarzędzia i indywidualnie konfigurowane zamówienia dla firm.</p>
          </div>
          <div className="cta-row">
            <Link href="/catalog"><button>Przejdź do katalogu</button></Link>
            <Link href="/offers/new"><button className="cta-secondary">Złóż zapytanie B2B</button></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
