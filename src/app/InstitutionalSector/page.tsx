"use client";

import { useRef, useState, ReactNode } from "react";
import { FaWarehouse, FaIndustry, FaSnowflake } from "react-icons/fa";
import { MdOutlineCleanHands } from "react-icons/md";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import Link from "next/link";
import Pebfooter from "yes/Components/Pebfooter";

// Card Props Type
type CardProps = {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
};

// ✅ Card Component
function Card({ image, icon, title, description }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-lg">
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-black opacity-0 transition-all duration-500 group-hover:w-[88%] group-hover:opacity-100"></div>
      </div>

      {/* Icon */}
      <div className="relative -mt-8 ml-auto mr-4 bg-[#000080] p-3 rounded shadow-lg flex items-center justify-center">
        {icon}
      </div>

      {/* Text */}
      <div className="px-5 pb-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold tracking-wide mb-3">
          {title}
        </h3>
        <p className="text-gray-600  text-justify text-base md:text-[17px] tracking-wide mb-5 flex-1">
          {description}
        </p>

        <a
          href="#"
          className="relative border border-blue-900 text-sm sm:text-lg tracking-wider text-black px-4 sm:px-5 py-2 font-semibold w-fit overflow-hidden"
        >
          <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
            READ MORE
          </span>
          <span className="absolute left-0 top-0 h-full w-0 bg-[#000080] transition-all duration-500 ease-out group-hover:w-full"></span>
        </a>
      </div>
    </div>
  );
}

// ✅ Main Page Component
export default function IndustrialBuildingsConstruction() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <Pebheader />

      {/* Hero Section */}
      <section className="w-full min-h-[400px] md:min-h-[500px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/aboutright.jpeg')`,
          }}
        >
          <div className="text-white text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
              Institutional Sector
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white py-8 md:py-12 px-4 md:px-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
                  Institutional PEB Sector{" "}
                </h2>
              </div>
              <p className="text-gray-700 text-justify mb-4  md:text-lg">
                Stand out with modern, visually appealing, and innovative
                Pre-Engineered Institutional Building solutions from Landsking
                Infra.
              </p>
              <p className="text-gray-700 text-justify mb-4  md:text-lg">
                Our comprehensive range of structures offers exceptional
                strength, durability, and aesthetic appeal. We cater to a wide
                range of sectors, including large-scale pre-engineered school
                buildings, hostel complexes, hospitals, office facilities,
                exhibition halls, and more. At Landsking Infra, we work closely
                with you to create designs that balance space, functionality,
                and flexibility—fully tailored to your institutional and
                commercial requirements.
              </p>

              <div className="flex items-center gap-4">
                <Link href="/peb-contact">
                  <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                    GET A QUOTE
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative w-full h-64 sm:h-80 md:h-[450px]">
              <Image
                src="/sectorimg/ins.jpg"
                alt="Instituional sector"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Cards Section */}
      <main className="bg-white px-4 sm:px-6 lg:px-12 md:px-3">
        <section className="bg-white py-12 px-4 sm:px-6 md:px-12">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              image="/sectorimg/h.jpg"
              icon={<FaWarehouse size={38} className="text-white" />}
              title="Prefab School"
              description="Landsking Infra provides sustainable and cost-effective prefab solutions for schools and healthcare facilities. These modular buildings are designed for rapid installation, adaptability, and energy efficiency, making them ideal for educational and medical infrastructure. With customizable layouts and durable construction, our solutions ensure functionality, safety, and comfort to meet diverse institutional needs."
            />
            <Card
              image="/sectorimg/inf.jpeg"
              icon={<MdOutlineCleanHands size={38} className="text-white" />}
              title="Prefabricated Multi-Storey Building "
              description="Landsking Infra’s multi-storey buildings are designed to provide exceptional strength, fast construction timelines, and cost-effective solutions. Perfect for commercial and residential projects, these buildings maximize space utilization while ensuring long-term value and reduced construction time."
            />
            <Card
              image="/sectorimg/hos.jpg"
              icon={<FaIndustry size={38} className="text-white" />}
              title="Prefabricated Hospital"
              description="Landsking Infra is a pioneer in manufacturing and installing prefabricated structures such as staff accommodations, worker housing, labour hutments, and more. "
            />
            <Card
              image="/sectorimg/roomm.jpg"
              icon={<FaIndustry size={38} className="text-white" />}
              title="Clean Room"
              description="Landsking Infra provides state-of-the-art cleanroom solutions tailored for controlled environments in sectors such as pharmaceuticals, electronics, and biotechnology. Our cleanrooms are meticulously engineered to comply with strict hygiene, airflow, and temperature control requirements, ensuring ideal conditions for sensitive and critical operations."
            />
            <Card
              image="/sectorimg/lgg.jpg"
              icon={<FaSnowflake size={38} className="text-white" />}
              title="Light Gauge Steel Framing"
              description="Lightweight steel structures ideal for residential and commercial buildings, providing design versatility and accelerated construction timelines."
            />
          </div>
        </section>
      </main>

      {/* Info Section */}
      <section className="bg-gray-50  py-10 md:py-16 px-6 md:px-16 ">
        <h2 className="text-2xl text-left md:text-center md:text-3xl font-extrabold  text-[#000080] uppercase">
          Versatile design options, exceptional quality, and refined aesthetics
        </h2>
        <div className="w-12 h-[2px]  mx-auto mt-0 mb-6 relative"></div>
        <p className="text-gray-700  text-left md:text-center text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          Pre-engineered building technology has gained widespread recognition
          worldwide, and an increasing number of industries in India are
          adopting this modern approach. It is rapidly becoming a mainstream
          solution in the country’s construction sector due to its efficiency
          and technological advantages. Pre-engineered structures offer
          innovative, energy-efficient, and highly effective methods for
          executing construction projects. They are cost-efficient and can
          accelerate project timelines by up to 50% compared to traditional
          construction techniques. As the construction sector operates under
          strict deadlines, pre-engineered buildings are emerging as a preferred
          choice for industries seeking speed, reliability, and long-term value.
        </p>
      </section>

      <Pebfooter />
    </>
  );
}
