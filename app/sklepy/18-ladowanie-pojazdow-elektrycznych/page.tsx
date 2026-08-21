import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORE_18} from '../../../lib/store18';

export const metadata:Metadata={
  title:'Ładowanie pojazdów elektrycznych B2B | PROFESJA PREMIUM LIMITED',
  description:'Ładowanie pojazdów elektrycznych B2B: stacje AC/DC, zarządzanie mocą, infrastruktura, monitoring i integracja z OZE dla przedsiębiorstw. Dobór w modelu RFQ po weryfikacji projektu, parametrów, dokumentacji, ceny i dostępności konkretnej oferty.',
  alternates:{canonical:'/sklepy/18-ladowanie-pojazdow-elektrycznych'},
  robots:{index:true,follow:true},
  openGraph:{
    title:'Ładowanie pojazdów elektrycznych B2B | PROFESJA PREMIUM LIMITED',
    description:'Katalog RFQ infrastruktury ładowania EV dla przedsiębiorstw, z weryfikacją projektu, parametrów, zgodności i dokumentacji konkretnej oferty.',
    type:'website'
  }
};

export default function Page(){return <StoreCatalogTemplate store={STORE_18}/>}
