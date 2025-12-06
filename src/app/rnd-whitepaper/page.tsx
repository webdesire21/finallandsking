"use client";

import Insightbanner from "yes/Components/Insightbanner";
import Whitepaper from "yes/Components/insights/Whitepaper";
import Whitepaperbanner from "yes/Components/insights/Whitepaperbanner";
import ResourcesPage from "yes/Components/Resources";
import Rndfooter from "yes/Components/Rndfooter";
import Rndheader from "yes/Components/Rndheader";

export default function Rndwhitepaper() {
  return (
    <>
      <Rndheader />
      <Whitepaperbanner />
      <Whitepaper />
      <Rndfooter />
    </>
  );
}
