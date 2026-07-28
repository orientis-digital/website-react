import React from 'react';

export default function About() {
  return (
    <main className="flex-1">
      <section className="min-h-[60vh] flex items-center justify-center text-center pt-[80px] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,transparent_70%)] -translate-x-1/2 -translate-y-1/2 blur-[60px] -z-10 animate-[drift_10s_infinite_alternate_ease-in-out]"></div>

        <div className="container mx-auto px-[5%] fade-up">
          <h1 className="text-[clamp(3.5rem,6vw,5rem)] font-extrabold tracking-tight leading-[1.1] mb-6 text-white uppercase">
            About <span className="text-tech-sky">Orientis Digital</span>
          </h1>
          <p className="text-lg text-gray-400">Building the future of modern digital infrastructure.</p>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        {/* Background glow behind manifesto */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(249,115,22,0.1)_0%,transparent_70%)] blur-[50px] -z-10 animate-pulse-ring"></div>

        <div className="container mx-auto px-[5%] max-w-4xl scale-up-fade">
          <div className="glass-panel p-10 md:p-16 rounded-3xl border border-white/5 relative text-center shadow-2xl hover:border-tech-blue/30 transition-all duration-300">
            {/* Brand accent badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-tech-blue/10 text-tech-sky border border-tech-blue/20 mb-8 uppercase tracking-widest">
              <i className="fa-solid fa-compass"></i> Our Manifesto
            </span>

            <h2 className="text-[clamp(2.25rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.1] mb-8 text-white">
              Engineering with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-sky to-tech-indigo">
                Purpose
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-6">
              "Orientis Digital was founded with a single goal: to provide enterprise-grade technology solutions that are accessible, scalable, and robust."
            </p>

            <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              In an era where digital landscapes are evolving daily, we stand as the partner for businesses looking to innovate and scale. We combine cutting-edge software engineering with modern cloud infrastructure to deliver products that don't just work — they drive business growth and engineering excellence.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
