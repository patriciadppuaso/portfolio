export default function Header() {
  return (
    <header className="bg-surface shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-semibold tracking-tight text-primary"
        >
          Patricia Puaso
        </a>
        <nav className="space-x-2 text-sm hidden md:flex">
          <a
            href="#projects"
            className="px-3 py-2 rounded hover:bg-surface text-muted focus:outline-none focus:ring-2 focus:ring-white"
          >
            Projects
          </a>
          <a
            href="#about"
            className="px-3 py-2 rounded hover:bg-surface text-muted focus:outline-none focus:ring-2 focus:ring-white"
          >
            About
          </a>
          <a
            href="#contact"
            className="px-3 py-2 rounded hover:bg-surface text-muted focus:outline-none focus:ring-2 focus:ring-white"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            className="hidden md:inline-block px-3 py-2 text-sm text-muted border rounded hover:bg-surface"
          >
            Resume
          </a>
          <div className="md:hidden">
            <button
              aria-label="Open menu"
              className="p-2 rounded hover:bg-surface"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
