"use client";
import Footer from "yes/Components/Footer";
import Industryfooter from "yes/Components/Industryfooter";
import IndustryHead from "yes/Components/Industryheader";
import BusinessPractices from "yes/Components/missionComponent/BusinessPractices";
import CustomerStories from "yes/Components/missionComponent/CustomerStories";
import HumanInnovation from "yes/Components/missionComponent/HumanInnovation";
import InterestedSection from "yes/Components/missionComponent/InterestedSection";
import MissionBanner from "yes/Components/missionComponent/MissionBanner";
import Sustainability from "yes/Components/missionComponent/Sustainability";

export default function Mission() {
  return (
    <>
      <IndustryHead />
      <MissionBanner />
      <HumanInnovation />
      <Sustainability />
      <CustomerStories />
      <BusinessPractices />
      <InterestedSection />
      <Industryfooter />
    </>
  );
}
