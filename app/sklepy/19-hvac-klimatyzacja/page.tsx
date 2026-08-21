import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORE_19} from '../../../lib/store19';

export const metadata:Metadata={
  title:'HVAC i klimatyzacja B2B | PROFESJA PREMIUM LIMITED',
  description:'HVAC i klimatyzacja B2B: klimatyzacja komercyjna, wentylacja, świeże powietrze, chłodzenie, automatyka i jakość powietrza. Dobór w modelu RFQ po weryfikacji projektu, parametrów, dokumentacji, ceny i dostępności konkretnej oferty.',
  alternates:{canonical:'/sklepy/19-hvac-klimatyzacja'},
  robots:{index:true,follow:true},
  openGraph:{
    title:'HVAC i klimatyzacja B2B | PROFESJA PREMIUM LIMITED',
    description:'Katalog RFQ systemów HVAC dla przedsiębiorstw, z weryfikacją projektu, parametrów, zgodności i dokumentacji konkretnej oferty.',
    type:'website'
  }
};

export default function Page(){return <StoreCatalogTemplate store={STORE_19}/>}
