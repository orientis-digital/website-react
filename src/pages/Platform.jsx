import React from 'react';
import { Link } from 'react-router-dom';

export default function Platform() {
  return (
    <main className="pt-[80px] flex-1">
      <section id="services" className="py-24 bg-tech-gray/30 border-t border-tech-slate/20 min-h-screen">
        <div className="container mx-auto px-[5%] max-w-[1400px]">
          <div className="mb-20 fade-up">
            <h2 className="text-3xl font-bold text-white mb-4 border-l-4 border-tech-indigo pl-4">
              Our <br />
              Solutions
            </h2>
            <p className="text-[0.95rem] text-muted max-w-[700px] leading-relaxed">
              &gt; Comprehensive digital transformation and innovation strategies for modern enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* 1. Custom Software */}
            <Link
              to="/solutions/custom-software"
              className="glass-panel glass-panel-hover p-8 flex flex-col h-full relative group rounded-2xl fade-up"
            >
              <div className="text-3xl text-muted mb-6 group-hover:text-tech-sky transition-colors">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-tech-sky transition-colors">
                Custom Software
              </h3>
              <ul className="list-none mt-auto text-left space-y-4">
                <li className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <strong className="block text-white mb-1 text-[0.95rem] font-mono">&gt; Modern Design</strong>
                  <p className="text-xs leading-[1.5] text-muted">
                    Mobile-responsive websites built with modern UI/UX principles.
                  </p>
                </li>
                <li className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <strong className="block text-white mb-1 text-[0.95rem] font-mono">&gt; Performance</strong>
                  <p className="text-xs leading-[1.5] text-muted">
                    Optimized delivery for maximum speed and SEO efficiency.
                  </p>
                </li>
                <li className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <strong className="block text-white mb-1 text-[0.95rem] font-mono">&gt; Scalable Apps</strong>
                  <p className="text-xs leading-[1.5] text-muted">
                    Custom e-commerce platforms and complex business tools.
                  </p>
                </li>
              </ul>
            </Link>

            {/* 2. Cloud Ops */}
            <Link
              to="/solutions/cloud-ops"
              className="glass-panel p-8 flex flex-col h-full relative group rounded-2xl hover:bg-tech-gray/65 hover:border-tech-indigo/30 hover:shadow-[0_10px_30px_-10px_rgba(249,115,22,0.15)] hover:-translate-y-1 transition-all duration-300 fade-up"
            >
              <div className="text-3xl text-muted mb-6 group-hover:text-tech-indigo transition-colors">
                <i className="fa-solid fa-cloud"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-tech-indigo transition-colors">
                Cloud Ops
              </h3>
              <ul className="list-none mt-auto text-left space-y-4">
                <li className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <strong className="block text-white mb-1 text-[0.95rem] font-mono">&gt; Managed Hosting</strong>
                  <p className="text-xs leading-[1.5] text-muted">
                    Reliable infrastructure management for 99.9% uptime.
                  </p>
                </li>
                <li className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <strong className="block text-white mb-1 text-[0.95rem] font-mono">&gt; Cloud Migration</strong>
                  <p className="text-xs leading-[1.5] text-muted">
                    Seamless transition of legacy systems to the cloud.
                  </p>
                </li>
                <li className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <strong className="block text-white mb-1 text-[0.95rem] font-mono">&gt; DevOps Automation</strong>
                  <p className="text-xs leading-[1.5] text-muted">
                    CI/CD pipelines for rapid and safe deployments.
                  </p>
                </li>
              </ul>
            </Link>

            {/* 3. Consulting */}
            <Link
              to="/solutions/tech-consulting"
              className="glass-panel glass-panel-hover p-8 flex flex-col h-full relative group rounded-2xl fade-up"
            >
              <div className="text-3xl text-muted mb-6 group-hover:text-tech-sky transition-colors">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-tech-sky transition-colors">
                Consulting
              </h3>
              <ul className="list-none mt-auto text-left space-y-4">
                <li className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <strong className="block text-white mb-1 text-[0.95rem] font-mono">&gt; Digital Transformation</strong>
                  <p className="text-xs leading-[1.5] text-muted">
                    Modernizing processes with cutting-edge tech solutions.
                  </p>
                </li>
                <li className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <strong className="block text-white mb-1 text-[0.95rem] font-mono">&gt; Strategy & Audit</strong>
                  <p className="text-xs leading-[1.5] text-muted">
                    Comprehensive audits of your current technology stack.
                  </p>
                </li>
                <li className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <strong className="block text-white mb-1 text-[0.95rem] font-mono">&gt; Resource Planning</strong>
                  <p className="text-xs leading-[1.5] text-muted">
                    Helping you choose the right tools for your business goals.
                  </p>
                </li>
              </ul>
            </Link>

            {/* 4. Support */}
            <div className="glass-panel p-8 flex flex-col h-full relative group rounded-2xl hover:bg-tech-gray/65 hover:border-tech-indigo/30 hover:shadow-[0_10px_30px_-10px_rgba(249,115,22,0.15)] hover:-translate-y-1 transition-all duration-300 fade-up">
              <div className="text-3xl text-muted mb-6 group-hover:text-tech-indigo transition-colors">
                <i className="fa-solid fa-life-ring"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-tech-indigo transition-colors">
                Support & Maintenance
              </h3>
              <ul className="list-none mt-auto text-left space-y-4">
                <li className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <strong className="block text-white mb-1 text-[0.95rem] font-mono">&gt; Maintenance</strong>
                  <p className="text-xs leading-[1.5] text-muted">
                    Regular updates, SSL management, and security patches.
                  </p>
                </li>
                <li className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <strong className="block text-white mb-1 text-[0.95rem] font-mono">&gt; 24/7 Monitoring</strong>
                  <p className="text-xs leading-[1.5] text-muted">
                    Proactive system monitoring to ensure stability.
                  </p>
                </li>
                <li className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <strong className="block text-white mb-1 text-[0.95rem] font-mono">&gt; Backup Solutions</strong>
                  <p className="text-xs leading-[1.5] text-muted">
                    Automated daily backups for all critical business data.
                  </p>
                </li>
              </ul>
            </div>

            {/* 5. IoT & Embedded */}
            <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full relative group rounded-2xl fade-up">
              <div className="text-3xl text-muted mb-6 group-hover:text-tech-sky transition-colors">
                <i className="fa-solid fa-microchip"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-tech-sky transition-colors">
                IoT & Embedded
              </h3>
              <ul className="list-none mt-auto text-left space-y-4">
                <li className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <strong className="block text-white mb-1 text-[0.95rem] font-mono">&gt; Firmware Development</strong>
                  <p className="text-xs leading-[1.5] text-muted">
                    High-performance, low-level software custom-tailored for hardware platforms.
                  </p>
                </li>
                <li className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <strong className="block text-white mb-1 text-[0.95rem] font-mono">&gt; Hardware Integration</strong>
                  <p className="text-xs leading-[1.5] text-muted">
                    Connecting physical sensors, custom controllers, and IoT gateways.
                  </p>
                </li>
                <li className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <strong className="block text-white mb-1 text-[0.95rem] font-mono">&gt; Edge Computing</strong>
                  <p className="text-xs leading-[1.5] text-muted">
                    Deploying lightweight processing and analytics on physical devices.
                  </p>
                </li>
              </ul>
            </div>

            {/* 6. Custom Projects */}
            <Link
              to="/company/contact"
              className="glass-panel p-8 flex flex-col h-full border border-white/15 border-dashed hover:border-tech-indigo/50 hover:bg-tech-black/40 hover:-translate-y-1 transition-all duration-300 relative group flex flex-col items-center justify-center text-center rounded-2xl fade-up"
            >
              <div className="text-3xl text-muted mb-4 group-hover:text-tech-indigo transition-colors">
                <i className="fa-solid fa-plus"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-tech-indigo transition-colors">
                Custom Requirements?
              </h3>
              <p className="text-xs text-muted mb-4">
                Need a tailored engineering solution? Let's discuss your custom architecture.
              </p>
              <span className="text-xs text-tech-indigo font-bold uppercase tracking-wider group-hover:underline">
                Contact Engineering &gt;
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
