"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import {
  Target,
  MapPin,
  Scale,
  FileSignature,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

const features = [
  {
    title: "Define Strategy",
    description:
      "We begin with a deep-dive consultation to lock in your objectives and constraints. This step creates a precise, measurable project scope, ensuring our focus is aligned perfectly with your long-term vision.",
    icon: <Lightbulb className="text-[#000080] text-4xl mb-4" />,
  },
  {
    title: "Filter Options",
    description:
      "We use our market data and insights to filter options, presenting only verified, high-potential assets. This streamlined approach ensures you review only the absolute best matches, saving time and mitigating risk.",
    icon: <Target className="text-[#000080] text-4xl mb-4" />,
  },
  {
    title: "Site Validation",
    description:
      "Your dedicated expert manages and coordinates all property inspections and on-site analysis. We provide technical validation and informed assessment of infrastructure and physical condition during every visit.",
    icon: <MapPin className="text-[#000080] text-4xl mb-4" />,
  },
  {
    title: "Strategic Negotiation",
    description:
      "We leverage transactional experience and market intelligence to secure the asset at the 'Right Price' under the most advantageous terms. Our goal is to achieve the optimal financial agreement while protecting your interests.",
    icon: <Scale className="text-[#000080] text-4xl  mb-4 " />,
  },
  {
    title: "Deal Formalization",
    description:
      "We oversee the preparation and binding of all formal agreements (LOI/Agreement to Sell). This step securely formalizes the commitment between all parties and locks in the transaction parameters.",
    icon: <FileSignature className="text-[#000080] text-4xl mb-4" />,
  },
  {
    title: "Legal Closure",
    description:
      "Our team manages rigorous due diligence, title verification, and transfer process to ensure zero ambiguity. The transaction is fully closed and legally clear, guaranteeing you undisputed ownership.",
    icon: <ShieldCheck className="text-[#000080] text-4xl mb-4" />,
  },
];
export default function OurLineage() {
  return (
    <section className="text-center px-4 sm:px-6 md:mx-5 lg:mx-20 pt-0 md:pt-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-black tracking-wide text-[#000080] uppercase mb-6 md:mb-8">
        How We Work
      </h2>

      {/* Paragraph */}
      <p className="text-sm sm:text-base md:text-lg text-gray  max-w-6xl mx-auto mb-8 md:mb-10 text-justify md:text-center">
        We’ve engineered a process that converts client needs into realized
        assets, ensuring strategic simplicity from start to finish. Our method
        is designed to provide end-to-end clarity, seamless communication, and a
        result-driven experience for every client. The Landsking Infra Workflow:
        We initiate by understanding your precise requirement and move
        systematically through shortlisting, site organization, negotiation, and
        deal finalization, concluding with complete legal documentation. Every
        step is managed by your dedicated real estate expert.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-3 mb-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white hover:bg-gray-100 rounded-2xl shadow-md transition-all duration-300 flex flex-col items-center text-center"
          >
            {feature.icon}
            <h3 className="text-xl md:text-[23px] font-semibold text-[#000080] mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-justify text-md md:text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
