"use client";
import React, { useState } from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import Pebfooter from "yes/Components/Pebfooter";

const ColdRoom: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is modular cold room construction?",
      answer:
        "It involves assembling prefabricated, insulated wall, floor, and ceiling panels on-site, allowing for rapid deployment and creating a precisely controlled, integrated storage environment.",
    },
    {
      question: "How long does it take to build a modular cold room?",
      answer:
        "Thanks to off-site manufacturing and plug-and-play assembly, most installations are fully commissioned within 1–4 weeks, significantly accelerating operational readiness.",
    },
    {
      question: "What materials are used for modular cold rooms?",
      answer:
        "We use high-quality Insulated Sandwich Panels (PUF/PIR), stainless steel or aluminum sheets, and vapor barriers, ensuring superior thermal insulation, hygiene, and durability.",
    },
    {
      question: "Can modular cold rooms be expanded or moved?",
      answer:
        "Yes, their modular nature provides exceptional flexibility. Panels can be easily dismantled, expanded, or relocated with minimal downtime, supporting scaling operations.",
    },
    {
      question: "What temperature range can a modular cold room hold?",
      answer:
        "These units reliably maintain temperatures from chilled (+15°C) down to deep-freeze (−40°C), suitable for all sensitive goods, including pharmaceuticals and seafood.",
    },
    {
      question: "What are the energy efficiency and maintenance benefits?",
      answer:
        "Insulated modular structures minimize thermal loss, dramatically reducing power consumption and operating costs, supported by highly efficient compressors and smart controls.",
    },
    {
      question: "What standards and approvals are required for construction?",
      answer:
        "Compliance is mandatory. Construction adheres to crucial regulatory frameworks, including HACCP, ISO, GMP, and all local fire, structural, and electrical safety codes.",
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/new-images/cold-room-1.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
                Cold Storage & Cold Room Manufacturer
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white py-12 px-4 md:px-12  space-y-12 md:space-y-16">
          {/* Row 1 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/new-images/cold-room-2.jpg"
                alt="   Cold Storage & Cold Room Manufacturer"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Landsking Infra Leading Cold Storage and Cold Room Solutions
                Provider in India
              </h3>
              <p className="text-gray-700 text-lg text-justify">
                Nearly 40–50% of fresh produce in India goes to waste annually
                because of inadequate cold chain systems, causing losses worth
                USD 440 billion. Landsking Infra provides state-of-the-art cold
                storage and cold room solutions to protect perishable goods and
                reduce wastage. Backed by industry expertise, high-quality
                standards, and innovative solutions, we are a trusted cold
                storage manufacturer, cold room manufacturer, and supplier of
                cold room panels for businesses across sectors.
              </p>
              <button
                className="border mt-3 text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition"
                onClick={() => (window.location.href = "/peb-contact")}
              >
                Get a Quote
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Reasons to Choose Landsking Infra for Your Cold Storage and Cold
                Room Needs
              </h3>
              <ul className=" text-gray-700 md:text-lg space-y-1">
                <li>
                  <strong>Proven Expertise:</strong> Years of experience
                  delivering high-performance, industry-specific cold storage
                  solutions.
                </li>
                <li>
                  <strong>Customized Designs:</strong> Storage systems tailored
                  to your precise requirements for optimal space and temperature
                  management.
                </li>
                <li>
                  <strong>Efficient Operations:</strong> Energy-saving
                  technologies that minimize costs and enhance sustainability.
                </li>
                <li>
                  <strong>Top-Quality Construction:</strong> High-grade
                  materials and advanced manufacturing for durability and
                  reliability.
                </li>
                <li>
                  <strong>Standards Compliance:</strong> Adherence to all
                  regulatory guidelines for safe and dependable storage.
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/new-images/cold-room-3.webp"
                alt="Reasons to Choose Landsking Infra"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Row 3 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/new-images/cold-room-4.jpg"
                alt="Key Features of Landsking InfraCold Storage"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Key Features of Landsking InfraCold Storage and Cold Room
                Solutions
              </h3>
              <p className="text-gray-700 text-lg text-justify">
                Our cold rooms and storage systems combine precision and
                innovation for optimal operation:
              </p>
              <ul className=" text-gray-700 md:text-lg space-y-1">
                <li>
                  Factory-Engineered Panels: High-quality insulated panels
                  ensure thermal efficiency and durability.
                </li>
                <li>
                  Superior Insulation: Incorporates PUF/EPS and advanced
                  continuous line panels for reduced energy loss and improved
                  heat retention.
                </li>
                <li>
                  Precision Design: Structurally optimized for reliable and
                  consistent functionality.
                </li>
              </ul>
            </div>
          </div>

          {/* Row 4 - Content Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Cold Storage Manufacturing Technology
              </h3>
              <p className="text-gray-700 text-justify text-lg">
                We use advanced manufacturing technologies to deliver superior
                quality and performance:
              </p>
              <ul className=" text-gray-700 text-justify md:text-lg space-y-1">
                <li>
                  Continuous Line Panels: Newly implemented panels provide
                  consistent quality and are ideal for cold room construction.
                </li>
                <li>
                  Factory-Produced Insulated Panels: Offer accurate thermal
                  control and robust durability.
                </li>
                <li>
                  Innovative Insulation: Uses PUF/EPS for excellent energy
                  retention.
                </li>
                <li>
                  Precision Structural Design: Ensures consistent performance
                  and integrity in all conditions.
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/new-images/cold-room-5.jpg"
                alt=" Cold Storage Manufacturing Technology"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Row 5 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/new-images/cold-room-6.avif"
                alt="Applications of Cold Room and Cold Storage Solutions"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-[28px] font-bold mb-4 text-[#000080]">
                Applications of Cold Room and Cold Storage Solutions
              </h3>
              <p className="text-gray-700  text-justify text-lg">
                Landsking Infra’s cold storage and cold room solutions serve a
                wide range of industries, including:{" "}
              </p>
              <ul className=" text-gray-700 md:text-lg space-y-1">
                <li>
                  <strong>Food Sector:</strong> Keep perishable food items like
                  fruits, vegetables, dairy, and meat fresh.
                </li>
                <li>
                  <strong>Pharma Industry:</strong> Ensure secure storage of
                  medicines, vaccines, and sensitive pharmaceuticals.
                </li>
                <li>
                  <strong>Chemicals:</strong> Preserve chemicals and hazardous
                  substances under controlled conditions.
                </li>
                <li>
                  <strong>Horticulture:</strong> Prolong the life and quality of
                  flowers, plants, and horticultural produce.
                </li>
              </ul>
            </div>
          </div>

          {/* Centered Heading + Paragraph */}

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
                    <span
                      className={`transition-transform duration-300 ${
                        openIndex === idx ? "rotate-90" : ""
                      }`}
                    >
                      ▶
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === idx ? "max-h-96 mt-2" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600 text-base text-justify md:text-md">
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

export default ColdRoom;
