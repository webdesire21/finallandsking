"use client";

import { useState, useEffect } from "react";
import Footer from "yes/Components/Footer";
import Insightbanner from "yes/Components/Insightbanner";
import Navbar from "yes/Components/Navbar";
import ResourcesPage from "yes/Components/Resources";

export default function Resources() {
  return (
    <>
      <Navbar />
      <Insightbanner />
      <ResourcesPage />
      <Footer />
    </>
  );
}
