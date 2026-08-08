export type RestrictedCategory =
  | 'COMPETITOR_INFORMATION'
  | 'TRADE_SECRET'
  | 'GDPR_PERSONAL_DATA'
  | 'WORKPLACE_INFORMATION'
  | 'INTERNAL_COMMERCIAL_DATA';

export const STRICT_CONFIDENTIALITY_NOTICE =
  'Dane dotyczące konkurencji, relacji zawodowych, informacji z miejsca pracy, danych osobowych oraz tajemnicy handlowej nie mogą być ujawniane ani eksportowane poza uprawniony proces transakcyjny.';

const categoryPatterns: Record<RestrictedCategory, RegExp[]> = {
  COMPETITOR_INFORMATION: [
    /konkurencj/i,
    /konkurent/i,
    /competitor/i,
    /kontakt\s+(z|do)\s+konkurenc/i,
    /relacj\w*\s+z\s+konkurenc/i,
  ],
  TRADE_SECRET: [
    /tajemn(ic|icy)\s+handlow/i,
    /trade\s+secret/i,
    /pouf(n|ne|na|ny|nych)\s+warunk/i,
    /niepublikowan\w*\s+cennik/i,
  ],
  GDPR_PERSONAL_DATA: [
    /rodo/i,
    /gdpr/i,
    /dane\s+osobow/i,
    /pesel/i,
    /numer\s+dowodu/i,
  ],
  WORKPLACE_INFORMATION: [
    /co\s+si[eę]\s+dzieje\s+w\s+pracy/i,
    /informacj\w*\s+z\s+(miejsca\s+)?pracy/i,
    /wewn[eę]trzn\w*\s+informacj\w*\s+(pracodawc|firm)/i,
  ],
  INTERNAL_COMMERCIAL_DATA: [
    /marż/i,
    /koszt\s+zakupu/i,
    /cena\s+zakupowa/i,
    /źr[oó]dł\w*\s+dostaw/i,
    /warunk\w*\s+dostawc/i,
    /dane\s+hurtown/i,
    /kontakt\w*\s+do\s+dostawc/i,
  ],
};

export function classifyRestrictedContent(...values: Array<string | null | undefined>) {
  const text = values.filter(Boolean).join(' ');
  if (!text) return [] as RestrictedCategory[];

  return (Object.keys(categoryPatterns) as RestrictedCategory[]).filter((category) =>
    categoryPatterns[category].some((pattern) => pattern.test(text)),
  );
}

export function narrativeRequiresRestriction(value?: string | null) {
  return classifyRestrictedContent(value).length > 0;
}

export function redactForAudit(value?: string | null) {
  if (!value) return '';
  const compact = value.replace(/\s+/g, ' ').trim();
  if (!compact) return '';
  return compact.length <= 12 ? '[DANE CHRONIONE]' : `${compact.slice(0, 4)}…[REDACTED]`;
}

export function restrictedCategorySummary(categories: RestrictedCategory[]) {
  return categories.length ? categories.join(', ') : 'NONE';
}

/**
 * Minimalny payload techniczny do ewentualnej przyszłej integracji zewnętrznej.
 * Celowo NIE zawiera:
 * - danych kontaktowych klienta,
 * - nazwy firmy,
 * - nazwy produktu/marki,
 * - rynku docelowego,
 * - swobodnego opisu sprawy,
 * - informacji o konkurencji,
 * - tajemnicy handlowej,
 * - źródeł dostaw, marż ani danych z miejsca pracy.
 *
 * Samo zbudowanie payloadu NIE oznacza zgody na wysłanie. Każde wysłanie musi
 * przejść assertNoRestrictedDisclosure() i osobną kontrolę celu/odbiorcy.
 */
export function buildRestrictedExternalTransactionPayload(input: {
  reference: string;
  quantity?: string | null;
  financingRequested?: boolean;
  financingAmount?: string | null;
}) {
  return {
    reference: input.reference,
    quantity: input.quantity || undefined,
    financingRequested: Boolean(input.financingRequested),
    financingAmount: input.financingAmount || undefined,
  };
}

export function assertNoRestrictedDisclosure(allowed: boolean) {
  if (!allowed) {
    throw new Error('EXTERNAL_DISCLOSURE_BLOCKED_BY_CONFIDENTIALITY_POLICY');
  }
}
