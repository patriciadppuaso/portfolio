export default function AppBar() {
  return (
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
  );
}
