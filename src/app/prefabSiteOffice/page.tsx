"use client";
import React, { useState } from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import Pebfooter from "yes/Components/Pebfooter";

const PrefabSiteOffice: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a prefab site office?",
      answer:
        "It is a pre-engineered, modular command unit where components are factory-built, guaranteeing rapid asset deployment as a durable, operational headquarters for any remote project site.",
    },
    {
      question: "What materials are used to build prefab offices?",
      answer:
        "Construction utilizes light-gauge C-section steel framing coupled with high-density, Insulated Sandwich Panels (ISPs), forming a superior, integrated structural and thermal envelope.",
    },
    {
      question: "What are the key benefits of using prefab site offices?",
      answer:
        "They deliver strategic advantages through accelerated operational readiness and predictable scheduling, maximizing resource utility while eliminating traditional site construction delays.",
    },
    {
      question: "Are prefab site offices energy efficient?",
      answer:
        "Yes. The high thermal resistance of the ISP envelope drastically minimizes thermal bridging and external heat load, resulting in substantial operational cost reductions for climate control.",
    },
    {
      question: "Can prefab site offices be relocated?",
      answer:
        "Absolutely. Their modular architecture facilitates exceptional asset portability, allowing them to be efficiently disassembled and reassembled, thereby extending the utility and retaining investment value.",
    },
    {
      question: "How long does it take to install a prefab site office?",
      answer:
        "Final erection is highly accelerated, often achieving full occupancy status within days or two short weeks, a timeline that significantly compresses the typical critical path scheduling.",
    },
    {
      question: "Which industries commonly use prefab site offices?",
      answer:
        "They are indispensable for sectors requiring swift, robust administration, including large-scale infrastructure projects, remote mining operations, energy exploration, and capital construction programs.",
    },
    {
      question: "Can prefab site offices handle extreme weather conditions?",
      answer:
        "Yes, they are robustly engineered to meet site-specific climatic demands (wind, snow, heat), ensuring a structurally sound and comfortable environment under punishing external conditions.",
    },
    {
      question: "Are prefab site offices customizable?",
      answer:
        "Yes, the modular system allows complete control over layout partitioning, technology integration, and utility routing, ensuring the final build perfectly matches the operational mandate.",
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/menupagetwo/pso-1.jpg')",
            }}
          >
            {/* Centered Text */}
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
                Prefab Site Office
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white py-12 px-4 md:px-12   md: space-y-12 md:space-y-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px]  order-2 lg:order-1">
              <Image
                src="/menupagetwo/pso-3.jpg"
                alt=" Prefab Site Office"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className=" order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Efficiently Designed Modular Site Offices for Quick Deployment
              </h3>
              <p className="text-gray-600 text-lg text-justify">
                Landsking Infra Prefab delivers modular site office solutions
                using advanced building materials like PUF insulated panels, EPS
                insulated panels, and Light Gauge Steel Framing (LGSF). Designed
                for rapid deployment, our prefab site offices are the perfect
                solution for projects requiring a quick and efficient setup.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                From design and fabrication to production and installation, our
                end-to-end turnkey services ensure a smooth and streamlined
                experience.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                Engineered to withstand extreme weather conditions, our
                insulated cabins offer exceptional thermal performance. With
                prefabricated components manufactured off-site, project
                timelines are significantly shortened—cutting construction time
                by up to 40%—and minimizing delays caused by weather or other
                site-related challenges.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                Landsking Infra has successfully delivered modular site offices
                to a wide range of clients across India, earning a reputation
                for reliability, cost-efficiency, and long-lasting performance.
              </p>
              <button
                className="border  mt-3 text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition"
                onClick={() => (window.location.href = "/peb-contact")}
              >
                Get a Quote
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Key Features of Landsking Infra Modular Site Offices
              </h3>
              <p className="text-gray-600 text-lg text-justify">
                Tailored to your project needs using PUF/EPS insulated panels
                and LGSF structures for superior strength and efficiency.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                Flexible Wall Heights - Available in various heights with solid
                construction, offering adaptability across different site
                requirements.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                Lightweight & Easy to Install - OModular panels are quick to
                assemble and ideal for roof extensions with minimal structural
                load.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                Supports Modern Glazing - Compatible with large glass panels and
                insulated doors for a clean, professional look.
              </p>
              <p className="text-gray-600 text-lg text-justify">
                Enhanced Safety & Comfort - Built-in provisions for smoke
                detectors, fire safety, and air-conditioning to ensure a secure
                and comfortable workspace.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/menupagetwo/pso-4.jpg"
                alt=" Key Features of Landsking Infra Modular Site Offices"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          {/* Centered Heading + Paragraph */}
          <div className="text-center mx-auto">
            <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
              Flexible Applications for Every Need
            </h3>
            <p className="text-gray-600 text-lg text-justify">
              Landsking Infra offers flexible and innovative design solutions
              for a variety of applications. Our modular site offices and
              construction site office cabins provide efficient and durable
              workspaces that can be quickly installed to support your project
              needs. Designed for adaptability, these prefab units ensure
              reliable performance across different environments and timelines.
              Beyond site offices, Landsking Infra also supplies temporary
              office cabins ideal for events and other short-term uses. Our
              prefabricated sales and marketing offices, along with multi-storey
              modular buildings, offer scalable and cost-effective solutions
              tailored to meet the evolving demands of your business without
              compromising on quality or installation speed.
            </p>
          </div>

          {/* Row 3 - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/menupagetwo/pso-2.jpeg"
                alt="  Why Choose Landsking Infra Prefab Site Offices?"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Why Choose Landsking Infra Prefab Site Offices?
              </h3>
              <ul className="text-gray-600 md:text-lg mb-4 space-y-1 text-justify">
                <li>
                  390 Sturdy, ergonomic structures designed to withstand harsh
                  and extreme conditions.
                </li>
                <li>
                  390 Insulated construction for improved energy efficiency and
                  enhanced comfort.
                </li>
                <li>
                  390 Fast and straightforward dry construction method allowing
                  rapid assembly.
                </li>
                <li>
                  390 Flexible fascia panel choices tailored to the specific
                  needs of the site.
                </li>
                <li>
                  390 Modular design enabling easy expansion and relocation when
                  required.
                </li>
                <li>
                  390 Weather-resistant and thermally insulated to maintain
                  durability and indoor climate control.
                </li>
              </ul>
            </div>
          </div>

          {/* Row 4 - Content Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Benefits of Choosing Landsking Infra Prefab Solutions
              </h3>

              <ul className=" text-gray-600 md:text-lg space-y-1">
                <li>
                  Enhanced insulation for superior energy efficiency and
                  comfort, even in extreme environments.
                </li>
                <li>
                  Rapid, dry construction methods paired with adaptable design
                  options.
                </li>
                <li>
                  Modular units that can be easily expanded or relocated as
                  project needs evolve.
                </li>
                <li>
                  Durable, weather-resistant structures built for reliable,
                  all-season performance.
                </li>
                <li>
                  Minimal site disruption thanks to off-site manufacturing and
                  clean installation.
                </li>
                <li>
                  Reduced construction waste with efficient material usage and
                  eco-friendly processes.
                </li>
                <li>
                  Quick project turnaround to meet tight deadlines and
                  accelerate delivery.
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/menupagetwo/pso-7.png"
                alt=" Benefits of Choosing Landsking Infra Prefab Solutions"
                fill
                className="object-cover rounded-lg "
              />
            </div>
          </div>

          {/* Row 5 - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px]  order-2 lg:order-1">
              <Image
                src="/menupagetwo/pso-9.jpg"
                alt="Why Landsking Infra Pvt Ltd Prefab?"
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div className=" order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl text-[#000080] font-bold mb-4">
                Why Landsking Infra Pvt Ltd Prefab?
              </h3>
              <ul className="space-y-1 text-gray-600">
                <li>390 Trusted Expertise Since 1999</li>
                <li>390 Comprehensive Turnkey Project Solutions</li>
                <li>390 Pan-India Project Delivery & Implementation</li>
                <li>
                  390 Fully Integrated Design & Manufacturing Capabilities
                </li>
                <li>
                  390 Dedicated Commitment to Quality and On-Time Delivery
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
                    <p className="text-gray-600 text-base md:text-md">
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

export default PrefabSiteOffice;
