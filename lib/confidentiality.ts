export type RestrictedCategory =
  | 'COMPETITOR_INFORMATION'
  | 'TRADE_SECRET'
  | 'GDPR_PERSONAL_DATA'
  | 'WORKPLACE_INFORMATION'
  | 'INTERNAL_COMMERCIAL_DATA';

export const STRICT_CONFIDENTIALITY_NOTICE =
  'Dane dotyczące konkurencji, relacji zawodowych, informacji z miejsca pracy, danych osobowych oraz tajemnicy handlowej nie mogą być ujawniane ani eksportowane poza uprawniony proces transakcyjny.';

const forbiddenNarrativePatterns = [
  /konkurencj/i,
  /tajemn(ic|icy)\s+handlow/i,
  /rodo/i,
  /dane\s+osobow/i,
  /co\s+si[eę]\s+dzieje\s+w\s+pracy/i,
  /kontakt\s+z\s+konkurenc/i,
];

export function narrativeRequiresRestriction(value?: string | null) {
  if (!value) return false;
  return forbiddenNarrativePatterns.some((pattern) => pattern.test(value));
}

export function redactForAudit(value?: string | null) {
  if (!value) return '';
  const compact = value.replace(/\s+/g, ' ').trim();
  if (!compact) return '';
  return compact.length <= 12 ? '[DANE CHRONIONE]' : `${compact.slice(0, 4)}…[REDACTED]`;
}

/**
 * Payload do integracji zewnętrznych. Celowo NIE zawiera:
 * - danych kontaktowych klienta,
 * - danych firmy,
 * - swobodnego opisu sprawy,
 * - informacji o konkurencji,
 * - tajemnicy handlowej,
 * - danych z miejsca pracy.
 *
 * Rozszerzenie tego zakresu wymaga osobnej, świadomej implementacji prawnej
 * i technicznej dla konkretnego odbiorcy oraz celu przetwarzania.
 */
export function buildRestrictedExternalTransactionPayload(input: {
  reference: string;
  product: string;
  quantity?: string | null;
  market?: string | null;
  financingRequested?: boolean;
  financingAmount?: string | null;
}) {
  return {
    reference: input.reference,
    product: input.product,
    quantity: input.quantity || undefined,
    market: input.market || undefined,
    financingRequested: Boolean(input.financingRequested),
    financingAmount: input.financingAmount || undefined,
  };
}

export function assertNoRestrictedDisclosure(allowed: boolean) {
  if (!allowed) {
    throw new Error('EXTERNAL_DISCLOSURE_BLOCKED_BY_CONFIDENTIALITY_POLICY');
  }
}
