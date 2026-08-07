import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InstallmentCalculator from '../components/InstallmentCalculator';
import { redmagicFeaturedOffers } from '../data/redmagicFeatured';
import { MIN_ORDER_QUANTITY, pricingRange } from '../data/pricing';

const categories = [
  ['Smartfony Premium', 'kategorie i podkategorie', '01'], ['Laptopy Premium', 'kategorie i podkategorie', '02'],
  ['Energia i Fotowoltaika', 'kategorie i podkategorie', '03'], ['HVAC', 'kategorie i podkategorie', '04'],
  ['Meble Premium', 'kategorie i podkategorie', '05'], ['Drzwi i Bramy Premium', 'kategorie i podkategorie', '06'],
  ['Maszyny i Sprzęt Ciężki', 'kategorie i podkategorie', '07'], ['Wyposażenie Przedsiębiorstw', 'kategorie i podkategorie', '08'],
  ['Wellness Premium', 'kategorie i podkategorie', '09'], ['Smart Home Premium', 'kategorie i podkategorie', '10'],
  ['Luxury Interior', 'kategorie i podkategorie', '11'], ['Outdoor Luxury', 'kategorie i podkategorie', '12'],
  ['Premium Lighting', 'kategorie i podkategorie', '13'], ['Executive Office', 'kategorie i podkategorie', '14'],
  ['Hospitality Premium', 'kategorie i podkategorie', '15'], ['Audio Video Premium', 'kategorie i podkategorie', '16'],
  ['E-Mobility', 'kategorie i podkategorie', '17'], ['Leisure Premium', 'kategorie i podkategorie', '18'],
];

