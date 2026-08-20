import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORE_12} from '../../../lib/store12';

export const metadata:Metadata={
  title:'Smart Home i automatyka budynkowa B2B | PROFESJA PREMIUM LIMITED',
  description:'Automatyka budynkowa B2B: sterowanie, BMS, HVAC, energia, oświetlenie, osłony i integracja protokołów. Dobór w modelu RFQ po weryfikacji parametrów i dokumentacji konkretnej oferty.',
  alternates:{canonical:'/sklepy/12-smart-home-automatyka-budynkowa'},
  robots:{index:true,follow:true},
  openGraph:{
    title:'Smart Home i automatyka budynkowa B2B | PROFESJA PREMIUM LIMITED',
    description:'Katalog RFQ systemów automatyki budynkowej dla przedsiębiorstw, obiektów komercyjnych, przemysłu i infrastruktury.',
    type:'website'
  }
};

export default function Page(){return <StoreCatalogTemplate store={STORE_12}/>}
