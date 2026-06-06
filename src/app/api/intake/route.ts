import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { FEATURE_LABELS } from "@/lib/intake";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      company,
      phone,
      projectType,
      projectName,
      description,
      goals,
      budget,
      timeline,
      pages,
      features,
    } = body ?? {};

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const featureList: string[] = Array.isArray(features) ? features : [];
    const pageList: string[] = Array.isArray(pages) ? pages : [];

    // Link to the signed-in client, if any.
    let userId: string | null = null;
    try {
      const supabase = await createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      userId = user?.id ?? null;
    } catch {
      // anonymous submission — fine
    }

    // ── 1. Persist the lead ──
    const admin = createAdminClient();
    const { data: inserted, error: dbError } = await admin
      .from("intake_submissions")
      .insert({
        user_id: userId,
        name,
        email,
        company: company || null,
        phone: phone || null,
        project_type: projectType || null,
        project_name: projectName || null,
        description: description || null,
        goals: goals || null,
        budget: budget || null,
        timeline: timeline || null,
        pages: pageList,
        features: featureList,
        status: "new",
      })
      .select("id")
      .single();

    if (dbError) {
      console.error("Intake insert error:", dbError);
      return NextResponse.json(
        { error: "Could not save your request. Please try again." },
        { status: 500 }
      );
    }

    // ── 2. Notify Hunter (best-effort; never blocks a saved lead) ──
    const readableFeatures = featureList
      .map((k) => FEATURE_LABELS[k] ?? k)
      .join(", ");

    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        });

        const emailBody = `
New Project Intake
==================================
Name:       ${name}
Email:      ${email}
Company:    ${company || "—"}
Phone:      ${phone || "—"}

Project:    ${projectName || "Untitled"} (${projectType || "unspecified"})
Budget:     ${budget || "—"}
Timeline:   ${timeline || "—"}

Pages:      ${pageList.length ? pageList.join(", ") : "—"}

Features (${featureList.length}):
${readableFeatures || "—"}

Goals:
${goals || "—"}

Details:
${description || "—"}
==================================
Lead ID: ${inserted?.id ?? "?"}
Review in the admin dashboard: /admin
`.trim();

        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
          subject: `New Intake: ${projectName || name} — ${featureList.length} features`,
          text: emailBody,
          replyTo: email,
        });

        if (process.env.SMS_PHONE) {
          await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: `${process.env.SMS_PHONE}@vzwpix.com`,
            subject: "New Intake",
            text: `NEW INTAKE: ${name} — ${projectType || "?"} — ${featureList.length} features, budget ${budget || "?"}. ${email}`,
          });
        }
      }
    } catch (mailError) {
      console.error("Intake email error (lead still saved):", mailError);
    }

    return NextResponse.json({ success: true, id: inserted?.id });
  } catch (error) {
    console.error("Intake route error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
