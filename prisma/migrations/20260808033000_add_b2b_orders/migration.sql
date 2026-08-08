CREATE TABLE IF NOT EXISTS "Order" (
  "id" SERIAL PRIMARY KEY,
  "number" TEXT NOT NULL,
  "offerId" INTEGER NOT NULL,
  "company" TEXT,
  "contact" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "product" TEXT NOT NULL,
  "quantity" TEXT,
  "amount" TEXT,
  "status" TEXT NOT NULL DEFAULT 'CREATED',
  "notes" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Order_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "Offer"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "Order_number_key" ON "Order"("number");
CREATE UNIQUE INDEX IF NOT EXISTS "Order_offerId_key" ON "Order"("offerId");
CREATE INDEX IF NOT EXISTS "Order_status_idx" ON "Order"("status");
CREATE INDEX IF NOT EXISTS "Order_email_idx" ON "Order"("email");
CREATE INDEX IF NOT EXISTS "Order_createdAt_idx" ON "Order"("createdAt");
