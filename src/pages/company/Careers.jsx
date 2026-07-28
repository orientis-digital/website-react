import React from 'react';

export default function Careers() {
  return (
    <main className="flex-1">
      <section className="min-h-[60vh] flex items-center justify-center text-center pt-[80px] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,transparent_70%)] -translate-x-1/2 -translate-y-1/2 blur-[60px] -z-10 animate-[drift_10s_infinite_alternate_ease-in-out]"></div>

        <div className="container mx-auto px-[5%] max-w-[900px] fade-up">
          <h1 className="text-[clamp(3.5rem,6vw,5rem)] font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
            Join our <span className="text-tech-blue">Team</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-[650px] mx-auto">Help us innovate the future of the web.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-[5%] max-w-[900px] text-center scale-up-fade">
          <div className="glass-panel p-12 md:p-16 rounded-3xl border border-white/5 relative text-center shadow-2xl hover:border-tech-blue/30 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-tech-blue/10 text-tech-sky border border-tech-blue/20 mb-8 text-2xl">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
              Careers at Orientis Digital
            </h2>
            <p className="text-lg md:text-xl text-muted max-w-[600px] mx-auto leading-relaxed">
              We are not yet accepting applications at this time. Please check back later for future opportunities and roles.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
