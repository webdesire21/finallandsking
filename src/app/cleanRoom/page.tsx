"use client";
import React, { useState } from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import Pebfooter from "yes/Components/Pebfooter";

const CleanRoom: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a modular clean room building?",
      answer:
        "It is a pre-engineered, contamination-controlled facility built with insulated panels and precision sealing, guaranteeing the required atmospheric purity for sensitive manufacturing or research.",
    },
    {
      question: "What materials are used in modular clean room construction?",
      answer:
        "Construction uses pharmaceutical-grade panels, aluminum framing, and specialized anti-static flooring, ensuring ease of sanitation, hygiene compliance, and zero particle shedding.",
    },
    {
      question: "What industries require clean rooms?",
      answer:
        "They are essential in biotechnology, pharmaceutical production, microelectronics, and advanced food processing, where maintaining specific air quality and environmental control is mandatory.",
    },
    {
      question: "How are clean rooms classified based on cleanliness?",
      answer:
        "Clean rooms are precisely categorized according to ISO 14644 standards, which dictates the maximum concentration of particulates allowed per cubic meter of air.",
    },
    {
      question: "What systems are integrated inside a clean room?",
      answer:
        "Integrated systems include multi-stage filtration with HEPA/ULPA filters, differential air pressure control, and smart monitoring to sustain consistent temperature and particulate purity.",
    },
    {
      question: "What are the benefits of modular clean room construction?",
      answer:
        "Modular construction provides accelerated commissioning, built-in future scalability, and superior risk mitigation by minimizing on-site contamination exposure during the build phase.",
    },
    {
      question: "Why choose Landsking Infra for clean room construction?",
      answer:
        "We deliver custom-engineered clean rooms that exceed ISO, GMP, and FDA performance thresholds, providing turnkey solutions for verifiable purity and long-term asset reliability.",
    },
  ];

  return (
    <>
      <div>
        <Pebheader />

        {/* Hero Section */}
        <section className="w-full min-h-[300px] md:min-h-[500px] flex flex-col md:flex-row">
          {/* Left Column */}
          <div
            className="flex-1 flex items-center justify-center p-8 bg-cover bg-center relative"
            style={{
              backgroundImage:
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/new-images/clean-room-1.png')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
                Clean Room
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white py-12 px-4 md:px-12 space-y-12 md:space-y-16">
          {/* Row 1 - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[370px]  order-2 lg:order-1">
              <Image
                src="/new-images/clean-room-2.jpg"
                alt="High-Precision Controlled Environments"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className=" order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                High-Precision Controlled Environments
              </h3>
              <p className="text-gray-600 text-lg  text-justify">
                Clean rooms are specialized environments created to keep
                airborne particles, contaminants, and pollutants at extremely
                low levels. They are critical for sectors such as
                pharmaceuticals, electronics, biotechnology, food processing,
                and medical devices, where even tiny particles can compromise
                product quality. Landsking Infra excels in designing and
                producing modular clean room solutions using premium PUF, EPS,
                and Rockwool sandwich panels. Leveraging more than 25 years of
                prefabrication expertise, our systems comply with rigorous
                international standards, offering excellent hygiene, thermal
                performance, and contamination control.
              </p>
              <button
                className="border mt-3 text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition"
                onClick={() => (window.location.href = "/peb-contact")}
              >
                Get a Quote
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Why Choose Us for Clean Room Construction?
              </h3>
              <ul className="list-disc pl-5 text-gray-600 md:text-lg mb-4">
                <li>
                  <strong className="text-gray-600 md:text-lg">
                    Comprehensive In-House Design & Manufacturing:
                  </strong>{" "}
                  Landsking Infra offers complete clean room solutions from
                  concept design to commissioning, tailored for your industry’s
                  needs.
                </li>
                <li>
                  <strong className="text-gray-600 md:text-lg">
                    Premium Modular Panels:
                  </strong>{" "}
                  Constructed using insulated sandwich panels for high strength,
                  thermal efficiency, and airtight performance.
                </li>
                <li>
                  <strong>Flexible Configurations:</strong> ISO-class compliant
                  clean rooms with modular layouts that can be easily expanded
                  or reconfigured.
                </li>
                <li>
                  <strong>Rapid Delivery:</strong> State-of-the-art production
                  facilities enable fast manufacturing and installation,
                  covering over 6,800 sqm daily.
                </li>
                <li>
                  <strong>Nationwide Project Execution:</strong> Delivering to
                  pharma hubs, industrial zones, and R&D centers across India
                  with a reliable logistics network.
                </li>
                <li>
                  <strong>Standards & Compliance:</strong> Designed to adhere to
                  GMP, FDA, ISO, and WHO guidelines depending on project
                  specifications.
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[370px]">
              <Image
                src="/new-images/clean-room-3.jpg"
                alt=" Why Choose Us for Clean Room Construction?"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          {/* Row 3 - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[370px]  order-2 lg:order-1">
              <Image
                src="/new-images/clean-room-4.jpg"
                alt="  Industries Served by Us"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className=" order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Industries Served by Us
              </h3>
              <ul className=" list-disc text-gray-600 md:text-lg mb-4 space-y-1 pl-5">
                <li>Pharmaceutical & API Manufacturing Units</li>
                <li>Biotechnology & Life Science Industries</li>
                <li>Food & Beverage Manufacturing</li>
                <li>Electronics and Semiconductor Assembly</li>
                <li>Medical, Lab & Research Centers</li>
                <li>Aerospace & Defense Sectors</li>
              </ul>
            </div>
          </div>

          {/* Row 4 - Content Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Essential Features of Landsking Infra Clean Rooms
              </h3>

              <ul className="list-disc pl-5 text-gray-600 md:text-lg mb-4">
                <li>Leak-proof, continuous construction</li>
                <li>Excellent thermal and sound insulation</li>
                <li>Panels that resist fire and corrosion</li>
                <li>Easy-to-clean, hygienic finishes</li>
                <li>Fully compatible with HVAC and filtration systems</li>
                <li>
                  Lower energy consumption thanks to high-performance insulation
                </li>
                <li>Long-lasting, maintenance-free design</li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[370px]">
              <Image
                src="/final/clean room.jpg"
                alt=" Essential Features of Landsking Infra Clean Rooms"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          <div className="mx-auto md:mt-22">
            <h2 className="text-2xl md:text-3xl text-[#000080] font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-4 rounded-md ">
                  <button
                    onClick={() => handleToggle(idx)}
                    className="flex justify-between items-center w-full text-left font-semibold md:text-xl text-md focus:outline-none"
                  >
                    {faq.question}
                    <span className="text-black text-lg font-bold">
                      {openIndex === idx ? "▲" : "▼"}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === idx ? "max-h-96 mt-2" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600  text-justify text-base md:text-md">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Pebfooter />
    </>
  );
};

export default CleanRoom;
