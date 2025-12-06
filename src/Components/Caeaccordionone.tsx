"use client";

import { useState } from "react";

export default function Caeaccordionone() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    {
      title: "Dynamic Simulation",
      heading: "Dynamic Simulation: Testing the Unthinkable",
      paragraph:
        "Dynamic simulation is how we model your product's performance against real-world chaos, like high-speed impacts or intense, time-varying forces. We generate precise digital replays of these events, offering engineers immediate, deep insight into system behavior. This capability is used to test and refine critical components—like engines and drivetrains—before any physical materials are committed. By catching flaws early, we slash prototype costs and rapidly confirm your product's reliability and safety across diverse industries.",
      video: "/rndvideo/dynamic simulation video.mp4",
    },
    {
      title: "Optimisation",
      heading: "Optimisation: Engineering for Peak Efficiency",
      paragraph:
        "Optimisation uses advanced mathematical intelligence to create the best possible version of your product. Instead of settling for “good enough,” we apply powerful algorithms that simultaneously enhance performance, reduce costs, and minimize risk. This scientific approach identifies the perfect balance among design parameters, resulting in superior efficiency—products that are faster to develop and more cost-effective to operate—while maintaining exceptional quality through early detection of potential weaknesses. The outcome is a design that ensures lasting reliability and is inherently robust against failure.",
      video: "/rndvideo/dynamic simulation video.mp4",
    },

    {
      title: " Power of Model-Based Definition ",
      heading: "The Power of Model-Based Definition (MBD)",
      paragraph:
        "The core purpose of Model-Based Definition (MBD) is to establish a singular, authoritative digital record utilized across the entire product lifecycle—from initial concept through production, quality control, and servicing. This unified digital stream greatly improves team collaboration, drastically cuts down on manufacturing errors caused by misread drawings, and streamlines the whole production process. MBD is a leading component of the industry's shift to digital modernization, a field where Landsking InfraInfra is pioneering practices like the Digital Twin.",
      video: "/rndvideo/dynamic simulation video.mp4",
    },
    {
      title: "Multi-Body Simulation",
      heading: "Multi-Body Simulation (MBS): Mastering Interconnected Systems",
      paragraph:
        "Multi-Body Simulation (MBS) solves the puzzle of complex mechanical systems that have multiple moving, linked parts. By defining components as rigid bodies connected by specific joints and constraints, MBS accurately forecasts motion, forces, and internal stresses as the system operates. This predictive modeling is non-negotiable for refining automotive suspensions, robotics, and complex machinery. MBS empowers engineers to fine-tune performance, comfort, and safety characteristics virtually, guaranteeing reliable function in the final product.",
      video: "/rndvideo/dynamic simulation video.mp4",
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
