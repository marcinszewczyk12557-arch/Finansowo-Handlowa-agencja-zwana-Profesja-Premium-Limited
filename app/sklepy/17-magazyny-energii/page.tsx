import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORE_17} from '../../../lib/store17';

export const metadata:Metadata={
  title:'Magazyny energii B2B | PROFESJA PREMIUM LIMITED',
  description:'Magazyny energii B2B: systemy bateryjne, BESS, PCS, EMS, zabezpieczenia, monitoring i integracja z OZE dla przedsiębiorstw. Dobór w modelu RFQ po weryfikacji projektu, parametrów, dokumentacji, ceny i dostępności konkretnej oferty.',
  alternates:{canonical:'/sklepy/17-magazyny-energii'},
  robots:{index:true,follow:true},
  openGraph:{
    title:'Magazyny energii B2B | PROFESJA PREMIUM LIMITED',
    description:'Katalog RFQ magazynów energii dla przedsiębiorstw, z weryfikacją parametrów, bezpieczeństwa i dokumentacji konkretnej oferty.',
    type:'website'
  }
};

export default function Page(){return <StoreCatalogTemplate store={STORE_17}/>}
