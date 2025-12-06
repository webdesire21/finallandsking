"use client";
import { useState } from "react";
import {
  ChevronDown,
  Building2,
  BedDouble,
  MapPin,
  Hammer,
} from "lucide-react";

const TABS = ["BUY", "RENT", "COMMERCIAL"];

const CONSTRUCTION_STATUS = [
  "Completed & Sold Out",
  "New Launched",
  "OC Recived",
  "Ready to Move In",
  "Sold Out",
  "Under Construction",
];
const BUILDING_TYPES = ["Under Construction", "Upcoming"];

const PropertySearch = () => {
  const [activeTab, setActiveTab] = useState("BUY");
  const [price, setPrice] = useState([0, 100]);

  // Dropdown states
  const [constructionOpen, setConstructionOpen] = useState(false);
  const [buildingTypeOpen, setBuildingTypeOpen] = useState(false);

  // Selected dropdowns
  const [selectedConstruction, setSelectedConstruction] = useState("");
  const [selectedBuildingType, setSelectedBuildingType] = useState("");

  // Input states
  const [projectType, setProjectType] = useState("");
  const [location, setLocation] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    const payload = {
      activeTab,
      projectType,
      location,
      bedroom,
      priceRange: price,
      constructionStatus: selectedConstruction,
      buildingType: selectedBuildingType,
    };

    try {
      const res = await fetch("/api/realform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        alert(data.message);
      } else {
        alert("Failed to submit form.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-gray-50 py-12 px-6 lg:px-22 md:px-15">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-[30%_70%] gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-light text-[#000080] leading-snug">
            Find the most <br />
            <span className="font-semibold">reliable & appreciating</span>{" "}
            <br />
            Real Estate Properties
          </h2>
        </div>

        {/* Right Filters */}
        <div>
          <div className="flex gap-8 border-b border-gray-300 mb-6">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm font-medium tracking-wide ${
                  activeTab === tab
                    ? "text-black border-b-2 border-[#000080]"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Filters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {/* ---------------- BUY TAB ---------------- */}
            {activeTab === "BUY" && (
              <>
                {/* Project Type */}
                <div>
                  <label className="block text-gray-600 text-sm mb-1 flex items-center gap-1">
                    <Building2 size={16} /> Project Type
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Project Type"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full border-b border-gray-400 py-1 outline-none focus:border-[#000080] text-sm"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-gray-600 text-sm mb-1 flex items-center gap-1">
                    <MapPin size={16} /> Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full border-b border-gray-400 py-1 outline-none focus:border-[#000080] text-sm"
                  />
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="block text-gray-600 text-sm mb-1 flex items-center gap-1">
                    <BedDouble size={16} /> Bedrooms
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2 BHK"
                    value={bedroom}
                    onChange={(e) => setBedroom(e.target.value)}
                    className="w-full border-b border-gray-400 py-1 outline-none focus:border-[#000080] text-sm"
                  />
                </div>

                {/* Construction Status Dropdown */}
                <div className="relative">
                  <label className="block text-gray-600 text-sm mb-1 flex items-center gap-1">
                    <Hammer size={16} /> Construction Status
                  </label>
                  <div
                    className="flex items-center justify-between border-b border-gray-400 py-1 cursor-pointer text-sm text-gray-600"
                    onClick={() => setConstructionOpen(!constructionOpen)}
                  >
                    {selectedConstruction || "Select Construction Status"}
                    <ChevronDown size={16} />
                  </div>
                  {constructionOpen && (
                    <ul className="absolute bg-white border border-gray-300 mt-1 w-full z-10 shadow-lg">
                      {CONSTRUCTION_STATUS.map((status) => (
                        <li
                          key={status}
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setSelectedConstruction(status);
                            setConstructionOpen(false);
                          }}
                        >
                          {status}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Price Range */}
                <div className="flex flex-col">
                  <label className="block text-gray-700 font-light mb-2">
                    Price Range
                  </label>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                    <span>{price[0]} Cr</span>
                    <span>{price[1]} Cr</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={price[1]}
                    onChange={(e) => setPrice([0, Number(e.target.value)])}
                    className="w-full accent-[#000080]"
                  />
                </div>

                <div className="flex items-end">
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="px-4 py-5 mt-6 rounded-4xl font-semibold border border-[#000080] text-[#000080] hover:bg-[#000080] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : "0 PROJECTS FOUND →"}
                  </button>
                </div>
              </>
            )}

            {/* ---------------- RENT TAB ---------------- */}
            {activeTab === "RENT" && (
              <>
                <div>
                  <label className="block text-gray-600 text-sm mb-1 flex items-center gap-1">
                    <Building2 size={16} /> Type
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Property Type"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full border-b border-gray-400 py-1 outline-none focus:border-[#000080] text-sm"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-gray-600 text-sm mb-1 flex items-center gap-1">
                    <MapPin size={16} /> Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full border-b border-gray-400 py-1 outline-none focus:border-[#000080] text-sm"
                  />
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="block text-gray-600 text-sm mb-1 flex items-center gap-1">
                    <BedDouble size={16} /> Bedrooms
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2 BHK"
                    value={bedroom}
                    onChange={(e) => setBedroom(e.target.value)}
                    className="w-full border-b border-gray-400 py-1 outline-none focus:border-[#000080] text-sm"
                  />
                </div>

                {/* Price Range */}
                <div className="flex flex-col">
                  <label className="block text-gray-700 font-light mb-2">
                    Price Range
                  </label>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                    <span>{price[0]} Cr</span>
                    <span>{price[1]} Cr</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={price[1]}
                    onChange={(e) => setPrice([0, Number(e.target.value)])}
                    className="w-full accent-[#000080]"
                  />
                </div>

                <div className="flex items-end">
                  {/* <button className="px-4 py-5 mt-6 rounded-4xl font-semibold border border-[#000080] text-[#000080] hover:bg-[#000080] hover:text-white transition">
                    0 PROJECTS FOUND →
                  </button> */}
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="px-4 py-5 mt-6 rounded-4xl font-semibold border border-[#000080] text-[#000080] hover:bg-[#000080] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : "0 PROJECTS FOUND →"}
                  </button>
                </div>
              </>
            )}

            {/* ---------------- COMMERCIAL TAB ---------------- */}
            {activeTab === "COMMERCIAL" && (
              <>
                {/* Location */}
                <div>
                  <label className="block text-gray-600 text-sm mb-1 flex items-center gap-1">
                    <MapPin size={16} /> Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full border-b border-gray-400 py-1 outline-none focus:border-[#000080] text-sm"
                  />
                </div>

                <div className="relative">
                  <label className="block text-gray-600 text-sm mb-1 flex items-center gap-1">
                    <Building2 size={16} /> Construction
                  </label>
                  <div
                    className="flex items-center justify-between border-b border-gray-400 py-1 cursor-pointer text-sm text-gray-600"
                    onClick={() => setBuildingTypeOpen(!buildingTypeOpen)}
                  >
                    {selectedBuildingType || "Select Building Type"}
                    <ChevronDown size={16} />
                  </div>
                  {buildingTypeOpen && (
                    <ul className="absolute bg-white border border-gray-300 mt-1 w-full z-10 shadow-lg">
                      {BUILDING_TYPES.map((type) => (
                        <li
                          key={type}
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setSelectedBuildingType(type);
                            setBuildingTypeOpen(false);
                          }}
                        >
                          {type}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex items-end">
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="px-4 py-5 mt-6 rounded-4xl font-semibold border border-[#000080] text-[#000080] hover:bg-[#000080] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : "0 PROJECTS FOUND →"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;
