import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.id}
            className="bg-white rounded-lg shadow p-5 hover:shadow-lg transform hover:-translate-y-1 transition"
          >
            {/* <div className="h-36 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
              <span className="text-gray-400">Image</span>
            </div> */}
            <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-gray-600 mb-3">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100">
                  {t}
                </span>
              ))}
            </div>
            {p.link ? (
              <a
                href={p.link}
                className="text-blue-600 hover:underline text-sm"
              >
                View project →
              </a>
            ) : (
              <span className="text-sm text-gray-500">
                Private / demo unavailable
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
