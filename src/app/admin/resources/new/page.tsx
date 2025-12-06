

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import toast, { Toaster } from "react-hot-toast";

// export default function CreateResource() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     type: "",
//     industry: "",
//     title: "",
//     description: "",
//     question: "",
//     detailedDescription: "",
//     longDescription: "",
//     image: "",
//     imagebanner: "",
//     linkpdf: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

  
//   const uploadFile = async (file: File) => {
//   const fd = new FormData();
//   fd.append("file", file);

//   try {
//     const res = await fetch("/api/upload", { method: "POST", body: fd });

//     if (!res.ok) {
//       toast.error("File upload failed!");
//       return "";
//     }

//     const data = await res.json();
//     if (!data.url) {
//       toast.error("Upload response invalid!");
//       return "";
//     }

//     toast.success("File uploaded successfully!");
//     return data.url;
//   } catch (err) {
//     console.error("Upload error:", err);
//     toast.error("File upload failed!");
//     return "";
//   }
// };


//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const slug = form.title.toLowerCase().replace(/\s+/g, "-");
//       const payload = { ...form, slug };

//       const res = await fetch("/api/admin/resources", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       setLoading(false);

//       if (res.ok) {
//         toast.success("Resource created successfully!");
//         router.push("/admin");
//       } else {
//         toast.error("Failed to create resource!");
//       }
//     } catch (err) {
//       setLoading(false);
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-6">
//       <Toaster position="top-right" toastOptions={{ className: "animate-slideIn" }} />

//       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10">
//         <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
//           Create New Resource
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           {/* Basic Info */}
//           <div className="border-b pb-6">
//             <h2 className="text-xl font-semibold text-gray-700 mb-4">Basic Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <select
//                 name="type"
//                 value={form.type}
//                 onChange={handleChange}
//                 className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Select Type</option>
//                 <option>Blog</option>
//                 <option>Case Studies</option>
//                 <option>Whitepaper</option>
//                 <option>Brochure</option>
//               </select>

//               <select
//                 name="industry"
//                 value={form.industry}
//                 onChange={handleChange}
//                 className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Select Industry</option>
//                 <option>Solar</option>
//                 <option>PEB</option>
//                 <option>Infrastructure</option>
//                 <option>Sustainability</option>
//                 <option>Construction</option>
//               </select>
//             </div>

//             <input
//               type="text"
//               name="title"
//               placeholder="Title"
//               value={form.title}
//               onChange={handleChange}
//               className="mt-6 w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//             />

//             <textarea
//               name="description"
//               placeholder="Short Description"
//               rows={3}
//               value={form.description}
//               onChange={handleChange}
//               className="mt-4 w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Content Details */}
//           <div className="border-b pb-6">
//             <h2 className="text-xl font-semibold text-gray-700 mb-4">Content Details</h2>

//             <input
//               type="text"
//               name="question"
//               placeholder="Section Question"
//               value={form.question}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//             />

//             <textarea
//               name="detailedDescription"
//               rows={6}
//               placeholder="Detailed Description"
//               value={form.detailedDescription}
//               onChange={handleChange}
//               className="mt-4 w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//             />

//             <textarea
//               name="longDescription"
//               rows={6}
//               placeholder="Long Description (optional)"
//               value={form.longDescription}
//               onChange={handleChange}
//               className="mt-4 w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Upload Files */}
//           <div>
//             <h2 className="text-xl font-semibold text-gray-700 mb-4">Upload Files</h2>

//             {/* Content Image */}
//             <div className="mb-6">
//               <label className="block font-medium mb-2">Content Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="block w-full p-2 border rounded-lg bg-gray-50"
//                 onChange={async (e: any) => {
//                   const file = e.target.files[0];
//                   if (!file) return;
//                   const uploaded = await uploadFile(file);
//                   if (uploaded) setForm({ ...form, image: uploaded });
//                 }}
//               />
//               {form.image && <img src={form.image} className="w-40 mt-3 rounded-lg shadow" />}
//             </div>

//             {/* Banner Image */}
//             <div className="mb-6">
//               <label className="block font-medium mb-2">Banner Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="block w-full p-2 border rounded-lg bg-gray-50"
//                 onChange={async (e: any) => {
//                   const file = e.target.files[0];
//                   if (!file) return;
//                   const uploaded = await uploadFile(file);
//                   if (uploaded) setForm({ ...form, imagebanner: uploaded });
//                 }}
//               />
//               {form.imagebanner && <img src={form.imagebanner} className="w-40 mt-3 rounded-lg shadow" />}
//             </div>

