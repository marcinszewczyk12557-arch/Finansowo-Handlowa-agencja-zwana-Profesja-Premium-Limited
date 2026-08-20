import type {Metadata} from 'next';
import StoreCatalogTemplate from '../../../components/StoreCatalogTemplate';
import {STORES_02_06} from '../../../lib/stores02to06';

export const metadata:Metadata={
 title:'Cyberbezpieczeństwo sprzętowe B2B | PROFESJA PREMIUM LIMITED',
 description:'Sprzętowe cyberbezpieczeństwo B2B: firewalle, VPN, HSM, uwierzytelnianie, IDS/IPS, ochrona DDoS, bezpieczeństwo OT/ICS oraz sprzętowa ochrona danych w procesie sourcingu i Product Compliance.',
 alternates:{canonical:'/sklepy/07-cyberbezpieczenstwo-sprzetowe'},
 robots:{index:true,follow:true},
 openGraph:{title:'Cyberbezpieczeństwo sprzętowe B2B | PROFESJA PREMIUM LIMITED',description:'Profesjonalny katalog RFQ dla sprzętowego cyberbezpieczeństwa przedsiębiorstw i infrastruktury OT/IT.',type:'website'}
};

export default function Page(){return <StoreCatalogTemplate store={STORES_02_06[5]}/>}
