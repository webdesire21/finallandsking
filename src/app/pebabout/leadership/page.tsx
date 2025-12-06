"use client";
import Footer from "yes/Components/Footer";

import LeadershipBanner from "yes/Components/leadershipComponet/LeadershipBanner";
import LeadershipCards from "yes/Components/leadershipComponet/LeadershipCards";
import Pebfooter from "yes/Components/Pebfooter";
import Pebheader from "yes/Components/Pebheader";

export default function Leadership() {
  return (
    <>
      <Pebheader />
      <LeadershipBanner />
      <LeadershipCards />
      <Pebfooter />
    </>
  );
}
