-- Expand the existing Offer model for real B2B inquiry intake.
ALTER TABLE "Offer"
  ADD COLUMN IF NOT EXISTS "company" TEXT,
  ADD COLUMN IF NOT EXISTS "contact" TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS "email" TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS "phone" TEXT,
  ADD COLUMN IF NOT EXISTS "quantity" TEXT,
  ADD COLUMN IF NOT EXISTS "market" TEXT,
  ADD COLUMN IF NOT EXISTS "budget" TEXT,
  ADD COLUMN IF NOT EXISTS "details" TEXT;

CREATE UNIQUE INDEX IF NOT EXISTS "Offer_number_key" ON "Offer"("number");
CREATE INDEX IF NOT EXISTS "Offer_email_idx" ON "Offer"("email");
CREATE INDEX IF NOT EXISTS "Offer_status_idx" ON "Offer"("status");
CREATE INDEX IF NOT EXISTS "Offer_createdAt_idx" ON "Offer"("createdAt");
