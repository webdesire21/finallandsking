"use client";
import { useEffect } from "react";

import PlatformP from "../../Components/PlatformP";
import AboutPebP from "../../Components/AboutPebP";
import MediaP from "../../Components/MediaP";
import PebBrandP from "../../Components/PebBrandP";
import ContactSection from "../../Components/ContactSection";
import Servicesone from "yes/Components/Servicesone";
import Pebheader from "yes/Components/Pebheader";
import BannerPEB from "../../Components/BannerPEB";
import Pebsolution from "yes/Components/Pebsolution";
import Pebslider from "yes/Components/Pebslider";
import Pebfooter from "yes/Components/Pebfooter";
import Insights from "yes/Components/Insights";

export default function PreEngineeredBuildings() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Pebheader />
      <BannerPEB />
      <AboutPebP />
      <Servicesone />
      <PlatformP />
      <Pebsolution />
      <Pebslider />
      <Insights />
      <MediaP />
      <PebBrandP />
      <ContactSection />
      <Pebfooter />
    </>
  );
}
