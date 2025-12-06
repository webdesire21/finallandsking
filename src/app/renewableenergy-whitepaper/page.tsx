"use client";

import Insightbanner from "yes/Components/Insightbanner";
import Whitepaper from "yes/Components/insights/Whitepaper";
import Whitepaperbanner from "yes/Components/insights/Whitepaperbanner";
import Renewfooter from "yes/Components/Renewable/Renewfooter";
import Renewableheader from "yes/Components/Renewableheader";
import ResourcesPage from "yes/Components/Resources";

export default function Renewablwhiteaper() {
  return (
    <>
      <Renewableheader />
      <Whitepaperbanner />
      <Whitepaper />
      <Renewfooter />
    </>
  );
}
