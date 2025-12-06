"use client";

import { useState, useEffect } from "react";
import Footer from "yes/Components/Footer";
import Insightbanner from "yes/Components/Insightbanner";
import Whitepaper from "yes/Components/insights/Whitepaper";
import Whitepaperbanner from "yes/Components/insights/Whitepaperbanner";
import Navbar from "yes/Components/Navbar";
import Pebfooter from "yes/Components/Pebfooter";
import Pebheader from "yes/Components/Pebheader";
import PebheaderW from "yes/Components/PebheaderW";
import ResourcesPage from "yes/Components/Resources";

export default function Pebinsightswhite() {
  return (
    <>
      <PebheaderW />
      <Whitepaperbanner />
      <Whitepaper />
      <Pebfooter />
    </>
  );
}
