import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  // if (req.method === "POST") {
  const body = await req.json();
  const {
    data: { name, email, message, phone, service },
    token,
  } = body;

  if (!token) {
    return NextResponse.json(
      { errorMessage: "Token is required" },
      { status: 400 }
    );
  }

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
    text: `You have a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
  };

  try {
    // console.log(process.env.CAPTCHA_SECRET_KEY, "token-received", token);
    const captchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.CAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );
    const captchaData = await captchaRes.json();
    if (!captchaData.success || captchaData.score < 0.5) {
      return NextResponse.json(
        { errorMessage: "Failed reCAPTCHA verification", captchaData },
        { status: 400 }
      );
    }
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
