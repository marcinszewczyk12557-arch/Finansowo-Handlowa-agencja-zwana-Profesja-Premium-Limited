'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const statuses = [
  ['NEW', 'Nowe'],
  ['PREPARING', 'W przygotowaniu'],
  ['OFFER_SENT', 'Oferta wysłana'],
  ['ACCEPTED', 'Zaakceptowane'],
  ['IN_PROGRESS', 'W realizacji'],
  ['COMPLETED', 'Zakończone'],
  ['CANCELLED', 'Anulowane'],
] as const;

export default function OfferStatusControl({ offerId, currentStatus }: { offerId: number; currentStatus: string }) {
  const router = useRouter();
  const [status, setStatus] = useState(currentStatus);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function change(nextStatus: string) {
    setStatus(nextStatus);
    setSaving(true);
    setError('');

    const response = await fetch(`/api/owner/offers/${offerId}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: nextStatus }),
    });

    const result = await response.json().catch(() => ({}));
    setSaving(false);

    if (!response.ok) {
      setStatus(currentStatus);
      setError(result.error || 'Nie udało się zmienić statusu.');
      return;
    }

    router.refresh();
  }

  return (
    <div>
      <label>
        <strong>Status procesu</strong>
        <select value={status} onChange={(event) => change(event.target.value)} disabled={saving}>
          {statuses.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
        </select>
      </label>
      {saving ? <small>Zapisywanie…</small> : null}
      {error ? <small className="form-status">{error}</small> : null}
    </div>
  );
}
