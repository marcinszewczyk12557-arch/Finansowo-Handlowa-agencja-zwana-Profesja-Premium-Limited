import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="phase-one-footer">
      <div className="phase-one-footer__inner">
        <div className="phase-one-footer__brand">
          <img src="/profesja-logo.svg" alt="Logo PROFESJA PREMIUM LIMITED" />
          <div><strong>PROFESJA</strong><span>PREMIUM LIMITED™</span></div>
        </div>

        <div>
          <h4>KATALOG</h4>
          <Link href="/catalog">Wszystkie kategorie</Link>
          <Link href="/catalog">Elektronika użytkowa</Link>
          <Link href="/catalog">Elektronarzędzia</Link>
        </div>
        <div>
          <h4>USŁUGI</h4>
          <Link href="/#raty">Finansowanie B2B</Link>
          <Link href="/about">Import i sourcing</Link>
          <Link href="/velox">Logistyka door-to-door</Link>
        </div>
        <div>
          <h4>INFORMACJE</h4>
          <Link href="/about">O nas</Link>
          <Link href="/terms">Regulamin</Link>
          <Link href="/privacy">Polityka prywatności</Link>
        </div>
        <div>
          <h4>KONTAKT</h4>
          <a href="mailto:profesja.premium@gmail.com">profesja.premium@gmail.com</a>
          <span>Obsługa online B2B</span>
        </div>
        <div className="phase-one-footer__legal">
          <strong>PROFESJA PREMIUM LIMITED™</strong>
          <span>Wszelkie prawa zastrzeżone © 2026</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
