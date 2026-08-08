import { NextResponse } from 'next/server';
import { createOwnerSession, ownerAuthConfigured, verifyOwnerCredentials } from '../../../../lib/ownerAuth';

export async function POST(request: Request) {
  if (!ownerAuthConfigured()) {
    return NextResponse.redirect(new URL('/owner/login?error=config', request.url), 303);
  }
  const form = await request.formData();
  const email = String(form.get('email') || '');
  const password = String(form.get('password') || '');
  if (!verifyOwnerCredentials(email, password)) {
    return NextResponse.redirect(new URL('/owner/login?error=credentials', request.url), 303);
  }
  await createOwnerSession();
  return NextResponse.redirect(new URL('/owner', request.url), 303);
}
