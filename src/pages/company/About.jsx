import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const teamMembers = [
  {
    name: 'Daemian Tingson',
    role: 'Founder',
    badge: 'Founder & Leadership',
    initials: 'DT',
    icon: 'fa-solid fa-user-tie',
    bio: 'Founder leading strategic vision, executive direction, and digital transformation initiatives across Eastern Visayas.',
    skills: ['Digital Strategy', 'Executive Leadership', 'Business Development'],
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'mailto:daemian@orientisdigital.com',
    },
  },
  {
    name: 'Joseph Degorio',
    role: 'Co-Founder',
    badge: 'Co-Founder & Operations',
    initials: 'JD',
    icon: 'fa-solid fa-user-gear',
    bio: 'Co-Founder driving operational excellence, strategic partnerships, and regional growth.',
    skills: ['Business Operations', 'Strategic Partnerships', 'Product Management'],
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'mailto:joseph@orientisdigital.com',
    },
  },
  {
    name: 'Sean Lloyd Harold Raquel',
    role: 'IT Consultant / Developer',
    badge: 'IT Consulting & Engineering',
    initials: 'SLHR',
    icon: 'fa-solid fa-laptop-code',
    bio: 'IT Consultant and Full-Stack Developer specializing in custom software solutions, system architecture, and cloud engineering.',
    skills: ['Full-Stack Dev', 'System Architecture', 'Cloud Engineering'],
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'mailto:sean@orientisdigital.com',
    },
  },
  {
    name: 'Clarence Yao',
    role: 'IT Consultant / Developer',
    badge: 'IT Consulting & Development',
    initials: 'CY',
    icon: 'fa-solid fa-code',
    bio: 'IT Consultant and Developer specializing in custom software solutions, enterprise system integration, and IT infrastructure.',
    skills: ['IT Consulting', 'Software Engineering', 'System Integration'],
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'mailto:clarence@orientisdigital.com',
    },
  },
];

