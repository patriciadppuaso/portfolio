import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description:
        "Building responsive, accessible, and high-performance user interfaces.",
      skills: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Flutter",
      ],
    },
    {
      title: "Backend & Systems",
      description: "Architecting scalable APIs, databases, and microservices.",
      skills: ["Node.js", "Python", "Firebase", "MongoDB", "MySQL"],
    },
    {
      title: "Cloud & Infrastructure",
      description:
        "Deploying and maintaining reliable application environments.",
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD Pipelines",
        "Vercel",
        "Render",
      ],
    },
    {
      title: "Design & Product",
      description:
        "Bridging the gap between technical execution and user experience.",
      skills: [
        "Figma",
        "UI/UX Prototyping",
        "SEO Architecture",
        "Market Ops",
        "Agile",
        "FDD",
      ],
    },
  ];

  return (
    <main className="flex-1 w-full px-6 md:px-16 py-12 max-w-7xl mx-auto">
      <section className="mb-16">
        <h1 className="font-mono text-cyan-600 dark:text-[#00F5FF] text-2xl md:text-3xl mb-6">
          /technical_arsenal
        </h1>
        <p className="text-lg text-slate-700 dark:text-white/80 leading-relaxed font-light max-w-3xl">
          A comprehensive breakdown of the tools, languages, and frameworks I
          use to build scalable digital experiences. I focus on{" "}
          <span className="text-pink-600 dark:text-[#e278b5]">
            choosing the right tool for the job
          </span>{" "}
          rather than tying myself to a single ecosystem.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="p-8 bg-white dark:bg-[#1a1a1a] shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent border-t-2 border-t-cyan-600 dark:border-t-[#00F5FF] transition-colors duration-300 flex flex-col h-full"
          >
            <div className="mb-6 flex-1">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
                {category.title}
              </h3>
              <p className="text-slate-600 dark:text-white/60 text-sm font-light leading-relaxed">
                {category.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-white/5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-50 dark:bg-[#262626] text-pink-600 dark:text-[#e278b5] border border-slate-200 dark:border-transparent px-3 py-1.5 text-[11px] font-mono tracking-wider"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
