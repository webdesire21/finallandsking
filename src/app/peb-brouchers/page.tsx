"use client";

import { useState, useEffect } from "react";
import Footer from "yes/Components/Footer";
import Insightbanner from "yes/Components/Insightbanner";
import Broucherbanner from "yes/Components/insights/Broucherbanner";
import Brouchers from "yes/Components/insights/Brouchers";
import Navbar from "yes/Components/Navbar";
import Pebfooter from "yes/Components/Pebfooter";
import Pebheader from "yes/Components/Pebheader";
import PebheaderW from "yes/Components/PebheaderW";
import ResourcesPage from "yes/Components/Resources";

export default function Pebbrouchers() {
  return (
    <>
      <PebheaderW />
      <Broucherbanner />
      <Brouchers />
      <Pebfooter />
    </>
  );
}
