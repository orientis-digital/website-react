import React from 'react';

export default function About() {
  return (
    <main className="flex-1 pt-28 pb-24">
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-white/5">
        <div className="absolute top-1/3 left-1/2 w-[700px] h-[500px] bg-tech-blue/10 -translate-x-1/2 -translate-y-1/2 blur-[140px] pointer-events-none -z-10"></div>

        <div className="container mx-auto px-[5%] max-w-[1000px] text-center fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-tech-blue/30 bg-tech-blue/10 text-tech-sky text-xs font-mono uppercase tracking-widest mb-6">
            <i className="fa-solid fa-compass"></i> Our Story &amp; Vision
          </span>

          <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold tracking-tight text-white uppercase leading-tight mb-6">
            Bridging the Digital Divide <br />
            <span className="bg-gradient-to-r from-tech-sky via-cyan-400 to-tech-indigo bg-clip-text text-transparent">
              In Eastern Visayas &amp; Beyond
            </span>
          </h1>

          <p className="max-w-[750px] mx-auto text-gray-400 text-base md:text-lg leading-relaxed font-sans mb-10">
            Orientis Digital is a Tacloban-based technology company founded to deliver affordable, BIR-compliant software products, custom applications, and managed IT services for MSMEs, government agencies, and growing enterprise teams.
          </p>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="py-20 bg-tech-black/40">
        <div className="container mx-auto px-[5%] max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Vision */}
            <div className="glass-panel p-10 rounded-3xl border border-white/10 relative overflow-hidden">
              <span className="text-xs font-mono uppercase text-tech-sky tracking-widest block mb-3">
                // Company Vision
              </span>
              <h2 className="text-2xl font-bold text-white uppercase mb-4">
                Leading Digital Transformation
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed font-sans">
                "To be the leading digital transformation partner in Eastern Visayas, empowering businesses through innovative technology solutions that drive growth, efficiency, and global competitiveness."
              </p>
            </div>

            {/* Mission */}
            <div className="glass-panel p-10 rounded-3xl border border-white/10 relative overflow-hidden">
              <span className="text-xs font-mono uppercase text-tech-indigo tracking-widest block mb-3">
                // Company Mission
              </span>
              <h2 className="text-2xl font-bold text-white uppercase mb-4">
                Solving Real Business Problems
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed font-sans">
                "Orientis Digital delivers custom software, mobile applications, BIR-compliant SaaS tools, and managed IT services. We combine technical excellence with deep understanding of local business needs to help MSMEs and enterprises thrive."
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-tech-sky text-xs font-mono font-bold uppercase tracking-widest block mb-2">
                // How We Operate
              </span>
              <h2 className="text-3xl font-extrabold text-white uppercase">Our Core Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-tech-sky/40 transition-all">
                <i className="fa-solid fa-handshake text-3xl text-tech-sky mb-4 block"></i>
                <h3 className="text-xl font-bold text-white mb-2">Integrity</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Transparent pricing, honest project timelines, and no hidden fees. We do what is right for our clients, every time.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-tech-indigo/40 transition-all">
                <i className="fa-solid fa-gem text-3xl text-tech-indigo mb-4 block"></i>
                <h3 className="text-xl font-bold text-white mb-2">Technical Excellence</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Clean architecture, thorough automated testing, and comprehensive documentation. We deliver quality, not just code.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all">
                <i className="fa-solid fa-lightbulb text-3xl text-cyan-400 mb-4 block"></i>
                <h3 className="text-xl font-bold text-white mb-2">Filipino Ingenuity</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Solving complex operational problems with resourcefulness, creating solutions that maximize ROI for local budgets.
                </p>
              </div>
            </div>
          </div>

          {/* Manifesto Card */}
          <div className="glass-panel p-10 md:p-14 rounded-3xl border border-white/10 relative text-center shadow-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-tech-blue/10 text-tech-sky border border-tech-blue/20 mb-6 uppercase tracking-widest">
              <i className="fa-solid fa-location-dot"></i> Tacloban City, Philippines
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight mb-6 text-white uppercase">
              Gawa sa Tacloban, Para sa Pilipinas
            </h2>

            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-sans">
              We're not just another IT company — we're your neighbors based in Eastern Visayas who understand local regulations, statutory requirements, and regional business constraints.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
