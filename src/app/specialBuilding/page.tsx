"use client";

import { useRef, useState, ReactNode } from "react";
import { FaWarehouse } from "react-icons/fa";
import Pebheader from "yes/Components/Pebheader";
import Footer from "../../Components/Footer";
import Image from "next/image";
import { Link } from "lucide-react";

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
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-black opacity-0 transition-all duration-500 group-hover:w-[88%] group-hover:opacity-100"></div>
      </div>

      {/* Icon */}
      <div className="relative -mt-8 ml-auto mr-3 sm:mr-4 bg-[#000080] p-2 sm:p-3 rounded shadow-lg flex items-center justify-center">
        {icon}
      </div>

      {/* Text */}
      <div className="px-4 sm:px-5 pb-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold tracking-wide mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-justify text-sm sm:text-base tracking-wide mb-5 flex-1">
          {description}
        </p>
      </div>
    </div>
  );
}

// ✅ Main Page Component
export default function IndustrialBuildingsConstruction() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <Pebheader />

      {/* Hero Section */}
      <section className="w-full min-h-[300px] md:min-h-[500px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/sectorimg/sp.webp')`,
          }}
        >
          <div className="text-white text-center relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold leading-snug tracking-wide">
              Special Buildings
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white py-8 md:py-12 px-4 md:px-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
                  Prefab Construction of Specialized Buildings
                </h2>
              </div>
              <p className="text-gray-600  text-justify mb-4  md:text-lg">
                We specialize in the design and manufacturing of versatile
                prefabricated structures, including K-houses, liftable porta
                cabins, Mi Homes, control pulpits, and soundproof enclosures.
                With over 25 years of experience in prefabrication, we deliver
                durable, industry-compliant solutions tailored to a wide range
                of applications.
              </p>
              <p className="text-gray-700 text-justify mb-4  md:text-lg">
                Our capabilities go beyond special structures — offering
                high-quality prefabricated warehouses, factory buildings,
                industrial sheds, poultry shelters, cold storage units, and
                clean rooms. Every structure is engineered for efficiency,
                sustainability, and long-term performance.
              </p>

              <div className="flex items-center gap-3 sm:gap-4">
                <Link href="/peb-contact">
                  <button className="border text-[#000080] border-blue-900 px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-[#000080] hover:text-white transition">
                    GET A QUOTE
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative w-full h-60 sm:h-72 md:h-[450px]">
              <Image
                src="/sectorimg/ste.webp"
                alt="special Building"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <main className="bg-white px-4 sm:px-6 lg:px-12 md:px-5">
        <section className="bg-white py-10 sm:py-12 px-2 sm:px-6 md:px-12">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              image="/sectorimg/control.jpg"
              icon={<FaWarehouse size={34} className="text-white" />}
              title="Control Room"
              description="We offer durable, customizable control pulpits engineered for efficient performance in industrial settings. Built using high-quality materials, these units prioritize operator safety, ease of use, and reliable functionality — making them ideal for a wide range of control and monitoring applications."
            />
            <Card
              image="/sectorimg/cabinn.webp"
              icon={<FaWarehouse size={34} className="text-white" />}
              title="Prefab Porta Cabins Manufacturer"
              description="We manufacture high-quality, customizable porta cabins designed to meet diverse space and functional requirements. These portable units are perfect for construction sites, temporary offices, and on-site facilities, offering excellent durability, quick installation, and reliable convenience."
            />
            <Card
              image="/sectorimg/acoustic.jpg"
              icon={<FaWarehouse size={34} className="text-white" />}
              title="Acoustic Enclosure"
              description="We offer advanced acoustic enclosures specifically designed to reduce industrial noise and enhance workplace comfort. Engineered with high-performance sound-absorbing panels, these enclosures help create quieter environments around machinery and equipment. Ideal for a variety of industries, they support noise compliance standards while boosting employee focus and productivity."
            />
            <Card
              image="/sectorimg/khouse.jpg"
              icon={<FaWarehouse size={34} className="text-white" />}
              title="K-House"
              description="K-House represents a modern approach to sustainable living, blending innovative design with modular construction. Built for energy efficiency and comfort, it provides an eco-friendly housing solution ideal for individuals and families looking to embrace a greener, smarter lifestyle."
            />
            <Card
              image="/sectorimg/mi.jpg"
              icon={<FaWarehouse size={34} className="text-white" />}
              title="Mi Homes"
              description="MI Homes are modern, sustainable, and cost-effective modular housing solutions designed for rapid installation and long-lasting performance. Perfect for residential, commercial, and emergency use, these homes provide comfortable living spaces equipped with contemporary amenities."
            />
            <Card
              image="/sectorimg/liftable.jpeg"
              icon={<FaWarehouse size={34} className="text-white" />}
              title="Liftable Cabin"
              description="Liftable cabins offer a practical and flexible solution for a wide range of temporary or portable space requirements. Designed with mobility in mind, these units feature an easy lifting mechanism that ensures quick relocation without sacrificing comfort or functionality."
            />
          </div>
        </section>
      </main>

      {/* Info Section */}
      <section className="bg-gray-50  py-10 md:py-16 px-6 md:px-16 ">
        <h2 className="text-2xl text-center md:text-3xl font-extrabold tracking-wide text-[#000080] uppercase">
          Functional Structures Designed for Everyday Life
        </h2>
        <div className="w-12 h-[2px]  mx-auto mt-0 mb-6 relative"></div>
        <p className="text-gray-700  text-left md:text-center text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          Our team is professionally trained to deliver quality and excellence,
          proficient at every stage of the manufacturing process—from gathering
          requirements to production and installation.
        </p>
      </section>

      <Footer />
    </>
  );
}
