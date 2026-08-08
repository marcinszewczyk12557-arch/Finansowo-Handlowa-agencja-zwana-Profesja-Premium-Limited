import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
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

export default function Home() {
  return (
    <>
      <Header />
      <main className="premium-home">
        <section aria-label="Dni otwarcia i obsługa B2B" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, padding: '14px 24px', borderBottom: '1px solid #2f373b', background: 'linear-gradient(90deg, rgba(192,155,70,.14), rgba(8,15,19,.96))' }}>
          <div><strong style={{ color: '#f0d778', letterSpacing: '.16em' }}>DNI OTWARCIA</strong><span style={{ marginLeft: 14, color: '#d8d8d8' }}>Obsługa zapytań B2B i wycen indywidualnych online</span></div>
          <Link href="/contact" style={{ color: '#f0d778', fontWeight: 700, textDecoration: 'none' }}>KONTAKT →</Link>
        </section>

        <section className="commerce-hero">
          <div className="commerce-hero__brand">
            <img src="/profesja-logo.svg" alt="Logo PROFESJA PREMIUM LIMITED" style={{ width: 112, height: 112, objectFit: 'contain', marginBottom: 12 }} />
            <p className="eyebrow">Agencja Finansowo-Handlowa B2B</p>
            <h1>PROFESJA</h1><div className="brand-gold">PREMIUM LIMITED™</div>
            <h2>KOMPLEKSOWE ROZWIĄZANIA DLA BIZNESU</h2>
            <p className="hero-services">FINANSOWANIE • IMPORT • SOURCING • LOGISTYKA</p>
            <p style={{ maxWidth: 560, lineHeight: 1.7, color: '#c9c9c9' }}>Profesjonalna obsługa przedsiębiorstw: dobór produktów, organizacja dostaw, zapytania ofertowe oraz indywidualne wsparcie handlowe.</p>
            <div className="cta-row" style={{ marginTop: 24 }}><Link href="/offers/new"><button>ZAPYTAJ O OFERTĘ</button></Link><Link href="/catalog"><button className="cta-secondary">ZOBACZ KATALOG</button></Link></div>
          </div>

          <div className="product-stage" aria-label="Wybrane smartfony Nubia i REDMAGIC"><div className="stage-glow" /><div className="featured-stage-photo"><img src={nubiaSeriesOffers[0].image} alt="Nubia / REDMAGIC — wybrana oferta" /></div><div className="stage-plinth" /></div>

          <aside className="commerce-hero__offer">
            <div className="brand-offer-label">OFERTA ELEKTRONIKI PREMIUM</div>
            <img src={homeAssets0.nubiaBrand} alt="Nubia REDMAGIC" style={{ width: '100%', maxWidth: 250, margin: '14px 0', borderRadius: 10 }} />
            <div className="feature-row"><span><b>01</b>Markowe serie</span><span><b>02</b>Dobór wariantu</span><span><b>03</b>Import B2B</span><span><b>04</b>Obsługa handlowa</span></div>
            <div style={{ marginTop: 22, padding: 18, border: '1px solid #38434a', borderRadius: 12, background: 'rgba(8,15,19,.72)' }}><strong style={{ color: '#f0d778' }}>WYCENA INDYWIDUALNA B2B</strong><p style={{ marginBottom: 0, color: '#b7b7b7', lineHeight: 1.55 }}>Cena, dostępność, konfiguracja, transport i warunki realizacji są potwierdzane dla konkretnego produktu i zamówienia.</p></div>
          </aside>
        </section>

        <section className="quick-actions">
          <Link href="/offers/new"><span>01</span><div><strong>ZAMÓW OFERTĘ</strong><small>Szybka wycena B2B</small></div><b>→</b></Link>
          <Link href="/offers/new?product=Finansowanie%20B2B"><span>02</span><div><strong>FINANSOWANIE</strong><small>Indywidualne rozwiązania dla przedsiębiorstw</small></div><b>→</b></Link>
          <Link href="/about"><span>03</span><div><strong>IMPORT</strong><small>Kompleksowa organizacja</small></div><b>→</b></Link>
          <Link href="/contact"><span>04</span><div><strong>KONTAKT Z DORADCĄ</strong><small>Indywidualne wsparcie</small></div><b>→</b></Link>
        </section>

        <section className="section featured-offers-section"><p className="eyebrow">Oferta specjalna Nubia / REDMAGIC</p><h2>Smartfony premium w indywidualnej ofercie B2B</h2><p>Każdy materiał produktowy jest przypisany do osobnej pozycji. Dokładny model, pamięć, kolor, dostępność i warunki gwarancyjne potwierdzamy przed zamówieniem.</p><div className="featured-offer-grid">{nubiaSeriesOffers.map((offer, index) => (<article className="featured-offer-card" key={offer.title}><img src={offer.image} alt={`${offer.title} — materiał produktowy ${index + 1}`} /><div className="featured-offer-copy"><span>OFERTA {index + 1}/{nubiaSeriesOffers.length}</span><h3>{offer.title}</h3><p><strong>Opis:</strong> seria smartfonów premium dobierana do zastosowania, wymagań technicznych i budżetu klienta biznesowego.</p><p><strong>Zastosowanie:</strong> {offer.application}.</p><p><strong>Obsługa:</strong> dobór wariantu, organizacja importu i dokumentacja handlowa.</p><strong className="featured-price">Wycena indywidualna</strong><Link href={`/offers/new?product=${encodeURIComponent(offer.title)}`}>POPROŚ O OFERTĘ →</Link></div></article>))}</div></section>

        <section className="category-section"><div className="section-title-line"><span>PEŁNY KATALOG PRODUKTÓW I ROZWIĄZAŃ B2B</span></div><div className="category-ribbon">{categories.map(([name, sub, icon]) => (<Link href="/catalog" className="category-tile" key={name}><div className="category-visual">{icon}</div><strong>{name}</strong><span>{sub}</span></Link>))}</div></section>

        <section className="trust-strip"><div><b>01</b><strong>BEZPIECZNE TRANSAKCJE</strong><span>Sprawdzane warunki i dokumentacja</span></div><div><b>02</b><strong>INDYWIDUALNE WYCENY</strong><span>Warunki dopasowane do konkretnego zamówienia</span></div><div><b>03</b><strong>GWARANCJA</strong><span>Warunki potwierdzane przed zakupem</span></div><div><b>04</b><strong>WSPARCIE B2B</strong><span>Dedykowana obsługa na każdym etapie</span></div><div><b>05</b><strong>GLOBALNY ZASIĘG</strong><span>Sourcing i import międzynarodowy</span></div></section>

        <section id="finansowanie" className="section finance-section">
          <p className="eyebrow">Finansowanie B2B</p>
          <h2>Finansowanie dobierane do konkretnej transakcji</h2>
          <p>Możliwe formy finansowania, dostępność, koszt i warunki zależą od wartości zamówienia, profilu przedsiębiorstwa oraz decyzji wybranego finansującego. PROFESJA może pomóc w przygotowaniu danych transakcji i organizacji procesu, ale nie gwarantuje decyzji kredytowej ani finansowania.</p>
          <Link href="/offers/new?product=Finansowanie%20B2B"><button>ZAPYTAJ O FINANSOWANIE B2B</button></Link>
        </section>

        <section className="section premium-contact-block"><div><p className="eyebrow">Profesja Premium Limited</p><h2>Zapytaj o rozwiązanie dopasowane do Twojej firmy</h2><p>Produkty, sourcing, import, logistyka i finansowanie w jednym procesie obsługi B2B.</p></div><div className="cta-row"><Link href="/catalog"><button>Przejdź do katalogu</button></Link><Link href="/offers/new"><button className="cta-secondary">Złóż zapytanie B2B</button></Link></div></section>
      </main>
      <Footer />
    </>
  );
}
