import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORE_23} from '../../../lib/store23';

export const metadata:Metadata={
  title:'Narzędzia przemysłowe B2B | PROFESJA PREMIUM LIMITED',
  description:'Profesjonalne narzędzia dla przedsiębiorstw: elektronarzędzia, pneumatyka i hydraulika, narzędzia ręczne i dynamometryczne, obróbka materiału oraz wyposażenie stanowisk. Dobór RFQ po analizie procesu i weryfikacji parametrów, dokumentacji, ceny i dostępności.',
  alternates:{canonical:'/sklepy/23-narzedzia-przemyslowe'},
  robots:{index:true,follow:true},
  openGraph:{
    title:'Narzędzia przemysłowe B2B | PROFESJA PREMIUM LIMITED',
    description:'Katalog RFQ profesjonalnych narzędzi przemysłowych, z weryfikacją konkretnej konfiguracji, zastosowania, bezpieczeństwa i dokumentacji.',
    type:'website'
  }
};

export default function Page(){return <StoreCatalogTemplate store={STORE_23}/>}