//             {/* PDF Upload */}
//             <div>
//               <label className="block font-medium mb-2">PDF (optional)</label>
//               <input
//                 type="file"
//                 accept=".pdf"
//                 className="block w-full p-2 border rounded-lg bg-gray-50"
//                 onChange={async (e: any) => {
//                   const file = e.target.files[0];
//                   if (!file) return;
//                   const uploaded = await uploadFile(file);
//                   if (uploaded) setForm({ ...form, linkpdf: uploaded });
//                 }}
//               />
//               {form.linkpdf && <p className="text-green-600 mt-2 font-medium">✔ PDF Uploaded Successfully</p>}
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow"
//           >
//             {loading ? "Creating..." : "Create Resource"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function CreateResource() {
  const router = useRouter();

  const [form, setForm] = useState({
    type: "",
    industry: "",
    title: "",
    description: "",
    question: "",
    detailedDescription: "",
    longDescription: "",
    image: "",
    imagebanner: "",
    linkpdf: "",
  });

  const [loading, setLoading] = useState(false);

  // Uploading states
  const [uploadingContent, setUploadingContent] = useState(false);
  const [uploadingBanner, setUploadingBanner] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Upload to cloudinary
  const uploadFile = async (file: File) => {
    const fd = new FormData();
    fd.append("file", file);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: fd });

      if (!res.ok) {
        toast.error("File upload failed!");
        return "";
      }

      const data = await res.json();
      if (!data.url) {
        toast.error("Upload response invalid!");
        return "";
      }

      return data.url;
    } catch (err) {
      toast.error("File upload failed!");
      return "";
    }
  };

  // Submit resource
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!form.image || !form.imagebanner) {
      toast.error("Please upload both images before creating!");
      return;
    }

    setLoading(true);

    try {
      const slug = form.title.toLowerCase().replace(/\s+/g, "-");
      const payload = { ...form, slug };

      const res = await fetch("/api/admin/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setLoading(false);

      if (res.ok) {
        toast.success("Resource created successfully!");
        router.push("/admin");
      } else {
        toast.error("Failed to create resource!");
      }
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <Toaster position="top-right" />

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10">
        <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Create New Resource
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Section */}
          <div className="border-b pb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Basic Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="p-3 border rounded-lg bg-gray-50"
              >
                <option value="">Select Type</option>
                <option>Blog</option>
                <option>Case Studies</option>
                <option>Whitepaper</option>
                <option>Brochure</option>
              </select>

              <select
                name="industry"
                value={form.industry}
                onChange={handleChange}
                className="p-3 border rounded-lg bg-gray-50"
              >
                <option value="">Select Industry</option>
                <option>Solar</option>
                <option>PEB</option>
                <option>Infrastructure</option>
                <option>Sustainability</option>
                <option>Construction</option>
              </select>
            </div>

            <input
              type="text"
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              className="mt-6 w-full p-3 border rounded-lg bg-gray-50"
            />

            <textarea
              name="description"
              rows={3}
              placeholder="Short Description"
              value={form.description}
              onChange={handleChange}
              className="mt-4 w-full p-3 border rounded-lg bg-gray-50"
            />
          </div>

          {/* Content */}
          <div className="border-b pb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Content Details
            </h2>

            <input
              type="text"
              name="question"
              placeholder="Section Question"
              value={form.question}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-50"
            />

            <textarea
              name="detailedDescription"
              rows={6}
              placeholder="Detailed Description"
              value={form.detailedDescription}
              onChange={handleChange}
              className="mt-4 w-full p-3 border rounded-lg bg-gray-50"
            />

            <textarea
              name="longDescription"
              rows={6}
              placeholder="Long Description (optional)"
              value={form.longDescription}
              onChange={handleChange}
              className="mt-4 w-full p-3 border rounded-lg bg-gray-50"
            />
          </div>

          {/* Upload Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Upload Files
            </h2>

            {/* CONTENT IMAGE */}
            <div className="mb-6">
              <label className="block font-medium mb-2">Content Image</label>

              <input
                type="file"
                accept="image/*"
                className="block w-full p-2 border rounded-lg bg-gray-50"
                disabled={uploadingContent || uploadingBanner}
                onChange={async (e: any) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  setUploadingContent(true);
                  const uploaded = await uploadFile(file);
                  if (uploaded) setForm((prev) => ({ ...prev, image: uploaded }));
                  setUploadingContent(false);
                }}
              />

              {/* Upload Indicator */}
              {uploadingContent && (
                <div className="mt-2 w-full bg-gray-200 rounded h-2 overflow-hidden">
                  <div className="h-full bg-blue-500 animate-pulse"></div>
                </div>
              )}

              {form.image && (
                <img
                  src={form.image}
                  className="w-40 mt-3 rounded-lg shadow"
                />
              )}
            </div>

            {/* BANNER IMAGE */}
            <div className="mb-6">
              <label className="block font-medium mb-2">Banner Image</label>

              <input
                type="file"
                accept="image/*"
                className="block w-full p-2 border rounded-lg bg-gray-50"
                disabled={!form.image || uploadingBanner || uploadingContent}
                onChange={async (e: any) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  setUploadingBanner(true);
                  const uploaded = await uploadFile(file);
                  if (uploaded)
                    setForm((prev) => ({ ...prev, imagebanner: uploaded }));
                  setUploadingBanner(false);
                }}
              />

              {uploadingBanner && (
                <div className="mt-2 w-full bg-gray-200 rounded h-2 overflow-hidden">
                  <div className="h-full bg-green-500 animate-pulse"></div>
                </div>
              )}

              {form.imagebanner && (
                <img
                  src={form.imagebanner}
                  className="w-40 mt-3 rounded-lg shadow"
                />
              )}
            </div>

            {/* PDF */}
            <div>
              <label className="block font-medium mb-2">PDF (optional)</label>

              <input
                type="file"
                accept=".pdf"
                className="block w-full p-2 border rounded-lg bg-gray-50"
                onChange={async (e: any) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const uploaded = await uploadFile(file);
                  if (uploaded) setForm({ ...form, linkpdf: uploaded });
                }}
              />

              {form.linkpdf && (
                <p className="text-green-600 mt-2">✔ PDF Uploaded</p>
              )}
            </div>
          </div>

          {/* CREATE BUTTON */}
          <button
            type="submit"
            disabled={
              loading ||
              uploadingContent ||
              uploadingBanner ||
              !form.image ||
              !form.imagebanner
            }
            className="w-full py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 disabled:opacity-50 shadow"
          >
            {loading ? "Creating..." : "Create Resource"}
          </button>
        </form>
      </div>
    </div>

  );
}
