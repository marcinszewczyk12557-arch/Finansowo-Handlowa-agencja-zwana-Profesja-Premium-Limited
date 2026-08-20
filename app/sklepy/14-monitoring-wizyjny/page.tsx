import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORE_14} from '../../../lib/store14';

export const metadata:Metadata={
  title:'Monitoring wizyjny B2B | PROFESJA PREMIUM LIMITED',
  description:'Monitoring wizyjny B2B: kamery IP, NVR, VMS, analityka obrazu, transmisja PoE i światłowodowa oraz wyposażenie centrów dozoru. Dobór w modelu RFQ po weryfikacji parametrów, przeznaczenia, prywatności i dokumentacji konkretnej oferty.',
  alternates:{canonical:'/sklepy/14-monitoring-wizyjny'},
  robots:{index:true,follow:true},
  openGraph:{
    title:'Monitoring wizyjny B2B | PROFESJA PREMIUM LIMITED',
    description:'Katalog RFQ monitoringu wizyjnego dla przedsiębiorstw, magazynów, przemysłu, obiektów biurowych, handlowych i terenów zewnętrznych.',
    type:'website'
  }
};

export default function Page(){return <StoreCatalogTemplate store={STORE_14}/>}
