"use client";

import Footer from "../../Components/Footer";

import MissionBanner from "../../Components/missionComponent/MissionBanner";
import HumanInnovation from "../../Components/missionComponent/HumanInnovation";
import Sustainability from "../../Components/missionComponent/Sustainability";
import CustomerStories from "../../Components/missionComponent/CustomerStories";
import BusinessPractices from "../../Components/missionComponent/BusinessPractices";
import InterestedSection from "../../Components/missionComponent/InterestedSection";
import Navbar from "yes/Components/Navbar";

export default function Mission() {
  return (
    <>
      {/* <Pebheader/> */}
      <Navbar />
      <MissionBanner />
      <HumanInnovation />
      <Sustainability />
      <CustomerStories />
      <BusinessPractices />
      <InterestedSection />
      <Footer />
    </>
  );
}
