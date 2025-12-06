"use client";

import Insightbanner from "yes/Components/Insightbanner";
import Blogss from "yes/Components/insights/Blog";
import Blogbanner from "yes/Components/insights/Blogbanner";
import Whitepaper from "yes/Components/insights/Whitepaper";
import Renewfooter from "yes/Components/Renewable/Renewfooter";
import Renewableheader from "yes/Components/Renewableheader";

export default function Renewablenergywhitepaper() {
  return (
    <>
      <Renewableheader />
      <Blogbanner />
      <Blogss />
      <Renewfooter />
    </>
  );
}
