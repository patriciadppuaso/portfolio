export default function About() {
  return (
    <section id="about" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-700 max-w-3xl">
        I'm a frontend developer with a passion for building accessible and
        performant user experiences. I enjoy working with React, modern CSS, and
        small teams to ship production-grade applications.
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="/resume.pdf"
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}
