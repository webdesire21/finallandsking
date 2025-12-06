"use client";

import { useRef, useState, ReactNode } from "react";
import { FaWarehouse, FaIndustry } from "react-icons/fa";
import { MdOutlineCleanHands } from "react-icons/md";
import Pebheader from "yes/Components/Pebheader";
import Footer from "../../Components/Footer";
import Image from "next/image";
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
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-black opacity-0 transition-all duration-500 group-hover:w-[88%] group-hover:opacity-100"></div>
      </div>

      {/* Icon */}
      <div className="relative -mt-8 ml-auto mr-4 bg-[#000080] p-3 rounded shadow-lg flex items-center justify-center w-fit">
        {icon}
      </div>

      {/* Text */}
      <div className="px-5 pb-6 flex-1 flex flex-col text-center sm:text-left">
        <h3 className="text-lg sm:text-xl font-bold tracking-wide mb-3">
          {title}
        </h3>
        <p className="text-gray-600  text-justify text-base md:text-[17px] tracking-wide mb-5 flex-1">
          {description}
        </p>
      </div>
    </div>
  );
}

// ✅ Main Page Component
export default function InfrastructureSector() {
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
          className="flex-1 flex items-center justify-center p-6 md:p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/sectorimg/infra.jpg')`,
          }}
        >
          <div className="text-white text-center relative z-10 px-4">
            <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
              Infrastructure Sector
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white py-8 md:py-12 px-4 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
                  Pre-Engineered Buildings for Infrastructure Projects
                </h2>
              </div>
              <p className="text-gray-700 mb-4 text-justify">
                Landsking Infra delivers sturdy and cost-efficient
                <span className="text-[#000080] font-semibold">
                  {" "}
                  Pre-Engineered Buildings (PEBs)
                </span>{" "}
                tailored to the specific needs of the infrastructure sector.
                Built using high tensile 350 MPA steel, our PEBs offer
                exceptional durability and operational efficiency, making them
                ideal for applications across airports, railways, and various
                industrial facilities.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                Landsking Infra offers flexible, custom-designed Pre-Engineered
                Buildings tailored to exact specifications, ensuring optimal
                functionality for diverse applications. Our structures are
                energy-efficient and lightweight, with options for mezzanine
                floors, EOT cranes, canopies, and more. By integrating advanced
                technology with innovative design, we deliver reliable solutions
                that effectively support large-scale infrastructure projects.
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
                src="/sectorimg/infreaa.jpg"
                alt="Infrastructure sector"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <main className="bg-white">
        <section className="bg-white py-12 px-4 sm:px-6 md:px-12 ">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              image="/imagesall/railway.jpeg"
              icon={<FaWarehouse size={32} className="text-white" />}
              title="Railway Shelters"
              description="Durable railway and telecom shelters, built to endure harsh conditions. Quick installation, low maintenance, and long-lasting reliability."
            />
            <Card
              image="/sectorimg/inf.jpeg"
              icon={<MdOutlineCleanHands size={32} className="text-white" />}
              title="Prefabricated Multi-Storey Buildings"
              description="Designed for superior strength and cost-effectiveness, suitable for commercial and residential projects."
            />
            <Card
              image="/sectorimg/airport.jpg"
              icon={<FaIndustry size={32} className="text-white" />}
              title="Airport Terminal Buildings"
              description="Prefabricated structures for staff accommodations, worker housing, and more."
            />
          </div>
        </section>
      </main>

      {/* Info Section */}
      <section className="bg-gray-50  py-10 md:py-16 px-6 md:px-16 ">
        <h2 className="text-2xl text-center md:text-3xl font-extrabold tracking-wide text-[#000080] uppercase">
          Buildings custom-designed to suit your unique needs
        </h2>
        <div className="w-12 h-[2px]  mx-auto mt-1 mb-6 relative"></div>
        <p className="text-gray-700  text-left md:text-center text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          <span className="text-[#000080] font-semibold">
            Pre-Engineered Buildings (PEBs)
          </span>{" "}
          can be customized with mezzanine floors, partitions, cranes, canopies,
          and more. These structures are ideal for airport terminals, hangars,
          industrial facilities, railway station buildings, and more.
        </p>
      </section>

      <Pebfooter />
    </>
  );
}
