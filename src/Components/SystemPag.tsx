// src/pages/SystemPage.tsx
"use client";
import Footer from "../Components/Footer";

import { ArrowUpRight } from "lucide-react";
import IndustryHeader from "./Industryheader";
import Image from "next/image";

export default function SystemPage() {
  return (
    <>
      <IndustryHeader />
      <section>
        {/* Hero Section */}
        <div className="w-full mb-6 py-8 pt-32">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left Heading */}
            <div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black">
                Our Complete
              </h1>
              <h1 className="text-2xl sm:text-4xl mt-3 md:text-5xl font-bold text-black">
                Solutions
              </h1>
            </div>
            {/* Right Description */}
            <div>
              <p className=" text-gray-600 text-justify text-sm sm:text-base md:text-lg">
                We provide complete solutions for structural steel,
                pre-engineered buildings, sheeting, and accessories. Our
                products are designed to meet the highest standards of
                durability and performance, helping you build with confidence
                and efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Banner Image */}
        <div className="w-full ">
          <Image
            src="/solutionsBannerPebsteel.jpg"
            alt="complete solution"
            className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-cover "
          />
        </div>

        {/* Intro */}
        <div className="p-6" id="system-section">
          <h2 className="text-5xl font-bold mb-6 text-center">System</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          <div className="bg-white shadow text-start pl-2 flex flex-col">
            <img
              src="/Square1.png"
              alt="Structural Steel"
              className="mx-auto w-full h-56 object-cover"
            />
            <h2 className="mt-4 text-lg sm:text-3xl font-semibold">
              Structural Steel
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 flex-grow">
              Pebsteel utilizes Structural Steel (S.T.S) for complex and
              large-scale projects, including skyscrapers, airport terminals,
              and oil and gas facilities, among others.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center p-6 gap-2 text-[#000080] font-bold hover:underline"
            >
              Explore more
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white shadow text-start pl-2 flex flex-col">
            <img
              src="/Square2.jpg"
              alt="Pre-Engineered Buildings"
              className="mx-auto w-full h-56 object-cover"
            />
            <h2 className="mt-4 text-lg sm:text-3xl font-semibold">
              Pre-Engineered Buildings
            </h2>
            <p className="mt-2 text-sm sm:text-lg text-gray-600 flex-grow">
              Pre-engineered Buildings (PEB), also known as Prefabricated Steel
              Buildings, are widely used for factories, warehouses, hangars, and
              more. Their flexible design allows us to optimize functionality,
              enhance aesthetics, and improve the end-user experience.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex text-lg items-center p-6 gap-2 text-[#000080] font-bold hover:underline"
            >
              Explore more
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
