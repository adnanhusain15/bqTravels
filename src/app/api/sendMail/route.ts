import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  // if (req.method === "POST") {
  const body = await req.json();
  console.log(body);
  const {
    data: { name, email, message, phone, service },
  } = body;

  // Create a transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_USER, // Your Gmail account
      pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD, // Your Gmail password or app-specific password
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.NEXT_PUBLIC_MAIL_RECEIVER, // Your email to receive form data
    subject: `New Contact Form Submission from ${name}`,
    text: `You have a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\Service: ${service}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { errorMessage: "Error sending email", error },
      { status: 500 }
    );
  }
  // } else {
  //   res.status(405).json({ error: "Method not allowed" });
  // }
}
