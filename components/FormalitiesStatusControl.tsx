'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const options = [
  ['clientDeclarationStatus', 'Oświadczenie klienta'],
  ['insuranceConsentStatus', 'Ubezpieczenie / warunek ubezpieczeniowy'],
  ['shippingConsentStatus', 'Warunki wysyłki'],
  ['businessUseConsentStatus', 'Przeznaczenie biznesowe'],
  ['interestConsentStatus', 'Warunki oprocentowania'],
  ['intermediationConsentStatus', 'Pośrednictwo'],
  ['monthlySettlementStatus', 'Rozliczenia miesięczne'],
  ['earlyTerminationStatus', 'Wcześniejsze zakończenie'],
  ['finalSignatureStatus', 'Podpis końcowy'],
] as const;

export default function FormalitiesStatusControl({ offerId }: { offerId: number }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError('');
    setSuccess('');

    const form = new FormData(event.currentTarget);
    const payload = {
      field: String(form.get('field') || ''),
      status: String(form.get('status') || ''),
      evidenceReference: String(form.get('evidenceReference') || ''),
    };

    try {
      const response = await fetch(`/api/owner/offers/${offerId}/formalities`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.error || 'Nie udało się zapisać statusu.');
      setSuccess('Status formalności został zapisany i dodany do audytu.');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Nie udało się zapisać statusu.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <details style={{ marginTop: 12 }}>
      <summary>Zarejestruj zweryfikowaną zgodę / podpis</summary>
      <form onSubmit={submit} className="premium-form" style={{ marginTop: 12 }}>
        <label>Formalność
          <select name="field" required>
            {options.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </label>
        <label>Status
          <select name="status" required defaultValue="ACCEPTED">
            <option value="ACCEPTED">Zaakceptowano — zweryfikowano</option>
            <option value="REJECTED">Odrzucono</option>
            <option value="NOT_APPLICABLE">Nie dotyczy</option>
            <option value="PENDING">Przywróć: oczekuje</option>
          </select>
        </label>
        <label>Odniesienie do podstawy weryfikacji
          <input name="evidenceReference" placeholder="np. podpisany PDF, wiadomość klienta, data potwierdzenia" maxLength={200} />
        </label>
        <p><small>Nie wklejaj tu skanu podpisu, danych medycznych ani innych wrażliwych treści. To pole służy wyłącznie jako krótkie odniesienie audytowe.</small></p>
        <button type="submit" disabled={saving}>{saving ? 'ZAPISYWANIE...' : 'ZAPISZ ZWERYFIKOWANY STATUS'}</button>
        {error ? <p className="form-status" role="alert">{error}</p> : null}
        {success ? <p className="form-status" role="status">{success}</p> : null}
      </form>
    </details>
  );
}
