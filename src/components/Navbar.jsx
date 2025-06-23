import React, { useState } from "react";
import Logo from "../images/logo-qube.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#services", label: "Services" },
    { href: "#galerie", label: "Galerie" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 bg-secondary bg-opacity-80 text-white z-50 shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#hero">
          <img
            src={Logo}
            alt="Qube Studio Logo"
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
          />
        </a>

        {/* Burger button (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
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

        {/* Desktop links */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative group text-white transition"
            >
              <span className="relative z-10">{link.label}</span>
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00C853] group-hover:w-full transition-all duration-300"
              ></span>
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white border-b border-white/20 py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
