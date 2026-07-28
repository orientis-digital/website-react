import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // null | 'solutions' | 'company'
  const timeoutRef = useRef(null);

  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const linkBaseStyle =
    "text-xs font-bold tracking-widest transition-colors py-2 px-1 flex items-center gap-1.5 uppercase cursor-pointer";
  const activeStyle = `${linkBaseStyle} text-tech-sky border-b-2 border-tech-sky`;
  const inactiveStyle = `${linkBaseStyle} text-gray-300 hover:text-tech-sky`;

  return (
    <header className="h-[76px] fixed top-4 inset-x-[4%] max-w-[1280px] mx-auto z-[999] glass-panel bg-tech-black/85 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border border-white/10 transition-all duration-300">
      <div className="container flex justify-between items-center h-full relative mx-auto px-6">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 no-underline relative z-[1002] group"
          onClick={() => {
            setOpen(false);
            setActiveDropdown(null);
          }}
        >
          <div className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-tech-blue/10 border border-tech-blue/20 group-hover:border-tech-sky/50 transition-all duration-300">
            <img
              src="/static/img/orientis-logo.png"
              alt="Orientis Logo"
              className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col justify-center hidden sm:flex">
            <div className="flex items-center">
              <span className="font-sans text-lg font-extrabold bg-gradient-to-r from-tech-sky via-cyan-400 to-tech-indigo bg-clip-text text-transparent tracking-tight leading-none uppercase">
                Orientis Digital
              </span>
              <span className="text-tech-indigo animate-blink font-bold text-lg leading-none">_</span>
            </div>
            <span className="font-sans text-[0.58rem] text-muted tracking-[0.22em] uppercase mt-1 border-t border-tech-slate/50 pt-0.5 inline-block w-full">
              Unified Tech Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 relative">
          <ul className="flex list-none gap-8 items-center m-0 p-0">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                onClick={() => setActiveDropdown(null)}
              >
                Home
              </NavLink>
            </li>

            {/* Solutions Dropdown Menu */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1.5 text-xs font-bold tracking-widest py-2 px-1 uppercase transition-colors cursor-pointer ${
                  activeDropdown === 'solutions' ? 'text-tech-sky' : 'text-gray-300 hover:text-tech-sky'
                }`}
                onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
              >
                Solutions
                <i
                  className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${
                    activeDropdown === 'solutions' ? 'rotate-180 text-tech-sky' : ''
                  }`}
                ></i>
              </button>

              {/* Mega Dropdown Panel */}
              {activeDropdown === 'solutions' && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[460px] glass-panel bg-tech-black/95 backdrop-blur-2xl p-5 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] grid grid-cols-2 gap-3 transition-all duration-200"
                  onMouseEnter={() => handleMouseEnter('solutions')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/solutions/custom-software"
                    className="p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-tech-sky/20 transition-all group/item"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <i className="fa-solid fa-code text-tech-sky text-sm group-hover/item:scale-110 transition-transform"></i>
                      <span className="text-xs font-bold text-white group-hover/item:text-tech-sky transition-colors">
                        Custom Software
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 font-sans leading-tight">
                      Web &amp; mobile app development.
                    </p>
                  </Link>

                  <Link
                    to="/solutions/cloud-ops"
                    className="p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-tech-indigo/20 transition-all group/item"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <i className="fa-solid fa-cloud text-tech-indigo text-sm group-hover/item:scale-110 transition-transform"></i>
                      <span className="text-xs font-bold text-white group-hover/item:text-tech-indigo transition-colors">
                        Cloud Ops
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 font-sans leading-tight">
                      DevOps &amp; cloud infrastructure.
                    </p>
                  </Link>

                  <Link
                    to="/solutions/tech-consulting"
                    className="p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-tech-sky/20 transition-all group/item"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <i className="fa-solid fa-lightbulb text-tech-sky text-sm group-hover/item:scale-110 transition-transform"></i>
                      <span className="text-xs font-bold text-white group-hover/item:text-tech-sky transition-colors">
                        Tech Consulting
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 font-sans leading-tight">
                      Architecture &amp; digital roadmap.
                    </p>
                  </Link>

                  <Link
                    to="/platform"
                    className="p-3 rounded-xl bg-tech-blue/10 border border-tech-blue/20 hover:border-tech-blue/40 transition-all group/item flex flex-col justify-center"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="text-xs font-bold text-tech-sky uppercase tracking-wider group-hover/item:underline flex items-center gap-1">
                      All Solutions <i className="fa-solid fa-arrow-right text-[10px]"></i>
                    </span>
                    <p className="text-[10px] text-gray-400 mt-1">Explore full platform &gt;</p>
                  </Link>
                </div>
              )}
            </li>

            {/* Company Dropdown Menu */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1.5 text-xs font-bold tracking-widest py-2 px-1 uppercase transition-colors cursor-pointer ${
                  activeDropdown === 'company' ? 'text-tech-sky' : 'text-gray-300 hover:text-tech-sky'
                }`}
                onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
              >
                Company
                <i
                  className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${
                    activeDropdown === 'company' ? 'rotate-180 text-tech-sky' : ''
                  }`}
                ></i>
              </button>

              {activeDropdown === 'company' && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[260px] glass-panel bg-tech-black/95 backdrop-blur-2xl p-4 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col gap-2 transition-all duration-200"
                  onMouseEnter={() => handleMouseEnter('company')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/company/about"
                    className="p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all flex items-center gap-3 text-xs font-semibold text-gray-200 hover:text-tech-sky"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <i className="fa-solid fa-compass text-tech-sky"></i> Our Story &amp; Manifesto
                  </Link>
                  <Link
                    to="/company/blog"
                    className="p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all flex items-center gap-3 text-xs font-semibold text-gray-200 hover:text-tech-sky"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <i className="fa-solid fa-newspaper text-tech-indigo"></i> Tech Insights
                  </Link>
                  <Link
                    to="/company/careers"
                    className="p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all flex items-center gap-3 text-xs font-semibold text-gray-200 hover:text-tech-sky"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <i className="fa-solid fa-briefcase text-tech-sky"></i> Careers
                  </Link>
                </div>
              )}
            </li>

            <li>
              <NavLink
                to="/company/contact"
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                onClick={() => setActiveDropdown(null)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right Header Controls: Live System Status & CTA Button */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Live Systems Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[11px] font-mono uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            99.99% Online
          </div>

          {/* CTA Action */}
          <Link
            to="/company/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-tech-blue via-cyan-500 to-tech-indigo rounded-xl shadow-tech-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Start Project
            <i className="fa-solid fa-arrow-right text-[10px]"></i>
          </Link>
        </div>

        {/* Mobile Navigation Toggle Button */}
        <button
          className={`mobile-toggle md:hidden z-[1003] relative flex flex-col justify-center items-center gap-[6px] w-[32px] h-[32px] p-1 rounded-lg bg-white/5 border border-white/10`}
          aria-label="Toggle Navigation"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-full h-[2px] bg-tech-sky transition-all duration-300 origin-center ${
              open ? 'rotate-45 translate-y-[8px]' : ''
            }`}
          ></span>
          <span
            className={`block w-full h-[2px] bg-tech-sky transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block w-full h-[2px] bg-tech-sky transition-all duration-300 origin-center ${
              open ? '-rotate-45 -translate-y-[8px]' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 top-[88px] bg-tech-black/98 backdrop-blur-2xl z-[1000] p-6 flex flex-col justify-between overflow-y-auto border-b border-tech-indigo/30 animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-tech-sky block mb-3">
                // Navigation
              </span>
              <ul className="flex flex-col gap-4 list-none p-0 m-0">
                <li>
                  <Link
                    to="/"
                    className="text-base font-bold text-white hover:text-tech-sky uppercase"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/platform"
                    className="text-base font-bold text-white hover:text-tech-sky uppercase"
                    onClick={() => setOpen(false)}
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/company/about"
                    className="text-base font-bold text-white hover:text-tech-sky uppercase"
                    onClick={() => setOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/company/blog"
                    className="text-base font-bold text-white hover:text-tech-sky uppercase"
                    onClick={() => setOpen(false)}
                  >
                    Insights
                  </Link>
                </li>
                <li>
                  <Link
                    to="/company/careers"
                    className="text-base font-bold text-white hover:text-tech-sky uppercase"
                    onClick={() => setOpen(false)}
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/company/contact"
                    className="text-base font-bold text-white hover:text-tech-sky uppercase"
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Solutions Shortcuts in Mobile */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-tech-indigo block mb-3">
                // Direct Solutions
              </span>
              <div className="grid grid-cols-1 gap-2">
                <Link
                  to="/solutions/custom-software"
                  className="p-3 rounded-xl bg-tech-gray/60 border border-white/5 text-xs text-gray-300 font-semibold flex items-center justify-between"
                  onClick={() => setOpen(false)}
                >
                  Custom Software <i className="fa-solid fa-arrow-right text-[10px] text-tech-sky"></i>
                </Link>
                <Link
                  to="/solutions/cloud-ops"
                  className="p-3 rounded-xl bg-tech-gray/60 border border-white/5 text-xs text-gray-300 font-semibold flex items-center justify-between"
                  onClick={() => setOpen(false)}
                >
                  Cloud Ops <i className="fa-solid fa-arrow-right text-[10px] text-tech-indigo"></i>
                </Link>
                <Link
                  to="/solutions/tech-consulting"
                  className="p-3 rounded-xl bg-tech-gray/60 border border-white/5 text-xs text-gray-300 font-semibold flex items-center justify-between"
                  onClick={() => setOpen(false)}
                >
                  Tech Consulting <i className="fa-solid fa-arrow-right text-[10px] text-tech-sky"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-emerald-400 font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                System Operational
              </span>
              <span className="text-xs text-gray-500 font-mono">Orientis v2026</span>
            </div>

            <Link
              to="/company/contact"
              className="w-full py-3.5 text-center text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-tech-blue to-tech-indigo rounded-xl shadow-tech"
              onClick={() => setOpen(false)}
            >
              Start Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
