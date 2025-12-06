"use client";

import Industryfooter from "yes/Components/Industryfooter";
import Footer from "../../../Components/Footer";

import ContactSectionB from "../../../Components/businessAreas/ContactSectionB";
import KeyFeaturesB from "../../../Components/businessAreas/KeyFeaturesB";

import ProjectSliderB from "../../../Components/businessAreas/ProjectSliderB";
import QuickLinks from "../../../Components/businessAreas/QuickLinks";
import { Factory, Droplets, Truck, Building2 } from "lucide-react";
import Brand from "yes/Components/Brand";
import Industryheader from "yes/Components/Industryheader";

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
    title: "Trusted Partner in Water Solutions",
    description:
      "Landsking Infra has established itself as a reliable name in India’s water infrastructure sector, delivering complex projects from source development to bulk transmission and treatment.",
  },
  {
    title: "End-to-End Capabilities Across the Water Value Chain",
    description:
      "Landsking Infra provides comprehensive water infrastructure solutions, including source development through dams and barrages, advanced treatment facilities such as water and sewage treatment plants, efficient transmission systems involving tunnels, pipelines, and aqueducts, and integrated water supply schemes catering to both urban and rural areas.",
  },
  {
    title: "Proven Execution Track Record",
    description:
      "Landsking Infra has successfully completed over 100 water and sewage treatment plants and constructed more than 30 km of water supply and sewerage tunnels. The company possesses extensive expertise in building gravity dams and bulk water transfer systems, delivering large-scale water infrastructure projects for both public and private sector clients.",
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
    buttonText: "KNOW MORE",
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

export default function WaterSupplySanitation() {
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
      {/* <Pebheader/> */}
      <Industryheader />
      {/* <ContactSection/> */}

      <ContactSectionB
        title="Water Supply & Sanitation"
        subtitle="Building trust with every project"
        description="Expert providers of complete water infrastructure solutions across India."
        buttonText="Contact Us"
        buttonLink="/industrycontact"
        bgImage="/Bussinessareaimg/water.webp"
        testimonials={testimonialsData}
      />
      <KeyFeaturesB
        heading="Manufacturing & Process Plants"
        highlight=""
        img={{
          src: "/industryhome/Water Supply & Sanitation.jpg",
          alt: "Custom Cold Storage",
        }}
        description=""
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
