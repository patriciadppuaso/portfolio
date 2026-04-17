import React, { useEffect } from "react";
import toggleStore from "../utils/toggleStore";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { isDark, toggle } = toggleStore();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <nav className="sticky top-0 w-full z-50 bg-slate-50/90 dark:bg-[#111111]/90 backdrop-blur-md border-b border-slate-200 dark:border-white/5 flex justify-between items-center px-4 md:px-8 py-4 transition-colors duration-300">
      <div className="font-mono text-cyan-600 dark:text-[#00F5FF] font-bold text-sm md:text-lg tracking-wide">
        /patricia_puaso
      </div>

      <div className="hidden lg:flex gap-8 font-mono text-sm tracking-widest uppercase">
        {[
          { to: "/", label: "/experience" },
          { to: "/skills", label: "/skills" },
          { to: "/projects", label: "/projects" },
          { to: "/contact", label: "/contact" },
        ].map((item) => {
          const isActive = path === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`pb-1 border-b-2 transition-colors ${
                isActive
                  ? "text-slate-900 dark:text-white border-b-2 border-cyan-600 dark:border-[#00F5FF] pb-1"
                  : "text-slate-500 dark:text-white/40 border-transparent hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        {/* 3. Wire up the toggle button and swap icons */}
        <button
          onClick={() => {
            toggle();
          }}
          className="text-cyan-600 dark:text-[#00F5FF] hover:text-cyan-800 dark:hover:text-white transition-colors p-2"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? (
            // Sun Icon for Dark Mode (click to go light)
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
            // Moon Icon for Light Mode (click to go dark)
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
        {/* <a
          href="/Patricia-Puaso-Resume.webp"
          download="Patricia-Puaso-Resume.webp"
          className="bg-cyan-600 text-white hover:bg-cyan-700 dark:bg-[#00F5FF] dark:text-black dark:hover:bg-white font-mono px-4 md:px-5 py-2 text-xs font-bold transition-colors flex items-center justify-center"
        >
          Resume.pdf
        </a> */}
        <Link
          to="/Patricia-Puaso-Resume.webp"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-600 text-white hover:bg-cyan-700 dark:bg-[#00F5FF] dark:text-black dark:hover:bg-white font-mono px-4 md:px-5 py-2 text-xs font-bold transition-colors flex items-center justify-center"
        >
          Resume.pdf
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
