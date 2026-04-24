import React from "react";

export default function Menu() {
  return (
    <div className="absolute bottom-10 left-1 z-[60] w-64 flex flex-col shadow-2xl win95-raised font-['Space_Grotesk'] text-sm">
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
  );
}
