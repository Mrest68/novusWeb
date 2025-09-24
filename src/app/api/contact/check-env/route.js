import { NextResponse } from 'next/server';

export async function GET() {
  const hasKey = !!process.env.RESEND_API_KEY;
  return NextResponse.json({ 
    hasKey,
    keyLength: process.env.RESEND_API_KEY?.length || 0
  });
}