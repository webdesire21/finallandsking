"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";
import { Ruler, Building2, Globe, Users } from "lucide-react";

export default function Renewableabout() {
  const stats = [
    {
      value: 50,
      suffix: "+",
      label: "MW Installed Capacity",
      icon: Ruler, // Ruler fits capacity / measurement
    },
    {
      value: 120,
      suffix: "+",
      label: "Industrial & Commercial Projects",
      icon: Building2, // Building icon fits commercial/industrial projects
    },
    {
      value: 10,
      suffix: "+",
      label: "Years of Team Experience",
      icon: Globe, // Globe works for global experience; optionally could use Users for team
    },
    {
      value: 98,
      suffix: "%",
      label: "Client Retention Rate",
      icon: Users, // Users icon better represents clients/people
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
    <section className="relative py-4 md:py-16">
      <div className="relative container mx-auto px-5 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start z-10">
        <div className="space-y-6 flex flex-col justify-center">
          <div className="relative rounded-lg w-full h-64 sm:h-80 md:h-[535px] overflow-hidden hover:scale-105 transition-transform duration-500">
            <video
              src="/homeslider.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-6">
            Building Tomorrow’s Energy Infrastructure — Today.
          </h2>

          <p className="text-gray-600 mb-6 text-justify leading-relaxed text-base md:text-md">
            Landsking Infra is a leading Solar EPC & Industrial Infrastructure
            company specializing in complete design-to-delivery solutions. We
            combine engineering precision, project management excellence, and
            green innovation to create reliable solar power systems for
            industrial, commercial, and residential clients.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h6 className="text-xl md:text-2xl font-bold text-[#000080]">
              Core Values:
            </h6>
            <p className="text-gray-700 text-sm md:text-base">
              Integrity | Innovation | Reliability | Sustainability
            </p>
          </div>

          {/* Stats with Icons */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <div className="p-1 bg-[#000080] rounded-full text-white shadow-lg flex items-center justify-center md:p-3">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3
                      ref={(el) => {
                        numberRefs.current[i] = el;
                      }}
                      className="text-md md:text-2xl font-bold text-[#000080]"
                    >
                      0
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
