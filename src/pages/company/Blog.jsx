import React from 'react';

export default function Blog() {
  return (
    <main className="flex-1">
      <section className="min-h-[60vh] flex items-center justify-center text-center pt-[80px] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,transparent_70%)] -translate-x-1/2 -translate-y-1/2 blur-[60px] -z-10 animate-[drift_10s_infinite_alternate_ease-in-out]"></div>

        <div className="container mx-auto px-[5%] fade-up">
          <h1 className="text-[clamp(3.5rem,6vw,5rem)] font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
            Tech <span className="text-tech-blue">Insights</span>
          </h1>
          <p className="text-lg text-gray-400">Insights, analysis, and news from the Orientis Digital team.</p>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-[5%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-2xl hover:border-tech-blue/30 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] hover:bg-tech-gray/65 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group/card fade-up">
              <div>
                <span className="text-xs font-semibold text-tech-sky bg-tech-blue/10 px-2.5 py-1 rounded-md tracking-wider uppercase mb-4 inline-block">
                  Cloud
                </span>
                <h3 className="text-2xl font-extrabold mb-3 text-white group-hover/card:text-tech-sky transition-colors">
                  Cloud Scaling in 2026
                </h3>
                <p className="text-sm text-muted mb-4">Jan 24, 2026</p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Why serverless architecture is becoming the standard for modern enterprises.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 mt-6 text-tech-sky hover:text-tech-blue transition-colors group font-medium"
              >
                Read More <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
              </a>
            </div>

            <div className="glass-panel p-8 rounded-2xl hover:border-tech-indigo/30 hover:shadow-[0_10px_30px_-10px_rgba(249,115,22,0.15)] hover:bg-tech-gray/65 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group/card fade-up">
              <div>
                <span className="text-xs font-semibold text-tech-indigo bg-tech-indigo/10 px-2.5 py-1 rounded-md tracking-wider uppercase mb-4 inline-block">
                  Architecture
                </span>
                <h3 className="text-2xl font-extrabold mb-3 text-white group-hover/card:text-tech-indigo transition-colors">
                  Modernizing Legacy
                </h3>
                <p className="text-sm text-muted mb-4">Jan 10, 2026</p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Strategies for transitioning monolithic applications to a microservices architecture.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 mt-6 text-tech-indigo hover:text-tech-indigo/80 transition-colors group font-medium"
              >
                Read More <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
