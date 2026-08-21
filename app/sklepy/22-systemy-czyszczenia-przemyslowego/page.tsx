import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORE_22} from '../../../lib/store22';

export const metadata:Metadata={
  title:'Systemy czyszczenia przemysłowego B2B | PROFESJA PREMIUM LIMITED',
  description:'Profesjonalne systemy czyszczenia dla przedsiębiorstw: mycie wysokociśnieniowe, maszyny do posadzek, odkurzanie i odpylanie, technologie specjalistyczne oraz automatyka. Dobór RFQ po analizie procesu i weryfikacji parametrów, dokumentacji, ceny i dostępności.',
  alternates:{canonical:'/sklepy/22-systemy-czyszczenia-przemyslowego'},
  robots:{index:true,follow:true},
  openGraph:{
    title:'Systemy czyszczenia przemysłowego B2B | PROFESJA PREMIUM LIMITED',
    description:'Katalog RFQ profesjonalnych maszyn i systemów czyszczenia przemysłowego, z weryfikacją konkretnej konfiguracji, zastosowania i dokumentacji.',
    type:'website'
  }
};

export default function Page(){return <StoreCatalogTemplate store={STORE_22}/>}
