import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InstallmentCalculator from '../components/InstallmentCalculator';
import { redmagicFeaturedOffers } from '../data/redmagicFeatured';
import { MIN_ORDER_QUANTITY, pricingRange } from '../data/pricing';
import { homeAssets0 } from '../data/homeAssets0';
import { homeAssets1 } from '../data/homeAssets1';
import { homeAssets2 } from '../data/homeAssets2';
import { homeAssets3 } from '../data/homeAssets3';
import { homeAssets4 } from '../data/homeAssets4';

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
const USD_TO_PLN_QUOTE = 4;

const nubiaOfferImages = [
  homeAssets1.nubia01, homeAssets1.nubia02, homeAssets1.nubia03, homeAssets1.nubia04,
  homeAssets2.nubia05, homeAssets2.nubia06, homeAssets2.nubia07, homeAssets2.nubia08,
  homeAssets3.nubia09, homeAssets3.nubia10, homeAssets3.nubia11, homeAssets3.nubia12,
  homeAssets4.nubia13, homeAssets4.nubia14, homeAssets4.nubia15,
];

const nubiaSeriesOffers = nubiaOfferImages.map((image, index) => ({
  image,
  title: `Nubia / REDMAGIC — seria premium ${String(index + 1).padStart(2, '0')}`,
  application: index === 14 ? 'zestaw kolekcjonerski i prezentacyjny dla klienta B2B' : 'gaming, multimedia, praca mobilna i zastosowania profesjonalne',
  basePrice: redmagicFeaturedOffers[index % redmagicFeaturedOffers.length].price / PREVIOUS_REDMAGIC_MULTIPLIER,
}));

