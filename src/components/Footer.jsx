import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError(true);
      return;
    }
    setError(false);
    setSubscribed(true);
  };

  return (
    <footer id="footer" className="relative border-t border-white/10 bg-tech-black text-gray-400 font-sans mt-auto overflow-hidden">
      {/* Top Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-impeccable-amber/40 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-impeccable-amber/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-[5%] max-w-[1280px] pt-16 pb-12">
        {/* Pre-Footer Call to Action Banner */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-impeccable-amber/20 bg-gradient-to-r from-tech-gray/80 via-tech-black/90 to-tech-gray/80 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-impeccable-orange/10 rounded-full blur-[90px] pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10 text-center lg:text-left">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-impeccable-amber/30 bg-impeccable-amber/10 text-impeccable-amber text-xs font-mono uppercase tracking-widest mb-3">
                <i className="fa-solid fa-rocket"></i> Digital Transformation, Locally Delivered
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-white uppercase tracking-tight">
                Ready to Architect Your Digital Future?
              </h3>
              <p className="text-gray-300 text-sm max-w-[620px] mt-2 leading-relaxed font-sans">
                Partner with Orientis Digital in Tacloban City for custom web/mobile software applications and managed IT services.
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap justify-center">
              <Link
                to="/contact"
                className="px-8 py-3.5 text-xs font-bold font-display uppercase tracking-wider text-white bg-gradient-to-r from-impeccable-amber via-amber-500 to-impeccable-orange rounded-xl shadow-impeccable hover:shadow-[0_0_25px_rgba(204,136,0,0.5)] hover:-translate-y-0.5 transition-all"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/products"
                className="px-8 py-3.5 text-xs font-bold font-display uppercase tracking-wider text-white border border-white/15 bg-tech-black/60 rounded-xl hover:border-impeccable-amber hover:bg-white/5 transition-all"
              >
                Join Early Access Waitlist
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1.2fr_1.2fr_1.6fr] gap-10 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Status */}
          <div className="flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center gap-3 no-underline mb-5 group inline-flex">
                <div className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-impeccable-amber/10 border border-impeccable-amber/30 group-hover:border-impeccable-amber transition-all duration-300">
                  <img
                    src="/static/img/orientis-logo.png"
                    alt="Orientis Digital"
                    className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center">
                    <span className="font-display text-xl font-extrabold bg-gradient-to-r from-impeccable-amber via-amber-400 to-impeccable-orange bg-clip-text text-transparent tracking-tight leading-none uppercase">
                      Orientis Digital
                    </span>
                    <span className="text-impeccable-orange animate-blink font-bold text-xl leading-none">_</span>
                  </div>
                  <span className="font-mono text-[0.6rem] text-muted tracking-[0.2em] uppercase mt-1 border-t border-white/10 pt-0.5 inline-block w-full">
                    Unified Tech Solutions
                  </span>
                </div>
              </Link>

              <p className="text-xs text-gray-400 leading-relaxed mb-4 font-sans border-l-2 border-impeccable-amber/40 pl-3">
                &gt; Custom web &amp; mobile software engineering, enterprise SaaS solutions, and managed IT services in Tacloban City, Leyte, Philippines.
              </p>

              {/* Direct Email Display */}
              <div className="text-xs font-mono text-gray-300 mb-6 flex items-center gap-2">
                <i className="fa-solid fa-envelope text-impeccable-amber"></i>
                <a href="mailto:orientisdigital.official@gmail.com" className="hover:underline text-gray-300 hover:text-white">
                  orientisdigital.official@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com/orientis-digital"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl border border-white/10 bg-tech-gray/60 flex items-center justify-center text-gray-400 hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/10 transition-all group"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f group-hover:scale-110 transition-transform"></i>
              </a>
              <a
                href="https://github.com/orientis-digital"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl border border-white/10 bg-tech-gray/60 flex items-center justify-center text-gray-400 hover:text-white hover:border-tech-sky hover:bg-tech-blue/10 transition-all group"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github group-hover:scale-110 transition-transform"></i>
              </a>
              <a
                href="mailto:orientisdigital.official@gmail.com"
                className="w-9 h-9 rounded-xl border border-white/10 bg-tech-gray/60 flex items-center justify-center text-gray-400 hover:text-tech-sky hover:border-tech-sky hover:bg-tech-blue/10 transition-all group"
                aria-label="Email"
              >
                <i className="fa-solid fa-envelope group-hover:scale-110 transition-transform"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Software Products */}
          <div className="flex flex-col">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-5 border-b border-white/10 pb-2">
              // Software Products
            </h4>
            <ul className="list-none space-y-2.5 p-0 m-0">
              <li>
                <a
                  href="https://vexta.nexusec.space"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-impeccable-amber hover:underline transition-colors flex items-center gap-1.5 font-mono"
                >
                  <i className="fa-solid fa-shield-halved text-[10px]"></i>
                  Vexta E2EE Messenger (v1.5.1)
                </a>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <i className="fa-solid fa-chevron-right text-[9px] text-impeccable-amber"></i>
                  Core Softwares Series
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <i className="fa-solid fa-chevron-right text-[9px] text-impeccable-amber"></i>
                  Early Access Waitlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="flex flex-col">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-5 border-b border-white/10 pb-2">
              // Navigation
            </h4>
            <ul className="list-none space-y-2.5 p-0 m-0">
              <li>
                <Link
                  to="/"
                  className="text-xs text-gray-400 hover:text-impeccable-amber transition-colors flex items-center gap-1.5"
                >
                  <i className="fa-solid fa-chevron-right text-[9px] text-impeccable-amber"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-xs text-gray-400 hover:text-impeccable-amber transition-colors flex items-center gap-1.5"
                >
                  <i className="fa-solid fa-chevron-right text-[9px] text-impeccable-amber"></i>
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="text-xs text-gray-400 hover:text-impeccable-amber transition-colors flex items-center gap-1.5"
                >
                  <i className="fa-solid fa-chevron-right text-[9px] text-impeccable-amber"></i>
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-xs text-gray-400 hover:text-impeccable-amber transition-colors flex items-center gap-1.5"
                >
                  <i className="fa-solid fa-chevron-right text-[9px] text-impeccable-amber"></i>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-xs text-gray-400 hover:text-impeccable-amber transition-colors flex items-center gap-1.5"
                >
                  <i className="fa-solid fa-chevron-right text-[9px] text-impeccable-amber"></i>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-5 border-b border-white/10 pb-2">
                // Tech Dispatch
              </h4>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed font-sans">
                Subscribe for technical dispatches, system architecture insights, and major product release notes.
              </p>

              {subscribed ? (
                <div className="p-4 rounded-xl bg-impeccable-amber/20 border border-impeccable-amber/40 text-impeccable-amber text-xs font-medium font-mono">
                  <i className="fa-solid fa-circle-check text-impeccable-amber mr-2"></i>
                  Subscribed! Welcome to Orientis Dispatch.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="developer@company.com"
                      required
                      className="w-full p-3 pl-3.5 text-xs bg-tech-gray/70 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-impeccable-amber font-mono"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs font-bold font-display uppercase tracking-wider text-white bg-gradient-to-r from-impeccable-amber via-amber-500 to-impeccable-orange rounded-xl shadow-impeccable hover:shadow-[0_0_25px_rgba(204,136,0,0.5)] transition-all cursor-pointer"
                  >
                    Subscribe Dispatch
                  </button>
                  {error && (
                    <p className="text-red-400 text-[11px] mt-1 font-mono">
                      ! Please enter a valid email address.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-gray-500">
          <div className="flex items-center gap-4 flex-wrap text-center md:text-left">
            <span>© 2026 Orientis Digital: Unified Tech Solutions_</span>
            <span className="hidden md:inline text-gray-700">|</span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-gray-400">
              <i className="fa-solid fa-location-dot text-impeccable-amber"></i> Tacloban City, Leyte, Philippines
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-impeccable-amber transition-colors hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-impeccable-amber transition-colors hover:underline underline-offset-4"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
