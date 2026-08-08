import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  const startedAt = Date.now();
  const databaseConfigured = Boolean(process.env.DATABASE_URL);

  let database: 'ok' | 'unconfigured' | 'error' = databaseConfigured ? 'ok' : 'unconfigured';
  let databaseMessage: string | undefined;

  if (databaseConfigured) {
    try {
      await prisma.$queryRaw`SELECT 1`;
    } catch (error) {
      database = 'error';
      databaseMessage = error instanceof Error ? error.message.slice(0, 180) : 'Database connection failed';
    }
  }

  const ready = database === 'ok';

  return NextResponse.json(
    {
      ok: true,
      service: 'PROFESJA PREMIUM LIMITED',
      app: 'online',
      database,
      ready,
      environment: process.env.VERCEL_ENV || process.env.NODE_ENV || 'unknown',
      commit: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 12) || null,
      checkedAt: new Date().toISOString(),
      responseMs: Date.now() - startedAt,
      ...(databaseMessage ? { databaseMessage } : {}),
    },
    {
      status: ready ? 200 : 503,
      headers: { 'Cache-Control': 'no-store, max-age=0' },
    },
  );
}
