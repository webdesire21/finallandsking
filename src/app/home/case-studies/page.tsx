"use client";

import { useState, useEffect } from "react";
import Footer from "yes/Components/Footer";
import Insightbanner from "yes/Components/Insightbanner";
import Casestudy from "yes/Components/insights/Casestudy";
import Casestudiesbanner from "yes/Components/insights/Casestudybanner";
import Navbar from "yes/Components/Navbar";
import ResourcesPage from "yes/Components/Resources";

export default function Casestudyhome() {
  return (
    <>
      <Navbar />
      <Casestudiesbanner />
      <Casestudy />
      <Footer />
    </>
  );
}
