import Header from '../../components/Header';
import Footer from '../../components/Footer';

const products = [
  {
    manufacturer: 'Jiangsu Pineng Electric Tools Co., Ltd.',
    product: 'Wiertarko-wkrętarka akumulatorowa 21V',
    sourcePrice: '13,40–18,40 USD',
    profesjaPrice: '162–223 zł',
    verification: 'profil producenta: 12 lat doświadczenia; cena źródłowa sprawdzona 16.08.2026',
  },
  {
    manufacturer: 'Labtex Biotech China Co., Ltd.',
    product: 'Stołowy miernik przewodności LABTEX',
    sourcePrice: '380–410 USD',
    profesjaPrice: '4 598–4 961 zł',
    verification: 'zweryfikowany profil producenta; 4 lata na platformie B2B; cena sprawdzona 16.08.2026',
  },
  {
    manufacturer: 'Labtex Biotech China Co., Ltd.',
    product: 'Przenośny miernik przewodności / TDS / zasolenia',
    sourcePrice: '342–360 USD',
    profesjaPrice: '4 139–4 356 zł',
    verification: 'zweryfikowany profil producenta; minimum 3 lata; cena sprawdzona 16.08.2026',
  },
  {
    manufacturer: 'Suzhou Victory Electric Technology Co., Ltd. (VCT)',
    product: 'Fotel masażujący 4D Zero Gravity VCT 2026',
    sourcePrice: '430–480 USD',
    profesjaPrice: '5 203–5 809 zł',
    verification: 'producent z 11-letnim stażem; oferta kwalifikowana; cena sprawdzona 16.08.2026',
  },
  {
    manufacturer: 'Shandong Infront Machinery Co., Ltd.',
    product: 'Minikoparka 2 t z silnikiem Kubota — konfiguracja bazowa',
    sourcePrice: '1 800 USD',
    profesjaPrice: 'ok. 21 782 zł',
    verification: 'profil dostawcy: 10 lat; MOQ 1 szt.; cena sprawdzona 16.08.2026',
  },
];

export default function CatalogPage(){
  return <>
    <Header/>
    <main style={{background:'#f6f8f9', color:'#172126', minHeight:'100vh'}}>
      <section className='section' style={{paddingTop:48, paddingBottom:24}}>
        <div style={{maxWidth:1120, margin:'0 auto', background:'#ffffff', border:'1px solid #dde3e6', borderRadius:20, padding:'28px clamp(20px,4vw,40px)', boxShadow:'0 12px 36px rgba(20,36,44,.06)'}}>
          <p className='eyebrow' style={{color:'#607178'}}>PROFESJA PREMIUM LIMITED™</p>
          <h1 style={{marginBottom:16, color:'#122027'}}>Zweryfikowany katalog produktów B2B</h1>
          <p style={{maxWidth:900, lineHeight:1.7, color:'#45555d'}}>Publikujemy wyłącznie pozycje z potwierdzonym producentem lub kwalifikowanym dostawcą i aktualną ceną źródłową. Cena PROFESJA jest liczona jednolicie: cena producenta +225%, czyli cena bazowa × 3,25.</p>
          <p style={{maxWidth:900, lineHeight:1.7, color:'#45555d'}}><strong>Kurs roboczy do kalkulacji:</strong> 1 USD = 3,72341 PLN (16.08.2026). Transport, cło, VAT, ubezpieczenie, montaż i indywidualna konfiguracja — jeżeli występują — są potwierdzane osobno przed wiążącą ofertą.</p>
        </div>
      </section>

      <section className='section' style={{paddingTop:12}}>
        <div style={{maxWidth:1120, margin:'0 auto'}}>
          <div style={{overflowX:'auto', background:'#ffffff', border:'1px solid #dde3e6', borderRadius:18, boxShadow:'0 10px 30px rgba(20,36,44,.05)'}}>
            <table style={{width:'100%', borderCollapse:'collapse', minWidth:900, color:'#1b2a31'}}>
              <thead>
                <tr style={{textAlign:'left', background:'#eef3f4', color:'#203038'}}>
                  <th style={{padding:16}}>Producent</th>
                  <th style={{padding:16}}>Produkt</th>
                  <th style={{padding:16}}>Cena producenta</th>
                  <th style={{padding:16}}>Cena PROFESJA × 3,25</th>
                  <th style={{padding:16}}>Weryfikacja</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index)=><tr key={`${item.manufacturer}-${item.product}`} style={{borderTop:'1px solid #e5eaec', background:index % 2 === 0 ? '#ffffff' : '#fafcfc'}}>
                  <td style={{padding:16, verticalAlign:'top'}}><strong>{item.manufacturer}</strong></td>
                  <td style={{padding:16, verticalAlign:'top'}}>{item.product}</td>
                  <td style={{padding:16, verticalAlign:'top', whiteSpace:'nowrap'}}>{item.sourcePrice}</td>
                  <td style={{padding:16, verticalAlign:'top', whiteSpace:'nowrap'}}><strong>{item.profesjaPrice}</strong></td>
                  <td style={{padding:16, verticalAlign:'top', color:'#52636b'}}>{item.verification}</td>
                </tr>)}
              </tbody>
            </table>
          </div>
          <p style={{marginTop:18, color:'#52636b', lineHeight:1.65}}>Każda cena ma charakter katalogowy i jest ponownie potwierdzana przed zawarciem transakcji. Nie publikujemy pozycji bez wiarygodnego źródła ceny lub bez wystarczającej weryfikacji kontrahenta.</p>
        </div>
      </section>
    </main>
    <Footer/>
  </>;
}
