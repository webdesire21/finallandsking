"use client";

import { useState, useEffect } from "react";
import Footer from "yes/Components/Footer";
import Insightbanner from "yes/Components/Insightbanner";
import Casestudy from "yes/Components/insights/Casestudy";
import Casestudiesbanner from "yes/Components/insights/Casestudybanner";
import Whitepaperbanner from "yes/Components/insights/Whitepaperbanner";
import Navbar from "yes/Components/Navbar";
import Pebfooter from "yes/Components/Pebfooter";
import Pebheader from "yes/Components/Pebheader";
import PebheaderW from "yes/Components/PebheaderW";
import ResourcesPage from "yes/Components/Resources";

export default function Pebcasestudy() {
  return (
    <>
      <PebheaderW />
      <Casestudiesbanner />
      <Casestudy />
      <Pebfooter />
    </>
  );
}
