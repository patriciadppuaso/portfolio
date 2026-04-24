import React from "react";
import useStore from "../utils/store";

export default function Main() {
  const toggleWelcome = useStore((state) => state.toggleWelcome);
  const toggleExperience = useStore((state) => state.toggleExperience);
  const toggleSkills = useStore((state) => state.toggleSkills);
  const toggleWork = useStore((state) => state.toggleWork);
  const toggleCmd = useStore((state) => state.toggleCmd);
  return (
    <main className="flex-grow relative p-4 grid grid-cols-[repeat(auto-fill,80px)] grid-rows-[repeat(auto-fill,90px)] gap-4 items-start content-start overflow-hidden">
      <div
        onClick={toggleWelcome}
        className="flex flex-col items-center gap-1 group cursor-pointer w-20 active:translate-x-px active:translate-y-px"
      >
        <div className="w-10 h-10 win95-raised flex items-center justify-center text-xl mb-1">
          👤
        </div>
        <span className="text-[color:var(--os-text)] text-[10px] font-bold px-1 text-center font-['Space_Grotesk'] group-active:bg-[color:var(--os-title-bg)] group-active:text-[color:var(--os-title-text)]">
          ABOUT
        </span>
      </div>

      <div
        onClick={toggleExperience}
        className="flex flex-col items-center gap-1 group cursor-pointer w-20 active:translate-x-px active:translate-y-px"
      >
        <div className="w-10 h-10 win95-raised flex items-center justify-center text-xl mb-1">
          📝
        </div>
        <span className="text-[color:var(--os-text)] text-[10px] font-bold px-1 text-center font-['Space_Grotesk'] group-active:bg-[color:var(--os-title-bg)] group-active:text-[color:var(--os-title-text)]">
          EXPERIENCE
        </span>
      </div>

      <div
        onClick={toggleSkills}
        className="flex flex-col items-center gap-1 group cursor-pointer w-20 active:translate-x-px active:translate-y-px"
      >
        <div className="w-10 h-10 win95-raised flex items-center justify-center text-xl mb-1">
          ⚙️
        </div>
        <span className="text-[color:var(--os-text)] text-[10px] font-bold px-1 text-center font-['Space_Grotesk'] group-active:bg-[color:var(--os-title-bg)] group-active:text-[color:var(--os-title-text)]">
          SKILLS
        </span>
      </div>

      {/* WORKS - Opens Paint Window */}
      <div
        onClick={toggleWork}
        className="flex flex-col items-center gap-1 group cursor-pointer w-20 active:translate-x-px active:translate-y-px"
      >
        <div className="w-10 h-10 win95-raised flex items-center justify-center text-xl mb-1">
          📁
        </div>
        <span className="text-[color:var(--os-text)] text-[10px] font-bold px-1 text-center font-['Space_Grotesk'] group-active:bg-[color:var(--os-title-bg)] group-active:text-[color:var(--os-title-text)]">
          WORKS
        </span>
      </div>

      <div
        onClick={toggleCmd}
        className="flex flex-col items-center gap-1 group cursor-pointer w-20 active:translate-x-px active:translate-y-px"
      >
        <div className="w-10 h-10 win95-raised flex items-center justify-center text-xl mb-1 bg-black text-white">
          C:\
        </div>
        <span className="text-[color:var(--os-text)] text-[10px] font-bold px-1 text-center font-['Space_Grotesk'] group-active:bg-[color:var(--os-title-bg)] group-active:text-[color:var(--os-title-text)]">
          CHAT.EXE
        </span>
      </div>

      {/* ========================================== */}
      {/* WINDOW 1: WELCOME.EXE */}
      {/* ========================================== */}

      {/* ========================================== */}
      {/* WINDOW 2: EXPERIENCE.TXT */}
      {/* ========================================== */}

      {/* ========================================== */}
      {/* WINDOW 3: SKILLS.EXE */}
      {/* ========================================== */}

      {/* ========================================== */}
      {/* WINDOW 4: WORKS.EXE (MS PAINT STYLE) */}
      {/* ========================================== */}

      {/* ========================================== */}
      {/* WINDOW 5: CMD / CHATBOT */}
      {/* ========================================== */}
    </main>
  );
}
