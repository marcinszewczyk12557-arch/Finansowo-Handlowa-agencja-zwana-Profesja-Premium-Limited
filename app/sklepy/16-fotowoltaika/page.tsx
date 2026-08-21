import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORE_16} from '../../../lib/store16';

export const metadata:Metadata={
  title:'Fotowoltaika B2B | PROFESJA PREMIUM LIMITED',
  description:'Fotowoltaika B2B: moduły, falowniki, konstrukcje, zabezpieczenia, monitoring i rozwiązania dla przedsiębiorstw. Dobór w modelu RFQ po weryfikacji projektu, parametrów, dokumentacji, ceny i dostępności konkretnej oferty.',
  alternates:{canonical:'/sklepy/16-fotowoltaika'},
  robots:{index:true,follow:true},
  openGraph:{
    title:'Fotowoltaika B2B | PROFESJA PREMIUM LIMITED',
    description:'Katalog RFQ systemów fotowoltaicznych dla przedsiębiorstw, z weryfikacją parametrów i dokumentacji konkretnej oferty.',
    type:'website'
  }
};

export default function Page(){return <StoreCatalogTemplate store={STORE_16}/>}
