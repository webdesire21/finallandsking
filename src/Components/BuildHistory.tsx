"use client";

import { ArrowRight } from "lucide-react";

export default function BuildHistory() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">
          Who we are
        </h2>
        <button className="flex items-center gap-2 text-[#000080] font-semibold hover:underline">
          <span className="w-10 h-10 rounded-full bg-[#000080] flex items-center justify-center">
            <ArrowRight className="text-white w-5 h-5" />
          </span>
          Explore More Projects
        </button>
      </div>

      {/* Right Side */}
      <div className="text-gray-700 space-y-6">
        <p>
          Landsking Infra is one of India s Fastest Growing Companies as an
          Industrial Solution Provider, Work on engineering, procurement,
          construction (EPC), and maintenance companies. Landsking Infra works
          with Clients in diverse industries around the world to design,
          construct, and maintain their capital projects.
        </p>
        <p>
          Landsking InfraInfra Pvt. Ltd. with the Team Combined Experience have
          More than 350 Minor and Major Bridge and Super Structure and 68KM
          PMGSY Road work, 26 KM MS Pipe line and 610KM HDPE pipeline Excavation
          and laying , 4,65,000Sqft PEB Erection Work,3.5MW solar plant in Its
          Portfolio.
        </p>
      </div>
    </section>
  );
}
