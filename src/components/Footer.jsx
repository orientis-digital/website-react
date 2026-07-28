import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // null | 'success' | 'error'

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('success');
  };

  return (
    <footer id="contact" className="py-16 pt-12 border-t border-white/5 bg-tech-gray/40 backdrop-blur-md mt-auto">
      <div className="container mx-auto px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-3 no-underline mb-4 group">
              <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden transition-all duration-300">
                <img
                  src="/static/img/orientis-logo.png"
                  alt="Orientis"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center">
                  <span className="font-sans text-xl font-bold bg-gradient-to-r from-tech-sky to-tech-indigo bg-clip-text text-transparent tracking-tight leading-none uppercase">
                    Orientis Digital
                  </span>
                  <span className="text-tech-indigo animate-blink font-bold text-xl leading-none">_</span>
                </div>
                <span className="font-sans text-[0.6rem] text-muted tracking-[0.2em] uppercase mt-1 border-t border-tech-slate pt-1 inline-block w-full">
                  Unified Tech Solutions
                </span>
              </div>
            </Link>
            <p className="text-sm mb-4 text-muted border-l border-white/10 pl-3">
              &gt; Modern infrastructure and intelligent software solutions for the digital age.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-9 h-9 border border-white/10 flex items-center justify-center hover:border-tech-sky hover:text-white transition-all group text-gray-500 bg-tech-black rounded-md"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f group-hover:scale-110"></i>
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-white/10 flex items-center justify-center hover:border-tech-sky hover:text-white transition-all group text-gray-500 bg-tech-black rounded-md"
                aria-label="Github"
              >
                <i className="fa-brands fa-github group-hover:scale-110"></i>
              </a>
              <a
                href="mailto:contact@orientis.tech"
                className="w-9 h-9 border border-white/10 flex items-center justify-center hover:border-tech-sky hover:text-white transition-all group text-gray-500 bg-tech-black rounded-md"
                aria-label="Email"
              >
                <i className="fa-solid fa-envelope group-hover:scale-110"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4 text-white uppercase tracking-widest border-b border-tech-slate pb-2">
              Company
            </h4>
            <ul className="list-none space-y-2">
              <li>
                <Link
                  to="/company/about"
                  className="text-muted no-underline transition-colors text-sm hover:text-tech-sky hover:pl-2 font-sans"
                >
                  &gt; Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/company/careers"
                  className="text-muted no-underline transition-colors text-sm hover:text-tech-sky hover:pl-2 font-sans"
                >
                  &gt; Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/company/contact"
                  className="text-muted no-underline transition-colors text-sm hover:text-tech-sky hover:pl-2 font-sans"
                >
                  &gt; Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4 text-white uppercase tracking-widest border-b border-tech-slate pb-2">
              Solutions
            </h4>
            <ul className="list-none space-y-2">
              <li>
                <Link
                  to="/solutions/custom-software"
                  className="text-muted no-underline transition-colors text-sm hover:text-tech-sky hover:pl-2 font-sans"
                >
                  &gt; Custom Software
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/tech-consulting"
                  className="text-muted no-underline transition-colors text-sm hover:text-tech-sky hover:pl-2 font-sans"
                >
                  &gt; Tech Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/cloud-ops"
                  className="text-muted no-underline transition-colors text-sm hover:text-tech-sky hover:pl-2 font-sans"
                >
                  &gt; Cloud Ops
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4 text-white uppercase tracking-widest border-b border-tech-slate pb-2">
              Stay Updated
            </h4>
            <p className="text-sm mb-3 text-muted">&gt; Get the latest tech insights delivered.</p>
            {status === 'success' ? (
              <div className="p-4 rounded-lg bg-tech-indigo/10 border border-tech-indigo/20 text-tech-sky font-medium text-xs mt-2">
                <i className="fa-solid fa-check-circle mr-2"></i>You're subscribed! Thanks for joining.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="p-3 border border-white/10 bg-tech-black/60 text-tech-sky font-sans outline-none transition-colors w-full focus:border-tech-sky/50 focus:shadow-tech-sm mb-2 rounded-lg placeholder-slate-700 text-xs"
                />
                <button
                  type="submit"
                  className="inline-block px-8 py-3 font-bold transition-all duration-200 text-xs bg-gradient-to-r from-tech-blue to-tech-indigo text-white border-0 hover:shadow-tech hover:-translate-y-0.5 w-full uppercase tracking-widest rounded-lg"
                >
                  Subscribe
                </button>
                {status === 'error' && (
                  <p className="text-red-400 text-xs mt-2">Please enter a valid email address.</p>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 pt-8 border-t border-tech-slate text-center md:text-left text-sm text-muted font-sans">
          <p className="text-muted">© 2026 Orientis Digital: Unified Tech Solutions_</p>
          <div className="flex gap-8">
            <Link
              to="/legal/privacy"
              className="text-muted no-underline transition-colors hover:text-tech-sky hover:underline decoration-tech-sky underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              to="/legal/terms"
              className="text-muted no-underline transition-colors hover:text-tech-sky hover:underline decoration-tech-sky underline-offset-4"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