const privateLabelSuppliers = [
  {
    name: 'Shenzhen Cwell Electronic Technology Co., Ltd.',
    tenure: '18 lat na Alibaba',
    baseUsd: 48.25,
    moq: 'od 10 szt. w wybranych ofertach',
    strengths: 'Verified Custom Manufacturer • pełna personalizacja • ODM • boot logo • opakowanie • etykieta • konfiguracja pamięci i sieci',
  },
  {
    name: 'Shenzhen Omis Electronics Technology Co., Ltd.',
    tenure: '16 lat na Alibaba',
    baseUsd: 85,
    moq: 'MOQ zależne od wariantu',
    strengths: 'Verified Supplier • pełna personalizacja • ODM • logo • firmware • ROM • aplikacje • opakowanie i etykieta',
  },
  {
    name: 'Shenzhen Songming Communication Technology Co., Ltd.',
    tenure: '6 lat na Alibaba',
    baseUsd: 64,
    moq: 'typowo od 3000 szt. dla serii OEM',
    strengths: 'OEM/ODM • własny projekt ID • hardware • software • firmware • ROM • smartfony 4G/5G i urządzenia branżowe',
  },
  {
    name: 'Shenzhen Qimei Electronic Technology Co., Ltd.',
    tenure: '5 lat na Alibaba',
    baseUsd: 75,
    moq: 'typowo od 3000 szt. dla serii OEM',
    strengths: 'producent smartfonów OEM/ODM • 4G/5G • serie private label • możliwość konfiguracji oferty pod markę klienta',
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="premium-home">
        <section className="commerce-hero">
          <div className="commerce-hero__brand">
            <img src={homeAssets0.agencyLogo} alt="Logo agencji Profesja Premium Limited" className="commerce-logo" />
            <h1>PROFESJA</h1>
            <div className="brand-gold">PREMIUM LIMITED</div>
            <p className="agency-label">FINANSOWO-HANDLOWA AGENCJA</p>
            <h2>KOMPLEKSOWE ROZWIĄZANIA DLA BIZNESU</h2>
            <p className="hero-services">FINANSOWANIE • IMPORT • DOSTAWY • WSPARCIE</p>
            <div className="opening-hours"><div className="opening-icon">DNI</div><div><strong>DNI OTWARCIA</strong><p>Pełna oferta B2B: produkty markowe, sourcing OEM/ODM oraz serie private label.</p><small>Działalność online • zasięg globalny • obsługa indywidualna</small></div></div>
          </div>

          <div className="product-stage" aria-label="Wybrane smartfony Nubia i REDMAGIC">
            <div className="stage-glow" />
            <div className="featured-stage-photo"><img src={nubiaSeriesOffers[0].image} alt="Nubia / REDMAGIC — wybrana oferta" /></div>
            <div className="stage-plinth" />
          </div>

          <aside className="commerce-hero__offer">
            <div className="brand-offer-label">MARKI I PRODUKTY PREZENTOWANE W OFERCIE</div>
            <img src={homeAssets0.nubiaBrand} alt="Nubia REDMAGIC" style={{ width: '100%', maxWidth: 260, margin: '14px 0', borderRadius: 10 }} />
            <img src={homeAssets0.noNameLogo} alt="No Name No Logo premium electronic" style={{ width: '100%', maxWidth: 300, margin: '8px 0 16px', borderRadius: 10 }} />
            <div className="feature-row"><span><b>01</b>Markowe serie</span><span><b>02</b>OEM / ODM</span><span><b>03</b>Logo klienta</span><span><b>04</b>Import B2B</span></div>
            <div className="trade-box"><h3>WARUNKI HANDLOWE B2B</h3><div className="trade-grid"><div><small>CENA MINIMALNA</small><strong>174%</strong><span>od {MIN_ORDER_QUANTITY} sztuk tego samego produktu</span></div><div><small>CENA MAKSYMALNA</small><strong>184%</strong><span>1 sztuka próbna</span></div></div></div>
          </aside>
        </section>

        <section className="quick-actions"><Link href="/offers/new"><span>01</span><div><strong>ZAMÓW OFERTĘ</strong><small>Szybka wycena B2B</small></div><b>→</b></Link><Link href="/#raty"><span>02</span><div><strong>FINANSOWANIE</strong><small>Leasing, raty, rozwiązania B2B</small></div><b>→</b></Link><Link href="/about"><span>03</span><div><strong>IMPORT</strong><small>Kompleksowa organizacja</small></div><b>→</b></Link><Link href="/contact"><span>04</span><div><strong>KONTAKT Z DORADCĄ</strong><small>Indywidualne wsparcie</small></div><b>→</b></Link></section>

        <section className="section featured-offers-section">
          <p className="eyebrow">Oferta specjalna Nubia / REDMAGIC</p>
          <h2>15 wariantów wizualnych z dostarczonych materiałów produktowych</h2>
          <p>Zdjęcia są przypisane do osobnych ofert. Dokładny model, pamięć, kolor, region dystrybucji, dostępność i warunki gwarancyjne są potwierdzane w indywidualnej ofercie przed zamówieniem.</p>
          <div className="featured-offer-grid">
            {nubiaSeriesOffers.map((offer, index) => {
              const range = pricingRange(offer.basePrice);
              return <article className="featured-offer-card" key={offer.title}>
                <img src={offer.image} alt={`${offer.title} — materiał produktowy ${index + 1}`} />
                <div className="featured-offer-copy">
                  <span>OFERTA {index + 1}/{nubiaSeriesOffers.length}</span><h3>{offer.title}</h3>
                  <p><strong>Opis:</strong> seria smartfonów premium prezentowana na podstawie dostarczonego materiału wizualnego. Konfigurację urządzenia dobieramy do zastosowania i budżetu klienta B2B.</p>
                  <p><strong>Zastosowanie:</strong> {offer.application}.</p><p><strong>Zakres obsługi:</strong> sourcing, weryfikacja wariantu, organizacja importu, dokumentacja handlowa i wsparcie finansowania.</p>
                  <small>1 szt. próbna — 184% ceny bazowej</small><strong className="featured-price">{pln(range.maxUnit)}</strong>
                  <small>od {MIN_ORDER_QUANTITY} szt. — 174% ceny bazowej</small><strong className="featured-price">{pln(range.minUnit)} / szt.</strong>
                  <small>Równowartość {MIN_ORDER_QUANTITY} sztuk: {pln(range.minOrderTotal)}</small>
                  <Link href={`/offers/new?product=${encodeURIComponent(offer.title)}&qty=${MIN_ORDER_QUANTITY}`}>POPROŚ O OFERTĘ →</Link>
                </div>
              </article>;
            })}
          </div>
        </section>

        <section className="section featured-offers-section">
          <p className="eyebrow">NO NAME • NO LOGO • PRIVATE LABEL</p>
          <h2>Seria produktów elektronicznych z miejscem na logo klienta</h2>
          <p>Program OEM/ODM umożliwia przygotowanie urządzeń pod marką klienta: logo na obudowie, ekran startowy, opakowanie i etykieta, a u wybranych producentów także firmware, ROM, konfiguracja pamięci, sieci i aplikacji. Poniższa shortlista obejmuje dostawców z co najmniej 3-letnią historią na Alibaba według aktualnie widocznych profili.</p>
          <div className="featured-offer-grid">
            {privateLabelSuppliers.map((supplier, index) => {
              const basePln = supplier.baseUsd * USD_TO_PLN_QUOTE;
              const range = pricingRange(basePln);
              return <article className="featured-offer-card" key={supplier.name}>
                <img src={homeAssets0.noNameLogo} alt={`Miejsce na logo klienta — ${supplier.name}`} />
                <div className="featured-offer-copy">
                  <span>OEM / ODM {index + 1}/{privateLabelSuppliers.length}</span><h3>{supplier.name}</h3>
                  <p><strong>Historia profilu:</strong> {supplier.tenure}.</p>
                  <p><strong>Możliwości:</strong> {supplier.strengths}.</p>
                  <p><strong>MOQ producenta:</strong> {supplier.moq}.</p>
                  <p><strong>Branding klienta:</strong> miejsce na własne logo i identyfikację wizualną jest elementem zapytania produkcyjnego; finalny zakres zależy od wybranego modelu i MOQ.</p>
                  <small>Kalkulacyjny koszt bazowy: ok. USD {supplier.baseUsd.toFixed(2)} przy kursie roboczym 4,00 PLN/USD</small>
                  <small>Oferta próbna — 184% ceny bazowej</small><strong className="featured-price">{pln(range.maxUnit)}</strong>
                  <small>Oferta ilościowa — 174% ceny bazowej</small><strong className="featured-price">{pln(range.minUnit)} / szt.</strong>
                  <Link href={`/offers/new?product=${encodeURIComponent(`Private Label — ${supplier.name}`)}`}>ZAPYTAJ O PRIVATE LABEL →</Link>
                </div>
              </article>;
            })}
          </div>
          <p style={{ marginTop: 20, color: '#b7b7b7' }}><strong>Nota wyceny:</strong> ceny są kalkulacyjne i pokazują mechanizm 174%–184% stosowany na stronie. Nie obejmują automatycznie frachtu, ubezpieczenia, cła, VAT, badań zgodności ani zmian kursowych. Finalna cena i MOQ są potwierdzane w ofercie handlowej.</p>
        </section>

        <section className="category-section"><div className="section-title-line"><span>PEŁNY KATALOG — 5 PRODUKTÓW W KAŻDYM ELEMENTCIE HIERARCHII</span></div><div className="category-ribbon">{categories.map(([name, sub, icon]) => <Link href="/catalog" className="category-tile" key={name}><div className="category-visual">{icon}</div><strong>{name}</strong><span>{sub}</span></Link>)}</div></section>
        <section className="trust-strip"><div><b>01</b><strong>BEZPIECZNE TRANSAKCJE</strong><span>Sprawdzane warunki i dokumentacja</span></div><div><b>02</b><strong>CENY ILOŚCIOWE</strong><span>174% od 10 szt. / 184% dla próbki</span></div><div><b>03</b><strong>GWARANCJA</strong><span>Warunki potwierdzane przed zakupem</span></div><div><b>04</b><strong>WSPARCIE B2B</strong><span>Dedykowana obsługa na każdym etapie</span></div><div><b>05</b><strong>GLOBALNY ZASIĘG</strong><span>Sourcing i import międzynarodowy</span></div></section>
        <section id="raty" className="section finance-section"><p className="eyebrow">Finansowanie B2B</p><h2>Orientacyjna kalkulacja finansowania</h2><p>Kalkulator umożliwia wstępne oszacowanie rat. Ostateczne warunki zależą od finansującego, oprocentowania, prowizji oraz oceny transakcji.</p><InstallmentCalculator /></section>
        <section className="section premium-contact-block"><div><p className="eyebrow">Profesja Premium Limited</p><h2>Pełna wielopoziomowa struktura katalogu B2B</h2><p>Każda oferta pokazuje cenę próbki, cenę ilościową oraz równowartość minimalnego zamówienia. Private label jest każdorazowo wyceniany po potwierdzeniu parametrów i MOQ producenta.</p></div><div className="cta-row"><Link href="/catalog"><button>Przejdź do pełnego katalogu</button></Link><Link href="/offers/new"><button className="cta-secondary">Złóż zapytanie B2B</button></Link></div></section>
      </main>
      <Footer />
    </>
  );
}
