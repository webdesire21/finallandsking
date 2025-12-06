"use client";
import React, { useState } from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import Footer from "../../Components/Footer";

const IndustrialEnclosures: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Which industries benefit from industrial enclosures?",
      answer:
        "Sectors demanding environmental stability and asset isolation, such as high-tolerance manufacturing, data center infrastructure, telecom, and energy facilities, realize the highest return.",
    },
    {
      question:
        "Are your systems built to withstand continuous external exposure?",
      answer:
        "Yes. They feature corrosion-proof construction and specialized sealing mechanisms, ensuring exceptional resilience and guaranteed performance against all exterior environmental conditions.",
    },
    {
      question: "How long does enclosure installation take?",
      answer:
        "Thanks to their prefabricated, modular design, deployment is exceptionally quick, often achieving operational status in just days or a few short weeks, minimizing interruption to your core business.",
    },
    {
      question:
        "How effective are the panels at controlling temperature and noise?",
      answer:
        "We utilize dense panel assemblies engineered for maximum thermal resistance (superior R-values), effectively stabilizing the internal climate and providing crucial acoustic mitigation.",
    },
    {
      question:
        "Can these structures sustain operations in extreme industrial environments?",
      answer:
        "Absolutely. They are structurally robust and built with materials explicitly selected to resist severe factors, including heavy vibration, chemical aggression, or intense temperature fluctuations.",
    },
    {
      question:
        "What is the expected life cycle of a high-performance enclosure asset?",
      answer:
        "Constructed from durable, quality materials and designed for demanding use, these enclosures provide a functional service life that typically exceeds two to three decades of reliable operation.",
    },
    {
      question:
        "Do you manage the entire enclosure project, providing a turnkey solution?",
      answer:
        "Yes, we deliver a comprehensive, single-point solution, overseeing everything from the initial technical design and factory production to on-site assembly and system commissioning.",
    },
    {
      question:
        "How does Landsking Infra ensure the quality and precision of its enclosures?",
      answer:
        "Quality is assured via stringent, controlled fabrication protocols. This ensures every modular unit maintains perfect dimensional accuracy and adheres to precise structural and airtight specifications.",
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('menupagetwo/ind-2.jpeg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
                Industrial Enclosures
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white py-12 px-4 md:px-12  space-y-12 md:space-y-16">
          {/* Row 1 - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px] order-2 lg:order-1">
              <Image
                src="/menupagetwo/ind-1.jpg"
                alt=" Industrial Enclosures"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Industrial Enclosures – Engineered for Equipment Protection and
                Environmental Management
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
                className="border mt-2 md:mt-5 text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition"
                onClick={() => (window.location.href = "/peb-contact")}
              >
                Get a Quote
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Why Choose Landsking Infra Industrial Enclosures?
              </h2>
              <p className="text-gray-600 text-lg text-justify">
                Custom-Engineered Design - Designed to meet your specific
                operational requirements, industry standards, and spatial
                constraints.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                Robust Construction - Built with high-quality PUF/EPS insulated
                sandwich panels, ensuring strength, durability, thermal
                insulation, and weather resistance.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                Quick & Modular Installation - Factory-fabricated panels and
                frames enable faster, hassle-free on-site assembly with minimal
                disruption.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                Thermal & Acoustic Efficiency - Engineered to reduce heat
                transfer and suppress noise, enhancing overall working
                conditions.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                Corrosion & Fire Resistance - Panels are specially coated and
                treated to withstand harsh environments and ensure long-lasting
                safety.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                Versatile Applications - Ideal for both indoor and outdoor use
                across diverse industrial and commercial sectors.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/menupagetwo/ind-3.jpeg"
                alt="Why Choose Landsking Infra Industrial Enclosures?"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          {/* Centered Heading + Paragraph */}

          {/* Row 3 - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px] order-2 lg:order-1">
              <Image
                src="/menupagetwo/ind-6.jpg"
                alt=" Applications of Landsking Infra Industrial Enclosures"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Applications of Landsking Infra Industrial Enclosures
              </h2>
              <ul className="text-gray-600 md:text-lg mb-4 space-y-1">
                <li> Electrical & Transformer Rooms</li>
                <li> Compressor & Generator Enclosures</li>
                <li> CNC Machine Housings & Control Panels</li>
                <li> Acoustic Testing & Soundproof Cabins</li>
                <li> HVAC & AHU Units</li>
                <li>Clean & Dust-Free Equipment Enclosuress</li>
                <li> Material Storage with Temperature Control</li>
              </ul>
            </div>
          </div>

          {/* Row 4 - Content Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Complete Turnkey Solutions – From Design to Deployment
              </h2>
              <p className="text-gray-600 text-lg text-justify">
                At Landsking Infra, we offer complete turnkey solutions — from
                design consultation and precision manufacturing to delivery and
                on-site installation.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                With 15+ years of industry expertise and pan-India delivery
                capabilities, we ensure smooth, timely, and reliable project
                execution, even in the most remote or challenging locations.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/menupagetwo/ind-5.jpeg"
                alt=" Complete Turnkey Solutions – From Design to Deployment"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          {/* Row 5 - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px] order-2 lg:order-1">
              <Image
                src="/menupagetwo/ind-4.jpg"
                alt="Advantages of Choosing Landsking Infra Enclosures"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Key Advantages of Choosing Landsking Infra Enclosures
              </h2>
              <ul className=" text-gray-600 md:text-lg space-y-1">
                <li> Applicable across diverse industrial sectors</li>
                <li> Constructed from strong and durable materials</li>
                <li> Fireproof and watertight design</li>
                <li> Extended service life with low upkeep</li>
                <li> Highly customizable to fit specific needs</li>
                <li>Modular structure for easy installation and scalability</li>
                <li>
                  Resistant to corrosion and physical damage in tough conditions
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
                <div key={idx} className="bg-white p-4  ">
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
      <Footer />
    </>
  );
};

export default IndustrialEnclosures;
