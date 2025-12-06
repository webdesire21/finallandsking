"use client";
import Footer from "yes/Components/Footer";
import BusinessPractices from "yes/Components/missionComponent/BusinessPractices";
import CustomerStories from "yes/Components/missionComponent/CustomerStories";
import HumanInnovation from "yes/Components/missionComponent/HumanInnovation";
import InterestedSection from "yes/Components/missionComponent/InterestedSection";
import MissionBanner from "yes/Components/missionComponent/MissionBanner";
import Sustainability from "yes/Components/missionComponent/Sustainability";
import Pebfooter from "yes/Components/Pebfooter";
import Pebheader from "yes/Components/Pebheader";

export default function Mission() {
  return (
    <>
      <Pebheader />
      <MissionBanner />
      <HumanInnovation />
      <Sustainability />
      <CustomerStories />
      <BusinessPractices />
      <InterestedSection />
      <Pebfooter />
    </>
  );
}
