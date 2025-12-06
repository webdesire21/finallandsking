"use client";

import Insightbanner from "yes/Components/Insightbanner";
import Casestudy from "yes/Components/insights/Casestudy";
import Casestudiesbanner from "yes/Components/insights/Casestudybanner";
import Renewfooter from "yes/Components/Renewable/Renewfooter";
import Renewableheader from "yes/Components/Renewableheader";
import ResourcesPage from "yes/Components/Resources";

export default function Renewablenergycasestudy() {
  return (
    <>
      <Renewableheader />
      <Casestudiesbanner />
      <Casestudy />
      <Renewfooter />
    </>
  );
}
