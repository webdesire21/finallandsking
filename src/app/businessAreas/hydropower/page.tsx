"use client";
import { useState, useEffect } from "react";

import Footer from "../../../Components/Footer";

import ContactSectionB from "../../../Components/businessAreas/ContactSectionB";
import KeyFeaturesB from "../../../Components/businessAreas/KeyFeaturesB";
import PreEngineeredProductsB, {
  Area,
} from "../../../Components/businessAreas/PreEngineeredProductsB";
import ProjectSliderB from "../../../Components/businessAreas/ProjectSliderB";
import QuickLinks from "../../../Components/businessAreas/QuickLinks";
import { Factory, Droplets, Truck, Building2 } from "lucide-react";
import Brand from "yes/Components/Brand";
import Industryheader from "yes/Components/Industryheader";
import Industryfooter from "yes/Components/Industryfooter";

const testimonialsData = [
  {
    name: "Ramesh Kumar",
    location: "Factory Shed | Pune, Maharashtra",
    img: "/product/s1.jpg",
    text: "The process was smooth and professional. I could easily plan and execute my project with their support.",
    quoteLink: "/quote",
  },
  {
    name: "Anita Sharma",
    location: "Warehouse | Ahmedabad, Gujarat",
    img: "/product/s1.jpg",
    text: "Great experience! The delivery was on time, and the team guided me throughout the project.",
  },
];

const featuresData = [
  {
    title: "Green Belt and Riparian Zone Development",
    description:
      "Plantation along dams, rivers, and reservoirs to preserve biodiversity, improve air quality, and support ecological balance.",
  },
  {
    title: "Slope Stabilization and Terracing",
    description:
      "Soil retention and erosion control through natural methods and contouring around hilly and sloped project areas.",
  },
  {
    title: "Riverbank and Embankment Landscaping",
    description:
      "Strengthening embankments and beautifying river edges using native vegetation and bioengineering techniques.",
  },
  {
    title: "Erosion Control and Bioengineering",
    description:
      "Application of coir mats, hydroseeding, and vegetative measures to reinforce vulnerable soil zones.",
  },
  {
    title: "Facility and Powerhouse Area Landscaping",
    description:
      "Aesthetic landscaping around administrative buildings, control rooms, and surface powerhouses to improve the visual and environmental quality.",
  },
];

const areasData: Area[] = [
  {
    id: 1,
    title: "Prefabricated",
    subtitle: "Prefabricated Multi-Storey Building Manufacturer",
    description:
      "We specialize in designing and delivering prefabricated multi-storey buildings that ensure durability, faster construction, and cost-effectiveness for diverse applications.",
    image: "/industry.jpg",
  },
  {
    id: 2,
    title: "Warehouse",
    subtitle: "Warehouse Solutions",
    description:
      "Our warehouses are engineered for maximum space utilization, robust structure, and efficient storage solutions.",
    image: "/expertise/third.png",
  },
];

const HOME_TABS = [
  {
    title: "Pre Engineered Buildings",
    headline: "High-Performance Pre-Engineered Steel Buildings",
    body: "Landsking InfraInfra delivers modern, durable, and cost-efficient pre-engineered buildings.",
    img: "/about.png",
    buttonText: "VIEW MORE",
    url: "/menupage",
  },
  {
    title: "EPC Solutions",
    headline: "End-to-End EPC Solutions",
    body: "From concept to commissioning, our EPC solutions ensure seamless project execution.",
    img: "/solution/stell.jpg",
    buttonText: "VIEW MORE",
    url: "/epcsolutions",
  },
  {
    title: "EPC Solutions",
    headline: "End-to-End EPC Solutions",
    body: "From concept to commissioning, our EPC solutions ensure seamless project execution.",
    img: "/solution/stell.jpg",
    buttonText: "VIEW MORE",
    url: "/epcsolutions",
  },
  {
    title: "EPC Solutions",
    headline: "End-to-End EPC Solutions",
    body: "From concept to commissioning, our EPC solutions ensure seamless project execution.",
    img: "/solution/stell.jpg",
    buttonText: "VIEW MORE",
    url: "/epcsolutions",
  },
];

const HOME_PROJECTS = [
  {
    img: "/slider/p1.jpg",
    location: "Powai, Mumbai",
    buttonText: "KNOW MORE",
    url: "/projects/elixir",
  },
  {
    img: "/slider/p2.jpg",
    location: "Sewri, Mumbai",
    buttonText: "KNOW MORE",
    url: "/projects/gateway",
  },
  {
    img: "/slider/p3.jpg",
    location: "Ghatkopar, Mumbai",
    buttonText: "KNOW MORE",
    url: "/projects/crossroads",
  },
  {
    title: "Elixir Reserve",
    status: "Ongoing",
    img: "/slider/p1.jpg",
    location: "Powai, Mumbai",
    f: "KNOW MORE",
    url: "/projects/elixir",
  },
  {
    title: "The Gateway",
    status: "Ongoing",
    img: "/slider/p2.jpg",
    location: "Sewri, Mumbai",
    buttonText: "KNOW MORE",
    url: "/projects/gateway",
  },
  {
    title: "77 Crossroads",
    status: "Ongoing",
    img: "/slider/p3.jpg",
    location: "Ghatkopar, Mumbai",
    buttonText: "KNOW MORE",
    url: "/projects/crossroads",
  },
];

export default function HydroPower() {
  const [active, setActive] = useState(0);

  const links = [
    {
      title: "Industrial Installation",
      subtitle: "Smart manufacturing",
      icon: <Factory size={26} />,
      url: "/businessAreas/industrialinstallation",
    },
    {
      title: "Water Technology",
      subtitle: "Pure and sustainable",
      icon: <Droplets size={26} />,
      url: "/businessAreas/water-technology",
    },
    {
      title: "Transport & Mobility",
      subtitle: "Efficient movement",
      icon: <Truck size={26} />,
      url: "/businessAreas/transport-mobility",
    },
    {
      title: "Industry & Buildings",
      subtitle: "Energy smart design",
      icon: <Building2 size={26} />,
      url: "/businessAreas/industry-building",
    },
  ];

  return (
    <>
      <Industryheader />
      <ContactSectionB
        title="Hydro Power"
        subtitle="Building trust with every project"
        description="Hydro power is the generation of electricity using the energy of flowing water."
        buttonText="Contact Us"
        buttonLink="/industrycontact"
        bgImage="/Bussinessareaimg/hydro.jpg"
        testimonials={testimonialsData}
      />
      <KeyFeaturesB
        heading="Manufacturing & Process Plants"
        highlight=""
        img={{
          src: "/Bussinessareaimg/manufacturingProcessPlantss.webp",
          alt: "Hydropower",
        }}
        description="Landsking Infra delivers expert landscaping for hydro power projects, including works in hilly and riverine terrains."
        features={featuresData}
      />

      <ProjectSliderB
        heading="DISCOVER OUR PROJECTS"
        projects={HOME_PROJECTS}
      />

      <QuickLinks heading="Quick Links" links={links} />

      <Brand />

      <Industryfooter />
    </>
  );
}
