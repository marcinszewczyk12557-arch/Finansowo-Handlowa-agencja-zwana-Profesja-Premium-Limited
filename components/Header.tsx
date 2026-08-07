import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header reference-header">
      <div className="reference-header__inner">
        <Link href="/" className="reference-brand" aria-label="Profesja Premium Limited — strona główna">
          <img src="/profesja-logo.svg" alt="Logo Profesja Premium Limited" />
          <span>
            <strong>PROFESJA</strong>
            <small>PREMIUM LIMITED</small>
          </span>
        </Link>

        <nav className="reference-nav" aria-label="Główna nawigacja">
          <Link href="/" className="active">STRONA GŁÓWNA</Link>
          <Link href="/about">O NAS</Link>
          <Link href="/offers/new">OFERTA</Link>
          <Link href="/catalog">KATALOG PRODUKTÓW</Link>
          <Link href="/#raty">FINANSOWANIE</Link>
          <Link href="/dashboard">DLA KLIENTA</Link>
          <Link href="/contact">KONTAKT</Link>
        </nav>

        <div className="reference-actions">
          <Link href="/catalog" aria-label="Szukaj w katalogu">⌕</Link>
          <Link href="/dashboard" aria-label="Panel klienta">♙</Link>
          <Link href="/offers/new" className="reference-offer-button">ZAPYTAJ O OFERTĘ</Link>
        </div>
      </div>
    </header>
  );
}
