"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const areas = [
  {
    id: 1,
    title: "Comprehensive Mechanical Design & Development Solutions",
    subtitle: "Comprehensive Mechanical Design & Development Solutions",
    description:
      "We provide end-to-end mechanical design and development solutions, combining innovation, precision, and engineering expertise. Our offerings include mechanical concept design, detailed CAD design and development, machine and sheet metal design, as well as advanced 3D modeling using SolidWorks, Autodesk Inventor, and CATIA. We specialize in assembly modeling, parametric 3D design, and the creation of tools, jigs, and fixtures to streamline manufacturing. Additionally, we support legacy data conversion, product lifecycle management, and weldment and frame design, ensuring every project achieves optimal performance, manufacturability, and reliability.",
    image: "/rnd/design.jpg",
  },
  {
    id: 2,
    title: "Virtual Testing & Performance Analysis Services",
    subtitle: "Virtual Testing & Performance Analysis Services",
    description:
      "We deliver comprehensive simulation, analysis, and virtual testing services to ensure optimal product performance and reliability. Our expertise covers finite element analysis (FEA), fatigue, crash, impact, and structural stress analysis, along with computational fluid dynamics, thermal modeling, vibration analysis, and tolerance assessments. Through virtual prototyping, failure analysis, and load testing simulations, we help engineers predict performance, identify risks, and optimize designs before physical production, saving time and reducing costly errors.",
    image: "/rnd/ok.jpg",
  },
  {
    id: 3,
    title: "End-to-End Industrial Design & Automation Services",
    subtitle: "End-to-End Industrial Design & Automation Services",
    description:
      "We provide comprehensive industrial design and engineering automation services to streamline manufacturing and optimize production processes. Our offerings include casting and vacuum casting design, process planning and automation, CNC programming, tooling and die design, and assembly line optimization. We also support engineering fabrication, production cost estimation, proposal review, bid management, engineering change orders, and tolerance analysis for machining. Leveraging advanced project management tools and industrial automation, we help businesses improve efficiency, reduce errors, and achieve high-quality, cost-effective manufacturing outcomes.",
    image: "/rnd/automation.jpg",
  },
  {
    id: 4,
    title: "Comprehensive Piping, Plant & HVAC Design",
    subtitle: "Comprehensive Piping, Plant & HVAC Design",
    description:
      "We deliver end-to-end plant, piping, and HVAC design services, ensuring efficient and compliant facility layouts. Our expertise includes plant design engineering, modular plant services, and piping design and drafting. We also provide HVAC ducting, plumbing, firefighting, and fire protection engineering solutions. With precise design and coordination, we help optimize operations and enhance system reliability.",
    image: "/rnd/hvac.jpg",
  },
  {
    id: 5,
    title: "Tailored Design Solutions for Specialized Sectors",
    subtitle: "Tailored Design Solutions for Specialized Sectors",
    description:
      "We provide specialized design services for diverse sectors, including tower engineering, ship deck drafting, and consumer electronics product design. Our solutions combine precision, compliance, and innovative approaches to meet unique industry requirements. Deliver high-quality, optimized designs that enhance performance and functionality across specialized applications.",
    image: "/rnd/tailor.jpg",
  },
  {
    id: 6,
    title: "Product Data, Compliance & Lifecycle Management Services",
    subtitle: "Product Data, Compliance & Lifecycle Management Services",
    description:
      "We deliver fatigue and durability analysis to predict product lifespan under repeated stresses, ensuring long-term reliability. Using stress-life, strain-life, crack growth, and vibration fatigue methods, we help prevent failures and extend component life.",
    image: "/rndimages/Mechanical/plm.jpeg",
  },
  {
    id: 7,
    title: "Efficient, Compliant & Sustainable Product Design",
    subtitle: "Efficient, Compliant & Sustainable Product Design",
    description:
      "We provide value engineering and sustainability services focused on cost-efficient, high-performance designs. Our expertise includes design optimization, lightweighting, material substitution, and energy efficiency improvements. We ensure compliance with environmental standards such as RoHS and REACH. By integrating sustainability into engineering processes, we help reduce costs, improve performance, and support environmentally responsible product development.",
    image: "/rndimages/Mechanical/value.jpg",
  },
];

