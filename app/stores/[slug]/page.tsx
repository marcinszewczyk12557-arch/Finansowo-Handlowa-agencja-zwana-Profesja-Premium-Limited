import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import StoreProductBrowser from '../../../components/StoreProductBrowser';
import { businessStoreNetwork, getBusinessStoreBySlug } from '../../../data/businessStoreNetwork';
import { franchiseCatalog } from '../../../data/franchiseCatalog';
import { store01MobileCatalog } from '../../../data/store01MobileCatalog';
import { store02MobileComputingCatalog } from '../../../data/store02MobileComputingCatalog';

type PageProps = { params: Promise<{ slug: string }> };
type DisplayProduct = { code: string; department?: string; title: string; use: string };

export function generateStaticParams() {
  return businessStoreNetwork.map((store) => ({ slug: store.slug }));
}

export default async function BusinessStorePage({ params }: PageProps) {
  const { slug } = await params;
  const store = getBusinessStoreBySlug(slug);
  if (!store) notFound();

  const starterProducts = franchiseCatalog.filter((product) => product.category === store.category);
  const displayedProducts: DisplayProduct[] = store.number === 1
    ? store01MobileCatalog
    : store.number === 2
      ? store02MobileComputingCatalog
      : starterProducts.map((product, index) => ({
          code: `${String(store.number).padStart(2, '0')}-${String(index + 1).padStart(3, '0')}`,
          title: product.title,
          use: product.use,
        }));
  const hasFullCatalog = store.number === 1 || store.number === 2;

  return <>
    <Header />
    <main style={{ background: '#f6f8f9', color: '#172126', minHeight: '100vh' }}>
      <section style={{ background: '#122027', color: '#fff', borderBottom: '1px solid #33444c' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '54px 24px 46px' }}>
          <p className="eyebrow" style={{ color: '#f0d778' }}>PROFESJA PREMIUM LIMITED™ • STORE {String(store.number).padStart(2, '0')} / 50</p>
          <h1 style={{ maxWidth: 900, fontSize: 'clamp(2rem,5vw,4rem)', marginBottom: 14 }}>{store.nameEn}</h1>
          <h2 style={{ maxWidth: 900, marginTop: 0, color: '#dbe4e8' }}>{store.namePl}</h2>
          <p style={{ maxWidth: 900, lineHeight: 1.75, color: '#d6dee2', fontSize: '1.08rem' }}>{store.description}</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 26 }}>
            <Link href={`/offers/new?category=${encodeURIComponent(store.category)}&campaign=${encodeURIComponent(`Store ${store.number}/50`)}`}><button>REQUEST B2B OFFER / ZAPYTAJ O OFERTĘ</button></Link>
            <Link href="/catalog"><button className="cta-secondary">50 CATEGORIES / 50 KATEGORII</button></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40, paddingBottom: 20 }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ background: '#fff', border: '1px solid #dde3e6', borderRadius: 20, padding: '28px clamp(20px,4vw,40px)' }}>
            <p className="eyebrow">A–Z ASSORTMENT MODEL • MODEL ASORTYMENTU A–Z</p>
            <h2>Pełny zakres branży + sourcing produktu na indywidualne zapytanie</h2>
            <p style={{ lineHeight: 1.7, color: '#45555d', maxWidth: 980 }}>
              Działy poniżej tworzą szeroki katalog branżowy, ale nie są zamkniętym limitem oferty. Jeżeli potrzebny produkt należy do tej profesji, a nie ma go jeszcze na publicznej liście, klient może przesłać specyfikację, markę, model, zastosowanie lub parametry. PROFESJA może następnie przeprowadzić sourcing, weryfikację dostępności, zgodności, ceny i warunków dostawy przed przedstawieniem wiążącej oferty.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 22 }}>
              <div><strong>{store.departments.length}</strong><span style={{ marginLeft: 6 }}>działów A–Z</span></div>
              <div><strong>{displayedProducts.length}</strong><span style={{ marginLeft: 6 }}>numerowanych pozycji</span></div>
              <div><strong>{String(store.number).padStart(2, '0')}-XXX</strong><span style={{ marginLeft: 6 }}>format identyfikatora produktu</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 18 }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div className="taxonomy-leaf-heading"><div><p className="eyebrow">DEPARTMENTS / DZIAŁY</p><h2>{store.departments.length} głównych działów asortymentowych</h2></div><span>STORE {String(store.number).padStart(2, '0')}</span></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14 }}>
            {store.departments.map((department, index) => (
              <article key={department} style={{ background: '#fff', border: '1px solid #dde3e6', borderRadius: 16, padding: 20 }}>
                <span style={{ fontWeight: 800, letterSpacing: '.12em', color: '#607178' }}>{String(index + 1).padStart(2, '0')}</span>
                <h3 style={{ marginBottom: 10 }}>{department}</h3>
                <Link href={`/offers/new?category=${encodeURIComponent(store.category)}&product=${encodeURIComponent(department)}&campaign=${encodeURIComponent(`Store ${store.number}/50 A-Z`)}`} style={{ fontWeight: 700 }}>Zapytaj o produkt →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 18 }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <p className="eyebrow">NUMBERED PRODUCTS / NUMEROWANE PRODUKTY</p>
          <h2>{hasFullCatalog ? `Pełny katalog startowy sklepu ${String(store.number).padStart(2, '0')}` : 'Przykładowe pozycje wejściowe'}</h2>
          <p style={{ color: '#52636b', lineHeight: 1.65, maxWidth: 900 }}>Każdy produkt ma stałe oznaczenie w formacie SKLEP-PRODUKT. Pierwsze dwie cyfry wskazują numer sklepu, a trzy kolejne numer pozycji w jego katalogu. Numer jest przekazywany również do formularza zapytania ofertowego.</p>
          <StoreProductBrowser products={displayedProducts} category={store.category} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 18, paddingBottom: 50 }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', background: '#122027', color: '#fff', borderRadius: 22, padding: '30px clamp(20px,4vw,42px)' }}>
          <p className="eyebrow" style={{ color: '#f0d778' }}>FULL TRANSACTION PATH / PEŁNA ŚCIEŻKA OBSŁUGI</p>
          <h2>Od potrzeby klienta do dostawy i obsługi posprzedażowej</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 12, marginTop: 22 }}>
            {store.services.map((service, index) => <div key={service} style={{ border: '1px solid #41545d', borderRadius: 14, padding: 18 }}><strong style={{ color: '#f0d778' }}>{String(index + 1).padStart(2, '0')}</strong><div style={{ marginTop: 8 }}>{service}</div></div>)}
          </div>
          <p style={{ marginTop: 24, color: '#c7d2d7', lineHeight: 1.65 }}>Konkretna marka, model, cena, stan magazynowy, certyfikaty, gwarancja, MOQ i termin dostawy są potwierdzane dla danej transakcji. Publiczna karta nie oznacza automatycznie autoryzowanego partnerstwa z producentem.</p>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
