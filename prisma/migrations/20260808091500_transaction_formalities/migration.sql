CREATE TABLE "TransactionFormalities" (
    "id" SERIAL NOT NULL,
    "offerId" INTEGER NOT NULL,
    "sourceDocumentVersion" TEXT NOT NULL DEFAULT 'FORMALNOSCI-PPL-2026-08-08',
    "sourceDocumentName" TEXT NOT NULL DEFAULT 'formalności projektu Profesja Premium Limited.pdf',
    "productSnapshot" TEXT,
    "quantitySnapshot" TEXT,
    "marketSnapshot" TEXT,
    "valueSnapshot" TEXT,
    "financingRequested" BOOLEAN NOT NULL DEFAULT false,
    "financingAmount" TEXT,
    "shippingMethodSnapshot" TEXT,
    "shippingAddressSnapshot" TEXT,
    "estimatedDeliverySnapshot" TIMESTAMP(3),
    "negotiationStatus" TEXT NOT NULL DEFAULT 'COLLECTING_FACTS',
    "clientDeclarationStatus" TEXT NOT NULL DEFAULT 'PENDING',
    "insuranceConsentStatus" TEXT NOT NULL DEFAULT 'PENDING',
    "shippingConsentStatus" TEXT NOT NULL DEFAULT 'PENDING',
    "businessUseConsentStatus" TEXT NOT NULL DEFAULT 'PENDING',
    "interestConsentStatus" TEXT NOT NULL DEFAULT 'PENDING',
    "intermediationConsentStatus" TEXT NOT NULL DEFAULT 'PENDING',
    "monthlySettlementStatus" TEXT NOT NULL DEFAULT 'PENDING',
    "earlyTerminationStatus" TEXT NOT NULL DEFAULT 'PENDING',
    "finalSignatureStatus" TEXT NOT NULL DEFAULT 'PENDING',
    "signatureMethod" TEXT,
    "signedAt" TIMESTAMP(3),
    "autoFilledAt" TIMESTAMP(3),
    "lastNegotiationAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransactionFormalities_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "TransactionFormalities_offerId_key" ON "TransactionFormalities"("offerId");
CREATE INDEX "TransactionFormalities_negotiationStatus_idx" ON "TransactionFormalities"("negotiationStatus");
CREATE INDEX "TransactionFormalities_finalSignatureStatus_idx" ON "TransactionFormalities"("finalSignatureStatus");
CREATE INDEX "TransactionFormalities_updatedAt_idx" ON "TransactionFormalities"("updatedAt");

ALTER TABLE "TransactionFormalities"
ADD CONSTRAINT "TransactionFormalities_offerId_fkey"
FOREIGN KEY ("offerId") REFERENCES "Offer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
