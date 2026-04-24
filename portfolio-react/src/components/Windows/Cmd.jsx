// export default function Cmd() {
//   {
//     isCmdOpen && (
//       <Draggable nodeRef={cmdRef} handle=".drag-handle" bounds="parent">
//         <div
//           ref={cmdRef}
//           className="absolute top-24 left-4 sm:left-[35%] w-[90vw] sm:w-[500px] window-bevel shadow-[4px_4px_0px_#000000] flex flex-col h-[60vh] sm:h-[400px] bg-[color:var(--os-bg)] z-50 pointer-events-auto"
//         >
//           <div className="drag-handle cursor-move h-7 title-bar flex items-center justify-between px-1 m-1 shrink-0">
//             <div className="flex items-center gap-2 px-1">
//               <span className="material-symbols-outlined text-sm">
//                 terminal
//               </span>
//               <span className="font-window-title text-window-title tracking-wider">
//                 C:\WINDOWS\system32\chat.exe
//               </span>
//             </div>
//             <div className="flex items-center gap-1">
//               <button
//                 onClick={() => setIsCmdOpen(false)}
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

//           {/* CMD Terminal Content */}
//           <div
//             className="flex-grow m-1 mb-2 bg-black text-black dark:text-gray-300  font-mono text-sm p-2 overflow-y-auto win95-sunken cursor-text"
//             onClick={() => cmdInputRef.current?.focus()}
//           >
//             {chatHistory.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`mb-1 ${msg.type === "bot" ? "text-green-600 dark:text-green-400" : ""} ${msg.text === " " ? "h-4" : ""}`}
//               >
//                 {msg.text}
//               </div>
//             ))}

//             {/* Active Input Line */}
//             <div className="flex items-center mt-1">
//               <span className="mr-2">C:\USERS\GUEST&gt;</span>
//               <input
//                 ref={cmdInputRef}
//                 type="text"
//                 value={currentCommand}
//                 onChange={(e) => setCurrentCommand(e.target.value)}
//                 onKeyDown={handleCommandSubmit}
//                 className="bg-transparent border-none outline-none focus:outline-none flex-grow text-gray-300 font-mono"
//                 autoFocus
//                 autoComplete="off"
//                 spellCheck="false"
//               />
//             </div>
//             {/* Invisible div to scroll to */}
//             <div ref={chatEndRef} />
//           </div>
//         </div>
//       </Draggable>
//     );
//   }
// }
