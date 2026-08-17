import type { MedicalEvidence } from '../lib/medicalEvidenceGate';

export type MedicalOfferStatus = 'verification_in_progress' | 'verified';

export interface MedicalOfferPresentation {
  headline: string;
  useCases: string[];
  verificationNote: string;
}

export interface MedicalOffer {
  id: string;
  family: string;
  category: string;
  targetMarket: 'EU';
  requiresNotifiedBodyCertificate: boolean;
  status: MedicalOfferStatus;
  presentation: MedicalOfferPresentation;
  evidence: MedicalEvidence[];
}

/**
 * BIOVERA homepage shortlist.
 *
 * These are product families, not claims about a particular manufacturer or
 * model. They intentionally start with an empty evidence set. A concrete
 * supplier/model may only be promoted to `verified` after product-specific
 * evidence has passed the BIOVERA evidence gate.
 */
export const medicalOffers: MedicalOffer[] = [
  {
    id: 'biov-era-patient-monitoring',
    family: 'Wieloparametrowy monitor pacjenta',
    category: 'Monitoring pacjenta',
    targetMarket: 'EU',
    requiresNotifiedBodyCertificate: true,
    status: 'verification_in_progress',
    presentation: {
      headline: 'Monitorowanie parametrów życiowych dla placówek medycznych',
      useCases: ['oddziały szpitalne', 'SOR i izby przyjęć', 'sale pooperacyjne'],
      verificationNote: 'Model, producent, klasa wyrobu i dokumentacja UE wymagają weryfikacji przed ofertą wiążącą.',
    },
    evidence: [],
  },
  {
    id: 'biov-era-ultrasound',
    family: 'System ultrasonograficzny klasy premium',
    category: 'Diagnostyka obrazowa',
    targetMarket: 'EU',
    requiresNotifiedBodyCertificate: true,
    status: 'verification_in_progress',
    presentation: {
      headline: 'Diagnostyka ultrasonograficzna dla gabinetów i szpitali',
      useCases: ['radiologia', 'POCUS', 'ginekologia i położnictwo'],
      verificationNote: 'Nie publikujemy statusu CE/ISO bez dokumentów właściwych dla konkretnego modelu i wariantu.',
    },
    evidence: [],
  },
  {
    id: 'biov-era-anesthesia',
    family: 'Stacja anestezjologiczna',
    category: 'Anestezjologia',
    targetMarket: 'EU',
    requiresNotifiedBodyCertificate: true,
    status: 'verification_in_progress',
    presentation: {
      headline: 'Zintegrowana stacja do pracy na bloku operacyjnym',
      useCases: ['blok operacyjny', 'chirurgia jednego dnia', 'sale zabiegowe'],
      verificationNote: 'Wymagana weryfikacja producenta, konfiguracji, klasy wyrobu i kompletności dokumentacji zgodności.',
    },
    evidence: [],
  },
  {
    id: 'biov-era-ventilator',
    family: 'Respirator intensywnej terapii',
    category: 'Intensywna terapia',
    targetMarket: 'EU',
    requiresNotifiedBodyCertificate: true,
    status: 'verification_in_progress',
    presentation: {
      headline: 'Wsparcie oddechowe dla środowiska intensywnej terapii',
      useCases: ['OIOM', 'transport wewnątrzszpitalny', 'opieka pooperacyjna'],
      verificationNote: 'Parametry kliniczne i dopuszczenie do rynku UE muszą zostać potwierdzone dla wybranego urządzenia.',
    },
    evidence: [],
  },
  {
    id: 'biov-era-digital-xray',
    family: 'Cyfrowy system RTG',
    category: 'Diagnostyka obrazowa',
    targetMarket: 'EU',
    requiresNotifiedBodyCertificate: true,
    status: 'verification_in_progress',
    presentation: {
      headline: 'Cyfrowa radiografia dla pracowni diagnostycznych',
      useCases: ['radiologia ogólna', 'diagnostyka urazowa', 'pracownie szpitalne'],
      verificationNote: 'Oferta wymaga odrębnej kontroli wymagań dla urządzeń emitujących promieniowanie i lokalnych obowiązków instalacyjnych.',
    },
    evidence: [],
  },
  {
    id: 'biov-era-infusion',
    family: 'System pomp infuzyjnych',
    category: 'Terapia infuzyjna',
    targetMarket: 'EU',
    requiresNotifiedBodyCertificate: true,
    status: 'verification_in_progress',
    presentation: {
      headline: 'Modułowe pompy infuzyjne do precyzyjnego dawkowania',
      useCases: ['OIOM', 'oddziały szpitalne', 'opieka okołooperacyjna'],
      verificationNote: 'Kompatybilność materiałów eksploatacyjnych i dokumentacja wyrobu wymagają potwierdzenia przed zamówieniem.',
    },
    evidence: [],
  },
  {
    id: 'biov-era-defibrillator',
    family: 'Defibrylator z funkcją monitorowania',
    category: 'Ratownictwo i kardiologia',
    targetMarket: 'EU',
    requiresNotifiedBodyCertificate: true,
    status: 'verification_in_progress',
    presentation: {
      headline: 'Defibrylacja i monitoring dla zespołów medycznych',
      useCases: ['SOR', 'zespoły ratownictwa', 'oddziały zabiegowe'],
      verificationNote: 'Status regulacyjny i zakres funkcji muszą odpowiadać konkretnemu modelowi i rynkowi docelowemu.',
    },
    evidence: [],
  },
  {
    id: 'biov-era-ecg',
    family: 'Cyfrowy elektrokardiograf',
    category: 'Kardiologia',
    targetMarket: 'EU',
    requiresNotifiedBodyCertificate: true,
    status: 'verification_in_progress',
    presentation: {
      headline: 'Rejestracja EKG dla diagnostyki ambulatoryjnej i szpitalnej',
      useCases: ['kardiologia', 'POZ i AOS', 'oddziały szpitalne'],
      verificationNote: 'Algorytmy interpretacyjne nie są opisywane jako certyfikowane bez dowodu dla danego oprogramowania i wersji.',
    },
    evidence: [],
  },
  {
    id: 'biov-era-sterilizer',
    family: 'Autoklaw medyczny',
    category: 'Sterylizacja',
    targetMarket: 'EU',
    requiresNotifiedBodyCertificate: false,
    status: 'verification_in_progress',
    presentation: {
      headline: 'Sterylizacja narzędzi dla placówek medycznych',
      useCases: ['gabinety zabiegowe', 'stomatologia', 'centralne i lokalne sterylizatornie'],
      verificationNote: 'Przed ofertą potwierdzamy przeznaczenie, normy techniczne, dokumentację producenta i wymagania instalacyjne.',
    },
    evidence: [],
  },
  {
    id: 'biov-era-operating-table',
    family: 'Elektrohydrauliczny stół operacyjny',
    category: 'Blok operacyjny',
    targetMarket: 'EU',
    requiresNotifiedBodyCertificate: true,
    status: 'verification_in_progress',
    presentation: {
      headline: 'Konfigurowalny stół operacyjny dla wielu specjalizacji',
      useCases: ['chirurgia ogólna', 'ortopedia', 'zabiegi specjalistyczne'],
      verificationNote: 'Nośność, akcesoria, kompatybilność obrazowa i dokumentacja zgodności są weryfikowane dla konfiguracji końcowej.',
    },
    evidence: [],
  },
];
