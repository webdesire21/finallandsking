"use client";

import { useState, useEffect } from "react";
import Footer from "yes/Components/Footer";
import Insightbanner from "yes/Components/Insightbanner";
import Whitepaper from "yes/Components/insights/Whitepaper";
import Whitepaperbanner from "yes/Components/insights/Whitepaperbanner";
import Navbar from "yes/Components/Navbar";
import ResourcesPage from "yes/Components/Resources";
// import Whitepaper from "yes/Components/insights/Whitepaper";
export default function Whitepaperhome() {
  return (
    <>
      <Navbar />
      <Whitepaperbanner />
      <Whitepaper />
      <Footer />
    </>
  );
}
