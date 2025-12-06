"use client";
import { useState, useEffect } from "react";
import Footer from "yes/Components/Footer";
import IndustryHead from "yes/Components/Industryheader";
import BusinessPractices from "yes/Components/missionComponent/BusinessPractices";
import CustomerStories from "yes/Components/missionComponent/CustomerStories";
import HumanInnovation from "yes/Components/missionComponent/HumanInnovation";
import InterestedSection from "yes/Components/missionComponent/InterestedSection";
import MissionBanner from "yes/Components/missionComponent/MissionBanner";
import Sustainability from "yes/Components/missionComponent/Sustainability";
import Pebheader from "yes/Components/Pebheader";
import Rndfooter from "yes/Components/Rndfooter";
import Rndheader from "yes/Components/Rndheader";

export default function Mission() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Rndheader />
      <MissionBanner />
      <HumanInnovation />
      <Sustainability />
      <CustomerStories />
      <BusinessPractices />
      <InterestedSection />
      <Rndfooter />
    </>
  );
}
