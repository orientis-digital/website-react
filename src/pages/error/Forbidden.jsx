import React from 'react';
import { Link } from 'react-router-dom';

export default function Forbidden() {
  return (
    <main className="min-h-[85vh] flex items-center justify-center pt-28 pb-20 relative overflow-hidden flex-1">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse"></div>

      <div className="container mx-auto px-[5%] max-w-[800px] text-center z-10 fade-up">
        {/* Error Code Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs font-mono uppercase tracking-widest mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
          </span>
          Error 403 // Access Denied
        </div>

        {/* Title */}
        <h1 className="text-[clamp(4rem,10vw,8rem)] font-extrabold tracking-tight text-white leading-none mb-4 font-mono">
          4<span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">0</span>3
        </h1>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight mb-4">
          Restricted Resource Access
        </h2>

        <p className="text-gray-400 text-sm md:text-base max-w-[550px] mx-auto leading-relaxed font-sans mb-10">
          You do not have administrative or system authorization to view this protected enterprise resource.
        </p>

        {/* Diagnostic Box */}
        <div className="glass-panel p-6 rounded-2xl border border-amber-500/20 max-w-[550px] mx-auto text-left font-mono text-xs mb-10 bg-tech-black/90">
          <div className="text-amber-400 mb-2 flex items-center justify-between border-b border-white/10 pb-2">
            <span>&gt; sec.audit_policy</span>
            <span className="text-gray-500">status: 403</span>
          </div>
          <p className="text-gray-400">&gt; Policy: REQUIRE_AUTHORIZED_SESSION</p>
          <p className="text-gray-400">&gt; Action: Access attempt logged to security ledger.</p>
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
            to="/contact"
            className="px-8 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white font-bold text-xs uppercase tracking-wider hover:border-tech-sky transition-all"
          >
            Contact Engineering
          </Link>
        </div>
      </div>
    </main>
  );
}
