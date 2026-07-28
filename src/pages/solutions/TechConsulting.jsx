import React from 'react';
import { Link } from 'react-router-dom';

export default function TechConsulting() {
  return (
    <main className="flex-1">
      <section className="min-h-[60vh] flex items-center justify-center text-center pt-[80px] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,transparent_70%)] -translate-x-1/2 -translate-y-1/2 blur-[60px] -z-10 animate-[drift_10s_infinite_alternate_ease-in-out]"></div>

        <div className="container mx-auto px-[5%] fade-up">
          <h1 className="text-[clamp(3.5rem,6vw,5rem)] font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
            Tech <span className="text-tech-sky">Consulting</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Strategic guidance, architecture audits, and digital transformation roadmaps tailored for growing enterprises.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-[5%]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl hover:border-tech-sky/30 hover:shadow-[0_10px_30px_-10px_rgba(34,211,238,0.15)] hover:bg-tech-gray/65 hover:-translate-y-1 transition-all duration-300 fade-up">
              <i className="fa-solid fa-lightbulb text-4xl text-tech-sky mb-6 block"></i>
              <h3 className="text-2xl font-extrabold mb-4 text-white">Strategy & Roadmap</h3>
              <p className="text-lg text-muted">
                Actionable digital roadmaps designed to align technology investments with core business objectives.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-2xl hover:border-tech-blue/30 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] hover:bg-tech-gray/65 hover:-translate-y-1 transition-all duration-300 fade-up">
              <i className="fa-solid fa-magnifying-glass-chart text-4xl text-tech-blue mb-6 block"></i>
              <h3 className="text-2xl font-extrabold mb-4 text-white">Architecture Audit</h3>
              <p className="text-lg text-muted">
                In-depth technology stack audits to identify bottlenecks, security risks, and optimization opportunities.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-2xl hover:border-tech-indigo/30 hover:shadow-[0_10px_30px_-10px_rgba(249,115,22,0.15)] hover:bg-tech-gray/65 hover:-translate-y-1 transition-all duration-300 fade-up">
              <i className="fa-solid fa-rocket text-4xl text-tech-indigo mb-6 block"></i>
              <h3 className="text-2xl font-extrabold mb-4 text-white">Innovation Workshops</h3>
              <p className="text-lg text-muted">
                Collaborative technical sessions to prototype, validate, and select scalable toolchains.
              </p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link
              to="/company/contact"
              className="inline-block px-10 py-4 font-bold transition-all duration-200 text-sm md:text-base bg-gradient-to-r from-tech-blue to-tech-indigo text-white border-0 hover:shadow-tech uppercase tracking-wider rounded-md"
            >
              Schedule Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
