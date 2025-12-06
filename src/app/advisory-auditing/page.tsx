"use client";

import { useRef, useState, ReactNode } from "react";
import {
  FaWarehouse,
  FaIndustry,
  FaSnowflake,
  FaShieldAlt,
} from "react-icons/fa";
import { MdOutlineCleanHands } from "react-icons/md";

import Footer from "../../Components/Footer";
import Image from "next/image";
import PebheaderW from "yes/Components/PebheaderW";

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
      <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover "
          loading="lazy"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-black opacity-0 transition-all duration-500 group-hover:w-[88%] group-hover:opacity-100"></div>
      </div>

      {/* Icon */}
      <div className="relative -mt-8 ml-auto mr-4 bg-[#000080] p-3 rounded shadow-lg flex items-center justify-center">
        {icon}
      </div>

      {/* Text */}
      <div className="px-5 pb-6 flex-1 flex flex-col">
        <h3 className="text-lg md:text-xl font-bold tracking-wide mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-justify  text-sm md:text-base tracking-wide mb-5 flex-1">
          {description}
        </p>
      </div>
    </div>
  );
}

// ✅ Main Page Component
export default function Advisoryauditing() {
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
      <PebheaderW />

      {/* Hero Section */}
      <section className="w-full min-h-[300px] md:min-h-[500px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/aboutright.jpeg')`,
          }}
        >
          <div className="text-white text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
              Advisory and Auditing
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
              Landsking Infra PVT LTD: CUSTOMIZED PREFABRICATED SOLUTIONS FOR
              INDUSTRIAL BUILDINGS
            </h2>
            <div className="w-12 h-1 bg-[#000080] mt-3 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4 text-sm text-justify md:text-base">
                As modern industrialization continues to expand, prefabrication
                has emerged as a revolutionary construction technology. It helps
                in reducing construction timelines and costs, minimizes material
                waste, and allows for highly flexible and tailored design
                options to meet diverse project needs.
              </p>
              <p className="text-gray-700 text-justify mb-4 text-sm md:text-base">
                At{" "}
                <span className="font-semibold">Landsking Infra Pvt Ltd</span>,
                we bring over 25 years of expertise in delivering top-quality
                pre-engineered and prefabricated industrial buildings. Our
                portfolio includes warehouses, manufacturing units, industrial
                sheds, poultry farms, cold storage facilities, clean rooms, and
                many other specialized structures.
              </p>
              <p className="text-gray-700 text-justify mb-6 text-sm md:text-base">
                Our skilled team ensures excellence at every stage — from
                understanding your vision, planning, and design to manufacturing
                and on-site installation — delivering durable, cost-effective,
                and efficient solutions.
              </p>
              <div className="flex items-center gap-4">
                <button
                  className="border text-[#000080] border-[#000080] px-5 py-2 text-sm md:text-base hover:bg-[#000080] hover:text-white transition"
                  onClick={() => (window.location.href = "/peb-contact")}
                >
                  GET A QUOTE
                </button>
              </div>
            </div>

            <div className="relative w-full h-64 sm:h-80 md:h-[450px]">
              <Image
                src="/Industrial-Buildings-Construction.webp"
                alt="advisory"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <main className="bg-white px-4 sm:px-6 md:px-12">
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              image="/NDR.webp"
              icon={<FaWarehouse size={30} className="text-white" />}
              title="Warehouse"
              description="Designed for strength and long-lasting use, our prefabricated warehouses are easy to install, adaptable in layout, and highly efficient for storage. Ideal for use in logistics, farming, and industrial operations."
            />
            <Card
              image="/clean-room-2.webp"
              icon={<MdOutlineCleanHands size={30} className="text-white" />}
              title="Clean Room"
              description="Landsking Infra Pvt Ltd provides advanced cleanroom solutions for controlled environments in pharmaceuticals, electronics, and biotechnology, ensuring top hygiene and quality."
            />
            <Card
              image="/7-2.webp"
              icon={<FaIndustry size={30} className="text-white" />}
              title="Factory Building"
              description="Our industrial buildings feature smart designs, excellent insulation, and quick construction times. Built to handle heavy loads and ensure proper airflow, they are ideal for seamless and efficient production operations."
            />
            <Card
              image="/NDR.webp"
              icon={<FaIndustry size={30} className="text-white" />}
              title="Industrial Shed"
              description="Built for strength and flexibility, Landsking Infra’s industrial sheds are ideal for factories, workshops, and large-scale operations. They offer quick installation, high durability, and customizable designs to suit your business needs."
            />
            <Card
              image="/clean-room-2.webp"
              icon={<FaSnowflake size={30} className="text-white" />}
              title="Cold Storage & Cold Room Manufacturer"
              description="Landsking Infra’s cold storage facilities are constructed using high-quality insulated panels and modern refrigeration systems to maximize energy efficiency. Whether for pharmaceuticals or perishable goods, we ensure reliable temperature control and long-term preservation in line with industry standards."
            />
            <Card
              image="/7-2.webp"
              icon={<FaShieldAlt size={30} className="text-white" />}
              title="Portable Security Guard Cabins"
              description="Landsking Infra provides portable security guard cabins that are easy to install and relocate. Built with durable, insulated materials, these cabins offer a secure and comfortable environment for security staff. They are perfectly suited for construction sites, industrial zones, and other locations needing reliable security posts."
            />
          </div>
        </section>
      </main>

      {/* Info Section */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6 md:px-16 text-center mb-12">
        <h2 className="text-xl md:text-3xl font-extrabold tracking-wide text-black uppercase">
          Custom-Designed Buildings to Match Your Business Goals
        </h2>
        <div className="w-12 h-[2px] bg-[#000080] mx-auto mt-3 mb-6 relative">
          <span className="absolute -bottom-[3px] left-0 w-6 h-[2px] bg-[#000080]"></span>
        </div>
        <p className="text-gray-700 text-justify text-sm md:text-lg max-w-4xl mx-auto leading-relaxed">
          The{" "}
          <span className="text-[#000080] font-semibold">
            pre engineered building
          </span>{" "}
          technology has gained strong recognition worldwide. Across India, more
          industries are adopting this modern approach, transforming the
          construction sector. These prefabricated solutions deliver faster
          completion — up to 50% quicker than traditional methods — while being
          cost-effective, energy-efficient, and adaptable to various business
          needs.
        </p>
      </section>

      <Footer />
    </>
  );
}
