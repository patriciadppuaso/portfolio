import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";

const RetroPortfolio = () => {
  // Window States
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isWorksOpen, setIsWorksOpen] = useState(false); // NEW: Works Window
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [activeSkillTab, setActiveSkillTab] = useState("tech");

  // OS States
  const [currentTime, setCurrentTime] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Chatbot States & Refs
  const [currentCommand, setCurrentCommand] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { type: "system", text: "HELPER_OS Terminal [Version 2.0.1]" },
    { type: "system", text: "(c) Creative Entity. All rights reserved." },
    { type: "system", text: " " },
    {
      type: "system",
      text: 'Type "help" to see what you can ask me, or "clear" to clear screen.',
    },
  ]);
  const chatEndRef = useRef(null);
  const cmdInputRef = useRef(null);

  const startMenuRef = useRef(null);
  const startButtonRef = useRef(null);

  const welcomeRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const worksRef = useRef(null);
  const cmdRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isStartMenuOpen &&
        startMenuRef.current &&
        !startMenuRef.current.contains(event.target) &&
        startButtonRef.current &&
        !startButtonRef.current.contains(event.target)
      ) {
        setIsStartMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isStartMenuOpen]);

  const toggleStartMenu = () => setIsStartMenuOpen(!isStartMenuOpen);
  console.log(isStartMenuOpen);
  // Paint Toolbar Icons
  const paintTools = [
    "star",
    "crop_free",
    "ink_eraser",
    "format_color_fill",
    "colorize",
    "search",
    "edit",
    "brush",
    "air",
    "text_fields",
    "horizontal_rule",
    "timeline",
    "crop_square",
    "polyline",
    "circle",
    "category",
  ];

  // Paint Color Swatches
  const paintColors = [
    "#000000",
    "#808080",
    "#800000",
    "#808000",
    "#008000",
    "#008080",
    "#000080",
    "#800080",
    "#808040",
    "#004040",
    "#0080ff",
    "#004080",
    "#4000ff",
    "#804000",
    "#ffffff",
    "#c0c0c0",
    "#ff0000",
    "#ffff00",
    "#00ff00",
    "#00ffff",
    "#0000ff",
    "#ff00ff",
    "#ffff80",
    "#00ff80",
    "#80ffff",
    "#8080ff",
    "#ff0080",
    "#ff8040",
  ];

  const handleCommandSubmit = (e) => {
    if (e.key === "Enter" && currentCommand.trim() !== "") {
      const userInput = currentCommand.trim();
      const lowerInput = userInput.toLowerCase();

      // 1. Add user's command to history
      setChatHistory((prev) => [
        ...prev,
        { type: "user", text: `C:\\USERS\\GUEST> ${userInput}` },
      ]);

      // 2. Determine bot's response
      let botResponse = "";

      if (lowerInput === "clear" || lowerInput === "cls") {
        setChatHistory([
          { type: "system", text: "HELPER_OS Terminal [Version 2.0.1]" },
          { type: "system", text: 'Type "help" to see what you can ask me.' },
        ]);
        setCurrentCommand("");
        return;
      } else if (lowerInput.includes("help")) {
        botResponse =
          "Try asking about: 'skills', 'experience', 'education', 'contact', or 'who are you'.";
      } else if (lowerInput.includes("skill")) {
        botResponse =
          "> I specialize in UI/UX Design (Figma), Web & Mobile Technologies (React, Tailwind), and Administrative Process Optimization.";
      } else if (
        lowerInput.includes("experience") ||
        lowerInput.includes("work")
      ) {
        botResponse =
          "> I have 2 years of experience as a Student Organization Leader, acting as a Team Enabler, alongside multiple IT capstone projects.";
      } else if (
        lowerInput.includes("education") ||
        lowerInput.includes("school")
      ) {
        botResponse =
          "> I am a graduating IT student majoring in Web and Mobile Technologies.";
      } else if (
        lowerInput.includes("contact") ||
        lowerInput.includes("email") ||
        lowerInput.includes("hire")
      ) {
        botResponse =
          "> You can reach me at: [YourEmail@example.com] or check my 'INBOX' app!";
      } else if (lowerInput.includes("who")) {
        botResponse =
          "> I am a creative IT specialist who blends design with administrative precision to help teams run smoothly.";
      } else {
        botResponse =
          "> Command or question not recognized. Type 'help' for hints.";
      }

      // 3. Simulate a slight delay for realism, then add bot response
      setTimeout(() => {
        setChatHistory((prev) => [...prev, { type: "bot", text: botResponse }]);
      }, 300);

      setCurrentCommand(""); // Clear input
    }
  };

  const stopDrag = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="desktop-bg h-[100dvh] w-full font-body-md overflow-hidden flex flex-col relative select-none transition-colors duration-200">
        {/* Top AppBar */}
        <header className="title-bar font-['Space_Grotesk'] font-bold tracking-tight text-sm uppercase flex justify-between items-center w-full px-2 h-8 z-50 border-t-2 border-l-2 border-[color:var(--border-light)] border-r-2 border-b-2 border-black shadow-[inset_1px_1px_0px_var(--border-light)] shrink-0">
          <div className="text-sm font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-base">
              desktop_windows
            </span>
            <span>PORTFOLIO.EXE</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="h-5 w-5 flex items-center justify-center win95-raised active:translate-x-[1px] active:translate-y-[1px]">
              <span className="material-symbols-outlined text-xs">close</span>
            </button>
          </div>
        </header>

        {/* Main Desktop Canvas */}
        <main className="flex-grow relative p-4 grid grid-cols-[repeat(auto-fill,80px)] grid-rows-[repeat(auto-fill,90px)] gap-4 items-start content-start overflow-hidden">
          <div
            onClick={() => setIsWelcomeOpen(true)}
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
            onClick={() => setIsExperienceOpen(true)}
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
            onClick={() => setIsSkillsOpen(true)}
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
            onClick={() => setIsWorksOpen(true)}
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
            onClick={() => {
              setIsCmdOpen(true);
              setTimeout(() => cmdInputRef.current?.focus(), 100);
            }}
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
          {isWelcomeOpen && (
            <Draggable
              nodeRef={welcomeRef}
              handle=".drag-handle"
              bounds="parent"
            >
              <div
                ref={welcomeRef}
                className="absolute top-[10vh] left-[2.5vw] sm:top-[15vh] sm:left-[calc(50vw-300px)] w-[95vw] sm:w-[600px] window-bevel shadow-[4px_4px_0px_#000000] flex flex-col max-h-[80vh] overflow-hidden bg-[color:var(--os-bg)] z-10 pointer-events-auto"
              >
                <div className="drag-handle cursor-move h-7 title-bar flex items-center justify-between px-1 m-1 shrink-0">
                  <div className="flex items-center gap-2 px-1">
                    <span className="material-symbols-outlined text-sm">
                      desktop_windows
                    </span>
                    <span className="font-window-title text-window-title uppercase tracking-wider">
                      WELCOME.EXE
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setIsWelcomeOpen(false)}
                      onMouseDown={stopDrag}
                      onTouchStart={stopDrag}
                      className="w-5 h-5 win95-raised flex items-center justify-center hover:brightness-110 active:translate-x-px active:translate-y-px"
                    >
                      <span className="material-symbols-outlined text-[10px] font-bold">
                        minimize
                      </span>
                    </button>
                    <button
                      onMouseDown={stopDrag}
                      onTouchStart={stopDrag}
                      className="w-5 h-5 win95-raised flex items-center justify-center hover:brightness-110 active:translate-x-px active:translate-y-px"
                    >
                      <span className="material-symbols-outlined text-[10px] font-bold">
                        check_box_outline_blank
                      </span>
                    </button>
                    <button
                      onClick={() => setIsWelcomeOpen(false)}
                      onMouseDown={stopDrag}
                      onTouchStart={stopDrag}
                      className="w-5 h-5 win95-raised flex items-center justify-center hover:brightness-110 ml-1 active:translate-x-px active:translate-y-px"
                    >
                      <span className="material-symbols-outlined text-[10px] font-bold">
                        close
                      </span>
                    </button>
                  </div>
                </div>

                {/* Window Content */}
                <div className="p-6 flex flex-col md:flex-row gap-8 overflow-y-auto">
                  <div className="shrink-0 mx-auto md:mx-0">
                    <div className="w-40 h-40 win95-sunken bg-black overflow-hidden relative">
                      <img
                        alt="Pixel art avatar"
                        className="w-full h-full object-cover grayscale contrast-125 brightness-75 mix-blend-screen"
                        src="https://via.placeholder.com/150"
                      />
                      <div className="absolute inset-0 opacity-20 pointer-events-none dither-pattern"></div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                    <div className="space-y-1">
                      <h1 className="font-headline-lg text-headline-lg uppercase leading-tight text-blue-600 dark:text-blue-400">
                        CREATIVE_ENTITY
                      </h1>
                      <p className="font-headline-md text-headline-md uppercase opacity-80 border-b-2 border-[color:var(--border-shadow)] pb-2">
                        PIXEL ARTIST & DESIGNER
                      </p>
                    </div>
                    <div className="win95-sunken content-box p-3 font-code-sm text-code-sm leading-relaxed max-w-md">
                      Initializing portfolio system... <br />
                      Status:{" "}
                      <span className="text-green-600 dark:text-green-500 font-bold">
                        ONLINE
                      </span>{" "}
                      <br />
                      Current Task: Redefining digital aesthetics through a
                      retro-futurist lens. Frame your vision.
                    </div>
                    <div className="flex gap-4 pt-2 flex-wrap">
                      <button className="px-6 py-2 win95-raised font-bold text-sm uppercase flex items-center gap-2 hover:brightness-110 active:win95-sunken active:translate-x-px active:translate-y-px">
                        <span className="material-symbols-outlined text-sm">
                          folder
                        </span>
                        VIEW_WORKS
                      </button>
                      <button className="px-6 py-2 win95-raised font-bold text-sm uppercase flex items-center gap-2 hover:brightness-110 active:win95-sunken active:translate-x-px active:translate-y-px">
                        <span className="material-symbols-outlined text-sm">
                          download
                        </span>
                        CV.PDF
                      </button>
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="h-6 mx-1 mb-1 flex items-center win95-sunken px-2 text-[10px] font-bold gap-4 shrink-0">
                  <div className="flex items-center gap-1 border-r border-[color:var(--border-shadow)] pr-4">
                    <span className="material-symbols-outlined text-xs">
                      info
                    </span>
                    SYSTEM: READY
                  </div>
                  <div className="flex items-center gap-1 hidden sm:flex">
                    <span className="material-symbols-outlined text-xs">
                      language
                    </span>
                    EN-US
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    100% SECURE
                    <span className="material-symbols-outlined text-xs">
                      verified_user
                    </span>
                  </div>
                </div>
              </div>
            </Draggable>
          )}

          {/* ========================================== */}
          {/* WINDOW 2: EXPERIENCE.TXT */}
          {/* ========================================== */}
          {isExperienceOpen && (
            <Draggable
              nodeRef={experienceRef}
              handle=".drag-handle"
              bounds="parent"
            >
              <div
                ref={experienceRef}
                className="absolute top-4 sm:top-10 left-2 sm:left-[20%] w-[95vw] sm:w-[600px] window-bevel shadow-[4px_4px_0px_#000000] flex flex-col max-h-[80vh] overflow-hidden bg-[color:var(--os-bg)] z-10 pointer-events-auto"
              >
                <div className="drag-handle cursor-move h-7 title-bar flex items-center justify-between px-1 m-1 shrink-0">
                  <div className="flex items-center gap-2 px-1">
                    <span className="material-symbols-outlined text-sm">
                      description
                    </span>
                    <span className="font-window-title text-window-title tracking-wider">
                      Experience.txt - Notepad
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setIsExperienceOpen(false)}
                      onMouseDown={stopDrag}
                      onTouchStart={stopDrag}
                      className="w-5 h-5 win95-raised flex items-center justify-center hover:brightness-110 ml-1 active:translate-x-px active:translate-y-px"
                    >
                      <span className="material-symbols-outlined text-[10px] font-bold">
                        close
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex gap-4 px-2 py-1 border-b border-[color:var(--border-shadow)] text-xs text-[color:var(--os-text)]">
                  <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
                    File
                  </span>
                  <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
                    Edit
                  </span>
                  <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
                    Search
                  </span>
                  <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
                    Help
                  </span>
                </div>
                <div className="p-4 overflow-y-auto content-box font-code-sm text-[13px] sm:text-sm leading-relaxed m-1 win95-sunken h-[300px]">
                  <p className="font-bold border-b border-dashed border-gray-400 mb-2 pb-1">
                    STUDENT ORGANIZATION LEADER
                  </p>
                  <p className="mb-1 text-blue-600 dark:text-blue-400">
                    University Name | 2022 - Present
                  </p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>
                      Acted as a Team Enabler, managing administrative tasks and
                      project timelines.
                    </li>
                    <li>
                      Designed internal processes, improving member onboarding
                      and event coordination.
                    </li>
                  </ul>
                  <p className="font-bold border-b border-dashed border-gray-400 mb-2 pb-1">
                    IT SPECIALIST (WEB & MOBILE)
                  </p>
                  <p className="mb-1 text-blue-600 dark:text-blue-400">
                    Capstone & Coursework | 2020 - Present
                  </p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>
                      Developed responsive web and mobile interfaces acting as a
                      User Advocate.
                    </li>
                  </ul>
                </div>
              </div>
            </Draggable>
          )}

          {/* ========================================== */}
          {/* WINDOW 3: SKILLS.EXE */}
          {/* ========================================== */}
          {isSkillsOpen && (
            <Draggable
              nodeRef={welcomeRef}
              handle=".drag-handle"
              bounds="parent"
            >
              <div
                ref={skillsRef}
                className="absolute top-16 sm:top-24 left-6 sm:left-[30%] w-[90vw] sm:w-[450px] window-bevel shadow-[4px_4px_0px_#000000] flex flex-col max-h-[75vh] overflow-hidden bg-[color:var(--os-bg)] z-30 pointer-events-auto"
              >
                <div className="drag-handle cursor-move h-7 title-bar flex items-center justify-between px-1 m-1 shrink-0">
                  <div className="flex items-center gap-2 px-1">
                    <span className="material-symbols-outlined text-sm">
                      settings
                    </span>
                    <span className="font-window-title text-window-title tracking-wider">
                      System Properties
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setIsSkillsOpen(false)}
                      onMouseDown={stopDrag}
                      onTouchStart={stopDrag}
                      className="w-5 h-5 win95-raised flex items-center justify-center hover:brightness-110 ml-1 active:translate-x-px active:translate-y-px"
                    >
                      <span className="material-symbols-outlined text-[10px] font-bold">
                        close
                      </span>
                    </button>
                  </div>
                </div>

                {/* Functional Tabs Container */}
                <div className="flex px-2 pt-2 gap-1 relative top-[2px] z-10 text-[color:var(--os-text)]">
                  {/* Technical Tab */}
                  <div
                    onClick={() => setActiveSkillTab("tech")}
                    className={`px-3 py-1 text-xs cursor-pointer flex-shrink-0 ${
                      activeSkillTab === "tech"
                        ? "win95-raised border-b-0 font-bold bg-[color:var(--os-bg)] pb-2 z-20"
                        : "border-t-2 border-l-2 border-[color:var(--border-light)] border-r-2 border-[color:var(--border-shadow)] mt-[2px] pb-1 z-0 hover:brightness-110"
                    }`}
                  >
                    Technical Specs
                  </div>

                  {/* Soft Skills Tab */}
                  <div
                    onClick={() => setActiveSkillTab("soft")}
                    className={`px-3 py-1 text-xs cursor-pointer flex-shrink-0 ${
                      activeSkillTab === "soft"
                        ? "win95-raised border-b-0 font-bold bg-[color:var(--os-bg)] pb-2 z-20"
                        : "border-t-2 border-l-2 border-[color:var(--border-light)] border-r-2 border-[color:var(--border-shadow)] mt-[2px] pb-1 z-0 hover:brightness-110"
                    }`}
                  >
                    Helper Protocols
                  </div>
                </div>

                {/* Main Content Area (Changes based on active tab) */}
                <div className="p-4 overflow-y-auto text-sm win95-raised m-2 mt-0 text-[color:var(--os-text)] relative z-10">
                  {/* Static Header visible on both tabs */}
                  <div className="flex gap-4 items-start mb-4 border-b border-[color:var(--border-shadow)] pb-4">
                    <span className="text-4xl">💻</span>
                    <div>
                      <p className="font-bold text-blue-700 dark:text-blue-300">
                        HELPER_OS v2.0
                      </p>
                      <p className="text-xs">Registered to: Creative Entity</p>
                    </div>
                  </div>

                  {/* DYNAMIC CONTENT: Technical Skills */}
                  {activeSkillTab === "tech" && (
                    <div className="space-y-4 h-[180px]">
                      <div>
                        <p className="font-bold flex items-center gap-2">
                          <span className="text-green-600 dark:text-green-500 material-symbols-outlined text-base">
                            terminal
                          </span>
                          Development Core
                        </p>
                        <p className="text-xs ml-6 mt-1 leading-relaxed">
                          Web & Mobile Technologies, React, Tailwind CSS,
                          HTML/CSS/JS, API Integration
                        </p>
                      </div>
                      <div>
                        <p className="font-bold flex items-center gap-2">
                          <span className="text-blue-600 dark:text-blue-400 material-symbols-outlined text-base">
                            brush
                          </span>
                          UI/UX & Art Engine
                        </p>
                        <p className="text-xs ml-6 mt-1 leading-relaxed">
                          Figma, FigJam, Wireframing, User Flows, Prototyping,
                          Graphic Design, Pixel Art
                        </p>
                      </div>
                    </div>
                  )}

                  {/* DYNAMIC CONTENT: Soft Skills */}
                  {activeSkillTab === "soft" && (
                    <div className="space-y-4 h-[180px]">
                      <div>
                        <p className="font-bold flex items-center gap-2">
                          <span className="text-yellow-600 dark:text-yellow-500 material-symbols-outlined text-base">
                            hub
                          </span>
                          Management Protocols
                        </p>
                        <p className="text-xs ml-6 mt-1 leading-relaxed">
                          Team Leadership, Project Management, Process
                          Optimization, Task Delegation, Event Organization
                        </p>
                      </div>
                      <div>
                        <p className="font-bold flex items-center gap-2">
                          <span className="text-red-500 dark:text-red-400 material-symbols-outlined text-base">
                            support_agent
                          </span>
                          Helper Threads
                        </p>
                        <p className="text-xs ml-6 mt-1 leading-relaxed">
                          Empathy & User Advocacy, Active Listening, Conflict
                          Resolution, Cross-functional Communication
                        </p>
                      </div>
                    </div>
                  )}

                  {/* OK Button */}
                  <div className="mt-2 flex justify-end pt-4 border-t border-[color:var(--border-shadow)]">
                    <button
                      onClick={() => setIsSkillsOpen(false)}
                      className="px-6 py-1 win95-raised font-bold text-xs active:translate-x-px active:translate-y-px hover:brightness-110"
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </Draggable>
          )}

          {/* ========================================== */}
          {/* WINDOW 4: WORKS.EXE (MS PAINT STYLE) */}
          {/* ========================================== */}
          {isWorksOpen && (
            <Draggable
              nodeRef={welcomeRef}
              handle=".drag-handle"
              bounds="parent"
            >
              <div
                ref={worksRef}
                className="absolute top-2 sm:top-12 left-1 sm:left-16 w-[98vw] sm:w-[750px] window-bevel shadow-[4px_4px_0px_#000000] flex flex-col h-[85vh] sm:h-[600px] bg-[color:var(--os-bg)] z-40 pointer-events-auto"
              >
                <div className="drag-handle cursor-move h-7 title-bar flex items-center justify-between px-1 m-1 shrink-0">
                  <div className="flex items-center gap-2 px-1">
                    <span className="material-symbols-outlined text-sm">
                      palette
                    </span>
                    <span className="font-window-title text-window-title tracking-wider">
                      works - Paint
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="w-5 h-5 win95-raised flex items-center justify-center hover:brightness-110 active:translate-x-px active:translate-y-px">
                      <span className="material-symbols-outlined text-[10px] font-bold text-[color:var(--os-text)]">
                        minimize
                      </span>
                    </button>
                    <button className="w-5 h-5 win95-raised flex items-center justify-center hover:brightness-110 active:translate-x-px active:translate-y-px">
                      <span className="material-symbols-outlined text-[10px] font-bold text-[color:var(--os-text)]">
                        check_box_outline_blank
                      </span>
                    </button>
                    <button
                      onClick={() => setIsWorksOpen(false)}
                      onMouseDown={stopDrag}
                      onTouchStart={stopDrag}
                      className="w-5 h-5 win95-raised flex items-center justify-center hover:brightness-110 ml-1 active:translate-x-px active:translate-y-px"
                    >
                      <span className="material-symbols-outlined text-[10px] font-bold">
                        close
                      </span>
                    </button>
                  </div>
                </div>

                {/* Paint Menu Bar */}
                <div className="flex gap-4 px-2 py-1 text-xs text-[color:var(--os-text)]">
                  <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
                    <span className="underline">F</span>ile
                  </span>
                  <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
                    <span className="underline">E</span>dit
                  </span>
                  <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
                    <span className="underline">V</span>iew
                  </span>
                  <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
                    <span className="underline">I</span>mage
                  </span>
                  <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
                    <span className="underline">O</span>ptions
                  </span>
                  <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
                    <span className="underline">H</span>elp
                  </span>
                </div>

                {/* Main Body (Toolbar + Canvas) */}
                <div className="flex flex-row flex-grow px-1 pb-1 overflow-hidden gap-1">
                  {/* Left Toolbar */}
                  <div className="w-14 shrink-0 flex flex-col items-center">
                    <div className="grid grid-cols-2 gap-[2px]">
                      {paintTools.map((icon, index) => (
                        <button
                          key={index}
                          className="w-6 h-6 win95-raised flex items-center justify-center active:win95-sunken hover:brightness-110 bg-[color:var(--os-bg)] text-[color:var(--os-text)]"
                        >
                          <span className="material-symbols-outlined text-[14px]">
                            {icon}
                          </span>
                        </button>
                      ))}
                    </div>
                    {/* Active Tool Option Box */}
                    <div className="mt-2 win95-sunken w-12 h-16 bg-[color:var(--os-bg)] flex items-center justify-center">
                      <div className="border border-dashed border-gray-500 w-8 h-8 flex items-center justify-center opacity-50">
                        <span className="material-symbols-outlined text-sm">
                          brush
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Canvas Area (Where projects go) */}
                  <div className="flex-grow win95-sunken content-box p-4 overflow-y-auto relative z-0">
                    <div className="mb-6">
                      <h2 className="font-bold text-2xl text-black dark:text-white border-b-2 border-dashed border-gray-300 pb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined">
                          design_services
                        </span>
                        UI/UX & Systems
                      </h2>
                    </div>

                    {/* Example Project Grid inside Canvas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Project 1 */}
                      <div className="border-2 border-black p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer group transition-colors">
                        <div className="aspect-video bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2 border border-gray-300">
                          <span className="text-4xl opacity-50 group-hover:scale-110 transition-transform">
                            📊
                          </span>
                        </div>
                        <h3 className="font-bold text-sm text-black dark:text-white">
                          Admin Dashboard Flow
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          FigJam Activity Diagram
                        </p>
                      </div>

                      {/* Project 2 */}
                      <div className="border-2 border-black p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer group transition-colors">
                        <div className="aspect-video bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-2 border border-gray-300">
                          <span className="text-4xl opacity-50 group-hover:scale-110 transition-transform">
                            📱
                          </span>
                        </div>
                        <h3 className="font-bold text-sm text-black dark:text-white">
                          Grocery App Wireframes
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Figma Prototypes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Paint Bottom Palette */}
                <div className="h-10 shrink-0 flex items-center px-1 pb-1 gap-2">
                  <div className="win95-sunken w-8 h-8 flex relative bg-[color:var(--os-bg)] shrink-0">
                    <div className="w-4 h-4 bg-black absolute top-1 left-1 border border-white z-10"></div>
                    <div className="w-4 h-4 bg-white absolute bottom-1 right-1 border border-gray-400"></div>
                  </div>
                  <div className="grid grid-rows-2 grid-flow-col gap-[1px]">
                    {paintColors.map((color, index) => (
                      <div
                        key={index}
                        className="w-[14px] h-[14px] win95-sunken cursor-pointer active:brightness-75"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </Draggable>
          )}

          {/* ========================================== */}
          {/* WINDOW 5: CMD / CHATBOT */}
          {/* ========================================== */}
          {isCmdOpen && (
            <Draggable nodeRef={cmdRef} handle=".drag-handle" bounds="parent">
              <div
                ref={cmdRef}
                className="absolute top-24 left-4 sm:left-[35%] w-[90vw] sm:w-[500px] window-bevel shadow-[4px_4px_0px_#000000] flex flex-col h-[60vh] sm:h-[400px] bg-[color:var(--os-bg)] z-50 pointer-events-auto"
              >
                <div className="drag-handle cursor-move h-7 title-bar flex items-center justify-between px-1 m-1 shrink-0">
                  <div className="flex items-center gap-2 px-1">
                    <span className="material-symbols-outlined text-sm">
                      terminal
                    </span>
                    <span className="font-window-title text-window-title tracking-wider">
                      C:\WINDOWS\system32\chat.exe
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setIsCmdOpen(false)}
                      onMouseDown={stopDrag}
                      onTouchStart={stopDrag}
                      className="w-5 h-5 win95-raised flex items-center justify-center hover:brightness-110 ml-1 active:translate-x-px active:translate-y-px"
                    >
                      <span className="material-symbols-outlined text-[10px] font-bold">
                        close
                      </span>
                    </button>
                  </div>
                </div>

                {/* CMD Terminal Content */}
                <div
                  className="flex-grow m-1 mb-2 bg-black text-black dark:text-gray-300  font-mono text-sm p-2 overflow-y-auto win95-sunken cursor-text"
                  onClick={() => cmdInputRef.current?.focus()}
                >
                  {chatHistory.map((msg, index) => (
                    <div
                      key={index}
                      className={`mb-1 ${msg.type === "bot" ? "text-green-600 dark:text-green-400" : ""} ${msg.text === " " ? "h-4" : ""}`}
                    >
                      {msg.text}
                    </div>
                  ))}

                  {/* Active Input Line */}
                  <div className="flex items-center mt-1">
                    <span className="mr-2">C:\USERS\GUEST&gt;</span>
                    <input
                      ref={cmdInputRef}
                      type="text"
                      value={currentCommand}
                      onChange={(e) => setCurrentCommand(e.target.value)}
                      onKeyDown={handleCommandSubmit}
                      className="bg-transparent border-none outline-none focus:outline-none flex-grow text-gray-300 font-mono"
                      autoFocus
                      autoComplete="off"
                      spellCheck="false"
                    />
                  </div>
                  {/* Invisible div to scroll to */}
                  <div ref={chatEndRef} />
                </div>
              </div>
            </Draggable>
          )}
        </main>
        {/* Navigation Drawer (Start Menu) */}
        {isStartMenuOpen && (
          <div
            ref={startMenuRef}
            className="absolute bottom-10 left-1 z-[60] w-64 flex flex-col shadow-2xl win95-raised font-['Space_Grotesk'] text-sm"
          >
            <div className="title-bar p-2 w-full flex items-center gap-3">
              <div className="w-8 h-8 rounded-none win95-sunken flex items-center justify-center overflow-hidden bg-[color:var(--os-bg)]">
                <span className="material-symbols-outlined text-[color:var(--os-text)]">
                  person
                </span>
              </div>
              <div>
                <div className="font-bold text-xs">CREATIVE_PRO</div>
                <div className="text-[10px] opacity-70">v1.0 ONLINE</div>
              </div>
            </div>
            <div className="flex flex-col p-1 gap-1">
              <div className="flex items-center gap-3 p-2 hover:bg-[color:var(--os-title-bg)] hover:text-white cursor-pointer group">
                <span className="material-symbols-outlined text-blue-500 group-hover:text-white">
                  apps
                </span>
                <span>Programs</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-[color:var(--os-title-bg)] hover:text-white cursor-pointer group">
                <span className="material-symbols-outlined text-yellow-600 group-hover:text-white">
                  description
                </span>
                <span>Documents</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-[color:var(--os-title-bg)] hover:text-white cursor-pointer group border-t border-[color:var(--border-shadow)] mt-1">
                <span className="material-symbols-outlined text-gray-500 group-hover:text-white">
                  settings
                </span>
                <span>Settings</span>
              </div>
            </div>
          </div>
        )}
        {/* Taskbar */}
        <nav className="relative w-full z-50 flex justify-start items-center gap-1 px-1 h-10 border-t-2 border-[color:var(--border-light)] shadow-none shrink-0 bg-[color:var(--os-bg)] text-[color:var(--os-text)]">
          <button
            ref={startButtonRef}
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
                onClick={() => setIsWelcomeOpen(!isWelcomeOpen)}
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
                onClick={() => setIsExperienceOpen(!isExperienceOpen)}
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
                onClick={() => setIsSkillsOpen(!isSkillsOpen)}
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
                onClick={() => setIsWorksOpen(!isWorksOpen)}
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

          <div className="ml-auto flex items-center win95-sunken px-2 h-8 gap-3 bg-transparent shrink-0">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
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
      </div>
    </div>
  );
};

export default RetroPortfolio;
