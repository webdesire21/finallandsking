"use client";
import React, { useState } from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import Pebfooter from "yes/Components/Pebfooter";

const ControlRoom: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a modular control room building?",
      answer:
        "A modular control room is a pre-engineered structure designed to securely house monitoring and control operations for industrial plants, delivering rapid installation, mobility, and high safety standards.",
    },
    {
      question: "What materials are used in modular control room construction?",
      answer:
        "Construction uses galvanized steel frames, insulated PUF/PIR panels, and acoustic linings to ensure superior strength, precise temperature control, and effective noise isolation.",
    },
    {
      question: "How long does it take to build a modular control room?",
      answer:
        "Since components are factory-fabricated, on-site assembly is exceptionally fast, allowing control rooms to be fully operational within 5–10 days, minimizing site disruption.",
    },
    {
      question:
        "What are the key benefits of modular control room construction?",
      answer:
        "They offer flexibility, high relocatability, and simple expansion, providing a comfortable, controlled, and safe workspace for operators in demanding industrial settings.",
    },
    {
      question:
        "How are modular control rooms designed for safety and comfort?",
      answer:
        "Features include fire-rated walls, vibration resistance, and robust thermal insulation, with advanced HVAC and noise control ensuring a stable, productive atmosphere.",
    },
    {
      question:
        "Can modular control rooms be customized for specific industries?",
      answer:
        "Yes, layouts, windows, and console placements are custom-designed to meet the exact operational and regulatory needs of power plants, steel mills, and oil & gas facilities.",
    },
    {
      question:
        "Why should we choose your company for control rooms and pulpits?",
      answer:
        "We deliver high-performance, turnkey modular control rooms built with precision engineering and premium materials, guaranteeing reliability, safety, and rapid execution for lasting value.",
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/new-images/control-room-1.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
                Control Room
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white py-12 px-4 md:px-12  space-y-12 md:space-y-16">
          {/* Row 1 - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[370px]  order-2 lg:order-1">
              <Image
                src="/new-images/control-room-2.jpg"
                alt="  Advanced Engineering Solutions for Control Rooms"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className=" order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Advanced Engineering Solutions for Control Rooms
              </h3>
              <p className="  text-justify text-gray-600 text-lg">
                Landsking Infra offers prefabricated control rooms using
                high-quality PUF-insulated panels, serving sectors like steel
                plants, mining, power generation, and beyond. Designed for
                strength and reliability, these control rooms come in both
                lift-on and non-lift-on variants and can be customized with or
                without steel frameworks.
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
                Key Features of Control Rooms
              </h3>
              <p className="text-gray-600 text-lg text-justify">
                Control rooms are engineered for superior performance in
                industrial environments, Key features are:
              </p>
              <ul className=" text-gray-600 md:text-lg space-y-1">
                <li>Pre-engineered construction using PUF-insulated panels</li>
                <li>
                  Variety of exterior finishes, such as PPGS/PPGS, PPGS/ACP, and
                  SS/SS
                </li>
                <li>Strong, long-lasting walls offered in multiple heights</li>
                <li>Easy-to-handle panels for versatile installation</li>
                <li>
                  Integrated large view windows within the insulated panels
                </li>
                <li>Raised flooring for organized cable routing</li>
              </ul>
              <p className="text-gray-600 text-lg">
                Allows for effortless integration of essential safety equipment,
                such as smoke detection and fire suppression systems.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[370px]">
              <Image
                src="/new-images/control-room-3.jpg"
                alt="   Control Rooms"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          {/* Row 3 - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[370px]  order-2 lg:order-1">
              <Image
                src="/new-images/control-room-1.jpg"
                alt=" Manufacturing Technology"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className=" order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Manufacturing Technology
              </h3>
              <p className="text-gray-600 text-lg text-justify">
                Landsking Infra leads in control room engineering, combining
                cutting-edge production technology with superior materials.
                Designed for peak performance in demanding conditions, our
                control rooms comply with regulatory approvals and satisfy both
                commercial and safety standards.
              </p>
            </div>
          </div>

          {/* Row 4 - Content Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Applications
              </h3>
              <p className="text-gray-600 text-lg text-justify">
                Landsking Infra provides control room solutions for diverse
                industries, including:
              </p>
              <ul className=" text-gray-600 md:text-lg space-y-1 text-justify">
                <li>Industrial manufacturing and production sites</li>
                <li>Steel plants, smelting operations, and furnace sections</li>
                <li>Bulk goods handling areas</li>
                <li>
                  Facilities for food processing, pharmaceuticals, and
                  electronics testing
                </li>
                <li>High-heat environments like steel mills</li>
                <li>
                  Tailored HSM control rooms, offered in both lift-on and
                  non-lift-on designs
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[370px]">
              <Image
                src="/new-images/control-room-5.jpg"
                alt="control room applications"
                fill
                className="object-cover rounded-lg "
              />
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
                    <span className="text-black text-lg font-bold">
                      {openIndex === idx ? "▲" : "▼"}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === idx ? "max-h-96 mt-2" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600 text-base md:text-md">
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

export default ControlRoom;
