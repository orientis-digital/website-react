import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="min-h-[92vh] flex items-center justify-center relative overflow-hidden pt-32 pb-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <img src="/static/img/hero-bg.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-tech-black via-transparent to-tech-black"></div>
        </div>

        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-tech-indigo/10 rounded-full blur-[140px] pointer-events-none animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-tech-sky/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="container mx-auto px-[5%] max-w-[900px] z-10 text-center fade-up">
          {/* Tech Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-tech-blue/20 bg-tech-blue/5 text-tech-sky text-xs font-mono uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-sky opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tech-sky"></span>
            </span>
            Systems Online // Innovation Powered
          </div>

          {/* Main Heading */}
          <h1 className="text-[clamp(2.5rem,6.5vw,5.5rem)] font-extrabold tracking-tight leading-[1.05] mb-8 text-white uppercase">
            Power Your <br />
            <span className="bg-gradient-to-r from-tech-sky to-tech-indigo bg-clip-text text-transparent">
              Digital Future.
            </span>
          </h1>

          {/* Typewriter Subheading */}
          <Typewriter />

          {/* Description Card */}
          <p className="max-w-[680px] mx-auto mb-12 text-sm md:text-[1.05rem] leading-relaxed text-gray-400 border border-white/5 p-6 bg-tech-gray/45 backdrop-blur-md rounded-2xl font-sans shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            &gt; Orientis Digital provides the infrastructure, development, and strategies you need to scale, automate, and innovate in the modern digital landscape.
          </p>

          {/* CTA Actions */}
          <div className="flex gap-5 justify-center flex-wrap">
            <Link
              to="/company/contact"
              className="inline-block px-10 py-4 font-bold transition-all duration-200 text-sm md:text-base bg-gradient-to-r from-tech-blue to-tech-indigo text-white border-0 hover:shadow-tech hover:-translate-y-0.5 shadow-tech-sm uppercase tracking-wider rounded-md"
            >
              Start Your Project
            </Link>
            <Link
              to="/platform"
              className="inline-block px-10 py-4 font-bold transition-all duration-200 text-sm md:text-base bg-transparent text-white border border-white/10 hover:border-tech-blue hover:bg-tech-blue/10 uppercase tracking-wider rounded-md"
            >
              Our Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-tech-black border-t border-white/5 relative z-20">
        <div className="container mx-auto px-[5%] max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 group hover:border-tech-blue/30 transition-all duration-300 fade-up">
              <div className="w-14 h-14 bg-tech-blue/10 border border-tech-blue/20 rounded-xl flex items-center justify-center text-tech-sky text-2xl group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-cloud-arrow-up"></i>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-none font-mono mb-1">
                  99.99%
                </span>
                <span className="block text-xs uppercase tracking-widest text-gray-400">
                  System SLA Uptime
                </span>
              </div>
            </div>
            {/* Stat 2 */}
            <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 group hover:border-tech-indigo/30 transition-all duration-300 fade-up">
              <div className="w-14 h-14 bg-tech-indigo/10 border border-tech-indigo/20 rounded-xl flex items-center justify-center text-tech-indigo text-2xl group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-code-branch"></i>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-none font-mono mb-1">
                  50M+
                </span>
                <span className="block text-xs uppercase tracking-widest text-gray-400">
                  Daily API Requests
                </span>
              </div>
            </div>
            {/* Stat 3 */}
            <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 group hover:border-tech-blue/30 transition-all duration-300 fade-up">
              <div className="w-14 h-14 bg-tech-blue/10 border border-tech-blue/20 rounded-xl flex items-center justify-center text-tech-sky text-2xl group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-none font-mono mb-1">
                  250+
                </span>
                <span className="block text-xs uppercase tracking-widest text-gray-400">
                  Global Cloud Deployments
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section id="services" className="py-24 bg-tech-gray/30 border-t border-tech-blue/10">
        <div className="container mx-auto px-[5%] max-w-[1400px]">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 fade-up">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 border-l-4 border-tech-blue pl-4">
                Platform <br /> Overview
              </h2>
              <p className="text-[0.95rem] text-gray-400 max-w-[600px] leading-relaxed">
                &gt; Our core technology services.
              </p>
            </div>
            <div>
              <Link
                to="/platform"
                className="inline-block px-8 py-3 text-sm font-bold transition-all duration-200 bg-transparent text-tech-blue border border-tech-blue hover:bg-tech-blue hover:text-white uppercase tracking-widest rounded-md"
              >
                [ View Full Services ]
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Custom Software */}
            <Link
              to="/solutions/custom-software"
              className="glass-panel glass-panel-hover p-8 flex flex-col h-full relative group rounded-2xl fade-up"
            >
              <div className="text-3xl text-gray-400 mb-6 group-hover:text-tech-blue transition-colors">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-tech-blue transition-colors">
                Custom Software
              </h3>
              <p className="text-xs leading-[1.5] text-gray-400 mb-4 font-sans">
                Scalable, mobile-responsive applications built for performance.
              </p>
              <ul className="list-none text-left space-y-2 mt-auto">
                <li className="text-xs text-gray-500">&gt; Web Applications</li>
                <li className="text-xs text-gray-500">&gt; Mobile Development</li>
                <li className="text-xs text-gray-500">&gt; API Integration</li>
              </ul>
            </Link>

            {/* 2. Cloud Infrastructure */}
            <Link
              to="/solutions/cloud-ops"
              className="glass-panel glass-panel-hover p-8 flex flex-col h-full relative group rounded-2xl fade-up"
            >
              <div className="text-3xl text-gray-400 mb-6 group-hover:text-tech-blue transition-colors">
                <i className="fa-solid fa-cloud"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-tech-blue transition-colors">
                Cloud Ops
              </h3>
              <p className="text-xs leading-[1.5] text-gray-400 mb-4 font-sans">
                Advanced DevOps and reliable cloud infrastructure management.
              </p>
              <ul className="list-none text-left space-y-2 mt-auto">
                <li className="text-xs text-gray-500">&gt; AWS/Azure/GCP</li>
                <li className="text-xs text-gray-500">&gt; CI/CD Pipelines</li>
                <li className="text-xs text-gray-500">&gt; Managed Hosting</li>
              </ul>
            </Link>

            {/* 3. Tech Consulting */}
            <Link
              to="/solutions/tech-consulting"
              className="glass-panel glass-panel-hover p-8 flex flex-col h-full relative group rounded-2xl fade-up"
            >
              <div className="text-3xl text-gray-400 mb-6 group-hover:text-tech-blue transition-colors">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-tech-blue transition-colors">
                Consulting
              </h3>
              <p className="text-xs leading-[1.5] text-gray-400 mb-4 font-sans">
                Strategic guidance for digital transformation and scale.
              </p>
              <ul className="list-none text-left space-y-2 mt-auto">
                <li className="text-xs text-gray-500">&gt; Strategy & Roadmap</li>
                <li className="text-xs text-gray-500">&gt; Tech Stack Audit</li>
                <li className="text-xs text-gray-500">&gt; Innovation Workshops</li>
              </ul>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-tech-black/50 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-[5%] max-w-[1200px] fade-up">
          <div className="text-center mb-12">
            <span className="text-tech-sky text-xs font-bold uppercase tracking-widest font-mono mb-2 block">
              // Core Ecosystem
            </span>
            <h2 className="text-3xl font-bold text-white uppercase">Technology Stack</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
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
              <i className="fa-brands fa-node-js text-3xl text-gray-500 group-hover:text-[#339933] transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Node.js</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-tech-sky/40 transition-colors group">
              <i className="fa-brands fa-python text-3xl text-gray-500 group-hover:text-[#3776AB] transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Python</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-tech-sky/40 transition-colors group">
              <i className="fa-brands fa-react text-3xl text-gray-500 group-hover:text-[#61DAFB] transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">React</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-tech-sky/40 transition-colors group">
              <i className="fa-brands fa-js-square text-3xl text-gray-500 group-hover:text-[#F7DF1E] transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">JS (ES6+)</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-tech-sky/40 transition-colors group">
              <i className="fa-solid fa-cube text-3xl text-gray-500 group-hover:text-tech-indigo transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Tailwind</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-28 bg-tech-black relative overflow-hidden border-t border-tech-blue/10">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-tech-indigo/10 -translate-x-1/2 -translate-y-1/2 blur-[100px] -z-10 animate-pulse"></div>

        <div className="container mx-auto px-[5%] max-w-[900px] scale-up-fade">
          <div className="text-center glass-panel p-10 md:p-14 rounded-3xl border border-white/5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-tech-blue/5 to-tech-indigo/5 rounded-3xl -z-10"></div>

            <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold tracking-tight leading-[1.15] mb-8 text-white uppercase">
              "Innovation is not a feature,<br />it's the{' '}
              <span className="bg-gradient-to-r from-tech-sky to-tech-indigo bg-clip-text text-transparent">
                foundation
              </span>."
            </h2>
            <p className="mt-6 text-[1.05rem] text-gray-400 leading-relaxed max-w-[650px] mx-auto font-sans">
              &gt; Join the hundreds of companies that trust Orientis Digital to power their digital growth.
            </p>
            <div className="mt-12">
              <Link
                to="/company/contact"
                className="inline-block px-10 py-4 font-bold transition-all duration-200 text-base bg-gradient-to-r from-tech-blue to-tech-indigo text-white border-0 hover:shadow-tech shadow-tech-sm uppercase tracking-wider rounded-md"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
