"use client";

import Footer from "../../Components/Footer";

import CompanySlider from "../../Components/companyComponent/CompanySlider";
import TimelineTabs from "../../Components/companyComponent/TimelineTabs";
import ProgressSection from "../../Components/companyComponent/ProgressSection";
import AcquisitionsSection from "../../Components/companyComponent/AcquisitionsSection";
import Navbar from "yes/Components/Navbar";

export default function Company() {
  return (
    <>
      <Navbar />
      <CompanySlider />
      <TimelineTabs />
      <ProgressSection />
      <AcquisitionsSection />
      <Footer />
    </>
  );
}
