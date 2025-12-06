"use client";

import Insightbanner from "yes/Components/Insightbanner";
import Renewfooter from "yes/Components/Renewable/Renewfooter";
import Renewableheader from "yes/Components/Renewableheader";
import ResourcesPage from "yes/Components/Resources";

export default function Renewablenergy() {
  return (
    <>
      <Renewableheader />
      <Insightbanner />
      <ResourcesPage />
      <Renewfooter />
    </>
  );
}
