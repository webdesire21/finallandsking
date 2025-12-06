"use client";
import { useState, useEffect } from "react";
import Footer from "yes/Components/Footer";
import Industryfooter from "yes/Components/Industryfooter";
import Industryheader from "yes/Components/Industryheader";
import IndustryHead from "yes/Components/Industryheader";
import Industryheadsecond from "yes/Components/Industryheadsecond";
import InnovationImpact from "yes/Components/innovationComponent/InnovationImpact";
import IndustryHeaderW from "yes/Components/PebheaderW";

export default function Innovation() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Industryheadsecond />
      <InnovationImpact />
      <Industryfooter />
    </>
  );
}
