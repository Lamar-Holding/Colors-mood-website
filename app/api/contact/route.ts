import { type NextRequest, NextResponse } from "next/server"

// In-memory store for contact messages (you can replace with a database)
const contactMessages: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, lang } = body

    // Validate
    if (!name || name.trim().length < 2) {
      return NextResponse.json({ ok: false, error: "Invalid name" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 })
    }

    if (message && message.length > 2000) {
      return NextResponse.json({ ok: false, error: "Message too long" }, { status: 400 })
    }

    // Store message
    const contactMessage = {
      id: Date.now(),
      name,
      email,
      message: message || "",
      lang,
      createdAt: new Date().toISOString(),
    }

    contactMessages.push(contactMessage)

    // Log to console (in production, send real email here)
    console.log("[Contact Form Submission]", {
      name,
      email,
      message: message || "(no message)",
      language: lang,
      timestamp: new Date().toISOString(),
    })

    // TODO: Send email using nodemailer
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: parseInt(process.env.SMTP_PORT || '587'),
    //   secure: false,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // })
    //
    // await transporter.sendMail({
    //   from: process.env.FROM_EMAIL,
    //   to: process.env.TO_EMAIL || 'Sales.dept@colorsmood.com.sa',
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message || '(no message)'}</p>
    //   `,
    // })

    return NextResponse.json({ ok: true, message: "Message received" })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  // Optional: Get all messages (for admin review)
  return NextResponse.json({
    ok: true,
    messages: contactMessages,
    count: contactMessages.length,
  })
}
