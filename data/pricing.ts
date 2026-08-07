export const MIN_ORDER_QUANTITY = 10;
export const MIN_PRICE_MULTIPLIER = 1.74;
export const MAX_PRICE_MULTIPLIER = 1.84;

export function multiplierForQuantity(quantity: number) {
  const qty = Math.max(1, Math.floor(quantity || 1));
  if (qty >= MIN_ORDER_QUANTITY) return MIN_PRICE_MULTIPLIER;
  if (qty <= 1) return MAX_PRICE_MULTIPLIER;
  const step = (MAX_PRICE_MULTIPLIER - MIN_PRICE_MULTIPLIER) / (MIN_ORDER_QUANTITY - 1);
  return MAX_PRICE_MULTIPLIER - step * (qty - 1);
}

export function unitPriceForQuantity(basePrice: number, quantity: number) {
  return Math.round((basePrice * multiplierForQuantity(quantity)) / 10) * 10;
}

export function totalPriceForQuantity(basePrice: number, quantity: number) {
  const qty = Math.max(1, Math.floor(quantity || 1));
  return unitPriceForQuantity(basePrice, qty) * qty;
}

export function pricingRange(basePrice: number) {
  return {
    minUnit: unitPriceForQuantity(basePrice, MIN_ORDER_QUANTITY),
    maxUnit: unitPriceForQuantity(basePrice, 1),
    minOrderTotal: totalPriceForQuantity(basePrice, MIN_ORDER_QUANTITY),
  };
}
