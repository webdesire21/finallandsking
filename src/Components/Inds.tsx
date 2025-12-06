"use client";

import { useState } from "react";

const areas = [
  {
    id: 1,
    title: "Custom System Design ",
    subtitle: "Custom System Design",
    description:
      "We conduct a detailed site assessment and load analysis to design solar systems that are precisely aligned with your operational requirements. Each solution is engineered to maximize energy output, optimize ROI, and ensure long-term operational reliability, reflecting a strategic approach to sustainable energy adoption.",
    image: "/industryimg/Custom System Design.jpg",
  },

  {
    id: 2,
    title: "End-to-End Delivery ",
    subtitle: "End-to-End Delivery",
    description:
      "From feasibility assessment and detailed engineering to procurement, installation, and commissioning, we manage the entire project lifecycle as a single accountable entity. This integrated approach guarantees seamless execution, timely delivery, and superior quality performance without requiring you to coordinate multiple vendors.",
    image: "/industryimg/Regulatory & Net-Metering Support.jpg",
  },
  {
    id: 3,
    title: "Regulatory & Net-Metering Support ",
    subtitle: "Regulatory & Net-Metering Support",
    description:
      "We navigate the complexities of regulatory compliance, approvals, and net-metering on your behalf, making it easier for your business to adopt solar energy smoothly and benefit from government incentives.",
    image: "/industryimg/Regulatory & Net-Metering Support.jpg",
  },
  {
    id: 4,
    title: "Flexible Financing ",
    subtitle: "Flexible Financing",
    description:
      "We offer multiple financing options to suit different business models and budgets, including CAPEX, OPEX, and zero-investment RESCO models. We empower organizations to deploy solar infrastructure with minimal financial friction while achieving strategic energy and sustainability goals.",
    image: "/industryimg/Flexible Financing.jpg",
  },
  {
    id: 5,
    title: "Asset Management & Monitoring ",
    subtitle: "Asset Management & Monitoring",
    description:
      "Through advanced real-time monitoring, predictive maintenance, and proactive performance optimization to safeguard your solar assets. Continuous tracking and proactive management ensure maximum energy yield, minimize downtime, and extend the lifespan of your solar system.",
    image: "/industryimg/Asset Management & Monitoring.jpg",
  },
];

export default function Inds() {
  const [selectedId, setSelectedId] = useState(1);
  const [open, setOpen] = useState(false);

  const selectedArea = areas.find((area) => area.id === selectedId);

  return (
    <section className="mx-auto px-4 py-10 md:px-18 lg:px-28">
      <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-8">
        Offerings
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/4">
          {/* Mobile Dropdown Only */}
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
              <div className="bg-[#000080] rounded-b-lg shadow">
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

          {/* Desktop + Tablet Menu */}
          <div className="hidden lg:flex flex-col bg-[#000080] text-white rounded-lg py-13 px-2">
            {areas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedId(area.id)}
                className={`px-5 py-4 text-left transition ${
                  selectedId === area.id ? "font-bold" : "hover:text-gray-300"
                }`}
              >
                {area.title}
              </button>
            ))}
          </div>
        </div>

        {selectedArea && (
          <div className="flex flex-col-reverse lg:flex-row bg-white rounded-lg shadow overflow-hidden w-full min-h-[420px]">
            <div className="p-6 flex flex-col justify-center w-full lg:w-1/2 border border-[#808080] lg:border-r-0">
              <h3 className="text-2xl font-semibold text-[#000080] mb-3">
                {selectedArea.subtitle}
              </h3>
              <p className="text-gray-600 text-justify mb-5">
                {selectedArea.description}
              </p>
              <button className="flex items-center text-md md:text-xl gap-2 text-[#000080] font-semibold ">
                Contact <span className="p-1 rounded-full">→</span>
              </button>
            </div>

            <div className="w-full lg:w-1/2 flex-1">
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
