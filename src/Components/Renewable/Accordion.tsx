"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const items: AccordionItem[] = [
  {
    id: 1,
    title: "Engineering (E)",
    content:
      "Engineering forms the foundation of every solar project at Landsking Infra. Our experts perform in-depth site assessments, energy audits, and shadow analysis to design systems that are optimized, compliant, and performance-driven. Using advanced simulations and on-site precision, we ensure every project achieves maximum efficiency, safety, and long-term reliability.",
  },
  {
    id: 2,
    title: "Procurement(P)",
    content:
      "Procurement at Landsking Infra powers each solar project with quality and trust. We source panels, inverters, and structures exclusively from certified Tier-1 suppliers, backed by rigorous quality checks for strength and efficiency. Our cost-effective, scalable procurement strategy ensures long system life, minimal maintenance, and consistent energy output.",
  },
  {
    id: 3,
    title: "Construction (C)",
    content:
      "Construction transforms vision into reality at Landsking Infra. Our skilled EPC team executes every phase — from site preparation to system integration — with precision, safety, and adherence to global standards. Each project undergoes complete testing and commissioning, ensuring durable, efficient, and high-performing solar installations built to last.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto mt-10 p-4 md:px-20 lg:px-45">
      {/* <h2 className="text-sm uppercase text-gray-500 mb-2">Our Vision</h2> */}
      <h1 className="text-2xl font-semibold mb-6 text-[#000080] md:text-3xl">
        Your Solar EPC Partner Landsking Infra{" "}
      </h1>
      <p className="text-lg  mb-6 md:text-xl">
        Solar EPC (Engineering, Procurement & Construction) is the ultimate
        turnkey solution for your solar energy needs. When you choose a single
        company to manage every stage from initial design to final
        commissioning.
      </p>

      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={item.id} className="border-b border-gray-300">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <div className="flex items-center space-x-2">
                <span className="text-[#000080] font-bold text-3xl">
                  {index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`}
                </span>
                <span className="text-gray-900 text-2xl md:text-3xl ">
                  {item.title}
                </span>
              </div>
              <span
                className={`flex items-center justify-center h-8 w-8 rounded-full border border-black ${
                  openIndex === index ? "bg-black" : "bg-white"
                }`}
              >
                {openIndex === index ? (
                  <MinusIcon className="h-10 w-5 text-white" />
                ) : (
                  <PlusIcon className="h-10 w-5 text-black" />
                )}
              </span>
            </button>
            {openIndex === index && (
              <p className="pb-4 text-gray-600 text-justify text-xl tracking-wider ">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
