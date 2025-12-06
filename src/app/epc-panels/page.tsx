"use client";
import { useState, ReactNode } from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import Pebfooter from "yes/Components/Pebfooter";
import { FaWarehouse, FaIndustry } from "react-icons/fa";
import { MdOutlineCleanHands } from "react-icons/md";
type CardProps = {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
};
const Epcpanels: React.FC = () => {
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
          <p className=" text-justify text-gray-600 text-base md:text-[17px] tracking-wide mb-5 flex-1">
            {description}
          </p>
        </div>
      </div>
    );
  }
  const faqs = [
    {
      question: "What are PUF/PIR Sandwich Panels?",
      answer:
        "PUF (Polyurethane Foam) and PIR (Polyisocyanurate) panels are high-performance insulated sandwich panels with a core of rigid foam between metal sheets. Landsking Infra manufactures these panels to provide superior thermal insulation, strength, and energy efficiency for modern construction.",
    },
    {
      question: "What is the difference between PUF and PIR panels?",
      answer:
        "While both offer excellent insulation, PIR panels provide higher fire resistance and slightly better thermal efficiency than standard PUF panels, making them suitable for specialized applications.",
    },
    {
      question: "What types of PUF/PIR panels does Landsking Infra offer?",
      answer:
        "We offer wall and roof panels with various surface finishes, ribbing options, and core densities to meet diverse industrial, commercial, and cold storage requirements.",
    },
    {
      question: "What thicknesses and widths are available in PUF/PIR panels?",
      answer:
        "Thicknesses range from 40 mm to 150 mm, while standard panel widths are designed for optimal coverage and minimal joints, ensuring fast installation and structural reliability.",
    },
    {
      question: "Where are PUF/PIR panels commonly used?",
      answer:
        "These panels are ideal for cold storage facilities, industrial warehouses, commercial buildings, clean rooms, and modular structures requiring thermal insulation and fire safety.",
    },
    {
      question: "Are PUF/PIR panels fire-resistant and weatherproof?",
      answer:
        "Yes. PUF panels are treated to meet fire safety standards, and both PUF and PIR panels are resistant to moisture, weathering, and pests, ensuring durability in varied conditions.",
    },
    {
      question: "How energy-efficient are PUF/PIR panels?",
      answer:
        "With high R-values and low thermal conductivity, these panels reduce energy consumption for heating and cooling, contributing to sustainable and cost-effective building operations.",
    },
    {
      question: "Can PUF/PIR panels be customized?",
      answer:
        "Yes. Landsking Infra provides panels in customized thicknesses, finishes, profiles, and sizes to suit specific project requirements, ensuring flexibility in design and application.",
    },
    {
      question: "Can PUF/PIR panels be used for roofing and walls?",
      answer:
        "Absolutely. They are suitable for both walls and roofing systems, offering lightweight, high-strength solutions for industrial, commercial, and cold storage applications.",
    },
    {
      question: "How are PUF/PIR panels installed?",
      answer:
        "Panels are designed for quick, secure installation using mechanical fasteners, adhesives, or overlap methods. Landsking Infra also provides technical support and guidance to ensure proper installation on-site.",
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/epcimg/eps panel.png')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
                EPS Panels
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
                src="/epcimg/eps panel (2).png"
                alt="epcpanels"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Lightweight & Efficient Solutions for Modern Spaces
              </h3>
              <p className="text-gray-700 text-justify text-lg">
                EPS (Expanded Polystyrene) panels, also called thermocol
                sandwich panels, provide a smart, cost-effective solution for
                cladding, partitions, and thermal insulation. At EPACK Prefab,
                we craft these panels with precision for easy installation,
                reliable durability, and reduced heat transfer. Ideal for
                interior layouts, non-structural partitions, and
                temperature-moderated spaces, they combine lightweight
                convenience with practical efficiency.
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
                Applications of EPS Panels
              </h3>

              <ul className=" list-disc text-gray-700 md:text-lg mb-4 space-y-1">
                <ul className="list-disc pl-5 text-gray-700 md:text-lg mb-4">
                  <li>
                    <strong>Interior Walls & Partitions:</strong> Lightweight
                    and easy to install, perfect for non-load-bearing spaces.
                  </li>
                  <li>
                    <strong>Ceilings & Decorative Cladding:</strong> Offers
                    seamless finishes while reducing structural weight.
                  </li>
                  <li>
                    <strong>Roofing & Wall Systems:</strong> Provides insulation
                    and durability for moderate climate structures.
                  </li>
                  <li>
                    <strong>Cold Storage Interiors:</strong> Maintains
                    temperature efficiently in less critical storage areas.
                  </li>
                  <li>
                    <strong>Temporary & Modular Structures:</strong> Quick to
                    deploy, ideal for short-term or movable setups.
                  </li>
                  <li>
                    <strong>Warehouses & Industrial Facilities:</strong>{" "}
                    Cost-effective solution for large-scale construction needs.
                  </li>
                </ul>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[370px]">
              <Image
                src="/epcimg/eps panel (3).jpg"
                alt="uses of epc panels"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          <main className="bg-white">
            <section className="bg-white py-12 px-4 sm:px-6 md:px-12">
              <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                <Card
                  image="/epcimg/eps panel.jpg"
                  icon={<FaWarehouse size={32} className="text-white" />}
                  title="EPS wall panels"
                  description="Our EPS wall panels are designed for durability, thermal efficiency, and easy installation, ideal for both interior and exterior use. Featuring Standard Rib or Micro Rib finishes and a high-quality EPS core, they provide lightweight insulation with strong performance. Available in thicknesses from 40 to 150 mm and a 1170 mm panel width, they ensure efficient coverage and minimal joints. Produced on a continuous line for precision and quality, these panels are perfect for partitions, cladding, industrial buildings, and cold storage interiors."
                />
                <Card
                  image="/epcimg/eps panel.png "
                  icon={
                    <MdOutlineCleanHands size={32} className="text-white" />
                  }
                  title="EPS Roof Panels"
                  description="Our EPS roof panels combine strength, thermal efficiency, and fast installation, making them ideal for lightweight roofing in moderate climates. Featuring a Micro Rib surface finish for durability and a modern look, they use a high-quality EPS core to ensure excellent insulation and reduced heat transfer. Available in thicknesses from 50 to 150 mm with a 1000 mm panel width and overlap joint system, they offer secure weather protection and easy assembly. Manufactured on a continuous line for consistent quality, these panels are perfect for roofing systems, industrial sheds, warehouses, and modular or temporary structures."
                />
              </div>
            </section>
          </main>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Discover EPS Solutions Key Advantages:
              </h3>

              <ul className="list-disc pl-5 text-gray-700 md:text-lg mb-4">
                <li>
                  <strong>Lightweight Construction:</strong> Simplifies
                  handling, logistics, and accelerates installation timelines.
                </li>
                <li>
                  <strong>Economical Solution:</strong> Delivers high
                  performance while optimizing material and labor costs.
                </li>
                <li>
                  <strong>Thermal Performance:</strong> EPS core reduces heat
                  transfer, enhancing energy efficiency.
                </li>
                <li>
                  <strong>Resilient & Low Maintenance:</strong> Resistant to
                  moisture, pests, and decay for long-term reliability.
                </li>
                <li>
                  <strong>Acoustic Comfort:</strong> Provides effective noise
                  attenuation for quieter interiors.
                </li>
                <li>
                  <strong>Architectural Flexibility:</strong> Available in
                  diverse finishes and profiles to match design requirements.
                </li>
                <li>
                  <strong>Sustainable Choice:</strong> Recyclable material that
                  supports environmentally responsible construction.
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[370px]">
              <Image
                src="/epcimg/eps panel (4).jpg"
                alt="EPS Solutions Key Advantages"
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

export default Epcpanels;
