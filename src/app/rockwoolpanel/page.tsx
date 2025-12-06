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
const Portacabins: React.FC = () => {
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
          <p className="text-gray-600 text-justify text-justify text-base md:text-[17px] tracking-wide mb-5 flex-1">
            {description}
          </p>
        </div>
      </div>
    );
  }
  const faqs = [
    {
      question: "What are Rockwool Sandwich Panels?",
      answer:
        "Rockwool panels are high-performance sandwich panels with a rigid stone wool core (from molten basalt rock) bonded between durable metal sheets. Landsking Infra manufactures these panels to deliver superior fire resistance, thermal insulation, and acoustic control in one efficient solution.",
    },
    {
      question: "What is the fire rating of Rockwool panels?",
      answer:
        "Rockwool panels are inherently non-combustible and provide exceptional fire resistance, making them suitable for applications requiring high safety standards.",
    },
    {
      question: "Are Rockwool panels good for soundproofing?",
      answer:
        "Yes. The dense stone wool core offers excellent acoustic insulation, reducing noise transmission between rooms and from external sources.",
    },
    {
      question: "Where are Rockwool panels commonly used?",
      answer:
        "They are widely used in industrial buildings, commercial facilities, cold storage units, clean rooms, and areas where fire safety and sound insulation are critical.",
    },
    {
      question:
        "What are the benefits of using Rockwool panels over other types?",
      answer:
        "Rockwool panels provide superior fire resistance, acoustic performance, thermal insulation, and durability compared to EPS or standard PUF panels.",
    },
    {
      question: "What thickness and density options are available?",
      answer:
        "Landsking Infra offers a range of thicknesses and densities to meet diverse structural, thermal, and acoustic requirements. Panels can be customized based on project needs.",
    },
    {
      question: "Are Rockwool panels environmentally friendly?",
      answer:
        "Yes. Rockwool is made from natural basalt rock and recycled materials, and the panels are fully recyclable, supporting sustainable building practices.",
    },
    {
      question: "Can Rockwool panels be used for cold storage?",
      answer:
        "Absolutely. Their thermal insulation properties make them suitable for cold storage units and temperature-controlled environments.",
    },
    {
      question:
        "How does Landsking Infra ensure the quality of its Rockwool panels?",
      answer:
        "All panels are produced under strict quality control in advanced facilities, ensuring consistent density, performance, and compliance with fire and safety standards.",
    },
    {
      question:
        "Why should I choose Landsking Infra as my Rockwool panel supplier?",
      answer:
        "With decades of expertise, nationwide delivery, technical support, and a commitment to quality, Landsking Infra provides reliable Rockwool panel solutions for all construction and industrial applications.",
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/final/Rockwool Panel (3).jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
                Rockwool Sandwich Panels
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white py-12 px-4 md:px-12 space-y-8 md:space-y-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[370px] order-2 lg:order-1">
              <Image
                src="/final/Roof Panel.jpg"
                alt="rockwool"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Rockwool Sandwich Panels
              </h3>
              <p className="text-gray-600 text-lg text-justify">
                Rockwool Panels – Certifiable Fire Resistance and Thermal
                Integrity Engineered to withstand extreme temperatures, our
                Rockwool Sandwich Panels offer stable thermal performance
                alongside the highest fire safety classifications. The robust
                stone wool core, secured by durable facings, ensures reliable
                insulation and regulatory compliance, making them essential for
                high-hazard and temperature-controlled facilities.
              </p>
              <button
                className="border mt-5 text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition"
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
              <ul className="list-disc pl-5 text-gray-600 md:text-lg mb-4">
                <li>
                  <strong>Core & Fire Safety:</strong> Non-combustible stone
                  wool (rockwool) core ensures superior fire resistance,
                  structural stability, and safety under high temperatures.
                </li>
                <li>
                  <strong>Thermal Efficiency:</strong> Delivers excellent
                  insulation performance with low K-values (typically
                  0.024–0.080 W/m·K), customizable by density and thickness.
                </li>
                <li>
                  <strong>Dimensions:</strong> Available in thicknesses from 50
                  mm to 150 mm (customizable) with standard panel widths and
                  various metal facings such as PPGI and Galvalume.
                </li>
                <li>
                  <strong>Structural Integrity:</strong> Engineered for strength
                  and stability with high compressive and flexural performance
                  and durable surface compression zones.
                </li>
                <li>
                  <strong>Acoustics & Durability:</strong> Provides excellent
                  sound absorption and noise dampening, featuring proper facings
                  and seals for superior moisture and weather resistance.
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[370px]">
              <Image
                src="/rockwool/rockwool panel (2).jpg"
                alt="Rockwool Sandwich Panels"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          {/* Row 3 - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[370px] order-2 lg:order-1">
              <Image
                src="/rockwool/rockwool panel (3).jpg"
                alt=" Rockwool Panel Applications"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Rockwool Panel Applications
              </h3>
              <p className="text-gray-700 text-justify text-lg ">
                Rockwool panels are ideal for safety-critical structures,
                providing fire-rated walls and roofs for high-occupancy and
                industrial facilities. They excel in noise management, forming
                effective acoustic enclosures for generators, turbines, and
                sensitive control rooms. Designed to maintain operational
                integrity, these panels insulate HVAC systems and machine rooms,
                minimizing both energy loss and noise. Their superior fire
                resistance and hygiene properties also make them suitable for
                specialized environments such as clean rooms, laboratories, and
                cold storage applications.
              </p>
            </div>
          </div>

          {/* Row 4 - Content Left, Image Right */}
          <main className="bg-white">
            <section className="bg-white py-12 px-4 sm:px-6 md:px-1 lg:px-12">
              <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card
                  image="/rockwool/rockwool wall panel (single groove).jpg"
                  icon={<FaBuilding size={32} className="text-white" />}
                  title="Wall Panel (Single Groove)"
                  description="The standard fire and sound barrier for facades and internal partitions in commercial buildings. 50 mm thickness with 1150 mm width, providing a dependable, non-combustible core. Simple design, maximum essential protection."
                />

                <Card
                  image="/rockwool/rockwool double grove panel.jpg"
                  icon={<FaSnowflake size={32} className="text-white" />}
                  title="Wall Panel (Double Groove)"
                  description="Perfect for airtight, climate-controlled spaces like cold storage and data centers. Features a specialized double tongue & groove seal for certified thermal and fire integrity. Where precision climate control is the priority."
                />

                <Card
                  image="/rockwool/rockwool Hidden Screw Wall Panel.jpg"
                  icon={<FaHome size={32} className="text-white" />}
                  title="Hidden Screw Wall Panel"
                  description="Creates a clean, uninterrupted aesthetic for showrooms and commercial spaces by concealing all fasteners. Available in the widest range of thicknesses (up to 150 mm) for high-performance visual appeal. Style meets certified substance."
                />

                <Card
                  image="/rockwool/camlock rockwool panel.png"
                  icon={<FaTools size={32} className="text-white" />}
                  title="Camlock Wall Panels"
                  description="Designed for quick assembly and re-deployment in modular structures using fast, mechanical Camlock connections. 1170 mm width and varied thicknesses ensure robust, flexible, and time-saving construction. Time is money, and these panels save both."
                />

                <Card
                  image="/final/Roof Panel.jpg"
                  icon={<FaWarehouse size={32} className="text-white" />}
                  title="Roof Panel"
                  description="A structural roofing solution for industrial and PEB sheds with a corrugated profile for optimal water run-off. Offers high load-bearing capacity and a strong thermal barrier in 50 mm or 80 mm thickness. Security and efficiency from the top down."
                />
              </div>
            </section>
          </main>

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

export default Portacabins;
