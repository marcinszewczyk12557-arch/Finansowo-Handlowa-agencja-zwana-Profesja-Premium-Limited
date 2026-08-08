import { prisma } from './prisma';
import { classifyRestrictedContent, restrictedCategorySummary } from './confidentiality';
import { syncTransactionFormalities } from './transactionFormalities';

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
  if (stage === 'COMPLETED') return 'Proces zakończony. Zachowaj wyłącznie dane i dokumenty wymagane do rozliczeń i obowiązków prawnych.';
  if (financingRequested && financingStatus === 'PENDING_PARTNER') {
    return 'Oczekiwanie na decyzję uprawnionej instytucji finansującej; system nie podejmuje decyzji kredytowej.';
  }
  switch (stage) {
    case 'QUALIFIED': return 'Zweryfikuj zakres zapytania i rozpocznij przygotowanie indywidualnej oferty B2B. Pakiet formalności uzupełnia wyłącznie fakty transakcji.';
    case 'QUOTE_PREPARATION': return 'Przygotuj cenę, dostępność, termin, warunki dostawy i warunki handlowe; zsynchronizuj je z pakietem formalności.';
    case 'CUSTOMER_DECISION': return 'Oczekuj na akceptację lub uwagi klienta do oferty. Zgody i podpisy wymagają odrębnej, wyraźnej czynności klienta.';
    case 'FINANCING_PREPARATION': return 'Przygotuj minimalny pakiet danych do finansowania; decyzję podejmuje wyłącznie uprawniony partner, a zgody klienta nie są automatyzowane.';
    case 'ORDER_CREATION': return 'Przed utworzeniem zamówienia zweryfikuj formalności, akceptację klienta i wymagane podpisy.';
    case 'FULFILLMENT': return 'Prowadź realizację, dokumenty, wysyłkę i aktualizacje statusu; fakty logistyczne synchronizuj z pakietem formalności.';
    default: return 'Zweryfikuj nowe zgłoszenie.';
  }
}

function changedEvent(previous: any, stage: AutomationStage, financingStatus: string, restricted: boolean) {
  if (!previous) return restricted ? 'CONFIDENTIALITY_RESTRICTION' : 'AUTOMATION_CREATED';
  if (previous.stage !== stage) return 'STAGE_CHANGED';
  if (previous.financingStatus !== financingStatus) return 'FINANCING_STATUS_CHANGED';
  if (restricted && previous.confidentialityLevel !== 'STRICT') return 'CONFIDENTIALITY_RESTRICTION';
  return null;
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

  const restrictedCategories = classifyRestrictedContent(
    offer.company,
    offer.product,
    offer.market,
    offer.budget,
    offer.details,
    offer.order?.notes,
  );
  const restricted = restrictedCategories.length > 0;
  const nextAction = nextActionFor(stage, financingRequested, financingStatus);
  const previous = offer.automation;
  const eventType = changedEvent(previous, stage, financingStatus, restricted);

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
      financingAmount: options?.financingAmount ?? previous?.financingAmount ?? null,
      financingStatus,
      confidentialityLevel: 'STRICT',
      externalDisclosureAllowed: false,
      nextAction,
      lastRunAt: new Date(),
    },
  });

  try {
    await syncTransactionFormalities(offerId, {
      financingRequested,
      financingAmount: options?.financingAmount ?? automation.financingAmount ?? null,
    });
  } catch (formalitiesError) {
    console.error('Transaction formalities synchronization failed', formalitiesError);
  }

  if (eventType) {
    const categorySummary = restrictedCategorySummary(restrictedCategories);
    await prisma.salesAutomationEvent.create({
      data: {
        caseId: automation.id,
        type: eventType,
        message: restricted
          ? `Zastosowano politykę STRICT. Kategorie chronione: ${categorySummary}. Treść źródłowa nie została skopiowana do audytu; eksport zewnętrzny pozostaje zablokowany.`
          : `Automatyzacja ustawiła etap ${stage}. Fakty transakcyjne zsynchronizowano z pakietem formalności; zgody i podpisy nie są automatyzowane.`,
      },
    });
  }

  return automation;
}

export async function syncAllSalesAutomationCases(limit = 250) {
  const offers = await prisma.offer.findMany({
    select: { id: true },
    orderBy: { createdAt: 'desc' },
    take: Math.min(Math.max(limit, 1), 500),
  });

  let synced = 0;
  let failed = 0;
  for (const offer of offers) {
    try {
      await ensureSalesAutomationCase(offer.id);
      synced += 1;
    } catch (error) {
      failed += 1;
      console.error(`Automation reconciliation failed for offer ${offer.id}`, error);
    }
  }

  return { scanned: offers.length, synced, failed, completedAt: new Date().toISOString() };
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
        ? 'Finansowanie zatwierdzone przez partnera. Zweryfikuj akceptację klienta, formalności i wymagane podpisy przed utworzeniem zamówienia.'
        : 'Partner odmówił finansowania. Przedstaw klientowi alternatywne, zgodne z prawem warunki płatności.',
      lastRunAt: new Date(),
      externalDisclosureAllowed: false,
      confidentialityLevel: 'STRICT',
    },
  });

  await syncTransactionFormalities(offerId, {
    financingRequested: true,
    financingAmount: updated.financingAmount,
  });

  await prisma.salesAutomationEvent.create({
    data: {
      caseId: updated.id,
      type: 'FINANCING_PARTNER_DECISION',
      message: status === 'APPROVED_BY_PARTNER'
        ? 'Zarejestrowano pozytywną decyzję uprawnionego partnera finansującego.'
        : 'Zarejestrowano odmowę uprawnionego partnera finansującego.',
    },
  });

  return updated;
}
