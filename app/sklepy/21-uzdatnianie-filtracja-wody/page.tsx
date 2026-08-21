import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORE_21} from '../../../lib/store21';

export const metadata:Metadata={
  title:'Uzdatnianie i filtracja wody B2B | PROFESJA PREMIUM LIMITED',
  description:'Systemy uzdatniania i filtracji wody dla przedsiębiorstw: filtracja procesowa, zmiękczanie, RO, demineralizacja, dezynfekcja i monitoring. Dobór RFQ po analizie wody i weryfikacji parametrów, dokumentacji, ceny i dostępności.',
  alternates:{canonical:'/sklepy/21-uzdatnianie-filtracja-wody'},
  robots:{index:true,follow:true},
  openGraph:{
    title:'Uzdatnianie i filtracja wody B2B | PROFESJA PREMIUM LIMITED',
    description:'Katalog RFQ systemów uzdatniania, filtracji i monitoringu wody dla zastosowań profesjonalnych, z weryfikacją konkretnej konfiguracji i dokumentacji.',
    type:'website'
  }
};

export default function Page(){return <StoreCatalogTemplate store={STORE_21}/>}
