import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { franchiseOfferMatrix, franchiseOfferMatrixSummary } from '../../data/franchiseOfferMatrix';

const tierOrder = ['Value','Standard','Professional','Premium','Luxury / Industrial'] as const;

export default function OfferMatrixPage(){
  return <>
    <Header />
    <main style={{background:'#eef1f3',color:'#172126',minHeight:'100vh'}}>
      <section style={{background:'linear-gradient(135deg,#10191e,#26343b)',color:'#fff',padding:'56px 24px'}}>
        <div style={{maxWidth:1240,margin:'0 auto'}}>
          <p style={{color:'#f0d778',fontWeight:800,letterSpacing:'.14em'}}>OPENING DAYS • ALL IN ONE • 50 STORES</p>
          <h1 style={{fontSize:'clamp(34px,5vw,64px)',margin:'10px 0'}}>250 Grey Offer Cards</h1>
          <p style={{maxWidth:900,lineHeight:1.7,color:'#d5dde0'}}>Five commercial tiers for each of 50 specialist stores: Value, Standard, Professional, Premium and Luxury / Industrial. Each source link is treated as a sourcing lead until the exact seller, model, warranty, compliance and transaction terms are verified.</p>
          <p style={{maxWidth:900,lineHeight:1.7,color:'#bcc8cd'}}><strong>PL:</strong> Pięć poziomów oferty dla każdego z 50 sklepów specjalistycznych: ekonomiczny, standardowy, profesjonalny, premium i luksusowy / przemysłowy. Każdy link źródłowy jest traktowany jako punkt sourcingowy do czasu potwierdzenia sprzedawcy, modelu, gwarancji, zgodności i warunków transakcji.</p>
          <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:22}}>
            <span style={{padding:'10px 14px',border:'1px solid #56666e',borderRadius:999}}>{franchiseOfferMatrixSummary.stores} stores / sklepów</span>
            <span style={{padding:'10px 14px',border:'1px solid #56666e',borderRadius:999}}>{franchiseOfferMatrixSummary.offersPerStore} tiers / wariantów</span>
            <span style={{padding:'10px 14px',border:'1px solid #56666e',borderRadius:999}}>{franchiseOfferMatrixSummary.totalOffers} offers / ofert</span>
          </div>
        </div>
      </section>

      <section style={{maxWidth:1240,margin:'0 auto',padding:'34px 20px 64px'}}>
        {Array.from(new Set(franchiseOfferMatrix.map(o=>o.category))).map((category,categoryIndex)=>{
          const offers = franchiseOfferMatrix.filter(o=>o.category===category).sort((a,b)=>tierOrder.indexOf(a.tier as any)-tierOrder.indexOf(b.tier as any));
          return <section key={category} style={{marginBottom:34}}>
            <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',gap:16,marginBottom:14}}>
              <div><small style={{fontWeight:800,color:'#6a767c'}}>STORE {String(categoryIndex+1).padStart(2,'0')}</small><h2 style={{margin:'4px 0'}}>{category}</h2></div>
              <span style={{fontWeight:800,color:'#8a7440'}}>5 OPTIONS</span>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:14}}>
              {offers.map((offer)=> <article key={offer.id} style={{background:'#d9dde0',border:'1px solid #c3c9cd',borderRadius:16,padding:18,boxShadow:'0 10px 28px rgba(18,30,36,.08)'}}>
                <div style={{display:'flex',justifyContent:'space-between',gap:10,alignItems:'center'}}><span style={{fontSize:12,fontWeight:900,letterSpacing:'.1em'}}>{offer.id.toUpperCase()}</span><span style={{fontSize:12,fontWeight:800,color:'#7a672f'}}>{offer.tier}</span></div>
                <h3 style={{fontSize:19,marginBottom:6}}>{offer.titleEn}</h3>
                <p style={{marginTop:0,fontWeight:700,color:'#4c565b'}}>{offer.titlePl}</p>
                <p style={{fontSize:13,lineHeight:1.55}}><strong>Warranty / Gwarancja:</strong> {offer.warrantyPolicy}</p>
                <p style={{fontSize:13,lineHeight:1.55}}><strong>Service / Serwis:</strong> {offer.servicePolicy}</p>
                <p style={{fontSize:13,lineHeight:1.55}}><strong>Consumables / Materiały:</strong> {offer.consumablesPolicy}</p>
                <p style={{fontSize:12,lineHeight:1.5,color:'#5d666b'}}>{offer.compliancePolicy}</p>
                <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:14}}>
                  <a href={offer.alibabaSearchUrl} target="_blank" rel="noreferrer" style={{fontWeight:800,color:'#172126'}}>Source search / Szukaj źródła →</a>
                  <Link href={`/offers/new?product=${encodeURIComponent(offer.titlePl)}&category=${encodeURIComponent(offer.category)}`} style={{fontWeight:800,color:'#7a672f'}}>Request offer / Zapytaj →</Link>
                </div>
              </article>)}
            </div>
          </section>
        })}
      </section>
    </main>
    <Footer />
  </>;
}
