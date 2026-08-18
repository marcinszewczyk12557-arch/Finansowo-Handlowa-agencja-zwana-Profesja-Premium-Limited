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
  const rows = await prisma.$queryRaw<Array<{ value: bigint }>>`
    SELECT nextval('"InvoiceNumberSeq"') AS value
  `;
  const seqValue = rows[0]?.value;
  if (seqValue === undefined) throw new Error('INVOICE_SEQUENCE_UNAVAILABLE');
  const seq = seqValue.toString().padStart(6, '0');
  return `PPL/${y}/${m}/${seq}`;
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
  const normalized = s.trim().replace(',', '.');
  if (!/^\d+(?:\.\d{1,2})?$/.test(normalized)) {
    throw new Error('INVALID_NET_AMOUNT');
  }
  const value = Number(normalized);
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error('INVALID_NET_AMOUNT');
  }
  return value;
}

export async function createInvoice(input: CreateInvoiceInput) {
  const vatResult = determineVatEligibility(input.vatInput);
  const requestedStatus = input.status ?? 'DRAFT';

  if (requestedStatus === 'ISSUED' && vatResult.eligibility === 'MANUAL_REVIEW') {
    throw new Error('VAT_REVIEW_REQUIRED');
  }

  const net = parseDecimal(input.netAmount);
  let vatAmount = 0;
  if (vatResult.vatRate !== 'PENDING') {
    const rateNum = Number(vatResult.vatRate.replace('%', '')) / 100;
    if (!Number.isFinite(rateNum) || rateNum < 0) throw new Error('INVALID_VAT_RATE');
    vatAmount = Math.round(net * rateNum * 100) / 100;
  }
  const gross = Math.round((net + vatAmount) * 100) / 100;

  const number = await generateInvoiceNumber();

  const invoice = await prisma.invoice.create({
    data: {
      number,
      offerId:           input.offerId,
      orderId:           input.orderId ?? null,
      status:            requestedStatus,
      issuerName:        input.issuerName.trim(),
      issuerAddress:     input.issuerAddress.trim(),
      issuerTaxId:       input.issuerTaxId.trim(),
      buyerName:         input.buyerName.trim(),
      buyerAddress:      input.buyerAddress.trim(),
      buyerTaxId:        input.buyerTaxId?.trim() ?? null,
      currency:          input.currency ?? 'PLN',
      netAmount:         net.toFixed(2),
      vatRate:           vatResult.vatRate,
      vatAmount:         vatAmount.toFixed(2),
      grossAmount:       gross.toFixed(2),
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
