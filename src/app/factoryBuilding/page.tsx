"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "../../Components/Footer";
import Pebheader from "yes/Components/Pebheader";

const FactoryBuilding: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a modern factory building?",
      answer:
        "It stands as a mission-critical asset, meticulously engineered to enclose specific production protocols while maximizing unobstructed internal volume, load capacity, and process flow efficiency.",
    },
    {
      question:
        "What materials are used in advanced factory building construction?",
      answer:
        "The established norm is high-tensile structural steel (typically Pre-Engineered) for the framework, complemented by specialized metal roofing and high-performance insulated panel systems for the envelope.",
    },
    {
      question:
        "What are the key benefits of choosing prefabricated factory buildings?",
      answer:
        "They deliver a significantly expedited market entry (boosting ROI) and ensure superior budget certainty, thanks to stringent, precise fabrication control over all modular elements.",
    },
    {
      question:
        "How does a pre-engineered factory building differ from a traditional building?",
      answer:
        "PEB facilities utilize an optimized, fully integrated construction methodology where components are manufactured off-site, thereby dramatically lowering on-site erection time and minimizing material wastage.",
    },
    {
      question:
        "How long does it typically take to construct a prefabricated factory building?",
      answer:
        "Owing to the strategy of concurrent engineering and manufacturing, the on-site construction duration is often 30–50% shorter than standard methods, rapidly achieving operational status.",
    },
    {
      question: "Are prefabricated factory buildings durable and long-lasting?",
      answer:
        "Absolutely. They are structurally designed as permanent, high-value capital assets. The utilization of durable, quality-controlled steel guarantees a functional service life of five decades or more.",
    },
    {
      question:
        "What is the strategic role of insulation in factory buildings?",
      answer:
        "Insulation is vital for sustaining exact internal climatic conditions, which sharply reduces energy expenditure for environmental control and fosters a more comfortable, productive space for equipment and staff.",
    },
    {
      question:
        "What are the maintenance requirements for prefabricated factory buildings?",
      answer:
        "Maintenance is characteristically minimal and highly predictable, primarily involving routine inspections and cleaning, enabled by the use of corrosion-resistant coated steel and durable cladding materials.",
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/menupagetwo/fac-1.jpg')",
            }}
          >
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
                Factory Building
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white  py-8 md:py-12 px-4 md:px-12 space-y-16">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px] order-2 lg:order-1">
              <Image
                src="/menupagetwo/fac-3.jpeg"
                alt="Prefabricated Factory Building"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Prefabricated Factory Buildings Designed for Industrial
                Applications
              </h3>
              <p className="text-gray-600 mb-4 text-justify md:text-lg">
                Landsking Infra delivers durable and efficient prefabricated
                factory buildings suitable for a wide range of industrial uses,
                such as warehouses, manufacturing units, and testing centers.
                Their solutions offer fast installation, energy savings, and
                long-term reliability—all while keeping costs optimized.
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
                Prefab Factory Building Manufacturing Techniques and Technology
              </h2>
              <p className="text-gray-600 mb-4 text-justify  md:text-lg">
                Material Quality - Uses premium steel and insulated panels for
                durability and thermal efficiency.
              </p>
              <p className="text-gray-600 mb-4 text-justify  md:text-lg">
                Structural Design - Features strong columns, beams, and trusses
                to guarantee stability and precision.
              </p>
              <p className="text-gray-600 mb-4 text-justify  md:text-lg">
                Flexible Construction - Offsite fabrication reduces on-site
                disruptions and accelerates the installation process.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/menupagetwo/factory3.jpg"
                alt="Manufacturing Techniques"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px] order-2 lg:order-1">
              <Image
                src="/menupagetwo/fac-4.jpeg"
                alt="Factory Applications"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Key Applications of Prefabricated Factory Buildings
              </h2>
              <p className="text-gray-600 mb-4 text-justify md:text-lg">
                Landsking Infras factory buildings cater to a wide range of
                industrial requirements, such as:
              </p>
              <ul className="text-gray-600 md:text-lg mb-0 space-y-1 list-disc pl-6">
                <li>Production plants and manufacturing units</li>
                <li>Warehouses and distribution centers</li>
                <li>Testing and quality assurance labs</li>
                <li>Industrial enclosures</li>
                <li>Assembly and inspection zones</li>
              </ul>
            </div>
          </div>

          {/* Row 5 */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Why Choose Landsking Infra?
              </h3>
              <ul className="space-y-1 list-disc pl-6 text-gray-600 md:text-lg">
                <li>Trusted Expertise Since 1999</li>
                <li>Comprehensive Turnkey Project Solutions</li>
                <li>Pan-India Project Delivery & Implementation</li>
                <li>Fully Integrated Design & Manufacturing Capabilities</li>
                <li>Dedicated Commitment to Quality and On-Time Delivery</li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/menupagetwo/fac-5.jpeg"
                alt="Why Choose Us"
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
                <div key={idx} className="bg-white p-4 ">
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
                    <p className="text-gray-600 text-justify text-base md:text-md">
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

export default FactoryBuilding;
