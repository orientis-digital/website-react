import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Products() {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [joinedWaitlist, setJoinedWaitlist] = useState(false);

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (waitlistEmail && waitlistEmail.includes('@')) {
      setJoinedWaitlist(true);
    }
  };

  return (
    <main className="flex-1 pt-28 pb-24 min-h-[85vh]">
      <SEO
        title="Software Products & Vexta E2EE Messenger | Orientis Digital"
        description="Explore Vexta, Orientis Digital's zero-knowledge end-to-end encrypted messenger, alongside our Core Softwares Series for enterprise business automation."
      />

      {/* 1. Header Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[500px] bg-impeccable-amber/15 -translate-x-1/2 -translate-y-1/2 blur-[140px] pointer-events-none -z-10 animate-pulse"></div>

        <div className="container mx-auto px-[5%] max-w-[1100px] text-center fade-up">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-impeccable-amber/40 bg-impeccable-amber/10 text-impeccable-amber text-xs font-mono uppercase tracking-widest mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-impeccable-amber opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-impeccable-amber"></span>
            </span>
            Orientis Software Products Catalog
          </span>

          <h1 className="text-[clamp(2.5rem,6vw,4.8rem)] font-display font-extrabold tracking-tight text-white uppercase leading-[1.08] mb-6">
            Engineered Software <br />
            <span className="bg-gradient-to-r from-impeccable-amber via-amber-400 to-impeccable-orange bg-clip-text text-transparent">
              Products &amp; Platforms.
            </span>
          </h1>

          <p className="max-w-[720px] mx-auto text-gray-300 text-base md:text-lg leading-relaxed font-sans mb-4">
            From zero-knowledge encrypted security platforms to enterprise business management software, explore Orientis Digital's engineered software suite.
          </p>
        </div>
      </section>

      {/* 2. Flagship Featured Products & R&D Pipeline */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-[5%] max-w-[1150px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-stretch">
            {/* Card 1: Vexta Messenger */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-impeccable-amber/40 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-impeccable-orange/15 rounded-full blur-[120px] pointer-events-none"></div>

              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-impeccable-amber/40 bg-impeccable-amber/10 text-impeccable-amber text-xs font-mono uppercase tracking-widest">
                    <i className="fa-solid fa-star"></i> Flagship Security Product
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[11px] font-mono uppercase tracking-wider">
                    <i className="fa-solid fa-shield-halved"></i> Active Release v1.5.1
                  </div>
                </div>

                <div className="flex items-center gap-5 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-impeccable-amber/10 border border-impeccable-amber/30 p-2 shadow-impeccable flex items-center justify-center shrink-0">
                    <img
                      src="/static/img/vexta-icon.png"
                      alt="Vexta E2EE Messenger Logo"
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white uppercase leading-tight">
                      Vexta E2EE Messenger
                    </h2>
                    <p className="text-impeccable-amber font-mono text-xs uppercase tracking-wider mt-1">
                      Zero-Knowledge End-to-End Encrypted Platform
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed font-sans mb-6">
                  Vexta is a high-security, zero-knowledge messenger designed for total communication privacy. The blind relay bridge server never sees plaintext messages, keys, contact rosters, or group memberships.
                </p>

                {/* Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                    <i className="fa-solid fa-key text-impeccable-amber text-sm mt-0.5"></i>
                    <div>
                      <h4 className="text-[11px] font-bold text-white uppercase font-display">RSA-4096 &amp; AES-256</h4>
                      <p className="text-[10px] text-gray-400 font-sans">Envelope encryption</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                    <i className="fa-solid fa-file-shield text-impeccable-orange text-sm mt-0.5"></i>
                    <div>
                      <h4 className="text-[11px] font-bold text-white uppercase font-display">E2EE File Transfer</h4>
                      <p className="text-[10px] text-gray-400 font-sans">SHA-256 integrity check</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-3 flex-wrap pt-4 border-t border-white/10">
                <a
                  href="https://vexta.nexusec.space"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 text-xs font-bold font-display uppercase tracking-wider text-white bg-gradient-to-r from-impeccable-amber via-amber-500 to-impeccable-orange rounded-xl shadow-impeccable hover:shadow-[0_0_25px_rgba(204,136,0,0.5)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                  <span>Visit Site</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                </a>
                <a
                  href="https://github.com/orientis-digital/Vexta"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 text-xs font-bold font-display uppercase tracking-wider text-white border border-white/20 bg-tech-black/60 rounded-xl hover:border-impeccable-amber hover:bg-white/5 transition-all flex items-center gap-2"
                >
                  <i className="fa-brands fa-github text-sm"></i>
                  Source Code
                </a>
              </div>
            </div>

            {/* Card 2: And More Coming */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/15 relative overflow-hidden shadow-2xl flex flex-col justify-between bg-gradient-to-b from-tech-gray/60 to-tech-black/90">
              <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-impeccable-amber/10 rounded-full blur-[100px] pointer-events-none"></div>

              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-impeccable-orange/40 bg-impeccable-orange/10 text-impeccable-orange text-xs font-mono uppercase tracking-widest mb-6">
                  <i className="fa-solid fa-flask"></i> Orientis R&amp;D Pipeline
                </div>

                <div className="w-14 h-14 rounded-2xl bg-impeccable-orange/10 border border-impeccable-orange/30 flex items-center justify-center text-impeccable-orange text-2xl mb-5">
                  <i className="fa-solid fa-cubes-stacked"></i>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white uppercase mb-2">
                  And More Coming Soon
                </h3>

                <p className="text-impeccable-amber font-mono text-xs uppercase tracking-wider mb-4">
                  Next-Gen Security &amp; Enterprise Platforms
                </p>

                <p className="text-gray-300 text-sm leading-relaxed font-sans mb-6">
                  Our product engineering team is actively building next-generation encrypted communication tools, cloud infrastructure relays, and custom enterprise software platforms.
                </p>

                {/* Pipeline Highlights */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2.5 text-xs text-gray-300 font-sans">
                    <i className="fa-solid fa-shield text-impeccable-amber text-xs"></i>
                    <span>Encrypted Cloud Relays &amp; Vaults</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-gray-300 font-sans">
                    <i className="fa-solid fa-bolt text-impeccable-orange text-xs"></i>
                    <span>Custom Enterprise Module Architecture</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold font-display uppercase tracking-wider text-white border border-impeccable-amber/40 bg-impeccable-amber/10 rounded-xl hover:bg-impeccable-amber hover:text-white transition-all w-full justify-center"
                >
                  <span>Request Custom Build</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Softwares Series */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-[5%] max-w-[1150px]">
          <div className="text-center mb-12 max-w-[800px] mx-auto">
            <span className="text-impeccable-orange text-xs font-mono font-bold uppercase tracking-widest block mb-2">
              // Core Softwares Series
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white uppercase mb-3">
              Core Softwares Series
            </h2>
            <p className="text-xs font-mono text-impeccable-amber uppercase tracking-wider">
              Administrative &amp; Operational Systems for Your Business — by Orientis Digital (UTS)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* POS-Core */}
            <div className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-impeccable-amber/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-impeccable-amber/10 border border-impeccable-amber/30 flex items-center justify-center text-impeccable-amber text-xl mb-4">
                  <i className="fa-solid fa-cash-register"></i>
                </div>
                <span className="text-[10px] font-mono text-impeccable-amber uppercase tracking-wider block mb-1">Posting Soon</span>
                <h3 className="text-xl font-bold font-display text-white mb-0.5">POS-Core</h3>
                <span className="text-[11px] font-mono text-gray-400 block mb-3">by Orientis Digital - UTS</span>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  Cloud &amp; offline Point-of-Sale platform with local tax receipting, BIR formatting, and GCash/Maya payment integrations.
                </p>
              </div>
            </div>

            {/* Inventory-Core */}
            <div className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-impeccable-orange/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-impeccable-orange/10 border border-impeccable-orange/30 flex items-center justify-center text-impeccable-orange text-xl mb-4">
                  <i className="fa-solid fa-boxes-stacked"></i>
                </div>
                <span className="text-[10px] font-mono text-impeccable-orange uppercase tracking-wider block mb-1">Posting Soon</span>
                <h3 className="text-xl font-bold font-display text-white mb-0.5">Inventory-Core</h3>
                <span className="text-[11px] font-mono text-gray-400 block mb-3">by Orientis Digital - UTS</span>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  Real-time stock tracking, multi-branch warehouse sync, low-stock automated alerts, and supplier purchase order workflows.
                </p>
              </div>
            </div>

            {/* HR-Core */}
            <div className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl mb-4">
                  <i className="fa-solid fa-users-gear"></i>
                </div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block mb-1">Posting Soon</span>
                <h3 className="text-xl font-bold font-display text-white mb-0.5">HR-Core</h3>
                <span className="text-[11px] font-mono text-gray-400 block mb-3">by Orientis Digital - UTS</span>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  Automated Philippine payroll processing (SSS, PhilHealth, Pag-IBIG contributions), biometric attendance, and employee portal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Unified High-Impact Closing CTA Container */}
      <section className="py-8">
        <div className="container mx-auto px-[5%] max-w-[1150px]">
          <div className="glass-panel p-8 md:p-14 rounded-3xl border border-impeccable-amber/30 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-impeccable-amber/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
              {/* Left Column: Early Access Waitlist Form */}
              <div>
                <span className="text-impeccable-amber text-xs font-mono uppercase tracking-widest font-bold block mb-2">
                  // Early Access Priority
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-display text-white uppercase mb-3">
                  Join Early Access Waitlist
                </h3>
                <p className="text-xs text-gray-300 font-sans leading-relaxed mb-6">
                  Subscribe to receive early priority access and exclusive launch pricing for the Core Softwares Series.
                </p>

                {joinedWaitlist ? (
                  <div className="p-4 rounded-xl bg-impeccable-amber/20 border border-impeccable-amber/40 text-impeccable-amber font-medium text-xs font-mono">
                    <i className="fa-solid fa-circle-check text-impeccable-amber mr-2"></i>
                    You are on the waitlist! We will notify you once products launch.
                  </div>
                ) : (
                  <form onSubmit={handleWaitlistSubmit} className="flex gap-3 flex-col sm:flex-row">
                    <input
                      type="email"
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      placeholder="enter your business email address"
                      required
                      className="flex-1 p-3.5 rounded-xl bg-tech-black/90 border border-white/15 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-impeccable-amber font-mono"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-impeccable-amber via-amber-500 to-impeccable-orange text-white font-bold font-display text-xs uppercase tracking-wider hover:shadow-impeccable cursor-pointer whitespace-nowrap transition-all"
                    >
                      Notify Me
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Custom Product Engineering Direct Link */}
              <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between text-left">
                <div>
                  <h4 className="text-lg font-bold font-display text-white uppercase mb-2">
                    Need Custom Software Engineering?
                  </h4>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed mb-6">
                    Our team builds custom web platforms, mobile software, and secure enterprise infrastructure tailored to your exact specifications.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent border border-white/20 text-white font-bold font-display text-xs uppercase tracking-wider hover:bg-white/10 hover:border-impeccable-amber transition-all w-full text-center"
                >
                  <span>Contact Engineering</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



