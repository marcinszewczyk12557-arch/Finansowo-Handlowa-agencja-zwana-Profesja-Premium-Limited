'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';

type SubmissionResult = {
  number: string;
  product: string;
  status: string;
  createdAt: string;
};

export default function OfferForm() {
  const [product, setProduct] = useState('');
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<SubmissionResult | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setProduct(params.get('product') || '');
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError('');
    setResult(null);

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch('/api/offers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.error || 'Nie udało się wysłać zapytania.');

      setResult(data.offer);
      window.localStorage.setItem('profesja_last_offer', JSON.stringify(data.offer));
      event.currentTarget.reset();
      setProduct('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Nie udało się wysłać zapytania.');
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={submit} className="premium-form">
      <p className="eyebrow">Kontakt handlowy</p>
      <h2>Zapytanie ofertowe B2B</h2>
      <p>Przekaż podstawowe parametry. Zapytanie zostanie zapisane w systemie PROFESJA i otrzyma indywidualny numer sprawy.</p>

      <div className="form-grid">
        <label>Nazwa firmy<input name="company" placeholder="Nazwa firmy" /></label>
        <label>Osoba kontaktowa<input name="contact" placeholder="Imię i nazwisko" required /></label>
        <label>Adres e-mail<input name="email" type="email" placeholder="kontakt@firma.pl" required /></label>
        <label>Telefon<input name="phone" type="tel" placeholder="+48 ..." /></label>
        <label>Produkt / usługa<input name="product" value={product} onChange={(event) => setProduct(event.target.value)} placeholder="Nazwa produktu lub potrzeby zakupowej" required /></label>
        <label>Ilość<input name="quantity" placeholder="np. 10 szt." /></label>
        <label>Rynek docelowy<input name="market" placeholder="Polska / UE / globalnie" /></label>
        <label>Budżet orientacyjny<input name="budget" placeholder="np. 50 000 PLN" /></label>
      </div>

      <label>Dodatkowe wymagania<textarea name="details" placeholder="Specyfikacja, termin, wariant, wymagane dokumenty, sposób dostawy..." /></label>
      <button type="submit" disabled={sending}>{sending ? 'ZAPISYWANIE ZAPYTANIA...' : 'WYŚLIJ ZAPYTANIE B2B'}</button>

      {result ? (
        <div className="form-status" role="status">
          <strong>Zapytanie zostało przyjęte.</strong><br />
          Numer sprawy: <b>{result.number}</b><br />
          Status: {result.status}. Zachowaj numer do dalszego kontaktu i śledzenia obsługi.
          <div className="cta-row" style={{ marginTop: 16 }}>
            <Link href="/dashboard"><button type="button">PRZEJDŹ DO PANELU KLIENTA</button></Link>
            <Link href="/catalog"><button type="button" className="cta-secondary">WRÓĆ DO KATALOGU</button></Link>
          </div>
        </div>
      ) : null}
      {error ? <p className="form-status" role="alert">{error}</p> : null}
    </form>
  );
}
