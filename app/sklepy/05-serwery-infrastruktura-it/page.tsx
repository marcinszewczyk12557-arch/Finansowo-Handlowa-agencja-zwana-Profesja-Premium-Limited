import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORES_02_06} from '../../../lib/stores02to06';

export const metadata:Metadata={
 title:'Serwery i infrastruktura IT B2B | PROFESJA PREMIUM LIMITED',
 description:'Serwery rack, tower, blade, GPU, storage, backup i infrastruktura centrum danych w procesie sourcingu, Product Compliance i zapytania B2B.',
 alternates:{canonical:'/sklepy/05-serwery-infrastruktura-it'},
 robots:{index:true,follow:true},
 openGraph:{title:'Serwery i infrastruktura IT B2B | PROFESJA PREMIUM LIMITED',description:'Profesjonalny katalog zapytań B2B dla serwerów, storage i infrastruktury centrum danych.',type:'website'}
};

export default function Page(){return <StoreCatalogTemplate store={STORES_02_06[3]}/>}
