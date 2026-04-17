import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import toggleStore from "./../utils/toggleStore";
import Nav from "./nav";
import Sidebar from "./sidebar";
import Footer from "./footer";

export default function Layout() {
  const { isDark } = toggleStore();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const lineNumbers = Array.from({ length: 40 }, (_, i) =>
    String(i + 1).padStart(2, "0"),
  );

  return (
    <div className="bg-slate-50 text-slate-800 dark:bg-[#111111] dark:text-[#e5e2e1] min-h-screen w-full font-sans flex flex-col text-left selection:bg-cyan-200 dark:selection:bg-[#00F5FF] selection:text-black transition-colors duration-300 relative">
      <Nav />

      {/* WRAPPER */}
      <div className="flex flex-1 w-full">
        <Sidebar lineNumbers={lineNumbers} />

        {/* This is where React Router will inject your Home or Skills page */}
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}