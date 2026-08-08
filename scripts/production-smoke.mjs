const base = (process.env.PRODUCTION_URL || process.argv[2] || '').replace(/\/$/, '');

if (!base) {
  console.error('Brak adresu produkcyjnego. Użyj: PRODUCTION_URL=https://twoja-domena npm run smoke:production');
  process.exit(2);
}

const checks = [
  { path: '/', name: 'strona główna', expect: [200] },
  { path: '/catalog', name: 'katalog', expect: [200] },
  { path: '/api/health', name: 'health + baza', expect: [200], json: true },
];

let failed = false;

for (const check of checks) {
  const url = `${base}${check.path}`;
  try {
    const response = await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'PROFESJA-production-smoke/1.0' } });
    const okStatus = check.expect.includes(response.status);
    let extra = '';
    let body;

    if (check.json) {
      try {
        body = await response.json();
        extra = ` ready=${String(body?.ready)} database=${String(body?.database)} commit=${String(body?.commit ?? 'n/a')}`;
      } catch {
        extra = ' niepoprawny JSON';
      }
    }

    const readyOk = !check.json || (body?.ready === true && body?.database === 'ok');
    const ok = okStatus && readyOk;
    console.log(`${ok ? 'PASS' : 'FAIL'} ${check.name}: HTTP ${response.status}${extra}`);
    if (!ok) failed = true;
  } catch (error) {
    failed = true;
    console.error(`FAIL ${check.name}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (failed) process.exit(1);
console.log('PASS Production Smoke Test — aplikacja i baza są gotowe.');
