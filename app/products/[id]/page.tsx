import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import products from '../../../data/products';
import { MIN_ORDER_QUANTITY, pricingRange } from '../../../data/pricing';

export function generateStaticParams() {
  return products.map((product) => ({ id: String(product.id) }));
}

const OLD_PRODUCT_MULTIPLIER = 1.85;
const pln = (value: number) => new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN', maximumFractionDigits: 0 }).format(value);

function extractOldPrices(label: string) {
  const matches = label.match(/[0-9][0-9\s.]*/g) ?? [];
  return matches.map((value) => Number(value.replace(/[\s.]/g, ''))).filter((value) => Number.isFinite(value) && value > 0);
}

function productPricing(label: string) {
  const values = extractOldPrices(label);
  if (!values.length) return null;
  const bases = values.map((value) => value / OLD_PRODUCT_MULTIPLIER);
  const low = pricingRange(Math.min(...bases));
  const high = pricingRange(Math.max(...bases));
  return { low, high, isRange: bases.length > 1 && Math.min(...bases) !== Math.max(...bases) };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((item) => String(item.id) === params.id);
  if (!product) notFound();
  const pricing = productPricing(product.priceLabel);

  return (
    <>
      <Header />
      <main>
        <section className="hero compact-hero">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          {product.rating ? <p><strong>Ocena konfiguracji:</strong> {product.rating}</p> : null}
          <p>{product.description}</p>
          {pricing ? (
            <div className="card">
              <p className="eyebrow">Polityka cenowa zależna od ilości</p>
              <p><strong>1 sztuka próbna — 184% wartości bazowej:</strong> {pricing.isRange ? `${pln(pricing.low.maxUnit)}–${pln(pricing.high.maxUnit)}` : pln(pricing.low.maxUnit)}</p>
              <p><strong>Od {MIN_ORDER_QUANTITY} sztuk — 174% wartości bazowej:</strong> {pricing.isRange ? `${pln(pricing.low.minUnit)}–${pln(pricing.high.minUnit)} / szt.` : `${pln(pricing.low.minUnit)} / szt.`}</p>
              <p><strong>Równowartość {MIN_ORDER_QUANTITY} sztuk:</strong> {pricing.isRange ? `${pln(pricing.low.minOrderTotal)}–${pln(pricing.high.minOrderTotal)}` : pln(pricing.low.minOrderTotal)}</p>
              <p className="calculator-note">Dla 2–9 sztuk cena jednostkowa maleje płynnie pomiędzy poziomem 184% i 174%.</p>
            </div>
          ) : <p className="product-price"><strong>{product.priceLabel}</strong></p>}
          <p><strong>Minimalne zamówienie ilościowe dla ceny minimalnej: {MIN_ORDER_QUANTITY} sztuk. Zakup 1 sztuki jest traktowany jako próbka.</strong></p>
          <div className="cta-row">
            <Link href={`/offers/new?product=${encodeURIComponent(product.name)}&qty=${MIN_ORDER_QUANTITY}`}><button>Zapytaj o ofertę</button></Link>
            <Link href="/#raty"><button className="cta-secondary">Sprawdź raty</button></Link>
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
