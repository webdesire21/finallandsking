"use client";

import Insightbanner from "yes/Components/Insightbanner";
import Casestudy from "yes/Components/insights/Casestudy";
import Casestudiesbanner from "yes/Components/insights/Casestudybanner";
import ResourcesPage from "yes/Components/Resources";
import Rndfooter from "yes/Components/Rndfooter";
import Rndheader from "yes/Components/Rndheader";

export default function Rndcasestudy() {
  return (
    <>
      <Rndheader />
      <Casestudiesbanner />
      <Casestudy />
      <Rndfooter />
    </>
  );
}
