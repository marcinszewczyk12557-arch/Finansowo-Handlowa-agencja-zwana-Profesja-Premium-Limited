CREATE TABLE IF NOT EXISTS "OwnerLoginAttempt" (
  "key" TEXT NOT NULL,
  "failures" INTEGER NOT NULL DEFAULT 0,
  "blockedUntil" TIMESTAMP(3),
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "OwnerLoginAttempt_pkey" PRIMARY KEY ("key")
);
