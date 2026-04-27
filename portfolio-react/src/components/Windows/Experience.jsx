import useStore from "../../utils/store";
import React, { useRef } from "react";
import Draggable from "react-draggable";

export default function Experience() {
  const toggleExperience = useStore((state) => state.toggleExperience);
  const experienceRef = useRef(null);
  const stopDrag = (e) => {
    e.stopPropagation();
  };
  return (
    <Draggable nodeRef={experienceRef} handle=".drag-handle" bounds="parent">
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
              onClick={toggleExperience}
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
              Acted as a Team Enabler, managing administrative tasks and project
              timelines.
            </li>
            <li>
              Designed internal processes, improving member onboarding and event
              coordination.
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
              Developed responsive web and mobile interfaces acting as a User
              Advocate.
            </li>
          </ul>
        </div>
      </div>
    </Draggable>
  );
}
