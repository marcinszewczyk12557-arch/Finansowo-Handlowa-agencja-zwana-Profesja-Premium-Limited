import Link from 'next/link';

const publicUrl = 'https://profesja-premium-limited.vercel.app/';

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div>
          <p className="eyebrow">Finansowo-Handlowa Agencja</p>
          <h1 className="brand-name">profesja/premium/limited</h1>
          <a className="public-url" href={publicUrl} target="_blank" rel="noreferrer">
            {publicUrl}
          </a>
        </div>

        <nav className="site-nav" aria-label="Główna nawigacja">
          <Link href="/">Start</Link>
          <Link href="/offers/new">Zapytanie B2B</Link>
          <Link href="/register">Rejestracja</Link>
          <Link href="/login">Logowanie</Link>
          <Link href="/dashboard">Panel klienta</Link>
          <Link href="/admin">Panel administratora</Link>
        </nav>
      </div>
    </header>
  );
}
