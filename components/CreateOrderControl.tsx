'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateOrderControl({ offerId, offerStatus, orderNumber }: { offerId: number; offerStatus: string; orderNumber?: string | null }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  if (orderNumber) {
    return <p className="form-status"><strong>Zamówienie:</strong> {orderNumber}</p>;
  }

  const allowed = ['ACCEPTED', 'IN_PROGRESS', 'COMPLETED'].includes(offerStatus);
  if (!allowed) return <small>Zamówienie będzie można utworzyć po zaakceptowaniu oferty.</small>;

  async function createOrder() {
    setSaving(true);
    setError('');
    const response = await fetch('/api/owner/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ offerId }),
    });
    const result = await response.json().catch(() => ({}));
    setSaving(false);
    if (!response.ok) {
      setError(result.error || 'Nie udało się utworzyć zamówienia.');
      return;
    }
    router.refresh();
  }

  return (
    <div>
      <button type="button" onClick={createOrder} disabled={saving}>{saving ? 'Tworzenie…' : 'Utwórz zamówienie B2B'}</button>
      {error ? <p className="form-status">{error}</p> : null}
    </div>
  );
}
