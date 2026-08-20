import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORE_11} from '../../../lib/store11';

export const metadata:Metadata={
  title:'Oświetlenie profesjonalne B2B | PROFESJA PREMIUM LIMITED',
  description:'Profesjonalne oświetlenie B2B dla biur, przemysłu, magazynów, infrastruktury i architektury: dobór w modelu RFQ z weryfikacją parametrów i dokumentacji konkretnej oferty.',
  alternates:{canonical:'/sklepy/11-oswietlenie-profesjonalne'},
  robots:{index:true,follow:true},
  openGraph:{
    title:'Oświetlenie profesjonalne B2B | PROFESJA PREMIUM LIMITED',
    description:'Katalog RFQ oświetlenia profesjonalnego i systemów sterowania dla przedsiębiorstw, obiektów komercyjnych, przemysłu i infrastruktury.',
    type:'website'
  }
};

export default function Page(){return <StoreCatalogTemplate store={STORE_11}/>}
