"use client";
import { useState, useEffect } from "react";
import Footer from "yes/Components/Footer";
import Industryfooter from "yes/Components/Industryfooter";

import IndustryHead from "yes/Components/Industryheader";
import LeadershipBanner from "yes/Components/leadershipComponet/LeadershipBanner";
import LeadershipCards from "yes/Components/leadershipComponet/LeadershipCards";

export default function Leadership() {
  const [active, setActive] = useState(0);

  return (
    <>
      <IndustryHead />
      <LeadershipBanner />
      <LeadershipCards />
      <Industryfooter />
    </>
  );
}
