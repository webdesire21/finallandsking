"use client";
import React, { useState } from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import Pebfooter from "yes/Components/Pebfooter";

const PrefabricatedSite: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are prefabricated site infrastructure solutions?",
      answer:
        "These are modular, pre-engineered utility assets (like security cabins, sanitation, and power enclosures) designed for rapid setup and guaranteed project compliance.",
    },
    {
      question: "What core advantages do these solutions offer?",
      answer:
        "Key benefits include accelerated site mobilization, instant adherence to safety codes, and guaranteed asset standardization across large project portfolios.",
    },
    {
      question: "How quickly can site infrastructure be deployed?",
      answer:
        "Deployment is exceptionally fast, often completed in days. This allows managers to immediately focus on core construction instead of complex site logistics.",
    },
    {
      question: "What types of components are included?",
      answer:
        "Solutions cover essential needs: guard posts, portable restrooms, generator enclosures, and specialized storage units, all optimized for fast, seamless integration.",
    },
    {
      question: "Can site infrastructure units be relocated?",
      answer:
        "Yes. Their robust, modular design ensures complete portability and efficient reuse, allowing them to be transported and redeployed across sequential project phases.",
    },
    {
      question: "How does prefab infrastructure enhance site compliance?",
      answer:
        "By utilizing standardized, code-compliant units (e.g., first-aid stations), they ensure worker welfare and safety mandates are met immediately and predictably.",
    },
    {
      question: "Are these infrastructure units ready for immediate use?",
      answer:
        "Yes, units are delivered as plug-and-play modules, requiring only simple hookups (like electricity or water) to become fully operational and effective instantly.",
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/new-images/prefabricated-1.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
                Prefabricated Site Infrastructure Solutions
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white py-12 px-4 md:px-12  space-y-12 md:space-y-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[380px]  order-2 lg:order-1">
              <Image
                src="/imagesall/pf.jpg"
                alt="Prefabricated Site Infrastructure Solutions"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className=" order-1 lg:order-2">
              <h3 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Complete Infrastructure Solutions for Quick, Efficient, and
                Economical Project Implementation
              </h3>
              <p className="text-gray-600 text-lg text-justify">
                Landsking Infra offers customized prefab site infrastructure
                solutions designed for fast-paced construction, industrial, and
                infrastructure projects throughout India. Our modular structures
                are durable, cost-effective, and ready for quick deployment,
                making them ideal for temporary high-performance setups.
                <br />
                <br />
                Whether its a site office, worker accommodation, toilet block,
                or storage unit, Landsking Infra provides complete, ready-to-use
                solutions that minimize downtime and keep your projects running
                seamlessly.
              </p>
              <button
                className="border  mt-5 text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition"
                onClick={() => (window.location.href = "/peb-contact")}
              >
                Get a Quote
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Essential Site Infrastructure Components We Provide
              </h3>
              <p className="text-gray-600 text-lg">
                We offer a comprehensive range of prefabricated infrastructure
                modules, including:
                <br />
              </p>
              <ul className="text-gray-600 mb-4 list-disc pl-5">
                <li> Prefabricated Site Offices</li>
                <li> Accommodation for Staff and Labour</li>
                <li> Sanitary and Toilet Facilities</li>
                <li>Security Cabins & Guard Posts</li>
                <li> Storage and Inventory Units</li>
                <li> Kitchen and Mess Areas</li>
                <li> Hand Wash and Utility Stations</li>
              </ul>

              <p className="text-gray-600 text-lg">
                Each unit is factory-built, pre-engineered, and ready for quick
                on-site assembly, saving you time, effort, and costs.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[380px]">
              <Image
                src="/new-images/prefabricated-3.jpg"
                alt=" Essential Site Infrastructure Components We Provide"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          {/* Row 3 - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[380px]  order-2 lg:order-1">
              <Image
                src="/new-images/prefabricated-4.jpg"
                alt="Why Choose Landsking Infra for Modular Infrastructure?"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className=" order-1 lg:order-2">
              <h3 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Why Choose Landsking Infra for Modular Infrastructure?
              </h3>
              <ul className="text-gray-600 mb-1 space-y-1">
                <li>
                  380Quick Setup – Get your site ready faster than traditional
                  methods
                </li>
                <li>
                  380Moveable & Reusable – Ideal for projects across multiple
                  locations
                </li>
                <li>
                  380Built to Last – Engineered for extreme weather and
                  demanding site conditions
                </li>
                <li>
                  380Flexible Designs – Customizable layouts for offices,
                  accommodation, and more
                </li>
                <li>
                  380Comfortable Spaces – Thermal and sound insulation for a
                  pleasant environment
                </li>
                <li>
                  380Green Construction – Low waste and eco-conscious materials
                </li>
              </ul>
            </div>
          </div>

          {/* Row 4 - Content Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Ideal Applications
              </h3>
              <p className="text-gray-600 text-lg">
                Our prefabricated infrastructure solutions are trusted across a
                wide range of sectors: <br />
                <br />
                <ul className="list-disc pl-5">
                  <li>Civil construction projects</li>
                  <li>Highway and metro development projects</li>
                  <li>Oil and gas industry sites</li>
                  <li>Mining operations</li>
                  <li>Power and energy plants</li>
                  <li>Remote industrial facilities</li>
                </ul>
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[380px]">
              <Image
                src="/new-images/prefabricated-5.jpg"
                alt="Ideal Applications"
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

export default PrefabricatedSite;
