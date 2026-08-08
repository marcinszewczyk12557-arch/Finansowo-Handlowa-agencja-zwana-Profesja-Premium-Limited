import { NextResponse } from 'next/server';
import { destroyOwnerSession } from '../../../../lib/ownerAuth';

export async function POST(request: Request) {
  await destroyOwnerSession();
  return NextResponse.redirect(new URL('/owner/login', request.url), 303);
}
