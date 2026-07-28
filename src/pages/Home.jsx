import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';

const terminalTabs = [
  {
    id: 'deploy',
    title: 'orientis deploy',
    command: 'orientis deploy --env production --cluster aws-east-1 --canary 10%',
    output: [
      '✔ Parsing infrastructure manifest (orientis.yaml)...',
      '✔ Provisioning AWS EKS & Cloudflare Edge routing...',
      '✔ Running automated health & security checks...',
      '🚀 Deployment successful! Live at https://app.orientis.tech'
    ]
  },
  {
    id: 'nexus',
    title: 'nexus proxy',
    command: 'nexus gateway proxy --target api.internal --rate-limit adaptive --jwt-auth',
    output: [
      '✔ Initializing Nexus Gateway v2.1...',
      '✔ Loading OAuth2 / JWT verification middleware...',
      '✔ Adaptive rate limiting active (subnet filtering enabled)...',
      '⚡ Proxy active on port 443 with sub-millisecond routing'
    ]
  },
  {
    id: 'shieldops',
    title: 'shieldops audit',
    command: 'shieldops audit --scope cloud-infra --auto-remediate',
    output: [
      '✔ Scanning 142 container images & IAM policies...',
      '✔ Zero critical CVE vulnerabilities detected.',
      '✔ Compliance enforced: SOC2 Type II & ISO 27001.',
      '🛡️ Autonomous security shield active.'
    ]
  }
];

