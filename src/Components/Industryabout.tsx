"use client";

import { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";
import { Ruler, Building2, Globe, Factory } from "lucide-react";

export default function Industryabout() {
  const stats = [
    { value: 1.2e6, suffix: "+", label: "Sq. Ft. Area Delivered", icon: Ruler },
    { value: 200, suffix: "+", label: "Project Executed", icon: Building2 },
    { value: 55, suffix: "+", label: "Global Clients", icon: Globe },
    {
      value: 7,
      suffix: "+",
      label: "Years  Experience",
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
    <section className="relative py-16 px-4 md:px-20 lg:px-31 overflow-hidden">
      <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start z-10">
        <div className="space-y-6 flex flex-col justify-center">
          <div className="relative rounded-lg w-full h-64 sm:h-80 md:h-[500px] overflow-hidden hover:scale-105 transition-transform duration-500">
            <video
              src="/video/peb.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-6">
            ABOUT US
          </h2>

          <p className="text-gray-600 text-justify mb-6 leading-relaxed text-base md:text-md">
            Landsking InfraInfra Pvt.Ltd. with the Team Combined Experience have
            More than 120MT Capacity Rice mill Plant, 350 Minor and Major Bridge
            and Super Structure, 26 KM MS Pipe line upto 3.8m dia, and 410KM
            HDPE pipeline Excavation and laying, 6,76,000Sqft PEB Erection Work,
            15.5MW solar plant in Its Portfolio. We combine our expertise with
            purposeful technology, deploying innovations like digital
            engineering and AI to produce powerful results.
          </p>

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
