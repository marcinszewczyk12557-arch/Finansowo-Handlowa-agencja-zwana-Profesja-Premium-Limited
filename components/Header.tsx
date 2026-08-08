import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header phase-one-header">
      <div className="phase-one-header__main">
        <Link href="/" className="phase-one-brand" aria-label="PROFESJA PREMIUM LIMITED — strona główna">
          <img src="/profesja-logo.svg" alt="Logo PROFESJA PREMIUM LIMITED" />
          <span className="phase-one-brand__text">
            <strong>PROFESJA</strong>
            <b>PREMIUM LIMITED™</b>
            <small>FINANSOWO-HANDLOWA AGENCJA</small>
          </span>
        </Link>

        <form className="phase-one-search" action="/catalog" method="get">
          <input name="q" aria-label="Szukaj produktów, kategorii i marek" placeholder="Szukaj produktów, kategorii, marek..." />
          <button type="submit" aria-label="Szukaj">⌕</button>
        </form>

        <div className="phase-one-contact">
          <a href="mailto:profesja.premium@gmail.com">✉ profesja.premium@gmail.com</a>
          <Link href="/dashboard">♙ Moje konto</Link>
          <Link href="/offers/new" className="phase-one-rfq">🛒 RFQ</Link>
        </div>
      </div>

      <div className="phase-one-nav-wrap">
        <nav className="phase-one-nav" aria-label="Główna nawigacja">
          <Link href="/" className="active">STRONA GŁÓWNA</Link>
          <Link href="/catalog">KATALOG PRODUKTÓW</Link>
          <Link href="/services">USŁUGI</Link>
          <Link href="/#raty">FINANSOWANIE</Link>
          <Link href="/velox">DOSTAWA DOOR-TO-DOOR</Link>
          <Link href="/about">O NAS</Link>
          <Link href="/contact">KONTAKT</Link>
        </nav>
      </div>
    </header>
  );
}
