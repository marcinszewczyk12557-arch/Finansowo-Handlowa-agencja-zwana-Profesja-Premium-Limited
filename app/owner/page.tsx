import { redirect } from 'next/navigation';
import OwnerWorkspace from '../../components/OwnerWorkspace';
import { isOwnerSession, ownerAuthConfigured } from '../../lib/ownerAuth';

export default async function OwnerPage() {
  if (!ownerAuthConfigured()) redirect('/owner/login?error=config');
  if (!(await isOwnerSession())) redirect('/owner/login');

  return (
    <main className="section" style={{ maxWidth: 1500, paddingTop: 50 }}>
      <div style={{ display:'flex', justifyContent:'space-between', gap:16, alignItems:'flex-start', flexWrap:'wrap' }}>
        <div><p className="eyebrow">OWNER ONLY</p><h1>Panel zarządczo-wykonawczy</h1><p>Praca operacyjna nad drzewem produktów, SKU, cenami bazowymi, gwarancją i prywatnymi źródłami. Te dane nie są częścią publicznego katalogu.</p></div>
        <form method="post" action="/api/owner/logout"><button type="submit" className="cta-secondary">Wyloguj</button></form>
      </div>
      <OwnerWorkspace />
    </main>
  );
}
