import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORES_02_06} from '../../../lib/stores02to06';

export const metadata:Metadata={
 title:'Komputery stacjonarne i mini PC B2B | PROFESJA PREMIUM LIMITED',
 description:'Stacje robocze, komputery biznesowe, mini PC, fanless PC i edge computing w profesjonalnym procesie sourcingu, weryfikacji dokumentacji i RFQ B2B.',
 alternates:{canonical:'/sklepy/03-komputery-stacjonarne-mini-pc'},
 robots:{index:true,follow:true},
 openGraph:{title:'Komputery stacjonarne i mini PC B2B | PROFESJA PREMIUM LIMITED',description:'Profesjonalny katalog zapytań B2B: stacje robocze, mini PC, komputery przemysłowe i infrastruktura stanowisk.',type:'website'}
};

export default function Page(){return <StoreCatalogTemplate store={STORES_02_06[1]}/>}
