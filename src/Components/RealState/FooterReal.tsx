"use client";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function FooterReal() {
  return (
    <footer className="bg-[#f7f7f7] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Flex container: mobile stacked, desktop side-by-side */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Logo + Social */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start gap-6 w-full md:w-1/4">
            <Image
              src="/Landsking Infra.png"
              alt="Landsking Infra"
              width={140}
              height={80}
            />

            <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
              <a className="p-2 rounded-full bg-sky-600 text-white">
                <FaLinkedinIn size={22} />
              </a>
              <a className="p-2 rounded-full bg-pink-500 text-white">
                <FaInstagram size={22} />
              </a>
              <a className="p-2 rounded-full bg-blue-600 text-white">
                <FaFacebookF size={22} />
              </a>
              <a className="p-2 rounded-full bg-red-600 text-white">
                <FaYoutube size={22} />
              </a>
              <a className="p-2 rounded-full bg-black text-white">
                <FaXTwitter size={22} />
              </a>
            </div>
          </div>

          {/* Right Links Section */}
          <div className="order-1 md:order-2 flex-1 flex flex-col gap-12">
            {/* Top Row - Responsive columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Residential */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Residential</h3>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li>Brigade Plus</li>
                  <li>Channel Partners</li>
                  <li>Brigade Communities</li>
                  <li>Delivered Projects</li>
                  <li>Luxury Apartments</li>
                  <li>3BHK Apartments</li>
                  <li>New Launch</li>
                </ul>
              </div>

              {/* Commercial */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Commercial</h3>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li>Clients</li>
                  <li>Inspire NXT</li>
                  <li>Legacy Projects</li>
                  <li>BuzzWorks</li>
                  <li>Events</li>
                  <li>Office Space for Lease</li>
                  <li>Office Space for Sale</li>
                </ul>
              </div>

              {/* Retail */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Retail</h3>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li>Malls</li>
                  <li>Mixed Use and Tech Parks</li>
                  <li>Legacy Projects</li>
                </ul>
              </div>

              {/* Hospitality */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Hospitality</h3>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li>Partners</li>
                  <li>Brigade Hospitality</li>
                </ul>
              </div>
            </div>

            {/* Bottom Row - Responsive columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Residential Projects
                </h3>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li>Bengaluru</li>
                  <li>Chennai</li>
                  <li>Hyderabad</li>
                  <li>Mysuru</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Foundation</h3>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li>IME Museum</li>
                  <li>Education</li>
                  <li>Health</li>
                  <li>Community Development</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li>Overview</li>
                  <li>Founder&apos;s Message</li>
                  <li>Board of Directors</li>
                  <li>Brigade Journey</li>
                  <li>Sustainability</li>
                  <li>Certifications</li>
                  <li>Brigade Insight</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Other Links</h3>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li>MyKey</li>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>Partner With Us</li>
                  <li>Media Centre</li>
                  <li>Investors</li>
                  <li>Brigade REAP</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