export default function About() {
  return (
    <main className="flex-1 pt-28 pb-24">
      <SEO
        title="About Orientis Digital | Tacloban IT Partner"
        description="Learn about Orientis Digital, Tacloban's premier technology company delivering custom web software, enterprise SaaS solutions, and managed IT services in Eastern Visayas."
      />
      {/* Hero Header Section */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-white/5">
        <div className="absolute top-1/3 left-1/2 w-[700px] h-[500px] bg-tech-blue/10 -translate-x-1/2 -translate-y-1/2 blur-[140px] pointer-events-none -z-10"></div>

        <div className="container mx-auto px-[5%] max-w-[1100px] text-center fade-up">

          <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold tracking-tight text-white uppercase leading-tight mb-6">
            Digital Transformation, <br />
            <span className="bg-gradient-to-r from-tech-sky via-cyan-400 to-tech-indigo bg-clip-text text-transparent">
              Locally Delivered.
            </span>
          </h1>

          <p className="max-w-[780px] mx-auto text-gray-300 text-base md:text-lg leading-relaxed font-sans mb-10">
            Orientis Digital is Tacloban's full-service technology company. We empower micro, small, and medium enterprises (MSMEs), government agencies, and enterprises in Eastern Visayas with custom web &amp; mobile software, enterprise software tools, and managed IT services.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-tech-blue to-tech-indigo text-white font-bold text-xs uppercase tracking-wider shadow-tech hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all"
            >
              Talk to Our Team
            </Link>
            <Link
              to="/solutions"
              className="px-8 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white font-bold text-xs uppercase tracking-wider hover:border-tech-sky transition-all"
            >
              Our Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="py-20 bg-tech-black/40">
        <div className="container mx-auto px-[5%] max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Vision */}
            <div className="glass-panel p-10 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-tech-sky/40 transition-all">
              <span className="text-xs font-mono uppercase text-tech-sky tracking-widest block mb-3">
                // Company Vision
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase mb-4 group-hover:text-tech-sky transition-colors">
                Empowering Eastern Visayas
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-sans">
                "To be the leading digital transformation partner in Eastern Visayas, empowering local businesses and public organizations through innovative technology solutions that drive growth, efficiency, and global competitiveness."
              </p>
            </div>

            {/* Mission */}
            <div className="glass-panel p-10 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-tech-indigo/40 transition-all">
              <span className="text-xs font-mono uppercase text-tech-indigo tracking-widest block mb-3">
                // Company Mission
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase mb-4 group-hover:text-tech-indigo transition-colors">
                Solving Real Business Challenges
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-sans">
                "Orientis Digital delivers custom web applications, mobile solutions, enterprise SaaS software tools, and managed IT services. We combine technical excellence with deep regional market understanding to help local businesses thrive."
              </p>
            </div>
          </div>

          {/* Mission Pillars (4-Grid) */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="text-tech-sky text-xs font-mono font-bold uppercase tracking-widest block mb-2">
                // Mission Pillars
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase">
                Foundations of Our Commitment
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-sky/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-tech-blue/10 border border-tech-blue/20 flex items-center justify-center text-tech-sky text-xl mb-4">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Innovation</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Building modern, scalable software solutions using cutting-edge development stacks and cloud architecture.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-indigo/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-tech-indigo/10 border border-tech-indigo/20 flex items-center justify-center text-tech-indigo text-xl mb-4">
                  <i className="fa-solid fa-hand-holding-dollar"></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Accessibility</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Making enterprise-grade technology affordable for local MSMEs without Manila-level price markups.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-xl mb-4">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Reliability</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Providing SLA-backed technical support and same-day maintenance for mission-critical business systems.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-sky/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-tech-sky/10 border border-tech-sky/20 flex items-center justify-center text-tech-sky text-xl mb-4">
                  <i className="fa-solid fa-people-group"></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Partnership</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Working closely alongside our clients as a trusted technology advisor, not just a software vendor.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="text-tech-indigo text-xs font-mono font-bold uppercase tracking-widest block mb-2">
                // How We Operate
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase">
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-sky/40 transition-all">
                <h3 className="text-base font-bold text-white mb-2 text-tech-sky uppercase">Integrity</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Transparent pricing, honest project timelines, and no hidden fees.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-indigo/40 transition-all">
                <h3 className="text-base font-bold text-white mb-2 text-tech-indigo uppercase">Excellence</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Rigorous automated testing, clean software architecture, and complete documentation.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all">
                <h3 className="text-base font-bold text-white mb-2 text-cyan-400 uppercase">Filipino Ingenuity</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Solving complex problems with resourcefulness for maximum budget efficiency.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-sky/40 transition-all">
                <h3 className="text-base font-bold text-white mb-2 text-tech-sky uppercase">Client Success</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Focusing on measurable business growth rather than just delivering code.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-indigo/40 transition-all">
                <h3 className="text-base font-bold text-white mb-2 text-tech-indigo uppercase">Continuous Learning</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Constantly staying updated with software development and AI advancements.
                </p>
              </div>
            </div>
          </div>

          {/* Differentiators Grid */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="text-tech-sky text-xs font-mono font-bold uppercase tracking-widest block mb-2">
                // Unique Selling Proposition
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase">
                Why Businesses Choose Orientis Digital
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel p-8 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-tech-blue/10 border border-tech-blue/20 flex items-center justify-center text-tech-sky shrink-0 mt-1">
                  <i className="fa-solid fa-house-laptop"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Local Presence in Tacloban</h4>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    Based locally in Tacloban City, Leyte. We conduct face-to-face meetings, understand local business culture, and provide rapid same-day support.
                  </p>
                </div>
              </div>

              <div className="glass-panel p-8 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-tech-indigo/10 border border-tech-indigo/20 flex items-center justify-center text-tech-indigo shrink-0 mt-1">
                  <i className="fa-solid fa-cubes"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Full-Stack Capability</h4>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    End-to-end design, frontend/backend engineering, mobile development, cloud DevOps, and managed IT support—all handled seamlessly under one roof.
                  </p>
                </div>
              </div>

              <div className="glass-panel p-8 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
                  <i className="fa-solid fa-calculator"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">MSME-Focused Pricing</h4>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    Flexible subscription models and affordable project milestones designed specifically for growing local businesses without Manila-level price premiums.
                  </p>
                </div>
              </div>

              <div className="glass-panel p-8 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-tech-sky/10 border border-tech-sky/20 flex items-center justify-center text-tech-sky shrink-0 mt-1">
                  <i className="fa-solid fa-[#2496ED] fa-building-columns"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Regional Statutory & Business Expertise</h4>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    Deep understanding of Philippine statutory regulations (tax & statutory contribution rules) and LGU government processes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Meet the Team Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="text-tech-sky text-xs font-mono font-bold uppercase tracking-widest block mb-2">
                // The People Behind The Technology
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase mb-4">
                Meet the Team
              </h2>
              <p className="max-w-2xl mx-auto text-gray-300 text-sm md:text-base font-sans leading-relaxed">
                Our team of passionate engineers, designers, and IT strategists in Tacloban City are dedicated to delivering world-class digital solutions for Eastern Visayas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-tech-sky/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Member Image / Portrait Placeholder */}
                    <div className="relative mb-5 overflow-hidden rounded-xl aspect-square border border-dashed border-white/20 bg-gradient-to-br from-tech-slate/70 via-tech-black/90 to-tech-gray/80 flex flex-col items-center justify-center text-center p-4 group-hover:border-tech-sky/50 transition-all">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <>
                          <div className="w-16 h-16 rounded-2xl bg-tech-blue/10 border border-tech-blue/30 flex items-center justify-center text-tech-sky text-2xl mb-2 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
                            <i className={member.icon || 'fa-solid fa-user'}></i>
                          </div>
                          <span className="text-[11px] font-mono font-bold text-white tracking-widest uppercase mb-0.5">
                            {member.initials}
                          </span>
                          <span className="text-[9px] font-mono text-tech-sky/70 uppercase tracking-wider">
                            Portrait Placeholder
                          </span>
                        </>
                      )}
                      <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-tech-black/80 backdrop-blur-md border border-white/10 text-tech-sky text-[10px] font-mono font-semibold uppercase tracking-wider">
                        {member.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-white group-hover:text-tech-sky transition-colors mb-0.5">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-tech-indigo mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>

                  <div>
                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                        Connect
                      </span>
                      <div className="flex items-center gap-3">
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} LinkedIn`}
                          className="text-gray-400 hover:text-tech-sky text-sm transition-colors"
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} GitHub`}
                          className="text-gray-400 hover:text-tech-sky text-sm transition-colors"
                        >
                          <i className="fa-brands fa-github"></i>
                        </a>
                        <a
                          href={member.social.email}
                          aria-label={`Email ${member.name}`}
                          className="text-gray-400 hover:text-tech-indigo text-sm transition-colors"
                        >
                          <i className="fa-solid fa-envelope"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Manifesto Banner */}
          <div className="glass-panel p-10 md:p-14 rounded-3xl border border-white/10 relative text-center shadow-2xl bg-gradient-to-r from-tech-gray/60 via-tech-black/90 to-tech-gray/60">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-tech-blue/10 text-tech-sky border border-tech-blue/20 mb-6 uppercase tracking-widest font-mono">
              🇵🇭 Gawa sa Tacloban, Para sa Pilipinas
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-white uppercase">
              Building Digital Futures, One Business at a Time
            </h2>

            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-sans mb-8">
              Whether you are an MSME looking to automate operations, a government agency upgrading digital portals, or an enterprise scaling software infrastructure—Orientis Digital is your dedicated tech partner.
            </p>

            <Link
              to="/contact"
              className="inline-block px-10 py-4 font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-tech-blue to-tech-indigo rounded-xl shadow-tech hover:opacity-90 transition-all"
            >
              Start Your Project With Us &gt;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
