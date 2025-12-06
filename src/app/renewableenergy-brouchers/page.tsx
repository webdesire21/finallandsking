"use client";

import Insightbanner from "yes/Components/Insightbanner";
import Broucherbanner from "yes/Components/insights/Broucherbanner";
import Brouchers from "yes/Components/insights/Brouchers";
import Renewfooter from "yes/Components/Renewable/Renewfooter";
import Renewableheader from "yes/Components/Renewableheader";
import ResourcesPage from "yes/Components/Resources";

export default function Renewablenergybrouchers() {
  return (
    <>
      <Renewableheader />
      <Broucherbanner />
      <Brouchers />
      <Renewfooter />
    </>
  );
}
