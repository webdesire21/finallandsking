"use client";

import { useRef, useState, ReactNode } from "react";
import { FaWarehouse } from "react-icons/fa";
import Pebheader from "yes/Components/Pebheader";
import Footer from "../../Components/Footer";
import Image from "next/image";
import Rndfooter from "yes/Components/Rndfooter";
import Rndheader from "yes/Components/Rndheader";
import {
  FaDraftingCompass,
  FaBuilding,
  FaCogs,
  FaProjectDiagram,
} from "react-icons/fa";
import { MdOutlineEngineering } from "react-icons/md";
import { SiAutodesk, SiBim } from "react-icons/si";
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
export default function Rndsolutions() {
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
      <Rndheader />

      {/* Hero Section */}
      <section className="w-full min-h-[350px] sm:min-h-[450px] md:min-h-[500px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/sectorimg/sp.webp')`,
          }}
        >
          <div className="text-white text-center relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold leading-snug tracking-wide">
              Engineering Services{" "}
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white pt-10 sm:pt-10 px-4 sm:px-8 md:px-12">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-1 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
              Engineering Services
            </h2>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <main className="bg-white px-4 sm:px-6 md:px-12">
        <section className="bg-white pt-3 pb-10 sm:py-12 px-2 sm:px-6 md:px-12">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card
              image="/rndServices/mepServices.jpg"
              icon={<MdOutlineEngineering size={34} className="text-white" />}
              title="Civil Engineering Services"
              description="Providing expert civil engineering solutions for infrastructure design and construction, enhancing connectivity, public safety, and sustainable economic growth."
            />

            <Card
              image="/rndServices/mechanicalEngineeringServices.jpg"
              icon={<FaBuilding size={34} className="text-white" />}
              title="Architectural Engineering Services"
              description="Combining architectural design and engineering expertise to create functional, visually appealing, and regulation-compliant structures with optimized performance."
            />

            <Card
              image="/rndServices/3dStructuralModeling.webp"
              icon={<FaCogs size={34} className="text-white" />}
              title="HVAC Engineering Services"
              description="Designing efficient HVAC systems that ensure comfortable, healthy indoor environments while minimizing energy use and operational costs."
            />

            <Card
              image="/rndServices/Architectural3DModeling,.jpg"
              icon={<MdOutlineEngineering size={34} className="text-white" />}
              title="Architectural 3D Modeling, Drafting, and Rendering Services"
              description="We create LOD 100 to 500 models with photorealistic renderings and meticulous detailing for both commercial and residential projects. Our designs guarantee zoning compliance and accurate layouts. Immersive visualizations enhance communication and streamline design approvals. Speed up your project timelines with our expert architectural modeling services."
            />

            <Card
              image="/rndServices/Civil3DModeling.webp"
              icon={<MdOutlineEngineering size={34} className="text-white" />}
              title="Civil 3D Modeling, Drafting, and Rendering Services"
              description="We deliver grading plans, terrain models, and utility layouts fully compliant with local regulations. Accurate visualizations support roads, drainage, and infrastructure planning. Our detailed, data-rich models minimize costly revisions and streamline approvals. Achieve regulatory compliance with our high-precision civil workflows."
            />

            <Card
              image="/rndServices/3dStructuralModeling.webp"
              icon={<FaProjectDiagram size={34} className="text-white" />}
              title="Structural 3D Modeling, Drafting, and Rendering Services"
              description="We develop LOD-based steel and concrete models with integrated structural logic and global code compliance. Our detailed models include connection points, load-bearing elements, and clash-free layouts. Improve site coordination and fabrication accuracy while ensuring quality outcomes with our expert structural modeling solutions."
            />

            <Card
              image="/rndServices/mechanicalEngineeringServices.jpg"
              icon={<FaCogs size={34} className="text-white" />}
              title="Mechanical Engineering Services"
              description="We provide CAD-based mechanical design solutions for high-performance, precision-driven systems. From detailed drafts to 3D models, our services ensure engineering accuracy, minimize design errors, and enhance manufacturability—accelerating efficiency, reliability, and time to market."
            />

            <Card
              image="/rndServices/bim.webp"
              icon={<SiBim size={34} className="text-white" />}
              title="BIM Services"
              description="Our BIM solutions integrate all project elements into a single, coherent model, enhancing stakeholder collaboration and transparency. Reduce errors, optimize resource management, and improve efficiency from concept to completion. Streamline your project lifecycle with our expert BIM consulting and engineering services."
            />

            <Card
              image="/rndServices/reviteBring.jpg"
              icon={<SiAutodesk size={34} className="text-white" />}
              title="Revit Services"
              description="Leverage Revits parametric features for accurate and flexible design solutions. Our workflows enhance coordination and consistency across all disciplines, reducing rework and improving outcomes. As experienced engineering consultants, we customize Revit processes to meet your project-specific requirements."
            />

            <Card
              image="/rndServices/cad.webp"
              icon={<FaDraftingCompass size={34} className="text-white" />}
              title="CAD Services"
              description="Harness our advanced CAD capabilities to deliver precise and innovative design solutions across industries. We produce detailed, accurate drawings to ensure every aspect aligns with your project goals. Enhance efficiency and innovation with our expert engineering services."
            />
          </div>
        </section>
      </main>

      {/* Info Section */}

      <Rndfooter />
    </>
  );
}
