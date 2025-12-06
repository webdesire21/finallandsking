"use client";

import { useState } from "react";

export default function Caetabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    {
      title: "Crash Analysis",
      heading: "Crash Analysis (Dynamic Simulation)",
      paragraph:
        "Dynamic simulation is essential for testing vehicle crashworthiness and aviation safety—scenarios that are impractical to test repeatedly in the physical world. For cars, our analysis accurately models everything from passenger dummies and restraints to fuel systems and airbags, achieving near-perfect real-world validation. In aerospace, this ensures the structural resilience of aircraft under various flight conditions, including the extreme stress of an emergency landing.",
      video: "/rndvideo/Crash Analysis video.mp4",
    },
    {
      title: "Thermal",
      heading: "Thermal Analysis",
      paragraph:
        "Thermal Analysis examines temperature distribution, heat transfer, and thermal stresses in systems and components. Engineers use thermal simulation to ensure optimal heat management, energy efficiency, and material longevity. It helps prevent overheating, thermal expansion, and performance degradation in electronic devices, engines, and industrial machinery. Through accurate thermal modeling, engineers can enhance product reliability and operational safety across multiple industries.",
      video: "/choose/exprt.mp4",
    },

    {
      title: "Precision Mesh Generation",
      heading: "Precision Mesh Generation",
      paragraph:
        "Landsking InfraInfra excels at generating accurate and efficient meshes that perfectly conform to the intricate shapes of any project, guaranteeing the highest possible reliability in your simulations. We handle all types of meshes—structured, unstructured, hybrid, or adaptive—using the newest methods to customize the process for your specific requirements. Since a top-tier mesh is the bedrock of successful simulation, our commitment is to provide unmatched precision and effectiveness for all your engineering challenges.",
      video: "/choose/exprt.mp4",
    },
    {
      title: "Managing Noise, Vibration, Harshness",
      heading: "Managing Noise, Vibration, Harshness (NVH)",
      paragraph:
        "Landsking InfraInfra delivers vital Computer-Aided Engineering (CAE) insight that boosts product comfort, long-term dependability, and market perception. Our NVH service reliably pinpoints and resolves disruptive noise and vibration issues within mechanical systems. We move from initial analysis to advanced simulation to uncover the root cause of these disturbances, then develop effective strategies to reduce or eliminate them entirely.",
      video: "/choose/exprt.mp4",
    },
  ];

  return (
    <div className="mx-auto px-6 py-6 md:py-12 md:px-18">
      <div className="mx-auto px-4 pt-2 md:pt-12 pb-8 text-center">
        <h1 className="text-2xl text-[#000080] md:text-3xl font-bold tracking-tight">
          Our Expertise
        </h1>
      </div>

      <div className="flex flex-wrap text-justify md:justify-between gap-2 border-b border-gray-300 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`py-2 px-4  md:px-6 font-medium transition-all duration-200 text-sm sm:text-base rounded-md
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
        <h2 className="text-2xl  md:text-3xl font-bold text-[#000080]">
          {tabs[activeIndex].heading}
        </h2>
        <p className="text-gray-600 text-justify text-base md:text-lg">
          {tabs[activeIndex].paragraph}
        </p>

        {/* Video Display */}
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
