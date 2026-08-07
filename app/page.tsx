import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InstallmentCalculator from '../components/InstallmentCalculator';

const phoneCards = [
  ['REDMAGIC 9S PRO', 'od 7 863 zł'],
  ['REDMAGIC 9S PRO+', 'od 10 083 zł'],
  ['REDMAGIC 9S PRO BUMBLEBEE', 'od 12 303 zł'],
  ['REDMAGIC PRO+', 'od 13 413 zł'],
  ['REDMAGIC PRO', 'od 15 216 zł'],
];

const categories = [
  ['Smartfony Premium', '4 produkty'], ['Laptopy Premium', '4 produkty'], ['Energia i Fotowoltaika', '4 produkty'],
  ['HVAC', '4 produkty'], ['Meble Premium', '4 produkty'], ['Drzwi i Bramy Premium', '4 produkty'],
  ['Maszyny i Sprzęt Ciężki', '4 produkty'], ['Wyposażenie Przedsiębiorstw', '4 produkty'], ['Wellness Premium', '4 produkty'],
  ['Smart Home Premium', '4 produkty'], ['Luxury Interior', '4 produkty'], ['Outdoor Luxury', '4 produkty'],
  ['Premium Lighting', '4 produkty'], ['Executive Office', '4 produkty'], ['Hospitality Premium', '4 produkty'],
  ['Audio Video Premium', '4 produkty'], ['E-Mobility', '4 produkty'], ['Leisure Premium', '4 produkty'],
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="reference-home">
        <section className="reference-hero">
          <div className="reference-left">
            <p className="reference-kicker">DNI OTWARCIA</p>
            <h1>ŚWIETNIE SIĘ SKŁADA!</h1>
            <p className="reference-copy">
              Ponieważ są to tzw. Dni Otwarcia mojego zarządczo-wykonawczego projektu — indywidualnie prowadzonej agencji
              finansowo-handlowej działającej pod marką Profesja Premium Limited.
            </p>
            <img src="/profesja-logo.svg" alt="Logo Profesja Premium Limited" className="reference-main-logo" />
            <h2>PROFESJA PREMIUM LIMITED</h2>
            <p className="reference-agency">FINANSOWO-HANDLOWA AGENCJA</p>

            <div className="reference-benefits">
              <div><b>01</b><span>Profesjonalna obsługa B2B</span></div>
              <div><b>02</b><span>Produkty klasy premium</span></div>
              <div><b>03</b><span>Indywidualne finansowanie</span></div>
              <div><b>04</b><span>Kompleksowa organizacja importu</span></div>
              <div><b>05</b><span>Gwarancja i wsparcie posprzedażowe</span></div>
            </div>

            <div className="reference-minimums">
              <div><small>MINIMALNE ZAMÓWIENIE</small><strong>14 SZTUK</strong></div>
              <div><small>MINIMALNA WARTOŚĆ ZAMÓWIENIA</small><strong>95 000 PLN</strong></div>
            </div>

            <Link href="/offers/new" className="reference-main-cta">POPROŚ O INDYWIDUALNĄ OFERTĘ →</Link>
            <small className="reference-b2b-note">OFERTA DLA PRZEDSIĘBIORSTW B2B</small>
          </div>

          <div className="reference-right">
            <div className="reference-brand-offer">OFERTA SMARTFONÓW PREMIUM</div>
            <div className="reference-nubia">nubia</div>
            <div className="reference-redmagic"><span>✦</span> REDMAGIC</div>
            <p className="reference-subline">SMARTFONY DLA GRACZY I PROFESJONALISTÓW</p>

            <div className="reference-features">
              <span>NAJWYŻSZA WYDAJNOŚĆ</span><span>INNOWACYJNE CHŁODZENIE</span><span>AMOLED 165 HZ</span><span>SZYBKIE ŁADOWANIE</span><span>DESIGN PREMIUM</span>
            </div>

            <div className="reference-device-stage" aria-label="Prezentacja oferty smartfonów premium">
              <div className="device-back device-one"><i/><i/><i/></div>
              <div className="device-front"><div className="device-face">R</div></div>
              <div className="device-back device-two"><i/><i/><i/></div>
              <div className="device-plinth" />
            </div>

            <div className="reference-phone-grid">
              {phoneCards.map(([name, price], index) => (
                <Link href="/products/1" className="reference-phone-card" key={`${name}-${index}`}>
                  <div className={`mini-phone mini-${index + 1}`}><span>{index + 1}</span></div>
                  <strong>{name}</strong>
                  <small>{price}</small>
                  <b>ZOBACZ OFERTĘ</b>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="reference-service-row">
          <Link href="/offers/new"><strong>OFERTA DLA FIRM B2B</strong><span>Indywidualne zapytania</span></Link>
          <Link href="/offers/new"><strong>ZAPYTANIA OFERTOWE</strong><span>Szybka wycena</span></Link>
          <Link href="/catalog"><strong>ZAMÓWIENIA HURTOWE</strong><span>Pełny katalog</span></Link>
          <Link href="/contact"><strong>DEDYKOWANE WSPARCIE</strong><span>Opiekun handlowy</span></Link>
        </section>

        <section className="reference-trust-row">
          <div><strong>PEWNY PARTNER</strong><span>Indywidualna obsługa B2B</span></div>
          <div><strong>GLOBALNY ZASIĘG</strong><span>Dostawy i sourcing międzynarodowy</span></div>
          <div><strong>NAJWYŻSZA JAKOŚĆ</strong><span>Starannie dobierane rozwiązania</span></div>
          <div><strong>WSPARCIE B2B</strong><span>Obsługa na każdym etapie</span></div>
        </section>

        <section className="reference-catalog-preview">
          <div className="section-title-line"><span>PEŁNY KATALOG — 18 KATEGORII / 4 PRODUKTY W KAŻDEJ</span></div>
          <div className="reference-category-grid">
            {categories.map(([name, count], index) => (
              <Link href="/catalog" className="reference-category-card" key={name}>
                <b>{String(index + 1).padStart(2, '0')}</b>
                <strong>{name}</strong>
                <span>{count}</span>
              </Link>
            ))}
          </div>
          <div className="reference-catalog-cta"><Link href="/catalog">PRZEJDŹ DO PEŁNEGO KATALOGU →</Link></div>
        </section>

        <section id="raty" className="section finance-section">
          <p className="eyebrow">Finansowanie B2B</p>
          <h2>Orientacyjna kalkulacja finansowania</h2>
          <p>Kalkulator umożliwia wstępne oszacowanie rat. Ostateczne warunki zależą od finansującego, oprocentowania, prowizji oraz oceny transakcji.</p>
          <InstallmentCalculator />
        </section>
      </main>
      <Footer />
    </>
  );
}
