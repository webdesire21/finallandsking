"use client";
import React, { useState } from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import Pebfooter from "yes/Components/Pebfooter";

const RailwayShelters: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a modular railway shelter?",
      answer:
        "It is a pre-engineered infrastructure module built using factory-made components, designed for fast, large-scale deployment to enhance passenger comfort and safety at stations.",
    },
    {
      question: "What materials ensure durability and low maintenance?",
      answer:
        "Construction relies on galvanized steel frameworks, high-spec protective panels, and anti-corrosion treatments to guarantee minimal lifecycle cost and superior resistance to weather and wear.",
    },
    {
      question: "What are the primary advantages of modular railway shelters?",
      answer:
        "They enable exceptionally fast project turnaround, are easily scalable, and critically enhance passenger well-being by providing immediate, reliable environmental protection.",
    },
    {
      question: "Can these public transit shelters be customized?",
      answer:
        "Yes, designs are bespoke tailored to integrate with local architectural identity, accommodate specific traffic flow, and feature integrated digital signage and full accessibility solutions.",
    },
    {
      question: "How quickly can a modular railway shelter be installed?",
      answer:
        "Deployment is highly accelerated, typically requiring only 2 to 7 days. Factory fabrication ensures a clean, fast process that results in a highly cost-efficient project completion model.",
    },
    {
      question: "Are these shelters durable enough for continuous public use?",
      answer:
        "Yes. High-grade steel and robust panel systems ensure the units withstand continuous public use and environmental stress, guaranteeing long-term public utility with minimal upkeep.",
    },
    {
      question:
        "Why choose Landsking Infra for railway infrastructure projects?",
      answer:
        "We supply precision-engineered modules built with verified materials, ensuring unmatched public safety, asset longevity, and enhanced passenger environments through reliable turnkey execution.",
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/new-images/railway-shelters-1.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
                Railway Shelters
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white py-12 px-4 md:px-12   md: space-y-12 md:space-y-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px]  order-2 lg:order-1">
              <Image
                src="/new-images/railway-shelters-2.jpg"
                alt=" Durable and Highly Functional Shelters"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className=" order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Durable and Highly Functional Shelters
              </h3>
              <p className="text-gray-600 text-lg text-justify">
                Landsking Infra is recognized as a top manufacturer of
                prefabricated railway and telecom shelters, delivering
                dependable, customized turnkey solutions to meet the specific
                needs of industrial clients. Engineered to endure extreme
                weather, our railway and telecom shelters safeguard delicate
                telecom equipment from dust, moisture, and environmental damage.
                Their portable and lightweight design ensures quick
                installation, cost savings, and long-lasting performance.
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
                Key Features of Prefabricated Shelters
              </h3>
              <p className="text-gray-600">
                Landsking Infras railway and telecom shelters are built using
                high-quality materials, delivering superior performance. Key
                features include:
              </p>
              <br />
              <ul className="list-disc pl-5 text-gray-600 md:text-lg mb-4">
                <li>
                  Excellent thermal resistance for effective temperature
                  management
                </li>
                <li>
                  Reinforced floor and ceiling panels for enhanced strength
                </li>
                <li>Extra roofing to ensure proper water drainage</li>
                <li>
                  IP54-rated protection with airtight and watertight sealing
                </li>
                <li>
                  Durable, low-maintenance construction for long-lasting use
                </li>
                <li>
                  3-way locking system with stainless steel hinges for optimum
                  security
                </li>
                <li>
                  Torque groove design with integrated cam locks for structural
                  stability
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/new-images/railway-shelters-3.jpg"
                alt="Key Features of Prefabricated Shelters"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          {/* Row 3 - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px]  order-2 lg:order-1">
              <Image
                src="/new-images/railway-shelters-4.jpeg"
                alt=" Advanced Manufacturing Technology"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className=" order-1 lg:order-2">
              <h3 className="text-2xl  md:text-3xl text-[#000080] font-bold mb-4">
                Manufacturing Technology
              </h3>
              <p className="text-gray-600 text-lg text-justify">
                Landsking Infra employs advanced manufacturing techniques and
                meticulous engineering to create robust, high-quality shelters.
                Tailored for railway and telecom applications, our shelters are
                made with superior materials to endure extreme weather
                conditions. They safeguard critical equipment while providing
                long-term protection from dust, moisture, and corrosion,
                ensuring dependable performance.
              </p>
            </div>
          </div>

          {/* Row 4 - Content Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Uses of Prefabricated Shelters
              </h3>

              <p className="text-gray-600 text-lg text-justify">
                Landsking Infra offers durable and user-friendly shelters
                suitable for a variety of temporary or permanent uses, such as:
              </p>
              <ul className="list-disc pl-5 text-gray-600 md:text-lg mb-4">
                <li>Railway Shelters</li>
                <li>BTS (Base Transceiver Station) Shelters</li>
                <li>Telecom Shelters</li>
                <li>Signaling Huts</li>
                <li>Temporary Shelters</li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/new-images/railway-shelters-5.jpg"
                alt="  Uses of Prefabricated Shelters"
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
                    <p className="text-gray-600 text-base md:text-md text-justify">
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

export default RailwayShelters;
