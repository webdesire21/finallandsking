import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: "Contact Form ",
      to: "info@Landsking Infra.com",
      subject: " Contact Form Submission",
      text: ` Contact Form Submission:

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: "Email sent successfully",
    });
  } catch (error) {
    console.log("Mail error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
