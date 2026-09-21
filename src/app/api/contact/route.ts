import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactRecipient, contactSchema } from "@/lib/contact";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Los datos enviados no son válidos." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "El envío de correo no está configurado." },
      { status: 500 },
    );
  }

  const values = parsed.data;
  const resend = new Resend(apiKey);
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "ARSOPA Solutions S.A. <beth.t@example.com>";

  const { error } = await resend.emails.send({
    from,
    to: contactRecipient,
    replyTo: values.email,
    subject: `Solicitud de información — ${values.fullName}`,
    text: [
      `Nombre: ${values.fullName}`,
      `Empresa / Organización: ${values.company || "No informado"}`,
      `Tipo de cliente: ${values.clientType}`,
      `Correo: ${values.email}`,
      `Teléfono: ${values.phone || "No informado"}`,
      "",
      "Mensaje:",
      values.message,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
