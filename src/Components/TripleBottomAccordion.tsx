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
    title: "People",
    content:
      "We are committed to building inclusive, equitable, and sustainable environments—especially for youth, women, and marginalized groups. As a company, we believe diversity is our strength and that every individual has the power to shape a better future. Through innovation, integrity, and social responsibility, we strive to leave a lasting positive impact on society and the economies we serve.",
  },
  {
    id: 2,
    title: "Planet",
    content:
      "At Landsking Infra, we recognize our responsibility to minimize our environmental impact and contribute to a thriving society. As part of our sustainability strategy, we are committed to achieving operational net zero by 2035, reducing at least 75% of our Scope 1 & 2 emissions, with the remainder offset through carbon removal efforts.",
  },
  {
    id: 3,
    title: "Purpose",
    content:
      "No single organization can create a sustainable future. Sustainability is nurtured within an ecosystem therefore We at Landsking Infra recognize that tackling Scope 3 emissions—those arising from our broader supply chain—is essential to achieving true sustainability in construction. That’s why we are actively engaging with clients, suppliers, and academic partners to drive collaborative solutions. Through our dedicated efforts at the Landsking Infra Centre for Construction Engineering and Technology in Indore, we are investing in cutting-edge research, innovation, and skill development to accelerate the decarbonization of the construction sector and promote environmentally responsible building practices.",
  },
];

export default function TripleBottomAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <h2 className="text-sm uppercase text-gray-500 mb-2">Our Vision</h2>
      <h1 className="text-3xl font-semibold mb-6">
        How we approach the triple bottom line
      </h1>
      <p className="text-xl  mb-6">
        To be a global leader in infrastructure development, setting benchmarks
        in both civil and industrial engineering. We envision a future where our
        work not only supports the foundation of economies but also contributes
        meaningfully to the economic and social progress of the communities we
        serve. Through innovation, sustainability, and unwavering commitment, we
        strive to shape a better world through– “The Triple Bottom Line
        Approach”{" "}
      </p>
      {/* <h1 className="text-3xl font-semibold mb-6">
        How we approach the triple bottom line
      </h1> */}
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={item.id} className="border-b border-gray-300">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <div className="flex items-center space-x-2">
                <span className="text-blue-500 font-bold text-3xl">
                  {index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`}
                </span>
                <span className="text-gray-900 text-3xl ">{item.title}</span>
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
              <p className="pb-4 text-gray-600   text-justify text-xl tracking-wider ">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
