// import React, { useState, useEffect, useRef } from "react";

// import useStore from '../utils/store';
import useStore from "../utils/store";
import AppBar from "../components/appbar";
import Main from "../components/main";
import TaskBar from "../components/taskbar";

const RetroPortfolio = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  // Window States
  // const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  // const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);
  // const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  // const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  // const [isWorksOpen, setIsWorksOpen] = useState(false); // NEW: Works Window
  // const [isCmdOpen, setIsCmdOpen] = useState(false);
  // const [activeSkillTab, setActiveSkillTab] = useState("tech");

  // OS States
  // const [currentTime, setCurrentTime] = useState("");
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // Chatbot States & Refs
  //const [currentCommand, setCurrentCommand] = useState("");

  // const chatEndRef = useRef(null);
  // const cmdInputRef = useRef(null);

  // const startMenuRef = useRef(null);
  // const startButtonRef = useRef(null);

  // const welcomeRef = useRef(null);
  // const skillsRef = useRef(null);
  // const experienceRef = useRef(null);
  // const worksRef = useRef(null);
  // const cmdRef = useRef(null);

  // useEffect(() => {
  //   const updateTime = () => {
  //     const now = new Date();
  //     setCurrentTime(
  //       now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  //     );
  //   };
  //   updateTime();
  //   const interval = setInterval(updateTime, 60000);
  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       isStartMenuOpen &&
  //       startMenuRef.current &&
  //       !startMenuRef.current.contains(event.target) &&
  //       startButtonRef.current &&
  //       !startButtonRef.current.contains(event.target)
  //     ) {
  //       setIsStartMenuOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, [isStartMenuOpen]);

  // const toggleStartMenu = () => setIsStartMenuOpen(!isStartMenuOpen);
  // console.log(isStartMenuOpen);
  // // Paint Toolbar Icons
  

  // const handleCommandSubmit = (e) => {
  //   if (e.key === "Enter" && currentCommand.trim() !== "") {
  //     const userInput = currentCommand.trim();
  //     const lowerInput = userInput.toLowerCase();

  //     // 1. Add user's command to history
  //     setChatHistory((prev) => [
  //       ...prev,
  //       { type: "user", text: `C:\\USERS\\GUEST> ${userInput}` },
  //     ]);

  //     // 2. Determine bot's response
  //     let botResponse = "";

  //     if (lowerInput === "clear" || lowerInput === "cls") {
  //       setChatHistory([
  //         { type: "system", text: "HELPER_OS Terminal [Version 2.0.1]" },
  //         { type: "system", text: 'Type "help" to see what you can ask me.' },
  //       ]);
  //       setCurrentCommand("");
  //       return;
  //     } else if (lowerInput.includes("help")) {
  //       botResponse =
  //         "Try asking about: 'skills', 'experience', 'education', 'contact', or 'who are you'.";
  //     } else if (lowerInput.includes("skill")) {
  //       botResponse =
  //         "> I specialize in UI/UX Design (Figma), Web & Mobile Technologies (React, Tailwind), and Administrative Process Optimization.";
  //     } else if (
  //       lowerInput.includes("experience") ||
  //       lowerInput.includes("work")
  //     ) {
  //       botResponse =
  //         "> I have 2 years of experience as a Student Organization Leader, acting as a Team Enabler, alongside multiple IT capstone projects.";
  //     } else if (
  //       lowerInput.includes("education") ||
  //       lowerInput.includes("school")
  //     ) {
  //       botResponse =
  //         "> I am a graduating IT student majoring in Web and Mobile Technologies.";
  //     } else if (
  //       lowerInput.includes("contact") ||
  //       lowerInput.includes("email") ||
  //       lowerInput.includes("hire")
  //     ) {
  //       botResponse =
  //         "> You can reach me at: [YourEmail@example.com] or check my 'INBOX' app!";
  //     } else if (lowerInput.includes("who")) {
  //       botResponse =
  //         "> I am a creative IT specialist who blends design with administrative precision to help teams run smoothly.";
  //     } else {
  //       botResponse =
  //         "> Command or question not recognized. Type 'help' for hints.";
  //     }

  //     // 3. Simulate a slight delay for realism, then add bot response
  //     setTimeout(() => {
  //       setChatHistory((prev) => [...prev, { type: "bot", text: botResponse }]);
  //     }, 300);

  //     setCurrentCommand(""); // Clear input
  //   }
  // };

  // const stopDrag = (e) => {
  //   e.stopPropagation();
  // };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="desktop-bg h-[100dvh] w-full font-body-md overflow-hidden flex flex-col relative select-none transition-colors duration-200">
        {/* Top AppBar */}
        <AppBar />

        {/* Main Desktop Canvas */}
        <Main />
        {/* Navigation Drawer (Start Menu) */}

        {/* Taskbar */}
        <TaskBar />
      </div>
    </div>
  );
};

export default RetroPortfolio;
