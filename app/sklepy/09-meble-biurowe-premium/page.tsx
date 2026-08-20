import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORE_09} from '../../../lib/store09';

export const metadata:Metadata={
  title:'Meble biurowe premium B2B | PROFESJA PREMIUM LIMITED',
  description:'Profesjonalne meble biurowe B2B: ergonomiczne stanowiska pracy, gabinety, sale konferencyjne, akustyka, archiwizacja i strefy reprezentacyjne. Dobór w modelu RFQ z weryfikacją parametrów konkretnej oferty.',
  alternates:{canonical:'/sklepy/09-meble-biurowe-premium'},
  robots:{index:true,follow:true},
  openGraph:{
    title:'Meble biurowe premium B2B | PROFESJA PREMIUM LIMITED',
    description:'Katalog RFQ profesjonalnych mebli i systemów wyposażenia przestrzeni pracy dla przedsiębiorstw.',
    type:'website'
  }
};

export default function Page(){return <StoreCatalogTemplate store={STORE_09}/>}
