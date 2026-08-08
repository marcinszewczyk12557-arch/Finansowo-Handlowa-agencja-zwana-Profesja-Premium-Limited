import { ownerAuthConfigured } from '../../../lib/ownerAuth';

export default async function OwnerLogin({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const params = await searchParams;
  const configured = ownerAuthConfigured();
  return (
    <main className="section" style={{ maxWidth: 560, paddingTop: 80 }}>
      <p className="eyebrow">Strefa właścicielska</p>
      <h1>Panel zarządczo-wykonawczy</h1>
      <p>Dostęp wyłącznie dla właściciela. Dane dostawców, linki źródłowe, SKU i notatki operacyjne nie są publikowane klientom.</p>
      {!configured && <div className="card"><strong>Wymagana konfiguracja Vercel</strong><p>Ustaw OWNER_EMAIL, OWNER_PASSWORD_HASH, OWNER_PASSWORD_SALT i OWNER_SESSION_SECRET w zmiennych środowiskowych Vercel, a następnie wykonaj redeploy.</p></div>}
      {params.error === 'credentials' && <p style={{ color: '#ff8f8f' }}>Nieprawidłowy login lub hasło.</p>}
      {params.error === 'locked' && <p style={{ color: '#ffcf70' }}>Zbyt wiele nieudanych prób logowania. Dostęp został czasowo zablokowany.</p>}
      {params.error === 'config' && <p style={{ color: '#ffcf70' }}>Logowanie nie zostało jeszcze skonfigurowane w Vercel.</p>}
      <form method="post" action="/api/owner/login" className="card" style={{ display: 'grid', gap: 14, marginTop: 20 }}>
        <label>E-mail właściciela<input name="email" type="email" autoComplete="username" required /></label>
        <label>Hasło<input name="password" type="password" autoComplete="current-password" required /></label>
        <button type="submit" disabled={!configured}>Zaloguj do panelu OWNER</button>
      </form>
    </main>
  );
}
