// export default function Skills() {
//   <>
//     {isSkillsOpen && (
//       <Draggable nodeRef={welcomeRef} handle=".drag-handle" bounds="parent">
//         <div
//           ref={skillsRef}
//           className="absolute top-16 sm:top-24 left-6 sm:left-[30%] w-[90vw] sm:w-[450px] window-bevel shadow-[4px_4px_0px_#000000] flex flex-col max-h-[75vh] overflow-hidden bg-[color:var(--os-bg)] z-30 pointer-events-auto"
//         >
//           <div className="drag-handle cursor-move h-7 title-bar flex items-center justify-between px-1 m-1 shrink-0">
//             <div className="flex items-center gap-2 px-1">
//               <span className="material-symbols-outlined text-sm">
//                 settings
//               </span>
//               <span className="font-window-title text-window-title tracking-wider">
//                 System Properties
//               </span>
//             </div>
//             <div className="flex items-center gap-1">
//               <button
//                 onClick={() => setIsSkillsOpen(false)}
//                 onMouseDown={stopDrag}
//                 onTouchStart={stopDrag}
//                 className="w-5 h-5 win95-raised flex items-center justify-center hover:brightness-110 ml-1 active:translate-x-px active:translate-y-px"
//               >
//                 <span className="material-symbols-outlined text-[10px] font-bold">
//                   close
//                 </span>
//               </button>
//             </div>
//           </div>

//           {/* Functional Tabs Container */}
//           <div className="flex px-2 pt-2 gap-1 relative top-[2px] z-10 text-[color:var(--os-text)]">
//             {/* Technical Tab */}
//             <div
//               onClick={() => setActiveSkillTab("tech")}
//               className={`px-3 py-1 text-xs cursor-pointer flex-shrink-0 ${
//                 activeSkillTab === "tech"
//                   ? "win95-raised border-b-0 font-bold bg-[color:var(--os-bg)] pb-2 z-20"
//                   : "border-t-2 border-l-2 border-[color:var(--border-light)] border-r-2 border-[color:var(--border-shadow)] mt-[2px] pb-1 z-0 hover:brightness-110"
//               }`}
//             >
//               Technical Specs
//             </div>

//             {/* Soft Skills Tab */}
//             <div
//               onClick={() => setActiveSkillTab("soft")}
//               className={`px-3 py-1 text-xs cursor-pointer flex-shrink-0 ${
//                 activeSkillTab === "soft"
//                   ? "win95-raised border-b-0 font-bold bg-[color:var(--os-bg)] pb-2 z-20"
//                   : "border-t-2 border-l-2 border-[color:var(--border-light)] border-r-2 border-[color:var(--border-shadow)] mt-[2px] pb-1 z-0 hover:brightness-110"
//               }`}
//             >
//               Helper Protocols
//             </div>
//           </div>

//           {/* Main Content Area (Changes based on active tab) */}
//           <div className="p-4 overflow-y-auto text-sm win95-raised m-2 mt-0 text-[color:var(--os-text)] relative z-10">
//             {/* Static Header visible on both tabs */}
//             <div className="flex gap-4 items-start mb-4 border-b border-[color:var(--border-shadow)] pb-4">
//               <span className="text-4xl">💻</span>
//               <div>
//                 <p className="font-bold text-blue-700 dark:text-blue-300">
//                   HELPER_OS v2.0
//                 </p>
//                 <p className="text-xs">Registered to: Creative Entity</p>
//               </div>
//             </div>

//             {/* DYNAMIC CONTENT: Technical Skills */}
//             {activeSkillTab === "tech" && (
//               <div className="space-y-4 h-[180px]">
//                 <div>
//                   <p className="font-bold flex items-center gap-2">
//                     <span className="text-green-600 dark:text-green-500 material-symbols-outlined text-base">
//                       terminal
//                     </span>
//                     Development Core
//                   </p>
//                   <p className="text-xs ml-6 mt-1 leading-relaxed">
//                     Web & Mobile Technologies, React, Tailwind CSS, HTML/CSS/JS,
//                     API Integration
//                   </p>
//                 </div>
//                 <div>
//                   <p className="font-bold flex items-center gap-2">
//                     <span className="text-blue-600 dark:text-blue-400 material-symbols-outlined text-base">
//                       brush
//                     </span>
//                     UI/UX & Art Engine
//                   </p>
//                   <p className="text-xs ml-6 mt-1 leading-relaxed">
//                     Figma, FigJam, Wireframing, User Flows, Prototyping, Graphic
//                     Design, Pixel Art
//                   </p>
//                 </div>
//               </div>
//             )}

//             {/* DYNAMIC CONTENT: Soft Skills */}
//             {activeSkillTab === "soft" && (
//               <div className="space-y-4 h-[180px]">
//                 <div>
//                   <p className="font-bold flex items-center gap-2">
//                     <span className="text-yellow-600 dark:text-yellow-500 material-symbols-outlined text-base">
//                       hub
//                     </span>
//                     Management Protocols
//                   </p>
//                   <p className="text-xs ml-6 mt-1 leading-relaxed">
//                     Team Leadership, Project Management, Process Optimization,
//                     Task Delegation, Event Organization
//                   </p>
//                 </div>
//                 <div>
//                   <p className="font-bold flex items-center gap-2">
//                     <span className="text-red-500 dark:text-red-400 material-symbols-outlined text-base">
//                       support_agent
//                     </span>
//                     Helper Threads
//                   </p>
//                   <p className="text-xs ml-6 mt-1 leading-relaxed">
//                     Empathy & User Advocacy, Active Listening, Conflict
//                     Resolution, Cross-functional Communication
//                   </p>
//                 </div>
//               </div>
//             )}

//             {/* OK Button */}
//             <div className="mt-2 flex justify-end pt-4 border-t border-[color:var(--border-shadow)]">
//               <button
//                 onClick={() => setIsSkillsOpen(false)}
//                 className="px-6 py-1 win95-raised font-bold text-xs active:translate-x-px active:translate-y-px hover:brightness-110"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         </div>
//       </Draggable>
//     )}
//   </>;
// }
