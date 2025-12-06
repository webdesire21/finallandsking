import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import Resource from "../../../models/Resource";

export async function GET() {
  try {
    await connectDB();

    // Get latest 10 insights (Blogs, Case Studies, Whitepapers)
    const insights = await Resource.find()
      .sort({ createdAt: -1 })
      .limit(10);

    return NextResponse.json(insights);
  } catch (error) {
    console.error("GET /api/insights error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
