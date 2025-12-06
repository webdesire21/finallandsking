"use client";

import { useState } from "react";

export default function Products() {
  // Define all areas inside the component
  const areas = [
    {
      id: 1,
      title: "Prefabricated",
      subtitle: "Prefabricated Multi-Storey Building Manufacturer",
      description:
        "We specialize in designing and delivering prefabricated multi-storey buildings that ensure durability, faster construction, and cost-effectiveness for diverse applications.",
      image: "/menupageimg/peb3.jpg",
    },
    {
      id: 2,
      title: "Warehouse",
      subtitle: "Warehouse",
      description:
        "Our warehouses are engineered for maximum space utilization, robust structure, and efficient storage solutions to meet industrial and commercial demands.",
      image: "/menupageimg/peb4.png",
    },
    {
      id: 3,
      title: "Industrial Shed",
      subtitle: "Prefabricated Industrial Shed Manufacturers",
      description:
        "We manufacture high-quality prefabricated industrial sheds that are strong, versatile, and tailored to meet the specific requirements of various industries.",
      image: "/menupageimg/peb5.png",
    },
    {
      id: 4,
      title: "Factory Building",
      subtitle: "Factory Building Solutions",
      description:
        "Our factory buildings are designed to provide a safe, efficient, and scalable infrastructure for manufacturing operations across multiple sectors.",
      image: "/menupageimg/peb8.jpg",
    },
    {
      id: 5,
      title: "Industrial Enclosures",
      subtitle: "Industrial Enclosures",
      description:
        "We deliver customized industrial enclosures that ensure safety, reliability, and protection of equipment while optimizing operational performance.",
      image: "/menupageimg/peb6.jpg",
    },
    {
      id: 6,
      title: "Cold Storage",
      subtitle: "Cold Storage & Cold Room Manufacturer",
      description:
        "Our advanced cold storage and cold room solutions are engineered to maintain precise temperatures, ensuring freshness and quality for perishable goods.",
      image: "/menupageimg/peb7.jpg",
    },
  ];

  const [selectedId, setSelectedId] = useState(areas[0]?.id || null);
  const [isOpen, setIsOpen] = useState(false);

  const selectedArea = areas.find((a) => a.id === selectedId);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-8">
        Pre Engineered Products
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-[#000080] text-white rounded-lg w-full md:w-1/4">
          <div className="md:hidden">
            {/* Selected button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-3 px-5 py-4 text-left w-full transition bg-[#000080] font-bold"
            >
              <span className="text-sm opacity-70">
                {String(
                  areas.findIndex((a) => a.id === selectedId) + 1
                ).padStart(2, "0")}
              </span>
              <span>{selectedArea?.title}</span>
            </button>

            {/* Dropdown list */}
            {isOpen && (
              <div className="flex flex-col">
                {areas.map((area, idx) => (
                  <button
                    key={area.id}
                    onClick={() => {
                      setSelectedId(area.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                      selectedId === area.id
                        ? "bg-[#000080] font-bold"
                        : "hover:bg-[#000080] text-gray-300"
                    }`}
                  >
                    <span className="text-sm opacity-70">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{area.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="hidden md:flex flex-col">
            {areas.map((area, idx) => (
              <button
                key={area.id}
                onClick={() => setSelectedId(area.id)}
                className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                  selectedId === area.id
                    ? "bg-[#000080] font-bold"
                    : "hover:bg-[#000080] text-gray-300"
                }`}
              >
                <span className="text-sm opacity-70">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span>{area.title}</span>
              </button>
            ))}
          </div>
        </div>

        {selectedArea && (
          <div className="bg-white rounded-lg shadow overflow-hidden w-full md:w-3/4 mt-4 md:mt-0">
            <div className="flex flex-col md:flex-row">
              {/* Text */}
              <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-[#000080] mb-3">
                  {selectedArea.subtitle}
                </h3>
                <p className="text-gray-600 text-justify mb-5">
                  {selectedArea.description}
                </p>
                <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                  GET A QUOTE
                </button>
              </div>

              <div className="w-full md:w-1/2">
                <img
                  src={selectedArea.image}
                  alt={selectedArea.subtitle}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
