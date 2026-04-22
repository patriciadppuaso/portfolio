import profile from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 grid gap-8 md:grid-cols-2 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Hi, I'm Patricia — Frontend Engineer
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto md:mx-0 mb-6">
            I design and ship polished mobile and web experiences using React
            and Flutter. I care about accessibility, performance, and delightful
            interactions that help people get things done.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 btn-accent rounded-md shadow hover:opacity-90 transition"
            >
              View work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-muted rounded-md text-muted hover:bg-surface transition"
            >
              Contact me
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-48 h-48 rounded-full overflow-hidden bg-surface shadow-md">
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
