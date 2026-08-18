/**
 * VAT eligibility gate.
 *
 * VAT 0% (EXEMPT_0) must never be hardcoded globally.
 * It is emitted only when the transaction facts and required evidence support it.
 * Domestic rates and ambiguous cases require an explicit OWNER-reviewed rate.
 */

export type VatEligibility = 'STANDARD' | 'EXEMPT_0' | 'MANUAL_REVIEW';

export interface VatEligibilityInput {
  /** ISO-3166-1 alpha-2 country code of the buyer, uppercase */
  buyerCountry?: string;
  /** ISO-3166-1 alpha-2 country code of the seller, uppercase */
  sellerCountry?: string;
  /** Buyer holds a confirmed intra-community VAT number */
  buyerVatVerified?: boolean;
  /** Seller is registered for VAT-UE when WDT is used */
  sellerVatEuRegistered?: boolean;
  /** Evidence confirms dispatch/delivery to another EU member state */
  intraEuDeliveryEvidenceVerified?: boolean;
  /** Evidence confirms export outside the EU */
  exportEvidenceVerified?: boolean;
  /** Explicit OWNER-level override */
  ownerOverride?: VatEligibility | null;
  /** Explicit OWNER-reviewed VAT rate, e.g. 23%, 8%, 5%, 0% */
  ownerVatRate?: string;
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

function normalizeVatRate(rate?: string): string | null {
  if (!rate) return null;
  const value = rate.trim().replace(',', '.');
  if (!/^\d{1,2}(?:\.\d{1,2})?%$/.test(value)) return null;
  const numeric = Number(value.slice(0, -1));
  if (!Number.isFinite(numeric) || numeric < 0 || numeric > 99) return null;
  return value;
}

/**
 * Determine VAT eligibility based on transaction facts.
 *
 * This is a safety gate, not tax advice. Where the correct domestic rate or
 * documentation is not fully established, the function returns MANUAL_REVIEW.
 */
export function determineVatEligibility(input: VatEligibilityInput): VatEligibilityResult {
  if (input.ownerOverride) {
    const explicitRate = normalizeVatRate(input.ownerVatRate);

    if (input.ownerOverride === 'STANDARD' && !explicitRate) {
      return {
        eligibility: 'MANUAL_REVIEW',
        vatRate: 'PENDING',
        note: 'Ręczne ustawienie STANDARD wymaga jawnego wskazania zweryfikowanej stawki VAT przez OWNER.',
      };
    }

    if (input.ownerOverride === 'EXEMPT_0' && explicitRate && explicitRate !== '0%') {
      return {
        eligibility: 'MANUAL_REVIEW',
        vatRate: 'PENDING',
        note: 'Niespójne ręczne ustawienie VAT: EXEMPT_0 może używać wyłącznie stawki 0%.',
      };
    }

    return {
      eligibility: input.ownerOverride,
      vatRate: input.ownerOverride === 'MANUAL_REVIEW'
        ? 'PENDING'
        : input.ownerOverride === 'EXEMPT_0'
          ? '0%'
          : explicitRate!,
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

  // Domestic supplies can use different VAT rates depending on the goods/services.
  if (seller === buyer) {
    return {
      eligibility: 'MANUAL_REVIEW',
      vatRate: 'PENDING',
      note: 'Dostawa krajowa — właściwa stawka zależy od klasyfikacji towaru lub usługi. OWNER musi wskazać zweryfikowaną stawkę.',
    };
  }

  const sellerInEU = EU_COUNTRY_CODES.has(seller);
  const buyerInEU  = EU_COUNTRY_CODES.has(buyer);

  // Intra-EU B2B: require VAT-UE and evidence before allowing 0%.
  if (sellerInEU && buyerInEU) {
    if (
      input.buyerVatVerified === true &&
      input.sellerVatEuRegistered === true &&
      input.intraEuDeliveryEvidenceVerified === true
    ) {
      return {
        eligibility: 'EXEMPT_0',
        vatRate: '0%',
        note: 'WDT — zweryfikowano VAT-UE nabywcy, rejestrację sprzedawcy VAT-UE oraz dowody wywozu/dostarczenia. Stawka 0% pozostaje zależna od zachowania wymaganej dokumentacji.',
      };
    }
    return {
      eligibility: 'MANUAL_REVIEW',
      vatRate: 'PENDING',
      note: 'WDT — brakuje co najmniej jednego wymaganego potwierdzenia: VAT-UE nabywcy, rejestracji sprzedawcy VAT-UE lub dowodów wywozu/dostarczenia.',
    };
  }

  // Export outside EU: require export evidence before allowing 0%.
  if (sellerInEU && !buyerInEU) {
    if (input.exportEvidenceVerified === true) {
      return {
        eligibility: 'EXEMPT_0',
        vatRate: '0%',
        note: 'Eksport poza UE — potwierdzono dokument potwierdzający wywóz poza UE. Stawka 0% pozostaje zależna od zachowania wymaganej dokumentacji.',
      };
    }
    return {
      eligibility: 'MANUAL_REVIEW',
      vatRate: 'PENDING',
      note: 'Eksport poza UE — brak zweryfikowanego dokumentu potwierdzającego wywóz. Nie można automatycznie zastosować stawki 0%.',
    };
  }

  return {
    eligibility: 'MANUAL_REVIEW',
    vatRate: 'PENDING',
    note: 'Nie ustalono stawki VAT automatycznie. Wymagany ręczny przegląd.',
  };
}
