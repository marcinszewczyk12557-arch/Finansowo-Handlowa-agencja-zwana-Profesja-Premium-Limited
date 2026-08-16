import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { homeAssets1 } from '../data/homeAssets1';
import { homeAssets2 } from '../data/homeAssets2';

const categories = [
  ['Smartfony Premium', 'urządzenia mobilne i rozwiązania komunikacyjne', '01'],
  ['Laptopy Premium', 'wydajne stacje mobilne i notebooki biznesowe', '02'],
  ['Energia i Fotowoltaika', 'instalacje PV, magazyny energii i systemy hybrydowe', '03'],
  ['HVAC', 'klimatyzacja, wentylacja i rozwiązania VRF/VRV', '04'],
  ['Meble Premium', 'wyposażenie gabinetów, recepcji i sal konferencyjnych', '05'],
  ['Drzwi i Bramy Premium', 'systemy wejściowe, automatyka i kontrola dostępu', '06'],
  ['Maszyny i Sprzęt Ciężki', 'maszyny budowlane, komunalne i przemysłowe', '07'],
  ['Wyposażenie Przedsiębiorstw', 'narzędzia, stanowiska pracy i wyposażenie techniczne', '08'],
  ['Wellness Premium', 'wyposażenie stref relaksu, SPA i hospitality', '09'],
  ['Smart Home Premium', 'automatyka budynkowa, sterowanie i inteligentne systemy', '10'],
  ['Luxury Interior', 'wyposażenie i zabudowy wnętrz reprezentacyjnych', '11'],
  ['Outdoor Luxury', 'tarasy, pergole i wyposażenie stref zewnętrznych', '12'],
  ['Premium Lighting', 'oświetlenie dekoracyjne, techniczne i sterowanie', '13'],
  ['Executive Office', 'wyposażenie gabinetów zarządu i przestrzeni executive', '14'],
  ['Hospitality Premium', 'wyposażenie hoteli, apartamentów i stref usługowych', '15'],
  ['Audio Video Premium', 'systemy AV, prezentacyjne i multimedialne', '16'],
  ['E-Mobility', 'ładowanie, infrastruktura i rozwiązania elektromobilności', '17'],
  ['Leisure Premium', 'produkty rekreacyjne i wyposażenie czasu wolnego', '18'],
];

const brandWall = [
  ['HILTI', 'hilti'], ['Milwaukee', 'milwaukee'], ['Makita', 'makita'], ['Bosch Professional', 'bosch'], ['Festool', 'festool'], ['DeWalt', 'dewalt'],
  ['Apple', 'apple'], ['Samsung', 'samsung'], ['Huawei', 'huawei'], ['Xiaomi', 'xiaomi'], ['OPPO', 'oppo'],
  ['vivo', 'vivo'], ['realme', 'realme'], ['OnePlus', 'oneplus'], ['HONOR', 'honor'], ['Infinix', 'infinix'],
  ['TECNO', 'tecno'], ['Meizu', 'meizu'], ['Nokia', 'nokia'], ['Motorola', 'motorola'], ['Google', 'google'],
  ['Sony', 'sony'], ['Lenovo', 'lenovo'], ['ASUS', 'asus'], ['Acer', 'acer'], ['Dell', 'dell'],
  ['HP', 'hp'], ['Microsoft', 'microsoft'], ['Intel', 'intel'], ['AMD', 'amd'], ['NVIDIA', 'nvidia'],
  ['Bosch', 'bosch'], ['Siemens', 'siemens'], ['LG', 'lg'], ['Panasonic', 'panasonic'], ['Philips', 'philips'],
  ['Haier', 'haier'], ['Midea', 'midea'], ['Hisense', 'hisense'], ['TCL', 'tcl'], ['Sharp', 'sharp'],
  ['DJI', 'dji'], ['Anker', 'anker'], ['Baseus', 'baseus'], ['UGREEN', 'ugreen'], ['Lenovo Legion', 'lenovolegion'],
];

