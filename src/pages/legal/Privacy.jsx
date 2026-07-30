import React from 'react';
import SEO from '../../components/SEO';

export default function Privacy() {
  return (
    <main className="flex-1 pt-28 pb-24 min-h-[85vh]">
      <SEO
        title="Privacy Policy"
        description="Orientis Digital Privacy Policy outlining data protection, privacy guidelines, and customer security policies."
      />
      <section className="relative overflow-hidden pt-12 pb-20">
        <div className="absolute top-1/3 left-1/2 w-[600px] h-[400px] bg-tech-blue/10 -translate-x-1/2 -translate-y-1/2 blur-[140px] pointer-events-none -z-10"></div>

        <div className="container mx-auto px-[5%] max-w-[900px] fade-up">
          <div className="mb-12 border-b border-white/10 pb-8 text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-tech-blue/30 bg-tech-blue/10 text-tech-sky text-xs font-mono uppercase tracking-widest mb-4">
              <i className="fa-solid fa-shield-cat"></i> Data Protection &amp; Compliance
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight uppercase leading-[1.1] mb-4 text-white">
              Privacy <span className="bg-gradient-to-r from-tech-sky via-cyan-400 to-tech-indigo bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-gray-400 text-xs font-mono uppercase tracking-widest">
              Orientis Digital // Last Updated: July 2026
            </p>
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden font-sans">
            <div className="space-y-10 text-gray-300">
              <section>
                <h3 className="text-xl font-bold mb-3 text-white uppercase font-mono flex items-center gap-2">
                  <span className="text-tech-sky">&gt;</span> 1. Information Collection
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Orientis Digital collects information necessary to provide our custom software solutions, managed IT services, and SaaS platforms. This includes basic contact details provided during inquiry forms and technical system telemetry required for platform optimization and security audits.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3 text-white uppercase font-mono flex items-center gap-2">
                  <span className="text-tech-indigo">&gt;</span> 2. Data Usage &amp; Privacy
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Your data is used strictly for service delivery, system maintenance, and regulatory compliance. We do not sell or rent personal information to third parties. All operational telemetry is protected under encrypted databases.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3 text-white uppercase font-mono flex items-center gap-2">
                  <span className="text-cyan-400">&gt;</span> 3. Security Infrastructure
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  We employ industry-standard SSL/TLS encryption, secure database partitioning, and strict role-based access controls to safeguard all records.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
