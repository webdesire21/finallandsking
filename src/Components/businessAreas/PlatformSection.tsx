"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type TabType = {
  title: string;
  headline: string;
  body: string;
  img: string;
  buttonText: string;
  url: string;
};

type PlatformSectionProps = {
  heading: string;
  subheading: string;
  tabs: TabType[];
};

export default function PlatformSectionB({
  heading,
  subheading,
  tabs,
}: PlatformSectionProps) {
  const [active, setActive] = useState(0);
  const router = useRouter();

  return (
    <section className="w-full">
      <div className="max-w-4xl mx-auto px-4 pt-12 text-center">
        <h1 className="text-3xl text-[#000080] md:text-4xl font-semibold tracking-tight">
          {heading}
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600">{subheading}</p>
      </div>

      <div className="mt-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-start md:justify-center gap-6 md:gap-10 overflow-x-auto scrollbar-hide border-b border-gray-200 pb-2">
            {tabs.map((t, i) => (
              <button
                key={t.title}
                onClick={() => setActive(i)}
                className={`relative pb-2 text-sm md:text-base font-medium whitespace-nowrap transition-colors
                  ${
                    active === i
                      ? "text-[#000080]"
                      : "text-gray-600 hover:text-[#000080]"
                  }`}
              >
                {t.title}
                {active === i && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#000080] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="mt-8 relative rounded-xl overflow-hidden shadow-lg">
          <div className="relative w-full h-[340px] md:h-[460px]">
            <Image
              src={tabs[active].img}
              alt={tabs[active].title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full p-6 md:p-10">
                <div className="max-w-2xl text-white text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                    {tabs[active].headline}
                  </h2>
                  <p className="mt-4 text-sm md:text-base text-gray-200">
                    {tabs[active].body}
                  </p>
                  <button
                    className="mt-6 bg-[#000080] hover:bg-[#272727] text-white font-semibold px-4 py-2 rounded-md"
                    onClick={() => router.push(tabs[active].url)}
                  >
                    {tabs[active].buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
