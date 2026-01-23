import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message, service } = req.body;

  if (!name || !email || !message || !service) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  try {
    const data = await resend.emails.send({
      from: 'FLPstudio <info@flpstudio.sk>', // musí byť doména cez Resend
      to: 'info@flpstudio.sk',               // kam ti to má prísť
      reply_to: email,                       // aby si mohol odpísať zákazníkovi
      subject: 'Nová cenová ponuka z FLPstudio.sk',
      html: `
        <h2>Nová žiadosť o cenovú ponuku</h2>
        <p><strong>Meno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Služba:</strong> ${service}</p>
        <p><strong>Správa:</strong><br>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('RESEND ERROR:', error);
    return res.status(500).json({ message: 'Chyba pri odosielaní emailu' });
  }
}
