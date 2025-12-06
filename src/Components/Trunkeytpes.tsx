"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
const areas = [
  {
    id: 1,
    title: "Manufacturing Plant Setup",
    subtitle: "End-to-End Industrial Manufacturing Plant Solutions",
    description:
      "We deliver complete turnkey manufacturing plant solutions. Our service covers every stage, from initial site selection and detailed design to final equipment installation and full commissioning. We integrate advanced automation, robotics, and IoT systems to ensure your plant achieves efficient, real-time production performance.",
    image: "/platform/manfone.jpg",
  },
  {
    id: 2,
    title: "Process Plant Construction",
    subtitle: "Specialized Process Plant Engineering & Construction",
    description:
      "We ensure comprehensive expertise in designing and building advanced process plants. Our offerings assist the demanding requirements of the chemical, pharma, and food sectors. By incorporating modular and AI-driven systems, we make sure that clients achieve top-tier quality, operational flexibility, and maximized resource efficiency in their facilities.",
    image: "/platform/process.jpg",
  },
  {
    id: 3,
    title: "Godown & Logistics Facility Development",
    subtitle: "Warehousing and Logistics Infrastructure Solutions",
    description:
      "We possess specialized competence in establishing high-capacity warehouses and logistics hubs. Our design philosophy incorporates sophisticated technologies like AS/RS, AMRs, and WMS platforms. This technical integration guarantees clients achieve streamlined storage, maximum operational automation, and highly accurate, intelligent inventory control.",
    image: "/platform/Logistics.jpg",
  },
  {
    id: 4,
    title: "Basic Structure Development",
    subtitle: "Comprehensive Infrastructure & Utility Development",
    description:
      "We are providing complete utility solutions encompassing necessary services like power distribution, potable water supply, and comprehensive waste management systems. Our foundational design strategy champions sustainability, integrating modern features such as renewable energy sources, smart grid technology, and state-of-the-art recycling platforms to future-proof your capital investments.",
    image: "/platform/development.jpg",
  },
];

export default function Trunkeytpes() {
  const [selectedId, setSelectedId] = useState(3);
  const [open, setOpen] = useState(false);

  const selectedArea = areas.find((area) => area.id === selectedId);

  return (
    <section className="mx-auto px-4 py-10 md:px-20 lg:px-28">
      <h2 className="text-2xl lg:text-3xl font-bold text-[#000080] mb-8">
        Types Of Industrial Trunkey Projects
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/4">
          <div className="lg:hidden mb-0">
            <button
              onClick={() => setOpen(!open)}
              className="w-full p-3 rounded-t-lg text-white font-semibold flex justify-between items-center bg-[#000080]"
            >
              {areas.find((a) => a.id === selectedId)?.title}
              <svg
                className="w-5 h-5 text-[#8080FF]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={open ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                />
              </svg>
            </button>

            {open && (
              <div className="mt-0 w-full bg-[#000080] rounded-b-lg shadow">
                {areas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => {
                      setSelectedId(area.id);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-[#8080FF] ${
                      selectedId === area.id ? "text-white font-semibold" : ""
                    }`}
                  >
                    {area.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="hidden lg:flex flex-col bg-[#000080] text-white rounded-lg pt-6 pb-6">
            {areas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedId(area.id)}
                className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                  selectedId === area.id ? "font-bold" : "hover:text-gray-300"
                }`}
              >
                {area.title}
              </button>
            ))}
          </div>
        </div>

        {selectedArea && (
          <div className="flex flex-col-reverse md:flex-row bg-white rounded-lg shadow overflow-hidden w-full border border-gray-300">
            <div className="p-6 flex flex-col justify-center w-full md:w-1/2 border-t md:border-t-0 md:border-r border-gray-300">
              <h3 className="text-2xl font-semibold text-[#000080] mb-3">
                {selectedArea.subtitle}
              </h3>
              <p className="text-gray-600 text-justify mb-5">
                {selectedArea.description}
              </p>
              <button className="flex items-center text-md md:text-xl gap-2 text-[#000080] font-semibold">
                <a
                  href="/renewable-contact"
                  className="flex items-center text-md md:text-xl gap-2 text-[#000080] font-semibold "
                >
                  Contact{" "}
                  <span className="p-1 rounded-full text-[#000080]">→</span>
                </a>
              </button>
            </div>

            <div className="w-full md:w-1/2 relative">
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
