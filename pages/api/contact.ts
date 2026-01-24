import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message, service } = req.body;

  if (!name || !email || !message || !service) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    await resend.emails.send({
      from: "FLPstudio <info@flpstudio.sk>",
      to: ["info@flpstudio.sk"],
      replyTo: email, // <-- OPRAVENÉ TU!
      subject: "Nová cenová ponuka – FLPstudio.sk",
      html: `
        <h2>Nová žiadosť o cenovú ponuku</h2>
        <p><strong>Meno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Služba:</strong> ${service}</p>
        <p><strong>Správa:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("RESEND ERROR:", error);
    return res.status(500).json({ message: "Chyba pri odosielaní emailu" });
  }
}
