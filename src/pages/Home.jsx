import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <main className="flex-1">
      <SEO
        title="Orientis Digital | Business Technology Partner & Custom Software Tacloban"
        description="Tacloban's premier technology partner. We build custom web applications, mobile software, enterprise SaaS tools, and managed IT services designed to grow local businesses and MSMEs."
      />
      {/* 1. Conversion Hero Section */}
      <section className="min-h-[92vh] flex items-center justify-center relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img src="/static/img/hero-bg.png" alt="Digital Infrastructure" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-tech-black via-transparent to-tech-black"></div>
        </div>

        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-impeccable-amber/15 rounded-full blur-[140px] pointer-events-none animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-impeccable-orange/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="container mx-auto px-[5%] max-w-[950px] z-10 text-center fade-up">
          <h1 className="text-[clamp(2.5rem,6vw,5.2rem)] font-display font-extrabold tracking-tight leading-[1.08] mb-6 text-white uppercase">
            Powering Your Business <br />
            <span className="bg-gradient-to-r from-impeccable-amber via-amber-400 to-impeccable-orange bg-clip-text text-transparent">
              Digital Transformation.
            </span>
          </h1>

          <Typewriter />

          <p className="max-w-[720px] mx-auto mb-10 text-sm md:text-base leading-relaxed text-gray-300 border border-white/10 p-6 bg-tech-gray/60 backdrop-blur-xl rounded-2xl font-sans shadow-[0_8px_32px_rgb(0,0,0,0.3)]">
            Orientis Digital delivers enterprise-grade web &amp; mobile software, custom business tools, and 24/7 managed IT services engineered to scale your operations and drive revenue.
          </p>

          {/* Action CTAs */}
          <div className="flex gap-4 justify-center flex-wrap mb-14">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 font-bold font-display transition-all duration-200 text-sm md:text-base bg-gradient-to-r from-impeccable-amber via-amber-500 to-impeccable-orange text-white border-0 hover:shadow-impeccable hover:-translate-y-0.5 shadow-impeccable uppercase tracking-wider rounded-xl group"
            >
              <span>Book Free Consultation</span>
              <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
            </Link>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-9 py-4 font-bold font-display transition-all duration-200 text-sm md:text-base bg-transparent text-white border border-white/15 hover:border-impeccable-amber hover:bg-impeccable-amber/10 uppercase tracking-wider rounded-xl"
            >
              Explore Solutions
            </Link>
          </div>

          {/* Social Proof / Key Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[850px] mx-auto pt-6 border-t border-white/10 text-left">
            <div className="p-3">
              <span className="text-2xl font-extrabold font-display text-white block">100%</span>
              <span className="text-xs text-gray-400 font-sans">On-Site Regional Support</span>
            </div>
            <div className="p-3">
              <span className="text-2xl font-extrabold font-display text-impeccable-amber block">24/7</span>
              <span className="text-xs text-gray-400 font-sans">Infrastructure Monitoring</span>
            </div>
            <div className="p-3">
              <span className="text-2xl font-extrabold font-display text-impeccable-orange block">Full-Stack</span>
              <span className="text-xs text-gray-400 font-sans">Web, Mobile &amp; Cloud</span>
            </div>
            <div className="p-3">
              <span className="text-2xl font-extrabold font-display text-white block">MSME</span>
              <span className="text-xs text-gray-400 font-sans">Tailored Pricing Models</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Business Value Pillars */}
      <section className="py-24 bg-tech-black/60 border-t border-white/5 relative">
        <div className="container mx-auto px-[5%] max-w-[1280px]">
          <div className="text-center mb-16 max-w-[700px] mx-auto">
            <span className="text-impeccable-amber text-xs font-mono font-bold uppercase tracking-widest block mb-2">
              // Business Advantages
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white uppercase mb-4">
              Built for Scale, Rooted Locally
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed font-sans">
              We bridge high-end software development with dedicated face-to-face service for Leyte and Eastern Visayas enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-impeccable-amber/50 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-impeccable-amber/10 border border-impeccable-amber/30 flex items-center justify-center text-impeccable-amber text-xl mb-5 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-impeccable-amber transition-colors">
                Local Dedicated Support
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Fast on-site technical response in Tacloban and regional hubs. No waiting on overseas tickets when urgent issues arise.
              </p>
            </div>

            <div className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-impeccable-orange/50 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-impeccable-orange/10 border border-impeccable-orange/30 flex items-center justify-center text-impeccable-orange text-xl mb-5 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-impeccable-orange transition-colors">
                Custom Enterprise SaaS
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Tailored software tools for workflow automation, inventory tracking, POS systems, and integrated local payment gateways.
              </p>
            </div>

            <div className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-amber-400/50 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl mb-5 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-amber-400 transition-colors">
                End-to-End Delivery
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                From initial UI/UX strategy to full-stack code engineering, cloud architecture, and ongoing 24/7 system maintenance.
              </p>
            </div>

            <div className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-impeccable-amber/50 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-impeccable-amber/10 border border-impeccable-amber/30 flex items-center justify-center text-impeccable-amber text-xl mb-5 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-impeccable-amber transition-colors">
                Cost-Effective Growth
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Flexible subscription and milestone plans tailored for MSMEs, removing massive upfront financial barriers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products Early Access Waitlist Banner */}
      <section className="py-20 bg-tech-gray/30 border-t border-white/5 relative z-20">
        <div className="container mx-auto px-[5%] max-w-[1000px]">
          <div className="glass-panel p-10 md:p-14 rounded-3xl border border-impeccable-amber/30 relative overflow-hidden text-center shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-impeccable-amber/10 rounded-full blur-[100px] pointer-events-none"></div>

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-impeccable-orange/40 bg-impeccable-orange/10 text-impeccable-orange text-xs font-mono uppercase tracking-widest mb-4">
              <i className="fa-solid fa-sparkles"></i> Early Access Waitlist
            </span>

            <h2 className="text-3xl font-display font-extrabold text-white uppercase mb-4">
              Upcoming MSME Software Products Suite
            </h2>

            <p className="text-gray-300 text-sm max-w-[650px] mx-auto mb-8 font-sans leading-relaxed">
              We are finalizing automated business management, invoicing, and POS platforms optimized for local businesses. Get early priority access and exclusive partner pricing.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-3.5 font-bold font-display text-xs uppercase tracking-wider text-white bg-gradient-to-r from-impeccable-amber via-amber-500 to-impeccable-orange rounded-xl shadow-impeccable hover:shadow-[0_0_25px_rgba(204,136,0,0.4)] hover:-translate-y-0.5 transition-all"
              >
                <span>Join Early Access Waitlist</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. High-Trust Client Process Workflow */}
      <section className="py-24 bg-tech-gray/20 border-t border-white/5 relative">
        <div className="container mx-auto px-[5%] max-w-[1280px]">
          <div className="text-center mb-16 max-w-[700px] mx-auto">
            <span className="text-impeccable-orange text-xs font-mono font-bold uppercase tracking-widest block mb-2">
              // Seamless Execution
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white uppercase mb-4">
              How We Partner With Your Business
            </h2>
            <p className="text-sm text-gray-400 font-sans">
              A transparent, outcome-oriented methodology designed to eliminate risk and deliver measurable business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-impeccable-amber/40 transition-all relative group">
              <div className="flex justify-between items-center mb-6">
                <span className="text-4xl font-extrabold font-mono text-impeccable-amber/40">
                  01
                </span>
                <div className="w-10 h-10 rounded-lg bg-impeccable-amber/10 border border-impeccable-amber/20 flex items-center justify-center text-impeccable-amber text-sm">
                  <i className="fa-solid fa-comments"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-impeccable-amber transition-colors">
                1. Discovery &amp; ROI Assessment
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                We evaluate your current business processes, operational bottlenecks, tax compliance, and tech goals in a focused consultation.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-impeccable-orange/40 transition-all relative group">
              <div className="flex justify-between items-center mb-6">
                <span className="text-4xl font-extrabold font-mono text-impeccable-orange/40">
                  02
                </span>
                <div className="w-10 h-10 rounded-lg bg-impeccable-orange/10 border border-impeccable-orange/20 flex items-center justify-center text-impeccable-orange text-sm">
                  <i className="fa-solid fa-code"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-impeccable-orange transition-colors">
                2. Custom Build &amp; Testing
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                Our team develops high-performance custom applications or integrates SaaS modules with continuous review checkpoints.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-amber-400/40 transition-all relative group">
              <div className="flex justify-between items-center mb-6">
                <span className="text-4xl font-extrabold font-mono text-amber-400/40">
                  03
                </span>
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-sm">
                  <i className="fa-solid fa-headset"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-amber-400 transition-colors">
                3. Deployment &amp; On-Site Training
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                Smooth deployment with hands-on staff training in Tacloban, guaranteed SLAs, and ongoing system updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Tech Stack Section */}
      <section className="py-20 bg-tech-black/50 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-[5%] max-w-[1200px]">
          <div className="text-center mb-12">
            <span className="text-impeccable-amber text-xs font-bold uppercase tracking-widest font-mono mb-2 block">
              // Modern Infrastructure
            </span>
            <h2 className="text-3xl font-bold font-display text-white uppercase">Enterprise-Grade Technologies</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-impeccable-amber/40 transition-colors group">
              <i className="fa-brands fa-react text-3xl text-gray-500 group-hover:text-[#61DAFB] transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">React</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-impeccable-amber/40 transition-colors group">
              <i className="fa-brands fa-node-js text-3xl text-gray-500 group-hover:text-[#339933] transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Node.js</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-impeccable-amber/40 transition-colors group">
              <i className="fa-solid fa-database text-3xl text-gray-500 group-hover:text-[#336791] transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">PostgreSQL</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-impeccable-amber/40 transition-colors group">
              <i className="fa-brands fa-aws text-3xl text-gray-500 group-hover:text-[#FF9900] transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">AWS Cloud</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-impeccable-amber/40 transition-colors group">
              <i className="fa-brands fa-cloudflare text-3xl text-gray-500 group-hover:text-[#F38020] transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Cloudflare</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-impeccable-amber/40 transition-colors group">
              <i className="fa-brands fa-docker text-3xl text-gray-500 group-hover:text-[#2496ED] transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Docker</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-impeccable-amber/40 transition-colors group">
              <i className="fa-brands fa-python text-3xl text-gray-500 group-hover:text-[#3776AB] transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Python</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center hover:border-impeccable-amber/40 transition-colors group">
              <i className="fa-solid fa-cube text-3xl text-gray-500 group-hover:text-impeccable-orange transition-colors mb-2"></i>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Tailwind</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. High-Conversion Lead Magnet Call To Action */}
      <section className="py-28 bg-tech-black relative overflow-hidden border-t border-impeccable-amber/10">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-impeccable-orange/15 -translate-x-1/2 -translate-y-1/2 blur-[120px] -z-10 animate-pulse"></div>

        <div className="container mx-auto px-[5%] max-w-[950px]">
          <div className="text-center glass-panel p-10 md:p-16 rounded-3xl border border-impeccable-amber/30 relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-impeccable-amber/10 to-impeccable-orange/10 rounded-3xl -z-10"></div>

            <span className="text-impeccable-amber text-xs font-mono uppercase tracking-widest font-bold block mb-3">
              // Transform Your Operations
            </span>

            <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-display font-extrabold tracking-tight leading-[1.15] mb-6 text-white uppercase">
              Ready to Accelerate Your <br />
              <span className="bg-gradient-to-r from-impeccable-amber via-amber-400 to-impeccable-orange bg-clip-text text-transparent">
                Digital Business Capabilities?
              </span>
            </h2>

            <p className="mt-4 text-[1.05rem] text-gray-300 leading-relaxed max-w-[680px] mx-auto font-sans">
              Schedule a free 30-minute discovery session with our local tech leadership. We'll map out a custom digital strategy tailored to your exact budget and timeline.
            </p>

            <div className="mt-10 flex gap-4 justify-center flex-wrap">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 font-bold font-display transition-all duration-200 text-base bg-gradient-to-r from-impeccable-amber via-amber-500 to-impeccable-orange text-white border-0 hover:shadow-impeccable hover:-translate-y-0.5 shadow-impeccable uppercase tracking-wider rounded-xl group"
              >
                <span>Schedule Free Consultation</span>
                <i className="fa-solid fa-calendar-check group-hover:scale-110 transition-transform"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