export default function Home() {
  const [activeTermTab, setActiveTermTab] = useState('deploy');
  const [copied, setCopied] = useState(false);

  const currentTab = terminalTabs.find((t) => t.id === activeTermTab);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTab.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            Systems Online // Enterprise Platform 2026
          </div>

          <h1 className="text-[clamp(2.5rem,6.5vw,5.5rem)] font-extrabold tracking-tight leading-[1.05] mb-8 text-white uppercase">
            Power Your <br />
            <span className="bg-gradient-to-r from-tech-sky via-cyan-400 to-tech-indigo bg-clip-text text-transparent">
              Digital Future.
            </span>
          </h1>

          <Typewriter />

          <p className="max-w-[680px] mx-auto mb-12 text-sm md:text-[1.05rem] leading-relaxed text-gray-400 border border-white/5 p-6 bg-tech-gray/45 backdrop-blur-md rounded-2xl font-sans shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            &gt; Orientis Digital provides high-performance enterprise products, cloud infrastructure, and custom engineering strategies to scale, automate, and innovate.
          </p>

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

      {/* 2. Core Engineering Pillars (Why Orientis) */}
      <section className="py-20 bg-tech-black/60 border-t border-white/5 relative">
        <div className="container mx-auto px-[5%] max-w-[1280px]">
          <div className="text-center mb-16">
            <span className="text-tech-sky text-xs font-mono font-bold uppercase tracking-widest block mb-2">
              // Why Orientis Digital
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase">
              Engineered for Enterprise Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-sky/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-tech-blue/10 border border-tech-blue/20 flex items-center justify-center text-tech-sky text-xl mb-4 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-tech-sky transition-colors">
                Zero-Trust Security
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Continuous vulnerability scanning, encrypted data pipelines, and SOC2/ISO compliance out of the box.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-indigo/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-tech-indigo/10 border border-tech-indigo/20 flex items-center justify-center text-tech-indigo text-xl mb-4 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-tech-indigo transition-colors">
                Global Edge Speed
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Multi-region edge routing with sub-millisecond latency for global user workloads.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-xl mb-4 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-terminal"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                Developer-First DX
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Intuitive CLI tools, unified SDKs, and REST/gRPC endpoints designed for modern engineering teams.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-sky/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-tech-sky/10 border border-tech-sky/20 flex items-center justify-center text-tech-sky text-xl mb-4 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-arrows-rotate"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-tech-sky transition-colors">
                Autonomous Failover
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Self-healing infrastructure monitoring with intelligent auto-scaling and zero downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Software Suite (Products Preview) */}
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
            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-sky/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-tech-blue/10 border border-tech-blue/20 flex items-center justify-center text-tech-sky text-xl mb-4 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-server"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tech-sky transition-colors">
                  Cloud Orchestrator
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Automated multi-cloud workload provisioning &amp; zero-downtime deployments.
                </p>
              </div>
              <Link
                to="/products"
                className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-tech-sky hover:underline uppercase tracking-wider"
              >
                Learn More &gt;
              </Link>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-indigo/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-tech-indigo/10 border border-tech-indigo/20 flex items-center justify-center text-tech-indigo text-xl mb-4 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-network-wired"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tech-indigo transition-colors">
                  Nexus API Gateway
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Sub-millisecond API proxy with adaptive DDoS protection and rate limiting.
                </p>
              </div>
              <Link
                to="/products"
                className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-tech-indigo hover:underline uppercase tracking-wider"
              >
                Learn More &gt;
              </Link>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-xl mb-4 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  ShieldOps Cyber
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  AI incident response, continuous audit scanning &amp; vulnerability patching.
                </p>
              </div>
              <Link
                to="/products"
                className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:underline uppercase tracking-wider"
              >
                Learn More &gt;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Developer CLI Terminal Showcase */}
      <section className="py-24 bg-tech-black border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-[5%] max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="text-tech-sky text-xs font-mono font-bold uppercase tracking-widest block mb-2">
              // Unified Developer Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase">
              Control Infrastructure from the Terminal
            </h2>
          </div>

          {/* Terminal Box */}
          <div className="glass-panel rounded-3xl border border-white/15 overflow-hidden shadow-2xl bg-tech-black/90">
            {/* Terminal Header */}
            <div className="bg-tech-gray/90 px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                <span className="text-xs font-mono text-gray-400 ml-2">orientis-cli ~ bash</span>
              </div>

              {/* Terminal Tabs */}
              <div className="flex gap-2">
                {terminalTabs.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTermTab(t.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                      activeTermTab === t.id
                        ? 'bg-tech-blue/20 text-tech-sky border border-tech-blue/40'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {t.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-xs md:text-sm">
              {/* Command Row */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2 text-tech-sky">
                  <span className="text-tech-indigo">&gt;</span>
                  <span className="text-white font-semibold">{currentTab.command}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="text-xs text-gray-400 hover:text-white flex items-center gap-1 cursor-pointer bg-white/5 px-2.5 py-1 rounded-md border border-white/10"
                >
                  <i className="fa-regular fa-copy"></i>
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* Command Output Log */}
              <div className="space-y-2 text-gray-400">
                {currentTab.output.map((line, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Deployment Pipeline ("How It Works") */}
      <section className="py-24 bg-tech-gray/20 border-t border-white/5 relative">
        <div className="container mx-auto px-[5%] max-w-[1280px]">
          <div className="text-center mb-16">
            <span className="text-tech-indigo text-xs font-mono font-bold uppercase tracking-widest block mb-2">
              // Streamlined Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase">
              How Orientis Powers Your Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-tech-sky/40 transition-all relative group">
              <span className="text-4xl font-extrabold font-mono text-tech-sky/30 block mb-4">
                01
              </span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-tech-sky transition-colors">
                Connect &amp; Audit
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Integrate your existing cloud providers (AWS, GCP, Azure) and code repositories. Automated vulnerability and architecture scanners audit your assets immediately.
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-tech-indigo/40 transition-all relative group">
              <span className="text-4xl font-extrabold font-mono text-tech-indigo/30 block mb-4">
                02
              </span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-tech-indigo transition-colors">
                Deploy &amp; Orchestrate
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Deploy the Orientis product suite (Orchestrator, Nexus Gateway, ShieldOps) to manage workloads with sub-millisecond edge routing and zero downtime.
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan-400/40 transition-all relative group">
              <span className="text-4xl font-extrabold font-mono text-cyan-400/30 block mb-4">
                03
              </span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                Scale &amp; Protect
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Continuous autonomous monitoring handles auto-scaling, DDoS defense, and security patching while your team focuses on building core products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Core Tech Stack Section */}
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

      {/* 7. Quote / Manifesto Section */}
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
