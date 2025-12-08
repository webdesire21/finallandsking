"use client";
import React, { useState } from "react";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import Footer from "../../Components/Footer";

const Warehouse: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "What is the typical timeframe for deploying a PEB warehouse facility?",
      answer:
        "Our optimized processes, which integrate design and production, allow a PEB warehouse to be fully operational in 30–50% less time than a conventional approach, transforming months of potential delay into swift execution.",
    },
    {
      question:
        "How is high energy efficiency achieved in PEB warehouse design?",
      answer:
        "Efficiency is engineered from the start. We incorporate advanced insulated wall and roof systems to significantly reduce thermal transfer. This superior envelope minimizes the burden on climate control systems, leading to substantial, long-term savings on energy consumption.",
    },
    {
      question:
        "What is the maximum clear height achievable in a PEB warehouse?",
      answer:
        "The height is highly customizable based on your racking and operational needs. Modern PEB engineering routinely supports significant clear heights necessary for automated systems and high-bay storage without requiring internal columns.",
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
                "linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/menupagetwo/w-1.jpg')",
            }}
          >
            <div className="text-white text-center relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
                Warehouse
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full bg-white py-7 md:py-12 px-4 md:px-12 space-y-12 md:space-y-16">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/menupagetwo/w-2.jpg"
                alt="warehouse"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Pre-fabricated Warehouse and Storage Solutions by Landsking
                Infra.
              </h2>
              <p className="text-gray-600 text-justify mb-1  md:text-lg">
                Boost your industrial storage and logistics efficiency with
                Landsking Infras pre-fabricated warehouse and godown structures
                — engineered for strength, quick deployment, and
                cost-effectiveness.
              </p>
              <p className="text-gray-600 text-justify mb-1  md:text-lg">
                Landsking Infra, a prominent name among warehouse structure
                manufacturers in India, specializes in delivering pre-engineered
                warehouses tailored to client-specific demands.
              </p>
              <button
                className="border mt-3 text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition"
                onClick={() => (window.location.href = "/peb-contact")}
              >
                Get a Quote
              </button>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
                Why Choose Pre-Engineered Warehouses?
              </h2>
              <p className="text-gray-600  text-justify mb-2  md:text-lg">
                Rapid Installation - Up to 50% faster construction than
                traditional methods — enabling quicker operational readiness.
              </p>
              <p className="text-gray-600  text-justify mb-2  md:text-lg">
                Cost Efficiency - Reduce overall costs with minimal material
                waste and lower labor requirements.
              </p>
              <p className="text-gray-600  text-justify mb-2  md:text-lg">
                Customizable Designs - Fully tailored to your specific
                dimensions, layout, and workflow needs.
              </p>
              <p className="text-gray-600  text-justify mb-2  md:text-lg">
                Strength & Durability - Built to be earthquake-resistant and
                weatherproof, ensuring long-term reliability.
              </p>
              <p className="text-gray-600  text-justify mb-2  md:text-lg">
                Easily Expandable - Designed for future scalability, allowing
                smooth expansion as your business grows.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/menupagetwo/w-4.jpg"
                alt="warehouses"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Turnkey Solutions */}
          <div className=" text-left md:text-center mx-auto">
            <h2 className="md:text-3xl font-bold mb-4 text-[#000080] text-2xl">
              Landsking Infras Complete Turnkey Warehouse Solutions Include:
            </h2>
            <p className="text-gray-600   text-lg">
              Our turnkey warehouse solutions start with expert design and
              engineering, tailored to meet your unique operational
              requirements. We ensure every detail is optimized for performance
              and efficiency. Next, we focus on fabrication and quality control,
              producing durable components that meet the highest standards. Our
              skilled team handles on-site erection and installation,
              guaranteeing timely and safe project completion.
            </p>
          </div>

          {/* Row 3 */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[430px]">
              <Image
                src="/menupagetwo/w-5.png"
                alt="Main Advantages of Landsking Infras Pre-Engineered Warehouses"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                Main Advantages of Landsking Infras Pre-Engineered Warehouses
              </h3>
              <ul className="text-gray-600 mb-2 space-y-1">
                <li>
                  <strong>Main Frame Structure:</strong> Heavy-duty welded steel
                  rigid frames ensure strength and stability.
                </li>
                <li>
                  <strong>Support Members:</strong> High-quality Z/C-shaped
                  purlins and girts used for walls and roofing support.
                </li>
                <li>
                  <strong>Roof & Wall Panels:</strong> Insulated panels made
                  from PUF, EPS, or Rockwool for superior thermal efficiency.
                </li>
                <li>
                  <strong>Ventilation Solutions:</strong> Multiple airflow
                  options including ridge vents, turbo ventilators, and louvered
                  windows.
                </li>
                <li>
                  <strong>Optional Add-Ons:</strong> Customizable mezzanine
                  floors and internal office partitions as per requirements.
                </li>
                <li>
                  <strong>Fire & Corrosion Protection:</strong> Structures come
                  with fire-rated wall panels and anti-corrosive coatings.
                </li>
              </ul>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                Applications Across Industries
              </h3>
              <ul className="text-gray-600 mb-4 space-y-1">
                <li>
                  <strong>Logistics and Supply Chain Operations:</strong>{" "}
                  Efficient storage and handling of goods.
                </li>
                <li>
                  <strong>FMCG and Retail Inventory Storage:</strong> Safe and
                  organized spaces for products.
                </li>
                <li>
                  <strong>Cold Chain and Food Processing Facilities:</strong>{" "}
                  Temperature-controlled environments for perishables.
                </li>
                <li>
                  <strong>Pharmaceutical and Chemical Storage:</strong> Secure
                  and compliant storage for sensitive materials.
                </li>
                <li>
                  <strong>Manufacturing Plants and Factories:</strong> Durable
                  structures to house materials and machinery.
                </li>
                <li>
                  <strong>Automotive Parts and Accessories Storage:</strong>{" "}
                  Storage solutions for bulky automotive components.
                </li>
                <li>
                  <strong>E-commerce Fulfillment Hubs:</strong> Flexible
                  warehouse spaces for fast and accurate order processing.
                </li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-[390px]">
              <Image
                src="/menupagetwo/w-6.png"
                alt="  Applications Across Industries"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Row 5 */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-80 md:h-[390px] order-2 lg:order-1">
              <Image
                src="/menupagetwo/w-7.png"
                alt=" Why Landsking Infra Pvt Ltd Prefab as warehouse"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4 text-[#000080] md:text-3xl">
                Why Landsking Infra Pvt Ltd Prefab?
              </h3>
              <ul className="space-y-1 text-gray-600">
                <li>Trusted Expertise Since 1999</li>
                <li>Comprehensive Turnkey Project Solutions</li>
                <li>Pan-India Project Delivery & Implementation</li>
                <li>Fully Integrated Design & Manufacturing Capabilities</li>
                <li>Dedicated Commitment to Quality and On-Time Delivery</li>
              </ul>
            </div>
          </div>

          <div className="mx-auto md:mt-22">
            <h2 className="text-2xl md:text-3xl text-[#000080] font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-4">
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

export default Warehouse;
