import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORE_15} from '../../../lib/store15';

export const metadata:Metadata={
  title:'Systemy alarmowe i przeciwpożarowe B2B | PROFESJA PREMIUM LIMITED',
  description:'Systemy alarmowe i przeciwpożarowe B2B: centrale, detekcja, sygnalizacja, zasilanie i integracja dla obiektów przedsiębiorstw. Dobór w modelu RFQ po weryfikacji projektu, parametrów, przeznaczenia i dokumentacji konkretnej oferty.',
  alternates:{canonical:'/sklepy/15-systemy-alarmowe-przeciwpozarowe'},
  robots:{index:true,follow:true},
  openGraph:{
    title:'Systemy alarmowe i przeciwpożarowe B2B | PROFESJA PREMIUM LIMITED',
    description:'Katalog RFQ systemów alarmowych, detekcji zagrożeń i rozwiązań przeciwpożarowych dla przedsiębiorstw.',
    type:'website'
  }
};

export default function Page(){return <StoreCatalogTemplate store={STORE_15}/>}
