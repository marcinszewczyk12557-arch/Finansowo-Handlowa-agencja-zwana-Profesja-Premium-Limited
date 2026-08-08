'use client';

import { useEffect, useMemo, useState } from 'react';

type OwnerRecord = {
  id: string;
  catalogPath: string;
  publicName: string;
  supplierUrl: string;
  sku: string;
  basePrice: string;
  currency: string;
  warrantyMonths: string;
  notes: string;
  status: 'DRAFT' | 'VERIFIED' | 'READY';
  updatedAt: string;
};

const STORAGE_KEY = 'profesja_owner_private_records_v1';
const empty = (): OwnerRecord => ({
  id: crypto.randomUUID(), catalogPath: '', publicName: '', supplierUrl: '', sku: '', basePrice: '', currency: 'USD', warrantyMonths: '12', notes: '', status: 'DRAFT', updatedAt: new Date().toISOString(),
});

export default function OwnerWorkspace() {
  const [records, setRecords] = useState<OwnerRecord[]>([]);
  const [draft, setDraft] = useState<OwnerRecord>(empty());
  const [query, setQuery] = useState('');

  useEffect(() => {
    try { const saved = localStorage.getItem(STORAGE_KEY); if (saved) setRecords(JSON.parse(saved)); } catch {}
  }, []);

  function persist(next: OwnerRecord[]) {
    setRecords(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function save(e: React.FormEvent) {
    e.preventDefault();
    const item = { ...draft, updatedAt: new Date().toISOString() };
    const next = records.some(r => r.id === item.id) ? records.map(r => r.id === item.id ? item : r) : [item, ...records];
    persist(next); setDraft(empty());
  }

  function edit(item: OwnerRecord) { setDraft(item); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  function remove(id: string) { if (confirm('Usunąć prywatny rekord?')) persist(records.filter(r => r.id !== id)); }
  function exportJson() {
    const blob = new Blob([JSON.stringify(records, null, 2)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `profesja-owner-backup-${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(a.href);
  }
  function importJson(file?: File) {
    if (!file) return;
    const reader = new FileReader(); reader.onload = () => { try { const parsed = JSON.parse(String(reader.result)); if (Array.isArray(parsed)) persist(parsed); else alert('Nieprawidłowy plik.'); } catch { alert('Nie udało się odczytać pliku JSON.'); } }; reader.readAsText(file);
  }

  const filtered = useMemo(() => { const q = query.toLowerCase(); return records.filter(r => !q || `${r.catalogPath} ${r.publicName} ${r.sku} ${r.status}`.toLowerCase().includes(q)); }, [records, query]);
  const stats = useMemo(() => ({ all: records.length, verified: records.filter(r=>r.status==='VERIFIED').length, ready: records.filter(r=>r.status==='READY').length }), [records]);

  return <div className="owner-workspace">
    <section className="admin-stats">
      <article className="card"><strong>{stats.all}</strong><span>rekordów prywatnych</span></article>
      <article className="card"><strong>{stats.verified}</strong><span>zweryfikowanych</span></article>
      <article className="card"><strong>{stats.ready}</strong><span>gotowych do publikacji</span></article>
    </section>

    <section className="card" style={{ marginTop: 20 }}>
      <h2>Powiąż ofertę katalogową ze źródłem</h2>
      <p>Ta sekcja jest prywatna. Wpisuj tutaj faktyczny link źródłowy, SKU i dane robocze. Klient nie otrzymuje tych pól.</p>
      <form onSubmit={save} style={{ display:'grid', gridTemplateColumns:'repeat(2,minmax(0,1fr))', gap:12 }}>
        <label style={{ gridColumn:'1/-1' }}>Ścieżka drzewa<input value={draft.catalogPath} onChange={e=>setDraft({...draft,catalogPath:e.target.value})} placeholder="np. Smartfony Premium / Gamingowe / Flagowe" required /></label>
        <label>Nazwa publiczna<input value={draft.publicName} onChange={e=>setDraft({...draft,publicName:e.target.value})} placeholder="np. REDMAGIC 11 Pro 16/512 GB" required /></label>
        <label>SKU / model źródłowy<input value={draft.sku} onChange={e=>setDraft({...draft,sku:e.target.value})} /></label>
        <label style={{ gridColumn:'1/-1' }}>Prywatny link źródłowy<input type="url" value={draft.supplierUrl} onChange={e=>setDraft({...draft,supplierUrl:e.target.value})} placeholder="https://..." /></label>
        <label>Cena bazowa<input value={draft.basePrice} onChange={e=>setDraft({...draft,basePrice:e.target.value})} inputMode="decimal" /></label>
        <label>Waluta<select value={draft.currency} onChange={e=>setDraft({...draft,currency:e.target.value})}><option>USD</option><option>EUR</option><option>PLN</option><option>CNY</option></select></label>
        <label>Gwarancja (mies.)<input type="number" min="12" value={draft.warrantyMonths} onChange={e=>setDraft({...draft,warrantyMonths:e.target.value})} /></label>
        <label>Status<select value={draft.status} onChange={e=>setDraft({...draft,status:e.target.value as OwnerRecord['status']})}><option value="DRAFT">DRAFT — robocze</option><option value="VERIFIED">VERIFIED — zweryfikowane</option><option value="READY">READY — gotowe</option></select></label>
        <label style={{ gridColumn:'1/-1' }}>Notatki operacyjne<textarea value={draft.notes} onChange={e=>setDraft({...draft,notes:e.target.value})} rows={4} placeholder="MOQ, transport, certyfikacja, kontakt, warianty, uwagi..." /></label>
        <div style={{ gridColumn:'1/-1', display:'flex', gap:10, flexWrap:'wrap' }}><button type="submit">Zapisz prywatny rekord</button><button type="button" className="cta-secondary" onClick={()=>setDraft(empty())}>Wyczyść formularz</button></div>
      </form>
    </section>

    <section className="card" style={{ marginTop:20 }}>
      <div style={{ display:'flex', justifyContent:'space-between', gap:12, flexWrap:'wrap' }}><div><h2>Prywatna baza robocza</h2><p>Rekordy są widoczne tylko w tej przeglądarce po zalogowaniu do panelu OWNER.</p></div><div style={{display:'flex',gap:8,alignItems:'center'}}><button onClick={exportJson}>Eksport prywatnej kopii</button><label className="taxonomy-offer-link" style={{cursor:'pointer'}}>Import JSON<input type="file" accept="application/json" hidden onChange={e=>importJson(e.target.files?.[0])}/></label></div></div>
      <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Szukaj ścieżki, modelu, SKU..." />
      <div style={{ display:'grid', gap:10, marginTop:14 }}>{filtered.map(item=><article key={item.id} className="card"><strong>{item.publicName}</strong><p>{item.catalogPath}</p><p><b>SKU:</b> {item.sku || '—'} • <b>Cena bazowa:</b> {item.basePrice || '—'} {item.currency} • <b>Gwarancja:</b> {item.warrantyMonths} mies. • <b>Status:</b> {item.status}</p><p><b>Źródło prywatne:</b> {item.supplierUrl ? <a href={item.supplierUrl} target="_blank" rel="noreferrer">Otwórz link</a> : 'nie przypisano'}</p>{item.notes && <p><b>Notatki:</b> {item.notes}</p>}<div style={{display:'flex',gap:8}}><button onClick={()=>edit(item)}>Edytuj</button><button className="cta-secondary" onClick={()=>remove(item.id)}>Usuń</button></div></article>)}</div>
    </section>
  </div>;
}
