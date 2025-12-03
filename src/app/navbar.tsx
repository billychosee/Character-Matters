"use client";

import React, { useState } from "react";
import Link from "next/link";

// The Navbar component is now the default export.
// This component uses standard <a> tags for navigation links,
// ensuring it runs without external routing libraries.
export default function Navbar() {
  // State for managing the mobile menu's open/closed status
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for the mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // List of navigation items for easy mapping
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#books", label: "Books" },
  ];

  return (
    // The main navigation bar, fixed to the top
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 sm:px-8 lg:px-12 py-3 bg-white shadow-lg z-50">
      {/* Logo/Brand Name */}
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
          Character Matters
        </Link>
      </div>

      {/* Desktop Navigation Links (Centered and hidden on mobile) */}
      <ul className="hidden md:flex list-none p-0 m-0 gap-8 lg:gap-10 justify-center">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-gray-700 text-base font-semibold transition-colors duration-200 hover:text-[#853A75] active:text-[#6a2e5d]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Contact Button (Hidden on mobile) */}
      <div className="hidden md:block">
        <Link
          href="#contact"
          className="
                        bg-[#853A75] text-white text-base font-semibold
                        py-2.5 px-6
                        rounded-lg shadow-xl
                        transition-all duration-300
                        hover:bg-[#6a2e5d]
                        hover:shadow-2xl
                        focus:outline-none focus:ring-4 focus:ring-[#853A75]/50
                        whitespace-nowrap
                    "
        >
          Contact
        </Link>
      </div>

      {/* Mobile Controls (Contact Button and Hamburger Menu) */}
      <div className="md:hidden flex items-center">
        {/* Mobile Contact Button (Less prominent than desktop version) */}
        <Link
          href="#contact"
          className="
                        bg-[#853A75] text-white text-sm font-semibold
                        py-2 px-4 mr-4
                        rounded-md shadow-lg
                        transition-colors duration-200
                        hover:bg-[#6a2e5d]
                        whitespace-nowrap
                    "
        >
          Contact
        </Link>

        {/* Hamburger/Close Button */}
        <button
          onClick={toggleMenu}
          className="p-2 text-gray-700 hover:text-[#853A75] transition duration-150 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // Close icon (X)
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Container (Slide-in menu, visible when isOpen is true) */}
      <div
        className={`
                fixed top-[60px] left-0 w-full bg-white shadow-xl md:hidden 
                transition-transform duration-300 ease-in-out
                ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0 pointer-events-none"
                }
            `}
      >
        <ul className="flex flex-col p-4 space-y-2 border-t border-gray-100">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="block w-full text-lg text-gray-700 font-medium py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 hover:text-[#853A75]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
