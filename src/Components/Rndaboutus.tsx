"use client";

import { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";
import { Ruler, Building2, Globe, Factory } from "lucide-react";

export default function Rndaboutus() {
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
  const numberRefs = useRef<Array<HTMLHeadingElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting) && !hasAnimated) {
          stats.forEach((stat, i) => {
            const element = numberRefs.current[i];
            if (element) {
              const countUp = new CountUp(element, stat.value, {
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

    numberRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  return (
    <section className="relative py-8 md:py-16 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="absolute top-20 left-10 bg-[#f2f2f2] rounded-full blur-3xl animate-pulse hidden md:block w-48 h-48"></div>
      <div className="absolute bottom-10 right-10 bg-[#f2f2f2] rounded-full blur-3xl animate-pulse hidden md:block w-48 h-48"></div>
      <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center z-10">
        <div className="w-full flex justify-center">
          <div className="relative rounded-xl w-full h-60 sm:h-72 md:h-[420px] overflow-hidden">
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
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000080] mb-4">
            ABOUT US
          </h2>

          <p className="text-gray-600 text-justify mb-6 leading-relaxed text-sm sm:text-base">
            Landsking Infra Pvt. Ltd. with the Team Combined Experience have
            More than 120MT Capacity Rice mill Plant, 350 Minor and Major Bridge
            and Super Structure, 26 KM MS Pipe line upto 3.8m dia, and 410KM
            HDPE pipeline Excavation and laying, 6,76,000Sqft PEB Erection Work,
            15.5MW solar plant in its Portfolio. We combine our expertise with
            purposeful technology, deploying innovations like digital
            engineering and AI to produce powerful results.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-2 md:p-3 bg-[#000080] rounded-full text-white shadow-md">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3
                      ref={(el) => {
                        numberRefs.current[i] = el;
                      }}
                      className="text-[13px] md:text-2xl font-bold text-[#000080]"
                    >
                      0
                    </h3>
                    <p className="text-gray-600 text-base md:text-sm">
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
