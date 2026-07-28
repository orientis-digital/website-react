import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="flex-1 pt-28 pb-24">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-white/5">
        <div className="absolute top-1/3 left-1/2 w-[700px] h-[500px] bg-tech-blue/10 -translate-x-1/2 -translate-y-1/2 blur-[140px] pointer-events-none -z-10"></div>

        <div className="container mx-auto px-[5%] max-w-[1100px] text-center fade-up">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-tech-blue/30 bg-tech-blue/10 text-tech-sky text-xs font-mono uppercase tracking-widest mb-6">
            <i className="fa-solid fa-location-dot"></i> Tacloban City, Leyte // Region 8 Digital Transformation
          </span>

          <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold tracking-tight text-white uppercase leading-tight mb-6">
            Digital Transformation, <br />
            <span className="bg-gradient-to-r from-tech-sky via-cyan-400 to-tech-indigo bg-clip-text text-transparent">
              Locally Delivered.
            </span>
          </h1>

          <p className="max-w-[780px] mx-auto text-gray-300 text-base md:text-lg leading-relaxed font-sans mb-10">
            Orientis Digital is Tacloban's full-service technology company. We empower micro, small, and medium enterprises (MSMEs), government agencies, and enterprises in Eastern Visayas with custom web &amp; mobile software, BIR-compliant software tools, and managed IT services.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-tech-blue to-tech-indigo text-white font-bold text-xs uppercase tracking-wider shadow-tech hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all"
            >
              Talk to Our Team
            </Link>
            <Link
              to="/solutions"
              className="px-8 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white font-bold text-xs uppercase tracking-wider hover:border-tech-sky transition-all"
            >
              Our Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="py-20 bg-tech-black/40">
        <div className="container mx-auto px-[5%] max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Vision */}
            <div className="glass-panel p-10 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-tech-sky/40 transition-all">
              <span className="text-xs font-mono uppercase text-tech-sky tracking-widest block mb-3">
                // Company Vision
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase mb-4 group-hover:text-tech-sky transition-colors">
                Empowering Eastern Visayas
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-sans">
                "To be the leading digital transformation partner in Eastern Visayas, empowering local businesses and public organizations through innovative technology solutions that drive growth, efficiency, and global competitiveness."
              </p>
            </div>

            {/* Mission */}
            <div className="glass-panel p-10 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-tech-indigo/40 transition-all">
              <span className="text-xs font-mono uppercase text-tech-indigo tracking-widest block mb-3">
                // Company Mission
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase mb-4 group-hover:text-tech-indigo transition-colors">
                Solving Real Business Challenges
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-sans">
                "Orientis Digital delivers custom web applications, mobile solutions, BIR-compliant software tools, and managed IT services. We combine technical excellence with deep regional market understanding to help local businesses thrive."
              </p>
            </div>
          </div>

          {/* Mission Pillars (4-Grid) */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="text-tech-sky text-xs font-mono font-bold uppercase tracking-widest block mb-2">
                // Mission Pillars
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase">
                Foundations of Our Commitment
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-sky/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-tech-blue/10 border border-tech-blue/20 flex items-center justify-center text-tech-sky text-xl mb-4">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Innovation</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Building modern, scalable software solutions using cutting-edge development stacks and cloud architecture.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-indigo/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-tech-indigo/10 border border-tech-indigo/20 flex items-center justify-center text-tech-indigo text-xl mb-4">
                  <i className="fa-solid fa-hand-holding-dollar"></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Accessibility</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Making enterprise-grade technology affordable for local MSMEs without Manila-level price markups.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-xl mb-4">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Reliability</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Providing SLA-backed technical support and same-day maintenance for mission-critical business systems.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-sky/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-tech-sky/10 border border-tech-sky/20 flex items-center justify-center text-tech-sky text-xl mb-4">
                  <i className="fa-solid fa-people-group"></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Partnership</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Working closely alongside our clients as a trusted technology advisor, not just a software vendor.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="text-tech-indigo text-xs font-mono font-bold uppercase tracking-widest block mb-2">
                // How We Operate
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase">
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-sky/40 transition-all">
                <h3 className="text-base font-bold text-white mb-2 text-tech-sky uppercase">Integrity</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Transparent pricing, honest project timelines, and no hidden fees.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-indigo/40 transition-all">
                <h3 className="text-base font-bold text-white mb-2 text-tech-indigo uppercase">Excellence</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Rigorous automated testing, clean software architecture, and complete documentation.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all">
                <h3 className="text-base font-bold text-white mb-2 text-cyan-400 uppercase">Filipino Ingenuity</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Solving complex problems with resourcefulness for maximum budget efficiency.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-sky/40 transition-all">
                <h3 className="text-base font-bold text-white mb-2 text-tech-sky uppercase">Client Success</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Focusing on measurable business growth rather than just delivering code.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-indigo/40 transition-all">
                <h3 className="text-base font-bold text-white mb-2 text-tech-indigo uppercase">Continuous Learning</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Constantly staying updated with software development and AI advancements.
                </p>
              </div>
            </div>
          </div>

          {/* Differentiators Grid */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="text-tech-sky text-xs font-mono font-bold uppercase tracking-widest block mb-2">
                // Unique Selling Proposition
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase">
                Why Businesses Choose Orientis Digital
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel p-8 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-tech-blue/10 border border-tech-blue/20 flex items-center justify-center text-tech-sky shrink-0 mt-1">
                  <i className="fa-solid fa-house-laptop"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Local Presence in Tacloban</h4>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    Based locally in Tacloban City, Leyte. We conduct face-to-face meetings, understand local business culture, and provide rapid same-day support.
                  </p>
                </div>
              </div>

              <div className="glass-panel p-8 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-tech-indigo/10 border border-tech-indigo/20 flex items-center justify-center text-tech-indigo shrink-0 mt-1">
                  <i className="fa-solid fa-cubes"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Full-Stack Capability</h4>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    End-to-end design, frontend/backend engineering, mobile development, cloud DevOps, and managed IT support—all handled seamlessly under one roof.
                  </p>
                </div>
              </div>

              <div className="glass-panel p-8 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
                  <i className="fa-solid fa-calculator"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">MSME-Focused Pricing</h4>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    Flexible subscription models and affordable project milestones designed specifically for growing local businesses without Manila-level price premiums.
                  </p>
                </div>
              </div>

              <div className="glass-panel p-8 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-tech-sky/10 border border-tech-sky/20 flex items-center justify-center text-tech-sky shrink-0 mt-1">
                  <i className="fa-solid fa-[#2496ED] fa-building-columns"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Regional Regulatory Expertise</h4>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    Deep understanding of Philippine statutory regulations (BIR compliance, SSS/PhilHealth/Pag-IBIG rules) and LGU government processes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Manifesto Banner */}
          <div className="glass-panel p-10 md:p-14 rounded-3xl border border-white/10 relative text-center shadow-2xl bg-gradient-to-r from-tech-gray/60 via-tech-black/90 to-tech-gray/60">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-tech-blue/10 text-tech-sky border border-tech-blue/20 mb-6 uppercase tracking-widest font-mono">
              🇵🇭 Gawa sa Tacloban, Para sa Pilipinas
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-white uppercase">
              Building Digital Futures, One Business at a Time
            </h2>

            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-sans mb-8">
              Whether you are an MSME looking to automate operations, a government agency upgrading digital portals, or an enterprise scaling software infrastructure—Orientis Digital is your dedicated tech partner.
            </p>

            <Link
              to="/contact"
              className="inline-block px-10 py-4 font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-tech-blue to-tech-indigo rounded-xl shadow-tech hover:opacity-90 transition-all"
            >
              Start Your Project With Us &gt;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
