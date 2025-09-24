import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_dV9KNPiB_KFxTMZfMjffH6LbgCFSKTE9N');

export async function GET() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'mrest046@fiu.edu',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });

    return NextResponse.json({ 
      message: 'Test email sent successfully',
      success: true,
      data 
    });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { message: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}