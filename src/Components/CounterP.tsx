"use client";
import { useEffect, useState } from "react";

interface CounterItem {
  value: number;
  label: string;
  suffix?: string;
}

const counters: CounterItem[] = [
  { value: 55, label: "Global Clients", suffix: "+" },
  { value: 5, label: " Partners", suffix: "+" },
  { value: 7, label: "Countries", suffix: "+" },
  { value: 250, label: "Project Executed", suffix: "+" },
  { value: 10, label: "Years Experience", suffix: "+" },
];

export default function CounterP() {
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    counters.forEach((counter, i) => {
      let start = 1;
      const end = counter.value;
      const duration = 2000;
      const stepTime = 20;
      const increment = end / (duration / stepTime);

      const interval = setInterval(() => {
        start += increment;
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = start >= end ? end : start;
          return updated;
        });
        if (start >= end) clearInterval(interval);
      }, stepTime);
    });
  }, []);

  return (
    <section className="py-12 bg-cover bg-center md:px-18 ">
      <div className="mx-[20px] px-5">
        <h2 className="text-xl md:text-[30px] font-bold text-[#000080] mb-8">
          Leading industries toward a smarter future with focused and adaptable
          innovation.
        </h2>

        {/* Counter Grid */}
        <div
          className="
            bg-[#000080] rounded-xl shadow-lg py-5 px-4 md:py-6 md:px-20 lg:px-30
            grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5
            gap-y-7 justify-items-center
          "
        >
          {counters.map((counter, i) => (
            <div
              key={i}
              className={`text-center min-w-[120px] ${
                i === counters.length - 1 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <h5 className="text-[20px] font-bold text-white transition-all duration-500 md:text-[35px]">
                <span>
                  {counts[i].toFixed(counter.value % 1 !== 0 ? 2 : 0)}
                </span>
                <span className="ml-1">{counter.suffix || ""}</span>
              </h5>

              <h6 className="text-white text-[16px] md:text-[19px] mt-0">
                {counter.label}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
