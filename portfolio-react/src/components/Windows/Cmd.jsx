import useStore from "../../utils/store";
import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

export default function Cmd() {
  const toggleCmd = useStore((state) => state.toggleCmd);
  const chatHistory = useStore((state) => state.chatHistory);
  const cmdRef = useRef(null);
  const cmdInputRef = useRef(null);
  const chatEndRef = useRef(null);
  const [currentCommand, setCurrentCommand] = useState("");
  //const [chatHistory, setChatHistory] = useState(null);
  const stopDrag = (e) => {
    e.stopPropagation();
  };

  const handleCommandSubmit = (e) => {
      if (e.key === "Enter" && currentCommand.trim() !== "") {
        const userInput = currentCommand.trim();
        const lowerInput = userInput.toLowerCase();
  
        setChatHistory((prev) => [
          ...prev,
          { type: "user", text: `C:\\USERS\\GUEST> ${userInput}` },
        ]);
  
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
  
        setTimeout(() => {
          setChatHistory((prev) => [...prev, { type: "bot", text: botResponse }]);
        }, 300);
  
        setCurrentCommand(""); 
      }
    };
  
  return (
    <Draggable nodeRef={cmdRef} handle=".drag-handle" bounds="parent">
      <div
        ref={cmdRef}
        className="absolute top-24 left-4 sm:left-[35%] w-[90vw] sm:w-[500px] window-bevel shadow-[4px_4px_0px_#000000] flex flex-col h-[60vh] sm:h-[400px] bg-[color:var(--os-bg)] z-50 pointer-events-auto"
      >
        <div className="drag-handle cursor-move h-7 title-bar flex items-center justify-between px-1 m-1 shrink-0">
          <div className="flex items-center gap-2 px-1">
            <span className="material-symbols-outlined text-sm">terminal</span>
            <span className="font-window-title text-window-title tracking-wider">
              C:\WINDOWS\system32\chat.exe
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={toggleCmd}
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
  );
}
