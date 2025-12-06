import Link from "next/link";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#000080] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-8">
          {/* 1 - Brand & Description */}
          <div className="md:w-1/3 space-y-4">
            <img src="/logo.png" alt="Company Logo" className="h-12" />
            <p className="text-sm leading-relaxed">
              We provide end-to-end EPC solutions, specializing in engineering,
              fabrication, and project management across diverse industries.
              Backed by ISO 9001:2015 and ISO 14001:2015 certifications, we
              operate with a strong Pan-India presence and a proven track record
              of efficient, on-time delivery.
            </p>
            {/* <img src="/logo.png" alt="IGBC Member" className="h-12 mt-4" /> */}
          </div>

          {/* 2 - Links */}
          <div className="md:w-1/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-white">Helpful Links</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="/about us" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Sectors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/systems" className="hover:text-white">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="/peb-contactt" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">Products</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Pre Engineered Buildings
                  </a>
                </li>
                <li>
                  <a href="/modular" className="hover:text-white">
                    Modular Buildings
                  </a>
                </li>
                <li>
                  <a
                    href="/lightGaugeSteelFraming"
                    className="hover:text-white"
                  >
                    Light Gauge Steel Framing
                  </a>
                </li>
                <li>
                  <a href="/sandwichpanels" className="hover:text-white">
                    Sandwich Panels
                  </a>
                </li>
                <li>
                  <a href="/standardmodular" className="hover:text-white">
                    Standard Modular Solutions
                  </a>
                </li>
                <li>
                  <a href="/epcsolutions" className="hover:text-white">
                    EPC Solutions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 3 - Contact Info */}
          <div className="md:w-1/3 space-y-4">
            <h3 className="text-white font-semibold">Landsking Infra</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">
                <FaPhoneAlt />
                <a href="tel:+919981813922" className="hover:text-white">
                  9981813922 , 9098255401{" "}
                </a>
              </li>
              {/* <li className="flex items-center gap-2">
                <FaEnvelope /> 
                <a href="mailto:enquiry@Landsking Infra.in" className="hover:text-white">enquiry@Landsking Infra.in</a>
              </li> */}
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt />
                MZ-15, Starlit Tower ,Y.N. Road Indore –452001
              </li>
            </ul>
            <div className="flex space-x-4 mt-4 text-lg">
              <a href="#" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-white">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © 2025 Landsking Infra All Rights Reserved.
          <a href="#" className="hover:text-white mx-2">
            Privacy Policy
          </a>{" "}
          |
          <a href="#" className="hover:text-white mx-2">
            Disclaimer
          </a>
        </div>
      </div>
    </footer>
  );
}
