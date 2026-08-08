'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

type LastOffer = {
  number: string;
  product: string;
  status: string;
  createdAt: string;
};

export default function Dashboard() {
  const [lastOffer, setLastOffer] = useState<LastOffer | null>(null);

  useEffect(() => {
    const raw = window.localStorage.getItem('profesja_last_offer');
    if (!raw) return;
    try {
      setLastOffer(JSON.parse(raw));
    } catch {
      window.localStorage.removeItem('profesja_last_offer');
    }
  }, []);

  return (
    <>
      <Header />
      <main className="section">
        <p className="eyebrow">Strefa klienta</p>
        <h1>Panel Klienta B2B</h1>
        <p>Jedno miejsce do obsługi zapytań, ofert i dokumentacji związanej ze współpracą z PROFESJA PREMIUM LIMITED™.</p>

        <section className="admin-stats" aria-label="Podsumowanie konta">
          <article className="card"><strong>{lastOffer ? 1 : 0}</strong><span>ostatnich zapytań na tym urządzeniu</span></article>
          <article className="card"><strong>{lastOffer?.status === 'NEW' ? 1 : 0}</strong><span>zapytanie oczekujące</span></article>
          <article className="card"><strong>0</strong><span>zamówień w realizacji</span></article>
        </section>

        {lastOffer ? (
          <section className="section admin-note">
            <p className="eyebrow">Ostatnie zapytanie</p>
            <h2>{lastOffer.number}</h2>
            <p><strong>Produkt / usługa:</strong> {lastOffer.product}</p>
            <p><strong>Status:</strong> {lastOffer.status}</p>
            <p><strong>Data zgłoszenia:</strong> {new Date(lastOffer.createdAt).toLocaleString('pl-PL')}</p>
            <p>Numer sprawy zachowaj do dalszego kontaktu z obsługą handlową.</p>
          </section>
        ) : null}

        <section className="grid">
          <article className="card">
            <h2>Nowe zapytanie</h2>
            <p>Opisz produkt, ilość, termin i dodatkowe wymagania. Zapytanie może dotyczyć produktu katalogowego lub indywidualnego sourcingu.</p>
            <Link href="/offers/new"><button>Złóż zapytanie</button></Link>
          </article>

          <article className="card">
            <h2>Katalog premium</h2>
            <p>Przeglądaj aktualne kategorie i pozycje przygotowane do indywidualnej wyceny.</p>
            <Link href="/catalog"><button>Otwórz katalog</button></Link>
          </article>

          <article className="card">
            <h2>Finansowanie B2B</h2>
            <p>Skorzystaj z orientacyjnego kalkulatora finansowania. Ostateczne warunki zależą od konkretnej oferty finansującej.</p>
            <Link href="/#raty"><button>Policz ratę</button></Link>
          </article>
        </section>

        <section className="section admin-note">
          <h2>Historia współpracy</h2>
          <p>Zapytania są teraz zapisywane w systemie. Pełna historia przypisana do konta klienta zostanie udostępniona po podłączeniu uwierzytelniania klientów; do tego czasu panel pokazuje ostatni numer sprawy zapisany na bieżącym urządzeniu.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
