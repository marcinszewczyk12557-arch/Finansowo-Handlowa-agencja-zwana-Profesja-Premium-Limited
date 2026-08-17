/**
 * Invoice generation logic.
 *
 * Produces DRAFT or finalised invoice records with legally-required fields.
 * VAT 0% requires an explicit eligibility gate; it is never hardcoded globally.
 */

import { prisma } from './prisma';
import { determineVatEligibility, VatEligibilityInput } from './vatEligibility';

async function generateInvoiceNumber(): Promise<string> {
  const ts = new Date();
  const y  = ts.getFullYear();
  const m  = String(ts.getMonth() + 1).padStart(2, '0');
  const prefix = `PPL/${y}/${m}/`;
  const count = await prisma.invoice.count({
    where: { number: { startsWith: prefix } },
  });
  const seq = String(count + 1).padStart(4, '0');
  return `${prefix}${seq}`;
}

export interface CreateInvoiceInput {
  offerId:            number;
  orderId?:           number | null;
  issuerName:         string;
  issuerAddress:      string;
  issuerTaxId:        string;
  buyerName:          string;
  buyerAddress:       string;
  buyerTaxId?:        string | null;
  currency?:          string;
  netAmount:          string;
  poReference?:       string | null;
  contractReference?: string | null;
  deliveryEvidence?:  string | null;
  dueDate?:           Date | null;
  bankIban?:          string | null;
  notes?:             string | null;
  status?:            'DRAFT' | 'ISSUED';
  vatInput:           VatEligibilityInput;
}

function parseDecimal(s: string): number {
  return parseFloat(s.replace(/[^\d.-]/g, '')) || 0;
}

export async function createInvoice(input: CreateInvoiceInput) {
  const vatResult = determineVatEligibility(input.vatInput);

  const net = parseDecimal(input.netAmount);
  let vatAmount = 0;
  if (vatResult.vatRate !== 'PENDING' && vatResult.vatRate !== 'MANUAL_REVIEW') {
    const rateNum = parseFloat(vatResult.vatRate.replace('%', '')) / 100;
    vatAmount = Math.round(net * rateNum * 100) / 100;
  }
  const gross = Math.round((net + vatAmount) * 100) / 100;

  const number = await generateInvoiceNumber();

  const invoice = await prisma.invoice.create({
    data: {
      number,
      offerId:           input.offerId,
      orderId:           input.orderId ?? null,
      status:            input.status ?? 'DRAFT',
      issuerName:        input.issuerName.trim(),
      issuerAddress:     input.issuerAddress.trim(),
      issuerTaxId:       input.issuerTaxId.trim(),
      buyerName:         input.buyerName.trim(),
      buyerAddress:      input.buyerAddress.trim(),
      buyerTaxId:        input.buyerTaxId?.trim() ?? null,
      currency:          input.currency ?? 'PLN',
      netAmount:         String(net),
      vatRate:           vatResult.vatRate,
      vatAmount:         String(vatAmount),
      grossAmount:       String(gross),
      vatEligibility:    vatResult.eligibility,
      vatEligibilityNote:vatResult.note,
      poReference:       input.poReference?.trim() ?? null,
      contractReference: input.contractReference?.trim() ?? null,
      deliveryEvidence:  input.deliveryEvidence?.trim() ?? null,
      dueDate:           input.dueDate ?? null,
      bankIban:          input.bankIban?.trim() ?? null,
      notes:             input.notes?.trim() ?? null,
    },
  });

  return { invoice, vatResult };
}

export async function getInvoiceWithFactoring(invoiceId: number) {
  return prisma.invoice.findUnique({
    where: { id: invoiceId },
    include: { factoringPackage: true },
  });
}
