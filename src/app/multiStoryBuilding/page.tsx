"use client";
import React, { useState } from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import Footer from "../../Components/Footer";

const MultiStoryBuilding: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What Exactly is a Prefab Multi-Storey Building?",
      answer:
        "Its an engineering shift. Instead of constructing entirely on-site, a prefab multi-storey building uses precision-engineered components manufactured in a controlled factory environment. These large, high-quality sections are then rapidly and cleanly assembled vertically at your location.",
    },
    {
      question:
        "How Do Prefab Timelines Beat Traditional Construction? The secret is simultaneous workflow.",
      answer:
        "We eliminate long sequential waiting periods because the foundation work on your site happens concurrently while the structural components are being manufactured in our factory. This parallel process can cut the overall project schedule by up to 50%, enabling exceptionally fast completion.",
    },
    {
      question:
        "Can We Still Achieve a Premium Architectural Look, Like Glass Facades?",
      answer:
        "Yes, customization is effortless. The core steel structure is fundamentally adaptable, acting as a flexible frame for any aesthetic. This allows for extensive design choices, including striking full glass facades, advanced architectural panels, or traditional premium veneers.",
    },
    {
      question: "How Fast is the On-Site Assembly?",
      answer:
        "Once the components arrive, the process is incredibly rapid. The main multi-storey steel framework can often be safely erected and ready for the next phase in just a few weeks.",
    },
    {
      question: "What are the Long-Term Financial Advantages?",
      answer:
        "The benefits extend far beyond the initial build. The most significant advantage is accelerated occupancy, which ensures an earlier and higher Return on Investment (ROI). Furthermore, the use of durable, low-maintenance materials significantly reduces operating costs over the entire lifespan of the building.",
    },
    {
      question: "Where Do These Buildings best??",
      answer:
        "They are the ideal solution for any project where quality and speed are critical. This includes new corporate offices, hospitals, educational institutions, retail centers, and particularly the vertical expansion of existing industrial facilities.",
    },
    {
      question: "How Do We Guarantee Quality from a Distance?",
      answer:
        "At Landsking Infra, quality is guaranteed through stringent, factory-controlled QA protocols. Since approximately 90% of the build is off-site, every component is precision-engineered, measured, and inspected under controlled conditions, drastically minimizing human error before reaching your site.",
    },
    {
      question: "Who are the Recognized Leaders in Indian Prefabrication??",
      answer:
        "The industry is anchored by large-scale, quality-focused players. Key manufacturers like Tata BlueScope Steel, Everest Industries, EPACK Prefab, and Bajaj PEB are consistently cited as top performers known for capacity and compliance with international standards.",
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/menupagetwo/msb2.jpg')",
            }}
          >
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold leading-snug tracking-wide">
                Prefabricated Multi-Storey Building Manufacturer
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white py-12 px-4 md:px-12 space-y-12 md:space-y-16">
          {/* Row 1 - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px] order-2 lg:order-1">
              <Image
                src="/menupagetwo/msb1.jpg"
                alt="  Prefab Multi-Storey Buildings by Landsking Infra"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Prefab Multi-Storey Buildings by Landsking Infra
              </h2>

              <p className="text-gray-600 text-lg text-justify">
                At Landsking Infra, we excel in crafting innovative
                prefabricated multi-storey structures that offer unmatched
                durability, rapid construction, and eco-friendly solutions. With
                over 20 years of industry experience and advanced production
                facilities, we provide end-to-end turnkey solutions customized
                to suit your specific requirements—whether for commercial,
                institutional, or residential applications.
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
              <h2 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Why Choose Prefab Multi-Storey Buildings?
              </h2>
              <p className="text-gray-600 text-lg text-justify">
                Accelerated Build Time – Structural elements are prefabricated
                off-site and swiftly assembled at the destination, cutting
                construction time by up to 50% compared to traditional building
                methods.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                Economical Solution – Efficient designs, reduced material waste,
                and quicker project turnaround help bring down total project
                costs—without sacrificing quality.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                Enhanced Design Versatility – Our buildings offer adaptable
                layouts, meet varied load-bearing needs, and can be easily
                expanded in the future—perfect for evolving commercial and
                institutional spaces.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                Eco-Conscious Construction – Off-site manufacturing leads to
                less on-site disruption, reduced material wastage, and a smaller
                environmental impact.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[450px]">
              <Image
                src="/menupagetwo/msb3.png"
                alt="  Prefab Multi-Storey Buildings "
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Applications */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px]order-2 lg:order-1">
              <Image
                src="/menupagetwo/msb4.jpg"
                alt="Applications of Prefab Multi-Storey Structures"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Applications of Prefab Multi-Storey Structures:
              </h2>
              <ul className="text-gray-600 md:text-lg mb-4 space-y-1">
                <li>Healthcare Facilities</li>
                <li>Corporate Office Buildings</li>
                <li>Schools & Educational Institutes</li>
                <li>Hostels & Hotels</li>
                <li>Retail & Shopping Complexes</li>
                <li>Residential Apartments</li>
              </ul>
            </div>
          </div>

          {/* ✅ FAQ Section — Accordion Style */}
          <div className="mx-auto md:mt-22">
            <h2 className="text-2xl md:text-3xl text-[#000080] font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white g p-4">
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
      <Footer />
    </>
  );
};

export default MultiStoryBuilding;
