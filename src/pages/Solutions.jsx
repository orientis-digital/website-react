import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const solutionsList = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    category: 'engineering',
    icon: 'fa-solid fa-code',
    accent: 'text-impeccable-amber',
    badge: 'Core Engineering',
    description:
      'Designing and engineering scalable, high-performance web applications, mobile platforms, and microservices tailored to your business logic.',
    capabilities: [
      'Modern Web Applications (React, Next.js, Node.js)',
      'Cross-Platform Mobile Apps (iOS & Android)',
      'REST & GraphQL API Architecture',
      'Legacy System Modernization'
    ]
  },
  {
    id: 'cloud-ops',
    title: 'Cloud Ops & Infrastructure',
    category: 'cloud',
    icon: 'fa-solid fa-cloud',
    accent: 'text-impeccable-orange',
    badge: 'Managed IT',
    description:
      'Enterprise cloud management, CI/CD automation, and multi-region infrastructure hosting across AWS, GCP, and Azure with high-availability monitoring.',
    capabilities: [
      'Managed AWS/GCP Infrastructure',
      'Kubernetes & Docker Orchestration',
      'Automated CI/CD Deployment Pipelines',
      '24/7 Incident Response & Backup'
    ]
  },
  {
    id: 'tech-consulting',
    title: 'Strategic Tech Consulting',
    category: 'consulting',
    icon: 'fa-solid fa-lightbulb',
    accent: 'text-impeccable-amber',
    badge: 'Advisory',
    description:
      'Expert technical roadmaps, architecture audits, and digital transformation strategy to accelerate innovation and reduce tech debt.',
    capabilities: [
      'Technology Stack & Security Audit',
      'Scalability & Performance Optimization',
      'Digital Transformation Strategy',
      'Engineering Team Mentorship'
    ]
  },
  {
    id: 'support-maintenance',
    title: 'Monitoring & Support',
    category: 'cloud',
    icon: 'fa-solid fa-life-ring',
    accent: 'text-impeccable-orange',
    badge: 'Persistent SLAs',
    description:
      'Continuous health monitoring, automated security patch application, SSL renewal, and high-availability database backups.',
    capabilities: [
      'Real-Time Infrastructure Monitoring',
      'Automated Security Patching',
      'Disaster Recovery Drills',
      'Performance Fine-Tuning'
    ]
  },
  {
    id: 'iot-embedded',
    title: 'IoT & Embedded Systems',
    category: 'engineering',
    icon: 'fa-solid fa-microchip',
    accent: 'text-impeccable-amber',
    badge: 'Hardware Edge',
    description:
      'Low-level firmware development, edge computing analytics, and hardware integration connecting physical controllers to cloud networks.',
    capabilities: [
      'Embedded Firmware (C/C++, Rust)',
      'Edge Gateway Analytics',
      'IoT Sensor Telemetry Pipelines',
      'Hardware Prototype Integration'
    ]
  }
];

