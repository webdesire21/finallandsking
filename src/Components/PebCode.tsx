// app/components/ConstructionCard.tsx
"use client";

import Image from "next/image";
import { FaBuilding } from "react-icons/fa";

export default function PedCode() {
  return (
    <div className="relative w-full h-[70vh] md:h-[60vh] flex items-center justify-center">
      <Image
        src="/industry.jpg"
        alt="Construction Background"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 w-[90%] md:w-4/5 lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="bg-yellow-500 p-8 rounded-md shadow-lg flex flex-col gap-4">
          <FaBuilding className="text-white text-3xl" />
          <h2 className="font-bold text-lg md:text-2xl text-black">
            Construction Sector
          </h2>
          <p className="text-black">
            We offer a wide range of products tailored to the construction
            sector, with collaborations with leading names in the industry.
          </p>
          <button className="bg-white text-black px-4 py-2 rounded-md w-max hover:bg-gray-200 transition">
            DISCOVER MORE
          </button>
        </div>

        {/* Right Info */}
        <div className=" bg-opacity-90 p-8 rounded-md shadow-lg flex flex-col gap-4">
          <h3 className="font-bold text-lg md:text-xl text-gray-800">
            DIVERSE SECTORS WE CATER TO
          </h3>
          <p className="text-gray-700">
            We serve a wide range of industries, offering tailored solutions for
            sectors including industrial, infrastructure, institutional, sports
            and leisure, and modular building construction. Our expertise
            ensures that each project meets the specific requirements of its
            respective domain.
          </p>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-md w-max hover:bg-yellow-400 transition">
            GET A QUOTE
          </button>
        </div>
      </div>

      {/* Pagination / Dots */}
      <div className="absolute bottom-4 flex gap-2">
        <span className="w-6 h-1 bg-yellow-500 rounded"></span>
        <span className="w-6 h-1 bg-gray-800 rounded"></span>
        <span className="w-6 h-1 bg-gray-800 rounded"></span>
        <span className="w-6 h-1 bg-gray-800 rounded"></span>
      </div>
    </div>
  );
}
