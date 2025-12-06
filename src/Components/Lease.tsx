"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Lease() {
  const sections = [
    {
      title: "Properties for Sale",
      description:
        "Explore verified properties for sale across all our core segments, including Residential townships, Commercial offices, and Industrial warehouses. Browse plots, flats, factory lands, and industrial sheds, all backed by our legal assurance.",
      linkText:
        "Buy – Explore verified plots, flats, warehouses, factory lands & industrial sheds",
    },
    {
      title: "Properties for Lease",
      description:
        "Discover high-quality properties for lease across all major asset types. Find optimized spaces for office, retail, and industrial use, complete with verified terms and documentation assistance.",
      linkText: "Search Properties for Lease",
    },
    {
      title: "Land & Investment Assets for Sale",
      description:
        "Browse our exclusive investment listings for prime land, JV opportunities, and bulk assets. Filter properties by strategic location and criteria to build a profitable portfolio supported by our expert advisory.",
      linkText: "Search Land & Investment Assets for Sale",
    },
  ];

  return (
    <main className=" bg-white text-[#000080]">
      {/* Main Section */}
      <section className=" mx-auto px-4   xl:px-24 py-10 md:py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#000080] mb-4 leading-snug">
            Browse Properties with Landsking Infra
          </h2>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            The Integrated Gateway for India’s Real Estate — Residential,
            Commercial, and Industrial. Landsking Infra delivers real estate
            that is simple, transparent, and profitable. We manage the full
            spectrum—from acquiring your ideal property and divesting your
            existing land, to securing a critical commercial lease—all under one
            expert roof. Our dedicated team guarantees verified listings,
            genuine clients, and comprehensive legal and end-to-end
            documentation. We handle the complexity so you can focus entirely on
            your investment goals.
          </p>
        </div>

        {/* Property Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {sections.map((item, i) => (
            <div
              key={i}
              className="border border-[#8080FF] bg-white pt-6 pb-8 px-6 sm:px-8 space-y-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#000080]">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
              {/* Optional Link */}
              {/* <Link
                href="#"
                className="text-[#000080] font-medium inline-flex items-center gap-2 hover:underline"
              >
                {item.linkText} <ArrowRight className="w-4 h-4" />
              </Link> */}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
