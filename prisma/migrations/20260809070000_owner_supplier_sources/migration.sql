CREATE TABLE "OwnerSupplierSource" (
    "id" TEXT NOT NULL,
    "catalogPath" TEXT NOT NULL,
    "publicName" TEXT NOT NULL,
    "supplierName" TEXT,
    "supplierType" TEXT NOT NULL DEFAULT 'SUPPLIER',
    "platform" TEXT NOT NULL DEFAULT 'ALIBABA',
    "supplierUrl" TEXT NOT NULL,
    "sku" TEXT,
    "basePrice" TEXT,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "warrantyMonths" INTEGER NOT NULL DEFAULT 12,
    "notes" TEXT,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "OwnerSupplierSource_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "OwnerSupplierSource_catalogPath_idx" ON "OwnerSupplierSource"("catalogPath");
CREATE INDEX "OwnerSupplierSource_publicName_idx" ON "OwnerSupplierSource"("publicName");
CREATE INDEX "OwnerSupplierSource_supplierName_idx" ON "OwnerSupplierSource"("supplierName");
CREATE INDEX "OwnerSupplierSource_status_idx" ON "OwnerSupplierSource"("status");
CREATE INDEX "OwnerSupplierSource_updatedAt_idx" ON "OwnerSupplierSource"("updatedAt");
