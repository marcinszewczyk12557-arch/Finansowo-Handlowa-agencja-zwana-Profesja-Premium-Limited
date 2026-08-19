import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CATALOG_ITEMS_PER_STORE, CATALOG_TOTAL_ITEMS, getCatalogPage, scalableCatalogCategories, storeDepartments } from '../../data/scalableCatalog';

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

const storeMarks = ['◈','◆','◇','⬡','✦','✧','▣','◉','◎','⬢'];
const storeLogo = (storeNo:number, category:string) => ({ mark: storeMarks[(storeNo-1)%storeMarks.length], code:`PPL ${String(storeNo).padStart(2,'0')}`, name:category });

export default async function OfferMatrixPage({ searchParams }: { searchParams?: SearchParams }) {
  const params = searchParams ? await searchParams : {};
  const rawPage = Array.isArray(params.page) ? params.page[0] : params.page;
  const rawCategory = Array.isArray(params.category) ? params.category[0] : params.category;
  const page = Number.parseInt(rawPage || '1', 10) || 1;
  const category = rawCategory && scalableCatalogCategories.includes(rawCategory as (typeof scalableCatalogCategories)[number]) ? rawCategory : undefined;
  const result = getCatalogPage(page, category);
  const activeDepartments = category ? storeDepartments[category as (typeof scalableCatalogCategories)[number]] : undefined;
  const pageHref = (target:number) => { const q=new URLSearchParams(); q.set('page',String(target)); if(category)q.set('category',category); return `/offer-matrix?${q.toString()}`; };

  return <><Header/><main style={{background:'#eef1f3',color:'#172126',minHeight:'100vh'}}>
    <section style={{background:'linear-gradient(135deg,#10191e,#26343b)',color:'#fff',padding:'56px 24px'}}><div style={{maxWidth:1280,margin:'0 auto'}}>
      <p style={{color:'#f0d778',fontWeight:800,letterSpacing:'.14em'}}>PROFESJA PREMIUM LIMITED™ • ALL IN ONE • 50 SPECIALIST STORES</p>
      <h1 style={{fontSize:'clamp(34px,5vw,64px)',margin:'10px 0'}}>50 thematic stores • ~200,000 individual product cards</h1>
      <p style={{maxWidth:980,lineHeight:1.7,color:'#d5dde0'}}>Each specialist store has its own thematic identity displayed on every grey product card assigned to that store. Stores 01–06 now use a deep department taxonomy covering core devices, professional variants, accessories, infrastructure, replacement parts and service-related assortment.</p>
      <p style={{maxWidth:980,lineHeight:1.7,color:'#bcc8cd'}}><strong>PL:</strong> Każdy z 50 sklepów posiada własną identyfikację tematyczną widoczną na każdej przypisanej mu szarej karcie. Sklepy 01–06 posiadają już rozbudowaną taksonomię działów obejmującą urządzenia, warianty profesjonalne, akcesoria, infrastrukturę, części i asortyment serwisowy.</p>
      <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:22}}><span>{scalableCatalogCategories.length} sklepów</span><span>{CATALOG_ITEMS_PER_STORE.toLocaleString('pl-PL')} kart/sklep</span><span>{CATALOG_TOTAL_ITEMS.toLocaleString('pl-PL')} kart łącznie</span></div>
    </div></section>
    <section style={{maxWidth:1280,margin:'0 auto',padding:'28px 20px 16px'}}><div style={{background:'#fff',border:'1px solid #d3dadd',borderRadius:16,padding:18}}><p style={{marginTop:0,fontWeight:900}}>50 STORE IDENTITIES / 50 IDENTYFIKACJI SKLEPÓW</p><div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
      <Link href="/offer-matrix?page=1" style={{padding:'8px 11px',borderRadius:999,border:'1px solid #bcc5c9',textDecoration:'none',color:'#172126',fontWeight:800}}>ALL / WSZYSTKIE</Link>
      {scalableCatalogCategories.map((name,index)=>{const l=storeLogo(index+1,name);return <Link key={name} href={`/offer-matrix?page=1&category=${encodeURIComponent(name)}`} style={{padding:'8px 11px',borderRadius:12,border:'1px solid #bcc5c9',textDecoration:'none',color:category===name?'#fff':'#172126',background:category===name?'#26343b':'#f5f7f8',fontWeight:800,fontSize:12}}><strong style={{fontSize:18,marginRight:6}}>{l.mark}</strong>{l.code} • {name}</Link>})}
    </div></div></section>
    {activeDepartments && <section style={{maxWidth:1280,margin:'0 auto',padding:'0 20px 8px'}}><div style={{background:'#fff',border:'1px solid #d3dadd',borderRadius:16,padding:18}}><p style={{marginTop:0,fontWeight:900}}>DZIAŁY ASORTYMENTOWE / STORE DEPARTMENTS</p><div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{activeDepartments.map((department)=><span key={department} style={{padding:'7px 10px',borderRadius:999,background:'#eef1f3',border:'1px solid #d3dadd',fontSize:12,fontWeight:800}}>{department}</span>)}</div></div></section>}
    <section style={{maxWidth:1280,margin:'0 auto',padding:'18px 20px 64px'}}><div style={{display:'flex',justifyContent:'space-between',gap:16,flexWrap:'wrap',marginBottom:18}}><div><p style={{fontWeight:900,color:'#8a7440',marginBottom:4}}>CATALOGUE / KATALOG</p><h2 style={{margin:0}}>{category||'All specialist stores / Wszystkie sklepy'}</h2><p>{result.totalItems.toLocaleString('pl-PL')} pozycji • strona {result.page}/{result.totalPages}</p></div></div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(270px,1fr))',gap:14}}>{result.items.map(item=>{const logo=storeLogo(item.storeNo,item.category);return <article key={item.id} style={{background:'#d9dde0',border:'1px solid #c3c9cd',borderRadius:16,padding:18,boxShadow:'0 10px 28px rgba(18,30,36,.08)'}}>
        <div style={{display:'flex',alignItems:'center',gap:12,paddingBottom:12,borderBottom:'1px solid #bcc3c7'}}><div aria-label={`Logo ${logo.name}`} style={{width:52,height:52,borderRadius:14,background:'#202d33',color:'#f0d778',display:'grid',placeItems:'center',fontSize:28,fontWeight:900}}>{logo.mark}</div><div><div style={{fontSize:11,fontWeight:900,letterSpacing:'.12em'}}>{logo.code}</div><div style={{fontSize:13,fontWeight:900}}>{logo.name}</div></div></div>
        <div style={{display:'flex',justifyContent:'space-between',gap:10,marginTop:12}}><span style={{fontSize:12,fontWeight:900}}>{item.id}</span><span style={{fontSize:12,fontWeight:800,color:'#7a672f'}}>{item.tier}</span></div>
        <p style={{fontSize:11,fontWeight:900,color:'#66747b'}}>1 CARD = 1 PRODUCT POSITION / 1 KARTA = 1 POZYCJA</p><h3 style={{fontSize:18}}>{item.titleEn}</h3><p style={{fontWeight:800,color:'#4c565b'}}>{item.titlePl}</p>
        <div style={{fontSize:13,lineHeight:1.55}}><p><strong>Department / Dział:</strong> {item.department}</p><p><strong>Role / Rola:</strong> {item.role}</p><p><strong>Form:</strong> {item.formFactor}</p><p><strong>Door-to-door:</strong> {item.delivery}</p><p><strong>Warranty:</strong> {item.warranty}</p><p><strong>Service:</strong> {item.service}</p><p><strong>Consumables:</strong> {item.consumables}</p></div>
        <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:14}}><Link href={item.sourceUrl} style={{fontWeight:900,color:'#172126'}}>Zweryfikuj źródło / RFQ →</Link><Link href={`/offers/new?product=${encodeURIComponent(item.titlePl)}&category=${encodeURIComponent(item.category)}`} style={{fontWeight:900,color:'#7a672f'}}>Zapytanie ofertowe →</Link></div>
      </article>})}</div>
      <div style={{display:'flex',justifyContent:'center',gap:12,marginTop:28}}>{result.page>1&&<Link href={pageHref(result.page-1)}>← POPRZEDNIA</Link>}<strong>{result.page} / {result.totalPages}</strong>{result.page<result.totalPages&&<Link href={pageHref(result.page+1)}>NASTĘPNA →</Link>}</div>
    </section>
  </main><Footer/></>;
}
