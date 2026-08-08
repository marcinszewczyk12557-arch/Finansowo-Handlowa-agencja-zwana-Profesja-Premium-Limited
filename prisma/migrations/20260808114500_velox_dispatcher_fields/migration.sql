ALTER TABLE "Order"
ADD COLUMN "dispatcherStatus" TEXT NOT NULL DEFAULT 'RECEIVED',
ADD COLUMN "pickupAddress" TEXT,
ADD COLUMN "pickupAt" TIMESTAMP(3),
ADD COLUMN "transportDocument" TEXT;

CREATE INDEX "Order_dispatcherStatus_idx" ON "Order"("dispatcherStatus");
