import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORES_02_06} from '../../../lib/stores02to06';

export const metadata:Metadata={
 title:'Laptopy i komputery mobilne B2B | PROFESJA PREMIUM LIMITED',
 description:'Laptopy biznesowe, mobilne stacje robocze, urządzenia rugged, tablety i infrastruktura mobilna w procesie sourcingu, weryfikacji i zapytania B2B.',
 alternates:{canonical:'/sklepy/02-laptopy-komputery-mobilne'},
 robots:{index:true,follow:true},
 openGraph:{title:'Laptopy i komputery mobilne B2B | PROFESJA PREMIUM LIMITED',description:'Profesjonalny katalog zapytań B2B: urządzenia mobilne, rugged, stacje robocze i infrastruktura.',type:'website'}
};

export default function Page(){return <StoreCatalogTemplate store={STORES_02_06[0]}/>}