export default function Solutions() {
  const [filter, setFilter] = useState('all');

  const filteredSolutions =
    filter === 'all'
      ? solutionsList
      : solutionsList.filter((s) => s.category === filter);

  return (
    <main className="flex-1 pt-28 pb-24 min-h-[85vh]">
      <SEO
        title="Custom IT Solutions & Managed Cloud Ops | Orientis Digital"
        description="Custom web & mobile software engineering, managed cloud ops, strategic tech advisory, and IoT systems by Orientis Digital."
      />
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-12 pb-16">
        <div className="absolute top-1/3 left-1/2 w-[700px] h-[500px] bg-impeccable-amber/15 -translate-x-1/2 -translate-y-1/2 blur-[140px] pointer-events-none -z-10 animate-pulse"></div>

        <div className="container mx-auto px-[5%] max-w-[1100px] text-center fade-up">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-impeccable-amber/40 bg-impeccable-amber/10 text-impeccable-amber text-xs font-mono uppercase tracking-widest mb-6">
            <i className="fa-solid fa-layer-group"></i> Capabilities &amp; Engineering Services
          </span>

          <h1 className="text-[clamp(2.5rem,6vw,4.8rem)] font-display font-extrabold tracking-tight text-white uppercase leading-[1.08] mb-6">
            Comprehensive Digital <br />
            <span className="bg-gradient-to-r from-impeccable-amber via-amber-400 to-impeccable-orange bg-clip-text text-transparent">
              Transformation &amp; Engineering.
            </span>
          </h1>

          <p className="max-w-[720px] mx-auto text-gray-300 text-base md:text-lg leading-relaxed font-sans mb-10">
            From modern cloud operations and custom software engineering to strategic advisory and edge IoT systems — Orientis Digital delivers end-to-end technology solutions.
          </p>

          {/* Filter buttons */}
          <div className="flex justify-center items-center gap-3 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-xl text-xs font-bold font-display uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-impeccable-amber to-impeccable-orange text-white shadow-impeccable'
                  : 'bg-tech-black/60 border border-white/10 text-gray-400 hover:text-white hover:border-impeccable-amber/40'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setFilter('engineering')}
              className={`px-6 py-3 rounded-xl text-xs font-bold font-display uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'engineering'
                  ? 'bg-gradient-to-r from-impeccable-amber to-impeccable-orange text-white shadow-impeccable'
                  : 'bg-tech-black/60 border border-white/10 text-gray-400 hover:text-white hover:border-impeccable-amber/40'
              }`}
            >
              Software Engineering
            </button>
            <button
              onClick={() => setFilter('cloud')}
              className={`px-6 py-3 rounded-xl text-xs font-bold font-display uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'cloud'
                  ? 'bg-gradient-to-r from-impeccable-amber to-impeccable-orange text-white shadow-impeccable'
                  : 'bg-tech-black/60 border border-white/10 text-gray-400 hover:text-white hover:border-impeccable-amber/40'
              }`}
            >
              Cloud &amp; DevOps
            </button>
            <button
              onClick={() => setFilter('consulting')}
              className={`px-6 py-3 rounded-xl text-xs font-bold font-display uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'consulting'
                  ? 'bg-gradient-to-r from-impeccable-amber to-impeccable-orange text-white shadow-impeccable'
                  : 'bg-tech-black/60 border border-white/10 text-gray-400 hover:text-white hover:border-impeccable-amber/40'
              }`}
            >
              Consulting &amp; Strategy
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-[5%] max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((item) => (
              <div
                key={item.id}
                className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-impeccable-amber/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-impeccable-amber/10 border border-impeccable-amber/30 flex items-center justify-center text-impeccable-amber text-2xl group-hover:scale-110 transition-transform">
                      <i className={item.icon}></i>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-tech-black border border-impeccable-amber/30 text-impeccable-amber">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-impeccable-amber transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-xs leading-relaxed mb-6 font-sans">
                    {item.description}
                  </p>

                  <ul className="space-y-2.5 mb-8 list-none p-0">
                    {item.capabilities.map((cap, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-start gap-2.5">
                        <i className="fa-solid fa-chevron-right text-impeccable-amber text-[10px] mt-0.5"></i>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="w-full py-3.5 text-center rounded-xl bg-transparent border border-white/20 text-white font-bold font-display text-xs uppercase tracking-wider hover:bg-impeccable-amber hover:border-impeccable-amber transition-all"
                >
                  Inquire Service &gt;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Consultation Section */}
      <section className="py-12">
        <div className="container mx-auto px-[5%] max-w-[950px] text-center">
          <div className="glass-panel p-10 md:p-14 rounded-3xl border border-impeccable-amber/30 relative shadow-2xl">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-impeccable-orange/10 rounded-full blur-[100px] pointer-events-none"></div>

            <span className="text-impeccable-amber text-xs font-mono uppercase tracking-widest font-bold block mb-2">
              // Custom Scope Engineering
            </span>

            <h3 className="text-2xl md:text-3xl font-bold font-display text-white uppercase mb-3">
              Need a Custom Solution Package?
            </h3>
            <p className="text-gray-300 text-xs md:text-sm mb-8 max-w-[600px] mx-auto font-sans leading-relaxed">
              We engineer custom hybrid service packages combining software development, managed cloud ops, and ongoing technical advisory tailored to your exact budget.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 font-bold font-display text-xs uppercase tracking-wider text-white bg-gradient-to-r from-impeccable-amber via-amber-500 to-impeccable-orange rounded-xl shadow-impeccable hover:shadow-[0_0_25px_rgba(204,136,0,0.5)] hover:-translate-y-0.5 transition-all"
            >
              <span>Schedule Solution Scope</span>
              <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

