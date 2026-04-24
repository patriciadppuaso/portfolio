import React from "react";
import useStore from "../utils/store";
import { useState, useEffect } from "react";
import Menu from "../components/menu";
export default function TaskBar() {
  const isStartMenuOpen = useStore((state) => state.isStartMenuOpen);
  const toggleStartMenu = useStore((state) => state.toggleStartMenu);
  const isWelcomeOpen = useStore((state) => state.isWelcomeOpen);
  const toggleWelcome = useStore((state) => state.toggleWelcome);
  const isExperienceOpen = useStore((state) => state.isExperienceOpen);
  const toggleExperience = useStore((state) => state.toggleExperience);
  const isSkillsOpen = useStore((state) => state.isSkillsOpen);
  const toggleSkills = useStore((state) => state.toggleSkills);
  const isWorksOpen = useStore((state) => state.isWorksOpen);
  const toggleWorks = useStore((state) => state.toggleWorks);
  const isCmdOpen = useStore((state) => state.isWorksOpen);
  const toggleCmd = useStore((state) => state.toggleWorks);
  const isDarkMode = useStore((state) => state.isDarkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav className="relative w-full z-50 flex justify-start items-center gap-1 px-1 h-10 border-t-2 border-[color:var(--border-light)] shadow-none shrink-0 bg-[color:var(--os-bg)] text-[color:var(--os-text)]">
        <button
          //ref={startButtonRef}
          onClick={toggleStartMenu}
          className={`flex flex-row items-center justify-center gap-1 p-1 px-2 h-8 ${isStartMenuOpen ? "win95-sunken" : "win95-raised hover:brightness-110 active:win95-sunken active:translate-x-[1px] active:translate-y-[1px]"}`}
        >
          <div className="title-bar p-0.5">
            <span className="material-symbols-outlined text-base leading-none">
              menu
            </span>
          </div>
          <span className="font-['Space_Grotesk'] text-[12px] font-bold uppercase tracking-tight">
            Start
          </span>
        </button>

        <div className="h-6 w-[2px] mx-1 border-r border-[color:var(--border-light)] bg-[color:var(--border-shadow)]"></div>

        <div className="flex gap-1 overflow-x-auto no-scrollbar">
          {isWelcomeOpen && (
            <button
              onClick={toggleWelcome}
              className="flex flex-row items-center justify-center win95-sunken p-1 px-2 sm:px-3 h-8 gap-1 sm:gap-2 active:brightness-90 max-w-[120px] sm:max-w-[150px] overflow-hidden shrink-0"
            >
              <span className="material-symbols-outlined text-sm shrink-0">
                desktop_windows
              </span>
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase truncate">
                WELCOME.EXE
              </span>
            </button>
          )}
          {isExperienceOpen && (
            <button
              onClick={toggleExperience}
              className="flex flex-row items-center justify-center win95-sunken p-1 px-2 sm:px-3 h-8 gap-1 sm:gap-2 active:brightness-90 max-w-[120px] sm:max-w-[150px] overflow-hidden shrink-0"
            >
              <span className="material-symbols-outlined text-sm shrink-0">
                description
              </span>
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase truncate">
                EXP.TXT
              </span>
            </button>
          )}
          {isSkillsOpen && (
            <button
              onClick={toggleSkills}
              className="flex flex-row items-center justify-center win95-sunken p-1 px-2 sm:px-3 h-8 gap-1 sm:gap-2 active:brightness-90 max-w-[120px] sm:max-w-[150px] overflow-hidden shrink-0"
            >
              <span className="material-symbols-outlined text-sm shrink-0">
                settings
              </span>
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase truncate">
                SKILLS.EXE
              </span>
            </button>
          )}
          {isWorksOpen && (
            <button
              onClick={toggleWorks}
              className="flex flex-row items-center justify-center win95-sunken p-1 px-2 sm:px-3 h-8 gap-1 sm:gap-2 active:brightness-90 max-w-[120px] sm:max-w-[150px] overflow-hidden shrink-0"
            >
              <span className="material-symbols-outlined text-sm shrink-0">
                palette
              </span>
              <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase truncate">
                WORKS - PAINT
              </span>
            </button>
          )}
        </div>

        {isCmdOpen && (
          <button
            onClick={toggleCmd}
            className="flex flex-row items-center justify-center win95-sunken p-1 px-2 sm:px-3 h-8 gap-1 sm:gap-2 active:brightness-90 max-w-[120px] sm:max-w-[150px] overflow-hidden shrink-0"
          >
            <span className="material-symbols-outlined text-sm shrink-0">
              palette
            </span>
            <span className="font-['Space_Grotesk'] text-[10px] font-bold uppercase truncate">
              CMD
            </span>
          </button>
        )}

        <div className="ml-auto flex items-center win95-sunken px-2 h-8 gap-3 bg-transparent shrink-0">
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center hover:text-blue-500 active:translate-y-px active:translate-x-px transition-colors"
            title="Toggle Theme"
          >
            <span className="material-symbols-outlined text-sm">
              {isDarkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>
          <span className="material-symbols-outlined text-sm hidden sm:inline">
            volume_up
          </span>
          <span className="material-symbols-outlined text-sm hidden sm:inline">
            shield
          </span>
          <span className="font-['Space_Grotesk'] text-[11px] font-bold uppercase">
            {currentTime}
          </span>
        </div>
      </nav>
      {isStartMenuOpen && <Menu />}
    </>
  );
}
