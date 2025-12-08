// src/Components/PlatformP.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiChevronRight } from "react-icons/hi";

const TABS = [
  {
    title: "CAD Services",
    headline: "Precision Through Digital Engineering",
    body: "Our CAD services deliver end-to-end digital engineering solutions. From detailed 3D modeling and advanced simulations to automated manufacturing workflows, we help optimize design accuracy, enhance productivity, and accelerate time-to-market. Each project is executed with precision, innovation, and efficiency.",
    img: "/rndimages/engineers refine designs.jpg",
    buttonText: "VIEW MORE",
    url: "/cadservices",
  },
  {
    title: "Product Engineering",
    headline: "Innovating Products for Performance and Reliability",
    body: "Our product engineering services transform ideas into high-performance, market-ready solutions. From concept development and prototyping to testing and production support, we ensure each product is efficient, durable, and built to meet global quality standards while reducing cost and development time.",
    img: "/rndimages/Durability Analysis.jpeg",
    buttonText: "VIEW MORE",
    url: "/productengineering",
  },
  {
    title: "Simulation Design for Manufacturing",
    headline: "Smarter Manufacturing Through Simulation",
    body: "We leverage advanced simulation technologies to optimize design and manufacturing processes. By virtually validating performance and reliability before production, we minimize material waste, reduce errors, and improve overall efficiency. Our simulation-driven approach ensures precision, safety, and long-term sustainability.",
    img: "/rndimages/equipment-data-center-workplace-used-monitoring-performance.jpg",
    buttonText: "VIEW MORE",
    url: "/rndsimulation",
  },
];

export default function Rndplatform() {
  const [active, setActive] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState<{
    width: number;
    left: number;
  }>({
    width: 0,
    left: 0,
  });

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    const el = tabRefs.current[active];
    if (el) {
      setUnderlineStyle({
        width: el.offsetWidth,
        left: el.offsetLeft,
      });

      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [active]);

  return (
    <section className="w-full  md:px-20 lg:px-28">
      <div className="mx-auto px-4 pt-12 text-center ">
        <h1 className="text-2xl text-[#000080] md:text-3xl font-bold tracking-tight">
          Engineering and R&D Solutions
        </h1>
        <p className="mt-4 text-[14px] font-light md:text-[16px] text-gray-600">
          We provide cutting-edge engineering and R&D solutions that drive
          innovation, optimize performance, and accelerate industrial growth.
        </p>
      </div>

      <div className="mt-8 ">
        <div className="mx-auto px-4">
          <div className="relative">
            <div className="flex md:justify-center gap-4 md:gap-10 overflow-x-auto md:overflow-x-visible relative">
              {TABS.map((t, i) => (
                <button
                  key={t.title}
                  onClick={() => setActive(i)}
                  className={`pb-3 font-medium whitespace-nowrap transition-colors
                    ${
                      active === i
                        ? "text-[#272727]"
                        : "text-gray-600 hover:text-[#000080]"
                    }
                    hover:border-b-2 hover:border-[#000080]
                    text-[13px] sm:text-sm md:text-[16px]`}
                >
                  {t.title}
                </button>
              ))}

              {/* Underline */}
            </div>
            {/* <div className="h-px bg-gray-200 mt-0.5 w-full"></div> */}
          </div>
        </div>
      </div>

      {/* Content Card */}
      <div className="  mx-auto px-4  md:mx-10 lg:mx-17">
        <div className="mt-8 flex justify-center">
          <div className="relative rounded-[5px] overflow-hidden  w-full  ">
            <div className="relative  h-[390px] md:h-[460px]">
              <Image
                src={TABS[active].img}
                alt={TABS[active].title}
                fill
                priority
                className="object-cover rounded-[5px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent rounded-[5px]" />
              <div className="absolute inset-0 flex items-center">
                <div className=" w-full md:max-w-4xl p-5 md:p-18">
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
