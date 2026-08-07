import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import InstallmentCalculator from '../components/InstallmentCalculator';
import MediaShowcase from '../components/MediaShowcase';
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
            <Link href="/catalog"><button className="cta-secondary">Przejdź do katalogu</button></Link>
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
            <p>Organizacja pozyskiwania produktów z naciskiem na dokumentację, zgodność oferty i jakość obsługi.</p>
          </article>
        </section>

        <section className="section">
          <p className="eyebrow">Multimedia</p>
          <h2>Profesjonalne prezentacje i wizualizacje AI</h2>
          <p>Materiały demonstracyjne przygotowane dla marki. Materiały konkretnego produktu będą oznaczane jako wizualizacje AI, jeśli nie przedstawiają rzeczywistego egzemplarza.</p>
        </section>
        <MediaShowcase />

        <section className="section">
          <p className="eyebrow">Katalog</p>
          <h2>Wybrane pozycje premium</h2>
          <p>Każda oferta może zostać uzupełniona o zweryfikowaną dokumentację, warunki gwarancji i dedykowane materiały PL/EN.</p>
        </section>

        <section className="grid" aria-label="Produkty katalogowe">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

        <section id="raty" className="section">
          <InstallmentCalculator />
        </section>

        <section className="section">
          <p className="eyebrow">Kontakt</p>
          <h2>Rozpocznij współpracę</h2>
          <p>
            Działalność prowadzona jest online i ma zasięg globalny. W sprawach handlowych skorzystaj z formularza B2B lub napisz bezpośrednio na profesja.premium@gmail.com.
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
