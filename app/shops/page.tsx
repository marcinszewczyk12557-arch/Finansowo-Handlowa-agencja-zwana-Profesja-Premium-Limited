import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { brandLogos } from '../../data/brandLogos';

export default function ShopsHub(){return <><Header/><main className="section"><p className="eyebrow">PROFESJA PREMIUM LIMITED™</p><h1>Sklepy i usługi w budowie</h1><p>Nowe moduły biznesowe rozwijane jako część ekosystemu PROFESJA.</p><div className="grid"><article className="card"><img src={brandLogos.veloxLogistics} alt="VELOX LOGISTICS"/><h2>VELOX LOGISTICS</h2><p>Dyspozytornia transportu kuriersko-pocztowego i drogowego door-to-door.</p><Link href="/shops/velox-logistics"><button>Zobacz projekt</button></Link></article><article className="card"><img src={brandLogos.biovera} alt="BIOVERA"/><h2>BIOVERA</h2><p>Planowany sklep detaliczny. Sprzedaż regulowanych produktów pozostaje nieaktywna do czasu pełnej weryfikacji zgodności.</p><Link href="/shops/biovera"><button>Zobacz projekt</button></Link></article></div></main><Footer/></>}
