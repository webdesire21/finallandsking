"use client";
import { useState, useEffect } from "react";

import Footer from "../../Components/Footer";

import InnovationImpact from "../../Components/innovationComponent/InnovationImpact";
import Navbar from "yes/Components/Navbar";

export default function Innovation() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Navbar />
      <InnovationImpact />

      <Footer />
    </>
  );
}
