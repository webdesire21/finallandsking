"use client";

import { useState, useEffect } from "react";
import Footer from "yes/Components/Footer";
import Industryfooter from "yes/Components/Industryfooter";
import Industryheader from "yes/Components/Industryheader";
import Insightbanner from "yes/Components/Insightbanner";
import Blogss from "yes/Components/insights/Blog";
import Blogbanner from "yes/Components/insights/Blogbanner";
import Casestudy from "yes/Components/insights/Casestudy";
import Casestudiesbanner from "yes/Components/insights/Casestudybanner";
import Pebfooter from "yes/Components/Pebfooter";
import PebheaderW from "yes/Components/PebheaderW";

export default function Industrycasestudies() {
  return (
    <>
      <Industryheader />
      <Casestudiesbanner />
      <Casestudy />
      <Industryfooter />
    </>
  );
}
