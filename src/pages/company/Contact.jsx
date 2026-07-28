import React from 'react';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <main className="min-h-screen bg-tech-black flex items-center justify-center pt-32 pb-24 relative overflow-hidden flex-1">
      {/* Glow Backdrop */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[250px] bg-tech-blue/10 rounded-[100%] blur-[100px] z-0 pointer-events-none"></div>

      {/* Grid Pattern */}
      <div
        className="absolute top-0 right-0 w-[50vw] h-[80vh] opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #06b6d4 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(circle at top right, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at top right, black, transparent 80%)'
        }}
      ></div>

      <div className="container mx-auto px-[5%] max-w-[1200px] z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-stretch">
          {/* Left Column: Form */}
          <div className="flex flex-col justify-center fade-in-left">
            <h1 className="text-white text-[2.5rem] md:text-[3.2rem] font-bold tracking-tight leading-tight mb-3 uppercase">
              Get In <br />{' '}
              <span className="bg-gradient-to-r from-tech-sky to-tech-indigo bg-clip-text text-transparent border-b-2 border-tech-indigo">
                Touch
              </span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base font-sans mb-10">
              &gt; Ready to discuss custom web apps, mobile solutions, or IT consultancy?
            </p>

            <ContactForm />
          </div>

          {/* Right Column: HQ & Official Channels */}
          <div className="glass-panel p-6 md:p-10 rounded-3xl hover:border-tech-blue/30 transition-all duration-300 relative flex flex-col justify-center gap-6 mt-10 lg:mt-0 group fade-in-right">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tech-blue to-transparent opacity-30"></div>

            <h2 className="text-xl font-bold text-white border-l-4 border-tech-blue pl-4 mb-2 uppercase tracking-wide">
              Orientis Digital Channels
            </h2>

            {/* HQ Info */}
            <div className="bg-tech-black/40 border border-white/5 p-6 rounded-xl space-y-4 font-sans text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-location-dot text-tech-sky text-lg"></i>
                <div>
                  <span className="block font-bold text-white uppercase text-xs">Headquarters</span>
                  <span className="text-xs text-gray-400">Tacloban City, Leyte, Philippines</span>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                <i className="fa-solid fa-envelope text-tech-sky text-lg"></i>
                <div>
                  <span className="block font-bold text-white uppercase text-xs">Official Email</span>
                  <a
                    href="mailto:orientisdigital.official@gmail.com"
                    className="text-xs text-tech-sky hover:underline"
                  >
                    orientisdigital.official@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                <i className="fa-brands fa-facebook text-[#1877F2] text-lg"></i>
                <div>
                  <span className="block font-bold text-white uppercase text-xs">Official Facebook</span>
                  <a
                    href="https://facebook.com/orientis-digital"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-tech-sky hover:underline"
                  >
                    facebook.com/orientis-digital
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                <i className="fa-brands fa-github text-white text-lg"></i>
                <div>
                  <span className="block font-bold text-white uppercase text-xs">GitHub Organization</span>
                  <a
                    href="https://github.com/orientis-digital"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-tech-sky hover:underline"
                  >
                    github.com/orientis-digital
                  </a>
                </div>
              </div>
            </div>

            {/* Service Pillars */}
            <div className="bg-tech-black/40 border border-white/5 p-6 relative overflow-hidden group/item hover:border-tech-blue/30 transition-all duration-300 rounded-xl">
              <div className="flex items-center gap-4 mb-2 text-white">
                <i className="fa-solid fa-code text-[1.2rem] text-tech-blue"></i>
                <h3 className="font-bold text-sm uppercase tracking-wider text-gray-200">
                  Custom Software Engineering
                </h3>
              </div>
              <p className="text-gray-400 text-xs font-sans leading-relaxed pl-8">
                &gt; Tailored web and mobile applications engineered for regional MSMEs, government agencies, and enterprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
