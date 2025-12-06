"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiChevronRight } from "react-icons/hi";

const TABS = [
  {
    title: "Solar design",
    headline: "Smart Designs for Maximum Solar Output",
    body: "We craft data-driven solar layouts tailored to each site’s unique conditions. Using advanced simulation and engineering precision, we ensure optimal energy output, structural integrity, and sustainable performance — right from blueprint to execution.",

    img: "/solar/solar design.jpg",
    buttonText: "VIEW MORE",
    url: "/soalr-design",
  },
  {
    title: "Epc solutions",
    headline: "Turning Complex Solar Projects into Simple Success Stories",
    body: " We deliver complete EPC solutions — from design and procurement to installation and commissioning — ensuring seamless project execution. Every system is optimized for performance, built with precision, and backed by proven reliability for long-term solar success.",
    img: "/solar/epc solution.jpg",
    buttonText: "VIEW MORE",
    url: "/epc-solutions",
  },
  {
    title: "Ground mounted",
    headline: "High-Yield Energy from the Ground Up",
    body: "Our ground-mounted solar systems combine durability and performance for industrial, commercial, and utility-scale projects. Designed to adapt to diverse terrains and climates, they deliver high energy yield with minimal maintenance and maximum efficiency.",
    img: "/solar/ground mounted solar (2).jpg",
    buttonText: "VIEW MORE",
    url: "/groundmounted",
  },
];

export default function Renewableplatform() {
  const [active, setActive] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState<{
    width: number;
    left: number;
  }>({ width: 0, left: 0 });
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const router = useRouter();

  useEffect(() => {
    const el = tabRefs.current[active];
    if (el) {
      setUnderlineStyle({
        width: el.offsetWidth,
        left: el.offsetLeft,
      });

      // Only scroll tabs on mobile
      if (window.innerWidth < 768) {
        el.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [active]);

  return (
    <section className="w-full  md:10 lg:px-28">
      <div className="mx-auto px-4 pt-12 text-center">
        <h1 className="text-2xl text-[#000080] md:text-3xl font-bold tracking-tight">
          Powering Progress with Solar Precision{" "}
        </h1>
        <p className="mt-4 text-[14px] font-light md:text-[16px] text-gray-600">
          Complete solar infrastructure solutions designed to perform, endure,
          and evolve.
        </p>
      </div>

      <div className="mt-8 ">
        <div className="mx-auto px-4">
          <div className="relative">
            <div className=" mx-10 md:mx-0 flex md:justify-center gap-4 md:gap-10 overflow-x-auto md:overflow-x-visible relative">
              {TABS.map((t, i) => (
                <button
                  key={t.title}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  onClick={() => setActive(i)}
                  className={`pb-3 font-medium whitespace-nowrap transition-colors
                                 ${
                                   active === i
                                     ? "text-[#272727]"
                                     : "text-gray-600 hover:text-[#000080]"
                                 }
                                 text-[13px] sm:text-sm md:text-[16px]`}
                >
                  {t.title}
                </button>
              ))}

              <span
                className="absolute bottom-0 block h-0.5 md:bg-[#000080] transition-all duration-300"
                style={underlineStyle}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Card */}
      <div className="  mx-auto px-4 md:mx-17">
        <div className="mt-8 flex justify-center">
          <div className="relative rounded-[5px] overflow-hidden  w-full  ">
            <div className="relative  h-[390px] md:h-[440px]">
              <Image
                src={TABS[active].img}
                alt={TABS[active].title}
                fill
                priority
                className="object-cover rounded-[5px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent rounded-[5px]" />
              <div className="absolute inset-0 flex items-center">
                <div className=" w-full md:max-w-4xl p-6 md:p-18">
                  <div className="text-white text-left md:text-left mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                      {TABS[active].headline}
                    </h2>
                    <p className="mt-4 text-sm md:text-[15px] text-gray-200">
                      {TABS[active].body}
                    </p>
                    <button
                      className="mt-6 border border-[#fff] text-white rounded-lg text-[13px] hover:bg-[#fff] hover:text-[#000080] font-semibold px-4 py-2 flex items-center gap-2"
                      onClick={() => router.push(TABS[active].url)}
                    >
                      {TABS[active].buttonText}
                      <HiChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
