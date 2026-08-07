import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <p className="eyebrow">Metropolis Corp. projekt</p>
        <h3>Profesja Premium Limited™</h3>
        <p>Internet — działalność o zasięgu globalnym</p>
        <p><a href="mailto:profesja.premium@gmail.com">profesja.premium@gmail.com</a></p>

        <nav className="footer-nav" aria-label="Nawigacja w stopce">
          <Link href="/about">O nas</Link>
          <Link href="/catalog">Katalog</Link>
          <Link href="/contact">Kontakt</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/privacy">Polityka prywatności</Link>
          <Link href="/terms">Regulamin</Link>
        </nav>

        <div className="footer-legal">
          ©™ Profesja Premium Limited™<br />
          Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
