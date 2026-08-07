import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InstallmentCalculator from '../components/InstallmentCalculator';
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

const nubiaOfferImages = [
  homeAssets1.nubia01, homeAssets1.nubia02, homeAssets1.nubia03, homeAssets1.nubia04,
  homeAssets2.nubia05, homeAssets2.nubia06, homeAssets2.nubia07, homeAssets2.nubia08,
  homeAssets3.nubia09, homeAssets3.nubia10, homeAssets3.nubia11, homeAssets3.nubia12,
  homeAssets4.nubia13, homeAssets4.nubia14, homeAssets4.nubia15,
];

const nubiaSeriesOffers = nubiaOfferImages.map((image, index) => ({
  image,
  title: `Nubia / REDMAGIC — seria premium ${String(index + 1).padStart(2, '0')}`,
  application: index === 14
    ? 'zestaw kolekcjonerski i prezentacyjny dla klienta B2B'
    : 'gaming, multimedia, praca mobilna i zastosowania profesjonalne',
}));

const privateLabelSuppliers = [
  {
    name: 'Shenzhen Cwell Electronic Technology Co., Ltd.',
    tenure: '18 lat na Alibaba',
    moq: 'od 10 szt. w wybranych ofertach',
    strengths: 'pełna personalizacja • ODM • boot logo • opakowanie • etykieta • konfiguracja pamięci i sieci',
  },
  {
    name: 'Shenzhen Omis Electronics Technology Co., Ltd.',
    tenure: '16 lat na Alibaba',
    moq: 'MOQ zależne od wariantu',
    strengths: 'pełna personalizacja • ODM • logo • firmware • ROM • aplikacje • opakowanie i etykieta',
  },
  {
    name: 'Shenzhen Songming Communication Technology Co., Ltd.',
    tenure: '6 lat na Alibaba',
    moq: 'typowo od 3000 szt. dla serii OEM',
    strengths: 'OEM/ODM • własny projekt ID • hardware • software • firmware • ROM • smartfony 4G/5G',
  },
  {
    name: 'Shenzhen Qimei Electronic Technology Co., Ltd.',
    tenure: '5 lat na Alibaba',
    moq: 'typowo od 3000 szt. dla serii OEM',
    strengths: 'smartfony OEM/ODM • 4G/5G • serie private label • konfiguracja oferty pod markę klienta',
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="premium-home">
        <section className="commerce-hero">
          <div className="commerce-hero__brand">
            <p className="eyebrow">Agencja Finansowo-Handlowa B2B</p>
            <h1>PROFESJA</h1>
            <div className="brand-gold">PREMIUM LIMITED™</div>
            <h2>KOMPLEKSOWE ROZWIĄZANIA DLA BIZNESU</h2>
            <p className="hero-services">FINANSOWANIE • IMPORT • SOURCING • OEM / ODM • PRIVATE LABEL</p>
            <p style={{ maxWidth: 560, lineHeight: 1.7, color: '#c9c9c9' }}>
              Profesjonalna obsługa przedsiębiorstw: dobór produktów, organizacja dostaw, zapytania ofertowe,
              rozwiązania private label oraz indywidualne wsparcie handlowe.
            </p>
            <div className="cta-row" style={{ marginTop: 24 }}>
              <Link href="/offers/new"><button>ZAPYTAJ O OFERTĘ</button></Link>
              <Link href="/catalog"><button className="cta-secondary">ZOBACZ KATALOG</button></Link>
            </div>
          </div>

          <div className="product-stage" aria-label="Wybrane smartfony Nubia i REDMAGIC">
            <div className="stage-glow" />
            <div className="featured-stage-photo">
              <img src={nubiaSeriesOffers[0].image} alt="Nubia / REDMAGIC — wybrana oferta" />
            </div>
            <div className="stage-plinth" />
          </div>

          <aside className="commerce-hero__offer">
            <div className="brand-offer-label">OFERTA ELEKTRONIKI PREMIUM I PRIVATE LABEL</div>
            <img src={homeAssets0.nubiaBrand} alt="Nubia REDMAGIC" style={{ width: '100%', maxWidth: 250, margin: '14px 0', borderRadius: 10 }} />
            <img src={homeAssets0.noNameLogo} alt="No Name No Logo premium electronic" style={{ width: '100%', maxWidth: 290, margin: '8px 0 16px', borderRadius: 10 }} />
            <div className="feature-row">
              <span><b>01</b>Markowe serie</span>
              <span><b>02</b>OEM / ODM</span>
              <span><b>03</b>Logo klienta</span>
              <span><b>04</b>Import B2B</span>
            </div>
            <div style={{ marginTop: 22, padding: 18, border: '1px solid #38434a', borderRadius: 12, background: 'rgba(8,15,19,.72)' }}>
              <strong style={{ color: '#f0d778' }}>WYCENA INDYWIDUALNA B2B</strong>
              <p style={{ marginBottom: 0, color: '#b7b7b7', lineHeight: 1.55 }}>
                Cena, MOQ, konfiguracja, transport i warunki realizacji są potwierdzane dla konkretnego produktu i zamówienia.
              </p>
            </div>
          </aside>
        </section>

        <section className="quick-actions">
          <Link href="/offers/new"><span>01</span><div><strong>ZAMÓW OFERTĘ</strong><small>Szybka wycena B2B</small></div><b>→</b></Link>
          <Link href="/#raty"><span>02</span><div><strong>FINANSOWANIE</strong><small>Rozwiązania dla przedsiębiorstw</small></div><b>→</b></Link>
          <Link href="/about"><span>03</span><div><strong>IMPORT</strong><small>Kompleksowa organizacja</small></div><b>→</b></Link>
          <Link href="/contact"><span>04</span><div><strong>KONTAKT Z DORADCĄ</strong><small>Indywidualne wsparcie</small></div><b>→</b></Link>
        </section>

        <section className="section featured-offers-section">
          <p className="eyebrow">Oferta specjalna Nubia / REDMAGIC</p>
          <h2>Smartfony premium w indywidualnej ofercie B2B</h2>
          <p>Każdy dostarczony materiał produktowy został przypisany do osobnej pozycji. Dokładny model, pamięć, kolor, dostępność i warunki gwarancyjne potwierdzamy przed zamówieniem.</p>
          <div className="featured-offer-grid">
            {nubiaSeriesOffers.map((offer, index) => (
              <article className="featured-offer-card" key={offer.title}>
                <img src={offer.image} alt={`${offer.title} — materiał produktowy ${index + 1}`} />
                <div className="featured-offer-copy">
                  <span>OFERTA {index + 1}/{nubiaSeriesOffers.length}</span>
                  <h3>{offer.title}</h3>
                  <p><strong>Opis:</strong> seria smartfonów premium dobierana do zastosowania, wymagań technicznych i budżetu klienta biznesowego.</p>
                  <p><strong>Zastosowanie:</strong> {offer.application}.</p>
                  <p><strong>Obsługa:</strong> sourcing, dobór wariantu, organizacja importu i dokumentacja handlowa.</p>
                  <strong className="featured-price">Wycena indywidualna</strong>
                  <Link href={`/offers/new?product=${encodeURIComponent(offer.title)}`}>POPROŚ O OFERTĘ →</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section featured-offers-section">
          <p className="eyebrow">NO NAME • NO LOGO • PRIVATE LABEL</p>
          <h2>Seria produktów elektronicznych z miejscem na logo klienta</h2>
          <p>Program OEM/ODM może obejmować logo na urządzeniu, ekran startowy, opakowanie, etykietę, a zależnie od producenta również firmware, ROM, pamięć, sieć i aplikacje.</p>
          <div className="featured-offer-grid">
            {privateLabelSuppliers.map((supplier, index) => (
              <article className="featured-offer-card" key={supplier.name}>
                <img src={homeAssets0.noNameLogo} alt={`Private Label — miejsce na logo klienta — ${supplier.name}`} />
                <div className="featured-offer-copy">
                  <span>OEM / ODM {index + 1}/{privateLabelSuppliers.length}</span>
                  <h3>{supplier.name}</h3>
                  <p><strong>Historia profilu:</strong> {supplier.tenure}.</p>
                  <p><strong>Możliwości:</strong> {supplier.strengths}.</p>
                  <p><strong>MOQ:</strong> {supplier.moq}.</p>
                  <p><strong>Branding klienta:</strong> zakres personalizacji jest potwierdzany dla wybranego modelu i wielkości zamówienia.</p>
                  <strong className="featured-price">Wycena indywidualna B2B</strong>
                  <Link href={`/offers/new?product=${encodeURIComponent(`Private Label — ${supplier.name}`)}`}>ZAPYTAJ O PRIVATE LABEL →</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="category-section">
          <div className="section-title-line"><span>PEŁNY KATALOG PRODUKTÓW I ROZWIĄZAŃ B2B</span></div>
          <div className="category-ribbon">
            {categories.map(([name, sub, icon]) => (
              <Link href="/catalog" className="category-tile" key={name}>
                <div className="category-visual">{icon}</div><strong>{name}</strong><span>{sub}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="trust-strip">
          <div><b>01</b><strong>BEZPIECZNE TRANSAKCJE</strong><span>Sprawdzane warunki i dokumentacja</span></div>
          <div><b>02</b><strong>INDYWIDUALNE WYCENY</strong><span>Warunki dopasowane do konkretnego zamówienia</span></div>
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
            <h2>Zapytaj o rozwiązanie dopasowane do Twojej firmy</h2>
            <p>Produkty, sourcing, private label, import i finansowanie w jednym procesie obsługi B2B.</p>
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
