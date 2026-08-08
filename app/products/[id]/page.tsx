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
          {product.rating ? <p><strong>Ocena konfiguracji:</strong> {product.rating}</p> : null}
          <p>{product.description}</p>
          <div className="card">
            <p className="eyebrow">Wycena indywidualna B2B</p>
            <p><strong>{product.priceLabel}</strong></p>
            <p>Końcowa cena handlowa, dostępność, wariant, warunki dostawy i finansowania są potwierdzane indywidualnie dla konkretnego zapytania, ilości oraz rynku docelowego.</p>
            {product.minimumOrder ? <p><strong>Warunki minimalnego zamówienia:</strong> {product.minimumOrder}</p> : null}
          </div>
          <div className="cta-row">
            <Link href={`/offers/new?product=${encodeURIComponent(product.name)}`}><button>Zapytaj o ofertę B2B</button></Link>
            <Link href="/catalog"><button className="cta-secondary">Wróć do katalogu</button></Link>
          </div>
        </section>

        {product.tiers?.length ? (
          <section className="section">
            <p className="eyebrow">Standard ofertowy agencji</p>
            <h2>Poziomy parametrów technicznych</h2>
            <div className="grid">
              {product.tiers.map((tier) => (
                <article className="card" key={tier.label}>
                  <h3>Wariant {tier.label}</h3>
                  {tier.specs?.length ? <ul>{tier.specs.map((spec) => <li key={spec}>{spec}</li>)}</ul> : <>{tier.ram ? <p><strong>RAM:</strong> {tier.ram}</p> : null}{tier.storage ? <p><strong>Pamięć:</strong> {tier.storage}</p> : null}{tier.display ? <p><strong>Wyświetlacz:</strong> {tier.display}</p> : null}{tier.processor ? <p><strong>Procesor:</strong> {tier.processor}</p> : null}{tier.battery ? <p><strong>Bateria:</strong> {tier.battery}</p> : null}{tier.charging ? <p><strong>Ładowanie:</strong> {tier.charging}</p> : null}{tier.camera ? <p><strong>Aparat:</strong> {tier.camera}</p> : null}{tier.connectivity ? <p><strong>Łączność:</strong> {tier.connectivity}</p> : null}</>}
                </article>
              ))}
            </div>
            <p className="calculator-note">Parametry stanowią standard ofertowy Profesja Premium Limited. Ostateczna konfiguracja konkretnej partii jest potwierdzana przed zawarciem transakcji.</p>
          </section>
        ) : null}

        <section className="section product-detail-grid">
          <article className="card"><p className="eyebrow">Dokumentacja</p><h2>Parametry i zgodność</h2><p>{product.certificates.join(', ')}</p></article>
          <article className="card"><p className="eyebrow">Gwarancja</p><h2>Warunki ochrony</h2><p>{product.warranty}</p></article>
          <article className="card"><p className="eyebrow">Multimedia</p><h2>Materiały PL / EN</h2><p>{product.mediaStatus}</p></article>
        </section>
      </main>
      <Footer />
    </>
  );
}
