import React, { useEffect } from "react";
import toggleStore from "./utils/toggleStore";
import Nav from "./components/nav";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import Footer from "./components/footer";

export default function Portfolio() {
  const { isDark, toggle } = toggleStore();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const engineeringSkills = [
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "AWS",
  ];
  const productSkills = ["Figma", "UI/UX", "SEO Arch", "Market Ops"];
  const lineNumbers = Array.from({ length: 40 }, (_, i) =>
    String(i + 1).padStart(2, "0"),
  );

  return (
    <div className="bg-slate-50 text-slate-800 dark:bg-[#111111] dark:text-[#e5e2e1] min-h-screen w-full font-sans flex flex-col text-left selection:bg-cyan-200 dark:selection:bg-[#00F5FF] selection:text-black transition-colors duration-300">
      {/* Set base colors (light mode) and dark: colors (dark mode) */}
      <div className="bg-slate-50 text-slate-800 dark:bg-[#111111] dark:text-[#e5e2e1] min-h-screen w-full h-full font-sans flex flex-col text-left selection:bg-cyan-200 dark:selection:bg-[#00F5FF] selection:text-black relative transition-colors duration-300">
    
        <Nav />

        {/* WRAPPER */}
        <div className="flex flex-1 w-full">
          <Sidebar lineNumbers={lineNumbers} />

          <Main engineeringSkills={engineeringSkills} productSkills={productSkills} />
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}
