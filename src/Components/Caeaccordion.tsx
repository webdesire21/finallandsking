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
    title: "Competitive Solutions Through Smarter Thinking",
    content:
      "Building competitive solutions starts with asking a fundamental question: How can this be done better? At Landscapinfra, we analyze user needs and efficiency to engineer market advantage. Our mandate is to create systems that don't just work, but that perform, adapt, and last, ensuring our clients consistently stay ahead. This insight-driven approach leads to smarter solutions shaped by innovation.",
  },
  {
    id: 2,
    title: " Redefining Time-to-Market",
    content:
      "In modern industries, reducing time-to-market is critical, but we guarantee speed without sacrificing precision. Our model focuses on intelligent workflow using digital prototyping and synchronized teamwork. A project leaving our desk is refined, not rushed. The result is an efficient development cycle that delivers long-term reliability.",
  },
  {
    id: 3,
    title: " Creating Value Through Cost Optimization",
    content:
      "Our commitment is simple: Value must be greater than cost. We gain this by optimizing all our resources, design, and workflow instead of simply cutting costs and limiting potential. Through energy-efficient processes and strategic sourcing, we maintain a perfect balance between economy and excellence, turning cost control into a powerful competitive edge.",
  },
  {
    id: 4,
    title: "  Quality as the Core of Every Decision",
    content:
      "The world is rapidly moving toward electrification, making transformation essential for future success. At Landscapinfra, we see this as an opportunity, aligning engineering with environmental goals to help clients transition to sustainable infrastructure. This design innovation results in a cleaner, future-ready product portfolio built to power tomorrow's industries.",
  },
  {
    id: 5,
    title: " Creating Value Through Cost Optimization",
    content:
      "Quality is not an end stage at Landscapinfra; it is a principle woven into every phase of what we build. From the first concept sketch to final delivery, every element is tested and optimized. This approach ensures high performance is engineered with intention. Our clients receive reliable structures built on purpose, precision, and pride.",
  },
];

export default function Caeaccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto mt-10 p-4 md:px-15">
      <h2 className="text-2xl md:text-3xl uppercase text-[#000080] mb-2">
        Business challenges
      </h2>
      <h1 className="text-sm font-semibold mb-6 text-[#000] md:text-3xl">
        Solve your business challenges with our RND solutions.
      </h1>

      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={item.id} className="border-b border-gray-300">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <div className="flex items-center space-x-2">
                <span className="text-blue-500 font-bold md:text-3xl text-lg"></span>
                <span className="text-gray-900 text-xl md:text-2xl ">
                  {item.title}
                </span>
              </div>
              <span
                className={`flex items-center justify-center h-6 w-4 md:h-8 md:w-8 rounded-full border border-black ${
                  openIndex === index ? "bg-black" : "bg-white"
                }`}
              >
                {openIndex === index ? (
                  <MinusIcon className=" h-6 w-6 md:h-10 md:w-5 text-white" />
                ) : (
                  <PlusIcon className="h-6 w-6 md:h-10 md:w-5 text-black" />
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
