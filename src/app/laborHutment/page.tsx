"use client";
import React, { useState } from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import PedFooter from "../../Components/Footer";
import Pebfooter from "yes/Components/Pebfooter";

const LaborHutment: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a prefabricated labour hutment?",
      answer:
        "It is a modular worker welfare unit built for quick assembly, providing safe, comfortable, and hygienic temporary accommodation for on-site personnel.",
    },
    {
      question: "Which materials are used in prefabricated labour hutments?",
      answer:
        "They use durable lightweight steel frames, insulated composite panels (ISPs), and specialized flooring, guaranteeing structural sturdiness and thermal efficiency.",
    },
    {
      question: "What are the key advantages of prefabricated labour hutments?",
      answer:
        "Benefits include accelerated workforce mobilization, compliance with welfare mandates, and enhanced site comfort, driving higher overall project efficiency.",
    },
    {
      question: "Can labour hutments be customized?",
      answer:
        "Yes, internal layouts are fully adaptable for staff amenities, medical centers, or kitchen facilities, ensuring the space perfectly fits the projects operational requirements.",
    },
    {
      question: "How much time does it take to install a labour hutment?",
      answer:
        "Installation is very fast, often achieving full readiness within days or a couple of weeks, sharply reducing the non-productive time during project startup.",
    },
    {
      question: "Are prefabricated labour hutments durable?",
      answer:
        "Yes, these units possess the structural resilience to endure continuous heavy usage and severe weather across multiple long-duration construction cycles.",
    },
    {
      question: "Where can prefabricated labour hutments be used?",
      answer:
        "They are essential for remote construction sites, mining operations, large infrastructure projects, and disaster response needing immediate, scalable housing solutions.",
    },
    {
      question: "Are labour hutments easy to relocate?",
      answer:
        "Absolutely. Their modularity allows for straightforward dismantling and re-erection, preserving the units value and enabling efficient asset redeployment.",
    },
    {
      question: "Are prefabricated hutments eco-friendly?",
      answer:
        "Yes, their production minimizes on-site material waste, and their portability avoids the need to build and later demolish permanent facilities at every location.",
    },
    {
      question: "Why choose Landsking Infra for labour hutments?",
      answer:
        "We supply swift, high-quality, welfare-assured accommodation, ensuring worker comfort, maximizing site productivity, and providing long-term value through asset mobility.",
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/new-images/labour-hutment-1.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
                Labor Hutment
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white py-12 px-4 md:px-12  space-y-12 md:space-y-16">
          {/* Row 1 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/new-images/labour-hutment-2.jpg"
                alt="Labour Hutment"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div>
              <h3 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Durable, Clean, And Affordable Accommodation For Labor
              </h3>
              <p className="text-gray-700 text-lg text-justify">
                Landsking Infra specializes in high-quality prefabricated labour
                hutments, offering ready-to-install structures tailored to your
                space and workforce needs. From electrical setups and sanitary
                systems to furniture and bunk beds, we provide everything needed
                to create comfortable and safe accommodations for your teams.
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
                Key Features
              </h3>
              <p className="text-gray-700 text-lg">
                ● Custom-built, movable structures to suit your project needs
              </p>
              <p className="text-gray-700 text-lg">
                ● Resistant to harsh weather and termites, requiring zero
                maintenance
              </p>
              <p className="text-gray-700 text-lg">
                ● Energy-efficient design with G+1 and G+2 options to maximize
                space
              </p>
              <p className="text-gray-700 text-lg">
                ● Quick setup at an affordable cost
              </p>
              <p className="text-gray-700 text-lg">
                ● Built to last, retaining high value over time
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/new-images/labour-hutment-3.webp"
                alt="Key Features of labour Hutment"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          {/* Row 3 - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/new-images/labour-hutment-4.webp"
                alt="Row 3"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div>
              <h3 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Technical Specifications
              </h3>
              <ul className="text-gray-700 mb-4 space-y-1">
                <li>● Walls/Roof: Insulated PUF/EPS panels</li>
                <li>
                  ● Doors: Fully insulated, equipped with premium accessories
                </li>
                <li>
                  ● Windows: Smooth aluminum sliding windows for a modern look
                </li>
                <li>
                  ● Fittings: Electrical, sanitary, and furniture options
                  included
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
                <div key={idx} className="bg-white p-4 rounded-md shadow-sm">
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
                    <p className="text-gray-600 text-base md:text-md text-justify">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Pebfooter />
      </div>
    </>
  );
};

export default LaborHutment;
