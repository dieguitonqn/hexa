// pages/api/send-email.js
import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function sendmail(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, mensaje } = req.body;

    console.log(name, email, mensaje)
    console.log(process.env.EMAIL_SERVER)
    // Configurar el transporte de Nodemailer
    const transporter = nodemailer.createTransport({
      host:process.env.EMAIL_SERVER,
      port: 465,
      secure:true,
      auth: {
        user: process.env.EMAIL_USER, // Usar variables de entorno
        pass: process.env.EMAIL_PASS, // Nunca hardcodear tu contraseña
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // A quien se enviará
      subject: `Nuevo mensaje de ${name}`,
      text: mensaje,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Correo enviado exitosamente' });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ message: 'Error al enviar el correo' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
