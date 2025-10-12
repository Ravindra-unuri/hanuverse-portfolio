"use client";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Contact"];

  // 🔗 Centralized social media links
  const socialLinks = [
    { Icon: Facebook, link: "https://www.facebook.com/share/1Bej4qcunX/" },
    { Icon: Instagram, link: "https://www.instagram.com/hanuversedigital?igsh=a2YwNnN0OHV0dmFq" },
    { Icon: Linkedin, link: "https://www.linkedin.com/in/hanuverse-digital-49317538a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { Icon: Twitter, link: "https://x.com/hanuverse88235?s=09" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">

        {/* 🔸 Logo + Company Name */}
        <div className="flex flex-col items-center">
          <img
            src="/assets/LOGO.png"
            alt="Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
          />
          <h1 className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-orange-500 to-[#0A192F] bg-clip-text text-transparent">
            Hanuverse
          </h1>
        </div>

        {/* 🔸 Navigation Links (Desktop Only) */}
        <nav className="hidden md:flex space-x-8 font-[Inter] text-[#0A192F] text-base font-medium">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-orange-500 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* 🔸 Social Icons (Desktop Only) */}
        <div className="hidden md:flex justify-center space-x-4">
          <a
            href="tel:+918485932058"
            aria-label="Phone"
            className="bg-[#0A192F] text-white p-2.5 rounded-full hover:bg-orange-500 hover:text-black transition duration-300"
          >
          <Phone className="w-5 h-5" />
        </a>

        {/* Email */}
        <a
          href="mailto:hanuversedigitalmarketing@gmail.com"
          aria-label="Email"
          className="bg-[#0A192F] text-white p-2.5 rounded-full hover:bg-orange-500 hover:text-black transition duration-300"
          >
        <Mail className="w-5 h-5" />
      </a>
      {socialLinks.map(({ Icon, link }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0A192F] text-white p-2.5 rounded-full hover:bg-orange-500 hover:text-black transition duration-300"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>

        {/* 🔸 Mobile Menu Button */ }
  <button
    className="md:hidden text-[#0A192F] text-3xl"
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? "✕" : "☰"}
  </button>
      </div >

    {/* 🔸 Mobile Menu */ }
  {
    isOpen && (
      <div className="md:hidden bg-white border-t border-gray-200 text-center py-4 space-y-4 shadow-inner animate-slideDown">
        {/* Nav Links */}
        {navLinks.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block w-full text-[#0A192F] text-lg font-medium hover:text-orange-500 transition-colors duration-200"
            onClick={() => setIsOpen(false)} // Close mobile menu on click
          >
            {item}
          </a>
        ))}

        {/* Social Icons (Mobile) */}
        <div className="flex justify-center space-x-5 mt-4">
          <a
            href="tel:+918485932058"
            aria-label="Phone"
            className="bg-[#0A192F] text-white p-3 rounded-full hover:bg-orange-500 hover:text-black transition duration-300"
          >
            <Phone className="w-5 h-5" />
          </a>

          {/* Email */}
          <a
            href="mailto:hanuversedigitalmarketing@gmail.com"
            aria-label="Email"
            className="bg-[#0A192F] text-white p-3 rounded-full hover:bg-orange-500 hover:text-black transition duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>

          {socialLinks.map(({ Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A192F] text-white p-3 rounded-full hover:bg-orange-500 hover:text-black transition duration-300"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>
    )
  }
    </header >
  );
}
