import profile from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 grid gap-8 md:grid-cols-2 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Patricia
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto md:mx-0 mb-6">
            I build modern web applications and clean UI experiences. I focus on
            accessible, responsive design and fast, maintainable frontends.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
            >
              See Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-100 shadow-md">
            <img
              src={profile}
              alt="Portrait of Patricia Puaso"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
