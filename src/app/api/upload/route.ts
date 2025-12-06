// import { NextResponse } from "next/server";
// import fs from "fs";
// import path from "path";

// export async function POST(req: Request) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get("file") as File;

//     if (!file) {
//       return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
//     }

//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);

//     const uploadDir = path.join(process.cwd(), "public/uploads");

//     // create folder if missing
//     if (!fs.existsSync(uploadDir)) {
//       fs.mkdirSync(uploadDir, { recursive: true });
//     }

//     const filename = Date.now() + "-" + file.name.replace(/\s/g, "");

//     fs.writeFileSync(path.join(uploadDir, filename), buffer);

//     return NextResponse.json({
//       success: true,
//       url: `/uploads/${filename}`,
//     });
//   } catch (error) {
//     console.error("Upload error:", error);
//     return NextResponse.json({ error: "Upload failed" }, { status: 500 });
//   }
// }



import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      return NextResponse.json(
        { error: "Cloudinary env vars missing" },
        { status: 500 }
      );
    }

    // Cloudinary form data
    const cloudinaryForm = new FormData();
    cloudinaryForm.append("file", file);
    cloudinaryForm.append("upload_preset", uploadPreset);

    // auto = image/pdf/raw sab handle
    const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;

    const uploadRes = await fetch(uploadUrl, {
      method: "POST",
      body: cloudinaryForm,
    });

    if (!uploadRes.ok) {
      const err = await uploadRes.text();
      console.error("Cloudinary error:", err);
      return NextResponse.json(
        { error: "Upload failed" },
        { status: 500 }
      );
    }

    const json = await uploadRes.json();

    // Frontend expect karega: { url: ... }
    return NextResponse.json({ url: json.secure_url });
  } catch (error) {
    console.error("Upload route error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
