"use client";
import React, { useState } from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import Footer from "../../Components/Footer";

const IndustrialShed: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "What are the primary benefits of choosing prefabricated industrial sheds?",
      answer:
        "They deliver significantly faster deployment via off-site manufacturing, offering superior structural accuracy and flexibility for future expansion.",
    },
    {
      question:
        "Is investing in a prefabricated shed truly worthwhile for my operation? ",
      answer:
        "Yes, their core value is in accelerated ROI (quicker startup) and predictable project costs, thanks to factory-controlled material quality.",
    },
    {
      question: "What is the definition of a prebuilt shed? ",
      answer:
        "It is a Pre-Engineered Building (PEB) system where all structural components are meticulously designed and fabricated off-site for rapid, bolt-together assembly.",
    },
    {
      question: "Who are the leading industrial shed manufacturers in India?",
      answer:
        "The industry leaders, known for capacity and integrity, include Tata BlueScope Steel, Everest Industries, EPACK Prefab, and Bajaj PEB.",
    },
    {
      question:
        "What is the construction methodology used for modern industrial sheds?",
      answer:
        " The dominant modern approach is the PEB system, involving comprehensive computer-aided design and rapid, low-disruption on-site assembly using bolted connections.",
    },
    {
      question:
        "What materials are commonly used in high-quality industrial shed construction?",
      answer:
        " It features high-strength structural steel paired with durable metal roofing and high-performance insulated sandwich panels for thermal efficiency.",
    },
  ];

  return (
    <>
      <div>
        <Pebheader />

        {/* Hero Section */}
        <section className="w-full min-h-[300px] md:min-h-[500px] flex flex-col md:flex-row">
          <div
            className="flex-1 flex items-center justify-center p-8 bg-cover bg-center relative"
            style={{
              backgroundImage:
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/shed/Industrial Shed (2).jpeg')",
            }}
          >
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
                Industrial Shed
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white py-7 md:py-12 px-4 md:px-12 space-y-12 md:space-y-16">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[470px] order-2 lg:order-1">
              <Image
                src="/shed/three.jpg"
                alt="Pre-engineered Industrial Shed Builders"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Pre-engineered Industrial Shed Builders
              </h2>
              <p className="text-gray-700 mb-4 text-justify  md:text-lg">
                As civil construction continues to advance rapidly, the demands
                on construction sites are growing exponentially. To meet these
                challenges, prefabricated industrial sheds have gained immense
                popularity due to their quick installation, easy disassembly,
                and cost-effectiveness.
              </p>
              <p className="text-gray-700 mb-4 text-justify  md:text-lg">
                Landsking Infra, a leading manufacturer of prefabricated
                structures, delivers top-quality industrial shed solutions at
                competitive construction costs. The use of pre-engineered
                buildings has become a preferred choice across various
                industries, with pre-engineered industrial sheds leading the
                way.
              </p>
              <p className="text-gray-700 mb-4 text-justify  md:text-lg">
                With a reputation for reliability and innovation, Landsking
                Infra has rapidly become one of the fastest-growing industrial
                shed manufacturers and suppliers in India, expertly addressing
                the evolving needs of the construction sector.
              </p>
              <button
                className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition"
                onClick={() => (window.location.href = "/peb-contact")}
              >
                Get a Quote
              </button>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                High-Quality Features of Industrial Sheds
              </h2>
              <p className="text-gray-700 mb-4  text-justify md:text-lg">
                At Landsking Infra, we prioritize custom-designed architecture
                and client-specific construction, ensuring that every
                prefabricated structure aligns perfectly with your operational
                needs.
              </p>
              <strong className="text-2xl text-[#000080]">Key Features</strong>
              <ul className="list-disc pl-6 mt-2 text-gray-700 md:text-lg space-y-1">
                <li>
                  <strong>Sturdy structural design</strong> for enhanced
                  durability and long service life
                </li>
                <li>
                  <strong>High resistance</strong> to rust, moisture, and
                  harmful UV exposure
                </li>
                <li>
                  <strong>Fast installation process</strong> compared to
                  traditional construction methods
                </li>
                <li>
                  <strong>Built-in fire safety features</strong> for added
                  protection
                </li>
                <li>
                  <strong>Cost-efficient construction</strong> without
                  compromising on quality
                </li>
              </ul>
            </div>
            <div className="relative w-full h-[500px] md:h-[480px]">
              <Image
                src="/shed/two.jpeg"
                alt="High resistance"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[450px] order-2 lg:order-1">
              <Image
                src="/shed/five.jpeg"
                alt="Engineering Specifications for Industrial Shed Components"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Engineering Specifications for Industrial Shed Components
              </h2>
              <ul className=" text-gray-700 md:text-lg  mb-4 space-y-1">
                <li>
                  <strong>Wall Panels:</strong> 50mm or 60mm thick PUF/EPS
                  insulated sandwich panels, cladded with PPGI sheets on both
                  sides for enhanced thermal efficiency and durability.
                </li>
                <li>
                  <strong>Roof Panels:</strong> 30mm or 40mm thick PUF/EPS
                  insulated sandwich panels, or high-quality PPGI roofing
                  sheets, depending on design and thermal requirements.
                </li>
                <li>
                  <strong>Doors:</strong> Factory-fabricated insulated doors,
                  complete with all necessary accessories.
                </li>
                <li>
                  <strong>Windows:</strong> Aluminum anodized sliding windows
                  from our in-house manufacturing setup.
                </li>
                <li>
                  <strong>Structure & Accessories:</strong> All supporting
                  components and accessories required for installation will be
                  delivered prior to project handover.
                </li>
                <li>
                  <strong>Interiors (Optional):</strong> Electrical fittings,
                  sanitary fittings, and furniture will be supplied and
                  installed as per the clients requirements.
                </li>
              </ul>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Industrial Shed Applications
              </h2>
              <p className="text-gray-700 mb-4 text-justify  md:text-lg">
                Landsking Infra offers a versatile range of pre-engineered
                industrial sheds, perfectly suited for construction needs across
                diverse industries.
              </p>
              <ul className="list-disc pl-6 text-gray-700 md:text-lg space-y-1">
                <li>Transport & Logistics Sector</li>
                <li>Chemical & Processing Industry</li>
                <li>Manufacturing Units & Production Facilities</li>
                <li>Warehousing & Storage Spaces</li>
                <li>Commercial & Retail Outlets</li>
              </ul>
            </div>
            <div className="relative w-full h-42 md:h-[310px]">
              <Image
                src="/shed/for.png"
                alt="Transport & Logistics Sector"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          {/* Row 5 */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[450px]order-2 lg:order-1">
              <Image
                src="/menupagetwo/is-7.png"
                alt=" Why Landsking Infra Pvt Ltd for Industrial shed"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Why Landsking Infra Pvt Ltd Prefab?
              </h2>
              <ul className="list-disc pl-6 text-gray-700 md:text-lg space-y-1">
                <li>Trusted Expertise Since 1999</li>
                <li>Comprehensive Turnkey Project Solutions</li>
                <li>Pan-India Project Delivery & Implementation</li>
                <li>Fully Integrated Design & Manufacturing Capabilities</li>
                <li>Dedicated Commitment to Quality and On-Time Delivery</li>
              </ul>
            </div>
          </div>

          <div className="mx-auto md:mt-22">
            <h2 className="text-2xl md:text-3xl text-[#000080] font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-4 rounded-md shadow-sm">
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
      <Footer />
    </>
  );
};

export default IndustrialShed;
