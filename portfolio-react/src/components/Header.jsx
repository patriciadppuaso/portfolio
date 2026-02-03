export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight">
          Patricia Puaso
        </a>
        <nav className="space-x-2 text-sm hidden md:flex">
          <a
            href="#projects"
            className="px-3 py-2 rounded hover:bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Projects
          </a>
          <a
            href="#about"
            className="px-3 py-2 rounded hover:bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="px-3 py-2 rounded hover:bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Contact
          </a>
        </nav>
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            className="p-2 rounded hover:bg-gray-100"
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
              className="text-gray-700"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
