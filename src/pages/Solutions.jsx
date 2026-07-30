import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const solutionsList = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    category: 'engineering',
    icon: 'fa-solid fa-code',
    accent: 'text-tech-sky',
    badge: 'Core Service',
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
    accent: 'text-tech-indigo',
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
    accent: 'text-tech-sky',
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
    accent: 'text-tech-indigo',
    badge: 'Persistent',
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
    accent: 'text-tech-sky',
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
    <main className="flex-1 pt-28 pb-24">
      <SEO
        title="Custom IT Solutions & Managed Cloud Ops"
        description="Custom web & mobile software engineering, managed cloud ops, strategic tech advisory, and IoT systems by Orientis Digital."
      />
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-white/5">
        <div className="absolute top-1/3 left-1/2 w-[700px] h-[500px] bg-tech-indigo/10 -translate-x-1/2 -translate-y-1/2 blur-[140px] pointer-events-none -z-10"></div>

        <div className="container mx-auto px-[5%] max-w-[1200px] text-center fade-up">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-tech-indigo/30 bg-tech-indigo/10 text-tech-sky text-xs font-mono uppercase tracking-widest mb-6">
            <i className="fa-solid fa-layer-group"></i> Tailored Capabilities
          </span>

          <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold tracking-tight text-white uppercase leading-tight mb-6">
            Comprehensive Digital <br />
            <span className="bg-gradient-to-r from-tech-sky via-cyan-400 to-tech-indigo bg-clip-text text-transparent">
              Transformation &amp; Engineering
            </span>
          </h1>

          <p className="max-w-[720px] mx-auto text-gray-300 text-base md:text-lg leading-relaxed font-sans mb-10">
            From modern cloud operations and custom software engineering to strategic advisory and edge IoT systems — Orientis Digital delivers end-to-end technology solutions.
          </p>

          {/* Filter buttons */}
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-tech-blue text-white shadow-tech-sm'
                  : 'bg-tech-black/60 border border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setFilter('engineering')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'engineering'
                  ? 'bg-tech-blue text-white shadow-tech-sm'
                  : 'bg-tech-black/60 border border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              Software Engineering
            </button>
            <button
              onClick={() => setFilter('cloud')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'cloud'
                  ? 'bg-tech-blue text-white shadow-tech-sm'
                  : 'bg-tech-black/60 border border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              Cloud &amp; DevOps
            </button>
            <button
              onClick={() => setFilter('consulting')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'consulting'
                  ? 'bg-tech-blue text-white shadow-tech-sm'
                  : 'bg-tech-black/60 border border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              Consulting &amp; Strategy
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-tech-black/40">
        <div className="container mx-auto px-[5%] max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((item) => (
              <div
                key={item.id}
                className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-tech-sky/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-tech-blue/10 border border-tech-blue/20 flex items-center justify-center text-tech-sky text-2xl group-hover:scale-110 transition-transform">
                      <i className={item.icon}></i>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-tech-black border border-white/10 text-tech-sky">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-tech-sky transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-xs leading-relaxed mb-6 font-sans">
                    {item.description}
                  </p>

                  <ul className="space-y-2 mb-8 list-none p-0">
                    {item.capabilities.map((cap, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                        <i className="fa-solid fa-chevron-right text-tech-sky text-[10px] mt-0.5"></i>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="w-full py-3 text-center rounded-xl bg-tech-blue/10 border border-tech-blue/20 text-tech-sky font-bold text-xs uppercase tracking-wider hover:bg-tech-blue hover:text-white transition-all"
                >
                  Inquire Service &gt;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Consultation Section */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-[5%] max-w-[900px] text-center">
          <div className="glass-panel p-10 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold text-white uppercase mb-3">
              Need a Custom Solution Package?
            </h3>
            <p className="text-gray-400 text-sm mb-6 max-w-[600px] mx-auto font-sans">
              We create custom hybrid service packages combining software development, managed cloud ops, and ongoing technical advisory.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-tech-blue to-tech-indigo rounded-xl shadow-tech"
            >
              Schedule Solution Scope
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
