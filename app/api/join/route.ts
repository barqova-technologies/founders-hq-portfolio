import { NextResponse } from "next/server";
import { Resend } from "resend";

// Server-side only — RESEND_API_KEY is never exposed to the browser.
const resend = new Resend(process.env.RESEND_API_KEY);

// Verified sender on your Resend domain, e.g. "Founders HQ <apply@foundershq.org>".
const FROM = process.env.JOIN_FROM_EMAIL ?? "";
// Inbox that receives applications, e.g. "team@foundershq.org".
const TO = process.env.JOIN_TO_EMAIL ?? "";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY || !FROM || !TO) {
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 500 }
    );
  }

  let body: {
    name?: string;
    company?: string;
    title?: string;
    email?: string;
    phone?: string;
    estYear?: string;
    joinType?: string;
    lookingFor?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const company = (body.company ?? "").trim();
  const title = (body.title ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const estYear = (body.estYear ?? "").trim();
  const joinType = (body.joinType ?? "").trim();
  const lookingFor = (body.lookingFor ?? "").trim();

  if (
    !name ||
    !company ||
    !title ||
    !email ||
    !phone ||
    !estYear ||
    !joinType ||
    !lookingFor
  ) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `New Founder's HQ application — ${name} (${joinType})`,
    html: `
      <h2>New Founder's HQ application</h2>
      <p><strong>Full Name:</strong> ${esc(name)}</p>
      <p><strong>Company / Startup:</strong> ${esc(company)}</p>
      <p><strong>Title:</strong> ${esc(title)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      <p><strong>Contact Number:</strong> ${esc(phone)}</p>
      <p><strong>Establishment Year:</strong> ${esc(estYear)}</p>
      <p><strong>How they want to join:</strong> ${esc(joinType)}</p>
      <p><strong>What they're looking for:</strong><br/>${esc(lookingFor).replace(/\n/g, "<br/>")}</p>
    `,
  });

  if (error) {
    return NextResponse.json(
      { error: "Could not send. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
