'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';

type SubmissionResult = {
  number: string;
  product: string;
  status: string;
  createdAt: string;
};

type CatalogContext = {
  category: string;
  group: string;
  path: string;
  source: string;
};

export default function OfferForm() {
  const [product, setProduct] = useState('');
  const [catalogContext, setCatalogContext] = useState<CatalogContext>({ category: '', group: '', path: '', source: '' });
  const [financing, setFinancing] = useState(false);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<SubmissionResult | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setProduct(params.get('product') || '');
    setCatalogContext({
      category: params.get('category') || '',
      group: params.get('group') || '',
      path: params.get('path') || '',
      source: params.get('source') || '',
    });
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError('');
    setResult(null);

    const form = new FormData(event.currentTarget);
    const payload = {
      ...Object.fromEntries(form.entries()),
      financingRequested: form.get('financingRequested') === 'on',
    };

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
      setFinancing(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Nie udało się wysłać zapytania.');
    } finally {
      setSending(false);
    }
  }

  const hasCatalogContext = Boolean(catalogContext.category || catalogContext.group || catalogContext.path);

  return (
    <form onSubmit={submit} className="premium-form">
      <p className="eyebrow">Kontakt handlowy</p>
      <h2>Zapytanie ofertowe B2B</h2>
      <p>Przekaż podstawowe parametry. Zapytanie zostanie zapisane w systemie PROFESJA, otrzyma indywidualny numer sprawy i zostanie włączone do Automatyzacji Finansowo‑Sprzedażowej.</p>

      {hasCatalogContext ? (
        <section className="admin-note" style={{ marginBottom: 18 }}>
          <h3>Wybrana pozycja katalogowa</h3>
          {catalogContext.category ? <p><strong>Dział:</strong> {catalogContext.category}</p> : null}
          {catalogContext.group ? <p><strong>Grupa:</strong> {catalogContext.group}</p> : null}
          {catalogContext.path ? <p><strong>Ścieżka produktu:</strong> {catalogContext.path}</p> : null}
          <p><small>Ta ścieżka identyfikuje miejsce produktu w drzewie sourcingowym i zostanie dołączona do sprawy handlowej.</small></p>
        </section>
      ) : null}

      <input type="hidden" name="catalogCategory" value={catalogContext.category} />
      <input type="hidden" name="catalogGroup" value={catalogContext.group} />
      <input type="hidden" name="catalogPath" value={catalogContext.path} />
      <input type="hidden" name="catalogSource" value={catalogContext.source} />

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

      <label style={{ display: 'block', marginTop: 12 }}>
        <input name="financingRequested" type="checkbox" checked={financing} onChange={(event) => setFinancing(event.target.checked)} />{' '}
        Chcę, aby zapytanie obejmowało również organizację finansowania B2B
      </label>
      {financing ? (
        <label>Orientacyjna kwota finansowania<input name="financingAmount" placeholder="np. 50 000 PLN" /></label>
      ) : null}
      <p><small>Finansowanie jest organizowane indywidualnie. Decyzję podejmuje uprawniona instytucja finansująca; serwis nie gwarantuje przyznania finansowania ani finansowania bez wkładu własnego.</small></p>

      <label>Dodatkowe wymagania<textarea name="details" placeholder="Specyfikacja, termin, wariant, wymagane dokumenty, sposób dostawy..." /></label>
      <p><small>Nie wpisuj w polu opisowym danych o konkurencji, poufnych informacji z miejsca pracy, tajemnic handlowych ani danych osobowych, które nie są niezbędne do obsługi zapytania.</small></p>

      <section className="admin-note" style={{ marginTop: 20 }}>
        <h3>Procedura zarządczo-wykonawcza</h3>
        <p>Po utworzeniu sprawy system tworzy pakiet formalności powiązany z numerem `PPL-...`. Dane wynikające z negocjacji — m.in. produkt, ilość, wartość, finansowanie, sposób i adres dostawy oraz termin — mogą być uzupełniane i aktualizowane automatycznie wraz z przebiegiem transakcji.</p>
        <p>Automatyczne uzupełnienie danych nie oznacza zaakceptowania oświadczeń ani podpisania dokumentów. Zgody i podpisy pozostają oznaczone jako oczekujące do chwili odrębnego, świadomego działania właściwej osoby.</p>
      </section>

      <section className="admin-note" style={{ marginTop: 20 }}>
        <h3>Przed wysłaniem i dalszą finalizacją</h3>
        <p>Obsługa jest prowadzona online przez Metropolis Corp. Marcin Szewczyk w ramach projektu PROFESJA PREMIUM LIMITED™. Korespondencja i dokumenty elektroniczne tworzą historię ustaleń sprawy, jednak wiążące warunki transakcji wynikają z zaakceptowanej oferty, potwierdzenia zamówienia lub umowy.</p>
        <p>Sposób i koszt dostawy, w tym ewentualna usługa door-to-door, są ustalane dla konkretnej transakcji. Jeżeli oferta przewiduje pokrycie kosztu transportu przez klienta, warunek ten zostanie wskazany przed zawarciem transakcji.</p>
        <p>Zapoznaj się z <Link href="/company">danymi przedsiębiorcy i zasadami procesu</Link>, <Link href="/terms">Regulaminem</Link> oraz <Link href="/privacy">Polityką prywatności</Link>.</p>
      </section>

      <label style={{ display: 'block', marginTop: 14 }}>
        <input name="transactionInformationAcknowledged" type="checkbox" required />{' '}
        Potwierdzam, że zapoznałem(-am) się z informacjami o przedsiębiorcy, modelu obsługi online, zasadach dokumentowania ustaleń oraz sposobie ustalania dostawy i jej kosztów.
      </label>
      <label style={{ display: 'block', marginTop: 10 }}>
        <input name="privacyAcknowledged" type="checkbox" required />{' '}
        Potwierdzam zapoznanie się z Regulaminem i Polityką prywatności oraz rozumiem, że wysłanie zapytania nie jest jeszcze zawarciem umowy ani gwarancją finansowania.
      </label>

      <button type="submit" disabled={sending}>{sending ? 'ZAPISYWANIE ZAPYTANIA...' : 'WYŚLIJ ZAPYTANIE B2B'}</button>

      {result ? (
        <div className="form-status" role="status">
          <strong>Zapytanie zostało przyjęte.</strong><br />
          Numer sprawy: <b>{result.number}</b><br />
          Status: {result.status}. Pakiet formalności został przypisany do sprawy i będzie uzupełniany danymi transakcyjnymi; wymagane zgody i podpisy pozostają osobnym etapem.
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
