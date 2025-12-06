"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaCommentDots } from "react-icons/fa";
import Footer from "yes/Components/Footer";
import Navbar from "yes/Components/Navbar";
import Renewfooter from "yes/Components/Renewable/Renewfooter";
import Renewableheader from "yes/Components/Renewableheader";

export default function Pebcontact() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/contactform", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setMsg("Message sent successfully!");
      e.target.reset();
    } else {
      setMsg("Failed to send message. Try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <Renewableheader />

      {/* Contact Section */}
      <section className="py-12 bg-white mt-20 md:mt-27 md:mx-10">
        <h2 className="text-3xl font-bold text-center text-[#061b49] mb-6 md:text-4xl md:mb-12">
          Contact Us
        </h2>

        <div className="mx-auto grid md:grid-cols-2 gap-8 px-4">
          {/* Left: Contact Info */}
          <div className="space-y-10">
            {/* Location */}
            <div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
                <h3 className="text-lg font-semibold">Our Location</h3>
              </div>
              <p className="mt-2 text-gray-600">
                MZ-15, Starlit Tower, Y.N. Road, Indore – 452003
                <br />
                Phone – 9981813922, 9098255401
              </p>
              <a href="#" className="text-purple-600 hover:underline text-sm">
                Get Direction ›
              </a>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-red-500 text-2xl" />
                <h3 className="text-lg font-semibold">Our Email</h3>
              </div>
              <p className="mt-2 text-gray-600">landskinginfra@gmail.com</p>
              <p className="text-gray-600">info@landsking.com</p>
              <a
                href="mailto:info@landsking.com"
                className="text-purple-600 hover:underline text-sm"
              >
                Send Message ›
              </a>
            </div>

            {/* Support */}
            <div>
              <div className="flex items-center space-x-3">
                <FaCommentDots className="text-blue-500 text-2xl" />
                <h3 className="text-lg font-semibold">Our Support</h3>
              </div>
              <p className="mt-2 text-gray-600">
                Main Support : info@landsking.com <br />
                Sales : landskinginfra@gmail.com
              </p>
              <a href="#" className="text-purple-600 hover:underline text-sm">
                Open A Ticket ›
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full border-b-2 border-[#061b49] focus:outline-none focus:border-black p-1"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border-b-2 border-[#061b49] focus:outline-none focus:border-black p-1"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full border-b-2 border-[#061b49] focus:outline-none focus:border-black p-1"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full border-b-2 border-[#061b49] focus:outline-none focus:border-black p-1"
                  required
                />
              </div>

              {/* Message */}
              {msg && <p className="text-center text-green-600">{msg}</p>}

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#000080] hover:bg-black text-white px-8 py-2 rounded transition"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Renewfooter />
    </>
  );
}
