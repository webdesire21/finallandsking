"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";

type ResourceItem = {
  _id: string;
  slug: string;
  type: string;
  industry: string;
  title: string;
  description: string;
  image: string;
};

export default function Blogss() {
  const [industry, setIndustry] = useState("All");
  const [type, setType] = useState("Blog");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<ResourceItem[]>([]);

  const itemsPerPage = 6;

  // Fetch data once on mount
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const params = new URLSearchParams();
        if (type !== "All") params.append("type", type);
        if (industry !== "All") params.append("industry", industry);
        if (search.trim() !== "") params.append("search", search);

        const res = await fetch(`/api/resources?${params.toString()}`, {
          cache: "no-store",
        });
        const data = await res.json();
        setItems(data);
        setCurrentPage(1);
      } catch (err) {
        console.error("Error fetching resources:", err);
      }
    };
    fetchResources();
  }, []); // only on mount

  // Filtered items instantly
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchIndustry = industry === "All" || item.industry === industry;
      const matchType = type === "All" || item.type === type;
      const matchSearch =
        search.trim() === "" ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      return matchIndustry && matchType && matchSearch;
    });
  }, [items, industry, type, search]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <section className="px-6 md:px-20 py-12">
      <h1 className="text-3xl font-bold text-[#000080] mb-10">Insights</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div>
          <h4 className="text-sm font-semibold mb-2 text-[#000080]">
            Industry
          </h4>
          <select
            className="border-2 border-[#c1cbd1] p-2 rounded-md w-full"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            <option>All</option>
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
            <option>All</option>
            <option>Blog</option>
            <option>eBook</option>
            <option>Whitepaper</option>
            <option>Case Studies</option>
          </select>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2 text-[#000080]">Search</h4>
          <div className="relative">
            <input
              className="border-2 border-[#c1cbd1] p-2 rounded-md w-full pr-12"
              placeholder="Search by keyword"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      <p className="text-gray-600 mb-4">
        Showing {filteredItems.length} Results
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {paginatedItems.map((item) => (
          <div
            key={item._id}
            className="rounded-xl shadow-lg hover:shadow-xl transition bg-white flex flex-col"
          >
            <div className="w-full h-56 overflow-hidden">
              <Image
                src={item.image || "/placeholder.png"}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </div>

            <div className="p-5 flex-1">
              <span className="px-3 py-1 text-xs bg-[#000080] text-white rounded-full">
                {item.type}
              </span>

              <h3 className="mt-3 text-lg font-bold text-[#000080]">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm break-words">
                {item.description}
              </p>
            </div>

            <div className="p-5 flex justify-end">
              <Link
                href={`/resources/${item.slug}`}
                className="p-2 bg-[#000080] text-white rounded-sm hover:bg-[#8080FF] transition"
              >
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>

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

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
