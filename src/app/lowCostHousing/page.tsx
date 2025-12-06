"use client";
import React, { useState } from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import Pebfooter from "yes/Components/Pebfooter";

const LowCostHousing: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What is housing built with PUF panels?",
      answer:
        "It’s a clever modular system using dense Polyurethane Foam (PUF) composites for the envelope, guaranteeing superior insulation and extremely fast structural build-up.",
    },
    {
      question: "How do PUF panel homes save money?",
      answer:
        "Savings come from greatly reduced on-site labor, ultra-quick assembly schedules, and a permanent drop in utility bills due to premium thermal efficiency.",
    },
    {
      question: "How good is PUF insulation for energy?",
      answer:
        "The panels create a perfect thermal seal, severely cutting down the cooling/heating energy needed, positioning the home as an ultra-low consumption asset.",
    },
    {
      question: "How fast can a PUF home be built?",
      answer:
        "The timeline is measured in weeks, not months, because all parts are ready-made; this accelerated schedule means occupants settle in much sooner than traditionally possible.",
    },
    {
      question: "Are PUF panel homes durable?",
      answer:
        "Yes, built on a light-gauge steel base, they possess high structural resilience against weather and maintain integrity over a long, guaranteed multi-decade lifespan.",
    },
    {
      question: "Can the design of PUF homes be changed?",
      answer:
        "Absolutely. The modular core permits total architectural freedom for layout and external finishes, easily achieving any desired traditional or contemporary look.",
    },
    {
      question: "Are PUF homes comfortable to live in?",
      answer:
        "The dense composite provides inherent acoustic stability, ensuring a consistently quiet, temperature-controlled environment, regardless of the outside noise or climate.",
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/new-images/low-cost-housing-1.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
                Cost-Effective Housing
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white py-12 px-4 md:px-12 space-y-16">
          {/* Row 1 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/new-images/low-cost-housing-2.jpg"
                alt="Landsking Infra low costing housing"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div>
              <h3 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Innovative and Budget-Friendly Housing with PUF and EPS Panels
              </h3>
              <p className="text-gray-700 mb-4 text-justify">
                Landsking Infra delivers innovative, budget-friendly housing
                solutions using PUF and EPS panels, ensuring eco-friendly,
                energy-efficient, and durable construction. These solutions are
                designed to meet modern housing needs without compromising on
                quality or comfort.
              </p>
              <button
                className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition"
                onClick={() => (window.location.href = "/peb-contact")}
              >
                Get a Quote
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Advantages and unique qualities of PUF and EPS panel homes
              </h3>
              <p className="text-gray-700 mb-4 text-justify">
                Cost-effective construction: Pre-engineered panels minimize
                labor and installation time, cutting down overall expenses.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                Thermal efficiency: Excellent insulation helps maintain indoor
                comfort while reducing energy usage.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                Durability: Built to resist corrosion, pests, fire, and extreme
                weather for long-lasting performance.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                Lightweight and relocatable: Easy to transport and assemble,
                making them ideal for multiple applications.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                Customizable designs: Flexible layouts and finishes tailored to
                suit varied project needs.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                Eco-friendly: Sustainable materials help lower the overall
                carbon footprint.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/new-images/low-cost-housing-3.jpg"
                alt="low costing housing"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          {/* Row 3 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/new-images/low-cost-housing-4.webp"
                alt="applictaions of low cost housing"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div>
              <h3 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Applications
              </h3>
              <ul className="text-gray-700 mb-4 space-y-1">
                <li>
                  Labour accommodation: Rapidly deployable housing units to meet
                  workforce requirements.
                </li>
                <li>
                  Modular site offices: Efficient, relocatable office spaces
                  designed for construction environments.
                </li>
                <li>
                  Temporary housing: Practical short-term living solutions for
                  disaster relief or seasonal staff.
                </li>
                <li>
                  Marketing offices: Portable and functional structures for
                  sales or promotional operations.
                </li>
                <li>
                  Construction canteens: Convenient on-site dining facilities
                  for workers and teams.
                </li>
                <li>
                  Equipment housing: Secure and durable shelters for machinery,
                  tools, and equipment.
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
                <div key={idx} className="bg-white p-4 rounded-md ">
                  <button
                    onClick={() => handleToggle(idx)}
                    className="flex justify-between items-center w-full text-left font-semibold md:text-xl text-md focus:outline-none"
                  >
                    {faq.question}
                    <span
                      className={`transition-transform duration-300 ${
                        openIndex === idx ? "rotate-90" : ""
                      }`}
                    >
                      ▶
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
      <Pebfooter />
    </>
  );
};

export default LowCostHousing;
