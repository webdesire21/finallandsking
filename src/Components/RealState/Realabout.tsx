"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";
import { Ruler, Building2, Globe, Factory } from "lucide-react";
import { CheckCircle } from "lucide-react";

export default function Realabout() {
  const stats = [
    { value: 1.2e6, suffix: "+", label: "Sq. Ft. Area Delivered", icon: Ruler },
    { value: 200, suffix: "+", label: "Project Executed", icon: Building2 },
    { value: 55, suffix: "+", label: "Global Clients", icon: Globe },
    {
      value: 7,
      suffix: "+",
      label: "Years Manufacturing Experience",
      icon: Factory,
    },
  ];

  const [hasAnimated, setHasAnimated] = useState(false);
  const numberRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting) && !hasAnimated) {
          stats.forEach((stat, i) => {
            if (numberRefs.current[i]) {
              const countUp = new CountUp(numberRefs.current[i]!, stat.value, {
                duration: 2,
                suffix: stat.suffix,
                separator: ",",
              });
              countUp.start();
            }
          });
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    numberRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  return (
    <section className="relative py-16 px-4 lg:px-20 md:px-15 overflow-hidden">
      <div className="absolute top-20 left-10 bg-[#f2f2f2] rounded-full blur-3xl animate-pulse hidden md:block"></div>
      <div className="absolute bottom-10 right-10 bg-[#f2f2f2] rounded-full blur-3xl animate-pulse hidden md:block"></div>

      <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start z-10">
        {/* Left Section - Video & Two Images */}
        <div className="space-y-6 lg:mt-22">
          {/* Video */}
          <div className="relative w-full h-64 sm:h-72 md:h-75 overflow-hidden hover: transition-all duration-500">
            <video
              src="/homeslider.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Two Images in a Row */}
          <div className="grid grid-cols-2 gap-1">
            <div className="relative w-full h-40 sm:h-56 overflow-hidden rounded-sm transform transition-transform duration-700 ">
              <Image
                src="/engineer.jpg"
                alt="About Real Estate"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-40 sm:h-56 overflow-hidden rounded-sm transform transition-transform duration-700 ">
              <Image
                src="/cut.png"
                alt="About Landsking Infra Real estate"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#000080] mb-4 md:mt-9 sm:mb-6">
            ABOUT US
          </h2>

          <p className="text-gray-600 text-justify mb-4 sm:mb-5  text-md sm:text-base">
            Landsking InfraInfra Pvt.Ltd. with the Team Combined Experience have
            More Landsking Infra – India’s emerging real estate powerhouse. We
            specialize in connecting people and properties — from industrial
            warehouses to retail showrooms, commercial offices to residential
            townships.Our approach is transparent, data-driven, and
            client-first. From property sourcing and negotiations to
            documentation and deal closure — we manage everything with
            professionalism and precision.
          </p>
          <p className="text-gray-600 text-justify mb-4 sm:mb-5  text-md sm:text-base">
            <span className="text-[#000080] FONT-BOLD text-LG">
              “Right Property. Right Price. Right Time.”
            </span>
            That’s not just a tagline, it’s our operating philosophy.
          </p>
          <p className="text-gray-600 text-justify mb-4 sm:mb-5  text-md sm:text-base">
            With Landsking Infra, every transaction is backed by verified
            listings, legal clarity, and deep market insight — so you can
            invest, lease, or sell with total confidence.
          </p>
          <p className="text-gray-600 text-justify mb-4 sm:mb-5  text-md sm:text-base">
            We don’t just deal in properties — we deliver value, vision, and
            growth.
          </p>
          <ul className="space-y-2 text-gray-600 text-base md:text-md">
            {[
              "Pan-India Network of Verified Listings",
              "Expert Negotiators & Legal Support",
              "End-to-End Transaction Management",
              "Corporate Leasing & Investment Advisory",
              "100% Transparency & Trust",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#000080] mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Stats with Icons */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-lg p-3 sm:p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <div className="p-2 sm:p-3 bg-[#000080] rounded-full text-white shadow-lg">
                    <Icon size={20} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3
                      ref={(el) => {
                        numberRefs.current[i] = el;
                      }}
                      className="text-md sm:text-2xl font-bold text-[#000080]"
                    >
                      0
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </section>
  );
}
