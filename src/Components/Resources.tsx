"use client";

import { useState } from "react";
import { resources } from "yes/data/resources";
import Image from "next/image";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  const [industry, setIndustry] = useState("All");
  const [type, setType] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const filtered = resources.filter((item) => {
    const matchesIndustry = industry === "All" || item.industry === industry;
    const matchesType = type === "All" || item.type === type;
    const matchesSearch =
      search === "" || item.title.toLowerCase().includes(search.toLowerCase());

    return matchesIndustry && matchesType && matchesSearch;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <section className="px-6 md:px-20 py-12">
      <h1 className="text-3xl font-bold text-[#000080] mb-10">Insights</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div>
          <h4 className="text-sm font-semibold mb-2 text-[#000080]">
            Industry
          </h4>
          <select
            className="border-2 border-[#c1cbd1] p-2  rounded-md w-full"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            <option>All Industries</option>
            <option>Solar</option>
            <option>PEB</option>
            <option>Infrastructure</option>
            <option>Sustainability</option>
            <option>Construction</option>
          </select>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2 text-[#000080]">Type</h4>
          <select
            className="border-2 border-[#c1cbd1] p-2 rounded-md w-full"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>All Resources</option>
            <option>Blog</option>
            <option>Whitepaper</option>
            <option>Case Studies</option>
            <option>Brochure</option>
          </select>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2 text-[#000080]">Search</h4>
          <div className="relative">
            <input
              className="border-2 border-[#c1cbd1]  p-2  rounded-md w-full pr-12" // add right padding
              placeholder="Search by keyword"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      <p className="text-gray-600 mb-4">Showing {filtered.length} results</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {paginatedItems.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white flex flex-col"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />

            <div className="p-5 flex-1">
              <span className="px-3 py-1 text-xs bg-[#000080] text-white rounded-full">
                {item.type}
              </span>

              <h3 className="mt-3 text-lg font-bold text-[#000080]">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
            </div>

            <div className="p-5 flex justify-end">
              <Link
                href={`/resources/${item.id}`}
                className="p-2 bg-[#000080] text-white rounded-sm hover:bg-[#8080FF] transition"
              >
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page
                ? "bg-[#000080] text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
}
