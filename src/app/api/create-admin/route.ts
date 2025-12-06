// import { NextResponse } from "next/server";
// import { connectDB } from "../../../lib/mongodb";
// import AdminUser from "../../../models/AdminUser";
// import bcrypt from "bcryptjs";

// export async function GET() {
//   await connectDB();

//   const hashed = await bcrypt.hash("admin123", 10);

//   await AdminUser.create({
//     email: "admin@example.com",
//     password: hashed,
//   });

//   return NextResponse.json("Admin Created");
// }


import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "../../../lib/mongodb";
import AdminUser from "../../../models/AdminUser";

export async function POST() {
  try {
    await connectDB();

    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    if (!email || !password) {
      return NextResponse.json(
        { error: "ADMIN_EMAIL & ADMIN_PASSWORD missing" },
        { status: 400 }
      );
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await AdminUser.create({
      email,
      password: hashed,
    });

    return NextResponse.json({ success: true, user });
  } catch (err) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
