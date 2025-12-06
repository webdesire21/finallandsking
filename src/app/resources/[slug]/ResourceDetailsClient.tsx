"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "yes/Components/Navbar";
import Footer from "yes/Components/Footer";
import { useState } from "react";

export default function ResourceDetailsClient({
  item,
  recentBlogs,
}: {
  item: any;
  recentBlogs: any[];
}) {
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [message, setMessage] = useState("");

  const canShowDownloadButton =
    item.type === "Brochure" ||
    item.type === "Whitepaper" ||
    item.type === "Case Studies";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return;
    alert("Form submitted successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="w-full">
        {/* TOP BANNER IMAGE */}
        <div className="relative h-[350px] md:h-[460px] w-full bg-gray-100">
          {item.imagebanner && item.imagebanner.trim() !== "" ? (
            <Image
              src={item.imagebanner}
              alt={item.title}
              fill
              className="object-cover"
              priority
              style={{ filter: "brightness(0.6)" }}
            />
          ) : null}

          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 text-white">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {item.title}
            </h1>

            {canShowDownloadButton && item.linkpdf && (
              <a
                href={item.linkpdf}
                download
                className="mt-6 inline-block px-6 py-3 bg-cyan-400 text-[#003366] font-semibold rounded hover:bg-cyan-500 transition"
              >
                Download Brochure
              </a>
            )}
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="md:px-0 grid grid-cols-1 md:grid-cols-12 md:gap-10 mt-10">
          <div className="md:col-span-7 p-6 md:p-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#000080] mb-4">
              {item.title}
            </h2>

            {/* SHORT DESCRIPTION */}
            <p className="text-gray-700 leading-relaxed mb-3">
              {item.description}
            </p>

            {item.question && (
              <h2 className="text-2xl md:text-3xl font-semibold text-[#000080] mb-4">
                {item.question}
              </h2>
            )}

            {/* DETAILED DESCRIPTION */}
            <div className="space-y-4 text-gray-600">
              {item.detailedDescription &&
                item.detailedDescription.split("\n").map((line: string, idx: number) => (
                  <p key={idx}>{line.trim()}</p>
                ))}
            </div>

            {/* CONTENT IMAGE SAFE CHECK */}
            {item.image && item.image.trim() !== "" ? (
              <img
                src={item.image}
                alt="content-image"
                className="my-6 w-full rounded-lg shadow"
              />
            ) : null}

            {/* LONG DESCRIPTION */}
            {item.longDescription && (
              <div className="space-y-4 text-gray-600 mt-6">
                {item.longDescription.split("\n").map((line: string, idx: number) => (
                  <p key={idx}>{line.trim()}</p>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="md:col-span-5 p-6 md:p-15">
            {canShowDownloadButton ? (
              /* DOWNLOAD FORM */
              <div className="bg-[#000080] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">
                  Download This {item.type}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4 text-white">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-lg text-[#000080] bg-white"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-lg text-[#000080] bg-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full p-3 border rounded-lg text-[#000080] bg-white"
                  >
                    <option value="">Select Industry</option>
                    <option value="Solar">Solar</option>
                    <option value="PEB">PEB</option>
                    <option value="Infrastructure">Industry Installation</option>
                    <option value="Sustainability">Real Estate Development</option>
                    <option value="Construction">Rnd</option>
                  </select>

                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full p-3 border rounded-lg text-[#000080] bg-white"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />

                  <label className="flex items-center gap-2 text-sm text-white">
                    <input
                      type="checkbox"
                      checked={agree}
                      onChange={() => setAgree(!agree)}
                      className="h-4 w-4"
                    />
                    I agree to submit this form to download the {item.type}.
                  </label>

                  <button
                    type="submit"
                    disabled={!agree}
                    className={`w-full py-3 rounded-lg transition ${
                      agree
                        ? "bg-white text-[#000080] hover:bg-[#2a2ad1]"
                        : "bg-white text-[#000080] cursor-not-allowed"
                    }`}
                  >
                    Submit & Download
                  </button>
                </form>
              </div>
            ) : (
              /* RECENT BLOGS */
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
                  Recent Blogs
                </h2>

                <div className="space-y-4 mr-7">
                  {recentBlogs.map((b) => (
                    <Link
                      key={b._id}
                      href={`/resources/${b.slug}`}
                      className="relative block h-45 rounded-lg overflow-hidden shadow-lg group"
                    >
                      {b.image && b.image.trim() !== "" ? (
                        <img
                          src={b.image}
                          alt={b.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : null}

                      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                        <div className="flex justify-between items-center w-full">
                          <h4 className="text-lg font-bold">{b.title}</h4>

                          <div className="p-2 bg-[#000080] w-10 h-10 flex justify-center items-center text-white rounded-sm">
                            <ArrowRight size={20} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
