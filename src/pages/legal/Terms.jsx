import React from 'react';
import SEO from '../../components/SEO';

export default function Terms() {
  return (
    <main className="flex-1 pt-28 pb-24 min-h-[85vh]">
      <SEO
        title="Terms of Service"
        description="Orientis Digital Terms of Service governing platform usage, software licensing, and managed service agreements."
      />
      <section className="relative overflow-hidden pt-12 pb-20">
        <div className="absolute top-1/3 left-1/2 w-[600px] h-[400px] bg-tech-indigo/10 -translate-x-1/2 -translate-y-1/2 blur-[140px] pointer-events-none -z-10"></div>

        <div className="container mx-auto px-[5%] max-w-[900px] fade-up">
          <div className="mb-12 border-b border-white/10 pb-8 text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-tech-indigo/30 bg-tech-indigo/10 text-tech-sky text-xs font-mono uppercase tracking-widest mb-4">
              <i className="fa-solid fa-file-contract"></i> Master Service Agreement
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight uppercase leading-[1.1] mb-4 text-white">
              Terms of <span className="bg-gradient-to-r from-tech-sky via-cyan-400 to-tech-indigo bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-gray-400 text-xs font-mono uppercase tracking-widest">
              Orientis Digital // Last Updated: July 2026
            </p>
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden font-sans">
            <div className="space-y-10 text-gray-300">
              <section>
                <h3 className="text-xl font-bold mb-3 text-white uppercase font-mono flex items-center gap-2">
                  <span className="text-tech-sky">&gt;</span> 1. Service Agreement
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  By accessing or engaging Orientis Digital: Unified Tech Solutions for custom software development, SaaS products, or managed IT services, you agree to these master service terms and project milestone agreements.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3 text-white uppercase font-mono flex items-center gap-2">
                  <span className="text-tech-indigo">&gt;</span> 2. Service Availability &amp; Support
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Orientis Digital provides high-availability hosting and SLA-backed maintenance for all client projects. Scheduled system maintenance and emergency security patches are performed with advance notice whenever possible.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3 text-white uppercase font-mono flex items-center gap-2">
                  <span className="text-cyan-400">&gt;</span> 3. Intellectual Property &amp; Deliverables
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Upon full payment of project milestones, clients retain full ownership of custom code deliverables specified in their contract. Proprietary Orientis SaaS core engines remain the intellectual property of Orientis Digital.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
