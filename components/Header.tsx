import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header reference-header">
      <div className="reference-topbar">
        <div className="reference-topbar__inner">
          <div className="reference-topbar__left">
            <span>FINANSOWANIE B2B</span><i>•</i><span>IMPORT</span><i>•</i><span>LOGISTYKA DOOR-TO-DOOR</span><i>•</i><span>OEM / ODM</span><i>•</i><span>PRIVATE LABEL</span>
          </div>
          <div className="reference-topbar__right">
            <a href="mailto:profesja.premium@gmail.com">✉ profesja.premium@gmail.com</a>
            <Link href="/contact">Kontakt</Link>
          </div>
        </div>
      </div>

      <div className="reference-header__inner">
        <Link href="/" className="reference-brand" aria-label="Profesja Premium Limited — strona główna">
          <img src="/profesja-logo.svg" alt="Logo PROFESJA PREMIUM LIMITED™" />
          <span>
            <strong>PROFESJA</strong>
            <small>PREMIUM LIMITED™</small>
          </span>
        </Link>

        <nav className="reference-nav" aria-label="Główna nawigacja">
          <Link href="/" className="active">STRONA GŁÓWNA</Link>
          <Link href="/offers/new">OFERTA</Link>
          <Link href="/catalog">KATALOG PRODUKTÓW</Link>
          <Link href="/shops">SKLEPY W BUDOWIE</Link>
          <Link href="/#finansowanie">FINANSOWANIE</Link>
          <Link href="/about">IMPORT</Link>
          <Link href="/offers/new?product=OEM%20ODM">OEM / ODM</Link>
          <Link href="/contact">KONTAKT</Link>
        </nav>

        <div className="reference-actions">
          <Link href="/offers/new" className="reference-offer-button">ZAPYTANIE B2B</Link>
          <Link href="/dashboard" className="reference-login-button">DLA KLIENTA</Link>
        </div>
      </div>
    </header>
  );
}
