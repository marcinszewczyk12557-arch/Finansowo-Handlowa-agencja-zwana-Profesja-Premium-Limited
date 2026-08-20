import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORE_08} from '../../../lib/store08';

export const metadata:Metadata={
  title:'Drukarki i urządzenia biurowe B2B | PROFESJA PREMIUM LIMITED',
  description:'Drukarki i urządzenia biurowe B2B: drukarki laserowe, urządzenia wielofunkcyjne, skanery dokumentowe, druk etykiet, niszczarki i wyposażenie obiegu dokumentów z kwalifikacją sourcingu i Product Compliance.',
  alternates:{canonical:'/sklepy/08-drukarki-urzadzenia-biurowe'},
  robots:{index:true,follow:true},
  openGraph:{
    title:'Drukarki i urządzenia biurowe B2B | PROFESJA PREMIUM LIMITED',
    description:'Profesjonalny katalog RFQ dla druku, skanowania, digitalizacji i obiegu dokumentów w przedsiębiorstwach.',
    type:'website'
  }
};

export default function Page(){return <StoreCatalogTemplate store={STORE_08}/>}
