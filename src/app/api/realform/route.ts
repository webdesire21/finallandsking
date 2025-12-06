import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      activeTab,
      projectType,
      location,
      bedroom,
      priceRange,
      constructionStatus,
      buildingType,
    } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Property Search" <${process.env.EMAIL}>`,
      to: "satputeom706@gmail.com",
      subject: " Property Search Submission",

      text: `
A user submitted a property search:

TAB: ${activeTab}

Project Type: ${projectType || "Not Provided"}
Location: ${location || "Not Provided"}
Bedrooms: ${bedroom || "Not Provided"}
Price Range: ${priceRange?.[0]} Cr - ${priceRange?.[1]} Cr

Construction Status: ${constructionStatus || "Not Provided"}
Building Type: ${buildingType || "Not Provided"}

Submitted On: ${new Date().toLocaleString()}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Property search submitted ",
    });
  } catch (error) {
    console.error("Email Error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
