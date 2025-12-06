"use client";

import { useRef, useState, ReactNode } from "react";
import { FaWarehouse, FaIndustry, FaSnowflake } from "react-icons/fa";
import { MdOutlineCleanHands } from "react-icons/md";
import { ChevronLeft, ChevronRight, Link } from "lucide-react";
import Footer from "../../Components/Footer";
import Image from "next/image";
import Header from "yes/Components/Header";
import Navbar from "yes/Components/Navbar";

type CardProps = {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
};

const possibilities = [
  {
    subtitle: "Solar Photovoltaic Plants",
    description:
      "Landscapinfra’s mounting structures are designed to support large-scale solar farms, enabling efficient harnessing of solar power at a commercial level. Built with advanced engineering, our systems deliver long-term stability and can endure heavy wind loads along with extreme weather conditions. By ensuring accurate alignment and optimized placement of solar panels, we maximize sunlight exposure, energy generation, and overall project efficiency, helping clients achieve reliable and sustainable solar operations.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Solar Rooftop Installations",
    description:
      "With growing urban expansion, rooftop solar installations are gaining significant popularity across residential and commercial segments. Landscapinfra provides personalized mounting solutions that advance roof space while maximizing energy efficiency. Our adaptable and dynamic designs suit a variety of rooftop types and layouts, ensuring secure panel installation without compromising the building’s aesthetics. By combining safety, durability, and innovative engineering, we help clients harness solar energy effectively while amplifying the visual appeal of their properties.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Solar Canal Tops",
    description:
      "Landscapinfra’s solar canal top solutions offer an innovative way to maximize land and water utilization. By installing solar panels over canals, we generate clean energy while significantly reducing water evaporation. This dual-purpose design not only supports renewable energy production but also aids in conserving vital water resources, making it a highly effective solution for regions facing water scarcity. Our robust structures ensure durability, safety, and long-term performance in diverse environmental conditions.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Solar Car Parks",
    description:
      "Landscapinfra’s solar car park structures provide a dual benefit by generating clean energy while offering reliable shelter for vehicles. These thoughtfully designed systems enhance the usability and aesthetics of parking areas while contributing significantly to a facility’s renewable energy output. By combining solar power generation with functional parking, we optimize land use and support sustainable infrastructure practices. Our durable and efficient structures are built to withstand diverse weather conditions, ensuring long-term performance and energy reliability.",
    image: "/industry.jpg",
  },
  {
    subtitle: "Buildings and Building Systems for Solar Projects",
    description:
      "Landscapinfra offers pre-engineered building solutions designed to seamlessly integrate with solar installations, providing robust and durable infrastructure for solar projects. These versatile structures can accommodate equipment, operations, and maintenance activities efficiently. By embedding solar technology into the building design, we create sustainable environments that enhance energy efficiency, operational resilience, and long-term performance. Our solutions ensure that solar projects are supported by infrastructure built for reliability and optimized for renewable energy integration.",
    image: "/industry.jpg",
  },
];

// ✅ Card Component
function Card({ image, icon, title, description }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-lg">
      {/* Image */}
      <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
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
        <p className="text-gray-600 text-justify text-sm md:text-base tracking-wide mb-5 flex-1">
          {description}
        </p>
      </div>
    </div>
  );
}

