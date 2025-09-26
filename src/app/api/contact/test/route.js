import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET() {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('Missing RESEND_API_KEY for test route');
      return NextResponse.json({ message: 'RESEND_API_KEY not configured', success: false }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: 'Novus Contact Form <onboarding@resend.dev>',
      to: ['miguel.restrepo0303@gmail.com'],
      subject: 'Test Email from Novus Website',
      html: `
        <h2>Test Email</h2>
        <p>This is a test email from your Novus website contact form.</p>
        <p>If you receive this, your email configuration is working correctly!</p>
      `,
    });

    return NextResponse.json({ message: 'Test email sent successfully', success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ message: error.message || 'Internal server error' }, { status: 500 });
  }
}