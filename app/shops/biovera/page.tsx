import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { brandLogos } from '../../../data/brandLogos';

export default function BioveraShop() {
  return <><Header/><main className="section"><p className="eyebrow">PROFESJA PREMIUM LIMITED™ • SKLEP W BUDOWIE</p><h1>BIOVERA</h1><img src={brandLogos.biovera} alt="BIOVERA" style={{maxWidth:620,width:'100%',borderRadius:20}}/><h2>Planowany moduł sprzedaży detalicznej</h2><p>Strona przygotowana jako przyszły moduł detaliczny dla legalnie dopuszczonego asortymentu zdrowotnego, pielęgnacyjnego i — po spełnieniu właściwych wymagań — farmaceutycznego.</p><div className="admin-note"><strong>Status: W BUDOWIE — sprzedaż produktów regulowanych nieaktywna</strong><p>Produkty lecznicze, wyroby medyczne oraz inne regulowane kategorie mogą zostać udostępnione wyłącznie po potwierdzeniu wymaganych zezwoleń, uprawnień, zasad sprzedaży na odległość, informacji produktowych, warunków przechowywania i transportu oraz zgodności dla konkretnego rynku.</p></div><p>Na tym etapie moduł nie przyjmuje zamówień na produkty lecznicze.</p></main><Footer/></>;
}