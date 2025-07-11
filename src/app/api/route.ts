import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Nicolas Bezerra <contato@nicolassilva.pt>",
      to: ["nicolasbezerra13@gmail.com"],
      subject: `Nova mensagem de ${name}`,
      replyTo: email,
      text: message,
      html: `<p><strong>Nome:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Mensagem:</strong><br/>${message}</p>
       <p>This is an automated email, please do not reply to this email.</p>`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
