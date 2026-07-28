import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';

export default function Home() {
  return (
    <main className="flex-1">
      {/* 1. Hero Section */}
      <section className="min-h-[92vh] flex items-center justify-center relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <img src="/static/img/hero-bg.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-tech-black via-transparent to-tech-black"></div>
        </div>

        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-tech-indigo/10 rounded-full blur-[140px] pointer-events-none animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-tech-sky/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="container mx-auto px-[5%] max-w-[900px] z-10 text-center fade-up">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-tech-blue/20 bg-tech-blue/5 text-tech-sky text-xs font-mono uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-sky opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tech-sky"></span>
            </span>
            Eastern Visayas Premier Tech Partner // Tacloban HQ
          </div>

          <h1 className="text-[clamp(2.5rem,6.5vw,5.5rem)] font-extrabold tracking-tight leading-[1.05] mb-8 text-white uppercase">
            Powering Your <br />
            <span className="bg-gradient-to-r from-tech-sky via-cyan-400 to-tech-indigo bg-clip-text text-transparent">
              Digital Transformation.
            </span>
          </h1>

          <Typewriter />

          <p className="max-w-[680px] mx-auto mb-12 text-sm md:text-[1.05rem] leading-relaxed text-gray-400 border border-white/5 p-6 bg-tech-gray/45 backdrop-blur-md rounded-2xl font-sans shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            &gt; Orientis Digital delivers custom web/mobile software applications, BIR-compliant SaaS tools, and managed IT infrastructure for MSMEs, enterprises, and government agencies.
          </p>

          <div className="flex gap-5 justify-center flex-wrap">
            <Link
              to="/products"
              className="inline-block px-10 py-4 font-bold transition-all duration-200 text-sm md:text-base bg-gradient-to-r from-tech-blue to-tech-indigo text-white border-0 hover:shadow-tech hover:-translate-y-0.5 shadow-tech-sm uppercase tracking-wider rounded-xl"
            >
              Products (Will Be Posted Soon)
            </Link>
            <Link
              to="/solutions"
              className="inline-block px-10 py-4 font-bold transition-all duration-200 text-sm md:text-base bg-transparent text-white border border-white/10 hover:border-tech-blue hover:bg-tech-blue/10 uppercase tracking-wider rounded-xl"
            >
              Custom IT Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Core Pillars (Why Orientis) */}
      <section className="py-20 bg-tech-black/60 border-t border-white/5 relative">
        <div className="container mx-auto px-[5%] max-w-[1280px]">
          <div className="text-center mb-16">
            <span className="text-tech-sky text-xs font-mono font-bold uppercase tracking-widest block mb-2">
              // Why Choose Orientis Digital
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase">
              Digital Transformation, Locally Delivered
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-sky/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-tech-blue/10 border border-tech-blue/20 flex items-center justify-center text-tech-sky text-xl mb-4 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-map-location-dot"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-tech-sky transition-colors">
                Local Presence
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Based in Tacloban, Leyte — fast on-site support, face-to-face meetings, and deep understanding of regional business needs.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-indigo/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-tech-indigo/10 border border-tech-indigo/20 flex items-center justify-center text-tech-indigo text-xl mb-4 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-receipt"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-tech-indigo transition-colors">
                BIR-Compliant Software
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Affordable software tools optimized for Philippine tax regulations, statutory contributions, and local payment gateways.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-xl mb-4 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-layer-group"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                Full-Stack Capabilities
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                End-to-end design, custom web &amp; mobile app development, UI/UX design, and 24/7 managed IT infrastructure.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-sky/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-tech-sky/10 border border-tech-sky/20 flex items-center justify-center text-tech-sky text-xl mb-4 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-tech-sky transition-colors">
                MSME-Friendly Pricing
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Flexible subscription models without massive upfront software development costs, built specifically for growing MSMEs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products Status Banner Section */}
      <section className="py-20 bg-tech-gray/30 border-t border-white/5 relative z-20">
        <div className="container mx-auto px-[5%] max-w-[1000px] text-center">
          <div className="glass-panel p-10 md:p-14 rounded-3xl border border-white/10 relative overflow-hidden">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-tech-indigo/30 bg-tech-indigo/10 text-tech-indigo text-xs font-mono uppercase tracking-widest mb-4">
              <i className="fa-solid fa-clock"></i> Products Will Be Posted Soon
            </span>

            <h2 className="text-3xl font-extrabold text-white uppercase mb-4">
              Software Products Suite
            </h2>

            <p className="text-gray-400 text-sm max-w-[600px] mx-auto mb-8 font-sans leading-relaxed">
              Our software products catalog and subscription packages will be posted soon. Join our early waitlist to be notified when products go live.
            </p>

            <Link
              to="/products"
              className="inline-block px-8 py-3.5 font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-tech-blue to-tech-indigo rounded-xl shadow-tech-sm hover:opacity-90 transition-all"
            >
              Learn More &amp; Join Waitlist &gt;
            </Link>
          </div>
        </div>
      </section>

      {/* 4. How We Work */}
      <section className="py-24 bg-tech-gray/20 border-t border-white/5 relative">
        <div className="container mx-auto px-[5%] max-w-[1280px]">
          <div className="text-center mb-16">
            <span className="text-tech-indigo text-xs font-mono font-bold uppercase tracking-widest block mb-2">
              // Local Support Process
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase">
              How We Partner With You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-tech-sky/40 transition-all relative group">
              <span className="text-4xl font-extrabold font-mono text-tech-sky/30 block mb-4">
                01
              </span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-tech-sky transition-colors">
                Consultation &amp; Assessment
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                We meet face-to-face in Tacloban or online to analyze your business workflows, tax requirements, and IT infrastructure gaps.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-tech-indigo/40 transition-all relative group">
              <span className="text-4xl font-extrabold font-mono text-tech-indigo/30 block mb-4">
                02
              </span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-tech-indigo transition-colors">
                Deploy &amp; Integrate
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Deploy Orientis software solutions or build custom web/mobile systems tailored specifically to your operational goals.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan-400/40 transition-all relative group">
              <span className="text-4xl font-extrabold font-mono text-cyan-400/30 block mb-4">
                03
              </span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                Local On-Site Support
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Enjoy ongoing staff training, same-day local technical support, and continuous system updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Tech Stack Section */}
      <section className="py-20 bg-tech-black/50 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-[5%] max-w-[1200px]">
          <div className="text-center mb-12">
            <span className="text-tech-sky text-xs font-bold uppercase tracking-widest font-mono mb-2 block">
              // Core Tech Stack
            </span>
            <h2 className="text-3xl font-bold text-white uppercase">Development Technologies</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-tech-sky/40 transition-colors group">
              <i className="fa-brands fa-react text-3xl text-gray-500 group-hover:text-[#61DAFB] transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">React</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-tech-sky/40 transition-colors group">
              <i className="fa-brands fa-node-js text-3xl text-gray-500 group-hover:text-[#339933] transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Node.js</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-tech-sky/40 transition-colors group">
              <i className="fa-solid fa-database text-3xl text-gray-500 group-hover:text-[#336791] transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">PostgreSQL</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-tech-sky/40 transition-colors group">
              <i className="fa-brands fa-aws text-3xl text-gray-500 group-hover:text-[#FF9900] transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">AWS</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-tech-sky/40 transition-colors group">
              <i className="fa-brands fa-cloudflare text-3xl text-gray-500 group-hover:text-[#F38020] transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Cloudflare</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-tech-sky/40 transition-colors group">
              <i className="fa-brands fa-docker text-3xl text-gray-500 group-hover:text-[#2496ED] transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Docker</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-tech-sky/40 transition-colors group">
              <i className="fa-brands fa-python text-3xl text-gray-500 group-hover:text-[#3776AB] transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Python</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-tech-sky/40 transition-colors group">
              <i className="fa-solid fa-cube text-3xl text-gray-500 group-hover:text-tech-indigo transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Tailwind</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Quote Section */}
      <section className="py-28 bg-tech-black relative overflow-hidden border-t border-tech-blue/10">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-tech-indigo/10 -translate-x-1/2 -translate-y-1/2 blur-[100px] -z-10 animate-pulse"></div>

        <div className="container mx-auto px-[5%] max-w-[900px]">
          <div className="text-center glass-panel p-10 md:p-14 rounded-3xl border border-white/5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-tech-blue/5 to-tech-indigo/5 rounded-3xl -z-10"></div>

            <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold tracking-tight leading-[1.15] mb-8 text-white uppercase">
              "Building Digital Futures,<br />One Business at a <span className="bg-gradient-to-r from-tech-sky via-cyan-400 to-tech-indigo bg-clip-text text-transparent">Time</span>."
            </h2>
            <p className="mt-6 text-[1.05rem] text-gray-400 leading-relaxed max-w-[650px] mx-auto font-sans">
              &gt; Partner with Tacloban's full-service IT team for custom web applications, mobile solutions, and BIR-compliant software.
            </p>
            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-block px-10 py-4 font-bold transition-all duration-200 text-base bg-gradient-to-r from-tech-blue to-tech-indigo text-white border-0 hover:shadow-tech shadow-tech-sm uppercase tracking-wider rounded-xl"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
