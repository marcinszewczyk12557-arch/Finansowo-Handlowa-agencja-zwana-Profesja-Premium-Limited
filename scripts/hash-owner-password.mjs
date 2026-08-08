import { randomBytes, scryptSync } from 'node:crypto';

const password = process.argv[2];
if (!password) {
  console.error('Użycie: node scripts/hash-owner-password.mjs "TWOJE_BARDZO_SILNE_HASLO"');
  process.exit(1);
}
const salt = randomBytes(16).toString('hex');
const hash = scryptSync(password, salt, 64).toString('hex');
const sessionSecret = randomBytes(48).toString('hex');
console.log(`OWNER_PASSWORD_SALT=${salt}`);
console.log(`OWNER_PASSWORD_HASH=${hash}`);
console.log(`OWNER_SESSION_SECRET=${sessionSecret}`);
