"use client";
import { useState } from "react";
import { Building2 } from "lucide-react";

const PROJECT_TYPES = [
  "Residential (Home / Apartment)",
  "Commercial (Shops / Complex)",
  "Industrial (Factory / Warehouse)",
  "Institutional / Government",
];

const Form = () => {
  const [projectTypeOpen, setProjectTypeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  return (
    <section className="w-full bg-gray-50 py-12 px-6 md:px-22 lg:px-28">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-[30%_70%] gap-10 items-start">
        <div className="md:pt-20">
          <h2 className="text-2xl md:text-3xl font-light text-[#000080] leading-snug">
            Power Your Future
            <br />
            <span className="font-semibold">reliable & appreciating</span>
            <br />
            with Solar Energy!
          </h2>
        </div>

        {/* Right Form */}
        <div>
          <h3 className="text-lg md:text-xl font-medium text-[#000080] mb-6">
            Residential • Commercial • Industrial — Complete Solar EPC Solutions
            by Landsking Infra.
          </h3>

          {/* ✅ Updated Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-black font-light mb-1">Name*</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Full Name"
                className="w-full border-b border-gray-400 py-2 px-3 focus:outline-none focus:border-[#8080FF]"
              />
            </div>

            <div>
              <label className="block text-black font-light mb-1">
                Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Your Address"
                className="w-full border-b border-gray-400 py-2 px-3 focus:outline-none focus:border-[#8080FF]"
              />
            </div>

            <div>
              <label className="block text-black font-light mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your Phone Number"
                className="w-full border-b border-gray-400 py-2 px-3 focus:outline-none focus:border-[#8080FF]"
              />
            </div>

            <div>
              <label className="block text-black font-light mb-1">
                Location / City
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter City"
                className="w-full border-b border-gray-400 py-2 px-3 focus:outline-none focus:border-[#8080FF]"
              />
            </div>

            <div className="relative">
              <label className="block text-black font-light mb-1">
                Project Type
              </label>
              <div
                className="flex justify-between border-b border-gray-400 py-2 px-3 cursor-pointer"
                onClick={() => setProjectTypeOpen(!projectTypeOpen)}
              >
                <span className="text-gray-500 text-sm flex gap-1">
                  {selectedProject || (
                    <>
                      <Building2 size={16} /> Project Type
                    </>
                  )}
                </span>
                <span>▼</span>
              </div>

              {projectTypeOpen && (
                <ul className="absolute bg-white border border-gray-300 mt-1 w-full z-10 shadow-lg">
                  {PROJECT_TYPES.map((type) => (
                    <li
                      key={type}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedProject(type);
                        setProjectTypeOpen(false);
                      }}
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <label className="block text-black font-light mb-1">
                Required Capacity (kW)
              </label>
              <input
                type="text"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                placeholder="e.g., 10 kW / 50 kW / 100 kW"
                className="w-full border-b border-gray-400 py-2 px-3 focus:outline-none focus:border-[#8080FF]"
              />
            </div>
          </div>

          {/* Additional Info & Submit */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-[70%_30%] gap-4">
            <textarea
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              placeholder="Describe your requirement..."
              className="w-full border-b border-gray-400 py-2 px-3 focus:outline-none resize-none"
              rows={4}
            />

            {/* <button className="px-6 py-3 w-full rounded-full border border-[#000080] text-black font-medium hover:bg-black hover:text-white transition">
              Submit Inquiry →
            </button> */}
            <button className="px-1 py-2  h-10 mt-5 lg:mt-10 md:mt-15 rounded-xl font-bold border border-[#000080] text-[#000080] font-medium hover:bg-black hover:text-white transition hover:border-black">
              Submit Inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