const originalSmartphones = [
  { image: homeAssets1.nubia01, brand: 'nubia', model: 'Z80 Ultra 16GB+512GB', retailEur: 799, profesjaPln: 2765, availability: 'wariant i stan potwierdzane przed zamówieniem' },
  { image: homeAssets1.nubia02, brand: 'nubia', model: 'Z70S Ultra', retailEur: 669, profesjaPln: 2315, availability: 'wariant i stan magazynowy potwierdzane przed zamówieniem' },
  { image: homeAssets1.nubia03, brand: 'nubia', model: 'Z70 Ultra', retailEur: 529, profesjaPln: 1831, availability: 'dostępność zależna od wariantu' },
  { image: homeAssets1.nubia04, brand: 'REDMAGIC', model: '11 Pro 12GB+256GB', retailEur: 699, profesjaPln: 2419, availability: 'dostępność wariantu potwierdzana przed zamówieniem' },
  { image: homeAssets2.nubia05, brand: 'REDMAGIC', model: '11 Air', retailEur: 599, profesjaPln: 2073, availability: 'wariant pamięci potwierdzany przed zamówieniem' },
  { image: homeAssets2.nubia06, brand: 'REDMAGIC', model: '10S Pro', retailEur: 609, profesjaPln: 2107, availability: 'dostępność może być ograniczona' },
  { image: homeAssets2.nubia07, brand: 'REDMAGIC', model: '10 Air', retailEur: 449, profesjaPln: 1554, availability: 'dostępność może być ograniczona' },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="premium-home">
        <section aria-label="Dni otwarcia i obsługa B2B" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, padding: '14px 24px', borderBottom: '1px solid #2f373b', background: 'linear-gradient(90deg, rgba(192,155,70,.14), rgba(8,15,19,.96))' }}>
          <div><strong style={{ color: '#f0d778', letterSpacing: '.16em' }}>DNI OTWARCIA</strong><span style={{ marginLeft: 14, color: '#d8d8d8' }}>Obsługa zapytań B2B i indywidualnych wycen online</span></div>
          <Link href="/contact" style={{ color: '#f0d778', fontWeight: 700, textDecoration: 'none' }}>KONTAKT →</Link>
        </section>

        <section className="commerce-hero">
          <div className="commerce-hero__brand">
            <img src="/profesja-logo.svg" alt="Logo PROFESJA PREMIUM LIMITED" style={{ width: 112, height: 112, objectFit: 'contain', marginBottom: 12 }} />
            <p className="eyebrow">Agencja Finansowo-Handlowa B2B</p>
            <h1>PROFESJA</h1><div className="brand-gold">PREMIUM LIMITED™</div>
            <h2>KOMPLEKSOWE ROZWIĄZANIA DLA BIZNESU</h2>
            <p className="hero-services">FINANSOWANIE • IMPORT • SOURCING • LOGISTYKA</p>
            <p style={{ maxWidth: 560, lineHeight: 1.7, color: '#c9c9c9' }}>Kompleksowa obsługa przedsiębiorstw: dobór produktów, organizacja importu i dostaw, indywidualne zapytania ofertowe oraz koordynacja procesu handlowego od zapytania do realizacji.</p>
            <div className="cta-row" style={{ marginTop: 24 }}><Link href="/offers/new"><button>ZAPYTAJ O OFERTĘ</button></Link><Link href="/catalog"><button className="cta-secondary">ZOBACZ KATALOG</button></Link></div>
          </div>

          <div className="product-stage" aria-label="Przykładowa oferta urządzeń premium"><div className="stage-glow" /><div className="featured-stage-photo"><img src={originalSmartphones[0].image} alt="Przykładowy produkt premium" /></div><div className="stage-plinth" /></div>

          <aside className="commerce-hero__offer">
            <div className="brand-offer-label">GLOBALNE MARKI • PROFESJONALNE ROZWIĄZANIA</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 10, margin: '16px 0 18px' }}>
              {brandWall.slice(0, 6).map(([name, slug]) => (
                <div key={`${name}-${slug}`} style={{ minHeight: 68, border: '1px solid #38434a', borderRadius: 10, background: 'rgba(255,255,255,.96)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                  <img src={`https://cdn.simpleicons.org/${slug}/777777`} alt={name} loading="lazy" style={{ maxWidth: '100%', maxHeight: 38, filter: 'grayscale(1)', opacity: .82 }} />
                </div>
              ))}
            </div>
            <div className="feature-row"><span><b>01</b>Zweryfikowane modele</span><span><b>02</b>Profesjonalne zastosowania</span><span><b>03</b>Obsługa B2B</span><span><b>04</b>Indywidualna realizacja</span></div>
            <div style={{ marginTop: 22, padding: 18, border: '1px solid #38434a', borderRadius: 12, background: 'rgba(8,15,19,.72)' }}><strong style={{ color: '#f0d778' }}>INDYWIDUALNE WARUNKI OFERTOWE</strong><p style={{ marginBottom: 0, color: '#b7b7b7', lineHeight: 1.55 }}>Dostępność, konfiguracja i warunki zakupu są potwierdzane przed przedstawieniem wiążącej oferty.</p></div>
          </aside>
        </section>

        <section className="section" aria-label="Globalne marki" style={{ paddingTop: 36, paddingBottom: 40 }}>
          <p className="eyebrow">GLOBALNE MARKI I TECHNOLOGIE</p>
          <h2 style={{ marginBottom: 10 }}>Marki rozpoznawalne w wielu sektorach profesjonalnych</h2>
          <p style={{ maxWidth: 900, color: '#b7b7b7', lineHeight: 1.65 }}>Logotypy prezentowane są w neutralnej, poszarzałej formie jako wizualne oznaczenie rodzin produktowych i technologii. Dostępność konkretnych modeli jest każdorazowo potwierdzana w indywidualnej ofercie.</p>
          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))', gap: 12 }}>
            {brandWall.map(([name, slug], index) => (
              <div key={`${name}-${slug}-${index}`} style={{ minHeight: 92, border: '1px solid #303a3f', borderRadius: 12, background: 'rgba(247,247,247,.96)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, padding: 14 }}>
                <img src={`https://cdn.simpleicons.org/${slug}/7a7a7a`} alt={`${name} — logo`} loading="lazy" style={{ width: '100%', maxWidth: 104, maxHeight: 42, objectFit: 'contain', filter: 'grayscale(1)', opacity: .8 }} />
                <span style={{ color: '#555', fontSize: 11, fontWeight: 700, letterSpacing: '.05em', textAlign: 'center' }}>{name}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 18, fontSize: 12, color: '#81878a', lineHeight: 1.55 }}>Nazwy i znaki towarowe należą do ich odpowiednich właścicieli. Ich prezentacja nie oznacza partnerstwa, autoryzacji ani oficjalnego przedstawicielstwa, o ile nie wskazano tego wyraźnie dla konkretnej oferty.</p>
        </section>

        <section className="quick-actions">
          <Link href="/offers/new"><span>01</span><div><strong>ZAMÓW OFERTĘ</strong><small>Szybka wycena B2B</small></div><b>→</b></Link>
          <Link href="/offers/new?product=Finansowanie%20B2B"><span>02</span><div><strong>FINANSOWANIE</strong><small>Rozwiązania dobierane do konkretnej transakcji</small></div><b>→</b></Link>
          <Link href="/about"><span>03</span><div><strong>IMPORT</strong><small>Koordynacja sourcingu, dostawy i dokumentacji</small></div><b>→</b></Link>
          <Link href="/contact"><span>04</span><div><strong>KONTAKT Z DORADCĄ</strong><small>Indywidualne wsparcie handlowe</small></div><b>→</b></Link>
        </section>

        <section className="section featured-offers-section">
          <p className="eyebrow">Wybrane oferty produktowe</p>
          <h2>Przykładowe produkty w ofercie B2B</h2>
          <p>Prezentowane ceny mają charakter orientacyjny. Końcowa cena zależy od modelu, konfiguracji, wielkości zamówienia, dostępności, kursu walut oraz kosztów realizacji.</p>
          <div className="featured-offer-grid">
            {originalSmartphones.map((offer, index) => (
              <article className="featured-offer-card" key={`${offer.brand}-${offer.model}`}>
                <img src={offer.image} alt={`${offer.brand} ${offer.model}`} />
                <div className="featured-offer-copy">
                  <span>OFERTA {String(index + 1).padStart(2, '0')} • B2B</span>
                  <h3>{offer.brand} {offer.model}</h3>
                  <p><strong>Marka:</strong> {offer.brand}</p>
                  <p><strong>Model:</strong> {offer.model}</p>
                  <p><strong>Dostępność:</strong> {offer.availability}.</p>
                  <p><small>Dokładna konfiguracja jest potwierdzana w indywidualnej ofercie.</small></p>
                  <strong className="featured-price">Orientacyjna cena PROFESJA: ok. {offer.profesjaPln.toLocaleString('pl-PL')} zł / szt.</strong>
                  <Link href={`/offers/new?product=${encodeURIComponent(`${offer.brand} ${offer.model}`)}`}>POPROŚ O WYCENĘ →</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="category-section"><div className="section-title-line"><span>PEŁNY KATALOG PRODUKTÓW I ROZWIĄZAŃ B2B</span></div><div className="category-ribbon">{categories.map(([name, sub, icon]) => (<Link href="/catalog" className="category-tile" key={name}><div className="category-visual">{icon}</div><strong>{name}</strong><span>{sub}</span></Link>))}</div></section>

        <section className="trust-strip"><div><b>01</b><strong>BEZPIECZNY PROCES</strong><span>Warunki i dokumentacja weryfikowane przed transakcją</span></div><div><b>02</b><strong>INDYWIDUALNE WYCENY</strong><span>Warunki dopasowane do konkretnego zamówienia</span></div><div><b>03</b><strong>GWARANCJA I SERWIS</strong><span>Zakres potwierdzany dla wybranego produktu</span></div><div><b>04</b><strong>WSPARCIE B2B</strong><span>Koordynacja procesu na każdym etapie</span></div><div><b>05</b><strong>GLOBALNY SOURCING</strong><span>Organizacja importu i dostaw międzynarodowych</span></div></section>

        <section id="finansowanie" className="section finance-section">
          <p className="eyebrow">Finansowanie B2B</p>
          <h2>Finansowanie dobierane do konkretnej transakcji</h2>
          <p>Możliwe formy finansowania, dostępność, koszt i warunki zależą od wartości zamówienia, profilu przedsiębiorstwa oraz decyzji wybranego finansującego. PROFESJA może pomóc w przygotowaniu danych transakcji i organizacji procesu, ale nie gwarantuje decyzji kredytowej ani finansowania.</p>
          <Link href="/offers/new?product=Finansowanie%20B2B"><button>ZAPYTAJ O FINANSOWANIE B2B</button></Link>
        </section>

        <section className="section premium-contact-block"><div><p className="eyebrow">Profesja Premium Limited</p><h2>Zapytaj o rozwiązanie dopasowane do Twojej firmy</h2><p>Produkty markowe, sourcing, import, logistyka i finansowanie w jednym, uporządkowanym procesie obsługi B2B.</p></div><div className="cta-row"><Link href="/catalog"><button>Przejdź do katalogu</button></Link><Link href="/offers/new"><button className="cta-secondary">Złóż zapytanie B2B</button></Link></div></section>
      </main>
      <Footer />
    </>
  );
}
