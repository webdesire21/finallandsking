"use client";
import React, { useState } from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import Pebfooter from "yes/Components/Pebfooter";
interface FAQ {
  question: string;
  answer: string;
}
const Prefab: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs: FAQ[] = [
    {
      question:
        "What advanced technology is used to construct these prefab buildings?",
      answer:
        "We primarily utilize Light Gauge Steel Framing (LGSF) technology, the gold standard for modern infrastructure. This involves using cold-formed, high-strength steel sections to create a lightweight yet robust framework. The structural skeleton consists of high-grade galvanized steel frames engineered for longevity, while the walls and roofing feature high-performance insulated sandwich panels (PUF/EPS) that act as superior thermal barriers.",
    },
    {
      question:
        "What is the difference between a Modular School Building and a Modular Classroom?",
      answer:
        "A Modular School Building is a complete turnkey educational facility constructed from pre-engineered modules that are assembled onsite to form a permanent campus. A Modular Classroom, on the other hand, is a standalone portable unit designed for immediate extra space—ideal for rapid expansion without the noise and dust of traditional construction.",
    },
    {
      question:
        "Are prefab school and hospital buildings durable enough for long-term use?",
      answer:
        "Absolutely. Landsking Infra’s prefab structures are permanent, long-lasting assets. Our LGSF buildings are engineered for a lifespan of 50+ years, comparable to traditional RCC structures. The steel used is heavily galvanized to prevent corrosion, ensuring structural integrity even in humid or coastal climates.",
    },
    {
      question:
        "How do these prefabricated structures perform in extreme weather conditions?",
      answer:
        "Our buildings are engineered for India’s diverse climate zones. The insulated panels provide excellent heat control, keeping interiors cool in summer. The joint-free cladding ensures 100% waterproofing during monsoons, while the steel frames are wind-load tested to withstand high wind velocities and heavy rains.",
    },
    {
      question:
        "Can the design be customized for specific school or hospital requirements?",
      answer:
        "Yes, Landsking Infra offers complete design flexibility. We provide custom architectural solutions rather than standard boxes. Projects can be configured as L-shaped blocks, U-shaped courtyards, or multi-story complexes. Aesthetic options include brick-look, wood-grain, or modern glass facades to match institutional branding.",
    },
    {
      question: "Can these structures be expanded or relocated later?",
      answer:
        "Yes. Modular construction allows easy scalability and relocatability. New floors or wings can be added with minimal disruption to classes or patient care. For temporary sites, the entire structure can be dismantled and reassembled elsewhere with nearly 90% material recovery.",
    },
    {
      question:
        "How is the acoustic performance for classrooms and hospital wards?",
      answer:
        "Our insulated sandwich panels provide excellent sound-dampening with an STC rating of 30–45 dB. This significantly reduces external noise compared to single-brick walls, creating quiet, optimized environments for learning and healing.",
    },
    {
      question:
        "Are these buildings compliant with safety codes and fire regulations?",
      answer:
        "Yes. Safety is our top priority. LGSF structures have a high strength-to-weight ratio, making them earthquake-resistant and safer during seismic activity. We use fire-retardant panels and non-combustible steel framing that comply with National Building Code (NBC) standards for educational and institutional buildings.",
    },
    {
      question:
        "How much does it cost to build a prefabricated school in India?",
      answer:
        "Costs typically range from ₹800 to ₹1,400 per sq. ft. for a fully finished structure, including civil work, electrical, and plumbing. Prefabricated systems reduce labor costs by 30–50% and accelerate project completion—enabling earlier operational ROI compared to conventional construction.",
    },
    {
      question:
        "Do these buildings help with Green Building certifications (LEED/IGBC)?",
      answer:
        "Yes. Prefab structures support LEED and IGBC green building requirements. LGSF technology generates near-zero construction waste, uses 100% recyclable steel, and provides superior thermal insulation—reducing HVAC loads, operational costs, and overall carbon footprint.",
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/new-images/clean-room-1.png')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
                Prefab School
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
                src="/new-images/clean-room-2.jpg"
                alt="High-Precision Controlled Environments"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Prefabricated Schools & Hospitals
              </h3>
              <p className="text-gray-600 text-lg  text-justify">
                Building the Future of Education & Healthcare with Landsking
                Infra At Landsking Infra, we are redefining institutional
                infrastructure. As a trusted provider of high-quality
                prefabricated solutions, we specialize in designing and
                manufacturing modular buildings that combine speed, durability,
                and modern aesthetics. Leveraging advanced Light Gauge Steel
                Framing (LGSF) technology and high-performance insulated panels,
                Landsking Infra delivers turnkey solutions tailored to meet the
                urgent and evolving demands of the education and healthcare
                sectors.
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
                Why Choose Landsking Infra for Institutional Projects?
              </h3>
              <ul className="list-disc pl-5 text-gray-600 md:text-lg mb-4">
                <li>
                  <strong className="text-gray-600 md:text-lg"></strong> Rapid
                  Speed of Construction Our off-site manufacturing process cuts
                  project timelines by up to 50%, ensuring your educational or
                  healthcare facility becomes operational significantly faster
                  than traditional construction.
                </li>
                <li>
                  Uncompromised Safety & Durability Built on a robust LGSF
                  structure with fire-resistant insulated panels, our buildings
                  deliver superior structural integrity to withstand diverse
                  climates and seismic activity.
                </li>
                <li>
                  Customizable & Ergonomic Design We provide fully customizable,
                  ergonomic designs that maximize natural light and ventilation
                  to create inspiring learning spaces and patient-centric
                  healing environments.
                </li>
                <li>
                  State-of-the-art production facilities enable fast
                  manufacturing and installation, covering over 6,800 sqm daily.
                </li>
                <li>
                  <strong>Nationwide Project Execution:</strong>Hygienic & Low
                  Maintenance Our structures feature smooth, durable surfaces
                  that are effortless to clean and sanitize, ensuring a strictly
                  hygienic and safe environment for all occupants.
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[370px]">
              <Image
                src="/new-images/clean-room-3.jpg"
                alt=" Why Choose Us for Clean Room Construction?"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </div>
        </section>
        <section className=" mx-auto px-4 py-12 md:mx-13 ">
          <div className="text-center mb-10">
            <h2 className="text-2xl  text-[#000080] md:text-3xl font-bold mb-2">
              Frequently Asked Questions
            </h2>
            {/* Yellow divider line */}
            <div className="w-16 h-1 bg-[#272727] mx-auto rounded"></div>
          </div>

          {/* FAQ Items */}
          <div className=" border-gray-200 ">
            {faqs.map((faq: FAQ, index: number) => (
              <div key={index} className=" border-gray-200">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                >
                  <span
                    className={`text-left font-semibold md:text-xl text-md transition-colors duration-200 ${
                      openIndex === index ? "text-[#000000]" : "text-black"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span className="text-black text-lg font-bold">
                    {openIndex === index ? "▲" : "▼"}
                  </span>
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="pb-4 text-gray-600  text-base md:text-md">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      <Pebfooter />
    </>
  );
};

export default Prefab;
