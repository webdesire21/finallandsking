"use client";

import { useState, ReactNode } from "react";
import { FaWarehouse, FaIndustry } from "react-icons/fa";
import { MdOutlineCleanHands } from "react-icons/md";
import Footer from "../../Components/Footer";
import Image from "next/image";
import Navbar from "yes/Components/Navbar";
import { Link } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Card Props Type
type CardProps = {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
};

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

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
        <p className="text-gray-600  text-justify  text-sm sm:text-base tracking-wide mb-5 flex-1">
          {description}
        </p>

        {/* <a
          href="#"
          className="relative border border-blue-900 text-sm sm:text-lg tracking-wider text-black px-4 sm:px-5 py-2 font-semibold w-fit mx-auto sm:mx-0 overflow-hidden"
        >
          <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
            READ MORE
          </span>
          <span className="absolute left-0 top-0 h-full w-0 bg-[#000080] transition-all duration-500 ease-out group-hover:w-full"></span>
        </a> */}
      </div>
    </div>
  );
}

// ✅ Main Page Component
export default function Fabrication() {
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

  const handleOverlayToggle = (id: number) => {
    if (activeOverlay === id) setActiveOverlay(null);
    else setActiveOverlay(id);
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Warehousing and Logistics",
      description:
        "We provide tailored solutions for warehouses and logistics centers, optimizing storage, handling, and operational efficiency. Our services ensure safe, durable, and compliant infrastructure for smooth supply chain operations.",
      image: "/realstate/three.webp",
    },
    {
      id: 2,
      title: "Manufacturing Plants & Assembly Units",
      description:
        "We design and implement robust systems for manufacturing plants and assembly units. Our solutions improve productivity, safety, and long-term operational reliability.",
      image: "/realstate/two.jpg",
    },
    {
      id: 3,
      title: "Airports, Railways, and Public Infrastructure",
      description:
        "We deliver engineering and fabrication services for airports, railways, and public infrastructure projects. Our solutions enhance safety, durability, and seamless operational performance.",
      image: "/realstate/two.jpg",
    },
    {
      id: 4,
      title: "Oil & Gas and Heavy Engineering",
      description:
        "Our expertise supports oil, gas, and heavy engineering sectors with precision fabrication and structural solutions. We ensure compliance, durability, and high-performance infrastructure for demanding industrial environments.",
      image: "/realstate/two.jpg",
    },
    {
      id: 5,
      title: "Commercial Buildings and Malls",
      description:
        "We provide structural and mechanical solutions for commercial buildings and malls. Our services ensure aesthetic appeal, safety, and functional efficiency across spaces.",
      image: "/realstate/two.jpg",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="w-full min-h-[300px] md:min-h-[500px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-6 md:p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/fabrication/Fabrication Solutions.png')`,
          }}
        >
          <div className="text-white text-center relative z-10 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug tracking-wide">
              Fabrication
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-12">
        <div className=" mx-auto">
          <div className="text-center mb-">
            <h2 className="text-2xl sm:text-2xl  text-[#000080] md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
              Landsking Infra Fabrication Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4 text-sm sm:text-base text-justify">
                Landsking Infra delivers sturdy and cost-efficient Fabrication
                Solutions Landsking Infra delivers precision-engineered
                fabrication services for industrial, commercial, and
                infrastructure projects, ensuring strength, accuracy, and
                long-lasting performance. Our expertise covers heavy steel
                structures, customized sheet metal works, and complex assemblies
                tailored to client requirements. Equipped with an ISO-compliant
                fabrication facility, we maintain stringent quality standards
                while ensuring timely project delivery and smooth onsite
                erection. Our team of skilled welders and certified fabrication
                engineers works closely with civil and structural teams to
                guarantee seamless project execution. From design coordination
                to final installation, Landsking Infra provides reliable,
                efficient, and high-quality fabrication solutions that meet
                industry standards and project timelines.
              </p>

              <div className=" mt-3 flex items-center justify-center md:justify-start gap-4">
                <Link href="/contact">
                  <button className="border text-[#000080] border-blue-900 px-6 py-2 text-sm sm:text-base hover:bg-[#000080] hover:text-white transition">
                    GET A QUOTE
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative w-full h-64 sm:h-80 md:h-[450px]">
              <Image
                src="/fabrication/fabrication.jpg"
                alt="fabrications"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <main className="bg-white">
        <section className="py-12 px-4 sm:px-6 md:px-12">
          <h1 className="text-center  text-2xl text-[#000080] md:text-3xl font-bold mb-5">
            Our Services
          </h1>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card
              image="/fabrication/Structural Steel Fabrication (2).png"
              icon={<FaWarehouse size={32} className="text-white" />}
              title="Structural Steel Fabrication (Trusses, Beams, Columns)"
              description="We fabricate high-strength structural steel components, including trusses, beams, and columns, ensuring precision, durability, and compliance with design specifications for industrial, commercial, and infrastructure projects."
            />
            <Card
              image="/fabrication/Sheet Metal Cutting.png"
              icon={<MdOutlineCleanHands size={32} className="text-white" />}
              title="Sheet Metal Cutting, Bending, and Assembly"
              description="Our sheet metal services include accurate cutting, bending, and assembly, creating custom components that meet precise dimensions and functional requirements for diverse fabrication and construction applications."
            />
            <Card
              image="/fabrication/Surface Treatment.png"
              icon={<FaIndustry size={32} className="text-white" />}
              title="PEB Component Fabrication (Purlins, Rafters, Girts)"
              description="We manufacture pre-engineered building components like purlins, rafters, and girts with high precision, ensuring structural stability, seamless integration, and long-term performance in industrial and commercial buildings."
            />
            <Card
              image="/fabrication/Custom Ductwork.png"
              icon={<FaIndustry size={32} className="text-white" />}
              title="Custom Ductwork, Brackets, Platforms, and Catwalks"
              description="Our team fabricates customized ductwork, support brackets, platforms, and catwalks, tailored for specific site requirements, ensuring safe, efficient, and durable installations in complex industrial and commercial environments."
            />
            <Card
              image="/fabrication/Surface Treatment.png"
              icon={<FaIndustry size={32} className="text-white" />}
              title="Surface Treatment: Sandblasting, Galvanizing, and Painting"
              description="We apply advanced surface treatments, including sandblasting, galvanizing, and painting, to enhance corrosion resistance, durability, and aesthetic appeal of steel and metal fabricated components."
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
