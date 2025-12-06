"use client";
import React, { useState } from "react";
import Image from "next/image";

import Footer from "../../Components/Footer";
import Pebheader from "yes/Components/Pebheader";
import Pebfooter from "yes/Components/Pebfooter";

const ColdStorage: React.FC = () => {
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
          <div
            className="flex-1 flex items-center justify-center p-8 bg-cover bg-center relative"
            style={{
              backgroundImage:
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/menupagetwo/cold3.png')",
            }}
          >
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
                Cold Storage & Cold Room Manufacturer
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white py-12 px-4 md:px-12 space-y-12  md:space-y-16">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px] order-2 lg:order-1">
              <Image
                src="/menupagetwo/cold4.png"
                alt="  Cold Storage & Cold Room Manufacturer
              "
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2
                className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl 
text-transform: capitalize;"
              >
                Your Reliable Partner for Cold Storage and Cold Room
                Manufacturing in India
              </h2>
              <p className="text-gray-600 text-lg">
                Did you know that 40-50% of Indias fresh produce is wasted every
                year due to insufficient cold chain infrastructure, resulting in
                losses worth USD 440 billion?
              </p>
              <p className="text-gray-600 text-lg">
                At Landsking Infra, we offer advanced cold storage and cold room
                solutions designed to preserve perishables and minimize waste.
                With our expertise, commitment to quality, and innovative
                approach, we are the trusted cold storage manufacturer, cold
                room manufacturer, and cold room panels supplier for businesses
                across various industries.
              </p>
              <button
                className="border mt-3 text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition"
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
                Why Choose Landsking Infra for Your Cold Storage
              </h2>
              <p className="text-gray-600 text-lg text-justify">
                Expertise & Experience - Extensive experience delivering
                customized, high-performance cold storage solutions across
                diverse industries.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                Tailored Designs - Customized solutions to meet your specific
                storage requirements, maximizing temperature control and space
                efficiency.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                Energy Efficiency - Incorporation of advanced technologies to
                reduce energy consumption and lower operational costs.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                Premium Quality - Use of superior materials and cutting-edge
                manufacturing processes for enhanced durability and reliability.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/menupagetwo/cold2.jpg"
                alt=" Why Choose Landsking Infra for Your Cold Storage"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px] order-2 lg:order-1">
              <Image
                src="/menupagetwo/cold6.png"
                alt="Features of Cold Storage and Cold Room Systems"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Features of Cold Storage and Cold Room Systems
              </h2>
              <ul className="text-gray-600 md:text-lg mb-4 space-y-1">
                <li>
                  <strong>Modular and scalable design:</strong> Easily
                  expandable and adaptable to changing storage needs.
                </li>
                <li>
                  <strong>Quick and easy installation:</strong> Prefabricated
                  panels allow fast setup, reducing downtime.
                </li>
                <li>
                  <strong>Fire-resistant construction:</strong> Panels are
                  designed to resist fire, ensuring safety.
                </li>
                <li>
                  <strong>Corrosion-resistant materials:</strong> Built to
                  withstand harsh environments and prevent rust.
                </li>
                <li>
                  <strong>Low maintenance requirements:</strong> Durable
                  materials minimize the need for frequent repairs.
                </li>
                <li>
                  <strong>Customizable sizes and layouts:</strong> Tailored
                  solutions to fit specific space and operational needs.
                </li>
              </ul>
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
      <Pebfooter />
    </>
  );
};

export default ColdStorage;
