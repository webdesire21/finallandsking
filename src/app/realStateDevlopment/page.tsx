// pages/contact.jsx
"use client";

import ProjectsSection from "../../Components/RealState/ProjectsSection";
import VideoSection from "../../Components/RealState/VideoSection";
import ZigzagSection from "../../Components/RealState/ZigzagSection";
import OurLineage from "../../Components/RealState/OurLineage";

import PropertySearch from "../../Components/RealState/PropertySearch";
import SectorSlider from "../../Components/RealState/SectorSlider";
import LandmarkProjects from "../../Components/RealState/LandmarkProjects";
import NewsCorner from "../../Components/RealState/NewsCorner";
import AccoladesSlider from "../../Components/RealState/AccoladesSlider";
import FooterReal from "../../Components/RealState/FooterReal";
import ClientReal from "../../Components/RealState/ClientReal";
import Realstateheader from "yes/Components/Realstateheader";
import Realabout from "yes/Components/RealState/Realabout";
import Contact from "yes/Components/RealState/Contact";
import Services from "yes/Components/RealState/Services";

export default function RealStateDevlopment() {
  return (
    <>
      <Realstateheader />
      <VideoSection />
      <Services />
      {/* <ProjectsSection /> */}
      <ZigzagSection />
      <Realabout />
      <OurLineage />
      <PropertySearch />
      <SectorSlider />
      <LandmarkProjects />
      <ClientReal />
      <NewsCorner />
      <AccoladesSlider />
      <Contact />
      <FooterReal />
    </>
  );
}
