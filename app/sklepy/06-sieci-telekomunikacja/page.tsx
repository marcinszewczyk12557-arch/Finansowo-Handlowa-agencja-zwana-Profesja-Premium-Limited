import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORES_02_06} from '../../../lib/stores02to06';

export const metadata:Metadata={
 title:'Sieci i telekomunikacja B2B | PROFESJA PREMIUM LIMITED',
 description:'Sieci LAN/WAN, Wi-Fi, SD-WAN, VoIP, infrastruktura światłowodowa i telekomunikacyjna w procesie sourcingu, Product Compliance i zapytania B2B.',
 alternates:{canonical:'/sklepy/06-sieci-telekomunikacja'},
 robots:{index:true,follow:true},
 openGraph:{title:'Sieci i telekomunikacja B2B | PROFESJA PREMIUM LIMITED',description:'Profesjonalny katalog zapytań B2B dla sieci LAN/WAN, Wi-Fi, VoIP i infrastruktury transmisyjnej.',type:'website'}
};

export default function Page(){return <StoreCatalogTemplate store={STORES_02_06[4]}/>}
