"use client";

import { useState } from "react";
import React from "react";
import Footer from "yes/Components/Footer";
import Industryheader from "yes/Components/Industryheader";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Plant from "yes/Components/Plant";
import Planttabs from "yes/Components/Planttabs";

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
    image: "/realstate/three.webp",
  },
  {
    id: 2,
    title: "MEP Services",
    description:
      "Our licensed in-house team handles the seamless integration of all Mechanical, Electrical, and Plumbing systems required for your project.",
    image: "/realstate/two.jpg",
  },
  {
    id: 3,
    title: "Control Systems & Lifts",
    description:
      "We integrate smart technology for precise operational control and ensure vertical mobility systems (lifts) function with flawless safety and reliability.",
    image: "/realstate/one.webp",
  },
  {
    id: 4,
    title: "Air Conditioning",
    description:
      "We design and implement robust HVAC solutions that guarantee optimal climate control and air quality throughout your commercial space.",
    image: "/realstate/fourS.webp",
  },
  {
    id: 5,
    title: "Fire Fighting Systems",
    description:
      "We deliver critical, code-compliant fire suppression and protection systems built to safeguard your assets and personnel instantly.",
    image: "/realstate/fiveS.webp",
  },
  {
    id: 6,
    title: "All Statutory Approval Co-Ordinations",
    description:
      "We simplify complex project timelines by expertly managing and coordinating every necessary governmental and statutory clearance.",
    image: "/realstate/fiveS.webp",
  },
  {
    id: 7,
    title: "DG Systems",
    description:
      "We install powerful Diesel Generator (DG) systems, providing reliable, continuous backup power to maintain zero operational downtime.",
    image: "/realstate/fiveS.webp",
  },
  {
    id: 5,
    title: "Water & Waste Water Treatment Systems",
    description:
      "We engineer complete, sustainable solutions for managing and treating all water and effluent needs within your industrial footprint.",
    image: "/realstate/fiveS.webp",
  },
  {
    id: 5,
    title: "Office Interior Works & Finishes",
    description:
      "We execute fit-out projects, transforming commercial spaces with premium finishes and functional designs that reflect your corporate identity.",
    image: "/realstate/fiveS.webp",
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
      <Plant />
      {/* Intro Section */}
      <section className="bg-white py-12 px-4 md:px-15">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug">
              Plant Engineering{" "}
            </h2>
            <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              We transcend complexity, providing complete industrial solutions
              that guarantee certainty across every stage, from initial
              engineering design to final project commissioning.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We offer full-spectrum mechanical engineering services,
              guaranteeing a turnkey approach across manufacturing, energy, and
              infrastructure. Our process uses precise CAD modeling for robust
              product development, ensuring optimized performance and ISO
              compliance. This results in seamless execution and predictable
              delivery.
            </p>

            <Link href="/industry-contact">
              <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
                GET A QUOTE
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/menupageimg/mod13.jpg"
              alt=" Plant Engineering"
              width={600}
              height={400}
              className="rounded-md shadow-md object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
      <Planttabs /> {/* Services Section */}
      <section className="text-center px-4 sm:px-6 md:px-12 pt-1 md:pt-16 bg-white">
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
      <Footer />
    </>
  );
};

export default Page;
