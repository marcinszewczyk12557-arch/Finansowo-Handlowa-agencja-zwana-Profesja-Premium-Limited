import { createHmac } from 'node:crypto';
import { NextResponse } from 'next/server';
import { createOwnerSession, ownerAuthConfigured, verifyOwnerCredentials } from '../../../../lib/ownerAuth';
import { prisma } from '../../../../lib/prisma';

const MAX_FAILURES = 5;
const BLOCK_MINUTES = 15;

function rateLimitKey(request: Request, email: string) {
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const secret = process.env.OWNER_SESSION_SECRET || 'owner-login-rate-limit';
  return createHmac('sha256', secret).update(`${forwarded}|${email.trim().toLowerCase()}`).digest('hex');
}

export async function POST(request: Request) {
  if (!ownerAuthConfigured()) {
    return NextResponse.redirect(new URL('/owner/login?error=config', request.url), 303);
  }

  const form = await request.formData();
  const email = String(form.get('email') || '');
  const password = String(form.get('password') || '');
  const key = rateLimitKey(request, email);

  if (process.env.DATABASE_URL) {
    const attempt = await prisma.ownerLoginAttempt.findUnique({ where: { key } });
    if (attempt?.blockedUntil && attempt.blockedUntil.getTime() > Date.now()) {
      return NextResponse.redirect(new URL('/owner/login?error=locked', request.url), 303);
    }
  }

  if (!verifyOwnerCredentials(email, password)) {
    if (process.env.DATABASE_URL) {
      const current = await prisma.ownerLoginAttempt.findUnique({ where: { key } });
      const failures = (current?.failures || 0) + 1;
      const blockedUntil = failures >= MAX_FAILURES ? new Date(Date.now() + BLOCK_MINUTES * 60 * 1000) : null;
      await prisma.ownerLoginAttempt.upsert({
        where: { key },
        update: { failures, blockedUntil },
        create: { key, failures, blockedUntil },
      });
    }
    return NextResponse.redirect(new URL('/owner/login?error=credentials', request.url), 303);
  }

  if (process.env.DATABASE_URL) {
    await prisma.ownerLoginAttempt.delete({ where: { key } }).catch(() => undefined);
  }

  await createOwnerSession();
  return NextResponse.redirect(new URL('/owner', request.url), 303);
}
