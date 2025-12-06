"use client";

import Insightbanner from "yes/Components/Insightbanner";
import Broucherbanner from "yes/Components/insights/Broucherbanner";
import Brouchers from "yes/Components/insights/Brouchers";
import ResourcesPage from "yes/Components/Resources";
import Rndfooter from "yes/Components/Rndfooter";
import Rndheader from "yes/Components/Rndheader";

export default function Rndbrouchers() {
  return (
    <>
      <Rndheader />
      <Broucherbanner />
      <Brouchers />
      <Rndfooter />
    </>
  );
}
