"use client";
import React, { useState } from "react";
import Image from "next/image";
import PedFooter from "../../Components/Footer";
import Pebheader from "yes/Components/Pebheader";

const AcousticEnclosures: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What is an acoustic enclosure?",
      answer:
        "Its essentially a specialized, modular noise shield engineered to safely contain excessive machine sound, ensuring your site remains quiet enough for regulatory compliance and worker comfort.",
    },
    {
      question: "What is the fundamental purpose of an acoustic enclosure?",
      answer:
        "Its core goal is to protect your business: making sure the noise from operations is reduced to levels that meet safety laws, creating a healthy, functional workspace.",
    },
    {
      question:
        "How effective are materials like glass wool for soundproofing?",
      answer:
        "Addressing a myth, glass wool works as a sound sponge, absorbing noise inside the panel, but it must be paired with a dense outer structure to effectively block the sound from escaping.",
    },
    {
      question: "How effective is high-density Rockwool for sound panels?",
      answer:
        "In reality, high-density Rockwool is highly effective; it offers superior fire safety and is excellent at absorbing sound energy across the vast spectrum of industrial frequencies.",
    },
    {
      question: "What determines if an acoustic enclosure is high-performance?",
      answer:
        "Performance depends on more than just a dB number: Key factors are the verified Sound Transmission Class (STC) of the panel, the material density, and the quality of the airflow management systems.",
    },
    {
      question: "What is Rockwool acoustic insulation?",
      answer:
        "To clarify, this material is specially manufactured stone wool, packed at high density inside our panels to dampen machine vibration and stop sound waves from reflecting back, unlike cheaper, less effective foams.",
    },
    {
      question: "What makes a soundproof enclosure truly effective?",
      answer:
        "The core effectiveness relies on three factors: material density, panel thickness, and ensuring zero air leaks in all seals and engineered pathways for heat exhaust.",
    },
    {
      question:
        "Why choose prefabricated acoustic units over traditional construction?",
      answer:
        "Addressing the myth that site-built is better, prefabrication guarantees precision-engineered performance, ensuring the exact airtightness and dimensional accuracy that fragile, site-built solutions often miss.",
    },
    {
      question: "Who is the best acoustic enclosure manufacturer?",
      answer:
        "We provide comprehensive confidence: We specialize in turnkey solutions built with verified materials and precision engineering, giving you certainty in reliable compliance and guaranteed noise performance targets.",
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/final/Acoustic Enclosure.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold leading-snug tracking-wide">
                Acoustic Enclosure
              </h1>
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-12 px-4 md:px-12  space-y-12 md:space-y-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[350px]">
              <Image
                src="/new-images/acoustic-enclosures-2.webp"
                alt="Acoustic Enclosure"
                fill
                loading="lazy"
                className="object-cover rounded-lg "
              />
            </div>
            <div>
              <h3 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Effective Noise Control Solutions For Industrial Spaces
              </h3>
              <p className="text-gray-600 text-lg text-justify">
                Acoustic enclosures play a vital role in controlling noise
                pollution in industrial and commercial spaces. They block noise
                from loud equipment and protect interiors from external sounds,
                creating quieter and more productive workplaces. Landsking Infra
                Prefab specializes in high-performance acoustic enclosures made
                from advanced materials like PUF panels, EPS panels, and Rock
                Wool. Built for durability and efficiency, our enclosures meet
                strict noise and safety standards and can be customized for a
                wide range of applications.
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
            <div className="">
              <h3 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Advantages of Landsking Infra Prefab Acoustic Enclosures
              </h3>
              <ul className="list-disc pl-5 text-gray-600 md:text-lg mb-4">
                <li>
                  <strong>Superior Noise Control:</strong> Effectively blocks
                  loud industrial noise for a quieter environment.
                </li>
                <li>
                  <strong>Strong and Long-Lasting:</strong> Made with
                  high-quality materials for durability.
                </li>
                <li>
                  <strong>Thermal and Sound Insulation:</strong> Keeps spaces
                  comfortable and energy-efficient.
                </li>
                <li>
                  <strong>Customizable Solutions:</strong> Designed to fit
                  specific industrial or commercial needs.
                </li>
                <li>
                  <strong>Easy to Install and Maintain:</strong> Quick setup
                  with low maintenance requirements.
                </li>
                <li>
                  <strong>Meets Safety Standards:</strong> Fully compliant with
                  workplace noise and safety regulations.
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[350px]">
              <Image
                src="/new-images/acoustic-enclosures-3.jpg"
                alt=" Advantages of Landsking Infra Prefab Acoustic Enclosures"
                fill
                loading="lazy"
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[350px]  order-2 lg:order-1">
              <Image
                src="/new-images/acoustic-enclosures-4.webp"
                alt="  Landsking Infra Prefab Acoustic Enclosures"
                fill
                loading="lazy"
                className="object-cover rounded-lg "
              />
            </div>
            <div className=" order-1 lg:order-2">
              <h3 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Applications
              </h3>
              <ul className=" text-gray-600 md:text-lg space-y-1">
                <li>
                  Soundproofing solutions for <strong>recording studios</strong>
                  .
                </li>
                <li>
                  Noise control for{" "}
                  <strong>machinery and workshop operations</strong>.
                </li>
                <li>
                  Enclosures for{" "}
                  <strong>radiators, heat exchangers, and engines</strong>.
                </li>
                <li>
                  Portable cabins for{" "}
                  <strong>metal and automotive workshops</strong>.
                </li>
                <li>
                  Noise management in{" "}
                  <strong>manufacturing and production units</strong>.
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
      <PedFooter />
    </>
  );
};

export default AcousticEnclosures;
