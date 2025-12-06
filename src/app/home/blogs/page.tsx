"use client";

import { useState, useEffect } from "react";
import Footer from "yes/Components/Footer";
import Blogss from "yes/Components/insights/Blog";

import Blogbanner from "yes/Components/insights/Blogbanner";
import Navbar from "yes/Components/Navbar";

export default function Bloghome() {
  return (
    <>
      <Navbar />
      <Blogbanner />
      <Blogss />
      <Footer />
    </>
  );
}
