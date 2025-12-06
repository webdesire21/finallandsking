import { NextResponse } from "next/server";
import { connectDB } from "../../../../../lib/mongodb";
import Resource from "../../../../../models/Resource";
import mongoose from "mongoose";

// -------------------- UPDATE (PUT) --------------------
export async function PUT(req: Request, context: any) {
  try {
    await connectDB();

    const { id } = await context.params; // ⭐ FIX #1 — unwrap params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const body = await req.json();

    // ⭐ FIX #2 — Duplicate slug logic when updating
    if (body.title) {
      let slug = body.title.toLowerCase().replace(/\s+/g, "-");

      // Check if slug exists in another document
      const existing = await Resource.findOne({
        slug,
        _id: { $ne: id }, // IMPORTANT: exclude current document
      });

      if (existing) {
        // auto increment slug
        let counter = 2;
        let newSlug = `${slug}-${counter}`;

        while (await Resource.findOne({ slug: newSlug })) {
          counter++;
          newSlug = `${slug}-${counter}`;
        }

        slug = newSlug;
      }

      body.slug = slug;
    }

    const updated = await Resource.findByIdAndUpdate(id, body, {
      new: true,
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    console.error("Error PUT /admin/resources/[id]:", error);
    return NextResponse.json(
      { error: error.message || "Server error" },
      { status: 500 }
    );
  }
}

// -------------------- DELETE (DELETE) --------------------
export async function DELETE(req: Request, context: any) {
  try {
    await connectDB();

    const { id } = await context.params; // ⭐ required

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const deleted = await Resource.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { error: "Resource Not Found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Resource deleted successfully",
    });
  } catch (error) {
    console.error("Error DELETE /admin/resources/[id]:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
