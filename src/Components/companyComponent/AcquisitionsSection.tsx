"use client";

import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

export default function AcquisitionsSection() {
  return (
    <section className="w-full mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-10 text-[#000080]">
          Our Acquisitions
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          We are a growing company! To rapidly fulfill our mission of
          harmonizing product, nature, and life, we have acquired several firms
          to expand our offerings and bring on board talented individuals who
          share our vision of transforming the industry.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6 relative flex flex-col">
          <span className="absolute -top-3 left-6 bg-[#000080] text-white text-xs font-bold px-3 py-1 rounded">
            2019
          </span>
          <Image
            src="/company/about.webp"
            alt="About us"
            width={400}
            height={200}
            className="w-full h-44 sm:h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-[#000080] mb-3 text-center">
            Clinical Research
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow text-center">
            Adds clinical expertise and cloud-based solutions to enable smarter
            development and commercialization of drugs and treatments. Enhances
            the design, execution, and analysis of clinical research,
            positioning Dassault Systèmes to lead the digital transformation in
            healthcare.
          </p>
          <a
            href="#"
            className="text-[#000080] font-semibold text-sm mt-4 inline-flex items-center justify-center gap-1"
          >
            <IoIosArrowForward className="text-[#000080]" /> Read the press
            release
          </a>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <Image
            src="/company/about.webp"
            alt="No magic"
            width={400}
            height={200}
            className="w-full h-44 sm:h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-[#000080] mb-3 text-center">
            No Magic
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow text-center">
            Strengthens the CATIA portfolio for model-based systems engineering,
            architecture modeling for software, system of systems & enterprise
            business processes modeling. Allows users to implement continuous 3D
            digital processes & address all lifecycle aspects.
          </p>
          <a
            href="#"
            className="text-[#000080] font-semibold text-sm mt-4 inline-flex items-center justify-center gap-1"
          >
            <IoIosArrowForward className="text-[#000080]" /> Read the press
            release
          </a>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <Image
            src="/company/about.webp"
            alt="Outscale"
            width={400}
            height={200}
            className="w-full h-44 sm:h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-[#000080] mb-3 text-center">
            Acquisition of Majority Stake in Outscale
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow text-center">
            Dassault Systèmes strengthens its position as one of the fastest
            growing cloud companies.
          </p>
          <a
            href="#"
            className="text-[#000080] font-semibold text-sm mt-4 inline-flex items-center justify-center gap-1"
          >
            <IoIosArrowForward className="text-[#000080]" /> Read the press
            release
          </a>
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <a
          href="#"
          className="inline-block border border-[#000080] text-[#000080] font-semibold px-6 py-2 rounded-full hover:bg-blue-50 transition duration-300"
        >
          View all acquisitions
        </a>
      </div>

      {/* Leadership + Team Section */}
      <section className="w-full mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-6 mt-12">
          {/* Leadership */}
          <div className="bg-[#000080] text-white md:col-span-5 rounded-xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Our Leadership Team
              </h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                Dassault Systèmes is led by an inspiring group of executives who
                are committed to execute our long-term vision of driving
                sustainable innovation to address the world’s greatest
                challenges.
              </p>
            </div>
            <a
              href="#"
              className="mt-6 inline-block bg-white text-[#000080] font-semibold px-6 py-2 rounded-full text-center hover:bg-gray-100 transition"
            >
              Our leadership
            </a>
          </div>

          {/* Careers */}
          <div className="bg-gray-100 md:col-span-3 rounded-xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Be a Part of Our Team
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Do you have big dreams? Do you enjoy a challenge? Do you want to
                unleash your imagination and creativity? Join us to open new
                possibilities together through the power of virtual universes!
              </p>
            </div>
            <a
              href="#"
              className="mt-6 inline-block bg-[#000080] text-white font-semibold px-6 py-2 rounded-full text-center hover:bg-blue-900 transition"
            >
              See open positions
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
