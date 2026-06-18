import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Invalid name' }, { status: 400 })
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ error: 'Message too short' }, { status: 400 })
    }

    // Log the message (replace with Resend/EmailJS/Nodemailer when ready)
    console.log('📬 New contact form submission:')
    console.log(`  From: ${name} <${email}>`)
    console.log(`  Message: ${message}`)
    console.log(`  Timestamp: ${new Date().toISOString()}`)

    // TODO: integrate an email service here:
    //   Option 1: Resend — import { Resend } from 'resend'
    //   Option 2: EmailJS
    //   Option 3: Nodemailer with SMTP
    // For now, we return success so the frontend UX works correctly.

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
