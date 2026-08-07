import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-neutral-800 bg-neutral-950 px-6 py-5 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Finansowo-Handlowa Agencja</p>
          <h1 className="text-2xl font-bold">... profesja/premium/limited ...</h1>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm">
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
