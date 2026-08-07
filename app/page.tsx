import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import InstallmentCalculator from '../components/InstallmentCalculator';
import MediaShowcase from '../components/MediaShowcase';
import products from '../data/products';

const featuredIds = [1, 2, 3, 4, 5, 6, 7, 8];
const featuredProducts = products.filter((product) => featuredIds.includes(product.id));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero opening-hero">
          <div className="opening-badge">DNI OTWARCIA</div>
          <p className="eyebrow">Finansowo-Handlowa Agencja • działalność online o zasięgu globalnym</p>
          <h2>PROFESJA PREMIUM LIMITED</h2>
          <p className="hero-lead">
            Świetnie się składa — trwają Dni Otwarcia zarządczo-wykonawczego projektu prowadzonego pod marką
            Profesja Premium Limited. Tworzymy profesjonalną przestrzeń zakupową dla przedsiębiorców i klientów B2B,
            łącząc ofertę produktów premium, sourcing międzynarodowy oraz indywidualne rozwiązania finansowe.
          </p>

          <div className="opening-stats" aria-label="Najważniejsze warunki współpracy">
            <div><strong>95 000 zł</strong><span>minimalna wartość zamówienia B2B</span></div>
            <div><strong>14 szt.</strong><span>minimum dla wybranych ofert smartfonów</span></div>
            <div><strong>PL / EN</strong><span>materiały ofertowe na życzenie</span></div>
          </div>

          <div className="cta-row">
            <Link href="/catalog"><button>Przeglądaj katalog</button></Link>
            <Link href="/offers/new"><button className="cta-secondary">Zamów indywidualną ofertę</button></Link>
            <Link href="/#raty"><button className="cta-secondary">Oblicz finansowanie</button></Link>
          </div>
        </section>

        <section className="section">
          <p className="eyebrow">Profesja Premium Limited</p>
          <h2>Kompleksowa oferta dla przedsiębiorstw</h2>
          <p>
            Obsługujemy zakupy i wyposażenie przedsiębiorstw w wielu branżach — od elektroniki premium i wyposażenia
            stanowisk pracy, przez fotowoltaikę, magazyny energii i HVAC, po luksusowe wyposażenie wnętrz, drzwi, bramy,
            maszyny oraz ciężki sprzęt inżynierski.
          </p>
        </section>

        <section className="grid" aria-label="Główne obszary współpracy">
          <article className="card">
            <p className="eyebrow">Zakupy</p>
            <h3>Oferta B2B Premium</h3>
            <p>Indywidualne konfiguracje produktów, dostosowanie zamówienia do branży i skali działalności oraz przygotowanie kompletnej propozycji handlowej.</p>
          </article>
          <article className="card">
            <p className="eyebrow">Finansowanie</p>
            <h3>Elastyczne rozwiązania zakupowe</h3>
            <p>Orientacyjne symulacje rat i możliwość przygotowania finansowania dopasowanego do wartości zamówienia i parametrów transakcji.</p>
          </article>
          <article className="card">
            <p className="eyebrow">Import</p>
            <h3>Sourcing międzynarodowy</h3>
            <p>Organizacja pozyskiwania produktów z naciskiem na parametry techniczne, dokumentację, gwarancję i zgodność oferty z rynkiem docelowym.</p>
          </article>
        </section>

        <section className="section featured-intro">
          <p className="eyebrow">Wybrane oferty</p>
          <h2>Elektronika, energia, wyposażenie i przemysł</h2>
          <p>
            Poniższe pozycje przedstawiają najważniejsze kierunki katalogu. Każda oferta może zostać przygotowana w kilku poziomach technicznych oraz z indywidualnymi warunkami realizacji.
          </p>
        </section>

        <section className="grid" aria-label="Wybrane produkty katalogowe">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

        <section className="section brand-showcase">
          <p className="eyebrow">Oferta specjalna</p>
          <h2>Nubia REDMAGIC — smartfony gamingowe premium</h2>
          <p>
            Wybrane konfiguracje w cenach od 4 250 zł do 8 225 zł za sztukę. Dla tej kategorii obowiązuje minimalne
            zamówienie 14 sztuk oraz minimalna łączna wartość zamówienia 95 000 zł. Ostateczna specyfikacja partii jest
            potwierdzana przed zawarciem transakcji.
          </p>
          <div className="cta-row">
            <Link href="/products/1"><button>Zobacz ofertę REDMAGIC</button></Link>
            <Link href="/offers/new?product=Nubia%20REDMAGIC"><button className="cta-secondary">Zapytaj o konfigurację</button></Link>
          </div>
        </section>

        <section className="section brand-showcase">
          <p className="eyebrow">Laptopy Premium</p>
          <h2>Lenovo Legion — konfiguracja 4,8 / 5</h2>
          <p>
            Prezentowany wariant katalogowy został wyceniony na 7 140 zł za sztukę. Oferta obejmuje konfiguracje od wysokiej do najwyższej klasy, przeznaczone m.in. do AI, grafiki 3D, CAD/CAM, programowania i zastosowań biznesowych.
          </p>
          <div className="cta-row">
            <Link href="/products/2"><button>Zobacz ofertę laptopa</button></Link>
            <Link href="/offers/new?product=Lenovo%20Legion"><button className="cta-secondary">Zapytaj o konfigurację</button></Link>
          </div>
        </section>

        <section className="section">
          <p className="eyebrow">Multimedia</p>
          <h2>Prezentacje i wizualizacje ofertowe</h2>
          <p>
            Materiały demonstracyjne przygotowujemy w spójnym standardzie marki. Wizualizacje AI są oznaczane jako wizualizacje, jeśli nie przedstawiają rzeczywistego egzemplarza produktu.
          </p>
        </section>
        <MediaShowcase />

        <section id="raty" className="section">
          <p className="eyebrow">Finansowanie</p>
          <h2>Orientacyjna kalkulacja sprzedaży ratalnej</h2>
          <p>
            Kalkulator służy do wstępnej symulacji. Ostateczne warunki zależą od konkretnej oferty, oprocentowania, prowizji i decyzji instytucji finansującej.
          </p>
          <InstallmentCalculator />
        </section>

        <section className="section contact-cta">
          <p className="eyebrow">Kontakt</p>
          <h2>Rozpocznij współpracę z Profesja Premium Limited</h2>
          <p>
            Działalność prowadzona jest online i ma zasięg globalny. W sprawach handlowych skorzystaj z formularza B2B albo napisz bezpośrednio na profesja.premium@gmail.com.
          </p>
          <div className="cta-row">
            <Link href="/offers/new"><button>Nowe zapytanie ofertowe</button></Link>
            <a href="mailto:profesja.premium@gmail.com"><button className="cta-secondary">profesja.premium@gmail.com</button></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
