import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="reference-footer">
      <div className="reference-footer__inner">
        <div className="reference-footer__brand">
          <strong>PROFESJA</strong>
          <span>PREMIUM LIMITED™</span>
          <p>Prywatna działalność inwestycyjno-usługowa / agencja B2B • sourcing • organizacja transakcji • import • logistyka • OEM/ODM • private label</p>
          <p><strong>LEGAL_REVIEW:</strong> charakter prawny podmiotu i zakres usług finansowych wymagają potwierdzenia przed publikacją produkcyjną. PROFESJA PREMIUM LIMITED nie jest przedstawiana jako bank, fundusz inwestycyjny, firma inwestycyjna, ubezpieczyciel ani inna regulowana instytucja finansowa bez potwierdzonego zezwolenia lub wpisu do właściwego rejestru.</p>
        </div>

        <nav className="reference-footer__nav" aria-label="Nawigacja w stopce">
          <Link href="/about">O nas</Link>
          <Link href="/catalog">Katalog</Link>
          <Link href="/offers/new">Zapytanie B2B</Link>
          <Link href="/#finansowanie">Finansowanie</Link>
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
        <span>Kapitał prywatnego inwestora, usługi agencji B2B oraz finansowanie zapewniane przez ewentualnego zewnętrznego finansującego są rozdzielnymi rolami. Oferty, dostępność, parametry i warunki handlowe są potwierdzane indywidualnie przed zawarciem transakcji.</span>
      </div>
    </footer>
  );
}
