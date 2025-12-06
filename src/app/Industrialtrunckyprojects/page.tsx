"use client";

import { useState } from "react";
import React from "react";
import Footer from "yes/Components/Footer";
import Industryheader from "yes/Components/Industryheader";
import Trunkey from "yes/Components/Trunkey";
import Link from "next/link";
import Trunkeytpes from "yes/Components/Trunkeytpes";
import Industryplatformtab from "yes/Components/Industryplatformtab";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Brand from "yes/Components/Brand";
import Industrycall from "yes/Components/Industrycall";
import Industryfooter from "yes/Components/Industryfooter";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "HT / LT Electrical Works",
    description:
      "We engineer and install high- and low-tension power systems, serving as the essential backbone for your entire facility.",
    image: "/platform/htlt.jpg",
  },
  {
    id: 2,
    title: "MEP Services",
    description:
      "Our licensed in-house team handles the seamless integration of all Mechanical, Electrical, and Plumbing systems required for your project.",
    image: "/platform/mep.jpg",
  },
  {
    id: 3,
    title: "Control Systems & Lifts",
    description:
      "We integrate smart technology for precise operational control and ensure vertical mobility systems (lifts) function with flawless safety and reliability.",
    image: "/platform/control.jpg",
  },
  {
    id: 4,
    title: "Air Conditioning",
    description:
      "We design and implement robust HVAC solutions that guarantee optimal climate control and air quality throughout your commercial space.",
    image: "/platform/air",
  },
  {
    id: 5,
    title: "Fire Fighting Systems",
    description:
      "We deliver critical, code-compliant fire suppression and protection systems built to safeguard your assets and personnel instantly.",
    image: "/platform/firefight.jpg",
  },
  {
    id: 6,
    title: "All Statutory Approval Co-Ordinations",
    description:
      "We simplify complex project timelines by expertly managing and coordinating every necessary governmental and statutory clearance.",
    image: "/platform/maining.jpg",
  },
  {
    id: 7,
    title: "DG Systems",
    description:
      "We install powerful Diesel Generator (DG) systems, providing reliable, continuous backup power to maintain zero operational downtime.",
    image: "/platform/dg.jpg",
  },
  {
    id: 5,
    title: "Water & Waste Water Treatment Systems",
    description:
      "We engineer complete, sustainable solutions for managing and treating all water and effluent needs within your industrial footprint.",
    image: "/platform/watewater.jpg",
  },
  {
    id: 5,
    title: "Office Interior Works & Finishes",
    description:
      "We execute fit-out projects, transforming commercial spaces with premium finishes and functional designs that reflect your corporate identity.",
    image: "/platform/office.jpg",
  },
];

// ✅ FIXED: Function name starts with uppercase (React component)
const Page = () => {
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

  const handleOverlayToggle = (id: number) => {
    setActiveOverlay((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <Industryheader />
      <Trunkey />

      {/* Intro Section */}
      <section className="bg-white py-12 px-4 md:px-20 lg:px-32">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug">
              Industrial Turnkey Projects
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed text-justify">
              We transcend complexity, providing complete industrial solutions
              that guarantee certainty across every stage, from initial
              engineering design to final project commissioning.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-justify">
              We offer full-spectrum mechanical engineering services,
              guaranteeing a turnkey approach across manufacturing, energy, and
              infrastructure. Our process uses precise CAD modeling for robust
              product development, ensuring optimized performance and ISO
              compliance. This results in seamless execution and predictable
              delivery.
            </p>

            <Link href="/industrycontact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/industry/Industrial Turnkey Projects.png"
              alt="  Industrial Turnkey Projects"
              width={700}
              height={450}
              className="rounded-md shadow-md object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>

      <Industryplatformtab />
      <Trunkeytpes />

      {/* Services Section */}
      <section className="text-center px-4 sm:px-6 md:px-29 pt-1 md:pt-16 bg-white">
        <section className="w-full py-8 md:pt-16 bg-white relative">
          <div className="mx-auto px-2 sm:px-4 relative">
            <h2 className="text-2xl md:text-3xl font-bold text-start text-[#000080] mb-6">
              Services
            </h2>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              centeredSlides={false}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 0 },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 24,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  centeredSlides: true,
                },
              }}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  {({ isActive }) => (
                    <div
                      className={`relative text-center transition-all duration-500 group ${
                        isActive ? "scale-105" : "scale-90 opacity-70"
                      }`}
                    >
                      <div className="relative w-full h-48 sm:h-56 md:h-64 flex justify-center">
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover w-full h-full rounded-lg"
                          />

                          <div className="absolute bottom-0 w-full bg-[#000080] text-white py-2 text-center text-sm font-semibold">
                            {project.title}
                          </div>

                          <div
                            onClick={() => handleOverlayToggle(project.id)}
                            className={`absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 
                              rounded-lg transition-opacity duration-500 cursor-pointer
                              ${
                                activeOverlay === project.id
                                  ? "opacity-100"
                                  : "opacity-0"
                              }
                              md:opacity-0 md:group-hover:opacity-100 md:cursor-default`}
                          >
                            <h3 className="text-sm md:text-sm font-semibold mb-2">
                              {project.title}
                            </h3>
                            <p className="text-[10px] md:text-xs mb-4 line-clamp-3">
                              {project.description}
                            </p>
                            <button className="px-4 py-2 text-xs bg-white text-blue-700 font-semibold shadow-md hover:bg-gray-200 transition">
                              Know More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-2 z-20 hidden md:flex cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#000080"
                strokeWidth="1.5"
              >
                <line x1="20" y1="12" x2="4" y2="12" />
                <polyline points="12 4 4 12 12 20" />
              </svg>
            </div>

            <div className="custom-next absolute top-1/2 -translate-y-1/2 right-2 z-20 hidden md:flex cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#1c398e"
                strokeWidth="1.5"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <polyline points="12 4 20 12 12 20" />
              </svg>
            </div>
          </div>
        </section>
      </section>
      {/* why choose us */}
      <section className="w-full bg-white py-16 px-6 md:px-26 lg:px-28">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-6 flex items-center">
              Why Choose Our EPC / Turnkey Services
            </h2>

            <ul className="space-y-4 list-disc list-inside text-black md:text-lg text-base leading-relaxed font-semibold">
              <li>
                <span className=" text-[#000080]">
                  Single point responsibility –
                </span>{" "}
                No coordination headache for clients.
              </li>
              <li>
                <span className=" text-[#000080]">End-to-End control –</span>{" "}
                Engineering, materials & commissioning by one team.
              </li>
              <li>
                <span className=" text-[#000080]">
                  Faster project execution –
                </span>{" "}
                Integrated planning & execution reduce downtime.
              </li>
              <li>
                <span className=" text-[#000080]">Quality & Compliance –</span>{" "}
                Follows ISO & industrial safety standards.
              </li>
              <li>
                <span className=" text-[#000080]">Scalable –</span> Suitable for
                small to large industrial projects.
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            {/* <Image
              src="/menupageimg/mod13.jpg"
              alt=" Buildings"
              className="rounded-md shadow-md w[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            /> */}

            <Image
              src="/platform/maining.jpg"
              alt="  Industrial Turnkey Projects benefits"
              width={600}
              height={400}
              className="rounded-md shadow-md object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
      <Industrycall />
      <Industryfooter />
    </>
  );
};

// ✅ Export the renamed component
export default Page;
