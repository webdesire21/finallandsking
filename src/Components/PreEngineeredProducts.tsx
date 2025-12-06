"use client";

import { useState } from "react";

type Area = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

const areas: Area[] = [
  {
    id: 1,
    title: "Prefabricated",
    subtitle: "Prefabricated Multi-Storey Building Manufacturer",
    description:
      "We specialize in designing and delivering prefabricated multi-storey buildings that ensure durability, faster construction, and cost-effectiveness for diverse applications.",
    image: "/industry.jpg",
  },
  {
    id: 2,
    title: "Warehouse",
    subtitle: "Warehouse",
    description:
      "Our warehouses are engineered for maximum space utilization, robust structure, and efficient storage solutions to meet industrial and commercial demands.",
    image: "/expertise/third.png",
  },
  {
    id: 3,
    title: "Industrial Shed",
    subtitle: "Prefabricated Industrial Shed Manufacturers",
    description:
      "We manufacture high-quality prefabricated industrial sheds that are strong, versatile, and tailored to meet the specific requirements of various industries.",
    image: "/expertise/third.png",
  },
  {
    id: 4,
    title: "Factory Building",
    subtitle: "Factory Building Solutions",
    description:
      "Our factory buildings are designed to provide a safe, efficient, and scalable infrastructure for manufacturing operations across multiple sectors.",
    image: "/expertise/third.png",
  },
  {
    id: 5,
    title: "Industrial Enclosures",
    subtitle: "Industrial Enclosures",
    description:
      "We deliver customized industrial enclosures that ensure safety, reliability, and protection of equipment while optimizing operational performance.",
    image: "/expertise/third.png",
  },
  {
    id: 6,
    title: "Cold Storage",
    subtitle: "Cold Storage & Cold Room Manufacturer",
    description:
      "Our advanced cold storage and cold room solutions are engineered to maintain precise temperatures, ensuring freshness and quality for perishable goods.",
    image: "/expertise/third.png",
  },
];

export default function PreEngineeredProducts() {
  const [selectedId, setSelectedId] = useState<number>(areas[0].id);

  const selectedArea = areas.find((a) => a.id === selectedId);

  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      <div className="text-center mb-10">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
          What We Do
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#000080]">
          Our Activities
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore our wide range of prefabricated solutions, engineered with
          precision to deliver durability, efficiency, and cost-effectiveness
          across industries.
        </p>
        <div className="w-20 h-1 bg-[#000080] mx-auto mt-4 rounded-full" />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-[#000080] text-white rounded-lg flex flex-col w-full md:w-1/4">
          {areas.map((area, idx) => (
            <button
              key={area.id}
              onClick={() => setSelectedId(area.id)}
              className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                selectedId === area.id
                  ? "bg-blue-800 font-bold"
                  : "hover:bg-blue-800 text-gray-300"
              }`}
            >
              <span className="text-sm opacity-70">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span>{area.title}</span>
            </button>
          ))}
        </div>

        {selectedArea && (
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow overflow-hidden w-full">
            <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-[#000080] mb-3">
                {selectedArea.subtitle}
              </h3>
              <p className="text-gray-600 mb-5 text-justify">
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
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
