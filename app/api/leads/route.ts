import { NextRequest, NextResponse } from 'next/server';

const BASE44_ENDPOINT =
  'https://superagent-5dd22ea4.base44.app/functions/captureNepLead';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const resp = await fetch(BASE44_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await resp.json();

    if (!resp.ok) {
      return NextResponse.json(
        { error: data?.error ?? 'Lead capture failed' },
        { status: resp.status }
      );
    }

    return NextResponse.json({ ok: true, id: data.id });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
