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
            Systems Online // Enterprise Grade 2026
          </div>

          {/* Main Heading */}
          <h1 className="text-[clamp(2.5rem,6.5vw,5.5rem)] font-extrabold tracking-tight leading-[1.05] mb-8 text-white uppercase">
            Power Your <br />
            <span className="bg-gradient-to-r from-tech-sky via-cyan-400 to-tech-indigo bg-clip-text text-transparent">
              Digital Future.
            </span>
          </h1>

          {/* Typewriter Subheading */}
          <Typewriter />

          {/* Description Card */}
          <p className="max-w-[680px] mx-auto mb-12 text-sm md:text-[1.05rem] leading-relaxed text-gray-400 border border-white/5 p-6 bg-tech-gray/45 backdrop-blur-md rounded-2xl font-sans shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            &gt; Orientis Digital provides high-performance enterprise products, cloud infrastructure, and custom engineering strategies to scale, automate, and innovate.
          </p>

          {/* CTA Actions */}
          <div className="flex gap-5 justify-center flex-wrap">
            <Link
              to="/products"
              className="inline-block px-10 py-4 font-bold transition-all duration-200 text-sm md:text-base bg-gradient-to-r from-tech-blue to-tech-indigo text-white border-0 hover:shadow-tech hover:-translate-y-0.5 shadow-tech-sm uppercase tracking-wider rounded-xl"
            >
              Explore Products
            </Link>
            <Link
              to="/solutions"
              className="inline-block px-10 py-4 font-bold transition-all duration-200 text-sm md:text-base bg-transparent text-white border border-white/10 hover:border-tech-blue hover:bg-tech-blue/10 uppercase tracking-wider rounded-xl"
            >
              Our Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20 bg-tech-gray/30 border-t border-white/5 relative z-20">
        <div className="container mx-auto px-[5%] max-w-[1280px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-tech-sky text-xs font-mono font-bold uppercase tracking-widest block mb-2">
                // Product Ecosystem
              </span>
              <h2 className="text-3xl font-extrabold text-white uppercase">
                Featured Software Suite
              </h2>
            </div>
            <Link
              to="/products"
              className="text-xs font-bold text-tech-sky hover:text-white uppercase tracking-wider flex items-center gap-1.5"
            >
              View All Products <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-sky/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-tech-blue/10 border border-tech-blue/20 flex items-center justify-center text-tech-sky text-xl mb-4 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-server"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tech-sky transition-colors">
                Cloud Orchestrator
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Automated multi-cloud workload provisioning &amp; zero-downtime deployments.
              </p>
              <span className="text-[11px] font-mono text-tech-indigo uppercase font-semibold">
                99.999% SLA Uptime
              </span>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-indigo/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-tech-indigo/10 border border-tech-indigo/20 flex items-center justify-center text-tech-indigo text-xl mb-4 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-network-wired"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tech-indigo transition-colors">
                Nexus API Gateway
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Sub-millisecond API proxy with adaptive DDoS protection and rate limiting.
              </p>
              <span className="text-[11px] font-mono text-tech-sky uppercase font-semibold">
                &lt; 0.8ms Latency
              </span>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-xl mb-4 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                ShieldOps Cyber
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                AI incident response, continuous audit scanning &amp; vulnerability patching.
              </p>
              <span className="text-[11px] font-mono text-cyan-400 uppercase font-semibold">
                24/7 Threat Neutralization
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-tech-black border-t border-white/5 relative z-20">
        <div className="container mx-auto px-[5%] max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 group hover:border-tech-blue/30 transition-all duration-300">
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
            <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 group hover:border-tech-indigo/30 transition-all duration-300">
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
            <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 group hover:border-tech-blue/30 transition-all duration-300">
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

      {/* Tech Stack Section */}
      <section className="py-20 bg-tech-black/50 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-[5%] max-w-[1200px]">
          <div className="text-center mb-12">
            <span className="text-tech-sky text-xs font-bold uppercase tracking-widest font-mono mb-2 block">
              // Core Tech Stack
            </span>
            <h2 className="text-3xl font-bold text-white uppercase">Ecosystem Architecture</h2>
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

      {/* Quote / Manifesto Section */}
      <section className="py-28 bg-tech-black relative overflow-hidden border-t border-tech-blue/10">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-tech-indigo/10 -translate-x-1/2 -translate-y-1/2 blur-[100px] -z-10 animate-pulse"></div>

        <div className="container mx-auto px-[5%] max-w-[900px]">
          <div className="text-center glass-panel p-10 md:p-14 rounded-3xl border border-white/5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-tech-blue/5 to-tech-indigo/5 rounded-3xl -z-10"></div>

            <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold tracking-tight leading-[1.15] mb-8 text-white uppercase">
              "Innovation is not a feature,<br />it's the{' '}
              <span className="bg-gradient-to-r from-tech-sky via-cyan-400 to-tech-indigo bg-clip-text text-transparent">
                foundation
              </span>."
            </h2>
            <p className="mt-6 text-[1.05rem] text-gray-400 leading-relaxed max-w-[650px] mx-auto font-sans">
              &gt; Join the growing number of modern enterprises relying on Orientis Digital software &amp; infrastructure.
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
