// export default function Works() {
//   return (
//     <>
//       {isWorksOpen && (
//         <Draggable nodeRef={welcomeRef} handle=".drag-handle" bounds="parent">
//           <div
//             ref={worksRef}
//             className="absolute top-2 sm:top-12 left-1 sm:left-16 w-[98vw] sm:w-[750px] window-bevel shadow-[4px_4px_0px_#000000] flex flex-col h-[85vh] sm:h-[600px] bg-[color:var(--os-bg)] z-40 pointer-events-auto"
//           >
//             <div className="drag-handle cursor-move h-7 title-bar flex items-center justify-between px-1 m-1 shrink-0">
//               <div className="flex items-center gap-2 px-1">
//                 <span className="material-symbols-outlined text-sm">
//                   palette
//                 </span>
//                 <span className="font-window-title text-window-title tracking-wider">
//                   works - Paint
//                 </span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <button className="w-5 h-5 win95-raised flex items-center justify-center hover:brightness-110 active:translate-x-px active:translate-y-px">
//                   <span className="material-symbols-outlined text-[10px] font-bold text-[color:var(--os-text)]">
//                     minimize
//                   </span>
//                 </button>
//                 <button className="w-5 h-5 win95-raised flex items-center justify-center hover:brightness-110 active:translate-x-px active:translate-y-px">
//                   <span className="material-symbols-outlined text-[10px] font-bold text-[color:var(--os-text)]">
//                     check_box_outline_blank
//                   </span>
//                 </button>
//                 <button
//                   onClick={() => setIsWorksOpen(false)}
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

//             {/* Paint Menu Bar */}
//             <div className="flex gap-4 px-2 py-1 text-xs text-[color:var(--os-text)]">
//               <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
//                 <span className="underline">F</span>ile
//               </span>
//               <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
//                 <span className="underline">E</span>dit
//               </span>
//               <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
//                 <span className="underline">V</span>iew
//               </span>
//               <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
//                 <span className="underline">I</span>mage
//               </span>
//               <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
//                 <span className="underline">O</span>ptions
//               </span>
//               <span className="cursor-pointer hover:bg-blue-600 hover:text-white px-1">
//                 <span className="underline">H</span>elp
//               </span>
//             </div>

//             {/* Main Body (Toolbar + Canvas) */}
//             <div className="flex flex-row flex-grow px-1 pb-1 overflow-hidden gap-1">
//               {/* Left Toolbar */}
//               <div className="w-14 shrink-0 flex flex-col items-center">
//                 <div className="grid grid-cols-2 gap-[2px]">
//                   {paintTools.map((icon, index) => (
//                     <button
//                       key={index}
//                       className="w-6 h-6 win95-raised flex items-center justify-center active:win95-sunken hover:brightness-110 bg-[color:var(--os-bg)] text-[color:var(--os-text)]"
//                     >
//                       <span className="material-symbols-outlined text-[14px]">
//                         {icon}
//                       </span>
//                     </button>
//                   ))}
//                 </div>
//                 {/* Active Tool Option Box */}
//                 <div className="mt-2 win95-sunken w-12 h-16 bg-[color:var(--os-bg)] flex items-center justify-center">
//                   <div className="border border-dashed border-gray-500 w-8 h-8 flex items-center justify-center opacity-50">
//                     <span className="material-symbols-outlined text-sm">
//                       brush
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Canvas Area (Where projects go) */}
//               <div className="flex-grow win95-sunken content-box p-4 overflow-y-auto relative z-0">
//                 <div className="mb-6">
//                   <h2 className="font-bold text-2xl text-black dark:text-white border-b-2 border-dashed border-gray-300 pb-2 flex items-center gap-2">
//                     <span className="material-symbols-outlined">
//                       design_services
//                     </span>
//                     UI/UX & Systems
//                   </h2>
//                 </div>

//                 {/* Example Project Grid inside Canvas */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {/* Project 1 */}
//                   <div className="border-2 border-black p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer group transition-colors">
//                     <div className="aspect-video bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2 border border-gray-300">
//                       <span className="text-4xl opacity-50 group-hover:scale-110 transition-transform">
//                         📊
//                       </span>
//                     </div>
//                     <h3 className="font-bold text-sm text-black dark:text-white">
//                       Admin Dashboard Flow
//                     </h3>
//                     <p className="text-xs text-gray-600 dark:text-gray-400">
//                       FigJam Activity Diagram
//                     </p>
//                   </div>

//                   {/* Project 2 */}
//                   <div className="border-2 border-black p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer group transition-colors">
//                     <div className="aspect-video bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-2 border border-gray-300">
//                       <span className="text-4xl opacity-50 group-hover:scale-110 transition-transform">
//                         📱
//                       </span>
//                     </div>
//                     <h3 className="font-bold text-sm text-black dark:text-white">
//                       Grocery App Wireframes
//                     </h3>
//                     <p className="text-xs text-gray-600 dark:text-gray-400">
//                       Figma Prototypes
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Paint Bottom Palette */}
//             <div className="h-10 shrink-0 flex items-center px-1 pb-1 gap-2">
//               <div className="win95-sunken w-8 h-8 flex relative bg-[color:var(--os-bg)] shrink-0">
//                 <div className="w-4 h-4 bg-black absolute top-1 left-1 border border-white z-10"></div>
//                 <div className="w-4 h-4 bg-white absolute bottom-1 right-1 border border-gray-400"></div>
//               </div>
//               <div className="grid grid-rows-2 grid-flow-col gap-[1px]">
//                 {paintColors.map((color, index) => (
//                   <div
//                     key={index}
//                     className="w-[14px] h-[14px] win95-sunken cursor-pointer active:brightness-75"
//                     style={{ backgroundColor: color }}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </Draggable>
//       )}
//     </>
//   );
// }
