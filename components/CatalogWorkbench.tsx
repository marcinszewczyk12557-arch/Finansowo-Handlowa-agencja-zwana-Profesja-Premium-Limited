'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

type CartItem = {
  product: string;
  category?: string;
  group?: string;
  path?: string;
  source?: string;
  quantity?: string;
};

const CART_KEY = 'profesja_rfq_cart_v1';

function normalizeItem(raw: any): CartItem | null {
  const product = String(raw?.product || '').trim();
  if (!product) return null;
  return {
    product: product.slice(0, 300),
    category: String(raw?.category || '').slice(0, 200),
    group: String(raw?.group || '').slice(0, 200),
    path: String(raw?.path || '').slice(0, 1200),
    source: String(raw?.source || 'catalog-tree').slice(0, 120),
    quantity: String(raw?.quantity || '1').slice(0, 60),
  };
}

function readCart(): CartItem[] {
  try {
    const raw = JSON.parse(window.localStorage.getItem(CART_KEY) || '[]');
    if (!Array.isArray(raw)) return [];
    return raw.map(normalizeItem).filter(Boolean).slice(0, 25) as CartItem[];
  } catch {
    return [];
  }
}

function money(value: number) {
  return Number.isFinite(value) ? value.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0,00';
}

export default function CatalogWorkbench() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [manualProduct, setManualProduct] = useState('');
  const [basePrice, setBasePrice] = useState('');
  const [quantityForCalc, setQuantityForCalc] = useState('1');
  const [logistics, setLogistics] = useState('0');
  const [dutyPercent, setDutyPercent] = useState('0');
  const [vatPercent, setVatPercent] = useState('23');
  const [servicePercent, setServicePercent] = useState('0');
  const [currency, setCurrency] = useState('PLN');
  const [deliveryMode, setDeliveryMode] = useState('Door-to-door');

  function persist(next: CartItem[]) {
    setItems(next);
    window.localStorage.setItem(CART_KEY, JSON.stringify(next));
  }

  useEffect(() => {
    const refresh = () => setItems(readCart());
    refresh();
    window.addEventListener('storage', refresh);
    window.addEventListener('profesja:rfq-cart', refresh as EventListener);
    return () => {
      window.removeEventListener('storage', refresh);
      window.removeEventListener('profesja:rfq-cart', refresh as EventListener);
    };
  }, []);

  function addManual() {
    const item = normalizeItem({ product: manualProduct, quantity: '1', source: 'manual-workbench' });
    if (!item) return;
    const next = [item, ...items.filter(existing => existing.product !== item.product)].slice(0, 25);
    persist(next);
    setManualProduct('');
  }

  function updateQuantity(index: number, quantity: string) {
    persist(items.map((item, i) => i === index ? { ...item, quantity: quantity.slice(0, 60) } : item));
  }

  const comparison = items.slice(0, 3);
  const rfqHref = useMemo(() => {
    if (!items.length) return '/offers/new';
    const products = items.map((item, index) => `${index + 1}. ${item.product} — ilość: ${item.quantity || 'do ustalenia'}`).join('\n');
    const paths = items.map(item => item.path).filter(Boolean).join(' | ');
    const params = new URLSearchParams({
      product: items.length === 1 ? items[0].product : `Zapytanie zbiorcze RFQ — ${items.length} pozycji`,
      category: items[0]?.category || '',
      group: items[0]?.group || '',
      path: paths.slice(0, 1200),
      source: 'rfq-cart',
      details: `Koszyk RFQ:\n${products}\n\nPreferowana dostawa: ${deliveryMode}`,
    });
    return `/offers/new?${params.toString()}`;
  }, [items, deliveryMode]);

  const calc = useMemo(() => {
    const unit = Math.max(0, Number(String(basePrice).replace(',', '.')) || 0);
    const qty = Math.max(1, Number.parseFloat(String(quantityForCalc).replace(',', '.')) || 1);
    const logisticsValue = Math.max(0, Number(String(logistics).replace(',', '.')) || 0);
    const duty = Math.max(0, Number(String(dutyPercent).replace(',', '.')) || 0);
    const vat = Math.max(0, Number(String(vatPercent).replace(',', '.')) || 0);
    const service = Math.max(0, Number(String(servicePercent).replace(',', '.')) || 0);
    const goods = unit * qty;
    const customsBase = goods + logisticsValue;
    const dutyValue = customsBase * duty / 100;
    const vatBase = customsBase + dutyValue;
    const vatValue = vatBase * vat / 100;
    const serviceValue = (goods + logisticsValue + dutyValue + vatValue) * service / 100;
    const total = goods + logisticsValue + dutyValue + vatValue + serviceValue;
    return { goods, dutyValue, vatValue, serviceValue, total, qty };
  }, [basePrice, quantityForCalc, logistics, dutyPercent, vatPercent, servicePercent]);

  return (
    <section className="section" id="rfq-workbench" style={{ maxWidth: 1500, paddingTop: 12 }}>
      <div className="taxonomy-leaf-heading">
        <div>
          <p className="eyebrow">NARZĘDZIA ZAKUPOWE B2B</p>
          <h2>Koszyk RFQ, porównywarka, konfigurator i kalkulator ceny końcowej</h2>
          <p>Pozycje wybrane w drzewie katalogowym można zachować w koszyku, porównać, skonfigurować ilości i przekazać jako jedno zbiorcze zapytanie. Kalkulator landed cost jest narzędziem orientacyjnym — wiążąca cena wynika dopiero z zaakceptowanej oferty.</p>
        </div>
      </div>

      <div className="grid" style={{ alignItems: 'start' }}>
        <article className="card">
          <p className="eyebrow">KOSZYK RFQ</p>
          <h3>{items.length ? `${items.length} pozycji w zapytaniu` : 'Koszyk jest pusty'}</h3>
          <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
            <input value={manualProduct} onChange={event => setManualProduct(event.target.value)} placeholder="Dodaj produkt ręcznie…" aria-label="Dodaj produkt do koszyka RFQ" />
            <button type="button" onClick={addManual}>Dodaj</button>
          </div>
          <div style={{ display: 'grid', gap: 10 }}>
            {items.map((item, index) => (
              <div key={`${item.product}-${index}`} style={{ border: '1px solid #29414a', borderRadius: 10, padding: 12 }}>
                <strong>{item.product}</strong>
                {item.path ? <p style={{ margin: '5px 0', fontSize: '.72rem' }}>{item.path}</p> : null}
                <label style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 8, alignItems: 'center' }}>Ilość<input value={item.quantity || ''} onChange={event => updateQuantity(index, event.target.value)} /></label>
                <button type="button" className="cta-secondary" style={{ marginTop: 8 }} onClick={() => persist(items.filter((_, i) => i !== index))}>Usuń</button>
              </div>
            ))}
          </div>
          <label style={{ display: 'block', marginTop: 12 }}>Preferowana dostawa<select value={deliveryMode} onChange={event => setDeliveryMode(event.target.value)}><option>Door-to-door</option><option>Kurier / paczka</option><option>Transport drogowy</option><option>Transport lotniczy</option><option>Transport morski</option><option>Do ustalenia</option></select></label>
          <div className="cta-row" style={{ marginTop: 16 }}>
            <Link href={rfqHref}><button type="button" disabled={!items.length}>UTWÓRZ ZBIORCZE RFQ</button></Link>
            <button type="button" className="cta-secondary" disabled={!items.length} onClick={() => persist([])}>Wyczyść koszyk</button>
          </div>
        </article>

        <article className="card">
          <p className="eyebrow">PORÓWNYWARKA</p>
          <h3>Do 3 pierwszych pozycji koszyka</h3>
          {comparison.length ? comparison.map((item, index) => (
            <div key={`${item.product}-compare`} style={{ borderBottom: '1px solid #29414a', padding: '10px 0' }}>
              <strong>{index + 1}. {item.product}</strong>
              <p><b>Ilość:</b> {item.quantity || 'do ustalenia'}</p>
              <p><b>Dział:</b> {item.category || '—'} • <b>Grupa:</b> {item.group || '—'}</p>
              <p><b>Ścieżka:</b> {item.path || 'produkt dodany ręcznie'}</p>
            </div>
          )) : <p>Dodaj warianty z katalogu lub ręcznie, aby rozpocząć porównanie.</p>}
          <p><small>Porównanie dotyczy parametrów zapytania. Ceny, MOQ, gwarancja i dostępność są uzupełniane po weryfikacji konkretnego źródła.</small></p>
        </article>
      </div>

      <article className="card" style={{ marginTop: 18 }}>
        <p className="eyebrow">KALKULATOR CENY KOŃCOWEJ / LANDED COST</p>
        <h3>Orientacyjny koszt transakcji</h3>
        <div className="form-grid">
          <label>Cena jednostkowa<input inputMode="decimal" value={basePrice} onChange={event => setBasePrice(event.target.value)} placeholder="0,00" /></label>
          <label>Waluta<select value={currency} onChange={event => setCurrency(event.target.value)}><option>PLN</option><option>EUR</option><option>USD</option><option>CNY</option></select></label>
          <label>Ilość<input inputMode="decimal" value={quantityForCalc} onChange={event => setQuantityForCalc(event.target.value)} /></label>
          <label>Transport i ubezpieczenie<input inputMode="decimal" value={logistics} onChange={event => setLogistics(event.target.value)} /></label>
          <label>Cło (%)<input inputMode="decimal" value={dutyPercent} onChange={event => setDutyPercent(event.target.value)} /></label>
          <label>VAT (%)<input inputMode="decimal" value={vatPercent} onChange={event => setVatPercent(event.target.value)} /></label>
          <label>Obsługa / marża usługowa (%)<input inputMode="decimal" value={servicePercent} onChange={event => setServicePercent(event.target.value)} /></label>
        </div>
        <div className="catalog-meta catalog-meta-wide" style={{ marginTop: 16 }}>
          <div><strong>{money(calc.goods)} {currency}</strong><span>towar ({calc.qty} × cena)</span></div>
          <div><strong>{money(calc.dutyValue)} {currency}</strong><span>orientacyjne cło</span></div>
          <div><strong>{money(calc.vatValue)} {currency}</strong><span>orientacyjny VAT</span></div>
          <div><strong>{money(calc.total)} {currency}</strong><span>orientacyjny koszt końcowy</span></div>
        </div>
        <p><small>Wynik nie jest ofertą handlową ani poradą podatkową/celną. Stawka cła, podstawa VAT, kurs waluty, koszty przewoźnika oraz opłaty dodatkowe zależą od kodu CN/HS, kraju, warunków Incoterms i realnej transakcji.</small></p>
      </article>
    </section>
  );
}
