import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HierarchicalCatalog from '../../components/HierarchicalCatalog';
import './catalog-enhancements.css';

export default function CatalogPage(){return <><Header/><main><section className='hero compact-hero'><p className='eyebrow'>PROFESJA PREMIUM LIMITED™</p><h2>Pełny katalog produktów PREMIUM</h2><p>Kompletna hierarchia kategorii globalnego rynku B2B zastępuje wcześniejszy ograniczony katalog. Dla każdego najniższego elementu prezentowanych jest 10 wariantów kwalifikowanych według wymagań jakości, trwałości, dokumentacji i zgodności. Certyfikacja konkretnego modelu jest potwierdzana dokumentami przed finalną ofertą.</p></section><HierarchicalCatalog/></main><Footer/></>}
