import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET() {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('Missing RESEND_API_KEY for test-simple route');
      return NextResponse.json({ message: 'RESEND_API_KEY not configured', success: false }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'mrest046@fiu.edu',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });

    return NextResponse.json({ message: 'Test email sent successfully', success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ message: error.message || 'Internal server error' }, { status: 500 });
  }
}