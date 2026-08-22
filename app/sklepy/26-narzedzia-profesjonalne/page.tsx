import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORE_26} from '../../../lib/store26';

export const metadata:Metadata={
  title:'Narzędzia profesjonalne B2B | PROFESJA PREMIUM LIMITED',
  description:'Profesjonalne narzędzia dla produkcji, utrzymania ruchu, serwisu, budownictwa i instalacji. Ścieżka RFQ z weryfikacją zastosowania, parametrów, dokumentacji, ceny i dostępności.',
  alternates:{canonical:'/sklepy/26-narzedzia-profesjonalne'},
  robots:{index:true,follow:true},
  openGraph:{
    title:'Narzędzia profesjonalne B2B | PROFESJA PREMIUM LIMITED',
    description:'Katalog RFQ narzędzi profesjonalnych z evidence-first weryfikacją konkretnego modelu, parametrów i dokumentacji.',
    type:'website'
  }
};

export default function Page(){return <StoreCatalogTemplate store={STORE_26}/>}
