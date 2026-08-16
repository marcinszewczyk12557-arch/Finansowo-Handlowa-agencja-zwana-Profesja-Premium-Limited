export const PROFESJA_VOLUME_DISCOUNT_QTY = 10;

/**
 * Compatibility alias used by older components.
 * This is NOT a supplier MOQ. Supplier MOQ is product/category specific
 * and must be confirmed against the current sourcing benchmark.
 */
export const MIN_ORDER_QUANTITY = PROFESJA_VOLUME_DISCOUNT_QTY;

/**
 * Preview pricing policy: customer sale price = verified manufacturer / supplier
 * unit price x 3.25. The supplier price must be verified before a product is
 * published in the qualified catalogue. Taxes, duties, transport and other
 * transaction-specific charges remain subject to the final commercial offer.
 */
export const SUPPLIER_PRICE_MULTIPLIER = 3.25;
export const MIN_PRICE_MULTIPLIER = SUPPLIER_PRICE_MULTIPLIER;
export const MAX_PRICE_MULTIPLIER = SUPPLIER_PRICE_MULTIPLIER;

// Compatibility export used by catalogue components.
export const CATALOG_MARKUPS = [SUPPLIER_PRICE_MULTIPLIER] as const;

export function markupForVariant(_index: number, _totalVariants: number) {
  return SUPPLIER_PRICE_MULTIPLIER;
}

export function multiplierForQuantity(_quantity: number) {
  return SUPPLIER_PRICE_MULTIPLIER;
}

/** basePrice = verified manufacturer / supplier unit price. */
export function unitPriceForQuantity(basePrice: number, _quantity: number) {
  return Math.round(basePrice * SUPPLIER_PRICE_MULTIPLIER * 100) / 100;
}

/** Compatibility name: multiplier is the commercial sale-price multiplier. */
export function priceWithMarkup(basePrice: number, multiplier = SUPPLIER_PRICE_MULTIPLIER) {
  return Math.round(basePrice * multiplier * 100) / 100;
}

export function totalPriceForQuantity(basePrice: number, quantity: number) {
  const qty = Math.max(1, Math.floor(quantity || 1));
  return unitPriceForQuantity(basePrice, qty) * qty;
}

export function pricingRange(basePrice: number) {
  const unit = unitPriceForQuantity(basePrice, 1);
  return {
    minUnit: unit,
    maxUnit: unit,
    minOrderTotal: unit * PROFESJA_VOLUME_DISCOUNT_QTY,
  };
}
