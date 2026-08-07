import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import products from '../../../data/products';

export function generateStaticParams() {
  return products.map((product) => ({ id: String(product.id) }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((item) => String(item.id) === params.id);
  if (!product) notFound();

  return (
    <>
      <Header />
      <main>
        <section className="hero compact-hero">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className="product-price"><strong>{product.priceLabel}</strong></p>
          <div className="cta-row">
            <Link href={`/offers/new?product=${encodeURIComponent(product.name)}`}><button>Zapytaj o ofertę</button></Link>
            <Link href="/#raty"><button className="cta-secondary">Sprawdź raty</button></Link>
          </div>
        </section>

        <section className="section product-detail-grid">
          <article className="card">
            <p className="eyebrow">Dokumentacja</p>
            <h2>Parametry i zgodność</h2>
            <p>{product.certificates.join(', ')}</p>
          </article>
          <article className="card">
            <p className="eyebrow">Gwarancja</p>
            <h2>Warunki ochrony</h2>
            <p>{product.warranty}</p>
          </article>
          <article className="card">
            <p className="eyebrow">Multimedia</p>
            <h2>Materiały PL / EN</h2>
            <p>{product.mediaStatus}</p>
          </article>
        </section>

        {product.id === 1 ? (
          <section className="section flagship-offer">
            <p className="eyebrow">Oferta specjalna</p>
            <h2>Nubia REDMAGIC — seria gaming premium</h2>
            <p>
              Oferta obejmuje wybrane warianty smartfonów Nubia REDMAGIC w przedziale cenowym od 4 250 zł do 8 225 zł.
              Ostateczna cena zależy od modelu, pamięci, koloru, wersji regionalnej i bieżącej dostępności.
            </p>
            <div className="grid">
              <article className="card"><h3>Warianty pamięci</h3><p>Konfiguracje są potwierdzane przed przygotowaniem finalnej oferty.</p></article>
              <article className="card"><h3>Finansowanie</h3><p>Możliwość przygotowania orientacyjnej symulacji sprzedaży ratalnej dla wybranego wariantu.</p></article>
              <article className="card"><h3>Materiały produktowe</h3><p>Galeria i prezentacja mogą zostać uzupełnione po zatwierdzeniu materiałów, do których przysługują prawa do publikacji.</p></article>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
