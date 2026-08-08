'use client';

import { FormEvent, useState } from 'react';

type Props = {
  order: {
    id: number;
    shippingMethod: string | null;
    shippingAddress: string | null;
    carrier: string | null;
    trackingNumber: string | null;
    trackingUrl: string | null;
    estimatedDelivery: string | null;
    orderConfirmation: string | null;
    commercialOffer: string | null;
    fulfillmentDocument: string | null;
    notes: string | null;
  };
};

export default function OrderFulfillmentControl({ order }: Props) {
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage('');
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch('/api/owner/orders', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId: order.id, ...payload }),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || 'Nie udało się zapisać danych.');
      setMessage('Dane realizacji zapisane.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Nie udało się zapisać danych.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={submit} className="premium-form" style={{ marginTop: 18 }}>
      <p className="eyebrow">Realizacja i dokumenty</p>
      <div className="form-grid">
        <label>Sposób dostawy<input name="shippingMethod" defaultValue={order.shippingMethod || ''} placeholder="Kurier / fracht / odbiór" /></label>
        <label>Przewoźnik<input name="carrier" defaultValue={order.carrier || ''} placeholder="DHL / DPD / UPS / inny" /></label>
        <label>Numer przesyłki<input name="trackingNumber" defaultValue={order.trackingNumber || ''} placeholder="Numer trackingowy" /></label>
        <label>Link śledzenia<input name="trackingUrl" defaultValue={order.trackingUrl || ''} placeholder="https://..." /></label>
        <label>Planowany termin dostawy<input name="estimatedDelivery" type="datetime-local" defaultValue={order.estimatedDelivery ? order.estimatedDelivery.slice(0, 16) : ''} /></label>
        <label>Potwierdzenie zamówienia<input name="orderConfirmation" defaultValue={order.orderConfirmation || ''} placeholder="np. PZ/2026/001" /></label>
        <label>Oferta / wycena<input name="commercialOffer" defaultValue={order.commercialOffer || ''} placeholder="np. OF/2026/001" /></label>
        <label>Dokument realizacji<input name="fulfillmentDocument" defaultValue={order.fulfillmentDocument || ''} placeholder="np. WZ/2026/001" /></label>
      </div>
      <label>Adres dostawy<textarea name="shippingAddress" defaultValue={order.shippingAddress || ''} placeholder="Pełny adres dostawy" /></label>
      <label>Uwagi operacyjne<textarea name="notes" defaultValue={order.notes || ''} placeholder="Ustalenia dotyczące realizacji, dokumentów i dostawy" /></label>
      <button type="submit" disabled={saving}>{saving ? 'Zapisywanie…' : 'Zapisz dane realizacji'}</button>
      {message ? <p className="form-status">{message}</p> : null}
    </form>
  );
}
