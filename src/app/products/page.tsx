"use client";

import { useRef, useState, ReactNode } from "react";
import {
  FaBuilding,
  FaHome,
  FaIndustry,
  FaCube,
  FaBoxOpen,
  FaWarehouse,
} from "react-icons/fa";
import Pebheader from "yes/Components/Pebheader";
import Footer from "../../Components/Footer";
import Image from "next/image";
import Brand from "yes/Components/Brand";

// ✅ Card Props Type
type CardProps = {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
  linkText?: string; // optional link text
  linkUrl?: string; // optional link URL
};

// ✅ Card Component
function Card({
  image,
  icon,
  title,
  description,
  linkText = "READ MORE",
  linkUrl = "#",
}: CardProps) {
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

        <a
          href={linkUrl}
          className="relative border border-blue-900 text-sm sm:text-lg tracking-wider text-black px-4 sm:px-5 py-2 font-semibold w-fit overflow-hidden"
        >
          <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
            {linkText}
          </span>
          <span className="absolute left-0 top-0 h-full w-0 bg-[#000080] transition-all duration-500 ease-out group-hover:w-full"></span>
        </a>
      </div>
    </div>
  );
}

// ✅ Main Products Page
export default function Products() {
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
      <section className="w-full min-h-[350px] sm:min-h-[450px] md:min-h-[500px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/sectorimg/sports.jpg')`,
          }}
        >
          <div className="text-white text-center relative z-10">
            <h1 className="text-3xl md:text-6xl font-bold leading-snug tracking-wide">
              Products & Services
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="bg-white py-6 sm:py-7 px-4 sm:px-6 md:px-28 text-center mb-10">
        <h2 className="text-2xl mt-2  md:mt-5 md:text-3xl font-extrabold tracking-wide text-[#000080] uppercase">
          Modern Designs with Flexible Customization Options
        </h2>

        <p className="text-gray-600 text-justify md:text-center text-sm sm:text-base md:text-lg mx-auto leading-relaxed mt-6 max-w-5xl">
          At Landsking Infra, we specialize in delivering innovative,
          sustainable, and efficient prefabricated construction solutions
          designed to meet the evolving needs of industrial, commercial, and
          institutional projects. Our expertise spans Pre-Engineered Buildings
          (PEBs) engineered for strength, speed, and reliability; Prefabricated
          Structures that offer modular flexibility for offices, schools, and
          healthcare facilities; Light Gauge Steel Framing (LGSF) systems ideal
          for residential and mixed-use developments; Sandwich Panels that
          provide superior insulation and energy efficiency; and Standard
          Modular Solutions such as porta cabins and liftable site units for
          rapid deployment.
        </p>
      </section>

      {/* Cards Section */}
      <main className="bg-white px-4 sm:px-6 md:px-12">
        <section className="bg-white py-3 sm:py-9 px-2 sm:px-6 md:px-12">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card
              image="/menupageimg/peb2.jpg"
              icon={<FaIndustry size={34} className="text-white" />}
              title="Pre Engineered Buildings"
              description="Customized steel structures designed for quick assembly and durability, ideal for warehouses, factories, and commercial spaces."
              linkText="Read more"
              linkUrl="/menupage"
            />

            <Card
              image="/sectorimg/prefab.jpg"
              icon={<FaBuilding size={34} className="text-white" />}
              title="Prefab Modular Building"
              description="Modular buildings constructed off-site for applications like site offices, classrooms, and healthcare facilities."
              linkText="Read more"
              linkUrl="/modular"
            />

            <Card
              image="/menupageimg/lgs1.jpeg"
              icon={<FaHome size={34} className="text-white" />}
              title="Light Gauge Steel Framing (LGSF) Solutions"
              description="Lightweight steel structures suitable for residential and commercial buildings, offering design flexibility and rapid construction."
              linkText="Read more"
              linkUrl="/lightgauge"
            />

            <Card
              image="/menupageimg/sp2.png"
              icon={<FaCube size={34} className="text-white" />}
              title="Sandwich Panels"
              description="Insulated panels used for walls and roofs, providing thermal efficiency and structural strength."
              linkText="Read more"
              linkUrl="/sandwichpanels"
            />

            <Card
              image="/modular/K-House%20(1).png"
              icon={<FaBoxOpen size={34} className="text-white" />}
              title="Standard Modular Solutions"
              description="Ready-to-use modular units like porta cabins and liftable cabins for immediate deployment."
              linkText="Read more"
              linkUrl="/standardmodular"
            />
            <Card
              image="/epcimg/eps panel.jpg"
              icon={<FaBoxOpen size={34} className="text-white" />}
              title="Epc Solutions"
              description="EPC Solutions specializes in providing end-to-end Engineering, Procurement, and Construction (EPC) services across diverse industries. We deliver comprehensive project solutions — from initial design and engineering to material sourcing, construction, and commissioning."
              linkText="Read more"
              linkUrl="/standardmodular"
            />
          </div>
        </section>
      </main>
      <Brand />
      <Footer />
    </>
  );
}
