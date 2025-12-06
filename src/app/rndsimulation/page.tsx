"use client";

import { useRef, useState, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import Rndfooter from "yes/Components/Rndfooter";
import Rndheader from "yes/Components/Rndheader";
import Image from "next/image";

type CardProps = {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
};

// ✅ Main Page Component
export default function Rndsimulation() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <Rndheader />

      <section className="w-full min-h-[400px] md:min-h-[500px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/aboutright.jpeg')`,
          }}
        >
          <div className="text-white text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug tracking-wide">
              Simulation Services
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white  py-9 md:py-12 px-4 sm:px-8 md:px-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl text-[#000080] md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
              Simulation Design for Manufacturing
            </h2>
          </div>

          <div className="grid md:grid-cols-1 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4 text-sm sm:text-base text-justify">
                Streamlining Production with CAD/CAE In today's competitive
                manufacturing landscape, Simulation Design for Manufacturing
                leverages the power of Computer-Aided Design (CAD) and
                Computer-Aided Engineering (CAE) to optimize product development
                and production processes. By integrating advanced simulation
                tools, manufacturers can reduce costs, minimize errors, and
                accelerate time-to-market. Here's how CAD/CAE enhances
                manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* new section */}
      <section className="bg-gray-50 py-6 md:py-16 px-4 sm:px-8 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#000080]">
            Our Simulation Services
          </h2>

          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col items-left text-left bg-white p-6  rounded-lg h-full">
              <img
                src="/simulation/Durability Analysis.jpg"
                alt="Durability Analysis"
                className="w-full h-58 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Durability Analysis
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Analyze and eliminate weak points in your design to prevent
                warranty claims and costly repairs. Ensure your products
                longevity and reliability.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
              <img
                src="/simulation/Multi-Body Dynamic Simulation (1).jpg"
                alt="Multi-Body Simulation"
                className="w-full h-58 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Multi-Body Simulation
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Simulate complex kinematic systems to evaluate component stress
                and suitability for various use cases. Optimize performance and
                reduce physical testing.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
              <img
                src="/simulation/Optimisation.png"
                alt="Optimization
"
                className="w-full h-58 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Optimization</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Find the sweet spot between weight, cost, and performance while
                considering manufacturing constraints. Create efficient and
                effective design.
              </p>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
              <img
                src="/simulation/dynamic.png"
                alt="Dynamic Simulation"
                className="w-full h-58 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Dynamic Simulation</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Analyze high-energy events to predict component and assembly
                behavior, reducing prototype costs and time-to-market while
                enabling informed design decisions
              </p>
            </div>

            {/* Column 5 */}
            <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
              <img
                src="/simulation/NVH Analysis.png"
                alt="NVH Analysis"
                className="w-full h-58 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">NVH Analysis</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Predict and minimize noise, vibration, and harshness in your
                product for a smoother user experience. Enhance comfort and
                satisfaction.
              </p>
            </div>

            {/* Column 6 */}
            <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
              <img
                src="/simulation/CFD.png"
                alt=" Computational Fluid Dynamics"
                className="w-full h-58 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                {" "}
                Computational Fluid Dynamics
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Optimize fluid and heat flow in your design for improved
                performance and efficiency. Reduce physical testing and
                prototyping.
              </p>
            </div>

            {/* Column 7 */}
            <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
              <img
                src="/simulation/Multi-Physics Simulation.png"
                alt="Multi-Physics Simulation"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Multi-Physics Simulation
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Combine multiple simulations to gain comprehensive performance
                insight. Ensure accuracy and reliability.
              </p>
            </div>

            {/* Column 8 */}
            <div className="flex flex-col items-left text-left bg-white p-6 shadow-md rounded-lg h-full">
              <img
                src="/simulation/system simulation.jpeg"
                alt="System Simulation"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">System Simulation</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Examine complex systems to improve product development
                efficiency and performance. Benchmark your designs against
                competitors to stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* end new section */}
      {/* image content */}
      <section className="w-full bg-white pt-12 pb-1  md:py-12 px-4 sm:px-8 md:px-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl text-[#000080] md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
                Simulation-Driven Manufacturing: Accelerating Innovation With
                CAD/CAE
              </h2>

              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                In today s fast-paced industrial environment, simulation-led
                design is transforming how products are engineered and
                manufactured. By harnessing Computer-Aided Design (CAD) and
                Computer-Aided Engineering (CAE), companies can explore ideas
                virtually, validate performance early, and fine-tune processes
                before production begins. With advanced CAD/CAE integration,
                manufacturers gain the ability to reduce development costs,
                eliminate design flaws, and shorten product cycles—delivering
                smarter, more reliable solutions to market faster.
              </p>

              <div className="flex items-center gap-4">
                <button className="border text-[#000080] border-blue-900 px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-[#000080] hover:text-white transition">
                  Get a Quote{" "}
                </button>
              </div>
            </div>

            <div className="relative w-full h-64 sm:h-80 md:h-[450px]">
              <img
                src="/sectorimg/ins.jpg"
                alt="Industrial Building"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Rndfooter />
    </>
  );
}
