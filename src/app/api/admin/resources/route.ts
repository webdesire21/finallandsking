// import { NextResponse } from "next/server";
// import { connectDB } from "../../../../lib/mongodb";
// import Resource from "../../../../models/Resource";

// export async function POST(req: Request) {
//   try {
//     await connectDB();
//     const body = await req.json();

//     const newItem = await Resource.create(body);

//     return NextResponse.json(newItem, { status: 201 });
//   } catch (error) {
//     console.error("Error POST /admin/resources:", error);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mongodb";
import Resource from "../../../../models/Resource";

// ------------------ CREATE RESOURCE ------------------
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    if (!body.title || !body.type || !body.description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Generate base slug
    let slug = body.title.toLowerCase().replace(/\s+/g, "-");

    // Check if slug exists → auto-increment
    let existing = await Resource.findOne({ slug });

    let counter = 2;
    while (existing) {
      const newSlug = `${slug}-${counter}`;
      existing = await Resource.findOne({ slug: newSlug });
      if (!existing) {
        slug = newSlug;
        break;
      }
      counter++;
    }

    const payload = {
      type: body.type || "",
      industry: body.industry || "",
      title: body.title,
      description: body.description || "",
      question: body.question || "",
      detailedDescription: body.detailedDescription || "",
      longDescription: body.longDescription || "",
      image: body.image || "",
      imagebanner: body.imagebanner || "",
      linkpdf: body.linkpdf || "",
      slug,
    };

    const newItem = await Resource.create(payload);

    return NextResponse.json(newItem, { status: 201 });

  } catch (error: any) {
    console.error("Error | POST /admin/resources:", error);
    return NextResponse.json(
      { error: error.message || "Server Error" },
      { status: 500 }
    );
  }
}
