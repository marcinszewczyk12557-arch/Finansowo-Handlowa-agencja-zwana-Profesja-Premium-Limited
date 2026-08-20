import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORES_02_06} from '../../../lib/stores02to06';

export const metadata:Metadata={
 title:'Monitory i wyświetlacze B2B | PROFESJA PREMIUM LIMITED',
 description:'Monitory profesjonalne, digital signage, ekrany interaktywne, ściany wideo i wyświetlacze przemysłowe w procesie sourcingu, Product Compliance i RFQ B2B.',
 alternates:{canonical:'/sklepy/04-monitory-wyswietlacze'},
 robots:{index:true,follow:true},
 openGraph:{title:'Monitory i wyświetlacze B2B | PROFESJA PREMIUM LIMITED',description:'Katalog zapytań B2B dla monitorów profesjonalnych, wyświetlaczy komercyjnych i infrastruktury obrazu.',type:'website'}
};

export default function Page(){return <StoreCatalogTemplate store={STORES_02_06[2]}/>}
