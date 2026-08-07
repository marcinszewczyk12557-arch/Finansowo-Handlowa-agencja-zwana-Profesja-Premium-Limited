import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="top-strip">
        <span>Internet — działalność o zasięgu globalnym</span>
        <a href="mailto:profesja.premium@gmail.com">profesja.premium@gmail.com</a>
      </div>

      <div className="site-header__inner">
        <div className="brand-block">
          <p className="eyebrow">Finansowo-Handlowa Agencja</p>
          <Link href="/" className="brand-name">profesja/premium/limited</Link>
        </div>

        <nav className="site-nav" aria-label="Główna nawigacja">
          <Link href="/">Start</Link>
          <Link href="/about">O nas</Link>
          <Link href="/catalog">Katalog</Link>
          <Link href="/#raty">Raty</Link>
          <Link href="/offers/new">Zapytanie B2B</Link>
          <Link href="/contact">Kontakt</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/dashboard">Panel klienta</Link>
          <Link href="/admin">Panel administratora</Link>
        </nav>
      </div>
    </header>
  );
}
