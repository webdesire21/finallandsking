"use client";

import { useState, useEffect } from "react";
import Footer from "yes/Components/Footer";
import Insightbanner from "yes/Components/Insightbanner";
import Blogss from "yes/Components/insights/Blog";
import Blogbanner from "yes/Components/insights/Blogbanner";
import Pebfooter from "yes/Components/Pebfooter";
import PebheaderW from "yes/Components/PebheaderW";

export default function Pebblogs() {
  return (
    <>
      <PebheaderW />
      <Blogbanner />
      <Blogss />
      <Pebfooter />
    </>
  );
}
