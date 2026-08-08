import { cookies } from 'next/headers';
import { createHmac, scryptSync, timingSafeEqual } from 'node:crypto';

const COOKIE = 'profesja_owner_session';
const MAX_AGE = 60 * 60 * 8;

function secret() {
  return process.env.OWNER_SESSION_SECRET || '';
}

function sign(value: string) {
  return createHmac('sha256', secret()).update(value).digest('hex');
}

export function ownerAuthConfigured() {
  return Boolean(process.env.OWNER_EMAIL && process.env.OWNER_PASSWORD_HASH && process.env.OWNER_PASSWORD_SALT && secret());
}

export function verifyOwnerCredentials(email: string, password: string) {
  const expectedEmail = process.env.OWNER_EMAIL || '';
  const expectedHash = process.env.OWNER_PASSWORD_HASH || '';
  const salt = process.env.OWNER_PASSWORD_SALT || '';
  if (!expectedEmail || !expectedHash || !salt || !secret()) return false;
  const actual = scryptSync(password, salt, 64).toString('hex');
  const a = Buffer.from(actual, 'hex');
  const b = Buffer.from(expectedHash, 'hex');
  const passwordOk = a.length === b.length && timingSafeEqual(a, b);
  return email.trim().toLowerCase() === expectedEmail.trim().toLowerCase() && passwordOk;
}

export async function createOwnerSession() {
  const issued = `${Date.now()}`;
  const value = `${issued}.${sign(issued)}`;
  const store = await cookies();
  store.set(COOKIE, value, { httpOnly: true, secure: true, sameSite: 'strict', path: '/', maxAge: MAX_AGE });
}

export async function destroyOwnerSession() {
  const store = await cookies();
  store.set(COOKIE, '', { httpOnly: true, secure: true, sameSite: 'strict', path: '/', maxAge: 0 });
}

export async function isOwnerSession() {
  if (!ownerAuthConfigured()) return false;
  const store = await cookies();
  const raw = store.get(COOKIE)?.value || '';
  const [issued, signature] = raw.split('.');
  if (!issued || !signature) return false;
  const age = Date.now() - Number(issued);
  if (!Number.isFinite(age) || age < 0 || age > MAX_AGE * 1000) return false;
  const expected = sign(issued);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}
