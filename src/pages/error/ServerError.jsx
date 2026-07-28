import React from 'react';
import { Link } from 'react-router-dom';

export default function ServerError() {
  return (
    <main className="min-h-[85vh] flex items-center justify-center pt-28 pb-20 relative overflow-hidden flex-1">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse"></div>

      <div className="container mx-auto px-[5%] max-w-[800px] text-center z-10 fade-up">
        {/* Error Code Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/40 bg-red-500/10 text-red-400 text-xs font-mono uppercase tracking-widest mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400"></span>
          </span>
          Error 500 // Internal System Anomaly
        </div>

        {/* Title */}
        <h1 className="text-[clamp(4rem,10vw,8rem)] font-extrabold tracking-tight text-white leading-none mb-4 font-mono">
          5<span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">0</span>0
        </h1>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight mb-4">
          Unexpected Execution Exception
        </h2>

        <p className="text-gray-400 text-sm md:text-base max-w-[550px] mx-auto leading-relaxed font-sans mb-10">
          Our system encountered an unexpected internal exception. Our engineering team has been notified via automated telemetry monitoring.
        </p>

        {/* Terminal Diagnostic Box */}
        <div className="glass-panel p-6 rounded-2xl border border-red-500/20 max-w-[550px] mx-auto text-left font-mono text-xs mb-10 bg-tech-black/90">
          <div className="text-red-400 mb-2 flex items-center justify-between border-b border-white/10 pb-2">
            <span>&gt; sys.error_log</span>
            <span className="text-gray-500">status: 500</span>
          </div>
          <p className="text-gray-400">&gt; Exception: INTERNAL_SERVER_ERROR</p>
          <p className="text-gray-400">&gt; Mitigation: Telemetry logged. Try refreshing page.</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-tech-blue to-tech-indigo text-white font-bold text-xs uppercase tracking-wider shadow-tech-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all cursor-pointer"
          >
            Retry Connection
          </button>
          <Link
            to="/"
            className="px-8 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white font-bold text-xs uppercase tracking-wider hover:border-tech-sky transition-all"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
