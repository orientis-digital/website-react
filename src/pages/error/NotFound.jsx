import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="min-h-[85vh] flex items-center justify-center pt-28 pb-20 relative overflow-hidden flex-1">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-tech-blue/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse"></div>

      <div className="container mx-auto px-[5%] max-w-[800px] text-center z-10 fade-up">
        {/* Error Code Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-tech-blue/40 bg-tech-blue/10 text-tech-sky text-xs font-mono uppercase tracking-widest mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-sky opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-tech-sky"></span>
          </span>
          Error 404 // Signal Lost
        </div>

        {/* Big Glitch Title */}
        <h1 className="text-[clamp(4rem,10vw,8rem)] font-extrabold tracking-tight text-white leading-none mb-4 font-mono">
          4<span className="bg-gradient-to-r from-tech-sky via-cyan-400 to-tech-indigo bg-clip-text text-transparent">0</span>4
        </h1>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight mb-4">
          Requested Node Not Found
        </h2>

        <p className="text-gray-400 text-sm md:text-base max-w-[550px] mx-auto leading-relaxed font-sans mb-10">
          The page or system endpoint you are attempting to access does not exist or has been relocated within our enterprise network.
        </p>

        {/* Terminal Box */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 max-w-[550px] mx-auto text-left font-mono text-xs mb-10 bg-tech-black/90">
          <div className="text-tech-sky mb-2 flex items-center justify-between border-b border-white/10 pb-2">
            <span>&gt; sys.diagnostics</span>
            <span className="text-gray-500">status: 404</span>
          </div>
          <p className="text-gray-400">&gt; Target URL: {window.location.pathname}</p>
          <p className="text-gray-400">&gt; Action: Rerouting request to secure origin...</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-tech-blue to-tech-indigo text-white font-bold text-xs uppercase tracking-wider shadow-tech-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all"
          >
            Return to Base
          </Link>
          <Link
            to="/solutions"
            className="px-8 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white font-bold text-xs uppercase tracking-wider hover:border-tech-sky transition-all"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </main>
  );
}
