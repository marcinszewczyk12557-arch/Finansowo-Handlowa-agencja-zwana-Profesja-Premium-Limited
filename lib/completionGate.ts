/**
 * AI-assisted transaction completion gate.
 *
 * Evaluates mandatory evidence gates before a case can be marked COMPLETED.
 * AI may suggest/classify/check completeness; it NEVER replaces required
 * human, legal or financial approvals.
 *
 * A case can only be marked COMPLETED by an authenticated OWNER after all
 * gates pass.
 */

import { prisma } from './prisma';

export interface CompletionGateResult {
  /** Whether all mandatory gates pass */
  allGatesPass: boolean;
  gates: GateCheck[];
  /** AI-generated suggestion (informational only, not a decision) */
  aiSuggestion: string;
  /** Human-readable summary */
  summary: string;
}

export interface GateCheck {
  gate:    string;
  passed:  boolean;
  message: string;
}

/**
 * Evaluate all mandatory completion gates for a case.
 *
 * This function checks the current state of the offer, order, automation case
 * and formalities. It returns an assessment and an informational AI suggestion.
 *
 * It does NOT modify any records — the OWNER must call markCaseCompleted separately.
 */
export async function evaluateCompletionGates(offerId: number): Promise<CompletionGateResult> {
  const offer = await prisma.offer.findUnique({
    where: { id: offerId },
    include: { order: true, automation: true, formalities: true, invoices: true },
  });

  if (!offer) throw new Error('OFFER_NOT_FOUND');

  const gates: GateCheck[] = [];

  // Gate 1: Order exists and is delivered or completed
  const orderGate = Boolean(offer.order) &&
    (offer.order!.status === 'COMPLETED' || offer.order!.status === 'DELIVERED' ||
     offer.order!.deliveredAt !== null);
  gates.push({
    gate: 'ORDER_FULFILLED',
    passed: orderGate,
    message: orderGate
      ? 'Zamówienie zrealizowane lub dostarczone.'
      : 'Brak zamówienia lub zamówienie nie zostało jeszcze dostarczone.',
  });

  // Gate 2: Final signature status is not PENDING (must be SIGNED or equivalent OWNER-approved state)
  const sigGate = offer.formalities?.finalSignatureStatus === 'SIGNED' ||
                  offer.formalities?.finalSignatureStatus === 'APPROVED';
  gates.push({
    gate: 'FINAL_SIGNATURE',
    passed: sigGate,
    message: sigGate
      ? 'Podpis finalny zarejestrowany.'
      : 'Brak finalnego podpisu klienta. Status: ' + (offer.formalities?.finalSignatureStatus ?? 'brak formalities'),
  });

  // Gate 3: All required formalities consents are not PENDING
  const consentFields: Array<{ key: string; label: string }> = [
    { key: 'clientDeclarationStatus',     label: 'Oświadczenie klienta' },
    { key: 'businessUseConsentStatus',    label: 'Zgoda cel biznesowy' },
    { key: 'intermediationConsentStatus', label: 'Zgoda pośrednictwo' },
  ];
  const pendingConsents: string[] = [];
  if (offer.formalities) {
    for (const { key, label } of consentFields) {
      if ((offer.formalities as Record<string, unknown>)[key] === 'PENDING') {
        pendingConsents.push(label);
      }
    }
  } else {
    pendingConsents.push('brak rekordu formalities');
  }
  const consentGate = pendingConsents.length === 0;
  gates.push({
    gate: 'REQUIRED_CONSENTS',
    passed: consentGate,
    message: consentGate
      ? 'Wymagane zgody zarejestrowane.'
      : 'Oczekujące zgody: ' + pendingConsents.join(', '),
  });

  // Gate 4: If financing was requested, partner decision must not be PENDING_PARTNER
  const finGate = !offer.automation?.financingRequested ||
    (offer.automation.financingStatus !== 'PENDING_PARTNER' &&
     offer.automation.financingStatus !== 'NOT_REQUESTED');
  gates.push({
    gate: 'FINANCING_RESOLVED',
    passed: finGate,
    message: finGate
      ? 'Finansowanie niezażądane lub decyzja partnera zarejestrowana.'
      : 'Oczekiwanie na decyzję uprawnionego partnera finansującego.',
  });

  // Gate 5: At least one invoice in ISSUED status
  const invoiceGate = offer.invoices.some((inv) => inv.status === 'ISSUED');
  gates.push({
    gate: 'INVOICE_ISSUED',
    passed: invoiceGate,
    message: invoiceGate
      ? 'Faktura wystawiona.'
      : 'Brak wystawionej faktury. Sprawa może być zakończona bez faktury po manualnym zatwierdzeniu przez OWNER.',
  });

  // Invoice gate is advisory (not blocking) — it generates a WARNING, not a hard failure.
  const hardGates   = gates.filter((g) => g.gate !== 'INVOICE_ISSUED');
  const allGatesPass = hardGates.every((g) => g.passed);

  const failedLabels = gates.filter((g) => !g.passed).map((g) => g.gate);

  const aiSuggestion = buildAiSuggestion(allGatesPass, failedLabels, offer);

  return {
    allGatesPass,
    gates,
    aiSuggestion,
    summary: allGatesPass
      ? 'Wszystkie obowiązkowe bramy przeszły pomyślnie. OWNER może oznaczyć sprawę jako ZAKOŃCZONĄ.'
      : `Bramy nieudane: ${failedLabels.join(', ')}. Sprawa nie może być automatycznie zakończona.`,
  };
}

