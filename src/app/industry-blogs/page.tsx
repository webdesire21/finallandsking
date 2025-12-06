"use client";

import { useState, useEffect } from "react";
import Footer from "yes/Components/Footer";
import Industryfooter from "yes/Components/Industryfooter";
import Industryheader from "yes/Components/Industryheader";
import Insightbanner from "yes/Components/Insightbanner";
import Blogss from "yes/Components/insights/Blog";
import Blogbanner from "yes/Components/insights/Blogbanner";
import Pebfooter from "yes/Components/Pebfooter";
import PebheaderW from "yes/Components/PebheaderW";

export default function Industryblogs() {
  return (
    <>
      <Industryheader />
      <Blogbanner />
      <Blogss />
      <Industryfooter />
    </>
  );
}
