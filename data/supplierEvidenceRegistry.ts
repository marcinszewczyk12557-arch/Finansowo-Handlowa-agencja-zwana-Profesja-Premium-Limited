export type SupplierEvidenceRecord = {
  supplier: string;
  supplierYears: number;
  verifiedSupplierEvidenceUrl: string;
  tradeAssuranceEvidenceUrl: string;
  verifiedOn: string;
};

// Ten rejestr jest bramką publikacji publicznej. Wpis trafia tutaj dopiero,
// gdy istnieją aktualne dowody Alibaba.com potwierdzające łącznie:
// Verified Supplier, staż >= 3 lata oraz dostawca-/oferta-specyficzne wskazanie
// Trade Assurance. Ogólna strona programu Trade Assurance nie wystarcza.
export const supplierEvidenceRegistry: SupplierEvidenceRecord[] = [
  {
    supplier: 'Guangzhou Huashi Furniture Manufacturing Co., Ltd.',
    supplierYears: 5,
    verifiedSupplierEvidenceUrl: 'https://www.alibaba.com/supplier/office-furniture-manufacturer-and-supplier.html',
    tradeAssuranceEvidenceUrl: 'https://www.alibaba.com/staff-chair-suppliers.html',
    verifiedOn: '2026-08-08'
  },
  {
    supplier: 'Zhejiang Chuanwei Electronic Technology Co., Ltd.',
    supplierYears: 11,
    verifiedSupplierEvidenceUrl: 'https://www.alibaba.com/supplier/vendor-risk-rating.html',
    tradeAssuranceEvidenceUrl: 'https://www.alibaba.com/supplier/alibaba-com-trade-assurance.html',
    verifiedOn: '2026-08-08'
  },
  {
    supplier: 'Henan Shangfeng Hvac Engineering Co., Ltd.',
    supplierYears: 4,
    verifiedSupplierEvidenceUrl: 'https://hnshangfeng.en.alibaba.com/index.html?from=detail&productId=1601724422013',
    tradeAssuranceEvidenceUrl: 'https://www.alibaba.com/search/page?SearchScene=imageTextSearch&productId=1600828473192',
    verifiedOn: '2026-08-08'
  }
];

export function getSupplierEvidence(supplier: string){
  return supplierEvidenceRegistry.find((record)=>record.supplier===supplier);
}

export function hasFullSupplierEvidence(offer:{
  supplier:string;
  supplierYears:number;
  verifiedSupplier:boolean;
  tradeAssuranceRequired:boolean;
}){
  const evidence=getSupplierEvidence(offer.supplier);
  if(!evidence) return false;
  return offer.supplierYears>=3
    && evidence.supplierYears>=3
    && offer.verifiedSupplier===true
    && offer.tradeAssuranceRequired===true;
}
