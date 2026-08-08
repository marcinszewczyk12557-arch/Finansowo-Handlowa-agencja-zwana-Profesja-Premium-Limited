'use client';

import { FormEvent, useState } from 'react';

const STATUSES = [
  ['RECEIVED', 'Przyjęte'],
  ['CARRIER_SELECTED', 'Przewoźnik wybrany'],
  ['PICKUP_SCHEDULED', 'Odbiór zaplanowany'],
  ['PICKED_UP', 'Odebrano'],
  ['IN_TRANSIT', 'W transporcie'],
  ['DELIVERED', 'Doręczono'],
  ['CANCELLED', 'Anulowano'],
] as const;

type Props = {
  order: {
    id: number;
    dispatcherStatus: string;
    pickupAddress: string | null;
    shippingAddress: string | null;
    shippingMethod: string | null;
    carrier: string | null;
    trackingNumber: string | null;
    trackingUrl: string | null;
    pickupAt: string | null;
    estimatedDelivery: string | null;
    transportDocument: string | null;
    notes: string | null;
  };
};

export default function VeloxDispatcherControl({ order }: Props) {
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
      if (!response.ok || !result.ok) throw new Error(result.error || 'Nie udało się zapisać dyspozycji.');
      setMessage('Dyspozycja VELOX została zapisana.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Nie udało się zapisać dyspozycji.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <form className="premium-form" onSubmit={submit} style={{ marginTop: 18 }}>
      <p className="eyebrow">VELOX • DYSPOZYTOR</p>
      <div className="form-grid">
        <label>Status dyspozytorski
          <select name="dispatcherStatus" defaultValue={order.dispatcherStatus}>
            {STATUSES.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </label>
        <label>Przewoźnik<input name="carrier" defaultValue={order.carrier || ''} placeholder="Nazwa przewoźnika" /></label>
        <label>Sposób transportu<input name="shippingMethod" defaultValue={order.shippingMethod || ''} placeholder="Kurier / drogowy / paletowy" /></label>
        <label>Numer trackingowy<input name="trackingNumber" defaultValue={order.trackingNumber || ''} placeholder="Numer przesyłki" /></label>
        <label>Link śledzenia<input name="trackingUrl" defaultValue={order.trackingUrl || ''} placeholder="https://..." /></label>
        <label>Termin odbioru<input name="pickupAt" type="datetime-local" defaultValue={order.pickupAt ? order.pickupAt.slice(0, 16) : ''} /></label>
        <label>Planowane doręczenie<input name="estimatedDelivery" type="datetime-local" defaultValue={order.estimatedDelivery ? order.estimatedDelivery.slice(0, 16) : ''} /></label>
        <label>Dokument transportowy<input name="transportDocument" defaultValue={order.transportDocument || ''} placeholder="CMR / list przewozowy / zlecenie" /></label>
      </div>
      <label>Adres odbioru<textarea name="pickupAddress" defaultValue={order.pickupAddress || ''} placeholder="Pełny adres odbioru przesyłki" /></label>
      <label>Adres doręczenia<textarea name="shippingAddress" defaultValue={order.shippingAddress || ''} placeholder="Pełny adres doręczenia" /></label>
      <label>Uwagi dyspozytorskie<textarea name="notes" defaultValue={order.notes || ''} placeholder="Kontakt z przewoźnikiem, okna czasowe, wymagania operacyjne..." /></label>
      <button type="submit" disabled={saving}>{saving ? 'ZAPISYWANIE...' : 'ZAPISZ DYSPOZYCJĘ'}</button>
      {message ? <p className="form-status" role="status">{message}</p> : null}
    </form>
  );
}
