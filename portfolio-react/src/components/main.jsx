import React from "react";
import useStore from "../utils/store";
import Welcome from "../components/Windows/Welcome";
import Experience from "../components/Windows/Experience";
import Works from "../components/Windows/Works";
import Skills from "../components/Windows/Skills";
import Cmd from "../components/Windows/Cmd";
export default function Main() {
  const toggleWelcome = useStore((state) => state.toggleWelcome);
  const isWelcomeOpen = useStore((state) => state.isWelcomeOpen);

  const toggleExperience = useStore((state) => state.toggleExperience);
  const isExperienceOpen = useStore((state) => state.isExperienceOpen);

  const toggleSkills = useStore((state) => state.toggleSkills);
  const isSkillsOpen = useStore((state) => state.isSkillsOpen);

  const toggleWork = useStore((state) => state.toggleWork);
  const isWorkOpen = useStore((state) => state.isWorkOpen);

  const toggleCmd = useStore((state) => state.toggleCmd);
  const isCmdOpen = useStore((state) => state.isCmdOpen);
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
      {isWelcomeOpen && <Welcome />}
      {/* ========================================== */}
      {/* WINDOW 2: EXPERIENCE.TXT */}
      {/* ========================================== */}
      {isExperienceOpen && <Experience />}
      {/* ========================================== */}
      {/* WINDOW 3: SKILLS.EXE */}
      {/* ========================================== */}
      {isSkillsOpen && <Skills />}
      {/* ========================================== */}
      {/* WINDOW 4: WORKS.EXE (MS PAINT STYLE) */}
      {/* ========================================== */}
      {isWorkOpen && <Works />}
      {/* ========================================== */}
      {/* WINDOW 5: CMD / CHATBOT */}
      {/* ========================================== */}
      {isCmdOpen && <Cmd />}
    </main>
  );
}
