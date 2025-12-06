"use client";

import Image from "next/image";

export default function ProgressSection() {
  return (
    <section className="w-full mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-16">
      <div className="grid grid-cols-1  gap-3 lg:grid-cols-4 lg:gap-6 items-stretch">
        <div className="bg-gray-100 rounded-xl p-5 sm:p-6 md:p-8 shadow-sm flex flex-col justify-center text-center md:text-left">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 leading-snug text-[#000080]">
            Addressing today’s societal <br className="hidden sm:block" /> and
            environmental challenges
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Starting in 2020, Dassault Systèmes set off to demonstrate how
            everyday people can harness imagination and innovation to break
            boundaries and shape a more sustainable future.
          </p>
        </div>

        <div className="relative md:col-span-3 rounded-xl overflow-hidden flex flex-col">
          <Image
            src="/company/about.webp"
            alt="The Only Progress is Human"
            width={1200}
            height={500}
            className="w-full h-56 sm:h-72 md:h-80 object-cover"
            priority
          />

          <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left p-4 sm:p-6 md:p-10 bg-black/40 backdrop-blur-[1px]">
            <p className="text-white font-semibold uppercase mb-1 text-xs sm:text-sm">
              Acting on the world’s challenges
            </p>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-3 leading-tight text-white md:text-[#000080] drop-shadow">
              The Only Progress is Human
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm md:text-base mb-4 max-w-xl leading-relaxed">
              Discover our dynamic series that highlights 10 of humanity’s most
              significant challenges, exploring how human ingenuity is fueling
              bold ideas and actions to create a brighter, more sustainable
              world, all while honoring and preserving our shared legacy.
            </p>
            <button
              className="bg-white text-[#000080] font-semibold px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base rounded-full shadow-md 
              hover:bg-blue-100 transition duration-300 w-full sm:w-auto"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
