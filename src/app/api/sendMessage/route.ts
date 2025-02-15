import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { formData } = await req.json();

  console.log(formData);
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "ivanakrapovic0@gmail.com",
        pass: "qmqb fjle tqnp ipaa",
      },
    });

    const mailOptions = {
      from: '"Solar Inquiry" <ivanakrapovic0@gmail.com>',
      to: "iakrap00@fesb.hr",
      subject: "New Solar Panel Message",
      text: `
        A new imessage has been submitted:

        Name: ${formData.name }
        Email: ${formData.email}
        Message: ${formData.message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Inquiry sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send the inquiry." }, { status: 500 });
  }
}
