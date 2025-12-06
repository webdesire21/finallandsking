"use client";

import { useState } from "react";
import Footer from "yes/Components/Footer";
import ContactSection from "yes/Components/ContactSection";

import Industryheader from "yes/Components/Industryheader";
import Image from "next/image";
// ---------------- Types ----------------
type Project = {
  id: number;
  img: string;
  location: string;
  category: string;
};

const projects: Project[] = [
  {
    id: 1,
    img: "/industry.jpg",
    location: "MaharajSagar Warehouse, Lohati",
    category: "Factory Buildings",
  },
  {
    id: 2,
    img: "/realstate.png",
    location: "Baba Warehouse, Pipariya",
    category: "Commercial Building",
  },
  {
    id: 3,
    img: "/new1.png",
    location: "Maa Narmada Ware House, Pipriya",
    category: "Government & PSUs",
  },
  {
    id: 4,
    img: "/industry.jpg",
    location: "Devisingh Patel Ware House, Raisen",
    category: "Factory Buildings",
  },
  {
    id: 5,
    img: "/industry.jpg",
    location: "Maa Narmada Ware House, Pipriya",
    category: "Commercial Building",
  },
  {
    id: 6,
    img: "/industry.jpg",
    location: "Devisingh Patel Ware House, Raisen",
    category: "Government & PSUs",
  },
  {
    id: 7,
    img: "/industry.jpg",
    location: "Astik Agro Marketing, Hosangabad",
    category: "Factory Buildings",
  },
  {
    id: 8,
    img: "/industry.jpg",
    location: "ShreeSai Ware House, Tikamgargh",
    category: "Airport Building",
  },
  {
    id: 9,
    img: "/industry.jpg",
    location: "Goverdhan WareHouse, Pipriya",
    category: "Airport Building",
  },
  {
    id: 10,
    img: "/industry.jpg",
    location: "100 ft Clear Span Panchotiya Warehouse, Kasrawad",
    category: "Clean Room",
  },

  // Newly added with categories:
  {
    id: 11,
    img: "/industry.jpg",
    location: "Maanpurna Warehouse, Nalkheda",
    category: "Factory Buildings",
  },
  {
    id: 12,
    img: "/industry.jpg",
    location: "Agrawal Logistic Park, Dewas",
    category: "Commercial Building",
  },
  {
    id: 13,
    img: "/industry.jpg",
    location: "Trivani Crop Science Pvt Ltd, Factory Shed, Bhopal MP",
    category: "Government & PSUs",
  },
  {
    id: 14,
    img: "/industry.jpg",
    location: "100X245 Clear 100ft Span, Ringnod Warehouse, Dhar",
    category: "Clean Room",
  },
  {
    id: 15,
    img: "/industry.jpg",
    location: "Reva Rice Mill Warehouse, Udaipura MP",
    category: "Factory Buildings",
  },
  {
    id: 16,
    img: "/industry.jpg",
    location: "Mekal Food Products Pvt Ltd (Rice Mill, 120MT), Udaipura MP",
    category: "Factory Buildings",
  },
  {
    id: 17,
    img: "/industry.jpg",
    location: "PMAY, Indore",
    category: "Government & PSUs",
  },
  {
    id: 18,
    img: "/industry.jpg",
    location: "Kundaliyalift Irrigation, Nalkheda",
    category: "Government & PSUs",
  },
  {
    id: 19,
    img: "/industry.jpg",
    location: "DFCC Site Tata Project, Ankleshwar, Gujarat",
    category: "Government & PSUs",
  },
  {
    id: 20,
    img: "/industry.jpg",
    location: "ROB, Hoshangabad MP",
    category: "Government & PSUs",
  },
  {
    id: 21,
    img: "/industry.jpg",
    location: "O2 Power, 200MW Solar Pilework, Agar MP",
    category: "Government & PSUs",
  },
  {
    id: 22,
    img: "/industry.jpg",
    location: "TATA Steel Plant, Kaling Nagar, Odisha",
    category: "Factory Buildings",
  },
  {
    id: 23,
    img: "/industry.jpg",
    location: "TATA Steel Plant, Kaling Nagar, Odisha",
    category: "Factory Buildings",
  },
  {
    id: 24,
    img: "/industry.jpg",
    location: "Praj Industries Ltd, Kandala Port, Gujarat",
    category: "Commercial Building",
  },
  {
    id: 25,
    img: "/industry.jpg",
    location: "Mekal food Industries",
    category: "Commercial Building",
  },
  {
    id: 26,
    img: "/industry.jpg",
    location: "Reva Rice Mill",
    category: "Commercial Building",
  },
  {
    id: 27,
    img: "/industry.jpg",
    location: "Triveni crop",
    category: "Commercial Building",
  },
];

const categories = [
  "All",
  "Airport Building",
  "Canteen Building",
  "Clean Room",
  "Commercial Building",
  "Factory Buildings",
  "Government & PSUs",
];

export default function Industryinstallationprojects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projectsPerPage = 12;

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const handleClick = (id: number) => {
    setSelectedId(id === selectedId ? null : id);
  };

  const goToPage = (page: number) => {
    if (page < 1) page = 1;
    else if (page > totalPages) page = totalPages;
    setCurrentPage(page);
    setSelectedId(null);
  };

  return (
    <>
      <Industryheader />

      {/* Hero Section */}
      <section className="w-full min-h-[400px] md:min-h-[500px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/aboutright.jpeg')`,
          }}
        >
          <div className="text-white text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
              Our Projects
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center my-8">
          <h1 className="text-3xl font-bold">OUR RECENT WORKS</h1>
          <p className="mt-2 text-gray-600">
            Explore Innovative Projects to Spark Your Ideas
          </p>
        </div>

        {/* Filter + Showing count */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 w-full">
            <label className="text-gray-700 font-medium text-sm sm:text-base mb-2 sm:mb-0">
              Browse by Category:
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="
      w-full sm:w-auto
      border border-gray-300 rounded-md px-3 py-2 text-sm
      appearance-none
      focus:outline-none focus:ring-2 focus:ring-[#000080]
    "
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Right - Showing count */}
          <div className="hidden md:block text-gray-600 text-sm">
            Showing {indexOfFirstProject + 1}–
            {Math.min(indexOfLastProject, filteredProjects.length)} of{" "}
            {filteredProjects.length} projects
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentProjects.map(({ id, img, location }) => {
            const isActive = selectedId === id;
            return (
              <div
                key={id}
                className="relative cursor-pointer overflow-hidden rounded-md shadow-md group"
                onClick={() => handleClick(id)}
              >
                <img
                  src={img}
                  alt={location}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay background */}
                <div
                  className={`absolute inset-0 bg-[#000080] transition-opacity duration-500 ${
                    isActive
                      ? "bg-opacity-60 opacity-50"
                      : "bg-opacity-0 opacity-0"
                  }`}
                ></div>

                <div
                  className={`absolute inset-0 flex items-center justify-center text-white text-center px-4 text-lg font-semibold transform transition-transform duration-500 ease-in-out ${
                    isActive
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  }`}
                >
                  {location}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {[...Array(totalPages)].map((_, idx) => {
            const pageNum = idx + 1;
            return (
              <button
                key={pageNum}
                onClick={() => goToPage(pageNum)}
                className={`px-3 py-1 rounded ${
                  currentPage === pageNum
                    ? "bg-black text-white"
                    : "bg-[#000080] text-white hover:bg-blue-800"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>
      </div>

      <ContactSection />
      <Footer />
    </>
  );
}
