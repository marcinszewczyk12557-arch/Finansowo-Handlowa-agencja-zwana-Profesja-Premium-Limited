import { NextResponse } from 'next/server';
import { syncAllSalesAutomationCases } from '../../../../lib/salesAutomation';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const authorization = request.headers.get('authorization');

  if (!secret || authorization !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false, error: 'Unauthorized.' }, { status: 401 });
  }

  try {
    const result = await syncAllSalesAutomationCases();
    return NextResponse.json(
      { ok: result.failed === 0, result },
      { status: result.failed === 0 ? 200 : 207, headers: { 'Cache-Control': 'no-store' } },
    );
  } catch (error) {
    console.error('Scheduled sales automation failed', error);
    return NextResponse.json({ ok: false, error: 'Automation reconciliation failed.' }, { status: 500 });
  }
}
