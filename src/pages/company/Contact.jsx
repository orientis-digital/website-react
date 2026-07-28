import React from 'react';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <main className="min-h-screen bg-tech-black flex items-center justify-center pt-32 pb-24 relative overflow-hidden flex-1">
      {/* Subtle Glow at bottom */}
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
              &gt; Ready to transform your digital infrastructure?
            </p>

            <ContactForm />
          </div>

          {/* Right Column: Features Card */}
          <div className="glass-panel p-6 md:p-10 rounded-3xl hover:border-tech-blue/30 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] transition-all duration-300 relative flex flex-col justify-center gap-6 mt-10 lg:mt-0 group fade-in-right">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tech-blue to-transparent opacity-30"></div>

            <h2 className="text-xl font-bold text-white border-l-4 border-tech-blue pl-4 mb-2 uppercase tracking-wide">
              Orientis Digital Expertise
            </h2>

            {/* Feature 1 */}
            <div className="bg-tech-black/40 border border-white/5 p-6 relative overflow-hidden group/item hover:border-tech-blue/30 hover:bg-tech-black/60 transition-all duration-300 rounded-xl">
              <div className="absolute top-0 left-0 w-1 h-full bg-white/10 group-hover/item:bg-tech-blue transition-colors"></div>
              <div className="flex items-center gap-4 mb-3 text-white">
                <i className="fa-solid fa-code-merge text-[1.2rem] text-tech-blue transition-colors"></i>
                <h3 className="font-bold text-base uppercase tracking-wider text-gray-200">
                  Digital Transformation
                </h3>
              </div>
              <p className="text-gray-400 text-sm font-sans leading-relaxed pl-9">
                &gt; Tailored technology programs engineered for your specific business goals and operational needs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-tech-black/40 border border-white/5 p-6 relative overflow-hidden group/item hover:border-tech-blue/30 hover:bg-tech-black/60 transition-all duration-300 rounded-xl">
              <div className="absolute top-0 left-0 w-1 h-full bg-white/10 group-hover/item:bg-tech-blue transition-colors"></div>
              <div className="flex items-center gap-4 mb-3 text-white">
                <i className="fa-solid fa-terminal text-[1.2rem] text-tech-blue transition-colors"></i>
                <h3 className="font-bold text-base uppercase tracking-wider text-gray-200">
                  Custom Development
                </h3>
              </div>
              <p className="text-gray-400 text-sm font-sans leading-relaxed pl-9">
                &gt; Advanced software engineering methodologies executed by experienced full-stack developers.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-tech-black/40 border border-white/5 p-6 relative overflow-hidden group/item hover:border-tech-blue/30 hover:bg-tech-black/60 transition-all duration-300 rounded-xl">
              <div className="absolute top-0 left-0 w-1 h-full bg-white/10 group-hover/item:bg-tech-blue transition-colors"></div>
              <div className="flex items-center gap-4 mb-3 text-white">
                <i className="fa-solid fa-shield-halved text-[1.2rem] text-tech-blue transition-colors"></i>
                <h3 className="font-bold text-base uppercase tracking-wider text-gray-200">
                  Cloud Operations
                </h3>
              </div>
              <p className="text-gray-400 text-sm font-sans leading-relaxed pl-9">
                &gt; Persistent 24/7 system monitoring, performance optimization, and rapid scale management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
