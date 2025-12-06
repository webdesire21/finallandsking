"use client";

import { FaPlane, FaUsers, FaCar } from "react-icons/fa";
import { MdOutlineMedicalServices } from "react-icons/md";

export default function InnovationImpact() {
  const stats = [
    {
      id: 1,
      icon: <FaPlane className="text-[#000080] text-6xl" />,
      value: "100%",
      text: "of all planes, including solar-powered, are designed with Dassault Systèmes software.",
    },
    {
      id: 2,
      icon: <MdOutlineMedicalServices className="text-[#000080] text-6xl" />,
      value: "Over 50%",
      text: "of drugs and medical devices are designed with Dassault Systèmes solutions.",
    },
    {
      id: 3,
      icon: <FaCar className="text-[#000080] text-6xl" />,
      value: "100%",
      text: "of EV manufacturers are innovating with our design and manufacturing solutions.",
    },
    {
      id: 4,
      icon: <FaUsers className="text-[#000080] text-6xl" />,
      value: "8,000+",
      text: "active clinical trials are run with our MEDIDATA products.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4  mt-20 ">
      <div className="text-center  mx-auto mb-12 md:mx-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          Our Innovations Create a Positive Impact Everywhere
        </h2>
        <p className="text-gray-600 text-base leading-relaxed text-center">
          Since 1981, Dassault Systèmes, a{" "}
          <a href="#" className="text-[#000080] underline hover:text-black">
            science-based company
          </a>
          has provided solutions for sustainable innovation to a wide range of
          industries. While we started out helping drive the worlds greatest
          industrial transformations, were now also applying our knowledge and
          know-how to transform the organic world.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">
        {stats.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="w-30 h-30 flex items-center justify-center rounded-full border-4 border-gray-200 mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900">{item.value}</h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-6 py-2 border border-[#000080] text-[#000080] font-medium rounded-full hover:bg-black hover:border-black hover:text-white transition">
          Learn more facts
        </button>
      </div>
    </section>
  );
}
