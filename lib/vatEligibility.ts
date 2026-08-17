/**
 * VAT eligibility gate.
 *
 * VAT 0% (EXEMPT_0) must never be hardcoded globally.
 * It is only emitted when explicit eligibility facts support it.
 * Any ambiguous case falls back to STANDARD or MANUAL_REVIEW.
 */

export type VatEligibility = 'STANDARD' | 'EXEMPT_0' | 'MANUAL_REVIEW';

export interface VatEligibilityInput {
  /** ISO-3166-1 alpha-2 country code of the buyer, uppercase */
  buyerCountry?: string;
  /** ISO-3166-1 alpha-2 country code of the seller, uppercase */
  sellerCountry?: string;
  /** Buyer holds a confirmed intra-community VAT number (e.g. EU VAT ID verified) */
  buyerVatVerified?: boolean;
  /** Explicit OWNER-level override: 'EXEMPT_0' | 'STANDARD' | 'MANUAL_REVIEW' | null */
  ownerOverride?: VatEligibility | null;
  /** Free-text note provided by OWNER when applying the override */
  ownerNote?: string;
}

export interface VatEligibilityResult {
  eligibility: VatEligibility;
  vatRate: string;
  note: string;
}

const EU_COUNTRY_CODES = new Set([
  'AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE',
  'IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE',
]);

/**
 * Determine VAT eligibility based on transaction facts.
 *
 * Rules (simplified; always subject to current applicable law):
 * - If OWNER provides an explicit override, it is honoured and logged.
 * - Intra-EU B2B supply with verified buyer VAT ID → EXEMPT_0 (Art. 138 VAT Directive).
 * - Export outside EU → EXEMPT_0 (typically 0% under domestic export rules).
 * - Missing/unverified buyer VAT ID for intra-EU → MANUAL_REVIEW.
 * - Domestic (same country) or unrecognised scenario → STANDARD (23% default; caller supplies correct rate).
 * - Any truly ambiguous case → MANUAL_REVIEW.
 */
export function determineVatEligibility(input: VatEligibilityInput): VatEligibilityResult {
  if (input.ownerOverride) {
    const rate = input.ownerOverride === 'EXEMPT_0' ? '0%' : input.ownerOverride === 'STANDARD' ? '23%' : 'MANUAL_REVIEW';
    return {
      eligibility: input.ownerOverride,
      vatRate: rate === 'MANUAL_REVIEW' ? 'PENDING' : rate,
      note: `Ręczne ustawienie OWNER: ${input.ownerOverride}. ${input.ownerNote ?? ''}`.trim(),
    };
  }

  const seller = (input.sellerCountry ?? 'PL').toUpperCase();
  const buyer  = (input.buyerCountry ?? '').toUpperCase();

  if (!buyer) {
    return {
      eligibility: 'MANUAL_REVIEW',
      vatRate: 'PENDING',
      note: 'Nie podano kraju nabywcy. Wymagany ręczny przegląd stawki VAT.',
    };
  }

  // Domestic
  if (seller === buyer) {
    return {
      eligibility: 'STANDARD',
      vatRate: '23%',
      note: 'Dostawa krajowa — stawka standardowa. Sprawdź aktualną stawkę dla kategorii towaru.',
    };
  }

  const sellerInEU = EU_COUNTRY_CODES.has(seller);
  const buyerInEU  = EU_COUNTRY_CODES.has(buyer);

  // Intra-EU B2B
  if (sellerInEU && buyerInEU) {
    if (input.buyerVatVerified === true) {
      return {
        eligibility: 'EXEMPT_0',
        vatRate: '0%',
        note: 'Wewnątrzwspólnotowa dostawa towarów (WDT) — nabywca posiada zweryfikowany numer VAT-UE. Stawka 0% wymaga spełnienia warunków art. 138 Dyrektywy VAT oraz dokumentacji wysyłki.',
      };
    }
    return {
      eligibility: 'MANUAL_REVIEW',
      vatRate: 'PENDING',
      note: 'Dostawa wewnątrzwspólnotowa — numer VAT nabywcy niezweryfikowany. Wymagany ręczny przegląd.',
    };
  }

  // Export outside EU
  if (sellerInEU && !buyerInEU) {
    return {
      eligibility: 'EXEMPT_0',
      vatRate: '0%',
      note: 'Eksport poza UE — stawka 0% zgodnie z przepisami eksportowymi. Wymagana dokumentacja eksportowa (ECS/SAD).',
    };
  }

  return {
    eligibility: 'MANUAL_REVIEW',
    vatRate: 'PENDING',
    note: 'Nie ustalono stawki VAT automatycznie. Wymagany ręczny przegląd.',
  };
}
