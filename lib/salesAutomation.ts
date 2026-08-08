import { prisma } from './prisma';
import { narrativeRequiresRestriction } from './confidentiality';

export type AutomationStage =
  | 'INTAKE'
  | 'QUALIFIED'
  | 'QUOTE_PREPARATION'
  | 'CUSTOMER_DECISION'
  | 'FINANCING_PREPARATION'
  | 'ORDER_CREATION'
  | 'FULFILLMENT'
  | 'COMPLETED'
  | 'CANCELLED';

function stageFor(offerStatus: string, hasOrder: boolean, orderStatus?: string | null): AutomationStage {
  if (offerStatus === 'CANCELLED' || orderStatus === 'CANCELLED') return 'CANCELLED';
  if (orderStatus === 'COMPLETED' || offerStatus === 'COMPLETED') return 'COMPLETED';
  if (hasOrder) return 'FULFILLMENT';
  if (offerStatus === 'ACCEPTED') return 'ORDER_CREATION';
  if (offerStatus === 'OFFER_SENT') return 'CUSTOMER_DECISION';
  if (offerStatus === 'PREPARING') return 'QUOTE_PREPARATION';
  if (offerStatus === 'NEW') return 'QUALIFIED';
  return 'INTAKE';
}

function nextActionFor(stage: AutomationStage, financingRequested: boolean, financingStatus: string) {
  if (stage === 'CANCELLED') return 'Sprawa zamknięta — brak dalszych działań.';
  if (stage === 'COMPLETED') return 'Proces zakończony. Zachowaj wyłącznie wymagane dokumenty i dane.';
  if (financingRequested && financingStatus === 'PENDING_PARTNER') {
    return 'Oczekiwanie na decyzję uprawnionej instytucji finansującej; system nie podejmuje decyzji kredytowej.';
  }
  switch (stage) {
    case 'QUALIFIED': return 'Zweryfikuj zakres zapytania i rozpocznij przygotowanie indywidualnej oferty B2B.';
    case 'QUOTE_PREPARATION': return 'Przygotuj cenę, dostępność, termin, warunki dostawy i warunki handlowe.';
    case 'CUSTOMER_DECISION': return 'Oczekuj na akceptację lub uwagi klienta do oferty.';
    case 'FINANCING_PREPARATION': return 'Przygotuj minimalny pakiet danych do finansowania zgodnie z zasadą minimalizacji.';
    case 'ORDER_CREATION': return 'Utwórz zamówienie wyłącznie po potwierdzonej akceptacji oferty.';
    case 'FULFILLMENT': return 'Prowadź realizację, dokumenty, wysyłkę i aktualizacje statusu.';
    default: return 'Zweryfikuj nowe zgłoszenie.';
  }
}

export async function ensureSalesAutomationCase(offerId: number, options?: {
  financingRequested?: boolean;
  financingAmount?: string | null;
}) {
  const offer = await prisma.offer.findUnique({ where: { id: offerId }, include: { order: true, automation: true } });
  if (!offer) throw new Error('OFFER_NOT_FOUND');

  const financingRequested = options?.financingRequested ?? offer.automation?.financingRequested ?? false;
  const financingStatus = financingRequested
    ? (offer.automation?.financingStatus === 'NOT_REQUESTED' || !offer.automation?.financingStatus ? 'PENDING_PARTNER' : offer.automation.financingStatus)
    : 'NOT_REQUESTED';
  const stage = financingRequested && financingStatus === 'PENDING_PARTNER' && offer.status === 'ACCEPTED'
    ? 'FINANCING_PREPARATION'
    : stageFor(offer.status, Boolean(offer.order), offer.order?.status);
  const restricted = narrativeRequiresRestriction(offer.details);
  const nextAction = nextActionFor(stage, financingRequested, financingStatus);

  const automation = await prisma.salesAutomationCase.upsert({
    where: { offerId },
    create: {
      offerId,
      mode: financingRequested ? 'SALES_AND_FINANCING' : 'SALES',
      stage,
      financingRequested,
      financingAmount: options?.financingAmount || null,
      financingStatus,
      confidentialityLevel: 'STRICT',
      externalDisclosureAllowed: false,
      nextAction,
      lastRunAt: new Date(),
    },
    update: {
      mode: financingRequested ? 'SALES_AND_FINANCING' : 'SALES',
      stage,
      financingRequested,
      financingAmount: options?.financingAmount ?? offer.automation?.financingAmount ?? null,
      financingStatus,
      confidentialityLevel: 'STRICT',
      externalDisclosureAllowed: false,
      nextAction,
      lastRunAt: new Date(),
    },
  });

  await prisma.salesAutomationEvent.create({
    data: {
      caseId: automation.id,
      type: restricted ? 'CONFIDENTIALITY_RESTRICTION' : 'AUTOMATION_RUN',
      message: restricted
        ? 'Wykryto treść wymagającą szczególnej poufności. Eksport zewnętrzny pozostaje zablokowany.'
        : `Automatyzacja ustawiła etap ${stage}. Dane zewnętrzne pozostają domyślnie zablokowane.`,
    },
  });

  return automation;
}

export async function setFinancingPartnerDecision(offerId: number, status: 'APPROVED_BY_PARTNER' | 'DECLINED_BY_PARTNER') {
  const automation = await prisma.salesAutomationCase.findUnique({ where: { offerId } });
  if (!automation || !automation.financingRequested) throw new Error('FINANCING_CASE_NOT_FOUND');

  const updated = await prisma.salesAutomationCase.update({
    where: { offerId },
    data: {
      financingStatus: status,
      stage: status === 'APPROVED_BY_PARTNER' ? 'ORDER_CREATION' : 'CUSTOMER_DECISION',
      nextAction: status === 'APPROVED_BY_PARTNER'
        ? 'Finansowanie zatwierdzone przez partnera. Zweryfikuj akceptację klienta i utwórz zamówienie.'
        : 'Partner odmówił finansowania. Przedstaw klientowi alternatywne, zgodne z prawem warunki płatności.',
      lastRunAt: new Date(),
    },
  });

  await prisma.salesAutomationEvent.create({
    data: {
      caseId: updated.id,
      type: 'FINANCING_PARTNER_DECISION',
      message: status === 'APPROVED_BY_PARTNER'
        ? 'Zarejestrowano pozytywną decyzję partnera finansującego.'
        : 'Zarejestrowano odmowę partnera finansującego.',
    },
  });

  return updated;
}
