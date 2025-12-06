"use client";
import { useState, useEffect } from "react";

// import ProgressSection from "../../Components/companyComponent/ProgressSection";
// import AcquisitionsSection from "../../Components/companyComponent/AcquisitionsSection";
import Header from "yes/Components/Header";
import IndustryHead from "yes/Components/Industryheader";
import Footer from "yes/Components/Footer";
import CompanySlider from "yes/Components/companyComponent/CompanySlider";
import TimelineTabs from "yes/Components/companyComponent/TimelineTabs";
import ProgressSection from "yes/Components/companyComponent/ProgressSection";
import AcquisitionsSection from "yes/Components/companyComponent/AcquisitionsSection";
import Industryheader from "yes/Components/Industryheader";
import IndustryHeaderW from "yes/Components/PebheaderW";
import Industryheadsecond from "yes/Components/Industryheadsecond";
import Industryfooter from "yes/Components/Industryfooter";

export default function Company() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Industryheadsecond />
      <CompanySlider />
      <TimelineTabs />
      <ProgressSection />
      <AcquisitionsSection />

      <Industryfooter />
    </>
  );
}
