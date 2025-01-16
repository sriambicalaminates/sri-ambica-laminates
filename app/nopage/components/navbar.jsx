"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/Logo1.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname(); // Get the current path
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Why us?", href: "/why-us" },
  ];

  return (
    <header >
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between px-8 py-4 bg-back border-b-2 rounded-xl">
        {/* Logo Section */}
        <Link href="/">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={80}
            height={80}
          />
        </div>
        </Link>
        {/* Navigation Links */}
        <nav className="flex space-x-8 text-gray-600 font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <p
                className={`${
                  pathname === link.href
                    ? "text-brown font-semibold"
                    : "text-gold"
                } hover:text-brown hover:font-semibold transition-all duration-300`}
              >
                {link.name}
              </p>
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div>
          <Link href="/contact">
            <p className="px-4 py-2 border-2 border-brown text-brown rounded-full hover:bg-brown hover:text-white transition-all duration-300">
              Contact Us
            </p>
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between px-4 py-4 bg-back border-b-2 rounded-xl">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={80}
            height={80}
          />
        </div>

        {/* Hamburger Icon */}
        <div className="flex">
        <Link href="/contact">
            <p className="px-4 py-2 border-2 border-brown text-brown rounded-full hover:bg-brown hover:text-white transition-all duration-300">
              Contact Us
            </p>
          </Link>
        <button
          className=" ml-2 text-brown focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden flex flex-col items-center space-y-4 bg-back py-4 text-gray-600 font-medium rounded-xl">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <p
                className={`${
                  pathname === link.href
                    ? "text-brown font-semibold"
                    : "text-gold"
                } hover:text-brown hover:font-semibold transition-all duration-300`}
              >
                {link.name}
              </p>
            </Link>
          ))}
         
        </nav>
      )}
    </header>
  );
}
