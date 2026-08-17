/**
 * Factoring package export.
 *
 * Collects fields required for domestic/international factoring workflows.
 * Does NOT represent financing approval as automatic.
 * Assignment status remains NOT_ASSIGNED until an OWNER explicit action.
 */

import { prisma } from './prisma';

export async function getOrCreateFactoringPackage(invoiceId: number) {
  const existing = await prisma.factoringPackage.findUnique({ where: { invoiceId } });
  if (existing) return existing;
  return prisma.factoringPackage.create({
    data: { invoiceId, assignmentStatus: 'NOT_ASSIGNED' },
  });
}

export interface FactoringExportPayload {
  // Invoice identity
  invoiceNumber:      string;
  invoiceDate:        string;
  dueDate:            string | null;
  currency:           string;
  // Parties
  sellerName:         string;
  sellerTaxId:        string;
  buyerName:          string;
  buyerTaxId:         string | null;
  // Amounts
  netAmount:          string;
  vatRate:            string;
  vatAmount:          string;
  grossAmount:        string;
  // References
  poReference:        string | null;
  contractReference:  string | null;
  deliveryEvidence:   string | null;
  bankIban:           string | null;
  // Assignment
  assignmentStatus:   string;
  assignmentConsentAt:string | null;
  auditReference:     string | null;
  // Disclaimer
  disclaimer:         string;
}

export async function buildFactoringExport(invoiceId: number): Promise<FactoringExportPayload> {
  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    include: { factoringPackage: true },
  });
  if (!invoice) throw new Error('INVOICE_NOT_FOUND');

  const pkg = invoice.factoringPackage ?? await getOrCreateFactoringPackage(invoiceId);

  return {
    invoiceNumber:       invoice.number,
    invoiceDate:         invoice.issuedAt.toISOString().split('T')[0],
    dueDate:             invoice.dueDate ? invoice.dueDate.toISOString().split('T')[0] : null,
    currency:            invoice.currency,
    sellerName:          invoice.issuerName,
    sellerTaxId:         invoice.issuerTaxId,
    buyerName:           invoice.buyerName,
    buyerTaxId:          invoice.buyerTaxId ?? null,
    netAmount:           invoice.netAmount,
    vatRate:             invoice.vatRate,
    vatAmount:           invoice.vatAmount,
    grossAmount:         invoice.grossAmount,
    poReference:         invoice.poReference ?? null,
    contractReference:   invoice.contractReference ?? null,
    deliveryEvidence:    invoice.deliveryEvidence ?? null,
    bankIban:            invoice.bankIban ?? null,
    assignmentStatus:    pkg.assignmentStatus,
    assignmentConsentAt: pkg.assignmentConsentAt?.toISOString() ?? null,
    auditReference:      pkg.auditReference ?? null,
    disclaimer:          'Ten pakiet faktoringowy nie stanowi automatycznej decyzji o finansowaniu. Cesja wierzytelności wymaga odrębnej, udokumentowanej zgody stron oraz decyzji uprawnionej instytucji finansującej.',
  };
}

export async function markFactoringAssignment(
  invoiceId: number,
  status: 'NOT_ASSIGNED' | 'CONSENT_PENDING' | 'ASSIGNED' | 'REJECTED',
  note?: string,
  auditReference?: string,
) {
  await getOrCreateFactoringPackage(invoiceId);
  return prisma.factoringPackage.update({
    where: { invoiceId },
    data: {
      assignmentStatus:    status,
      assignmentConsentAt: status === 'ASSIGNED' ? new Date() : undefined,
      assigneeNote:        note?.trim() ?? null,
      auditReference:      auditReference?.trim() ?? null,
    },
  });
}
