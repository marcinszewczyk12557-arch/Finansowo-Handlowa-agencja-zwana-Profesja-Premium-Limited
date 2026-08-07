import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="top-strip">
        <span>Internet — działalność o zasięgu globalnym</span>
        <a href="mailto:profesja.premium@gmail.com">profesja.premium@gmail.com</a>
      </div>

      <div className="site-header__inner">
        <Link href="/" className="brand-block" aria-label="Profesja Premium Limited — strona główna">
          <img src="/profesja-logo.svg" alt="Logo Profesja Premium Limited" className="brand-logo" />
          <div>
            <p className="eyebrow">Finansowo-Handlowa Agencja</p>
            <span className="brand-name">profesja/premium/limited</span>
          </div>
        </Link>

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
