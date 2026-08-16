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
    <main>
      <section className='hero compact-hero'>
        <p className='eyebrow'>PROFESJA PREMIUM LIMITED™</p>
        <h2>Zweryfikowany katalog produktów B2B</h2>
        <p>Publikujemy wyłącznie pozycje z potwierdzonym producentem lub kwalifikowanym dostawcą i aktualną ceną źródłową. Cena PROFESJA jest liczona jednolicie: cena producenta +225%, czyli cena bazowa × 3,25.</p>
        <p><strong>Kurs roboczy do kalkulacji:</strong> 1 USD = 3,72341 PLN (16.08.2026). Transport, cło, VAT, ubezpieczenie, montaż i indywidualna konfiguracja — jeżeli występują — są potwierdzane osobno przed wiążącą ofertą.</p>
      </section>

      <section className='section'>
        <div style={{overflowX:'auto', border:'1px solid #334047', borderRadius:16}}>
          <table style={{width:'100%', borderCollapse:'collapse', minWidth:900}}>
            <thead>
              <tr style={{textAlign:'left', background:'#0b171d'}}>
                <th style={{padding:16}}>Producent</th>
                <th style={{padding:16}}>Produkt</th>
                <th style={{padding:16}}>Cena producenta</th>
                <th style={{padding:16}}>Cena PROFESJA +225%</th>
                <th style={{padding:16}}>Weryfikacja</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item)=><tr key={`${item.manufacturer}-${item.product}`} style={{borderTop:'1px solid #334047'}}>
                <td style={{padding:16, verticalAlign:'top'}}><strong>{item.manufacturer}</strong></td>
                <td style={{padding:16, verticalAlign:'top'}}>{item.product}</td>
                <td style={{padding:16, verticalAlign:'top'}}>{item.sourcePrice}</td>
                <td style={{padding:16, verticalAlign:'top'}}><strong>{item.profesjaPrice}</strong></td>
                <td style={{padding:16, verticalAlign:'top'}}>{item.verification}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
        <p style={{marginTop:18}}>Każda cena ma charakter katalogowy i jest ponownie potwierdzana przed zawarciem transakcji. Nie publikujemy pozycji bez wiarygodnego źródła ceny lub bez wystarczającej weryfikacji kontrahenta.</p>
      </section>
    </main>
    <Footer/>
  </>;
}