function buildAiSuggestion(
  allPass: boolean,
  failedGates: string[],
  offer: { product: string; status: string },
): string {
  if (allPass) {
    return `Ocena AI (informacyjna): Wszystkie wymagane warunki zakończenia zostały spełnione dla oferty produktu "${offer.product}". Zalecamy ostateczny przegląd OWNER przed oznaczeniem sprawy jako ZAKOŃCZONA.`;
  }
  const hints: Record<string, string> = {
    ORDER_FULFILLED:   'Zweryfikuj status dostawy zamówienia.',
    FINAL_SIGNATURE:   'Uzyskaj wyraźny podpis finalny od klienta — podpis nie może być wygenerowany automatycznie.',
    REQUIRED_CONSENTS: 'Potwierdź oczekujące zgody klienta w odrębnym, udokumentowanym działaniu.',
    FINANCING_RESOLVED:'Skontaktuj się z partnerem finansującym w celu uzyskania formalnej decyzji.',
    INVOICE_ISSUED:    'Rozważ wystawienie faktury lub udokumentuj powód jej braku.',
  };
  const hintText = failedGates.map((g) => hints[g] ?? g).join(' ');
  return `Ocena AI (informacyjna): Sprawa nie jest gotowa do zamknięcia. ${hintText} AI nie zastępuje wymaganych zatwierdzeń ludzkich, prawnych ani finansowych.`;
}

/**
 * Mark a case as COMPLETED. Only callable after evaluateCompletionGates passes hard gates.
 * Only an authenticated OWNER should call this.
 */
export async function markCaseCompleted(offerId: number, ownerNote?: string): Promise<void> {
  const gateResult = await evaluateCompletionGates(offerId);
  if (!gateResult.allGatesPass) {
    throw new Error('COMPLETION_GATES_FAILED: ' + gateResult.summary);
  }

  await prisma.offer.update({ where: { id: offerId }, data: { status: 'COMPLETED' } });

  if (await prisma.salesAutomationCase.findUnique({ where: { offerId } })) {
    await prisma.salesAutomationCase.update({
      where: { offerId },
      data: {
        stage:      'COMPLETED',
        nextAction: 'Sprawa zakończona. Zachowaj wyłącznie dane wymagane do rozliczeń i obowiązków prawnych.',
        lastRunAt:  new Date(),
      },
    });

    const automation = await prisma.salesAutomationCase.findUnique({ where: { offerId } });
    if (automation) {
      await prisma.salesAutomationEvent.create({
        data: {
          caseId:  automation.id,
          type:    'CASE_COMPLETED',
          message: `Sprawa oznaczona jako ZAKOŃCZONA przez OWNER po pozytywnej weryfikacji bram. ${ownerNote ? 'Notatka: ' + ownerNote : ''}`.trim(),
        },
      });
    }
  }
}
