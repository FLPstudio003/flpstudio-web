import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // 465 = TRUE
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 🔥 DÔLEŽITÉ – overenie SMTP pripojenia
    await transporter.verify();

    await transporter.sendMail({
      from: `"FLPstudio Web" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: "Nová správa z formulára",
      html: `
        <p><strong>Meno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Správa:</strong><br>${message}</p>
      `,
    });

    return res.status(200).json({ message: "Email odoslaný" });
  } catch (error: any) {
    console.error("❌ EMAIL ERROR:", error);

    return res.status(500).json({
      message: "Chyba pri odosielaní emailu",
      error: error?.message || "Unknown error",
    });
  }
}
