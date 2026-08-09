import { NextResponse } from 'next/server';
import { strictPublicOffers } from '../../../../data/strictQualifiedOffers';
import { strictPublicOfficeOffers } from '../../../../data/strictQualifiedOffersOffice';
import { strictPublicOffersExpansion2 } from '../../../../data/strictQualifiedOffersExpansion2';
import { strictPublicCashHandlingOffers } from '../../../../data/strictQualifiedOffersCashHandling';
import { strictPublicWaterOffers } from '../../../../data/strictQualifiedOffersWater';
import { strictPublicHvacOffers } from '../../../../data/strictQualifiedOffersHvac';
import { hasFullSupplierEvidence } from '../../../../data/supplierEvidenceRegistry';

export const dynamic = 'force-dynamic';

type InternalOffer = ReturnType<typeof strictPublicOffers>[number];

type PublicQualifiedOffer = {
  id: string;
  category: string;
  title: string;
  use: string;
  purpose: string;
  function: string;
  supplierYears: number;
};

function sanitize(offer: InternalOffer): PublicQualifiedOffer {
  return {
    id: String(offer.id),
    category: String(offer.category),
    title: String(offer.title),
    use: String(offer.use),
    purpose: String(offer.purpose),
    function: String(offer.function),
    supplierYears: Number(offer.supplierYears) || 0,
  };
}

export async function GET() {
  const candidates = [
    ...strictPublicOffers(),
    ...strictPublicOfficeOffers(),
    ...strictPublicOffersExpansion2(),
    ...strictPublicCashHandlingOffers(),
    ...strictPublicWaterOffers(),
    ...strictPublicHvacOffers(),
  ];

  const ids = new Set<string>();
  const titles = new Set<string>();
  const offers = candidates
    .filter(hasFullSupplierEvidence)
    .filter((offer) => {
      const id = String(offer.id);
      const title = String(offer.title).trim().toLowerCase();
      const unique = !ids.has(id) && !titles.has(title);
      ids.add(id);
      titles.add(title);
      return unique;
    })
    .map((offer) => sanitize(offer as InternalOffer));

  return NextResponse.json(
    { ok: true, offers },
    {
      headers: {
        'Cache-Control': 'public, max-age=300, s-maxage=900, stale-while-revalidate=1800',
        'X-Robots-Tag': 'noindex',
      },
    },
  );
}