const pln = (value: number) => new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN', maximumFractionDigits: 0 }).format(value);
const PREVIOUS_REDMAGIC_MULTIPLIER = 1.4742;

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
            <div className="opening-hours"><div className="opening-icon">DNI</div><div><strong>DNI OTWARCIA</strong><p>Świetnie się składa — uruchamiamy pełną ofertę B2B Profesja Premium Limited.</p><small>Działalność online • zasięg globalny • obsługa indywidualna</small></div></div>
          </div>

          <div className="product-stage" aria-label="Wybrane produkty premium"><div className="stage-glow" /><div className="featured-stage-photo"><img src={redmagicFeaturedOffers[1].image} alt="REDMAGIC — wybrana oferta" /></div><div className="stage-plinth" /></div>

          <aside className="commerce-hero__offer">
            <div className="brand-offer-label">SMARTFONY GAMINGOWE PREMIUM</div><div className="nubia-word">nubia</div><div className="redmagic-mark">REDMAGIC</div>
            <div className="feature-row"><span><b>01</b>Wysoka wydajność</span><span><b>02</b>Chłodzenie</span><span><b>03</b>Szybkie ładowanie</span><span><b>04</b>Design premium</span></div>
            <div className="trade-box"><h3>WARUNKI HANDLOWE B2B</h3><div className="trade-grid"><div><small>CENA MINIMALNA</small><strong>174%</strong><span>od {MIN_ORDER_QUANTITY} sztuk tego samego produktu</span></div><div><small>CENA MAKSYMALNA</small><strong>184%</strong><span>1 sztuka próbna</span></div></div></div>
          </aside>
        </section>

        <section className="quick-actions"><Link href="/offers/new"><span>01</span><div><strong>ZAMÓW OFERTĘ</strong><small>Szybka wycena B2B</small></div><b>→</b></Link><Link href="/#raty"><span>02</span><div><strong>FINANSOWANIE</strong><small>Leasing, raty, rozwiązania B2B</small></div><b>→</b></Link><Link href="/about"><span>03</span><div><strong>IMPORT</strong><small>Kompleksowa organizacja</small></div><b>→</b></Link><Link href="/contact"><span>04</span><div><strong>KONTAKT Z DORADCĄ</strong><small>Indywidualne wsparcie</small></div><b>→</b></Link></section>

        <section className="section featured-offers-section">
          <p className="eyebrow">Oferta specjalna Nubia REDMAGIC</p>
          <h2>Ceny zależne od ilości: 174%–184% wartości bazowej</h2>
          <div className="featured-offer-grid">
            {redmagicFeaturedOffers.map((offer, index) => {
              const basePrice = offer.price / PREVIOUS_REDMAGIC_MULTIPLIER;
              const range = pricingRange(basePrice);
              return <article className="featured-offer-card" key={offer.title}>
                <img src={offer.image} alt={offer.title} />
                <div className="featured-offer-copy">
                  <span>OFERTA {index + 1}/5</span><h3>{offer.title}</h3>
                  <p><strong>Opis:</strong> smartfon klasy premium dobierany pod wysoką wydajność, ekran o wysokiej częstotliwości odświeżania, szybkie ładowanie i zastosowania profesjonalne.</p>
                  <p><strong>Zastosowanie:</strong> {offer.application}.</p><p><strong>Prezentacja:</strong> materiał produktowy PL/EN z prezentacją funkcji.</p><p><strong>Instrukcja:</strong> instrukcja obsługi i dokumentacja bezpieczeństwa dla zatwierdzonego wariantu.</p>
                  <small>1 szt. próbna — 184%</small><strong className="featured-price">{pln(range.maxUnit)}</strong>
                  <small>od {MIN_ORDER_QUANTITY} szt. — 174%</small><strong className="featured-price">{pln(range.minUnit)} / szt.</strong>
                  <small>Równowartość {MIN_ORDER_QUANTITY} sztuk: {pln(range.minOrderTotal)}</small>
                  <Link href={`/offers/new?product=${encodeURIComponent(offer.title)}&qty=${MIN_ORDER_QUANTITY}`}>POPROŚ O OFERTĘ →</Link>
                </div>
              </article>;
            })}
          </div>
        </section>

        <section className="category-section"><div className="section-title-line"><span>PEŁNY KATALOG — 5 PRODUKTÓW W KAŻDYM ELEMENTCIE HIERARCHII</span></div><div className="category-ribbon">{categories.map(([name, sub, icon]) => <Link href="/catalog" className="category-tile" key={name}><div className="category-visual">{icon}</div><strong>{name}</strong><span>{sub}</span></Link>)}</div></section>
        <section className="trust-strip"><div><b>01</b><strong>BEZPIECZNE TRANSAKCJE</strong><span>Sprawdzane warunki i dokumentacja</span></div><div><b>02</b><strong>CENY ILOŚCIOWE</strong><span>174% od 10 szt. / 184% dla próbki</span></div><div><b>03</b><strong>GWARANCJA</strong><span>Warunki potwierdzane przed zakupem</span></div><div><b>04</b><strong>WSPARCIE B2B</strong><span>Dedykowana obsługa na każdym etapie</span></div><div><b>05</b><strong>GLOBALNY ZASIĘG</strong><span>Sourcing i import międzynarodowy</span></div></section>
        <section id="raty" className="section finance-section"><p className="eyebrow">Finansowanie B2B</p><h2>Orientacyjna kalkulacja finansowania</h2><p>Kalkulator umożliwia wstępne oszacowanie rat. Ostateczne warunki zależą od finansującego, oprocentowania, prowizji oraz oceny transakcji.</p><InstallmentCalculator /></section>
        <section className="section premium-contact-block"><div><p className="eyebrow">Profesja Premium Limited</p><h2>Pełna wielopoziomowa struktura katalogu B2B</h2><p>Każda oferta pokazuje cenę próbki 1 szt., cenę minimalną od 10 szt. oraz równowartość minimalnego zamówienia ilościowego.</p></div><div className="cta-row"><Link href="/catalog"><button>Przejdź do pełnego katalogu</button></Link><Link href="/offers/new"><button className="cta-secondary">Złóż zapytanie B2B</button></Link></div></section>
      </main>
      <Footer />
    </>
  );
}
