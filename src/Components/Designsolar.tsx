"use client";

import { useState } from "react";

const areas = [
  {
    id: 1,
    title: " Site & Feasibility Analysis",
    subtitle: "Site & Feasibility Analysis",
    description:
      "We begin by conducting a detailed feasibility study to evaluate the site’s solar potential, including irradiance levels, terrain, shading, and weather conditions. Using precise tools and satellite data, we calculate expected energy output and identify the best panel placement strategy. This ensures your project design is accurate, cost-efficient, and performance-driven. Every decision at this stage lays the groundwork for long-term reliability.",
    image: "/solardesign/site audit.jpg",
  },
  {
    id: 2,
    title: " System Configuration & Engineering Design",
    subtitle: "System Configuration & Engineering Design",
    description:
      "Once the site parameters are finalized, our engineers develop a customized solar system configuration using advanced design software and 3D modeling tools. Each component — from PV modules to inverters and cabling — is selected based on energy demand, space, and project objectives. The goal is to balance technical precision with operational efficiency. Our designs ensure seamless integration with your existing electrical infrastructure.",
    image: "/solardesign/System Configuration.jpg",
  },
  {
    id: 3,
    title: " Structural & Electrical Drawings",
    subtitle: "Structural & Electrical Drawings",
    description:
      "We create detailed construction-ready layouts covering the module mounting structures, electrical wiring, cable routing, and grounding systems. Every design follows IEC and IS standards for safety, durability, and regulatory compliance. Our technical documentation enables clear communication between engineering and on-site teams. This ensures smooth execution and reduced construction errors during installation.",
    image: "/solardesign/Structural & Electrical Drawings .jpg",
  },
  {
    id: 4,
    title: " Performance Optimization",
    subtitle: "Performance Optimization",
    description:
      "Before final delivery, we simulate energy generation scenarios to identify potential inefficiencies and optimize performance parameters. Our team refines system orientation, tilt angles, and cable paths to enhance power output. This data-driven optimization improves both yield and stability over the system’s lifetime. The result is a future-ready solar solution that operates at peak efficiency throughout its lifecycle.",
    image: "/solardesign/Performance Optimization.jpg",
  },
  {
    id: 5,
    title: " Documentation & Delivery",
    subtitle: "Documentation & Delivery",
    description:
      "At the final stage, we compile complete design documentation — including single-line diagrams, bills of materials, compliance reports, and performance data sheets. These documents are structured for EPC execution, tenders, or direct implementation. We ensure total transparency and technical clarity for all stakeholders. With a ready-to-execute design package, your project moves seamlessly toward construction.",
    image: "/documentation.jpg",
  },
];

export default function Designsolar() {
  const [selectedId, setSelectedId] = useState(3);
  const [open, setOpen] = useState(false); // for mobile dropdown

  const selectedArea = areas.find((area) => area.id === selectedId);

  return (
    <section className=" mx-auto px-4 py-10 md:px-28">
      <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-8">
        Our Solar Design Process — From Insight to Implementation{" "}
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <div className="md:hidden mb-0">
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
                    className={`w-full text-left px-4 py-3 text-[#8080FF]  ${
                      selectedId === area.id ? "text-white font-semibold" : ""
                    }`}
                  >
                    {area.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="hidden md:flex flex-col bg-[#000080] text-white rounded-lg pt-[27px] pb-[27px] px-[5px]">
            {areas.map((area, idx) => (
              <button
                key={area.id}
                onClick={() => setSelectedId(area.id)}
                className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                  selectedId === area.id ? " font-bold" : "hover: text-gray-300"
                }`}
              >
                <span className="text-sm opacity-70">
                  {/* {String(idx + 1).padStart(2, "0")} */}
                </span>
                <span>{area.title}</span>
              </button>
            ))}
          </div>
        </div>

        {selectedArea && (
          <div className="flex flex-col-reverse md:flex-row bg-white rounded-lg shadow overflow-hidden w-full">
            <div
              className="
    p-6 flex flex-col justify-center w-full md:w-1/2
    rounded-lg                
    md:rounded-none          
    md:rounded-tl-lg md:rounded-bl-lg
    shadow border border-[#808080] md:border-r-0
  "
            >
              <h3 className="text-2xl font-semibold text-[#000080] mb-3">
                {selectedArea.subtitle}
              </h3>
              <p className="text-gray-600  text-justify mb-5">
                {selectedArea.description}
              </p>
              <button className="flex items-center gap-2 text-[#000080] font-semibold hover:underline">
                Contact{" "}
                <span className=" p-1 rounded-full text-[#000080]">→</span>
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <img
                src={selectedArea.image}
                alt={selectedArea.subtitle}
                className="w-full h-64 md:h-139 object-cover "
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
