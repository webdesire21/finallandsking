"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiChevronRight } from "react-icons/hi";

const TABS = [
  {
    title: "Industrial Turnkey Projects",
    headline: "Complete Industrial Solutions from Start to Finish",
    body: "We provide end-to-end industrial turnkey solutions, covering everything from conceptual design to project commissioning. Our approach ensures efficiency, reliability, and optimized performance for manufacturing, energy, and infrastructure sectors.",
    img: "/industry/Industrial Turnkey Projects.png",
    buttonText: "VIEW MORE",
    url: "/Industrialtrunckyprojects",
  },
  {
    title: "Construction",
    headline: "Customized Plant Engineering for Optimal Performance",
    body: "Our plant engineering services cover design, implementation, and optimization of industrial plants. We combine cutting-edge technologies with proven engineering practices to ensure high-quality, cost-effective, and sustainable solutions.",
    img: "/industry/Construction.png",
    buttonText: "VIEW MORE",
    url: "/industry-construction",
  },
  {
    title: "Industry Installation",
    headline: "Innovative Engineering for Manufacturing Excellence",
    body: "We deliver advanced structural and manufacturing engineering solutions tailored to your production needs. Our expertise ensures safety, efficiency, and superior performance in every manufacturing project we undertake.",
    img: "/industry/industry installation banner.png",
    buttonText: "VIEW MORE",
    url: "/industry-installation",
  },
];

export default function Aboutplatform() {
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
    <section className="w-full md:px-6 lg:px-16">
      <div className="mx-auto px-4 pt-12 text-center md:px-13 lg:px-15">
        <h1 className="text-2xl text-[#000080] md:text-3xl font-bold tracking-tight">
          Comprehensive Infrastructure Solutions
        </h1>
        <p className="mt-4 text-[14px] font-light md:text-[16px] text-gray-600">
          Drawing on deep experience, we manage every step of complex projects,
          offering absolute certainty from the initial concept definition to the
          final asset handover. Our EPC (Engineering, Procurement, and
          Construction) solutions integrate sophisticated technology and
          rigorous global standards. Structural Engineering Services Unlocking
          performance begins with absolute structural integrity. Our expert
          engineers utilize advanced tools and decades of expertise to deliver
          innovative structural design and analysis services
        </p>
      </div>

      <div className="mt-8 ">
        <div className="mx-auto px-4 md:px-2 ">
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
                className="absolute bottom-0 block h-0.5 bg-[#000080] transition-all duration-300"
                style={underlineStyle}
              />
            </div>
            {/* <div className="h-px bg-gray-200 mt-0.5 w-full"></div> */}
          </div>
        </div>
      </div>

      {/* Content Card */}
      <div className="  mx-auto px-4 md:mx-22">
        <div className="mt-8 flex justify-center">
          <div className="relative rounded-[5px] overflow-hidden  w-full  ">
            <div className="relative  h-[340px] md:h-[460px]">
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
