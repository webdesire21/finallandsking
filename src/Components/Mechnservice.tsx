"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const areas = [
  {
    id: 1,
    title: "  Design & Development Services ",
    subtitle: "Comprehensive Mechanical Design & Development Services",
    description:
      "We offer complete mechanical engineering solutions, including core design, analysis, CAD modeling, and product development services across industries. Our expertise covers machine design, sheet metal, assembly modeling, parametric 3D modeling, and tools, fixtures, and jigs design. Using advanced platforms like SolidWorks, CATIA, and Autodesk Inventor, we deliver Global Standard services and manufacturable designs. From legacy conversion to full product lifecycle support, our services enhance collaboration, accelerate development, ensure compliance, and drive innovation at every stage.",
    image: "/mk/Mechanical Design & Development Service.jpg",
  },
  {
    id: 2,
    title: "Advanced Simulation Services",
    subtitle: "Advanced Simulation, Analysis & Virtual Testing Services",
    description:
      "We deliver comprehensive simulation, analysis, and virtual testing services to improve engineering accuracy and product reliability. Our expertise spans finite element analysis (FEA), fatigue, crash and impact, CAE modal, structural, stress, thermal, vibration, and computational fluid dynamics simulations. Additionally, we provide failure, tolerance, and load testing analyses along with virtual prototyping services. Leveraging advanced simulation engineering tools, our solutions help validate designs, reduce defects, ensure compliance, and accelerate product development across industries.",
    image: "/mk/Advanced Simulation, Analysis.jpg",
  },
  {
    id: 3,
    title: "Industrial Design  Services",
    subtitle: "Industrial Design & Engineering Automation Services",
    description:
      "We provide end-to-end industrial design and engineering automation services to optimize manufacturing processes and product quality. Our expertise includes casting design, vacuum casting, CNC programming, tooling and die design, assembly line optimization, and tolerance analysis for machining. As well, we support process planning, engineering fabrication, production cost estimation, project management, proposal review, bid management, and engineering change orders. Taking advantage of advanced automation tools and best practices, we help industries improve efficiency, reduce errors, ensure compliance, and accelerate production timelines",
    image: "/mk/Industrial Design & Engineering Automation Services.jpg",
  },
  {
    id: 4,
    title: "Plant, Piping & HVAC Design Services",
    subtitle: "Plant, Piping & HVAC Design Services",
    description:
      "We provide complete plant, piping, and HVAC design services to optimize operational efficiency, safety, and compliance. Our offerings include plant design engineering, Plant Design Management System (PDMS), modular plant design, piping design and drafting, HVAC ducting design, plumbing, firefighting, and fire protection engineering services. Leveraging advanced CAD and simulation tools, our expert team ensures accuracy in ISO-compliant designs that streamline construction, reduce errors, and enhance overall system performance across industries.",

    image: "/mk/Plant, Piping & HVAC Design Services.jpg",
  },

  {
    id: 6,
    title: "Specialized  Design Services",
    subtitle: "Specialized Sector Design Services",
    description:
      "We offer specialized design services across niche industries to meet unique technical and functional requirements. We are experts in assisting industries with our services. like tower design, ship deck design and drafting, and consumer electronics product design. Using advanced CAD tools and industry best practices, we deliver precise, ISO-compliant, and manufacturable designs that enhance performance, ensure compliance, and accelerate product development for specialized sectors.",
    image: "/mk/Specialized Sector Design Services.jpeg",
  },
  {
    id: 7,
    title: "Product  Services",
    subtitle: "Product Lifecycle & Documentation Services",
    description:
      "We provide each and every product lifecycle and documentation services to support efficient development, compliance, and operations. We are experts in PLM implementation and customization, technical publications, installation and maintenance manuals, engineering change documentation, CE/UL certification support, and material compliance reports. Leveraging industry best practices and advanced tools, we ensure accurate, ISO-compliant documentation that enhances traceability, reduces errors, and accelerates product launching.",
    image: "/mk/Product Lifecycle & Documentation Services.jpg",
  },
  {
    id: 8,
    title: " Engineering & Sustainability Services",
    description:
      "We offer Expert engineering and sustainability services to optimize designs and reduce costs. Our solutions include design optimization, lightweighting, material substitution, and energy efficiency improvements.We also ensure compliance with environmental regulations like RoHS and REACH, supporting sustainable and efficient product development.",
    subtitle: "Engineering & Sustainability Services",
    image: "/mk/Engineering & Sustainability Services.jpg",
  },
];

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

export default function Mechnservice() {
  const [selectedId, setSelectedId] = useState(3);
  const [open, setOpen] = useState(false);

  const selectedArea = areas.find((area) => area.id === selectedId);

  const isTablet = useIsTablet();

  if (isTablet) {
    return (
      <section className="mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-6">
          Our Products{" "}
        </h2>

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

  return (
    <section className="mx-auto px-4 py-10 md:px-19">
      <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-8">
        Infrastructure Engineering Solutions
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

          <div className="hidden md:flex flex-col bg-[#000080] text-white rounded-lg pt-[73px] pb-[73px] px-[5px]">
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
                className="w-full  md:mt-30 h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
