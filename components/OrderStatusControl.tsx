'use client';

import { useState } from 'react';

const statuses = ['CREATED', 'CONFIRMED', 'IN_PROGRESS', 'READY_TO_SHIP', 'SHIPPED', 'DELIVERED', 'COMPLETED', 'CANCELLED'];

export default function OrderStatusControl({ orderId, currentStatus }: { orderId: number; currentStatus: string }) {
  const [status, setStatus] = useState(currentStatus);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  async function updateStatus(next: string) {
    setStatus(next);
    setSaving(true);
    setMessage('');
    try {
      const response = await fetch('/api/owner/orders', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, status: next }),
      });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.error || 'Nie udało się zmienić statusu.');
      setMessage('Status zapisany.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Nie udało się zmienić statusu.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ marginTop: 16 }}>
      <label>
        <strong>Status realizacji</strong>
        <select value={status} disabled={saving} onChange={(e) => updateStatus(e.target.value)} style={{ width: '100%', marginTop: 8 }}>
          {statuses.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>
      {message ? <p className="form-status">{message}</p> : null}
    </div>
  );
}
