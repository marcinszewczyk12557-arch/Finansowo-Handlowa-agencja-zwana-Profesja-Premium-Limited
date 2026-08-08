ALTER TABLE "Order"
  ADD COLUMN IF NOT EXISTS "shippingMethod" TEXT,
  ADD COLUMN IF NOT EXISTS "shippingAddress" TEXT,
  ADD COLUMN IF NOT EXISTS "carrier" TEXT,
  ADD COLUMN IF NOT EXISTS "trackingNumber" TEXT,
  ADD COLUMN IF NOT EXISTS "trackingUrl" TEXT,
  ADD COLUMN IF NOT EXISTS "estimatedDelivery" TIMESTAMP(3),
  ADD COLUMN IF NOT EXISTS "confirmedAt" TIMESTAMP(3),
  ADD COLUMN IF NOT EXISTS "shippedAt" TIMESTAMP(3),
  ADD COLUMN IF NOT EXISTS "deliveredAt" TIMESTAMP(3),
  ADD COLUMN IF NOT EXISTS "orderConfirmation" TEXT,
  ADD COLUMN IF NOT EXISTS "commercialOffer" TEXT,
  ADD COLUMN IF NOT EXISTS "fulfillmentDocument" TEXT;

CREATE INDEX IF NOT EXISTS "Order_trackingNumber_idx" ON "Order"("trackingNumber");
