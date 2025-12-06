"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function EditResource() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

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
    slug: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // NEW STATES FOR SAFER UPLOAD
  const [uploadingContent, setUploadingContent] = useState(false);
  const [uploadingBanner, setUploadingBanner] = useState(false);

  /** 🚀 CLOUDINARY UPLOAD */
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
        toast.error("Invalid upload response!");
        return "";
      }

      return data.url;
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("Upload failed!");
      return "";
    }
  };

  /** 🚀 FETCH RESOURCE */
  const fetchResource = async () => {
    try {
      const res = await fetch(`/api/resources/by-id/${id}`, {
        cache: "no-store",
      });

      const item = await res.json();

      if (res.ok) {
        setForm(item);
      } else {
        toast.error("Failed to fetch resource!");
      }
    } catch (err) {
      toast.error("Failed to fetch resource!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResource();
  }, []);

  /** 🚀 HANDLE INPUT CHANGE */
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /** 🚀 SAVE CHANGES */
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (uploadingContent || uploadingBanner) {
      toast.error("Please wait… files are still uploading.");
      return;
    }

    setSaving(true);

    try {
      const payload = {
        ...form,
        slug: form.title.toLowerCase().replace(/\s+/g, "-"),
      };

      const res = await fetch(`/api/admin/resources/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setSaving(false);

      if (res.ok) {
        toast.success("Resource updated successfully!");
        router.push("/admin");
      } else {
        toast.error("Failed to update resource!");
      }
    } catch (err) {
      setSaving(false);
      toast.error("Something went wrong!");
    }
  };

  /** 🚀 LOADING STATE */
  if (loading) {
    return <p className="p-10 text-center text-gray-600">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <Toaster position="top-right" />

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10">
        <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Edit Resource
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* TYPE & INDUSTRY */}
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

          {/* TITLE */}
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50"
          />

          {/* DESCRIPTION */}
          <textarea
            name="description"
            rows={3}
            placeholder="Short Description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50"
          />

          {/* QUESTION */}
          <input
            type="text"
            name="question"
            placeholder="Question"
            value={form.question}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50"
          />

          {/* DETAILED DESCRIPTION */}
          <textarea
            name="detailedDescription"
            rows={6}
            placeholder="Detailed Description"
            value={form.detailedDescription}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50"
          />

          {/* LONG DESCRIPTION */}
          <textarea
            name="longDescription"
            rows={6}
            placeholder="Long Description (optional)"
            value={form.longDescription}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50"
          />

          {/* CONTENT IMAGE */}
          <div>
            <label className="block mb-1 font-semibold">Content Image</label>

            <input
              type="file"
              accept="image/*"
              disabled={uploadingBanner || uploadingContent}
              onChange={async (e: any) => {
                const file = e.target.files?.[0];
                if (!file) return;

                setUploadingContent(true);
                const url = await uploadFile(file);
                if (url) setForm({ ...form, image: url });
                setUploadingContent(false);
              }}
              className="block w-full p-2 border rounded-lg bg-gray-50"
            />

            {uploadingContent && (
              <div className="mt-2 w-full bg-gray-200 rounded h-2 overflow-hidden">
                <div className="h-full bg-blue-500 animate-pulse"></div>
              </div>
            )}

            {form.image && (
              <img src={form.image} className="w-40 mt-2 rounded-lg shadow" />
            )}
          </div>

          {/* BANNER IMAGE */}
          <div>
            <label className="block mb-1 font-semibold">Banner Image</label>

            <input
              type="file"
              accept="image/*"
              disabled={!form.image || uploadingContent || uploadingBanner}
              onChange={async (e: any) => {
                const file = e.target.files?.[0];
                if (!file) return;

                setUploadingBanner(true);
                const url = await uploadFile(file);
                if (url) setForm({ ...form, imagebanner: url });
                setUploadingBanner(false);
              }}
              className="block w-full p-2 border rounded-lg bg-gray-50"
            />

            {uploadingBanner && (
              <div className="mt-2 w-full bg-gray-200 rounded h-2 overflow-hidden">
                <div className="h-full bg-green-500 animate-pulse"></div>
              </div>
            )}

            {form.imagebanner && (
              <img
                src={form.imagebanner}
                className="w-40 mt-2 rounded-lg shadow"
              />
            )}
          </div>

          {/* PDF */}
          <div>
            <label className="block mb-1 font-semibold">
              PDF File (optional)
            </label>
            <input
              type="file"
              accept=".pdf"
              disabled={uploadingBanner || uploadingContent}
              onChange={async (e: any) => {
                const file = e.target.files?.[0];
                if (!file) return;

                const url = await uploadFile(file);
                if (url) setForm({ ...form, linkpdf: url });
              }}
              className="block w-full p-2 border rounded-lg bg-gray-50"
            />

            {form.linkpdf && (
              <p className="text-green-600 mt-2 font-medium">
                ✔ PDF Uploaded Successfully
              </p>
            )}
          </div>

          {/* SAVE BUTTON */}
          <button
            type="submit"
            disabled={saving || uploadingContent || uploadingBanner}
            className="w-full py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}
