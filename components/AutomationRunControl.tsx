'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AutomationRunControl() {
  const router = useRouter();
  const [running, setRunning] = useState(false);
  const [message, setMessage] = useState('');

  async function runAll() {
    setRunning(true);
    setMessage('');
    try {
      const response = await fetch('/api/admin/automation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'RUN_ALL' }),
      });
      const data = await response.json();
      if (!response.ok || !data?.result) {
        throw new Error(data?.error || 'Nie udało się uruchomić synchronizacji.');
      }
      setMessage(`Sprawdzono ${data.result.scanned} spraw; zsynchronizowano ${data.result.synced}; błędy: ${data.result.failed}.`);
      router.refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Nie udało się uruchomić synchronizacji.');
    } finally {
      setRunning(false);
    }
  }

  return (
    <div className="admin-note">
      <h2>Kontrola automatyzacji</h2>
      <p>Kluczowe zmiany synchronizują się od razu. Ten przycisk wykonuje pełne sprawdzenie wszystkich ostatnich spraw i naprawia ewentualne rozbieżności etapów.</p>
      <button type="button" onClick={runAll} disabled={running}>
        {running ? 'Synchronizacja…' : 'Uruchom pełną synchronizację'}
      </button>
      {message ? <p><small>{message}</small></p> : null}
    </div>
  );
}
