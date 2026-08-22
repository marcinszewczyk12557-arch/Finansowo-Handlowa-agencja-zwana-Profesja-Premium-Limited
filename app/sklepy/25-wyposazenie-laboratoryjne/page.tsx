import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORE_25} from '../../../lib/store25';

export const metadata:Metadata={
  title:'Wyposażenie laboratoryjne B2B | PROFESJA PREMIUM LIMITED',
  description:'Wyposażenie i aparatura laboratoryjna dla przedsiębiorstw, R&D i kontroli jakości. Ścieżka RFQ z weryfikacją zastosowania, parametrów, dokumentacji, ceny i dostępności.',
  alternates:{canonical:'/sklepy/25-wyposazenie-laboratoryjne'},
  robots:{index:true,follow:true},
  openGraph:{
    title:'Wyposażenie laboratoryjne B2B | PROFESJA PREMIUM LIMITED',
    description:'Katalog RFQ wyposażenia laboratoryjnego z evidence-first weryfikacją konkretnego modelu, parametrów i dokumentacji.',
    type:'website'
  }
};

export default function Page(){return <StoreCatalogTemplate store={STORE_25}/>}
