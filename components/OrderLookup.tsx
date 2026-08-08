'use client';

import { FormEvent, useState } from 'react';

type OrderResult = {
  number: string;
  product: string;
  quantity: string | null;
  amount: string | null;
  status: string;
  shippingMethod: string | null;
  carrier: string | null;
  trackingNumber: string | null;
  trackingUrl: string | null;
  estimatedDelivery: string | null;
  confirmedAt: string | null;
  shippedAt: string | null;
  deliveredAt: string | null;
  orderConfirmation: string | null;
  commercialOffer: string | null;
  fulfillmentDocument: string | null;
  createdAt: string;
  updatedAt: string;
  offer: { number: string };
};

export default function OrderLookup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [order, setOrder] = useState<OrderResult | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');
    setOrder(null);

    const form = new FormData(event.currentTarget);
    const reference = String(form.get('reference') || '').trim();
    const email = String(form.get('email') || '').trim();

    try {
      const response = await fetch(`/api/orders/lookup?reference=${encodeURIComponent(reference)}&email=${encodeURIComponent(email)}`);
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.error || 'Nie udało się sprawdzić zamówienia.');
      setOrder(data.order);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Nie udało się sprawdzić zamówienia.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section admin-note">
      <p className="eyebrow">Status zamówienia</p>
      <h2>Sprawdź realizację B2B</h2>
      <p>Wpisz numer sprawy PPL lub numer zamówienia ORD oraz ten sam adres e-mail, który został podany w zapytaniu.</p>
      <form className="premium-form" onSubmit={submit}>
        <div className="form-grid">
          <label>Numer sprawy / zamówienia<input name="reference" placeholder="PPL-... lub ORD-..." required /></label>
          <label>Adres e-mail<input name="email" type="email" placeholder="kontakt@firma.pl" required /></label>
        </div>
        <button type="submit" disabled={loading}>{loading ? 'SPRAWDZAM...' : 'SPRAWDŹ STATUS'}</button>
      </form>
      {error ? <p className="form-status">{error}</p> : null}
      {order ? (
        <article className="card" style={{ marginTop: 20 }}>
          <p className="eyebrow">Zamówienie {order.status}</p>
          <h3>{order.number}</h3>
          <p><strong>Powiązana sprawa:</strong> {order.offer.number}</p>
          <p><strong>Produkt / usługa:</strong> {order.product}</p>
          <p><strong>Ilość:</strong> {order.quantity || '—'}</p>
          <p><strong>Wartość:</strong> {order.amount || 'Wycena / kwota potwierdzana indywidualnie'}</p>
          {order.shippingMethod ? <p><strong>Sposób dostawy:</strong> {order.shippingMethod}</p> : null}
          {order.carrier ? <p><strong>Przewoźnik:</strong> {order.carrier}</p> : null}
          {order.trackingNumber ? <p><strong>Numer przesyłki:</strong> {order.trackingNumber}</p> : null}
          {order.trackingUrl ? <p><a href={order.trackingUrl} target="_blank" rel="noreferrer">Śledź przesyłkę ↗</a></p> : null}
          {order.estimatedDelivery ? <p><strong>Planowany termin dostawy:</strong> {new Date(order.estimatedDelivery).toLocaleString('pl-PL')}</p> : null}
          {order.orderConfirmation ? <p><strong>Potwierdzenie zamówienia:</strong> {order.orderConfirmation}</p> : null}
          {order.commercialOffer ? <p><strong>Oferta / wycena:</strong> {order.commercialOffer}</p> : null}
          {order.fulfillmentDocument ? <p><strong>Dokument realizacji:</strong> {order.fulfillmentDocument}</p> : null}
          {order.confirmedAt ? <p><strong>Potwierdzono:</strong> {new Date(order.confirmedAt).toLocaleString('pl-PL')}</p> : null}
          {order.shippedAt ? <p><strong>Wysłano:</strong> {new Date(order.shippedAt).toLocaleString('pl-PL')}</p> : null}
          {order.deliveredAt ? <p><strong>Dostarczono:</strong> {new Date(order.deliveredAt).toLocaleString('pl-PL')}</p> : null}
          <p><strong>Utworzono:</strong> {new Date(order.createdAt).toLocaleString('pl-PL')}</p>
          <p><strong>Ostatnia aktualizacja:</strong> {new Date(order.updatedAt).toLocaleString('pl-PL')}</p>
        </article>
      ) : null}
    </section>
  );
}
