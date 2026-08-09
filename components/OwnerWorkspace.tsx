'use client';

import { useEffect, useMemo, useState } from 'react';

type OwnerRecord = {
  id: string;
  catalogPath: string;
  publicName: string;
  supplierName: string;
  supplierType: 'MANUFACTURER' | 'WHOLESALER' | 'SUPPLIER';
  platform: string;
  supplierUrl: string;
  sku: string;
  basePrice: string;
  currency: string;
  warrantyMonths: string;
  notes: string;
  status: 'DRAFT' | 'VERIFIED' | 'READY';
  updatedAt: string;
};

const empty = (): OwnerRecord => ({
  id: '', catalogPath: '', publicName: '', supplierName: '', supplierType: 'SUPPLIER', platform: 'ALIBABA', supplierUrl: '', sku: '', basePrice: '', currency: 'USD', warrantyMonths: '12', notes: '', status: 'DRAFT', updatedAt: '',
});

function normalizeRecord(raw: any): OwnerRecord {
  return {
    id: String(raw.id || ''),
    catalogPath: String(raw.catalogPath || ''),
    publicName: String(raw.publicName || ''),
    supplierName: String(raw.supplierName || ''),
    supplierType: ['MANUFACTURER','WHOLESALER','SUPPLIER'].includes(raw.supplierType) ? raw.supplierType : 'SUPPLIER',
    platform: String(raw.platform || 'ALIBABA'),
    supplierUrl: String(raw.supplierUrl || ''),
    sku: String(raw.sku || ''),
    basePrice: String(raw.basePrice || ''),
    currency: String(raw.currency || 'USD'),
    warrantyMonths: String(raw.warrantyMonths ?? '12'),
    notes: String(raw.notes || ''),
    status: ['DRAFT','VERIFIED','READY'].includes(raw.status) ? raw.status : 'DRAFT',
    updatedAt: raw.updatedAt ? String(raw.updatedAt) : '',
  };
}

