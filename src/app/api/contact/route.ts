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
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const smsBody = [
      `New lead: ${name}`,
      service ? `Service: ${service}` : "",
      budget ? `Budget: ${budget}` : "",
      `${message.slice(0, 100)}${message.length > 100 ? "..." : ""}`,
    ]
      .filter(Boolean)
      .join("\n");

    // Send SMS via Verizon email-to-SMS gateway
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: `${process.env.SMS_PHONE}@vtext.com`,
      subject: "",
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
