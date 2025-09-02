import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactMessageEmail from "@/components/emails/page";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const subject = `New message from ${name}`;

    const data = await resend.emails.send({
      from: "Nicolas Bezerra <contato@nicolassilva.pt>",
      to: ["nicolasbezerra13@gmail.com"],
      subject,
      replyTo: email,
      react: ContactMessageEmail({ name, email, message }),
      text: `Name: ${name}
Email: ${email}

Message:
${message}

— Sent automatically by nicolassilva.pt`,
    });

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
