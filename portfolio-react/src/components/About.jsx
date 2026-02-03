export default function About() {
  return (
    <section id="about" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-700 max-w-3xl">
        I'm a frontend engineer focused on crafting reliable, accessible interfaces
        for web and mobile. I combine practical engineering with strong product
        sense to deliver polished UIs, fast performance, and maintainable code.
      </p>
      <p className="text-gray-700 max-w-3xl mt-4">
        Typical work includes component-driven React apps, cross-platform Flutter
        prototypes, and accessible, responsive design systems. I enjoy working
        with small teams and mentoring junior engineers to improve developer
        experience and product quality.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href="/resume.pdf"
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
        >
          View resume
        </a>
        <a
          href="https://github.com/patriciapuaso"
          className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-50"
        >
          View code
        </a>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium mb-2">Core skills</h3>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs px-2 py-1 rounded bg-gray-100">React</span>
          <span className="text-xs px-2 py-1 rounded bg-gray-100">JavaScript</span>
          <span className="text-xs px-2 py-1 rounded bg-gray-100">Flutter</span>
          <span className="text-xs px-2 py-1 rounded bg-gray-100">Accessibility</span>
          <span className="text-xs px-2 py-1 rounded bg-gray-100">Performance</span>
          <span className="text-xs px-2 py-1 rounded bg-gray-100">Design systems</span>
        </div>
      </div>
    </section>
  );
}
