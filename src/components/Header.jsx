import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkBaseStyle =
    "text-xs font-bold tracking-widest transition-colors py-2 px-1 flex items-center gap-1.5 uppercase cursor-pointer font-display";
  const activeStyle = `${linkBaseStyle} text-impeccable-amber border-b-2 border-impeccable-amber`;
  const inactiveStyle = `${linkBaseStyle} text-gray-300 hover:text-impeccable-amber`;

  return (
    <header className="h-[72px] fixed top-0 left-0 right-0 w-full z-[999] bg-tech-black/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all duration-300">
      <div className="container mx-auto px-[5%] max-w-[1280px] flex justify-between items-center h-full relative">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 no-underline relative z-[1002] group"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-impeccable-amber/10 border border-impeccable-amber/30 group-hover:border-impeccable-amber transition-all duration-300">
            <img
              src="/static/img/orientis-logo.png"
              alt="Orientis Logo"
              className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col justify-center hidden sm:flex">
            <div className="flex items-center">
              <span className="font-display text-xl font-extrabold bg-gradient-to-r from-impeccable-amber via-amber-400 to-impeccable-orange bg-clip-text text-transparent tracking-tight leading-none uppercase">
                Orientis Digital
              </span>
              <span className="text-impeccable-orange animate-blink font-bold text-xl leading-none">_</span>
            </div>
            <span className="font-mono text-[0.58rem] text-muted tracking-[0.22em] uppercase mt-1 border-t border-white/10 pt-0.5 inline-block w-full">
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
              >
                Home
              </NavLink>
            </li>

            {/* Products Page */}
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
              >
                Products
              </NavLink>
            </li>

            {/* Solutions Page */}
            <li>
              <NavLink
                to="/solutions"
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
              >
                Solutions
              </NavLink>
            </li>

            {/* About Page */}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
              >
                About
              </NavLink>
            </li>

            {/* Contact Page */}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right Header Controls */}
        <div className="hidden lg:flex items-center gap-5">
          {/* CTA Action */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold font-display uppercase tracking-wider text-white bg-gradient-to-r from-impeccable-amber via-amber-500 to-impeccable-orange rounded-xl shadow-impeccable hover:shadow-[0_0_25px_rgba(204,136,0,0.5)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Start Project
            <i className="fa-solid fa-arrow-right text-[10px]"></i>
          </Link>
        </div>

        {/* Mobile Navigation Toggle Button */}
        <button
          className="mobile-toggle md:hidden z-[1003] relative flex flex-col justify-center items-center gap-[6px] w-[32px] h-[32px] p-1 rounded-lg bg-white/5 border border-white/10"
          aria-label="Toggle Navigation"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-full h-[2px] bg-impeccable-amber transition-all duration-300 origin-center ${
              open ? 'rotate-45 translate-y-[8px]' : ''
            }`}
          ></span>
          <span
            className={`block w-full h-[2px] bg-impeccable-amber transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block w-full h-[2px] bg-impeccable-amber transition-all duration-300 origin-center ${
              open ? '-rotate-45 -translate-y-[8px]' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-tech-black/98 backdrop-blur-2xl z-[1000] p-6 flex flex-col justify-between overflow-y-auto border-b border-impeccable-amber/30 animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-impeccable-amber block mb-3 font-bold">
                // Navigation
              </span>
              <ul className="flex flex-col gap-4 list-none p-0 m-0">
                <li>
                  <Link
                    to="/"
                    className="text-base font-bold font-display text-white hover:text-impeccable-amber uppercase"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-base font-bold font-display text-white hover:text-impeccable-amber uppercase"
                    onClick={() => setOpen(false)}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions"
                    className="text-base font-bold font-display text-white hover:text-impeccable-amber uppercase"
                    onClick={() => setOpen(false)}
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-base font-bold font-display text-white hover:text-impeccable-amber uppercase"
                    onClick={() => setOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-base font-bold font-display text-white hover:text-impeccable-amber uppercase"
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <Link
              to="/contact"
              className="w-full py-3.5 text-center text-sm font-bold font-display uppercase tracking-wider text-white bg-gradient-to-r from-impeccable-amber via-amber-500 to-impeccable-orange rounded-xl shadow-impeccable"
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

