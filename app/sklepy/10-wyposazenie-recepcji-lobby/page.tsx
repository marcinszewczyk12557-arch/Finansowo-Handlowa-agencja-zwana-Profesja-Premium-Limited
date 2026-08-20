import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORE_10} from '../../../lib/store10';

export const metadata:Metadata={
  title:'Wyposażenie recepcji i lobby B2B | PROFESJA PREMIUM LIMITED',
  description:'Profesjonalne wyposażenie recepcji i lobby B2B: stanowiska obsługi, strefy oczekiwania, wayfinding, kioski samoobsługowe, digital signage i wyposażenie reprezentacyjne. Dobór w modelu RFQ z weryfikacją konkretnej oferty.',
  alternates:{canonical:'/sklepy/10-wyposazenie-recepcji-lobby'},
  robots:{index:true,follow:true},
  openGraph:{
    title:'Wyposażenie recepcji i lobby B2B | PROFESJA PREMIUM LIMITED',
    description:'Katalog RFQ wyposażenia recepcji, lobby i stref obsługi gości dla przedsiębiorstw i obiektów komercyjnych.',
    type:'website'
  }
};

export default function Page(){return <StoreCatalogTemplate store={STORE_10}/>}
