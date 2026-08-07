import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <p className="eyebrow">Globalna agencja finansowo-handlowa</p>
          <h2>Globalny Asortyment All In One</h2>
          <p>
            profesja/premium/limited to platforma współpracy dla klientów indywidualnych i firm B2B,
            nastawiona na starannie wyselekcjonowane oferty, sourcing międzynarodowy i indywidualne zapytania handlowe.
          </p>
          <div className="cta-row">
            <Link href="/offers/new"><button>Złóż zapytanie B2B</button></Link>
            <Link href="/register"><button className="cta-secondary">Załóż konto</button></Link>
          </div>
        </section>

        <section className="section">
          <p className="eyebrow">Oferta</p>
          <h2>Rozwiązania premium dla klientów i biznesu</h2>
        </section>

        <section className="grid" aria-label="Najważniejsze obszary oferty">
          <article className="card">
            <h3>Katalog Premium</h3>
            <p>Wyselekcjonowane produkty z rynku międzynarodowego, prezentowane w spójnym standardzie marki.</p>
          </article>
          <article className="card">
            <h3>Współpraca B2B</h3>
            <p>Indywidualne warunki współpracy, zapytania ofertowe i obsługa zamówień dla przedsiębiorstw.</p>
          </article>
          <article className="card">
            <h3>Sourcing globalny</h3>
            <p>Organizacja pozyskiwania produktów od dostawców zagranicznych z naciskiem na dokumentację i weryfikację oferty.</p>
          </article>
        </section>

        <section className="section">
          <p className="eyebrow">Katalog</p>
          <h2>Wybrane pozycje</h2>
          <p>Obecne wpisy są pozycjami demonstracyjnymi i będą sukcesywnie zastępowane zweryfikowanymi produktami katalogowymi.</p>
        </section>

        <section className="grid" aria-label="Produkty katalogowe">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

        <section className="section">
          <p className="eyebrow">Kontakt</p>
          <h2>Rozpocznij współpracę</h2>
          <p>
            Działalność prowadzona jest online i ma zasięg globalny. W sprawach handlowych skorzystaj z formularza B2B lub napisz bezpośrednio na adres kontaktowy podany w stopce.
          </p>
          <div className="cta-row">
            <Link href="/offers/new"><button>Nowe zapytanie ofertowe</button></Link>
            <a href="mailto:profesja.premium@gmail.com"><button className="cta-secondary">Napisz e-mail</button></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
