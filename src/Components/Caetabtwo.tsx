"use client";

import { useState } from "react";

export default function Caetabtwo() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    {
      title: " Computational Fluid Dynamics (CFD)",
      heading: " Computational Fluid Dynamics (CFD): Mastering Flow",
      paragraph:
        "Computational Fluid Dynamics (CFD) is the digital science of understanding how gases and liquids move around your designs. By merging fluid science with thermodynamics, CFD generates detailed insights into complex airflow, thermal management, and fluid momentum.",
      video: "/rndvideo/Multi-Physics video.mp4",
    },
    {
      title: "Finite Element Analysis (FEA)",
      heading: "Finite Element Analysis (FEA): Guaranteeing Strength",
      paragraph:
        "Finite Element Analysis (FEA) is the cornerstone of structural validation, predicting exactly how your design will endure forces like heat, vibration, and static loads. This method meticulously dissects complex geometries into a precise digital mesh, allowing us to calculate and map out every point of stress, strain, and displacement. FEA doesn't just check designs; it optimizes them. We use the results to guide material removal for lighter components and eliminate hidden failure risks, ensuring your products are robust and cost-effective from the outset.",
      video: "/rndvideo/Multi-Physics video.mp4",
    },
    {
      title: " Multi-Physics",
      heading: " Multi-Physics: Modeling the Real World",
      paragraph:
        "Multi-Physics (or Coupled) simulation is our advanced method for solving several complex engineering equations simultaneously. Instead of studying isolated components, this technique lets us model how different phenomena—like heat, fluid flow, and structural stress—all interact within your system.This holistic approach is critical for holistic system analysis. By allowing these factors to influence each other digitally, we gain a precise, comprehensive view of your product's behavior. Landsking InfraInfra uses this power to solve major engineering problems, giving you a deeper grasp of how materials and structures perform under real, interconnected conditions, significantly boosting your optimization results.",
      video: "/rndvideo/Multi-Physics video.mp4",
    },
  ];

  return (
    <div className="mx-auto px-6 py-12 md:px-18">
      <div className="flex flex-wrap justify-between gap-2 border-b border-gray-300 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`py-2 px-4 md:px-6 font-medium transition-all duration-200 text-sm sm:text-base rounded-md
              ${
                activeIndex === index
                  ? "bg-[#000080] text-white md:bg-transparent md:text-[#000080] md:border-b-2 md:border-[#000080]"
                  : "bg-gray-200 text-gray-700 md:bg-white hover:bg-[#000080] hover:text-white"
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
          {tabs[activeIndex].heading}
        </h2>
        <p className="text-gray-600 text-justify text-base md:text-lg">
          {tabs[activeIndex].paragraph}
        </p>
        <video
          src={tabs[activeIndex].video}
          controls
          autoPlay
          loop
          muted
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
