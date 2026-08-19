import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { franchiseOfferMatrixSummary, franchiseStoreCategories } from '../data/franchiseOfferMatrix';

export default function Home(){
  return <>
    <Header />
    <main style={{background:'#0f171c',color:'#fff',minHeight:'100vh'}}>
      <section style={{padding:'72px 24px 58px',background:'radial-gradient(circle at 72% 28%,rgba(240,215,120,.14),transparent 34%),linear-gradient(135deg,#0d151a,#1d2b32)'}}>
        <div style={{maxWidth:1240,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:34,alignItems:'center'}}>
          <div>
            <p style={{color:'#f0d778',fontWeight:900,letterSpacing:'.15em'}}>OPENING DAYS • ALL IN ONE</p>
            <h1 style={{fontSize:'clamp(42px,7vw,82px)',lineHeight:.95,margin:'12px 0'}}>PROFESJA<br/>PREMIUM LIMITED™</h1>
            <h2 style={{fontSize:'clamp(22px,3vw,34px)',fontWeight:600}}>50 specialist stores • 250 commercial offers</h2>
            <p style={{maxWidth:720,lineHeight:1.75,color:'#d1dade'}}>Five market-positioned offer tiers for every category: Value, Standard, Professional, Premium and Luxury / Industrial. Product sourcing, RFQ, documentation, logistics, warranty verification and post-warranty service are coordinated in one B2B process.</p>
            <p style={{maxWidth:720,lineHeight:1.75,color:'#aebbc1'}}><strong>PL:</strong> 50 wyspecjalizowanych sklepów i 250 ofert katalogowych — po pięć poziomów cenowo-jakościowych dla każdej kategorii. Sourcing, zapytanie ofertowe, dokumentacja, logistyka, weryfikacja gwarancji i serwis pogwarancyjny są prowadzone w jednym procesie B2B.</p>
            <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:24}}>
              <Link href="/offer-matrix"><button style={{padding:'14px 20px',fontWeight:900}}>VIEW 250 OFFERS / ZOBACZ 250 OFERT</button></Link>
              <Link href="/offers/new"><button style={{padding:'14px 20px',fontWeight:900,background:'transparent',color:'#f0d778',border:'1px solid #f0d778'}}>REQUEST OFFER / ZAPYTAJ</button></Link>
            </div>
          </div>
          <div style={{background:'#d9dde0',color:'#172126',borderRadius:24,padding:26,boxShadow:'0 30px 80px rgba(0,0,0,.28)'}}>
            <img src="/profesja-logo.svg" alt="PROFESJA PREMIUM LIMITED" style={{width:86,height:86,objectFit:'contain'}} />
            <p style={{fontWeight:900,letterSpacing:'.12em',color:'#8a7440'}}>LIVE PREVIEW MATRIX</p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10,margin:'16px 0 20px'}}>
              <div style={{background:'#eef1f3',borderRadius:14,padding:14}}><strong style={{fontSize:30}}>{franchiseOfferMatrixSummary.stores}</strong><span style={{display:'block',fontSize:12}}>stores / sklepów</span></div>
              <div style={{background:'#eef1f3',borderRadius:14,padding:14}}><strong style={{fontSize:30}}>{franchiseOfferMatrixSummary.offersPerStore}</strong><span style={{display:'block',fontSize:12}}>tiers / wariantów</span></div>
              <div style={{background:'#eef1f3',borderRadius:14,padding:14}}><strong style={{fontSize:30}}>{franchiseOfferMatrixSummary.totalOffers}</strong><span style={{display:'block',fontSize:12}}>offers / ofert</span></div>
            </div>
            <p style={{fontSize:13,lineHeight:1.6}}>Source links are sourcing leads until the exact seller, product, warranty, compliance and commercial terms are verified. / Linki źródłowe są punktami sourcingowymi do czasu pełnej weryfikacji konkretnej oferty.</p>
          </div>
        </div>
      </section>

      <section style={{background:'#eef1f3',color:'#172126',padding:'48px 24px 64px'}}>
        <div style={{maxWidth:1240,margin:'0 auto'}}>
          <p style={{fontWeight:900,letterSpacing:'.12em',color:'#8a7440'}}>50 SPECIALIST STORES • 50 SKLEPÓW SPECJALISTYCZNYCH</p>
          <h2 style={{fontSize:'clamp(28px,4vw,46px)',marginTop:8}}>One catalogue tree, five offer tiers per category</h2>
          <p style={{maxWidth:900,lineHeight:1.7,color:'#58656b'}}>Each category opens a controlled sourcing path from an economical market option through professional and premium configurations up to luxury or industrial-grade solutions.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12,marginTop:26}}>
            {franchiseStoreCategories.map((category,index)=><Link key={category} href={`/offer-matrix#store-${String(index+1).padStart(2,'0')}`} style={{textDecoration:'none',color:'inherit'}}><article style={{background:'#d9dde0',border:'1px solid #c2c9cd',borderRadius:15,padding:17,minHeight:112}}><span style={{fontWeight:900,color:'#8a7440'}}>{String(index+1).padStart(2,'0')}</span><h3 style={{fontSize:17,margin:'8px 0 0'}}>{category}</h3><p style={{fontSize:12,color:'#657178'}}>5 offer tiers / 5 wariantów</p></article></Link>)}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
