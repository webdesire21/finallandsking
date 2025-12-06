"use client";
import { useState, useEffect } from "react";

import Footer from "yes/Components/Footer";

import RenewableSector from "yes/Components/Renewable/Renewablesector";
import Accordion from "yes/Components/Renewable/Accordion";
import PebBrandP from "yes/Components/PebBrandP";
import Explore from "yes/Components/Renewable/Explore";
import { Wrench, Building2, Home, Users } from "lucide-react";

import Renewablebanner from "yes/Components/Renewable/Renewablebanner";
import Renewableplatform from "yes/Components/Renewable/Renewableplatform";
import Renewableslider from "yes/Components/Renewable/Renewableslider";
import Renewableabout from "yes/Components/Renewable/Renewableabout";
import Renewablesolution from "yes/Components/Renewable/Renewablesolution";
import Renewablenews from "yes/Components/Renewable/Renewablenews";
import Renewableheader from "yes/Components/Renewableheader";
import Form from "yes/Components/Renewable/Form";

import Solarservices from "yes/Components/Solarservices";
import Solarcontact from "yes/Components/Solarcontact";
import Renewfooter from "yes/Components/Renewable/Renewfooter";

export default function Renewableenergy() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const links = [
    {
      title: "Industrial Solar EPC Solutions",
      subtitle: "Engineering & Maintenance",
      icon: <Wrench size={20} />, // Wrench represents engineering/maintenance
      url: "/industrial-solar",
    },
    {
      title: "Commercial & Institutional Projects",
      subtitle: "Smart Energy Solutions",
      icon: <Building2 size={20} />, // Building icon for commercial/institutional
      url: "/commercail-solar",
    },
    {
      title: "Residential & Farm Solar",
      subtitle: "Clean Energy for Homes",
      icon: <Home size={20} />, // Home icon for residential/farm solar
      url: "/residentail-solar",
    },
    {
      title: "Infrastructure & Maintenance",
      subtitle: "Reliable Grid Support",
      icon: <Users size={20} />, // Users icon can represent teams or clients involved
      url: "/maintenance-solar",
    },
  ];

  return (
    <>
      <Renewableheader />
      <Renewablebanner />
      <Solarservices />
      <RenewableSector />
      <Renewableabout />
      <Form />
      <Accordion />
      <Renewableslider />

      <Explore />
      <Renewableplatform />

      <Renewablesolution />

      <Renewablenews />
      <PebBrandP />
      <Solarcontact />
      <Renewfooter />
    </>
  );
}
