import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_dV9KNPiB_KFxTMZfMjffH6LbgCFSKTE9N');

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, projectType, budget, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !projectType) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['mrest046@fiu.edu'],
      subject: `New Consultation Request - ${projectType}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}