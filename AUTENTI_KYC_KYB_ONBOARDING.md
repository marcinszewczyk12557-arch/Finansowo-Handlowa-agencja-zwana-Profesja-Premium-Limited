# PROFESJA PREMIUM LIMITED — KYC/KYB + Autenti onboarding

Status: PREVIEW / architecture gate. No production signing is enabled by this document.

## Scope
Shared onboarding for all 50 stores, RFQ and order flows:
1. Create client case.
2. Record privacy information and required consents with version/timestamp.
3. KYC of natural person / representative.
4. KYB of company: registry data, representation, UBO/beneficial owners and process-specific documents.
5. Completeness/status assessment with manual-review gates.
6. Generate the applicable agreement/document only after required checks pass.
7. Select signature level based on required legal form: Autenti e-signature / advanced / qualified; ambiguous or legally sensitive cases => LEGAL_REVIEW_REQUIRED.
8. Send to Autenti only after official API access and server-side credentials are configured and OWNER explicitly authorizes the legally binding action.
9. Track provider process status; use webhook/callback only when confirmed by the official API documentation available for the contracted Autenti plan.
10. Validate document/signature integrity and retain provider evidence/validation result.
11. Archive document, evidence and immutable audit events under role-based access.

## Non-negotiable safety rules
- Never imitate an Autenti signature in the PROFESJA UI.
- Typed or drawn name is only a document/form field; it is not represented as equivalent to a qualified electronic signature.
- No invented Autenti endpoint, payload, credential, callback or capability.
- `AUTENTI_*` secrets are server-side environment variables only; never `NEXT_PUBLIC_*`, client bundles, URLs, logs or repository content.
- No real customer document is sent and no legally binding signature process is initiated without explicit OWNER authorization and valid production configuration.
- Minimize KYC/KYB data; collect only fields/documents required for the concrete process. Retention must be policy-driven and legally reviewed.
- Sensitive documents must never be exposed through public catalog/RFQ APIs.

## Provider boundary
Implement an internal provider interface without hardcoding undocumented network calls:

```ts
interface SignatureProvider {
  createProcess(input: ApprovedSignatureRequest, idempotencyKey: string): Promise<ProviderProcessRef>;
  getStatus(providerProcessId: string): Promise<ProviderStatus>;
  getEvidence(providerProcessId: string): Promise<ProviderEvidence>;
  verifyCallback?(request: unknown): Promise<VerifiedProviderEvent>;
}
```

`AutentiProvider` must remain `PENDING_CREDENTIALS` / non-operational until the contracted official API documentation, credentials, base URL, authentication method, supported signature methods and callback/webhook contract are confirmed. Official public Autenti materials confirm API integration for document circulation/signature collection, but implementation must use the documentation applicable to the actual account/plan.

## Suggested case states
`DRAFT`, `PRIVACY_PENDING`, `KYC_PENDING`, `KYC_REVIEW`, `KYB_PENDING`, `KYB_REVIEW`, `UBO_REVIEW`, `DOCUMENT_PREPARATION`, `LEGAL_REVIEW_REQUIRED`, `READY_FOR_OWNER_APPROVAL`, `SIGNATURE_PROVIDER_PENDING`, `SIGNATURE_SENT`, `SIGNATURE_IN_PROGRESS`, `SIGNED`, `VALIDATION_PENDING`, `VALIDATED`, `ARCHIVED`, `REJECTED`, `CANCELLED`, `PROVIDER_ERROR`.

Each transition records actor, role, timestamp, previous/new state, reason code, correlation ID and non-sensitive metadata. Replayed provider events must be idempotent.

## Signature-level gate
The application may recommend a signature class from a versioned rule table, but must not silently decide legal sufficiency for ambiguous documents. The final rule table requires legal review. Autenti public guidance distinguishes its e-signature, advanced signature and qualified electronic signature; qualified signature is used where written form/equivalence to handwritten signature is required.

## Data model (implementation target)
- `ClientCase`
- `CaseParty` / `Representative`
- `PrivacyConsent` (purpose, legal text/version, timestamp, withdrawal where applicable)
- `KycCheck` (status and provider/reference metadata; avoid unnecessary raw identity data)
- `KybCheck` (registry snapshot/reference, representation status)
- `BeneficialOwnerCheck`
- `CaseDocument` (type, version, checksum, storage reference, classification)
- `SignatureProcess` (provider, requested level, provider reference, idempotency key, status)
- `SignatureEvidence` (checksum, validation status, provider evidence reference)
- `AuditEvent`

## Access control
Public user: own onboarding submission/status only. Reviewer: assigned KYC/KYB review. OWNER/admin: privileged decisions and explicit send-to-sign approval. Service role: provider callbacks only after authenticity verification. Apply least privilege and deny-by-default to raw identity documents.

## Error/retry model
Retry only transient provider/network failures with bounded exponential backoff. Never retry a legally binding `createProcess` without the same idempotency key. Permanent validation/business errors go to manual review. Do not log documents, identity numbers, credentials or full provider payloads.

## Integration gate
Before enabling Autenti network calls:
- obtain appropriate Autenti API plan/access and credentials;
- confirm current official API documentation for the contracted account;
- configure server-side secrets in Preview first;
- implement and test authentication, documented endpoints and documented callback verification;
- test idempotency and duplicate callback delivery;
- confirm data-processing/privacy/retention terms;
- legal review of document-to-signature-level matrix;
- OWNER acceptance in Preview;
- only then production enablement.

## Public-source verification (2026-08-20)
Autenti publicly states that its open API can integrate document circulation and signature collection with an external system and points developers to `developers.autenti.com`. Autenti also publicly distinguishes e-signature, advanced and qualified signature types and provides signature validation functionality. These statements support the architecture only; they do not authorize inventing concrete API calls.
