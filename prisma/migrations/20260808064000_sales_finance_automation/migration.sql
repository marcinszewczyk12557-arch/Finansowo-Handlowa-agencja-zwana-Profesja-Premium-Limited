CREATE TABLE "SalesAutomationCase" (
    "id" SERIAL NOT NULL,
    "offerId" INTEGER NOT NULL,
    "mode" TEXT NOT NULL DEFAULT 'SALES',
    "stage" TEXT NOT NULL DEFAULT 'INTAKE',
    "financingRequested" BOOLEAN NOT NULL DEFAULT false,
    "financingAmount" TEXT,
    "financingStatus" TEXT NOT NULL DEFAULT 'NOT_REQUESTED',
    "confidentialityLevel" TEXT NOT NULL DEFAULT 'STRICT',
    "externalDisclosureAllowed" BOOLEAN NOT NULL DEFAULT false,
    "nextAction" TEXT,
    "lastRunAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "SalesAutomationCase_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "SalesAutomationEvent" (
    "id" SERIAL NOT NULL,
    "caseId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SalesAutomationEvent_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "SalesAutomationCase_offerId_key" ON "SalesAutomationCase"("offerId");
CREATE INDEX "SalesAutomationCase_stage_idx" ON "SalesAutomationCase"("stage");
CREATE INDEX "SalesAutomationCase_financingStatus_idx" ON "SalesAutomationCase"("financingStatus");
CREATE INDEX "SalesAutomationCase_updatedAt_idx" ON "SalesAutomationCase"("updatedAt");
CREATE INDEX "SalesAutomationEvent_caseId_idx" ON "SalesAutomationEvent"("caseId");
CREATE INDEX "SalesAutomationEvent_createdAt_idx" ON "SalesAutomationEvent"("createdAt");

ALTER TABLE "SalesAutomationCase" ADD CONSTRAINT "SalesAutomationCase_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "Offer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "SalesAutomationEvent" ADD CONSTRAINT "SalesAutomationEvent_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "SalesAutomationCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;
