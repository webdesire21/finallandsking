"use client";
import { useState, ReactNode } from "react";

import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import Pebfooter from "yes/Components/Pebfooter";
import {
  FaWarehouse,
  FaSnowflake,
  FaBuilding,
  FaTools,
  FaHome,
} from "react-icons/fa";

type CardProps = {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
};
const Glasswool: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  function Card({ image, icon, title, description }: CardProps) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-lg">
        {/* Image */}
        <div className="relative w-full h-48 sm:h-56 overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-black opacity-0 transition-all duration-500 group-hover:w-[88%] group-hover:opacity-100"></div>
        </div>

        {/* Icon */}
        <div className="relative -mt-8 ml-auto mr-4 bg-[#000080] p-3 rounded shadow-lg flex items-center justify-center w-fit">
          {icon}
        </div>

        {/* Text */}
        <div className="px-5 pb-6 flex-1 flex flex-col text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold tracking-wide mb-3">
            {title}
          </h3>
          <p className="text-gray-600 text-justify text-base md:text-[17px] tracking-wide mb-5 flex-1">
            {description}
          </p>
        </div>
      </div>
    );
  }
  const faqs = [
    {
      question: "What is a Glasswool Panel?",
      answer:
        "Glasswool panels are lightweight insulation panels with a core made of fine glass fibers, sandwiched between durable metal facings. Landsking Infra manufactures these panels to provide effective thermal insulation, acoustic control, and fire safety in one solution.",
    },
    {
      question: "What are the benefits of using Glasswool Panels?",
      answer:
        "Glasswool panels offer excellent thermal and acoustic insulation, lightweight construction, fire resistance, and energy efficiency, making them ideal for modern building projects.",
    },
    {
      question: "Where are Glasswool Panels commonly used?",
      answer:
        "They are widely used in commercial buildings, industrial facilities, cold storage units, HVAC ducts, and other spaces requiring insulation and sound control.",
    },
    {
      question: "Are Landsking Infra Glasswool Panels fire-resistant?",
      answer:
        "Yes. Glasswool is non-combustible and provides high fire resistance, enhancing safety for all types of installations.",
    },
    {
      question: "How energy-efficient are Glasswool Panels?",
      answer:
        "With low thermal conductivity and high R-values, these panels help maintain stable indoor temperatures and reduce energy consumption for heating and cooling.",
    },
    {
      question: "Are Glasswool Panels eco-friendly?",
      answer:
        "Yes. Glasswool is made from recyclable glass and contributes to sustainable, energy-efficient construction.",
    },
    {
      question: "How are Glasswool Panels installed?",
      answer:
        "Panels are designed for quick and secure installation using mechanical fasteners or adhesives. Landsking Infra provides technical guidance to ensure proper on-site installation.",
    },
    {
      question: "What thickness options are available for Glasswool Panels?",
      answer:
        "Panels are available in multiple thicknesses to suit insulation, acoustic, and structural requirements of different projects.",
    },
    {
      question: "Can Glasswool Panels be used in residential buildings?",
      answer:
        "Absolutely. Their lightweight, fire-resistant, and energy-efficient properties make them suitable for both residential and commercial applications.",
    },
    {
      question: "Why choose Landsking Infra for Glasswool Panels?",
      answer:
        "Landsking Infra combines decades of experience, nationwide delivery, technical support, and strict quality control to provide reliable, high-performance Glasswool panel solutions.",
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/glass/glasS wool PANEL.webp')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
                Glasswool Panel
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white py-12 px-4 md:px-12 space-y-12 md:space-y-16">
          {/* Row 1 - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[370px] order-2 lg:order-1">
              <Image
                src="/glass/glasswool.jpg"
                alt="  Glasswool Panel"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Glasswool Panel
              </h3>
              <p className="text-gray-700 text-lg text-justify">
                Glasswool Panels – Mitigating Risk with Acoustic and Fire
                Excellence Our Glasswool Sandwich Panels deliver a specialized
                blend of high-level acoustic absorption and certified fire
                resilience, critical for modern industrial operations. Landsking
                Infra Infra deploys this rigid core solution to effectively
                compartmentalize noise and guarantee the safety of sensitive
                areas, ensuring operational continuity and compliance on all
                major construction fronts.
              </p>
              <button
                className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition"
                onClick={() => (window.location.href = "/peb-contact")}
              >
                Get a Quote
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Key Technical Specifications
              </h3>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>
                  <strong>Exceptional Fire Resistance:</strong> Guarantees
                  superior passive fire protection with its non-combustible
                  composition, ensuring safety and compliance in critical
                  environments.
                </li>
                <li>
                  <strong>Superior Acoustic Performance:</strong> Optimizes
                  internal environments by effectively mitigating noise
                  pollution for improved comfort and productivity.
                </li>
                <li>
                  <strong>Excellent Thermal Efficiency:</strong> Maintains
                  energy performance and indoor stability, ensuring long-term
                  efficiency without material deterioration.
                </li>
                <li>
                  <strong>Moisture & Microbial Resistance:</strong> Prevents
                  structural degradation, mold growth, and contamination,
                  ensuring hygiene and durability in all conditions.
                </li>
                <li>
                  <strong>Eco-Friendly & Sustainable:</strong> Supports
                  corporate sustainability goals and green building
                  certifications through environmentally responsible materials
                  and processes.
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[370px]">
              <Image
                src="/glass/GLASSWOOL.jpeg"
                alt=" Key Technical Specifications"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          {/* Row 3 - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[370px] order-2 lg:order-1">
              <Image
                src="/glass/glasswool panel.jpg"
                alt="core applications glass wool"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Core Applications
              </h3>
              <p className="text-gray-700 text-lg text-justify">
                Our Glasswool Panels are the professional standard for critical
                infrastructure, deployed specifically to enhance safety and
                performance across various complex builds. Key applications
                include fire-rated partitions in high-occupancy commercial and
                healthcare environments, acoustic enclosures for noise-sensitive
                spaces like studios and industrial facilities, and large-scale
                industrial roofing and cladding. They also ensure precise
                temperature control and efficiency within HVAC ducting and
                highly regulated clean room facilities.
              </p>
            </div>
          </div>

          {/* Row 4 - Content Left, Image Right */}

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

export default Glasswool;
