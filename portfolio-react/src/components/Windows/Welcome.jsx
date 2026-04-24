// export default function Welcome() {
//   return (
//     <>
//       {isWelcomeOpen && (
//         <Draggable nodeRef={welcomeRef} handle=".drag-handle" bounds="parent">
//           <div
//             ref={welcomeRef}
//             className="absolute top-[10vh] left-[2.5vw] sm:top-[15vh] sm:left-[calc(50vw-300px)] w-[95vw] sm:w-[600px] window-bevel shadow-[4px_4px_0px_#000000] flex flex-col max-h-[80vh] overflow-hidden bg-[color:var(--os-bg)] z-10 pointer-events-auto"
//           >
//             <div className="drag-handle cursor-move h-7 title-bar flex items-center justify-between px-1 m-1 shrink-0">
//               <div className="flex items-center gap-2 px-1">
//                 <span className="material-symbols-outlined text-sm">
//                   desktop_windows
//                 </span>
//                 <span className="font-window-title text-window-title uppercase tracking-wider">
//                   WELCOME.EXE
//                 </span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <button
//                   onClick={() => setIsWelcomeOpen(false)}
//                   onMouseDown={stopDrag}
//                   onTouchStart={stopDrag}
//                   className="w-5 h-5 win95-raised flex items-center justify-center hover:brightness-110 active:translate-x-px active:translate-y-px"
//                 >
//                   <span className="material-symbols-outlined text-[10px] font-bold">
//                     minimize
//                   </span>
//                 </button>
//                 <button
//                   onMouseDown={stopDrag}
//                   onTouchStart={stopDrag}
//                   className="w-5 h-5 win95-raised flex items-center justify-center hover:brightness-110 active:translate-x-px active:translate-y-px"
//                 >
//                   <span className="material-symbols-outlined text-[10px] font-bold">
//                     check_box_outline_blank
//                   </span>
//                 </button>
//                 <button
//                   onClick={() => setIsWelcomeOpen(false)}
//                   onMouseDown={stopDrag}
//                   onTouchStart={stopDrag}
//                   className="w-5 h-5 win95-raised flex items-center justify-center hover:brightness-110 ml-1 active:translate-x-px active:translate-y-px"
//                 >
//                   <span className="material-symbols-outlined text-[10px] font-bold">
//                     close
//                   </span>
//                 </button>
//               </div>
//             </div>

//             {/* Window Content */}
//             <div className="p-6 flex flex-col md:flex-row gap-8 overflow-y-auto">
//               <div className="shrink-0 mx-auto md:mx-0">
//                 <div className="w-40 h-40 win95-sunken bg-black overflow-hidden relative">
//                   <img
//                     alt="Pixel art avatar"
//                     className="w-full h-full object-cover grayscale contrast-125 brightness-75 mix-blend-screen"
//                     src="https://via.placeholder.com/150"
//                   />
//                   <div className="absolute inset-0 opacity-20 pointer-events-none dither-pattern"></div>
//                 </div>
//               </div>
//               <div className="flex flex-col justify-center gap-4">
//                 <div className="space-y-1">
//                   <h1 className="font-headline-lg text-headline-lg uppercase leading-tight text-blue-600 dark:text-blue-400">
//                     CREATIVE_ENTITY
//                   </h1>
//                   <p className="font-headline-md text-headline-md uppercase opacity-80 border-b-2 border-[color:var(--border-shadow)] pb-2">
//                     PIXEL ARTIST & DESIGNER
//                   </p>
//                 </div>
//                 <div className="win95-sunken content-box p-3 font-code-sm text-code-sm leading-relaxed max-w-md">
//                   Initializing portfolio system... <br />
//                   Status:{" "}
//                   <span className="text-green-600 dark:text-green-500 font-bold">
//                     ONLINE
//                   </span>{" "}
//                   <br />
//                   Current Task: Redefining digital aesthetics through a
//                   retro-futurist lens. Frame your vision.
//                 </div>
//                 <div className="flex gap-4 pt-2 flex-wrap">
//                   <button className="px-6 py-2 win95-raised font-bold text-sm uppercase flex items-center gap-2 hover:brightness-110 active:win95-sunken active:translate-x-px active:translate-y-px">
//                     <span className="material-symbols-outlined text-sm">
//                       folder
//                     </span>
//                     VIEW_WORKS
//                   </button>
//                   <button className="px-6 py-2 win95-raised font-bold text-sm uppercase flex items-center gap-2 hover:brightness-110 active:win95-sunken active:translate-x-px active:translate-y-px">
//                     <span className="material-symbols-outlined text-sm">
//                       download
//                     </span>
//                     CV.PDF
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Status Bar */}
//             <div className="h-6 mx-1 mb-1 flex items-center win95-sunken px-2 text-[10px] font-bold gap-4 shrink-0">
//               <div className="flex items-center gap-1 border-r border-[color:var(--border-shadow)] pr-4">
//                 <span className="material-symbols-outlined text-xs">info</span>
//                 SYSTEM: READY
//               </div>
//               <div className="flex items-center gap-1 hidden sm:flex">
//                 <span className="material-symbols-outlined text-xs">
//                   language
//                 </span>
//                 EN-US
//               </div>
//               <div className="ml-auto flex items-center gap-1">
//                 100% SECURE
//                 <span className="material-symbols-outlined text-xs">
//                   verified_user
//                 </span>
//               </div>
//             </div>
//           </div>
//         </Draggable>
//       )}
//     </>
//   );
// }
