'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

type Result = { number: string; product: string; status: string; createdAt: string };

export default function VeloxDispatchForm() {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<Result | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError('');
    setResult(null);

    const form = new FormData(event.currentTarget);
    const pickup = String(form.get('pickupAddress') || '').trim();
    const delivery = String(form.get('deliveryAddress') || '').trim();
    const parcelType = String(form.get('parcelType') || '').trim();
    const weight = String(form.get('weight') || '').trim();
    const dimensions = String(form.get('dimensions') || '').trim();
    const pickupDate = String(form.get('pickupDate') || '').trim();
    const serviceLevel = String(form.get('serviceLevel') || '').trim();
    const insurance = form.get('insuranceRequested') === 'on' ? 'TAK' : 'NIE';
    const notes = String(form.get('notes') || '').trim();

    const details = [
      'VELOX LOGISTICS — DYSPOZYCJA DOOR-TO-DOOR',
      `Adres odbioru: ${pickup}`,
      `Adres dostawy: ${delivery}`,
      `Rodzaj przesyłki: ${parcelType}`,
      `Waga: ${weight || 'do potwierdzenia'}`,
      `Wymiary: ${dimensions || 'do potwierdzenia'}`,
      `Preferowany termin odbioru: ${pickupDate || 'do ustalenia'}`,
      `Poziom usługi: ${serviceLevel || 'standard / do ustalenia'}`,
      `Ubezpieczenie wymagane: ${insurance}`,
      notes ? `Uwagi operacyjne: ${notes}` : '',
      'Rola VELOX/PROFESJA: organizacja i dyspozycja transportu; faktyczny przewóz może wykonywać odrębny przewoźnik po potwierdzeniu warunków.',
    ].filter(Boolean).join('\n');

    const payload = {
      company: form.get('company'),
      contact: form.get('contact'),
      email: form.get('email'),
      phone: form.get('phone'),
      product: 'VELOX LOGISTICS — organizacja transportu door-to-door',
      quantity: form.get('packages'),
      market: form.get('routeMarket'),
      budget: form.get('budget'),
      details,
      financingRequested: false,
    };

    try {
      const response = await fetch('/api/offers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.error || 'Nie udało się zapisać dyspozycji.');
      setResult(data.offer);
      window.localStorage.setItem('profesja_last_offer', JSON.stringify(data.offer));
      event.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Nie udało się zapisać dyspozycji.');
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section admin-note">
      <p className="eyebrow">VELOX • DYSPOZYTOR TRANSPORTU</p>
      <h2>Zlecenie organizacji transportu door-to-door</h2>
      <p>Formularz tworzy sprawę PPL i przekazuje parametry do dalszej wyceny, doboru przewoźnika i potwierdzenia warunków. Samo wysłanie formularza nie oznacza jeszcze przyjęcia przesyłki do przewozu.</p>
      <form className="premium-form" onSubmit={submit}>
        <div className="form-grid">
          <label>Firma<input name="company" placeholder="Nazwa firmy" /></label>
          <label>Osoba kontaktowa<input name="contact" required placeholder="Imię i nazwisko" /></label>
          <label>E-mail<input name="email" type="email" required placeholder="kontakt@firma.pl" /></label>
          <label>Telefon<input name="phone" type="tel" placeholder="+48 ..." /></label>
          <label>Adres odbioru<input name="pickupAddress" required placeholder="Ulica, kod, miasto, kraj" /></label>
          <label>Adres dostawy<input name="deliveryAddress" required placeholder="Ulica, kod, miasto, kraj" /></label>
          <label>Rynek / trasa<input name="routeMarket" placeholder="Polska / UE / międzynarodowo" /></label>
          <label>Liczba paczek / palet<input name="packages" placeholder="np. 2 paczki" /></label>
          <label>Rodzaj przesyłki<input name="parcelType" required placeholder="paczka / paleta / dokumenty / inne" /></label>
          <label>Waga<input name="weight" placeholder="np. 18 kg" /></label>
          <label>Wymiary<input name="dimensions" placeholder="np. 60 × 40 × 35 cm" /></label>
          <label>Preferowany termin odbioru<input name="pickupDate" type="date" /></label>
          <label>Poziom usługi<select name="serviceLevel" defaultValue="STANDARD"><option value="STANDARD">Standard</option><option value="EXPRESS">Express</option><option value="DEDICATED">Transport dedykowany</option><option value="CUSTOM">Indywidualny</option></select></label>
          <label>Budżet orientacyjny<input name="budget" placeholder="opcjonalnie" /></label>
        </div>
        <label style={{display:'block',marginTop:12}}><input name="insuranceRequested" type="checkbox" /> Chcę wycenę wariantu z ubezpieczeniem przesyłki</label>
        <label>Uwagi operacyjne<textarea name="notes" placeholder="Towar delikatny, godziny odbioru, wymagania załadunkowe, kontakt na miejscu..." /></label>
        <p><small>Nie zgłaszaj towarów zakazanych, niebezpiecznych ani regulowanych bez wcześniejszego potwierdzenia możliwości i warunków przewozu. Przewoźnik, cena, odpowiedzialność, ubezpieczenie i termin są potwierdzane przed wykonaniem usługi.</small></p>
        <button type="submit" disabled={sending}>{sending ? 'ZAPISYWANIE DYSPOZYCJI...' : 'UTWÓRZ DYSPOZYCJĘ PPL'}</button>
      </form>
      {result ? <div className="form-status" role="status"><strong>Dyspozycja została przyjęta do obsługi.</strong><br/>Numer sprawy: <b>{result.number}</b><br/>Status: {result.status}.<div className="cta-row" style={{marginTop:14}}><Link href="/dashboard"><button type="button">SPRAWDŹ SPRAWĘ</button></Link></div></div> : null}
      {error ? <p className="form-status" role="alert">{error}</p> : null}
    </section>
  );
}
