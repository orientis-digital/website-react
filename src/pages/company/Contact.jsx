import React from 'react';
import ContactForm from '../../components/ContactForm';
import SEO from '../../components/SEO';

export default function Contact() {
  return (
    <main className="min-h-[85vh] bg-tech-black flex items-center justify-center pt-28 pb-20 relative overflow-hidden flex-1">
      <SEO
        title="Contact Orientis Digital | Tacloban Engineering HQ"
        description="Get in touch with Orientis Digital for custom web & mobile software development, enterprise SaaS software, or managed cloud services in Tacloban, Leyte."
      />
      {/* Glow Backdrop */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[250px] bg-impeccable-amber/15 rounded-[100%] blur-[120px] z-0 pointer-events-none animate-pulse"></div>

      <div className="container mx-auto px-[5%] max-w-[1200px] z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          {/* Left Column: Form */}
          <div className="flex flex-col justify-center fade-in-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-impeccable-amber/40 bg-impeccable-amber/10 text-impeccable-amber text-xs font-mono uppercase tracking-widest mb-3 w-fit">
              <i className="fa-solid fa-headset"></i> Engineering HQ Consultation
            </span>
            <h1 className="text-white text-[2.2rem] md:text-[2.8rem] font-display font-extrabold tracking-tight leading-tight mb-2 uppercase">
              Get In <br />{' '}
              <span className="bg-gradient-to-r from-impeccable-amber via-amber-400 to-impeccable-orange bg-clip-text text-transparent border-b-2 border-impeccable-orange">
                Touch.
              </span>
            </h1>
            <p className="text-gray-300 text-xs md:text-sm font-sans mb-6 leading-relaxed">
              Ready to discuss custom web applications, mobile platforms, enterprise SaaS modules, or IT consultancy?
            </p>

            <ContactForm />
          </div>

          {/* Right Column: HQ & Official Channels */}
          <div className="glass-panel p-6 md:p-8 rounded-3xl border border-impeccable-amber/30 hover:border-impeccable-amber/50 transition-all duration-300 relative flex flex-col justify-center gap-5 mt-8 lg:mt-0 group shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-impeccable-amber to-transparent opacity-40"></div>

            <h2 className="text-lg font-bold font-display text-white border-l-4 border-impeccable-amber pl-3 mb-1 uppercase tracking-wide">
              Orientis Digital Channels
            </h2>

            {/* HQ Info */}
            <div className="bg-tech-black/60 border border-white/10 p-5 rounded-xl space-y-3.5 font-sans text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-location-dot text-impeccable-amber text-base"></i>
                <div>
                  <span className="block font-bold font-display text-white uppercase text-xs">Headquarters</span>
                  <span className="text-xs text-gray-300">Tacloban City, Leyte, Philippines</span>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-white/10 pt-3">
                <i className="fa-solid fa-envelope text-impeccable-amber text-base"></i>
                <div>
                  <span className="block font-bold font-display text-white uppercase text-xs">Official Email</span>
                  <a
                    href="mailto:orientisdigital.official@gmail.com"
                    className="text-xs text-impeccable-amber hover:underline font-mono"
                  >
                    orientisdigital.official@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-white/10 pt-3">
                <i className="fa-brands fa-facebook text-[#1877F2] text-base"></i>
                <div>
                  <span className="block font-bold font-display text-white uppercase text-xs">Official Facebook</span>
                  <a
                    href="https://facebook.com/orientis-digital"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-impeccable-amber hover:underline font-mono"
                  >
                    facebook.com/orientis-digital
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-white/10 pt-3">
                <i className="fa-brands fa-github text-white text-base"></i>
                <div>
                  <span className="block font-bold font-display text-white uppercase text-xs">GitHub Organization</span>
                  <a
                    href="https://github.com/orientis-digital"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-impeccable-amber hover:underline font-mono"
                  >
                    github.com/orientis-digital
                  </a>
                </div>
              </div>
            </div>

            {/* Service Pillars */}
            <div className="bg-tech-black/60 border border-white/10 p-5 relative overflow-hidden rounded-xl">
              <div className="flex items-center gap-2.5 mb-1.5 text-white">
                <i className="fa-solid fa-code text-sm text-impeccable-amber"></i>
                <h3 className="font-bold font-display text-xs uppercase tracking-wider text-gray-200">
                  Custom Software Engineering
                </h3>
              </div>
              <p className="text-gray-300 text-[11px] font-sans leading-relaxed pl-6">
                Tailored web and mobile applications engineered for regional MSMEs, government agencies, and enterprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


