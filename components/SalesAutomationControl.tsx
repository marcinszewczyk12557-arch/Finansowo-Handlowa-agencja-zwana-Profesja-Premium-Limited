'use client';

import { useState } from 'react';

export default function SalesAutomationControl({
  offerId,
  financingRequested = false,
  financingAmount = '',
  financingStatus = 'NOT_REQUESTED',
}: {
  offerId: number;
  financingRequested?: boolean;
  financingAmount?: string | null;
  financingStatus?: string;
}) {
  const [requested, setRequested] = useState(financingRequested);
  const [amount, setAmount] = useState(financingAmount || '');
  const [status, setStatus] = useState(financingStatus);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');

  async function run(payload: Record<string, unknown>) {
    setBusy(true);
    setMessage('');
    try {
      const response = await fetch('/api/admin/automation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ offerId, ...payload }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Błąd automatyzacji');
      if (data.automation?.financingStatus) setStatus(data.automation.financingStatus);
      setMessage('Automatyzacja zaktualizowana. Odśwież widok, aby zobaczyć aktualny etap.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Nie udało się uruchomić automatyzacji.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="admin-note" style={{ marginTop: 16 }}>
      <strong>Automatyzacja Finansowo‑Sprzedażowa</strong>
      <p><small>Poufność STRICT: eksport danych poza proces jest domyślnie zablokowany.</small></p>
      <label style={{ display: 'block', marginBottom: 8 }}>
        <input type="checkbox" checked={requested} onChange={(event) => setRequested(event.target.checked)} />{' '}
        Klient prosi o organizację finansowania
      </label>
      {requested ? (
        <input
          aria-label="Kwota finansowania"
          placeholder="Kwota / zakres finansowania"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          style={{ width: '100%', marginBottom: 8 }}
        />
      ) : null}
      <button disabled={busy} onClick={() => run({ financingRequested: requested, financingAmount: amount })}>
        {busy ? 'Przetwarzanie…' : 'Uruchom / przelicz proces'}
      </button>
      {requested && status === 'PENDING_PARTNER' ? (
        <div style={{ marginTop: 8, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button disabled={busy} onClick={() => run({ partnerDecision: 'APPROVED_BY_PARTNER' })}>Decyzja partnera: pozytywna</button>
          <button disabled={busy} onClick={() => run({ partnerDecision: 'DECLINED_BY_PARTNER' })}>Decyzja partnera: odmowa</button>
        </div>
      ) : null}
      <p><small>Status finansowania: {status}</small></p>
      {message ? <p><small>{message}</small></p> : null}
    </div>
  );
}
