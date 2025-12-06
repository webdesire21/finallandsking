import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mongodb";
import Resource from "../../../../models/Resource";

export async function GET(request: Request, context: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await context.params; 

    await connectDB();

    const item = await Resource.findOne({ slug });

    if (!item) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error) {
    console.error("Slug API Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
