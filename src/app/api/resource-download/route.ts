import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import ResourceDownload from "../../../models/ResourceDownload";

export async function POST(req: Request) {
  try {
    await connectDB();

    const data = await req.json();
    const created = await ResourceDownload.create(data);

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error("Error saving download form:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
