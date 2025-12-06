import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import Resource from "../../../models/Resource";

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");
    const industry = searchParams.get("industry");
    const search = searchParams.get("search");

    let filter: any = {};

    if (type && type !== "All") filter.type = type;
    if (industry && industry !== "All") filter.industry = industry;
    if (search)
      filter.title = { $regex: search, $options: "i" }; // case-insensitive search

    const data = await Resource.find(filter).sort({ createdAt: -1 });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error GET /api/resources:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
