"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";
import { Ruler, Building2, Globe, Factory } from "lucide-react";

export default function AboutPebP() {
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
    <section className="relative py-16 px-4 md:px-15 lg:px-23 overflow-hidden">
      <div className="absolute top-20 left-10 bg-[#f2f2f2] rounded-full blur-3xl animate-pulse hidden md:block"></div>
      <div className="absolute bottom-10 right-10 bg-[#f2f2f2] rounded-full blur-3xl animate-pulse hidden md:block"></div>

      <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start z-10">
        <div className="space-y-6 flex flex-col justify-center">
          <div className="relative w-full h-[410] lg:h-[470px] lg:mt-25 ">
            <video
              className="w-full h-full object-cover rounded-md "
              src="/video.mp4"
              muted
              loop
              playsInline
              autoPlay
            ></video>
            {/* Caption Overlay */}
            <div className="absolute bottom-4 left-0 w-full text-center text-white bg-black/50 p-2">
              This is a sample caption shown directly over the video.
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-6">
            ABOUT US
          </h2>

          <p className="text-gray-600  text-justify mb-6 leading-relaxed text-base md:text-md">
            Landsking Infra Pvt. Ltd. brings together a highly experienced team
            with a proven track record across diverse infrastructure sectors.
            Our portfolio includes the execution of a 120 MT-capacity rice mill
            plant, over 350 minor and major bridges and superstructures, 26 km
            of MS pipeline installation up to 3.8 m diameter, and 410 km of HDPE
            pipeline excavation and laying. We have also successfully completed
            676,000 sq. ft. of PEB erection works and delivered a 15.5 MW solar
            power plant. By combining deep industry expertise with purposeful
            technology, including advanced digital engineering and AI-driven
            solutions, we consistently deliver high-quality, reliable, and
            future-ready infrastructure. Our commitment to excellence,
            innovation, and transparency ensures that clients can trust us to
            execute every project with precision and integrity.
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
