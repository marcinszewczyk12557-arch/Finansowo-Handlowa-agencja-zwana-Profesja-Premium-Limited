import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  CATALOG_ITEMS_PER_STORE,
  CATALOG_TOTAL_ITEMS,
  getCatalogPage,
  scalableCatalogCategories,
} from '../../data/scalableCatalog';

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function OfferMatrixPage({ searchParams }: { searchParams?: SearchParams }) {
  const params = searchParams ? await searchParams : {};
  const rawPage = Array.isArray(params.page) ? params.page[0] : params.page;
  const rawCategory = Array.isArray(params.category) ? params.category[0] : params.category;
  const page = Number.parseInt(rawPage || '1', 10) || 1;
  const category = rawCategory && scalableCatalogCategories.includes(rawCategory as (typeof scalableCatalogCategories)[number]) ? rawCategory : undefined;
  const result = getCatalogPage(page, category);

  const pageHref = (target: number) => {
    const query = new URLSearchParams();
    query.set('page', String(target));
    if (category) query.set('category', category);
    return `/offer-matrix?${query.toString()}`;
  };

  return <>
    <Header />
    <main style={{background:'#eef1f3',color:'#172126',minHeight:'100vh'}}>
      <section style={{background:'linear-gradient(135deg,#10191e,#26343b)',color:'#fff',padding:'56px 24px'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <p style={{color:'#f0d778',fontWeight:800,letterSpacing:'.14em'}}>PROFESJA PREMIUM LIMITED™ • ALL IN ONE • 50 SPECIALIST STORES</p>
          <h1 style={{fontSize:'clamp(34px,5vw,64px)',margin:'10px 0'}}>Catalogue architecture for ~200,000 product positions</h1>
          <p style={{maxWidth:980,lineHeight:1.7,color:'#d5dde0'}}>A scalable commercial catalogue with 50 specialist stores and up to 4,000 product positions per store. Product positions are generated and paginated on demand so the website remains fast. Alibaba links are sourcing searches until an exact listing, supplier, price, MOQ, warranty, compliance and delivery terms are verified.</p>
          <p style={{maxWidth:980,lineHeight:1.7,color:'#bcc8cd'}}><strong>PL:</strong> Skalowalny katalog handlowy obejmujący 50 wyspecjalizowanych sklepów i do 4 000 pozycji produktowych na każdy sklep. Pozycje są generowane i stronicowane na żądanie, dzięki czemu witryna nie próbuje ładować 200 tys. kart jednocześnie. Link Alibaba jest źródłem sourcingowym do czasu potwierdzenia konkretnego sprzedawcy, ceny, MOQ, gwarancji, zgodności i dostawy.</p>
          <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:22}}>
            <span style={{padding:'10px 14px',border:'1px solid #56666e',borderRadius:999}}>{scalableCatalogCategories.length} stores / sklepów</span>
            <span style={{padding:'10px 14px',border:'1px solid #56666e',borderRadius:999}}>{CATALOG_ITEMS_PER_STORE.toLocaleString('pl-PL')} positions/store / pozycji na sklep</span>
            <span style={{padding:'10px 14px',border:'1px solid #56666e',borderRadius:999}}>{CATALOG_TOTAL_ITEMS.toLocaleString('pl-PL')} catalogue positions / pozycji katalogowych</span>
            <span style={{padding:'10px 14px',border:'1px solid #56666e',borderRadius:999}}>100 cards/page / kart na stronę</span>
          </div>
        </div>
      </section>

      <section style={{maxWidth:1280,margin:'0 auto',padding:'28px 20px 16px'}}>
        <div style={{background:'#fff',border:'1px solid #d3dadd',borderRadius:16,padding:18}}>
          <p style={{marginTop:0,fontWeight:900}}>STORE FILTER / FILTR SKLEPÓW</p>
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
            <Link href="/offer-matrix?page=1" style={{padding:'8px 11px',borderRadius:999,border:'1px solid #bcc5c9',textDecoration:'none',color:'#172126',fontWeight:800}}>ALL / WSZYSTKIE</Link>
            {scalableCatalogCategories.map((name,index)=><Link key={name} href={`/offer-matrix?page=1&category=${encodeURIComponent(name)}`} style={{padding:'8px 11px',borderRadius:999,border:'1px solid #bcc5c9',textDecoration:'none',color:category===name?'#fff':'#172126',background:category===name?'#26343b':'#f5f7f8',fontWeight:800,fontSize:12}}>{String(index+1).padStart(2,'0')} {name}</Link>)}
          </div>
        </div>
      </section>

      <section style={{maxWidth:1280,margin:'0 auto',padding:'18px 20px 64px'}}>
        <div style={{display:'flex',alignItems:'end',justifyContent:'space-between',gap:16,flexWrap:'wrap',marginBottom:18}}>
          <div>
            <p style={{fontWeight:900,color:'#8a7440',marginBottom:4}}>CATALOGUE VIEW / WIDOK KATALOGU</p>
            <h2 style={{margin:'0 0 6px'}}>{category || 'All specialist stores / Wszystkie sklepy specjalistyczne'}</h2>
            <p style={{margin:0,color:'#66747b'}}>Page / strona {result.page} z {result.totalPages.toLocaleString('pl-PL')} • {result.totalItems.toLocaleString('pl-PL')} pozycji w tym widoku</p>
          </div>
          <div style={{display:'flex',gap:10}}>
            {result.page>1 && <Link href={pageHref(result.page-1)} style={{padding:'10px 14px',background:'#26343b',color:'#fff',borderRadius:10,textDecoration:'none',fontWeight:800}}>← PREVIOUS / POPRZEDNIA</Link>}
            {result.page<result.totalPages && <Link href={pageHref(result.page+1)} style={{padding:'10px 14px',background:'#26343b',color:'#fff',borderRadius:10,textDecoration:'none',fontWeight:800}}>NEXT / NASTĘPNA →</Link>}
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(270px,1fr))',gap:14}}>
          {result.items.map((item)=><article key={item.id} style={{background:'#d9dde0',border:'1px solid #c3c9cd',borderRadius:16,padding:18,boxShadow:'0 10px 28px rgba(18,30,36,.08)'}}>
            <div style={{display:'flex',justifyContent:'space-between',gap:10,alignItems:'center'}}>
              <span style={{fontSize:12,fontWeight:900,letterSpacing:'.08em'}}>{item.id}</span>
              <span style={{fontSize:12,fontWeight:800,color:'#7a672f'}}>{item.tier}</span>
            </div>
            <p style={{fontSize:11,fontWeight:900,color:'#66747b',margin:'10px 0 4px'}}>STORE {String(item.storeNo).padStart(2,'0')} • SOURCING CANDIDATE</p>
            <h3 style={{fontSize:18,margin:'4px 0 6px'}}>{item.titleEn}</h3>
            <p style={{marginTop:0,fontWeight:800,color:'#4c565b'}}>{item.titlePl}</p>
            <div style={{fontSize:13,lineHeight:1.55}}>
              <p><strong>Role / Rola:</strong> {item.role}</p>
              <p><strong>Form / Wariant gabarytowy:</strong> {item.formFactor}</p>
              <p><strong>Door-to-door:</strong> {item.delivery}</p>
              <p><strong>Warranty / Gwarancja:</strong> {item.warranty}</p>
              <p><strong>Service / Serwis:</strong> {item.service}</p>
              <p><strong>Consumables / Materiały:</strong> {item.consumables}</p>
              <p style={{fontSize:12,color:'#5d666b'}}><strong>Compliance / Zgodność:</strong> {item.compliance}</p>
            </div>
            <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:14}}>
              <a href={item.sourceUrl} target="_blank" rel="noreferrer" style={{fontWeight:900,color:'#172126'}}>Alibaba sourcing →</a>
              <Link href={`/offers/new?product=${encodeURIComponent(item.titlePl)}&category=${encodeURIComponent(item.category)}`} style={{fontWeight:900,color:'#7a672f'}}>RFQ / Zapytaj →</Link>
            </div>
          </article>)}
        </div>

        <div style={{display:'flex',justifyContent:'center',gap:12,marginTop:28,flexWrap:'wrap'}}>
          {result.page>1 && <Link href={pageHref(result.page-1)} style={{padding:'11px 16px',background:'#26343b',color:'#fff',borderRadius:10,textDecoration:'none',fontWeight:800}}>← PREVIOUS / POPRZEDNIA</Link>}
          <span style={{padding:'11px 16px',background:'#fff',border:'1px solid #cbd2d6',borderRadius:10,fontWeight:900}}>{result.page} / {result.totalPages.toLocaleString('pl-PL')}</span>
          {result.page<result.totalPages && <Link href={pageHref(result.page+1)} style={{padding:'11px 16px',background:'#26343b',color:'#fff',borderRadius:10,textDecoration:'none',fontWeight:800}}>NEXT / NASTĘPNA →</Link>}
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
