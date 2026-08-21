import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORE_24} from '../../../lib/store24';

export const metadata:Metadata={
  title:'Systemy pomiarowe i metrologia B2B | PROFESJA PREMIUM LIMITED',
  description:'Systemy pomiarowe i metrologiczne dla przedsiębiorstw, laboratoriów i kontroli jakości. Dobór RFQ po analizie procesu i weryfikacji parametrów, dokładności, dokumentacji, ceny i dostępności.',
  alternates:{canonical:'/sklepy/24-systemy-pomiarowe-metrologia'},
  robots:{index:true,follow:true},
  openGraph:{
    title:'Systemy pomiarowe i metrologia B2B | PROFESJA PREMIUM LIMITED',
    description:'Katalog RFQ aparatury pomiarowej i metrologicznej z evidence-first weryfikacją konkretnej konfiguracji, parametrów i dokumentacji.',
    type:'website'
  }
};

export default function Page(){return <StoreCatalogTemplate store={STORE_24}/>}
