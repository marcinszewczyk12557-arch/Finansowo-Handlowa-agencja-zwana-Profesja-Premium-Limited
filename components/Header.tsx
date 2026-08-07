import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header premium-header">
      <div className="premium-header__top">
        <Link href="/" className="premium-brand" aria-label="Profesja Premium Limited — strona główna">
          <img src="/profesja-logo.svg" alt="Logo Profesja Premium Limited" />
          <span>
            <strong>PROFESJA</strong>
            <small>PREMIUM LIMITED</small>
          </span>
        </Link>

        <div className="partner-label">
          <span>OFERTA B2B</span>
          <strong>nubia</strong>
          <small>SMARTPHONES</small>
        </div>

        <label className="header-search" aria-label="Wyszukaj produkty">
          <input type="search" placeholder="Szukaj produktów..." />
          <span>⌕</span>
        </label>

        <div className="header-actions">
          <Link href="/dashboard" className="header-action"><span>◎</span><b>Zaloguj się</b><small>Panel klienta</small></Link>
          <Link href="/offers/new" className="header-action"><span>▧</span><b>Zapytanie ofertowe</b><small>Szybka wycena</small></Link>
          <Link href="/catalog" className="header-cart">🛒 <b>Koszyk B2B</b></Link>
        </div>
      </div>

      <div className="premium-header__nav">
        <nav className="site-nav premium-nav" aria-label="Główna nawigacja">
          <Link href="/catalog" className="category-nav">☰ KATEGORIE PRODUKTÓW⌄</Link>
          <Link href="/" className="active">STRONA GŁÓWNA</Link>
          <Link href="/about">O NAS</Link>
          <Link href="/offers/new">OFERTA B2B</Link>
          <Link href="/catalog">KATALOG</Link>
          <Link href="/#raty">FINANSOWANIE</Link>
          <Link href="/about">IMPORT</Link>
          <Link href="/dashboard">REALIZACJE</Link>
          <Link href="/contact">KONTAKT</Link>
        </nav>
      </div>
    </header>
  );
}
