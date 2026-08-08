import { NextResponse } from 'next/server';
import { isOwnerSession } from '../../../../lib/ownerAuth';
import { ensureSalesAutomationCase, setFinancingPartnerDecision, syncAllSalesAutomationCases } from '../../../../lib/salesAutomation';

export async function POST(request: Request) {
  if (!(await isOwnerSession())) {
    return NextResponse.json({ ok: false, error: 'Brak autoryzacji OWNER.' }, { status: 401 });
  }

  try {
    const body = await request.json().catch(() => ({}));

    if (body.action === 'RUN_ALL') {
      const result = await syncAllSalesAutomationCases();
      return NextResponse.json({ ok: result.failed === 0, result }, { headers: { 'Cache-Control': 'no-store' } });
    }

    const offerId = Number(body.offerId);
    if (!Number.isInteger(offerId) || offerId <= 0) {
      return NextResponse.json({ ok: false, error: 'Nieprawidłowy identyfikator sprawy.' }, { status: 400 });
    }

    if (body.partnerDecision === 'APPROVED_BY_PARTNER' || body.partnerDecision === 'DECLINED_BY_PARTNER') {
      const automation = await setFinancingPartnerDecision(offerId, body.partnerDecision);
      return NextResponse.json({ ok: true, automation }, { headers: { 'Cache-Control': 'no-store' } });
    }

    const financingRequested = body.financingRequested === true;
    const financingAmount = typeof body.financingAmount === 'string' ? body.financingAmount.trim().slice(0, 120) : null;
    const automation = await ensureSalesAutomationCase(offerId, { financingRequested, financingAmount });

    return NextResponse.json({ ok: true, automation }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('OWNER automation control failed', error);
    return NextResponse.json({ ok: false, error: 'Nie udało się wykonać automatyzacji.' }, { status: 500 });
  }
}
