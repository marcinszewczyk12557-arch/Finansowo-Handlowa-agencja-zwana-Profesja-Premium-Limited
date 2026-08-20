import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORE_13} from '../../../lib/store13';

export const metadata:Metadata={
  title:'Kontrola dostępu i bezpieczeństwo B2B | PROFESJA PREMIUM LIMITED',
  description:'Systemy kontroli dostępu B2B: kontrolery, czytniki, terminale, zamki elektroniczne, bramki, identyfikacja i integracja systemowa. Dobór w modelu RFQ po weryfikacji parametrów, przeznaczenia i dokumentacji konkretnej oferty.',
  alternates:{canonical:'/sklepy/13-kontrola-dostepu-bezpieczenstwo'},
  robots:{index:true,follow:true},
  openGraph:{
    title:'Kontrola dostępu i bezpieczeństwo B2B | PROFESJA PREMIUM LIMITED',
    description:'Katalog RFQ kontroli dostępu dla przedsiębiorstw, biur, magazynów, przemysłu, centrów danych i infrastruktury wymagającej kwalifikacji bezpieczeństwa.',
    type:'website'
  }
};

export default function Page(){return <StoreCatalogTemplate store={STORE_13}/>}
