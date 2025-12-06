"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiChevronRight } from "react-icons/hi";

const TABS = [
  {
    title: "Pre Engineered Buildings",
    headline: "High-Performance Pre-Engineered Steel Buildings",
    body: "Landsking InfraInfra Pvt. Ltd. delivers modern, durable, and cost-efficient pre-engineered buildings. Each structure is designed for strength, flexibility, and long-lasting performance, tailored to meet diverse industrial and commercial needs.",
    img: "/video/tab.jpg",
    buttonText: "VIEW MORE",
    url: "/peb",
  },
  {
    title: "EPC Solutions",
    headline: "End-to-End EPC Solutions",
    body: "From concept to commissioning, our EPC solutions ensure seamless project execution with a strong focus on quality, cost-efficiency, and sustainability. We integrate advanced technologies and global standards to deliver world-class infrastructure.",
    img: "/solution/stell.jpg",
    buttonText: "VIEW MORE",
    url: "/epcsolutions",
  },
  {
    title: "Structural Engineering Services",
    headline: "Excellence in Structural Engineering",
    body: "Our expert engineers provide innovative structural design and analysis services. With advanced tools and decades of expertise, we ensure the highest safety, efficiency, and performance standards for every project we deliver.",
    img: "/video/epc.jpg",
    buttonText: "VIEW MORE",
    url: "/structuralsteel",
  },
];

export default function PlatformP() {
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
    <section className="w-full md:px-9 lg:px-28">
      <div className="mx-auto px-4 pt-12 text-center ">
        <h1 className="text-2xl text-[#000080] md:text-3xl font-bold tracking-tight">
          Pre-Engineered Solutions
        </h1>
        <p className="mt-4 text-[14px] font-light md:text-[16px] text-gray-600">
          From design and engineering to execution and management, we deliver
          integrated solutions that shape industries and build a stronger
          future.
        </p>
      </div>

      <div className="mt-8 ">
        <div className="mx-auto px-4">
          <div className="relative">
            <div className="flex md:justify-center gap-4 md:gap-10 overflow-x-auto md:overflow-x-visible relative">
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

              {/* Underline */}
              <span
                className="absolute bottom-0 block h-0.5 md:bg-[#000080] transition-all duration-300"
                style={underlineStyle}
              />
            </div>
            {/* <div className="h-px bg-gray-200 mt-0.5 w-full"></div> */}
          </div>
        </div>
      </div>

      {/* Content Card */}
      <div className="  mx-auto px-4 lg:mx-1 md:px-9">
        <div className="mt-8 flex justify-center">
          <div className="relative rounded-[5px] overflow-hidden  w-full  ">
            <div className="relative  h-[380px] md:h-[460px]">
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
