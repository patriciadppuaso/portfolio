function Main({ engineeringSkills, productSkills}){
    return(
        <main className="flex-1 w-full px-6 md:px-16 py-12 grid lg:grid-cols-12 gap-16">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-8 space-y-16">
              {/* SUMMARY */}
              <section>
                <h2 className="font-mono text-cyan-600 dark:text-[#00F5FF] text-xl mb-6">
                  /summary
                </h2>
                <p className="text-[17px] text-slate-700 dark:text-white/90 leading-relaxed font-light">
                  Technical-minded professional with a decade of experience
                  bridging the gap between{" "}
                  <span className="text-pink-600 dark:text-[#e278b5]">
                    clean code
                  </span>{" "}
                  and{" "}
                  <span className="text-pink-600 dark:text-[#e278b5]">
                    market performance
                  </span>
                  . Specialized in building high-conversion interfaces and
                  digital architectures that scale.
                </p>
              </section>

              {/* EXPERIENCE */}
              <section>
                <h2 className="font-mono text-cyan-600 dark:text-[#00F5FF] text-xl mb-8">
                  /work_experience
                </h2>

                <div className="space-y-6">
                  <div className="p-6 md:p-8 bg-white dark:bg-[#1a1a1a] shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent border-l-2 border-l-cyan-600 dark:border-l-[#00F5FF] transition-colors duration-300">
                    <div className="flex flex-col md:flex-row justify-between mb-4 md:items-start">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                          Senior Creative Technologist
                        </h3>
                        <p className="text-xs font-mono text-slate-500 dark:text-white/40 mt-1 uppercase tracking-widest">
                          LUMINA ARCHITECTS
                        </p>
                      </div>
                      <span className="text-xs font-mono mt-4 md:mt-0 bg-slate-100 dark:bg-[#222222] text-cyan-700 dark:text-[#00F5FF] px-3 py-1 self-start">
                        2018 — PRESENT
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-white/70 mb-6 font-light leading-relaxed">
                      Leading the development of experimental web platforms.
                      Reduced bundle sizes by 40% using modular architecture.
                      Mentored a team of 12 developers on modern UI patterns and
                      performance optimization.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {["REACT", "THREE.JS", "RUST"].map((t) => (
                        <span
                          key={t}
                          className="bg-slate-100 dark:bg-[#262626] text-pink-600 dark:text-[#e278b5] px-3 py-1 text-[11px] font-mono tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 md:p-8 bg-white dark:bg-[#1a1a1a] shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent transition-colors duration-300">
                    <div className="flex flex-col md:flex-row justify-between mb-4 md:items-start">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                          Full Stack Developer
                        </h3>
                        <p className="text-xs font-mono text-slate-500 dark:text-white/40 mt-1 uppercase tracking-widest">
                          SYNTAX SYSTEMS
                        </p>
                      </div>
                      <span className="text-xs font-mono mt-4 md:mt-0 text-slate-500 dark:text-white/40 px-3 py-1 self-start">
                        2013 — 2017
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-white/70 font-light leading-relaxed">
                      Developed high-traffic CRM integrations and custom CMS
                      solutions for Fortune 500 clients. Implemented automated
                      testing pipelines that increased deployment speed by 25%.
                    </p>
                  </div>

                  <div className="p-6 md:p-8 bg-white dark:bg-[#1a1a1a] shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent transition-colors duration-300">
                    <div className="flex flex-col md:flex-row justify-between mb-4 md:items-start">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                          Junior Web Designer
                        </h3>
                        <p className="text-xs font-mono text-slate-500 dark:text-white/40 mt-1 uppercase tracking-widest">
                          PIXEL & CO
                        </p>
                      </div>
                      <span className="text-xs font-mono mt-4 md:mt-0 text-slate-500 dark:text-white/40 px-3 py-1 self-start">
                        2011 — 2013
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-white/70 font-light leading-relaxed">
                      Assisted in front-end implementation of responsive designs
                      and maintainable CSS architectures.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-4 space-y-16">
              {/* SKILLS */}
              <section>
                <h2 className="font-mono text-cyan-600 dark:text-[#00F5FF] text-xl mb-8">
                  /skills
                </h2>

                <div className="mb-8">
                  <p className="text-[10px] font-mono text-slate-500 dark:text-white/40 tracking-widest uppercase mb-4">
                    Engineering
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {engineeringSkills.map((s) => (
                      <span
                        key={s}
                        className="bg-slate-100 dark:bg-[#262626] text-pink-600 dark:text-[#e278b5] px-3 py-1.5 text-[11px] font-mono tracking-wider"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-mono text-slate-500 dark:text-white/40 tracking-widest uppercase mb-4">
                    Product & Design
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {productSkills.map((s) => (
                      <span
                        key={s}
                        className="bg-slate-100 dark:bg-[#262626] text-pink-600 dark:text-[#e278b5] px-3 py-1.5 text-[11px] font-mono tracking-wider"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* EDUCATION */}
              <section>
                <h2 className="font-mono text-cyan-600 dark:text-[#00F5FF] text-xl mb-8">
                  /education
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white/90">
                      B.Sc Computer Science
                    </h3>
                    <p className="text-[11px] font-mono text-slate-500 dark:text-white/40 mt-1">
                      University of Technology, 2011
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white/90">
                      Google Ads Certification
                    </h3>
                    <p className="text-[11px] font-mono text-slate-500 dark:text-white/40 mt-1">
                      Marketing Professional, 2015
                    </p>
                  </div>
                </div>
              </section>

              {/* PROFILE IMAGE */}
              <div className="mt-12 bg-white dark:bg-[#1a1a1a] overflow-hidden rounded-sm w-full transition-colors duration-300">
                <img
                  className="w-full h-auto object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                  alt="Profile Portrait"
                />
              </div>
            </div>
          </main>
    )
}

export default Main;