export default function OwnerWorkspace() {
  const [records, setRecords] = useState<OwnerRecord[]>([]);
  const [draft, setDraft] = useState<OwnerRecord>(empty());
  const [query, setQuery] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');

  async function reload() {
    setBusy(true); setMessage('');
    try {
      const response = await fetch('/api/owner/sources', { cache: 'no-store' });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error('Nie udało się pobrać prywatnych źródeł.');
      setRecords((data.records || []).map(normalizeRecord));
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Błąd odczytu prywatnej bazy.');
    } finally { setBusy(false); }
  }

  useEffect(() => { void reload(); }, []);

  async function save(e: React.FormEvent) {
    e.preventDefault(); setBusy(true); setMessage('');
    try {
      const response = await fetch('/api/owner/sources', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(draft) });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.error || 'Nie udało się zapisać rekordu.');
      setDraft(empty());
      await reload();
      setMessage('Prywatne źródło zapisane w trwałej bazie OWNER.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Błąd zapisu.');
      setBusy(false);
    }
  }

  function edit(item: OwnerRecord) { setDraft(item); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  async function remove(id: string) {
    if (!confirm('Usunąć prywatny rekord?')) return;
    setBusy(true); setMessage('');
    try {
      const response = await fetch(`/api/owner/sources?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error('Nie udało się usunąć rekordu.');
      await reload();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Błąd usuwania.');
      setBusy(false);
    }
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(records, null, 2)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `profesja-owner-sources-${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(a.href);
  }

  function importJson(file?: File) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        if (!Array.isArray(parsed)) throw new Error('Nieprawidłowy plik.');
        setBusy(true); setMessage('Importuję rekordy...');
        for (const raw of parsed) {
          const item = normalizeRecord(raw);
          const response = await fetch('/api/owner/sources', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(item) });
          if (!response.ok) throw new Error('Import został przerwany przez błąd rekordu.');
        }
        await reload();
        setMessage('Import prywatnych źródeł zakończony.');
      } catch (error) {
        setMessage(error instanceof Error ? error.message : 'Nie udało się odczytać pliku JSON.');
        setBusy(false);
      }
    };
    reader.readAsText(file);
  }

  const filtered = useMemo(() => { const q = query.toLowerCase(); return records.filter(r => !q || `${r.catalogPath} ${r.publicName} ${r.supplierName} ${r.sku} ${r.status}`.toLowerCase().includes(q)); }, [records, query]);
  const stats = useMemo(() => ({ all: records.length, verified: records.filter(r=>r.status==='VERIFIED').length, ready: records.filter(r=>r.status==='READY').length }), [records]);

  return <div className="owner-workspace">
    <section className="admin-stats">
      <article className="card"><strong>{stats.all}</strong><span>rekordów prywatnych</span></article>
      <article className="card"><strong>{stats.verified}</strong><span>zweryfikowanych</span></article>
      <article className="card"><strong>{stats.ready}</strong><span>gotowych do publikacji</span></article>
    </section>

    <section className="card" style={{ marginTop: 20 }}>
      <h2>Powiąż ofertę katalogową ze źródłem</h2>
      <p>Ta sekcja jest dostępna wyłącznie po zalogowaniu OWNER. Linki Alibaba.com oraz dane producentów i hurtowników są zapisywane po stronie serwera i nigdy nie są częścią publicznego katalogu.</p>
      {message && <p role="status"><b>{message}</b></p>}
      <form onSubmit={save} style={{ display:'grid', gridTemplateColumns:'repeat(2,minmax(0,1fr))', gap:12 }}>
        <label style={{ gridColumn:'1/-1' }}>Ścieżka drzewa<input value={draft.catalogPath} onChange={e=>setDraft({...draft,catalogPath:e.target.value})} placeholder="np. Elektronika / Smartfony / Gamingowe / Flagowe" required /></label>
        <label>Nazwa publiczna<input value={draft.publicName} onChange={e=>setDraft({...draft,publicName:e.target.value})} required /></label>
        <label>SKU / model źródłowy<input value={draft.sku} onChange={e=>setDraft({...draft,sku:e.target.value})} /></label>
        <label>Nazwa producenta / hurtownika<input value={draft.supplierName} onChange={e=>setDraft({...draft,supplierName:e.target.value})} /></label>
        <label>Typ źródła<select value={draft.supplierType} onChange={e=>setDraft({...draft,supplierType:e.target.value as OwnerRecord['supplierType']})}><option value="MANUFACTURER">Producent</option><option value="WHOLESALER">Hurtownik</option><option value="SUPPLIER">Dostawca</option></select></label>
        <label>Platforma<input value={draft.platform} onChange={e=>setDraft({...draft,platform:e.target.value})} placeholder="ALIBABA" /></label>
        <label style={{ gridColumn:'1/-1' }}>Prywatny link źródłowy<input type="url" value={draft.supplierUrl} onChange={e=>setDraft({...draft,supplierUrl:e.target.value})} placeholder="https://www.alibaba.com/... lub https://producent..." required /></label>
        <label>Cena bazowa<input value={draft.basePrice} onChange={e=>setDraft({...draft,basePrice:e.target.value})} inputMode="decimal" /></label>
        <label>Waluta<select value={draft.currency} onChange={e=>setDraft({...draft,currency:e.target.value})}><option>USD</option><option>EUR</option><option>PLN</option><option>CNY</option></select></label>
        <label>Gwarancja (mies.)<input type="number" min="0" max="120" value={draft.warrantyMonths} onChange={e=>setDraft({...draft,warrantyMonths:e.target.value})} /></label>
        <label>Status<select value={draft.status} onChange={e=>setDraft({...draft,status:e.target.value as OwnerRecord['status']})}><option value="DRAFT">DRAFT — robocze</option><option value="VERIFIED">VERIFIED — zweryfikowane</option><option value="READY">READY — gotowe</option></select></label>
        <label style={{ gridColumn:'1/-1' }}>Notatki operacyjne<textarea value={draft.notes} onChange={e=>setDraft({...draft,notes:e.target.value})} rows={4} placeholder="MOQ, transport, certyfikacja, kontakt, warianty, warunki Trade Assurance, uwagi..." /></label>
        <div style={{ gridColumn:'1/-1', display:'flex', gap:10, flexWrap:'wrap' }}><button type="submit" disabled={busy}>{busy ? 'Zapisuję…' : 'Zapisz prywatny rekord'}</button><button type="button" className="cta-secondary" onClick={()=>setDraft(empty())}>Wyczyść formularz</button></div>
      </form>
    </section>

    <section className="card" style={{ marginTop:20 }}>
      <div style={{ display:'flex', justifyContent:'space-between', gap:12, flexWrap:'wrap' }}><div><h2>Prywatna baza źródeł</h2><p>Trwała baza OWNER: drzewo katalogowe → produkt → producent/hurtownik → źródło → status weryfikacji.</p></div><div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}><button onClick={()=>void reload()} disabled={busy}>Odśwież</button><button onClick={exportJson}>Eksport kopii</button><label className="taxonomy-offer-link" style={{cursor:'pointer'}}>Import JSON<input type="file" accept="application/json" hidden onChange={e=>importJson(e.target.files?.[0])}/></label></div></div>
      <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Szukaj ścieżki, produktu, dostawcy, SKU..." />
      <div style={{ display:'grid', gap:10, marginTop:14 }}>{filtered.map(item=><article key={item.id} className="card"><strong>{item.publicName}</strong><p>{item.catalogPath}</p><p><b>Źródło:</b> {item.supplierName || '—'} • <b>Typ:</b> {item.supplierType} • <b>Platforma:</b> {item.platform}</p><p><b>SKU:</b> {item.sku || '—'} • <b>Cena bazowa:</b> {item.basePrice || '—'} {item.currency} • <b>Gwarancja:</b> {item.warrantyMonths} mies. • <b>Status:</b> {item.status}</p><p><b>Adres prywatny:</b> <a href={item.supplierUrl} target="_blank" rel="noreferrer">Otwórz źródło</a></p>{item.notes && <p><b>Notatki:</b> {item.notes}</p>}<div style={{display:'flex',gap:8}}><button onClick={()=>edit(item)}>Edytuj</button><button className="cta-secondary" onClick={()=>void remove(item.id)}>Usuń</button></div></article>)}</div>
    </section>
  </div>;
}
