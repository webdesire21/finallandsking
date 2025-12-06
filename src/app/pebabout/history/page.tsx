"use client";
import { useState } from "react";

// import ProgressSection from "../../Components/companyComponent/ProgressSection";
// import AcquisitionsSection from "../../Components/companyComponent/AcquisitionsSection";

import Footer from "yes/Components/Footer";
import CompanySlider from "yes/Components/companyComponent/CompanySlider";
import TimelineTabs from "yes/Components/companyComponent/TimelineTabs";
import ProgressSection from "yes/Components/companyComponent/ProgressSection";
import AcquisitionsSection from "yes/Components/companyComponent/AcquisitionsSection";
import PebheaderW from "yes/Components/PebheaderW";
import Pebfooter from "yes/Components/Pebfooter";

export default function History() {
  // const [active, setActive] = useState(0);

  return (
    <>
      <PebheaderW />
      <CompanySlider />
      <TimelineTabs />
      <ProgressSection />
      <AcquisitionsSection />

      <Pebfooter />
    </>
  );
}
