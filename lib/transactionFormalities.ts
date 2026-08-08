import { prisma } from './prisma';

export const TRANSACTION_FORMALITIES_SOURCE = {
  version: 'FORMALNOSCI-PPL-2026-08-08',
  name: 'formalności projektu Profesja Premium Limited.pdf',
} as const;

/**
 * Synchronizuje wyłącznie fakty wynikające z czynności negocjacyjno-transakcyjnych.
 * Ta funkcja NIGDY nie ustawia zgód ani podpisu jako zaakceptowanych.
 */
export async function syncTransactionFormalities(
  offerId: number,
  options?: { financingRequested?: boolean; financingAmount?: string | null },
) {
  const offer = await prisma.offer.findUnique({
    where: { id: offerId },
    include: { order: true, automation: true, formalities: true },
  });
  if (!offer) throw new Error('OFFER_NOT_FOUND');

  const financingRequested = options?.financingRequested
    ?? offer.automation?.financingRequested
    ?? offer.formalities?.financingRequested
    ?? false;
  const financingAmount = options?.financingAmount
    ?? offer.automation?.financingAmount
    ?? offer.formalities?.financingAmount
    ?? null;

  const negotiationStatus = offer.order
    ? 'ORDER_FACTS_SYNCED'
    : offer.status === 'ACCEPTED'
      ? 'AWAITING_FORMAL_ACCEPTANCE'
      : offer.status === 'OFFER_SENT'
        ? 'OFFER_UNDER_REVIEW'
        : 'COLLECTING_FACTS';

  const now = new Date();
  const data = {
    sourceDocumentVersion: TRANSACTION_FORMALITIES_SOURCE.version,
    sourceDocumentName: TRANSACTION_FORMALITIES_SOURCE.name,
    productSnapshot: offer.order?.product ?? offer.product ?? null,
    quantitySnapshot: offer.order?.quantity ?? offer.quantity ?? null,
    marketSnapshot: offer.market ?? null,
    valueSnapshot: offer.order?.amount ?? offer.budget ?? null,
    financingRequested,
    financingAmount,
    shippingMethodSnapshot: offer.order?.shippingMethod ?? null,
    shippingAddressSnapshot: offer.order?.shippingAddress ?? null,
    estimatedDeliverySnapshot: offer.order?.estimatedDelivery ?? null,
    negotiationStatus,
    autoFilledAt: now,
    lastNegotiationAt: now,
  };

  return prisma.transactionFormalities.upsert({
    where: { offerId },
    create: {
      offerId,
      ...data,
      clientDeclarationStatus: 'PENDING',
      insuranceConsentStatus: 'PENDING',
      shippingConsentStatus: 'PENDING',
      businessUseConsentStatus: 'PENDING',
      interestConsentStatus: 'PENDING',
      intermediationConsentStatus: 'PENDING',
      monthlySettlementStatus: 'PENDING',
      earlyTerminationStatus: 'PENDING',
      finalSignatureStatus: 'PENDING',
    },
    update: data,
  });
}

export function formalitiesReadyForExecution(formalities: {
  clientDeclarationStatus: string;
  insuranceConsentStatus: string;
  shippingConsentStatus: string;
  businessUseConsentStatus: string;
  interestConsentStatus: string;
  intermediationConsentStatus: string;
  monthlySettlementStatus: string;
  earlyTerminationStatus: string;
  finalSignatureStatus: string;
}) {
  const required = [
    formalities.clientDeclarationStatus,
    formalities.insuranceConsentStatus,
    formalities.shippingConsentStatus,
    formalities.businessUseConsentStatus,
    formalities.interestConsentStatus,
    formalities.intermediationConsentStatus,
    formalities.monthlySettlementStatus,
    formalities.earlyTerminationStatus,
    formalities.finalSignatureStatus,
  ];
  return required.every((status) => status === 'ACCEPTED' || status === 'NOT_APPLICABLE');
}
