"use client";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Pricing", "Contact"];

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
          {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="bg-[#0A192F] text-white p-2.5 rounded-full hover:bg-orange-500 hover:text-black transition duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* 🔸 Mobile Menu Button */}
        <button
          className="md:hidden text-[#0A192F] text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 🔸 Mobile Menu */}
      {isOpen && (
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
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="bg-[#0A192F] text-white p-3 rounded-full hover:bg-orange-500 hover:text-black transition duration-300"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
