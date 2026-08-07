import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="reference-footer">
      <div className="reference-footer__inner">
        <div className="reference-footer__brand">
          <strong>PROFESJA</strong>
          <span>PREMIUM LIMITED™</span>
          <p>Finansowo-Handlowa Agencja B2B • finansowanie • import • sourcing • OEM/ODM • private label</p>
        </div>

        <nav className="reference-footer__nav" aria-label="Nawigacja w stopce">
          <Link href="/about">O nas</Link>
          <Link href="/catalog">Katalog</Link>
          <Link href="/offers/new">Zapytanie B2B</Link>
          <Link href="/#raty">Finansowanie</Link>
          <Link href="/contact">Kontakt</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/privacy">Polityka prywatności</Link>
          <Link href="/terms">Regulamin</Link>
        </nav>

        <div className="reference-footer__contact">
          <a href="mailto:profesja.premium@gmail.com">profesja.premium@gmail.com</a>
          <span>Obsługa przedsiębiorstw • zasięg międzynarodowy</span>
        </div>
      </div>
      <div className="reference-footer__bottom">
        <span>© 2026 PROFESJA PREMIUM LIMITED™. Wszelkie prawa zastrzeżone.</span>
        <span>Oferty, dostępność, parametry i warunki handlowe są potwierdzane indywidualnie przed zawarciem transakcji.</span>
      </div>
    </footer>
  );
}
