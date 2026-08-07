'use client';

import { FormEvent, useState } from 'react';

export default function OfferForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Zapytanie B2B — ${String(form.get('product') || 'produkt/usługa')}`);
    const body = encodeURIComponent([
      `Firma: ${String(form.get('company') || '')}`,
      `Osoba kontaktowa: ${String(form.get('contact') || '')}`,
      `E-mail: ${String(form.get('email') || '')}`,
      `Telefon: ${String(form.get('phone') || '')}`,
      `Produkt / usługa: ${String(form.get('product') || '')}`,
      `Ilość: ${String(form.get('quantity') || '')}`,
      `Rynek docelowy: ${String(form.get('market') || '')}`,
      `Budżet orientacyjny: ${String(form.get('budget') || '')}`,
      '',
      'Wymagania:',
      String(form.get('details') || '')
    ].join('\n'));

    setSent(true);
    window.location.href = `mailto:profesja.premium@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={submit} className="premium-form">
      <p className="eyebrow">Kontakt handlowy</p>
      <h2>Zapytanie ofertowe B2B</h2>
      <p>Przekaż podstawowe parametry. Formularz przygotuje wiadomość do profesja.premium@gmail.com.</p>

      <div className="form-grid">
        <label>Nazwa firmy<input name="company" placeholder="Nazwa firmy" /></label>
        <label>Osoba kontaktowa<input name="contact" placeholder="Imię i nazwisko" required /></label>
        <label>Adres e-mail<input name="email" type="email" placeholder="kontakt@firma.pl" required /></label>
        <label>Telefon<input name="phone" type="tel" placeholder="+48 ..." /></label>
        <label>Produkt / usługa<input name="product" placeholder="Nazwa produktu lub potrzeby zakupowej" required /></label>
        <label>Ilość<input name="quantity" placeholder="np. 10 szt." /></label>
        <label>Rynek docelowy<input name="market" placeholder="Polska / UE / globalnie" /></label>
        <label>Budżet orientacyjny<input name="budget" placeholder="np. 50 000 PLN" /></label>
      </div>

      <label>Dodatkowe wymagania<textarea name="details" placeholder="Specyfikacja, termin, wariant, wymagane dokumenty, sposób dostawy..." /></label>
      <button type="submit">Przygotuj i wyślij zapytanie</button>
      {sent ? <p className="form-status">Otwarto aplikację pocztową z przygotowaną wiadomością.</p> : null}
    </form>
  );
}
