"use client";
import { useState } from "react";

import Footer from "../../Components/Footer";

import LeadershipBanner from "../../Components/leadershipComponet/LeadershipBanner";
import LeadershipCards from "../../Components/leadershipComponet/LeadershipCards";
import Navbar from "yes/Components/Navbar";

export default function Leadership() {
  // const [active, setActive] = useState(0);

  return (
    <>
      <Navbar />
      <LeadershipBanner />
      <LeadershipCards />
      <Footer />
    </>
  );
}
