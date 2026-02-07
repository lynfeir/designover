import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, budget, timeline, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection before sending
    await transporter.verify();

    const smsBody = [
      `NEW LEAD: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      service ? `Service: ${service}` : "",
      budget ? `Budget: ${budget}` : "",
      timeline ? `Timeline: ${timeline}` : "",
      `Msg: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    // Send via Verizon MMS gateway (vzwpix.com) for longer messages
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: `${process.env.SMS_PHONE}@vzwpix.com`,
      subject: "New Lead",
      text: smsBody,
    });

    // Also send a full email to yourself with all details
    const emailBody = `
New Contact Form Submission
----------------------------
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Service: ${service || "Not selected"}
Budget: ${budget || "Not selected"}
Timeline: ${timeline || "Not selected"}

Message:
${message}
`.trim();

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
      subject: `New Lead: ${name} — ${service || "General Inquiry"}`,
      text: emailBody,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
