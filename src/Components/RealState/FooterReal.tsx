"use client";

import Link from "next/link";
import {
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";
import Image from "next/image";

export default function FooterReal() {
  return (
    <footer className="bg-[#000080]  text-white">
      <div className="max-w-7xl mx-auto px-6 py-18">
        {/* Flex container: mobile stacked, desktop side-by-side */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Logo + Social */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start gap-0 w-full md:w-1/4">
            <Image
              src="/whitelogo.png"
              alt="Landsking Infra"
              width={140}
              height={60}
            />
            <p className="">
              Landsking Infra works with clients in diverse industries around
              the world to design, construct and maintain their capital projects
            </p>
          </div>

          {/* Right Links Section */}
          <div className="order-1 md:order-2 flex-1 flex flex-col gap-12">
            {/* Top Row - Responsive columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Residential */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Needs</h3>
                <ul className="space-y-2 text-white text-sm font-[Lato]">
                  <li>Invest, Finance & Value</li>
                  <li>Plan, Lease & Occupy</li>
                  <li>Manage Properties & Portfolios</li>
                </ul>
              </div>

              {/* Commercial */}
              <div>
                <h3 className="text-lg  mb-4">Property-types</h3>
                <ul className="space-y-2 text-white text-sm font-[Lato]">
                  <li>Logistics & Industrial</li>
                  <li>Retail</li>
                  <li>Office</li>
                  <li>Residential</li>
                </ul>
              </div>

              {/* Retail */}
              <div>
                <h3 className="text-lg mb-4">Properties</h3>
                <ul className="space-y-2 text-white text-sm font-[Lato]">
                  <li>Properties for Lease</li>
                  <li>Properties for Sale</li>
                  <li>Investment Property For Sale</li>
                </ul>
              </div>

              {/* Hospitality */}
              <div>
                <h3 className="text-lg  mb-4">Hospitality</h3>
                <ul className="space-y-2 text-white text-sm font-[Lato]">
                  <li>Partners</li>
                  <li>Brigade Hospitality</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/20 pb-6 mb-6">
            <div className="flex items-center space-x-3  mt-5 mb-4 md:mb-0">
              <span className="font-bold text-lg">Landsking Infra </span>
            </div>

            <div className="flex space-x-4">
              <Link href="#" aria-label="X">
                <FaXTwitter className="text-xl hover:text-[#8080FF]" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-xl hover:text-[#8080FF]" />
              </Link>
              <Link href="#" aria-label="YouTube">
                <FaYoutube className="text-xl hover:text-[#8080FF]" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <FaFacebook className="text-xl hover:text-[#8080FF]" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <FaInstagram className="text-xl hover:text-[#8080FF]" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="#" className="hover:underline">
                Copyright & Terms
              </Link>
              <Link href="#" className="hover:underline">
                Privacy
              </Link>

              <a
                href="mailto:info@LandskingInfra.com"
                className="hover:underline"
              >
                landskinginfra@gmail.com
              </a>
            </div>

            <div className="text-gray-300">
              © 2025 Landsking Infra Pvt. Limited. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
