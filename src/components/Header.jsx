import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);

  const activeStyle = "text-xs font-bold tracking-widest text-tech-sky transition-colors relative py-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-tech-sky uppercase";
  const inactiveStyle = "text-xs font-bold tracking-widest text-gray-300 hover:text-tech-sky transition-colors relative py-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-tech-sky hover:after:w-full after:transition-all after:duration-300 uppercase";

  return (
    <header className="h-[76px] fixed top-4 inset-x-[5%] max-w-[1200px] mx-auto z-[999] glass-panel bg-tech-black/80 backdrop-blur-lg rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] border border-white/10">
      <div className="container flex justify-between items-center h-full relative mx-auto px-6">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline relative z-[1002]" onClick={() => setOpen(false)}>
          <img
            src="/static/img/orientis-logo.png"
            alt="Orientis Logo"
            className="w-11 h-11 object-contain transition-all duration-300 hover:scale-105"
          />
          <div className="flex flex-col justify-center hidden sm:flex">
            <div className="flex items-center">
              <span className="font-sans text-lg font-extrabold bg-gradient-to-r from-tech-sky to-tech-indigo bg-clip-text text-transparent tracking-tight leading-none uppercase">
                Orientis Digital
              </span>
              <span className="text-tech-indigo animate-blink font-bold text-lg leading-none">_</span>
            </div>
            <span className="font-sans text-[0.6rem] text-muted tracking-[0.2em] uppercase mt-1 border-t border-tech-slate/50 pt-0.5 inline-block w-full">
              Unified Tech Solutions
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8">
          <ul
            className={`nav-links list-none gap-8 items-center transition-all duration-300 ${
              open
                ? 'flex fixed inset-x-0 top-0 bg-tech-black/98 border-b border-tech-indigo flex-col justify-center z-50 w-full h-[100vh] shadow-tech rounded-none'
                : 'hidden md:flex'
            }`}
          >
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/platform"
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                onClick={() => setOpen(false)}
              >
                Solutions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/company/contact"
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                onClick={() => setOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Mobile Navigation Toggle */}
          <button
            className={`mobile-toggle md:hidden z-[1003] relative flex flex-col justify-center items-center gap-[6px] w-[30px] h-[30px] ${
              open ? 'active' : ''
            }`}
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
        </nav>
      </div>
    </header>
  );
}
