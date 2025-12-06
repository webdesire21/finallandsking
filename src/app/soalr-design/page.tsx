"use client";

import React, { useState } from "react";
import Footer from "yes/Components/Footer";
import Renewableheader from "yes/Components/Renewableheader";
import Epc from "yes/Components/Epc";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRouter } from "next/navigation";
import {
  FaCogs,
  FaCheckCircle,
  FaChartLine,
  FaBolt,
  FaProjectDiagram,
  FaGlobeAmericas,
} from "react-icons/fa";

import Designsolar from "yes/Components/Designsolar";

export default function Solardesign() {
  interface FAQ {
    question: string;
    answer: string;
  }

  const [activeTab, setActiveTab] = useState(1);
  const [animateArrow, setAnimateArrow] = useState(false);
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [open, setOpen] = useState(false); // for mobile dropdown

  // ✅ FIXED: close function properly
  const handleClick = () => {
    setAnimateArrow(!animateArrow);
    router.push("/system");
  };
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // ✅ Moved slides & features outside of handleClick
  const slides = [
    {
      image: "/solardesign/asur.jpg",
      title: "Assured Compliance",
    },
    {
      image: "/solardesign/prd.jpg",
      title: "Precision-Driven Designs",
    },
  ];

  const features = [
    {
      title: "Precision-Driven Design",
      description:
        "Every design is tailored using site-specific data for maximum solar efficiency and performance.",
      icon: <FaCogs className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Assured Compliance",
      description:
        "All systems meet IEC, NEC, and local DISCOM standards for safety and reliability.",
      icon: <FaCheckCircle className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Optimized Investment",
      description:
        "Smart layouts minimize cost, material usage, and maintenance over time.",
      icon: <FaChartLine className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Rapid Project Delivery",
      description:
        "Get accurate designs and reports in days to accelerate your project timeline.",
      icon: <FaBolt className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Seamless Integration Support",
      description:
        "Solar + storage solutions ensure uninterrupted power and lower peak energy costs.",
      icon: <FaProjectDiagram className="text-[#000080] text-3xl mb-4" />,
    },
    {
      title: "Global-Grade Standards",
      description:
        "Each solution meets international benchmarks for quality, durability, and efficiency.",
      icon: <FaGlobeAmericas className="text-[#000080] text-3xl mb-4" />,
    },
  ];
  const faqs: FAQ[] = [
    {
      question: "What is included in Landsking Infra’s solar design services?",
      answer:
        "Landsking Infra’s solar design services include everything from initial site feasibility studies and shadow analysis to detailed 3D modeling, electrical layouts, and performance simulations. We create optimized system designs that ensure maximum energy generation and long-term reliability. Our team also prepares complete documentation for DISCOM and regulatory approvals. Each project is tailored to meet client goals and on-site conditions. ",
    },
    {
      question: "Who are your solar design services best suited for?",
      answer:
        " We work with EPC firms, project developers, consultants, and industries looking for reliable, cost-effective, and high-performance solar design solutions tailored to their specific energy and site requirements.",
    },
    {
      question:
        "Beyond durability, how does the PEBs material choice impact its environmental footprint?",
      answer:
        "The primary material, steel, contains a high percentage of recycled content and is fully recyclable. Choosing a PEB is a commitment to a resource-efficient, lower-impact construction lifecycle.",
    },
    {
      question: " How long does it take to complete a solar design?",
      answer:
        " Most solar design projects are completed within 3 to 7 working days, depending on system scale and complexity.Our team uses automated workflows and advanced modeling tools to speed up delivery without compromising quality.This ensures your project moves from concept to approval faster and more efficiently.",
    },
    {
      question: "How do you ensure accuracy and compliance?",
      answer:
        " Every design is created using advanced simulation tools and verified against IEC, NEC, and DISCOM regulations. Multiple quality checks ensure full technical accuracy and approval-ready documentation.",
    },
    {
      question: " Do you offer design support beyond initial project planning?",
      answer:
        " Yes. We provide ongoing technical support, performance optimization, and design revisions during project execution to ensure your solar system performs exactly as planned.",
    },
    {
      question: "Can Landsking Infra assist with tender or bid submissions?",
      answer:
        " Absolutely. We deliver detailed design packages — including single-line diagrams, BOM, and yield reports — that help EPCs and developers submit competitive and technically sound solar tenders.",
    },
    {
      question: "Do you provide international solar design support?",
      answer:
        "Yes, we serve clients worldwide with solar designs tailored to regional conditions, grid standards, and compliance codes.Our team adapts layouts for diverse terrains, climates, and regulatory frameworks  Whether your project is in India or overseas, we ensure globally benchmarked quality and precision.",
    },
  ];
  return (
    <>
      <Renewableheader />

      {/* ===== Hero Section ===== */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/solarvideo/design.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container  px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-auto md:mx-18">
          {/* Text Section */}
          <div className="text-center lg:text-left mt-16 lg:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
              Solar Design & Engineering
            </h1>
            <p className="text-lg max-w-md mx-auto lg:mx-0">
              Crafting Intelligent Energy Systems that Balance Performance,
              Aesthetics, and Sustainability.
            </p>
          </div>

          {/* Swiper Section */}
          <div className="flex justify-center mt-8 lg:mt-0">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              className="pb-10 max-w-[280px]"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden flex flex-col items-center">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold">{slide.title}</h3>
                      <a
                        // href={slide.link}
                        className="mt-2 inline-block text-[#000080] hover:underline"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl text-[#000080] md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
              Tailored Solar Design Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 mx-auto md:mx-30 items-center">
            <div>
              <p className="text-gray-700 text-justify  mb-4 text-sm sm:text-base">
                At Landsking Infra, we believe every solar project deserves a
                design as unique as its environment. Our team crafts customized
                solar layouts built around your site’s conditions, energy goals,
                and financial objectives. From rooftop structures to large-scale
                ground systems, every design is optimized for maximum
                efficiency, safety, and long-term reliability. We don’t just
                create solar plans — we engineer intelligent energy ecosystems
                that deliver measurable performance and enduring value.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Designsolar />
      {/* ===== Steps Section ===== */}

      {/* ===== CTA Section ===== */}

      {/* ===== Key Features ===== */}
      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-29">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Choose
            <span className="text-[#000080]">
              Landsking Infra for Solar Engineering Design
            </span>
          </h2>
          <p className="text-gray-600 text-justify max-w-2xl mx-auto mb-12">
            The foundation of every successful solar project lies in its
            design.At Landsking Infra, we blend precision engineering with
            real-world insights to build efficient, compliant, and future-ready
            systems. Our expertise reduces rework, speeds up approvals, and
            drives higher project returns.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl shadow-md transition-all duration-300 flex flex-col items-center text-center"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-justify text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className=" mx-auto px-4 py-12 md:mx-22 ">
        <div className="text-center mb-10">
          <h2 className="text-2xl  text-[#000080] md:text-3xl font-bold mb-2">
            Frequently Asked Questions
          </h2>
          {/* Yellow divider line */}
          <div className="w-16 h-1 bg-[#272727] mx-auto rounded"></div>
        </div>

        {/* FAQ Items */}
        <div className="border-t border-gray-200 ">
          {faqs.map((faq: FAQ, index: number) => (
            <div key={index} className="border-b border-gray-200">
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
      <Footer />
    </>
  );
}
