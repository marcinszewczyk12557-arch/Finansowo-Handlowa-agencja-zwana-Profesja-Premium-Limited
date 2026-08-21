import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORE_20} from '../../../lib/store20';

export const metadata:Metadata={
  title:'Pompy ciepła B2B | PROFESJA PREMIUM LIMITED',
  description:'Pompy ciepła B2B: powietrze–woda, systemy gruntowe, układy kaskadowe i hybrydowe, hydraulika oraz sterowanie. Dobór w modelu RFQ po audycie projektu i weryfikacji parametrów, dokumentacji, ceny i dostępności konkretnej oferty.',
  alternates:{canonical:'/sklepy/20-pompy-ciepla'},
  robots:{index:true,follow:true},
  openGraph:{
    title:'Pompy ciepła B2B | PROFESJA PREMIUM LIMITED',
    description:'Katalog RFQ pomp ciepła i systemów grzewczo-chłodzących dla przedsiębiorstw, z weryfikacją projektu, parametrów i dokumentacji konkretnej oferty.',
    type:'website'
  }
};

export default function Page(){return <StoreCatalogTemplate store={STORE_20}/>}
