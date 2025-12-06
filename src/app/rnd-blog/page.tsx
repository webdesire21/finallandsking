"use client";

import Insightbanner from "yes/Components/Insightbanner";
import Blogss from "yes/Components/insights/Blog";
import Blogbanner from "yes/Components/insights/Blogbanner";
import Rndfooter from "yes/Components/Rndfooter";
import Rndheader from "yes/Components/Rndheader";

export default function Rndblog() {
  return (
    <>
      <Rndheader />
      <Blogbanner />
      <Blogss />
      <Rndfooter />
    </>
  );
}
