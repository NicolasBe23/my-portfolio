import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactMessageEmail from "@/components/emails/page";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY não configurada");

      return NextResponse.json(
        { error: "Configuração de e-mail em falta" },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Nicolas Bezerra <contato@nicolassilva.tech>",
      to: ["nicolasbezerra13@gmail.com"],
      subject: `New message from ${name}`,
      replyTo: email,
      react: ContactMessageEmail({ name, email, message }),
      text: `Name: ${name}
Email: ${email}

Message:
${message}

— Sent automatically by nicolassilva.tech`,
    });

    if (error) {
      console.error("Erro do Resend:", error);

      return NextResponse.json(
        { error: "Não foi possível enviar o e-mail" },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Erro na rota de envio:", error);

    return NextResponse.json(
      { error: "Erro interno ao enviar o e-mail" },
      { status: 500 },
    );
  }
}