// ✅ Main Page Component
export default function Solarstructure() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4;

  // compute cards after state defined
  const cardsToShow = possibilities
    .slice(startIndex, startIndex + visibleCards)
    .concat(
      startIndex + visibleCards > possibilities.length
        ? possibilities.slice(
            0,
            (startIndex + visibleCards) % possibilities.length
          )
        : []
    );

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? possibilities.length - visibleCards : prev - 1
    );
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + visibleCards >= possibilities.length ? 0 : prev + 1
    );
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <Navbar />

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
              SOLAR STRUCTURES
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
              Solar Module Mounting Structures (MMS)
            </h2>
            <div className="w-12 h-1 bg-[#000080] mt-3 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 text-justify mb-4 text-sm md:text-base">
                Landscapinfra designs durable and efficient Solar Module
                Mounting Structures engineered for rooftops, ground-mounted, and
                large-scale solar projects. Built with high-quality materials,
                our MMS solutions withstand harsh conditions while ensuring
                stability and long-lasting performance. With a focus on
                innovation and sustainability, we help maximize energy output
                and support India’s clean energy growth.
              </p>
              <p className="text-gray-600 text-justify mb-4 text-sm md:text-base">
                At{" "}
                <span className="font-semibold">Landsking Infra Pvt Ltd</span>,
                we bring over 7 years of expertise in delivering top-quality
                pre-engineered and prefabricated industrial buildings. Our
                portfolio includes warehouses, manufacturing units, industrial
                sheds, poultry farms, cold storage facilities, clean rooms, and
                many other specialized structures.
              </p>
              <p className="text-gray-600 text-justify mb-6 text-sm md:text-base">
                Our skilled team ensures excellence at every stage — from
                understanding your vision, planning, and design to manufacturing
                and on-site installation — delivering durable, cost-effective,
                and efficient solutions.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/contact">
                  <button className="border text-[#000080] border-blue-900 px-5 py-2 text-sm md:text-base hover:bg-[#000080] hover:text-white transition">
                    GET A QUOTE
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative w-full h-64 sm:h-80 md:h-[450px]">
              <Image
                src="/sectorimg/indd.jpg"
                alt="  Solar Module Mounting Structures "
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
          <h1 className="text-black text-center text-2xl md:text-3xl font-bold mb-6">
            Solar Module Mounting Structures
          </h1>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              image="/sectorimg/ware.jpg"
              icon={<FaWarehouse size={30} className="text-white" />}
              title="Solar Structural"
              description="Landscapinfra has established itself as a trustworthy name in the Solar MMS manufacturing sector. With a strong foundation in structural engineering, fabrication, and project execution, we deliver superior mounting solutions designed for today’s evolving solar industry."
            />
            <Card
              image="/sectorimg/room.jpg"
              icon={<MdOutlineCleanHands size={30} className="text-white" />}
              title="Comprehensive Expertise"
              description="Our capabilities extend far beyond fabrication, covering the complete solar project lifecycle. From concept design and precise engineering to sourcing premium materials and on-site installation, Landscapinfra ensures end-to-end efficiency."
            />

            <Card
              image="/sectorimg/ind.jpeg"
              icon={<FaIndustry size={30} className="text-white" />}
              title="Manufacturing Capacity and Quality Assurance"
              description="At Landscapinfra, we take pride in our strong production capability, with the ability to deliver over 150 MW of MMS solutions every month."
            />
            <Card
              image="/sectorimg/cold.png"
              icon={<FaSnowflake size={30} className="text-white" />}
              title="Rigorous Quality Control"
              description="Quality is at the top of everything we manufacture. Landscapinfra follows strict quality assurance protocols to ensure each MMS component meets universal guidelines."
            />
          </div>
        </section>
      </main>

      {/* Info Section */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6 md:px-16 text-center mb-12">
        <h2 className="text-xl md:text-3xl font-extrabold tracking-wide text-black uppercase">
          Diverse Applications of Solar Mounting Structures
        </h2>
        <div className="w-12 h-[2px] bg-[#000080] mx-auto mt-3 mb-6 relative">
          <span className="absolute -bottom-[3px] left-0 w-6 h-[2px] bg-[#000080]"></span>
        </div>
        <p className="text-gray-700 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed">
          The{" "}
          <span className="text-[#000080] font-semibold">Landscapinfra</span>{" "}
          Landscapinfra delivers a wide portfolio of Solar Mounting Structures
          engineered for multiple applications across the renewable energy
          landscape. Our solutions are tailored for rooftops, ground-mounted
          plants, carports, and large utility-scale projects, ensuring
          flexibility for every installation type. Designed to optimize space
          and orientation, these systems enhance solar performance while
          maintaining structural strength. By addressing varied site conditions
          and project requirements, we help clients achieve maximum efficiency
          and energy yield, making Landscapinfra a trusted partner for scalable
          and sustainable solar infrastructure.
        </p>
      </section>

      {/* Benefits */}
      <section className="bg-[#000080] text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Applications of Solar Mounting Structures{" "}
          </h2>

          {/* Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {cardsToShow.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src={item.image}
                  alt={item.subtitle}
                  width={400}
                  height={200}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-black  text-justify font-semibold mb-2 md:text-xl">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-black">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons Below */}
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-700"
            >
              <ChevronLeft className="w-6 h-6 text-[#000080]" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-700"
            >
              <ChevronRight className="w-6 h-6 text-[#000080]" />
            </button>
          </div>
        </div>
      </section>
      {/* end benefits */}

      <Footer />
    </>
  );
}
