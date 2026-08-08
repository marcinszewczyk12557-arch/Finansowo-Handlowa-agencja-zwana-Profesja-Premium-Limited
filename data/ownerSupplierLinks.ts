// Owner-controlled mapping: fill only after personal supplier/SKU verification.
// Key format should match the catalog path and offer model, for example:
// 'Smartfony Premium / Gamingowe / Flagowe :: REDMAGIC 11 Pro'
export const ownerSupplierLinks: Record<string, string> = {};

export function getOwnerSupplierLink(key: string) {
  return ownerSupplierLinks[key] || '';
}
