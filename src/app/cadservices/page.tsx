"use client";

import { ReactNode } from "react";
import Image from "next/image";
import Rndheader from "yes/Components/Rndheader";
import Rndfooter from "yes/Components/Rndfooter";

// ✅ Import Icons
import {
  FaCogs,
  FaBolt,
  FaTools,
  FaWind,
  FaFireAlt,
  FaWater,
  FaRocket,
  FaFan,
  FaTachometerAlt,
  FaRegSnowflake,
  FaWaveSquare,
  FaProjectDiagram,
  FaRadiation,
} from "react-icons/fa";
import {
  GiVibratingShield,
  GiHeatHaze,
  GiChemicalDrop,
  GiWaterDrop,
  GiSmokeBomb,
  GiJetFighter,
  GiPressureCooker,
} from "react-icons/gi";

// ✅ Card Props Type
type CardProps = {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
};

// ✅ Card Component
function Card({ image, icon, title, description }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-lg">
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-black opacity-0 transition-all duration-500 group-hover:w-[88%] group-hover:opacity-100"></div>
      </div>

      {/* Icon */}
      <div className="relative -mt-8 ml-auto mr-4 bg-[#000080] p-3 rounded shadow-lg flex items-center justify-center">
        {icon}
      </div>

      {/* Text */}
      <div className="px-5 pb-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold tracking-wide mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base tracking-wide mb-5 flex-1">
          {description}
        </p>
      </div>
    </div>
  );
}

