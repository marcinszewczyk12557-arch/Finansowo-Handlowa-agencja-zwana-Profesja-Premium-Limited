export type EvidenceKind =
  | "manufacturer_identity"
  | "eu_declaration_of_conformity"
  | "ce_certificate"
  | "notified_body_certificate"
  | "iso_certificate"
  | "other";

export type EvidenceReviewStatus = "pending" | "verified" | "rejected";

export interface MedicalEvidence {
  id: string;
  kind: EvidenceKind;
  productId: string;
  variantId?: string;
  market: string;
  sourceUrl?: string;
  documentRef?: string;
  issuer?: string;
  scope?: string;
  validUntil?: string;
  reviewedAt?: string;
  reviewedBy?: string;
  status: EvidenceReviewStatus;
}

export interface MedicalVerificationInput {
  productId: string;
  variantId?: string;
  targetMarket: string;
  requiresNotifiedBodyCertificate?: boolean;
  evidence: MedicalEvidence[];
}

export interface MedicalVerificationResult {
  verified: boolean;
  manufacturerVerified: boolean;
  ceVerified: boolean;
  isoVerified: boolean;
  missing: EvidenceKind[];
  publicLabel: "Zweryfikowano dokumentacyjnie" | "Weryfikacja dokumentów w toku";
}

const matchesProduct = (e: MedicalEvidence, input: MedicalVerificationInput) =>
  e.productId === input.productId &&
  (!input.variantId || e.variantId === input.variantId) &&
  e.market.toUpperCase() === input.targetMarket.toUpperCase() &&
  e.status === "verified" &&
  Boolean(e.documentRef || e.sourceUrl);

const hasEvidence = (
  input: MedicalVerificationInput,
  kind: EvidenceKind,
) => input.evidence.some((e) => e.kind === kind && matchesProduct(e, input));

/**
 * BIOVERA evidence gate.
 *
 * Security/compliance rule: no document = no verified public claim.
 * A supplier description, logo, chat message or marketplace badge is never
 * treated as proof of CE/ISO/manufacturer identity by this function.
 */
export function verifyMedicalEvidence(
  input: MedicalVerificationInput,
): MedicalVerificationResult {
  const manufacturerVerified = hasEvidence(input, "manufacturer_identity");
  const declarationVerified = hasEvidence(input, "eu_declaration_of_conformity");
  const ceCertificateVerified = hasEvidence(input, "ce_certificate");
  const notifiedBodyVerified = input.requiresNotifiedBodyCertificate
    ? hasEvidence(input, "notified_body_certificate")
    : true;
  const isoVerified = hasEvidence(input, "iso_certificate");

  // CE is shown as verified only when the required product-specific evidence
  // exists. A declaration is always required by this project gate; where a
  // notified body is required, its evidence must also be present.
  const ceVerified =
    declarationVerified && notifiedBodyVerified &&
    (ceCertificateVerified || !input.requiresNotifiedBodyCertificate);

  const missing: EvidenceKind[] = [];
  if (!manufacturerVerified) missing.push("manufacturer_identity");
  if (!declarationVerified) missing.push("eu_declaration_of_conformity");
  if (input.requiresNotifiedBodyCertificate && !notifiedBodyVerified) {
    missing.push("notified_body_certificate");
  }

  const verified = manufacturerVerified && ceVerified;

  return {
    verified,
    manufacturerVerified,
    ceVerified,
    isoVerified,
    missing,
    publicLabel: verified
      ? "Zweryfikowano dokumentacyjnie"
      : "Weryfikacja dokumentów w toku",
  };
}

export function canPublishCertificationClaim(
  result: MedicalVerificationResult,
  claim: "CE" | "ISO" | "MANUFACTURER",
): boolean {
  if (claim === "CE") return result.ceVerified;
  if (claim === "ISO") return result.isoVerified;
  return result.manufacturerVerified;
}
