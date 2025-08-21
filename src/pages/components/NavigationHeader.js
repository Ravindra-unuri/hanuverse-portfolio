"use client";
import { useState } from "react";
import { Link } from "lucide-react";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Define links only once
  const navLinks = ["Home", "About", "Services", "Pricing", "Contact"];

  return (
    <header className="w-full fixed top-0 z-50 bg-white shadow-md dark:bg-[#0A192F] dark:shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo and Brand Name */}
        {/* <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/LOGO.png"
            alt="Logo"
            width={45}
            height={45}
            // className="rounded-full"
          />
          <span className="text-xl font-bold text-[#0A192F] dark:text-white tracking-wide">
            HANUVERSE
          </span>
        </Link> */}

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700 dark:text-gray-200">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#0A192F] dark:text-white focus:outline-none"
          >
            {isOpen ? (
              // X icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav (reuse navLinks, no duplication) */}
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-[#0A192F] px-4 py-3 space-y-3 font-medium text-gray-700 dark:text-gray-200 shadow-md">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block hover:text-[#D4AF37] transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
