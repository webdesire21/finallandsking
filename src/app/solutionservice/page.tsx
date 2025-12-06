"use client";

import { PencilRuler, Building2 } from "lucide-react"; // Lucide icons
import { useRouter } from "next/navigation";
import { useState } from "react";
import Footer from "yes/Components/Footer";
import PebheaderW from "yes/Components/PebheaderW";
import { ShieldCheck, Layers } from "lucide-react";
import Image from "next/image";
export default function Solutionservice() {
  const [activeTab, setActiveTab] = useState(1);
  const [animateArrow, setAnimateArrow] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setAnimateArrow(!animateArrow);
    router.push("/system");
  };
  return (
    <>
      <PebheaderW />
      <section className="bg-white mt-10">
        <div className="mx-auto">
          <div className=" mx-auto mt-5 py-12">
            <h2 className="text-3xl md:text-4xl mt-10 font-bold text-gray-900 mb-6 px-6">
              Effective & Trustworthy Services
            </h2>
          </div>

          {/* Step Navigation Bar */}
          <div className="hidden md:grid bg-[#d9d9d9] px-[60px] grid-cols-2 md:grid-cols-7 text-sm md:text-base font-medium text-gray-800">
            {[
              "Conceptual Design",
              "Proposal Drawings",
              "Contract Awarded",
              "Detail Drawings",
              "Fabrication",
              "Erection",
              "Warranty",
            ].map((step, idx) => (
              <button
                key={idx}
                className="px-3 py-8 text-center font-semibold text-[#000000]"
              >
                {idx + 1}. {step}
              </button>
            ))}
          </div>

          {/* 01 - Conceptual Design */}
          <div className="flex items-center justify-center bg-[#f2f2f2] px-9 py-12 md:px-19">
            <div className="grid md:grid-cols-2 gap-12  w-full">
              {/* Left */}
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-9xl font-bold text-[#000080]">
                  {activeTab.toString().padStart(2, "0")}
                </h1>
                <h2 className="mt-2 text-4xl font-semibold text-[#000080] text-4xl  md:text-6xl">
                  Conceptual Design
                </h2>
              </div>

              {/* Right */}
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Turn your ideas into reality
                </h3>
                <p className="text-[#737373] mb-6">
                  We begin with your ideas, then propose a fast and binding plan
                  in terms of design, fabrication, erection, costs, and
                  timeframe. We provide quality work and excellent service with
                  respect to your needs and future use.
                </p>

                {/* Icons */}
                <div className="flex justify-start gap-10 mb-6">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center px-8 py-6 bg-[#000080] text-white">
                      <PencilRuler className="w-11 h-11 mb-2" />
                    </div>
                    <span className="font-medium mt-2 text-center text-xl">
                      Standard Design
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center px-8 py-6 bg-[#000080] text-white">
                      <Building2 className="w-11 h-11 mb-2" />
                    </div>
                    <span className="font-medium mt-2 text-center text-xl">
                      Premium Products
                    </span>
                  </div>
                </div>

                <img
                  src="/solutionserviceimg/Conceptual Design.jpg"
                  alt="Conceptual Design"
                  className="w-full h-52 object-cover "
                />
              </div>
            </div>
          </div>

          {/* 02 - Proposal Drawings */}
          <div className="flex items-center justify-center bg-[#fff] px-9 py-12 md:px-19">
            <div className="grid md:grid-cols-2 gap-12  w-full">
              {/* Left */}
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-9xl font-bold text-[#000080]">02</h1>

                <span className="mt-2  font-semibold text-[#000080] text-4xl  md:text-6xl">
                  Proposal <br /> Drawings
                </span>
              </div>

              {/* Right */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="font-medium text-[23px] text-[#000000]">
                    ▪ Optimum Solutions
                  </h3>
                  <p className="text-[#a6a6a6] text-[23px]">
                    Energy efficiency and resistance to corrosion and severe
                    weather conditions.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-[23px] text-[#000000]">
                    ▪ Optimum Construction Costs
                  </h3>
                  <p className="text-[#a6a6a6] text-[23px]">
                    For a clear view of the details of your buildings.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-[23px] text-[#000000]">
                    ▪ A Committed Schedule
                  </h3>
                  <p className="text-[#a6a6a6] text-[23px]">
                    For the best utilization of your budget and project
                    management.
                  </p>
                </div>
                <div className="mt-6 mb-3">
                  <img
                    src="/solutionserviceimg/Proposal.jpg"
                    alt="Proposal Drawings"
                    className="w-full h-40 md:h-75 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 03 - Contract Awarded */}
          <div className="flex items-center justify-center bg-[#f2f2f2] px-9 py-12 md:px-19">
            <div className="grid md:grid-cols-2 gap-12  w-full">
              {/* Left */}
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-9xl font-bold text-[#000080]">03</h1>
                <span className="mt-2  font-semibold text-[#000080] text-4xl  md:text-6xl">
                  Contract <br /> Awarded
                </span>
              </div>

              {/* Right */}
              <div className="flex flex-col justify-center space-y-6">
                <h3 className="font-semibold text-[30px] text-black">
                  Signing of contract to execute the construction
                </h3>
                <div className="mt-1 mb-3">
                  <img
                    src="/solutionserviceimg/Contract.jpg"
                    alt="Contract Awarded"
                    className="w-full h-60 md:70 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 04 - Detail Drawings */}
          <div className="flex items-center justify-center bg-[#fff] px-9 py-12 md:px-19">
            <div className="grid md:grid-cols-2 gap-12  w-full">
              {/* Left */}
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-9xl font-bold text-[#000080]">04</h1>
                <span className="mt-2  font-semibold text-[#000080] text-4xl  md:text-6xl">
                  Detail <br /> Drawings
                </span>
              </div>

              {/* Right */}
              <div className="flex flex-col justify-center space-y-6 mt-8">
                <h3 className="font-medium text-[23px] text-[#000000]">
                  ▪ Outstanding Design Ability
                </h3>
                <h3 className="font-medium text-[23px] text-[#000000]">
                  ▪ High Engineering Capabilities
                </h3>
                <h3 className="font-medium text-[23px] text-[#000000]">
                  ▪ 100+ Talented In-house Engineers
                </h3>
              </div>
            </div>
          </div>

          {/* 05 - Fabrication */}
          <div className="flex items-center justify-center bg-[#f2f2f2] px-9 py-12 md:px-19">
            <div className="grid md:grid-cols-2 gap-12  w-full">
              {/* Left */}
              <div className="flex flex-col items-start justify-center text-[#000080] font-bold">
                <h1 className="text-9xl font-bold text-[#000080]">05</h1>
                <h2 className="mt-2  font-semibold text-[#000080] text-4xl  md:text-6xl">
                  Fabrication
                </h2>
              </div>

              {/* Right */}
              <div>
                <h3 className="font-semibold text-[30px] text-black">
                  Ensure product perfection before shipment
                </h3>
                <p className="text-[16px] text-[#737373] mb-6 mt-6">
                  The fabrication process consists of 7 main steps:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[16px] text-[#737373]">
                  <li>Cutting (Plasma, CNC, Shearing)</li>
                  <li>Fully automatic welding lines</li>
                  <li>Fitting and finishing</li>
                  <li>Shot blasting</li>
                  <li>Painting</li>
                  <li>Galvanized purlins/ girt, wall and roof sheeting</li>
                  <li>Loading process</li>
                </ul>

                <div className="mt-6 mb-3">
                  <img
                    src="/solutionserviceimg/det.jpg"
                    alt="Fabrication"
                    className="w-full h-48 md:h-60 object-cover"
                  />
                </div>

                <h4 className="font-medium text-[21px] text-[#000000] mb-6">
                  Pebsteel commits all products are tested in-house before
                  delivery to ensure the highest quality, complying with the
                  international standards (ASTM) and testing methods:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-[16px] text-[#737373]">
                  <li>Dimensional and visual checking</li>
                  <li>Magnetic testing (MPI Testing)</li>
                  <li>Ultrasonic testing (UT Testing)</li>
                  <li>
                    Steel protection: Shot blasting (S.A 2.0) for all jobs
                  </li>
                  <li>Epoxy painting from first-rate international brands</li>
                  <li>Dry film thickness testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* SIZXTH SECT6ION */}
        <div className="flex items-center justify-center bg-[#fff] px-9 py-12 md:px-19">
          <div className="grid md:grid-cols-2 gap-12  w-full">
            {/* Left */}
            <div className="flex flex-col items-start justify-center text-[#000080] font-bold">
              <h1 className="text-9xl font-bold text-[#000080]">06</h1>
              <h2 className="mt-2  font-semibold text-[#000080] text-4xl  md:text-6xl">
                Erection
              </h2>
            </div>

            {/* Right */}
            <div>
              <h3 className="font-semibold text-[30px] text-black">
                Every single component fits together perfectly
              </h3>
              <ul className="list-disc list-inside space-y-4 text-[16px] text-[#737373]">
                <li>
                  All parts of the building are packed, marked, and delivered to
                  the job site for complete erection in a short time.
                </li>
                <li>
                  Thanks to the materials prepared at the factories, full
                  assembly at the job site can be quickly completed with bolts,
                  nuts and fasteners. This ensures a fast and efficient process
                  to deliver the final buildings.
                </li>
                <li>
                  On-site supervision and quality control are always available
                  until the end to ensure that everything is perfect. Your
                  building is ready.
                </li>
              </ul>
              <div className="mt-6 mb-3">
                <img
                  src="/solutionserviceimg/Erection.jpg"
                  alt="Fabrication"
                  className="w-full h-48  md:h-60 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* SEVENTHG */}
        {/* 07 - Warranty */}
        <div className="flex items-center justify-center bg-[#f2f2f2] px-9 py-12 md:px-19">
          <div className="grid md:grid-cols-2 gap-12  w-full">
            {/* Left */}
            <div className="flex flex-col items-start justify-center text-[#000080] font-bold">
              <h1 className="text-9xl font-bold text-[#000080]">07</h1>
              <h2 className="mt-2  font-semibold text-[#000080] text-4xl  md:text-6xl">
                Warranty
              </h2>
            </div>

            {/* Right */}
            <div>
              <h3 className="font-semibold text-[30px] text-black">
                Keep your buildings in first-class condition
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col items-start">
                  <div className="bg-[#000080] text-white p-4 rounded">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="font-medium mt-2 text-left text-[23px]">
                    2-year material warranty
                  </h3>
                  <p className="text-[#a6a6a6] mt-2">
                    We use premium materials to guarantee the highest quality
                    and long-term durability.
                  </p>
                </div>

                <div className="flex flex-col items-start">
                  <div className="bg-[#000080] text-white p-4 rounded">
                    <Layers className="w-8 h-8" />
                  </div>
                  <h3 className="font-medium mt-2 text-left text-[23px]">
                    10-year structural warranty
                  </h3>
                  <p className="text-[#a6a6a6] mt-2">
                    A proper warranty will maximize the performance of your
                    buildings and maintain them in top condition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full h-[400px] md:h-[400px] bg-[url('/industry.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-20">
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={handleClick}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Explore our Systems & Products
            </h1>
            <div
              className={`text-white w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 ${
                animateArrow ? "animate-bounce rotate-90" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
