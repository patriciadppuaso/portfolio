import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import toggleStore from "./../utils/toggleStore";

export default function Nav() {
  const { isDark, toggle } = toggleStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "/experience", path: "/" },
    { name: "/skills", path: "/skills" },
    { name: "/projects", path: "/projects" },
    { name: "/contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-slate-50/90 dark:bg-[#111111]/90 backdrop-blur-md border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="flex justify-between items-center px-4 md:px-8 py-4">
        {/* LOGO */}
        <div className="font-mono text-cyan-600 dark:text-[#00F5FF] font-bold text-sm md:text-lg tracking-wide">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            /patricia_puaso
          </Link>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex gap-8 font-mono text-sm tracking-widest uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-colors pb-1 ${
                location.pathname === link.path
                  ? "text-slate-900 dark:text-white border-b-2 border-cyan-600 dark:border-[#00F5FF]"
                  : "text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* BUTTONS / ICONS */}
        <div className="flex items-center gap-2 md:gap-6">
          <button
            onClick={toggle}
            className="text-cyan-600 dark:text-[#00F5FF] hover:text-cyan-800 dark:hover:text-white transition-colors p-2"
          >
            {isDark ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          <Link
            to="/Patricia-Puaso-Resume.webp"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex bg-cyan-600 text-white hover:bg-cyan-700 dark:bg-[#00F5FF] dark:text-black dark:hover:bg-white font-mono px-4 py-2 text-xs font-bold transition-colors items-center justify-center"
          >
            Resume.pdf
          </Link>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            className="lg:hidden text-cyan-600 dark:text-[#00F5FF] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-50 dark:bg-[#111111] border-b border-slate-200 dark:border-white/5 flex flex-col py-4 px-6 gap-6 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)} // <-- ADDED THIS: Closes menu on click!
              className={`font-mono text-sm tracking-widest uppercase transition-colors ${
                location.pathname === link.path
                  ? "text-slate-900 dark:text-[#00F5FF] font-bold"
                  : "text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/Patricia-Puaso-Resume.webp"
            download="Patricia-Puaso-Resume.webp"
            onClick={() => setIsMenuOpen(false)}
            className="bg-cyan-600 text-white dark:bg-[#00F5FF] dark:text-black font-mono px-4 py-3 text-xs font-bold text-center mt-2"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
