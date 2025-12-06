"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ import router
import Footer from "../../Components/Footer";
import Industryheader from "yes/Components/Industryheader";
import Industryplatform from "yes/Components/Industryplatform";
import IndustrySlider from "yes/Components/IndustrySlider";
import IndustryaboutUs from "yes/Components/Industryabout";
import ServicesSlider from "yes/Components/ServicesSlider";
import Explore from "yes/Components/Explore";
import { motion, AnimatePresence } from "framer-motion";
import IndustrySector from "yes/Components/Industrysectors";
import Industrybanner from "yes/Components/Industrybanner";
import Industryfooter from "yes/Components/Industryfooter";
import Head from "next/head";

export default function Industryinstallation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Industry Installation </title>
        <meta
          name="Best Industrial Construction Company - Landsking Infra"
          content="As a leading EPC contractor, Landsking Infra provides complete industrial construction services, including turnkey projects and heavy industrial building construction."
        />
      </Head>
      <Industryheader />
      <Industrybanner />
      <IndustrySector />
      <Industryplatform />
      <IndustryaboutUs />
      <IndustrySlider />
      <ServicesSlider />
      <Explore />
      <Industryfooter />
    </>
  );
}