// ------------------------
// Tablet detection hook
// ------------------------
function useIsTablet() {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsTablet(window.innerWidth >= 640 && window.innerWidth <= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isTablet;
}

export default function Rndexplore() {
  const [selectedId, setSelectedId] = useState(3);
  const [open, setOpen] = useState(false);

  const selectedArea = areas.find((area) => area.id === selectedId);

  const isTablet = useIsTablet();

  // -------------------------------------
  // TABLET VIEW (Mobile dropdown + row layout)
  // -------------------------------------
  if (isTablet) {
    return (
      <section className="mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-6">
          Engineering Solutions
        </h2>

        {/* mobile-style dropdown */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full p-3 rounded-t-lg text-white font-semibold flex justify-between bg-[#000080]"
        >
          {selectedArea?.title}

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
          <div className="bg-[#000080] rounded-b-lg">
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

        {/* content + image side-by-side */}
        {selectedArea && (
          <div className="flex flex-row bg-white rounded-lg border border-[#808080] overflow-hidden mt-6">
            <div className="p-6 w-1/2">
              <h3 className="text-2xl font-semibold text-[#000080] mb-3">
                {selectedArea.subtitle}
              </h3>
              <p className="text-gray-700 text-justify">
                {selectedArea.description}
              </p>
              <button
                onClick={() => (window.location.href = "/rnd-contact")}
                className="flex items-center gap-2 text-[#000080] font-semibold mt-4"
              >
                Contact
                <div className="bg-[#000080] rounded-full p-1.5">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>

            <div className="w-1/2 p-4">
              <img
                src={selectedArea.image}
                alt={selectedArea.subtitle}
                className="w-full h-64 mt-30 object-cover rounded-lg"
              />
            </div>
          </div>
        )}
      </section>
    );
  }

  // -------------------------------------
  // ORIGINAL MOBILE + DESKTOP VIEW
  // -------------------------------------

  return (
    <section className="mx-auto px-4 py-10 md:px-19">
      <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-8">
        Engineering Solutions
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/4">
          {/* --- MOBILE DROPDOWN (UNCHANGED) --- */}
          <div className="md:hidden mb-0">
            <button
              onClick={() => setOpen(!open)}
              className="w-full p-3 rounded-t-lg text-white font-semibold flex justify-between items-left bg-[#000080]"
            >
              {selectedArea?.title}
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
              <div className="bg-[#000080] rounded-b-lg">
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

          {/* --- DESKTOP LEFT SIDEBAR (UNCHANGED) --- */}
          <div className="hidden md:flex flex-col bg-[#000080] text-white rounded-lg pt-[27px] pb-[27px] px-[5px]">
            {areas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedId(area.id)}
                className={`px-5 py-4 text-left ${
                  selectedId === area.id ? "font-bold" : "hover:text-gray-300"
                }`}
              >
                {area.title}
              </button>
            ))}
          </div>
        </div>

        {/* --- RIGHT CONTENT AREA (UNCHANGED FOR DESKTOP + MOBILE) --- */}
        {selectedArea && (
          <div className="flex flex-col-reverse md:flex-row bg-white rounded-lg border border-[#808080] overflow-hidden w-full">
            <div className="p-6 w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-[#000080] mb-3">
                {selectedArea.subtitle}
              </h3>
              <p className="text-gray-600 text-justify mb-5">
                {selectedArea.description}
              </p>
              <button
                onClick={() => (window.location.href = "/rnd-contact")}
                className="flex items-center gap-2 text-[#000080] font-semibold"
              >
                Contact
                <div className="bg-[#000080] rounded-full p-1.5">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>

            <div className="w-full md:w-1/2 p-4">
              <img
                src={selectedArea.image}
                alt={selectedArea.subtitle}
                className="w-full  md:mt-20 h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
