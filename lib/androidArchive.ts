/**
 * Android transaction archive manifest.
 *
 * Produces a structured manifest describing the folder layout for an
 * Android-side export of one transaction package.
 *
 * Target path on device (user-selected destination via Storage Access Framework):
 *   PROFESJA PREMIUM LIMITED/INFORMACJE TRANSAKCYJNE/[TRANSACTION_ID_CLIENT]/
 *     ├── oferta/
 *     ├── akceptacje/
 *     ├── kyc-kyb/
 *     ├── umowy/
 *     ├── zgodnosc-produktu/
 *     ├── zamowienie/
 *     ├── platnosci/
 *     ├── logistyka-tracking/
 *     ├── faktury/
 *     ├── rma/
 *     └── audyt-zamkniecia/
 *
 * IMPORTANT: The Android client must use the Storage Access Framework
 * (SAF / ACTION_OPEN_DOCUMENT_TREE) to request only the user-selected folder.
 * Broad unrestricted device storage access (MANAGE_EXTERNAL_STORAGE / READ/WRITE_EXTERNAL_STORAGE
 * targeting API 29+) must NOT be requested.
 *
 * This module only produces the manifest JSON — actual file I/O is performed
 * on the Android client using the SAF URIs returned by the user's folder picker.
 */

import { prisma } from './prisma';

export interface ArchiveFolder {
  name:        string;
  description: string;
  files:       ArchiveFile[];
}

export interface ArchiveFile {
  suggestedName: string;
  description:   string;
  available:     boolean;
  /** Server-side reference (e.g. DB record ID, URL path) — not a device path */
  serverRef?:    string;
}

export interface ArchiveManifest {
  schemaVersion:    string;
  transactionId:    string;
  offerNumber:      string;
  exportedAt:       string;
  rootPath:         string;
  androidExportNote:string;
  folders:          ArchiveFolder[];
}

export async function buildArchiveManifest(offerId: number): Promise<ArchiveManifest> {
  const offer = await prisma.offer.findUnique({
    where: { id: offerId },
    include: {
      order:       true,
      formalities: true,
      invoices:    { include: { factoringPackage: true } },
    },
  });
  if (!offer) throw new Error('OFFER_NOT_FOUND');

  const txId  = offer.number.replace(/[^A-Z0-9_-]/gi, '_').toUpperCase();
  const order = offer.order;
  const inv   = offer.invoices[0] ?? null;

  const folders: ArchiveFolder[] = [
    {
      name: 'oferta',
      description: 'Oferta handlowa B2B',
      files: [
        {
          suggestedName: `oferta_${txId}.pdf`,
          description:   'Wycena lub oferta handlowa',
          available:     Boolean(order?.commercialOffer),
          serverRef:     order?.commercialOffer ?? undefined,
        },
      ],
    },
    {
      name: 'akceptacje',
      description: 'Akceptacje i zatwierdzenia',
      files: [
        {
          suggestedName: `akceptacja_partnera_finansujacego_${txId}.pdf`,
          description:   'Decyzja uprawnionego partnera finansującego (jeśli dotyczy)',
          available:     false,
        },
      ],
    },
    {
      name: 'kyc-kyb',
      description: 'Dokumenty KYC/KYB klienta',
      files: [
        {
          suggestedName: `kyc_kyb_${txId}.pdf`,
          description:   'Weryfikacja tożsamości i firmy klienta',
          available:     false,
        },
      ],
    },
    {
      name: 'umowy',
      description: 'Umowy i formalności',
      files: [
        {
          suggestedName: `formalnosci_${txId}.pdf`,
          description:   'Pakiet formalności transakcji',
          available:     Boolean(offer.formalities),
          serverRef:     offer.formalities ? `/api/owner/offers/${offerId}/formalities` : undefined,
        },
      ],
    },
    {
      name: 'zgodnosc-produktu',
      description: 'Dokumenty zgodności produktu',
      files: [
        {
          suggestedName: `zgodnosc_produkt_${txId}.pdf`,
          description:   'Certyfikaty i deklaracje zgodności produktu',
          available:     false,
        },
      ],
    },
    {
      name: 'zamowienie',
      description: 'Dokumenty zamówienia',
      files: [
        {
          suggestedName: `zamowienie_${txId}.pdf`,
          description:   'Potwierdzenie zamówienia',
          available:     Boolean(order?.orderConfirmation),
          serverRef:     order?.orderConfirmation ?? undefined,
        },
        {
          suggestedName: `dokument_realizacji_${txId}.pdf`,
          description:   'Dokument realizacji',
          available:     Boolean(order?.fulfillmentDocument),
          serverRef:     order?.fulfillmentDocument ?? undefined,
        },
      ],
    },
    {
      name: 'platnosci',
      description: 'Potwierdzenia płatności',
      files: [
        {
          suggestedName: `potwierdzenie_platnosci_${txId}.pdf`,
          description:   'Potwierdzenie zapłaty faktury',
          available:     Boolean(inv?.paidAt),
        },
      ],
    },
    {
      name: 'logistyka-tracking',
      description: 'Dokumenty logistyczne i śledzenie przesyłki',
      files: [
        {
          suggestedName: `dokument_transportowy_${txId}.pdf`,
          description:   'List przewozowy / dokument transportowy',
          available:     Boolean(order?.transportDocument),
          serverRef:     order?.transportDocument ?? undefined,
        },
        {
          suggestedName: `tracking_${txId}.txt`,
          description:   'Numer śledzenia przesyłki',
          available:     Boolean(order?.trackingNumber),
          serverRef:     order?.trackingUrl ?? order?.trackingNumber ?? undefined,
        },
      ],
    },
    {
      name: 'faktury',
      description: 'Faktury',
      files: inv
        ? [
            {
              suggestedName: `faktura_${inv.number.replace(/\//g, '_')}_${txId}.pdf`,
              description:   `Faktura ${inv.number} — ${inv.grossAmount} ${inv.currency}`,
              available:     inv.status === 'ISSUED',
              serverRef:     `/api/owner/invoices/${inv.id}`,
            },
          ]
        : [
            {
              suggestedName: `faktura_${txId}.pdf`,
              description:   'Faktura (brak wystawionej faktury)',
              available:     false,
            },
          ],
    },
    {
      name: 'rma',
      description: 'Dokumenty RMA i reklamacji',
      files: [
        {
          suggestedName: `rma_${txId}.pdf`,
          description:   'Zgłoszenie RMA lub protokół reklamacyjny (jeśli dotyczy)',
          available:     false,
        },
      ],
    },
    {
      name: 'audyt-zamkniecia',
      description: 'Audyt zamknięcia sprawy',
      files: [
        {
          suggestedName: `audyt_zamkniecia_${txId}.json`,
          description:   'Manifest archiwum i podsumowanie zamknięcia',
          available:     true,
          serverRef:     `/api/owner/offers/${offerId}/archive-manifest`,
        },
      ],
    },
  ];

  return {
    schemaVersion:     '1.0',
    transactionId:     txId,
    offerNumber:       offer.number,
    exportedAt:        new Date().toISOString(),
    rootPath:          `PROFESJA PREMIUM LIMITED/INFORMACJE TRANSAKCYJNE/${txId}/`,
    androidExportNote: 'Ten manifest opisuje strukturę eksportu. Zapis plików na urządzeniu Android musi odbywać się przez Storage Access Framework (SAF, ACTION_OPEN_DOCUMENT_TREE) z wybranym przez użytkownika folderem docelowym. Aplikacja NIE może żądać nieograniczonego dostępu do pamięci urządzenia.',
    folders,
  };
}
