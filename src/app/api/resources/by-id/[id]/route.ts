// import { NextResponse } from "next/server";
// import { connectDB } from "../../../../../lib/mongodb";
// import Resource from "../../../../../models/Resource";
// import mongoose from "mongoose";

// export async function GET(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectDB();

//     if (!mongoose.Types.ObjectId.isValid(params.id)) {
//       return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
//     }

//     const item = await Resource.findById(params.id);

//     if (!item) {
//       return NextResponse.json({ error: "Not found" }, { status: 404 });
//     }

//     return NextResponse.json(item);
//   } catch (error) {
//     console.error("GET /resources/by-id error:", error);
//     return NextResponse.json(
//       { error: "Server error" },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import { connectDB } from "../../../../../lib/mongodb";
import Resource from "../../../../../models/Resource";
import mongoose from "mongoose";

export async function GET(req: Request, context: any) {
  try {
    const { params } = context;
    const { id } = await params; // ✅ FIXED: await params

    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const item = await Resource.findById(id);

    if (!item) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error) {
    console.error("GET /resources/by-id error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
