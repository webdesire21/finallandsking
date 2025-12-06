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
const Pufpanels: React.FC = () => {
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
      question: "What are EPS panels?",
      answer:
        "EPS (Expanded Polystyrene) panels are lightweight sandwich panels with an EPS core between metal sheets, designed for insulation, cladding, and partition applications. Landsking Infra manufactures these panels with precision to ensure consistent quality and performance.",
    },
    {
      question: "What are the benefits of using EPS panels?",
      answer:
        "They offer thermal efficiency, sound insulation, moisture resistance, lightweight construction, and cost-effective installation. Landsking Infra EPS panels also ensure durability and long-lasting performance for commercial, industrial, and interior projects.",
    },
    {
      question: "How are EPS panels used in construction?",
      answer:
        "EPS panels are widely used for interior partitions, wall and roof cladding, cold storage interiors, temporary structures, and industrial or commercial buildings.",
    },
    {
      question: "Are EPS panels environmentally friendly?",
      answer:
        "Yes, EPS is recyclable and contributes to energy-efficient buildings, making it a sustainable choice for modern construction.",
    },
    {
      question: "How are EPS panels installed?",
      answer:
        "Panels are designed for quick and easy installation, typically joined with mechanical fasteners, adhesives, or overlap methods depending on the application. Landsking Infra provides technical support to ensure proper installation.",
    },
    {
      question: "Can EPS panels be used in all climates?",
      answer:
        "They are suitable for mild to moderate climates and controlled interior environments; for extreme conditions, panel specifications can be customized.",
    },
    {
      question: "What are the fire safety considerations for EPS panels?",
      answer:
        "EPS panels meet standard fire safety norms when properly treated; additional coatings or fire-retardant additives can enhance safety for specific applications. Landsking Infra ensures all panels comply with industry safety standards.",
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/puf/puf panel.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
                Puf-panels
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white py-12 px-4 md:px-12 space-y-12 md:space-y-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[370px] order-2 lg:order-1">
              <Image
                src="/puf/puf panel.png"
                alt="puf-panels"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                PUF/PIR Panels – Smart Insulation for Modern Infrastructure
              </h3>
              <p className="text-gray-700 mb-4 text-justify">
                PUF and PIR panels are specially designed insulated wall and
                roof panels that keep interiors cooler, safer, and
                energy-efficient. At Landsking Infra, we produce these panels
                with high accuracy to ensure strong durability and fast on-site
                installation. Perfect for cold storage, clean rooms, and large
                commercial or industrial buildings, they help reduce power
                consumption while offering long-lasting performance.
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
                Types of PUF/PIR Sandwich Panels We Provide
              </h3>
              <p className="text-gray-700 mb-4 text-justify">
                We offer a versatile range of insulated sandwich panels
                engineered to meet diverse structural, thermal, and industrial
                requirements. Choose from the following panel categories based
                on your project application:
              </p>
              <ul className=" list-disc text-gray-700 mb-4 space-y-1">
                <ul className="list-disc pl-5 text-gray-700 mb-4">
                  <li>Roof Panels</li>
                  <li>Wall Panels</li>
                  <li>Cold Room Panels</li>
                  <li>Cold Storage Panels</li>
                  <li>Clean Room Panels</li>
                </ul>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[370px]">
              <Image
                src="/puf/Types of PUFPIR.png"
                alt="types of puf-panels"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          <main className="bg-white">
            <section className="bg-white py-12 px-4 sm:px-6 md:px-3 lg:px-12">
              <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card
                  image="/puf/puf panel rail shelter.png"
                  icon={<FaWarehouse size={32} className="text-white" />}
                  title="Railway Shelters"
                  description="Durable railway and telecom shelters, built to endure harsh conditions. Quick installation, low maintenance, and long-lasting reliability."
                />
                <Card
                  image="/puf/puf panel peb building.jpg"
                  icon={
                    <MdOutlineCleanHands size={32} className="text-white" />
                  }
                  title="Prefabricated Multi-Storey Buildings"
                  description="Designed for superior strength and cost-effectiveness, suitable for commercial and residential projects."
                />
                <Card
                  image="/puf/puf panel airport.jpg"
                  icon={<FaIndustry size={32} className="text-white" />}
                  title="Airport Terminal Buildings"
                  description="Prefabricated structures for staff accommodations, worker housing, and more."
                />
              </div>
            </section>
          </main>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Best-in-Class PUF/PIR Panel Features & Benefits
              </h3>

              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>
                  Thermal Insulation: Maintains optimal temperatures; reduces
                  energy consumption.
                </li>
                <li>
                  Fire Resistance: Self-extinguishing properties ensure safety
                  in industrial & commercial setups.
                </li>
                <li>
                  Durability: High structural strength for long-lasting
                  performance.
                </li>
                <li>
                  Airtight Construction: Minimizes energy loss and enhances
                  insulation efficiency.
                </li>
                <li>
                  Custom Dimensions: Panels available in various thicknesses and
                  widths to fit project requirements.
                </li>
                <li>
                  Water & Vapor Resistance: Protects against moisture and
                  weather-related damage.
                </li>
                <li>
                  Hygienic & Seamless Finish: Concealed screws and Camlock
                  systems ensure clean, aesthetic surfaces.
                </li>
                <li>
                  Versatile Applications: Suitable for cold storage, clean
                  rooms, warehouses, prefabricated buildings, and modular
                  structures.
                </li>
                <li>
                  Eco-Friendly: Manufactured from environmentally safe
                  materials.
                </li>
                <li>
                  Low Maintenance: Quick installation with minimal upkeep,
                  providing long-term operational savings.
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[370px]">
              <Image
                src="/final/Puf-panels.jpg"
                alt=" Best-in-Class PUF/PIR Panel Features"
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

export default Pufpanels;
