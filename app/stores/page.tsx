import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { businessStoreNetwork } from '../../data/businessStoreNetwork';

export default function StoresPage() {
  return <>
    <Header />
    <main style={{ background: '#f6f8f9', color: '#172126', minHeight: '100vh' }}>
      <section style={{ background: '#122027', color: '#fff' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '54px 24px 44px' }}>
          <p className="eyebrow" style={{ color: '#f0d778' }}>PROFESJA PREMIUM LIMITED™ • 50-STORE NETWORK</p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,4rem)', maxWidth: 900 }}>Sieć 50 specjalistycznych sklepów internetowych B2B</h1>
          <p style={{ maxWidth: 900, lineHeight: 1.75, color: '#d6dee2' }}>
            Każda z 50 profesji otrzymuje własny sklep, pełny zakres branżowy A–Z i wspólną ścieżkę zapytania, sourcingu, weryfikacji, logistyki oraz obsługi transakcji. Budowa jest prowadzona kolejno — jeden sklep od początku do końca.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 42, paddingBottom: 52 }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div className="taxonomy-leaf-heading">
            <div>
              <p className="eyebrow">PHASE 01 / ETAP 01</p>
              <h2>Pierwsze 6 sklepów technologicznych</h2>
            </div>
            <span>{businessStoreNetwork.length} / 50</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
            {businessStoreNetwork.map((store) => (
              <article key={store.slug} style={{ background: '#fff', border: '1px solid #dde3e6', borderRadius: 18, padding: 24, display: 'flex', flexDirection: 'column', minHeight: 290 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                  <span style={{ fontWeight: 900, letterSpacing: '.14em', color: '#607178' }}>STORE {String(store.number).padStart(2, '0')}</span>
                  <img src="/profesja-logo.svg" alt="PROFESJA PREMIUM LIMITED" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <h3 style={{ marginBottom: 6 }}>{store.nameEn}</h3>
                <strong>{store.namePl}</strong>
                <p style={{ lineHeight: 1.65, color: '#52636b', flex: 1 }}>{store.description}</p>
                <div style={{ marginBottom: 14, color: '#607178' }}>{store.departments.length} działów A–Z</div>
                <Link href={`/stores/${store.slug}`} style={{ fontWeight: 800 }}>OTWÓRZ SKLEP / OPEN STORE →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
