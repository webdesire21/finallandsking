"use client";

import Image from "next/image";

interface Feature {
  title: string;
  description: string;
}

interface KeyFeaturesProps {
  heading?: string;
  highlight?: string;
  subHeading?: string;
  img?: {
    src: string;
    alt: string;
  };
  description?: string;
  features?: Feature[];
}

export default function KeyFeaturesB({
  heading = "KEY FEATURES",
  highlight = "OF Landsking Infra PVT LTD COLD STORAGE & COLD ROOM SOLUTIONS",
  img = {
    src: "/industry.jpg",
    alt: "Cold Storage ",
  },
  description = `At Landsking Infra PVT LTD, we deliver state-of-the-art cold storage systems and energy-efficient cold rooms.`,
  features = [],
}: KeyFeaturesProps) {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-24 md:px-18">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold sm:mb-10 leading-snug">
        <span className="text-[#000080] block sm:inline px-3 py-1 rounded-md mr-0 sm:mr-2">
          {heading}
        </span>
        <span className="block sm:inline">{highlight}</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="order-2 md:order-1 w-full">
          <Image
            src={img.src}
            alt={img.alt}
            width={700}
            height={500}
            className="rounded-2xl shadow-md object-cover w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
            priority
          />
        </div>

        <div className="order-1 md:order-2 space-y-6">
          <p className="text-gray-600 text-justify  text-base sm:text-[18px]">
            {description}
          </p>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index}>
                <p className=" text-gray-600 text-base sm:text-lg">
                  • {feature.title}
                </p>
                <p className="text-gray-600 text-sm sm:text-[18px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
