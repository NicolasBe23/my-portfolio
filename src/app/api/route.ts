import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactMessageEmail from "@/components/emails/page";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "RESEND_API_KEY não configurada" },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const subject = `New message from ${name}`;

    const data = await resend.emails.send({
      from: "Nicolas Bezerra <contato@nicolassilva.tech>",
      to: ["nicolasbezerra13@gmail.com"],
      subject,
      replyTo: email,
      react: ContactMessageEmail({ name, email, message }),
      text: `Name: ${name}
Email: ${email}

Message:
${message}

— Sent automatically by nicolassilva.tech`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
