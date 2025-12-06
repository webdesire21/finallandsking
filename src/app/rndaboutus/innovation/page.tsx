"use client";
import { useState, useEffect } from "react";
import Footer from "yes/Components/Footer";
import Industryheader from "yes/Components/Industryheader";
import IndustryHead from "yes/Components/Industryheader";
import InnovationImpact from "yes/Components/innovationComponent/InnovationImpact";
import Pebheader from "yes/Components/Pebheader";
import IndustryHeaderW from "yes/Components/PebheaderW";
import Rndfooter from "yes/Components/Rndfooter";
import Rndheader from "yes/Components/Rndheader";

export default function Innovation() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Rndheader />
      <InnovationImpact />
      <Rndfooter />
    </>
  );
}
