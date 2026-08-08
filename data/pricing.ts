export const PROFESJA_VOLUME_DISCOUNT_QTY = 10;

/**
 * Compatibility alias used by older components.
 * This is NOT a supplier MOQ. Supplier MOQ is product/category specific
 * and must be confirmed against the current sourcing benchmark.
 */
export const MIN_ORDER_QUANTITY = PROFESJA_VOLUME_DISCOUNT_QTY;

export const MIN_PRICE_MULTIPLIER = 1.72;
export const MAX_PRICE_MULTIPLIER = 1.84;

// Kept for backwards compatibility with older components.
export const CATALOG_MARKUPS = [1.72, 1.75, 1.78, 1.81, 1.84] as const;

export function markupForVariant(index: number, totalVariants: number) {
  const total = Math.max(2, Math.floor(totalVariants || 2));
  const position = Math.min(Math.max(0, Math.floor(index || 0)), total - 1);
  const step = (MAX_PRICE_MULTIPLIER - MIN_PRICE_MULTIPLIER) / (total - 1);
  return MIN_PRICE_MULTIPLIER + step * position;
}

export function multiplierForQuantity(quantity: number) {
  const qty = Math.max(1, Math.floor(quantity || 1));
  if (qty >= PROFESJA_VOLUME_DISCOUNT_QTY) return MIN_PRICE_MULTIPLIER;
  if (qty <= 1) return MAX_PRICE_MULTIPLIER;
  const step = (MAX_PRICE_MULTIPLIER - MIN_PRICE_MULTIPLIER) / (PROFESJA_VOLUME_DISCOUNT_QTY - 1);
  return MAX_PRICE_MULTIPLIER - step * (qty - 1);
}

export function unitPriceForQuantity(basePrice: number, quantity: number) {
  return Math.round((basePrice * multiplierForQuantity(quantity)) / 10) * 10;
}

export function priceWithMarkup(basePrice: number, multiplier: number) {
  return Math.round((basePrice * multiplier) / 10) * 10;
}

export function totalPriceForQuantity(basePrice: number, quantity: number) {
  const qty = Math.max(1, Math.floor(quantity || 1));
  return unitPriceForQuantity(basePrice, qty) * qty;
}

export function pricingRange(basePrice: number) {
  return {
    minUnit: unitPriceForQuantity(basePrice, PROFESJA_VOLUME_DISCOUNT_QTY),
    maxUnit: unitPriceForQuantity(basePrice, 1),
    minOrderTotal: totalPriceForQuantity(basePrice, PROFESJA_VOLUME_DISCOUNT_QTY),
  };
}
