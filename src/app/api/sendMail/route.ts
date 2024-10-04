import nodemailer from "nodemailer";
interface IData {
  message?: string;
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
}
export async function POST(request: Request) {
  const { data } = await request.json();
  const requestData = data as IData;
  // Create a transporter using Mailtrap SMTP settings
  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_SMTP_HOST, // Replace with your Mailtrap SMTP host
    port: process.env.NEXT_PUBLIC_SMTP_PORT, // Replace with your Mailtrap SMTP port
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_USERNAME, // Replace with your Mailtrap username
      pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD, // Replace with your Mailtrap password
    },
  });
  const { name, email, message, phone, service } = requestData;

  try {
    // Send mail with the defined transport object
    await transporter.sendMail({
      from: "demomailtrap.com", // Sender address
      to: "husainadnan15@gmail.com", // List of receivers (your email for testing)
      subject: "New contact request", // Subject line
      text: `Name:${name} Email:${email} Phone:${phone} Service :${service} Message:${message}`, // Plain text body
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