// ✅ Main Page Component
export default function Rndexplore() {
  return (
    <>
      <Rndheader />

      {/* Hero Section */}
      <section className="w-full min-h-[400px] md:min-h-[590px] flex flex-col md:flex-row">
        <div
          className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/rnd/cadone.jpeg')`,
          }}
        >
          <div className="text-white text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug tracking-wide">
              CFD & CAE Services
            </h1>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="w-full bg-white py-6 md:py-9 px-4 sm:px-8 md:px-14">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
              Precision CFD & CAE Services
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-64 sm:h-80 md:h-[450px]">
              <Image
                src="/rnd/cad.jpeg"
                alt=" Precision CFD & CAE Services
            "
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Harness the combined power of Computational Fluid Dynamics (CFD)
                and Computer-Aided Engineering (CAE) to simulate, analyze, and
                refine designs long before physical prototypes exist. By
                creating a digital twin of real-world conditions, engineers can
                visualize performance, reduce trial-and-error, and unlock
                smarter product development. From fluid flow and heat transfer
                to structural durability and system behavior, CFD and CAE enable
                manufacturers to predict outcomes, minimize risks, and cut down
                production costs—all while accelerating time-to-market.
              </p>

              <div className="flex items-center gap-4">
                <button
                  className="border text-[#000080] border-[#000080] px-6 py-2 hover:bg-[#000080] hover:text-white transition"
                  onClick={() => (window.location.href = "/rnd-contact")}
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDER */}
      <main className="bg-white px-4 sm:px-6 lg:px-12 md:mx-1">
        <section className="  py-5 md:py-8 px-4 sm:px-6 md:px-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl text-[#000080] md:text-3xl font-bold leading-snug max-w-4xl mx-auto mb-5">
              Advanced CAE Services
            </h2>
          </div>

          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ✅ Each Card with relevant icon */}
            <Card
              image="/cad/static.jpg"
              icon={<FaCogs size={38} className="text-white" />}
              title="Static Structural Analysis"
              description="Evaluates the response of components under steady forces, loads, and constraints. Identifies high-stress regions and ensures compliance with safety standards."
            />
            <Card
              image="/cadservice/explt.png"
              icon={<FaBolt size={38} className="text-white" />}
              title="Explicit Dynamic Analysis"
              description="Simulates short-duration, high-impact events such as crashes or explosions, capturing complex nonlinear behaviors."
            />
            <Card
              image="/cadservice/fatigue.jpg"
              icon={<FaTools size={38} className="text-white" />}
              title="Fatigue & Durability Analysis"
              description="Predicts service life of parts under cyclic stresses, minimizing failures and ensuring long-term reliability."
            />
            <Card
              image="/cad/nvh.jpg"
              icon={<GiVibratingShield size={38} className="text-white" />}
              title="NVH (Noise, Vibration & Harshness)"
              description="Analyzes vibration, acoustic, and harshness behavior to improve comfort, safety, and product quality."
            />
            <Card
              image="/cadservice/thermal.jpeg"
              icon={<GiHeatHaze size={38} className="text-white" />}
              title="Thermal & Heat Transfer Analysis"
              description="Examines temperature influence, predicts thermal stresses, and supports cooling optimization."
            />
            <Card
              image="/cadservice/body.jpeg"
              icon={<FaProjectDiagram size={38} className="text-white" />}
              title="Multi-Body Dynamic Simulation"
              description="Models the motion and interaction of mechanical parts for performance and efficiency."
            />
            <Card
              image="/cad/aero.jpg"
              icon={<FaWind size={38} className="text-white" />}
              title="Aerodynamic & Aeroelastic Studies (CFD + CAE)"
              description="Analyzes airflow and vibration-induced instabilities to improve performance and stability."
            />
            <Card
              image="/cad/hydra.jpg"
              icon={<GiPressureCooker size={38} className="text-white" />}
              title="Hydraulic & Pneumatic System Analysis"
              description="Simulates fluid-powered systems for efficiency, pressure control, and reliability."
            />
            <Card
              image="/cadservice/fluid.png"
              icon={<FaWaveSquare size={38} className="text-white" />}
              title="Fluid-Structure Interaction (FSI)"
              description="Studies mutual influence between fluid flow and solid deformation to ensure design safety."
            />
            <Card
              image="/cad/th.jpg"
              icon={<FaFireAlt size={38} className="text-white" />}
              title="Combustion & Thermal Management"
              description="Models combustion behavior and optimizes fuel efficiency and cooling strategies."
            />
            <Card
              image="/cad/sonic.jpg"
              icon={<GiJetFighter size={38} className="text-white" />}
              title="Hypersonic & High-Mach Flows"
              description="Simulates extreme aerodynamic conditions for aerospace and defense applications."
            />
            <Card
              image="/cadservice/speed.jpg"
              icon={<FaFan size={38} className="text-white" />}
              title="Low-Speed & Ventilation Flows"
              description="Optimizes air distribution in ventilation and environmental systems."
            />
            <Card
              image="/cadservice/model.jpg"
              icon={<GiChemicalDrop size={38} className="text-white" />}
              title="Reactive & Chemical Flows"
              description="Models combustion, gasification, and industrial chemical reactors for efficiency."
            />
            <Card
              image="/cadservice/turb.jpeg"
              icon={<FaTachometerAlt size={38} className="text-white" />}
              title="Turbulence & Transition Modeling"
              description="Captures flow instabilities and turbulence phenomena for accurate aerodynamic predictions."
            />
            <Card
              image="/cadservice/droplet.jpg"
              icon={<GiWaterDrop size={38} className="text-white" />}
              title="Droplet & Spray Dynamics"
              description="Analyzes droplet breakup and spray distribution for fuel, agriculture, and pharma uses."
            />
            <Card
              image="/cadservice/cooling.jpg"
              icon={<FaRegSnowflake size={38} className="text-white" />}
              title="Cooling & Heat Exchange Systems"
              description="Simulates air and liquid cooling systems to improve energy use and thermal control."
            />
            <Card
              image="/cadservice/vibration.JPG"
              icon={<FaRadiation size={38} className="text-white" />}
              title="Flow-Induced Vibration Analysis"
              description="Studies fluid-induced vibrations to prevent fatigue and noise in mechanical systems."
            />
            <Card
              image="/cad/pol.png"
              icon={<GiSmokeBomb size={38} className="text-white" />}
              title="Environmental & Pollution Dispersion"
              description="Predicts pollutant and smoke dispersion to support sustainable, compliant designs."
            />
            <Card
              image="/cad/prop.jpg"
              icon={<FaRocket size={38} className="text-white" />}
              title="Propulsion & Jet Flow Studies"
              description="Models jet engines and propulsion systems to improve thrust and noise control."
            />
            <Card
              image="/cad/cav.png"
              icon={<FaWater size={38} className="text-white" />}
              title="Cavitation & Multiphase Phenomena"
              description="Analyzes vapor formation, bubble collapse, and fluid cavitation for reliability."
            />
          </div>
        </section>
      </main>

      {/* Info Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-8 md:px-16 text-center ">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-black uppercase">
          Driving Innovation with Advanced Engineering Solutions
        </h2>
        <div className="w-12 h-[1px]  mx-auto mt-2 mb-6 relative"></div>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          Transform ideas into reality with our cutting-edge CFD and CAE
          expertise. From performance validation to thermal and structural
          optimization, we deliver precise simulations that enhance efficiency,
          reliability, and innovation across every stage of product development.
        </p>
      </section>

      <Rndfooter />
    </>
  );
}
