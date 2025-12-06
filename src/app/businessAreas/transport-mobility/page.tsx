"use client";

import { useRef, useState, ReactNode } from "react";
import { FaWarehouse, FaIndustry, FaSnowflake } from "react-icons/fa";
import { MdOutlineCleanHands } from "react-icons/md";
import Image from "next/image";
import Pebheader from "yes/Components/Pebheader";
import Link from "next/link";
import Pebfooter from "yes/Components/Pebfooter";
import Footer from "yes/Components/Footer";
import Industryheader from "yes/Components/Industryheader";
import Industryfooter from "yes/Components/Industryfooter";

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
        <p className="text-gray-600 text-sm sm:text-base tracking-wide mb-5 flex-1">
          {description}
        </p>
      </div>
    </div>
  );
}

// ✅ Main Page Component
export default function Transportmobility() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <Industryheader />

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
              Transport Mobility{" "}
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white py-12 px-4 sm:px-8 md:px-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-2xl text-[#000080] md:text-4xl font-bold leading-snug max-w-4xl mx-auto">
              Transport Mobility{" "}
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Stand out from the competition with cutting-edge and visually
                appealing Pre-Engineered Institutional Building Solutions from
                Landsking Infra.
              </p>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Our comprehensive range of structures delivers unmatched
                strength, durability, and elegance. We serve a wide array of
                sectors, including large-scale Pre-Engineered School Buildings,
                Hostel Complexes, Hospitals, Office Facilities, Exhibition
                Halls, and more. At Landsking Infra, we collaborate closely with
                you to develop designs that strike the perfect balance of space,
                functionality, and flexibility—tailored to meet your
                institutional and commercial needs.
              </p>

              <div className="flex items-center gap-4">
                <Link href="/industrycontact">
                  <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                    GET A QUOTE
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative w-full h-64 sm:h-80 md:h-[450px]">
              <Image
                src="/industryhome/Transport (4).jpg"
                alt="TRANSPORT MOBILITY"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Cards Section */}
      <main className="bg-white px-4 sm:px-6 md:px-12">
        <section className="bg-white py-12 px-4 sm:px-6 md:px-12">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              image="/sectorimg/h.jpg"
              icon={<FaWarehouse size={38} className="text-white" />}
              title="Prefab School"
              description="Landsking Infra provides sustainable and cost-effective prefab solutions for schools and healthcare centers. These modular buildings are designed for rapid installation, adaptability, and energy efficiency, making them ideal for educational and medical infrastructure. With customizable layouts and durable construction, our solutions ensure functionality, safety, and comfort to meet diverse institutional needs."
            />
            <Card
              image="/sectorimg/inf.jpeg"
              icon={<MdOutlineCleanHands size={38} className="text-white" />}
              title="Prefabricated Multi-Storey Building Manufacturer"
              description="Landsking Infra’s multi-storey buildings are designed to provide exceptional strength, fast construction timelines, and cost-effective solutions. Perfect for commercial and residential projects, these buildings maximize space utilization while ensuring long-term value and reduced construction time."
            />
            <Card
              image="/sectorimg/hos.jpg"
              icon={<FaIndustry size={38} className="text-white" />}
              title="Prefabricated Hospital"
              description="Landsking Infra is a pioneer in the manufacturing and installation of prefabricated structures, including staff accommodations, worker housing, labor hutments, and more."
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
      <section className="bg-gray-50 py-16 px-4 sm:px-8 md:px-16 text-center mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-[#000080] uppercase">
          Versatile design options, exceptional quality, and refined aesthetics
        </h2>
        <div className="w-12 h-[2px]  mx-auto mt-3 mb-6 relative"></div>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          Pre-engineered building technology has gained widespread recognition
          globally. Over time, more and more industries in India are adopting
          this modern technology, which is rapidly becoming mainstream in the
          countrys construction sector. This trend is important because
          pre-engineered structures offer the most innovative and efficient
          methods to complete construction projects in an energy-saving way.
          They are cost-effective and can speed up construction by approximately
          50% compared to traditional methods. Like any other industry, the
          construction sector has strict deadlines to meet, which is why
          pre-engineered buildings are becoming increasingly popular.
        </p>
      </section>

      <Industryfooter />
    </>
  );
}
