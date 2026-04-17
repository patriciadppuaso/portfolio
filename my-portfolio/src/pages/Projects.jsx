import React, { useState } from "react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web", "Mobile", "UI/UX Design"];

  // Placeholder data - replace with your actual projects!
  const projectsData = [
    {
      id: 1,
      title: "LegallyAI",
      category: ["Mobile", "Web"],
      description:
        "A high-performance financial dashboard handling real-time data visualization and secure user authentication.",
      tech: ["Flutter", "Python", "Flask", "Google Gemini", "RAG"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "TasteWise",
      category: ["Mobile"],
      description:
        "A cross-platform mobile application that tracks workouts, integrates with device health kits, and provides analytics.",
      tech: ["Flutter", "Spoonacular API", "Weather API", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Spacer",
      category: ["UI/UX Design"],
      description:
        "A comprehensive Figma design system and component library built for a modern boutique clothing brand.",
      tech: ["Figma", "Prototyping", "Wireframing"],
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "AI Content Generator",
      category: ["Web"],
      description:
        "A SaaS platform utilizing OpenAI's API to generate marketing copy, blog posts, and social media content.",
      tech: ["Next.js", "OpenAI API", "Stripe", "Prisma"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "FunSign",
      category: ["UI/UX Design"],
      description:
        "A comprehensive Figma design system and component library built for a modern boutique clothing brand.",
      tech: ["Figma", "Prototyping", "Wireframing"],
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "PSU Urdaneta OJT Portal",
      category: ["Web"],
      description:
        "A SaaS platform utilizing OpenAI's API to generate marketing copy, blog posts, and social media content.",
      tech: ["Laravel", "MySQL"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "MPAJ Shop",
      category: ["Web"],
      description:
        "A SaaS platform utilizing OpenAI's API to generate marketing copy, blog posts, and social media content.",
      tech: ["Laravel", "MySQL"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      title: "PSU Student Organization Portal and E-Commerce Website",
      category: ["Web"],
      description:
        "A SaaS platform utilizing OpenAI's API to generate marketing copy, blog posts, and social media content.",
      tech: ["Laravel", "MySQL"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      title: "PSU Student Organization Portal and E-Commerce Website",
      category: ["Web"],
      description:
        "A SaaS platform utilizing OpenAI's API to generate marketing copy, blog posts, and social media content.",
      tech: ["Flutter", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Filter projects based on the selected tab
  const filteredProjects = projectsData.filter((project) =>
    activeCategory === "All" ? true : project.category.includes(activeCategory),
  );

  return (
    <main className="flex-1 w-full px-6 md:px-16 py-12 max-w-7xl mx-auto">
      {/* HEADER */}
      <section className="mb-12">
        <h1 className="font-mono text-cyan-600 dark:text-[#00F5FF] text-2xl md:text-3xl mb-6">
          /featured_projects
        </h1>
        <p className="text-lg text-slate-700 dark:text-white/80 leading-relaxed font-light max-w-3xl">
          A selection of my recent work across different platforms and
          disciplines. Select a category below to filter the results.
        </p>
      </section>

      {/* FILTER TABS */}
      <section className="mb-12 flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 font-mono text-xs tracking-wider uppercase transition-all duration-300 ${
              activeCategory === category
                ? "bg-cyan-600 text-white dark:bg-[#00F5FF] dark:text-black font-bold"
                : "bg-slate-200 text-slate-600 hover:bg-slate-300 dark:bg-[#1a1a1a] dark:text-white/40 dark:hover:text-white dark:hover:bg-[#262626]"
            }`}
          >
            {category}
          </button>
        ))}
      </section>

      {/* PROJECTS GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col bg-white dark:bg-[#1a1a1a] shadow-sm dark:shadow-none border border-slate-200 dark:border-white/5 overflow-hidden hover:border-cyan-600 dark:hover:border-[#00F5FF] transition-colors duration-300"
          >
            {/* Project Image */}
            <div className="h-64 overflow-hidden bg-slate-100 dark:bg-[#111]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Project Details */}
            <div className="p-8 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                {/* External Link Icon (Optional) */}
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-600 dark:text-white/30 dark:hover:text-[#00F5FF] transition-colors"
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
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>

              <p className="text-slate-600 dark:text-white/60 text-sm font-light leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100 dark:border-white/5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-slate-50 dark:bg-[#262626] text-pink-600 dark:text-[#e278b5] px-2.5 py-1 text-[10px] font-mono tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
