"use client";

import { useRef, useState, ReactNode } from "react";

import Pebheader from "yes/Components/Pebheader";
import Footer from "../../Components/Footer";
import Image from "next/image";
import { Link } from "lucide-react";

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
        <p className="text-gray-600 text-justify text-sm sm:text-base tracking-wide mb-5 flex-1">
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
export default function Projectmanagementconsultancy() {
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
            backgroundImage: `linear-gradient(rgba(14,14,80,0.2), rgba(14,14,80,0.2)), url('/factories Installation.jpg')`,
          }}
        >
          <div className="text-white text-center relative z-10 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug tracking-wide">
              Project Management Consultancy
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
              Project Management Consultancy
            </h2>
            <div className="w-12 h-1 bg-[#000080] mt-3 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                At Landsking Infra, we provide expert Project Management
                Consultancy services, guiding clients to achieve outstanding
                results in the field of pre-engineered buildings. Our
                consultancy focuses on delivering complete construction
                solutions, specializing in optimizing workflows, enhancing
                efficiency, and ensuring timely project completion for steel
                building manufacturing companies. By combining industry
                expertise with innovative strategies, we help clients achieve
                remarkable outcomes.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-5 mb-5">
                <li>
                  <span className="font-semibold">Seamless Communication:</span>{" "}
                  Minimize gaps and ensure smooth coordination across all
                  stakeholders.
                </li>
                <li>
                  <span className="font-semibold">
                    Time & Resource Optimization:
                  </span>{" "}
                  Reduce delays and eliminate unnecessary wastage.
                </li>
                <li>
                  <span className="font-semibold">
                    Efficient Decision-Making:
                  </span>{" "}
                  Enable well-informed choices for superior end products.
                </li>
                <li>
                  <span className="font-semibold">
                    Trouble-Free Execution & Planning:
                  </span>{" "}
                  Streamlined processes for flawless project delivery.
                </li>
              </ul>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <Link href="/peb-contact">
                  <button className="border text-[#000080] border-blue-900 px-6 py-2 text-sm sm:text-base hover:bg-[#000080] hover:text-white transition">
                    GET A QUOTE
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative w-full h-64 sm:h-80 md:h-[450px]">
              <Image
                src="/Crane.jpg"
                alt="Project Management Consultancy"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* second section start */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 px-5 md:grid-cols-2 gap-8 items-center md:px-0 ">
          <div className="relative w-full h-64 sm:h-80 md:h-[450px]">
            <Image
              src="/Ridge.png"
              alt=" Why Landsking Infra Recommends Steel"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
              Why Landsking Infra Recommends Steel{" "}
            </h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Steel is the preferred choice for construction due to its flexible
              properties and ease of fabrication and shaping, making it ideal
              for a wide range of developmental applications. Its versatility
              and strength have made it the go-to material for pre-engineered
              building construction, including multi-storey structures,
              commercial buildings, hotels, hospitals, schools, and
              universities.
            </p>
            <h5>Landsking Infra has been a pioneering provider of:</h5>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-5 mb-5">
              <li>
                <span className="font-semibold"></span> Architectural and
                Project Management Consultancy Services
              </li>
              <li>
                <span className="font-semibold"></span> Pre-Engineered Steel
                Building Solutions
              </li>
              <li>
                <span className="font-semibold"></span> Multi-Storey Steel
                Construction Services
              </li>
              <li>
                <span className="font-semibold"></span> Customized Steel
                Structure Systems for diverse applications
              </li>
            </ul>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <Link href="/peb-contact">
                <button className="border text-[#000080] border-blue-900 px-6 py-2 text-sm sm:text-base hover:bg-[#000080] hover:text-white transition">
                  GET A QUOTE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end second section */}

      {/* Info Section */}
      <section className="bg-gray-50 py-12 mt-12 sm:py-16 px-4 sm:px-8 md:px-16 text-center mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black uppercase">
          Expert Construction Management Solutions{" "}
        </h2>
        <div className="w-30 h-[2px] bg-[#000080] mx-auto mt-3 mb-6 relative md:w-150"></div>
        <p className="text-gray-700 text-justify text-sm sm:text-base md:text-lg  leading-relaxed">
          <span className="text-[#000080] font-semibold">Landsking Infra</span>{" "}
          provides expert construction project consultancy, ensuring that every
          project is executed efficiently and successfully. Our consultancy
          services follow a systematic, step-by-step approach designed to
          streamline construction workflows and optimize outcomes. We begin with
          a comprehensive project analysis, conducting an in-depth assessment of
          project requirements and feasibility. This is followed by design
          solutions and alternatives, where innovative planning helps select the
          most suitable construction methods and materials. We then focus on
          building formation and design, delivering detailed architectural and
          structural plans for pre-engineered and steel buildings. Foundation
          and civil work planning ensures all civil structures are accurately
          outlined for stability and compliance. Additionally, our MEP project
          management coordinates mechanical, electrical, and plumbing works
          through expert contracting. Finally, we handle project implementation
          and execution, guaranteeing efficient, timely, and cost-effective
          delivery of high-quality buildings.
        </p>
      </section>

      <Footer />
    </>
  );
}
