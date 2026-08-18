-- Migration: invoice, factoring package, stage-link

CREATE SEQUENCE "InvoiceNumberSeq" START 1;

CREATE TABLE "Invoice" (
    "id"                 SERIAL PRIMARY KEY,
    "number"             TEXT NOT NULL,
    "offerId"            INTEGER NOT NULL,
    "orderId"            INTEGER,
    "status"             TEXT NOT NULL DEFAULT 'DRAFT',
    "issuerName"         TEXT NOT NULL,
    "issuerAddress"      TEXT NOT NULL,
    "issuerTaxId"        TEXT NOT NULL,
    "buyerName"          TEXT NOT NULL,
    "buyerAddress"       TEXT NOT NULL,
    "buyerTaxId"         TEXT,
    "currency"           TEXT NOT NULL DEFAULT 'PLN',
    "netAmount"          TEXT NOT NULL,
    "vatRate"            TEXT NOT NULL,
    "vatAmount"          TEXT NOT NULL,
    "grossAmount"        TEXT NOT NULL,
    "vatEligibility"     TEXT NOT NULL DEFAULT 'STANDARD',
    "vatEligibilityNote" TEXT,
    "poReference"        TEXT,
    "contractReference"  TEXT,
    "deliveryEvidence"   TEXT,
    "issuedAt"           TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate"            TIMESTAMP(3),
    "paidAt"             TIMESTAMP(3),
    "bankIban"           TEXT,
    "notes"              TEXT,
    "createdAt"          TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"          TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX "Invoice_number_key" ON "Invoice"("number");
CREATE INDEX "Invoice_offerId_idx"   ON "Invoice"("offerId");
CREATE INDEX "Invoice_status_idx"    ON "Invoice"("status");
CREATE INDEX "Invoice_issuedAt_idx"  ON "Invoice"("issuedAt");

ALTER TABLE "Invoice"
    ADD CONSTRAINT "Invoice_offerId_fkey"
    FOREIGN KEY ("offerId") REFERENCES "Offer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

CREATE TABLE "FactoringPackage" (
    "id"                  SERIAL PRIMARY KEY,
    "invoiceId"           INTEGER NOT NULL,
    "assignmentStatus"    TEXT NOT NULL DEFAULT 'NOT_ASSIGNED',
    "assignmentConsentAt" TIMESTAMP(3),
    "assigneeNote"        TEXT,
    "auditReference"      TEXT,
    "exportedAt"          TIMESTAMP(3),
    "createdAt"           TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"           TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX "FactoringPackage_invoiceId_key" ON "FactoringPackage"("invoiceId");
CREATE INDEX "FactoringPackage_assignmentStatus_idx" ON "FactoringPackage"("assignmentStatus");

ALTER TABLE "FactoringPackage"
    ADD CONSTRAINT "FactoringPackage_invoiceId_fkey"
    FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE "StageLink" (
    "id"        SERIAL PRIMARY KEY,
    "token"     TEXT NOT NULL,
    "offerId"   INTEGER NOT NULL,
    "stage"     TEXT NOT NULL,
    "shortUrl"  TEXT,
    "provider"  TEXT,
    "purpose"   TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3),
    "disabled"  BOOLEAN NOT NULL DEFAULT FALSE,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX "StageLink_token_key" ON "StageLink"("token");
CREATE INDEX "StageLink_offerId_idx"  ON "StageLink"("offerId");
CREATE INDEX "StageLink_token_idx"    ON "StageLink"("token");
CREATE INDEX "StageLink_stage_idx"    ON "StageLink"("stage");

ALTER TABLE "StageLink"
    ADD CONSTRAINT "StageLink_offerId_fkey"
    FOREIGN KEY ("offerId") REFERENCES "Offer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE "StageLinkEvent" (
    "id"         SERIAL PRIMARY KEY,
    "linkId"     INTEGER NOT NULL,
    "eventType"  TEXT NOT NULL,
    "metadata"   TEXT,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "StageLinkEvent_linkId_idx"     ON "StageLinkEvent"("linkId");
CREATE INDEX "StageLinkEvent_recordedAt_idx" ON "StageLinkEvent"("recordedAt");

ALTER TABLE "StageLinkEvent"
    ADD CONSTRAINT "StageLinkEvent_linkId_fkey"
    FOREIGN KEY ("linkId") REFERENCES "StageLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;
