import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ ok: false, message: 'Not implemented' }, { status: 501 });
}

export async function POST() {
  return NextResponse.json({ ok: false, message: 'Not implemented' }, { status: 501 });
}

