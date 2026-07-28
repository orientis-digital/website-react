import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [joinedWaitlist, setJoinedWaitlist] = useState(false);

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (waitlistEmail && waitlistEmail.includes('@')) {
      setJoinedWaitlist(true);
    }
  };

  return (
    <main className="flex-1 pt-28 pb-24 min-h-[85vh] flex flex-col justify-center">
      {/* Hero / Coming Soon Section */}
      <section className="relative overflow-hidden pt-12 pb-20">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[500px] bg-tech-indigo/15 -translate-x-1/2 -translate-y-1/2 blur-[140px] pointer-events-none -z-10 animate-pulse"></div>

        <div className="container mx-auto px-[5%] max-w-[1000px] text-center fade-up">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-tech-indigo/40 bg-tech-indigo/10 text-tech-sky text-xs font-mono uppercase tracking-widest mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-sky opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tech-sky"></span>
            </span>
            Software Products // Will Be Posted Soon
          </div>

          {/* Main Title */}
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold tracking-tight text-white uppercase leading-[1.08] mb-6">
            Orientis Software Suite <br />
            <span className="bg-gradient-to-r from-tech-sky via-cyan-400 to-tech-indigo bg-clip-text text-transparent">
              Will Be Posted Soon
            </span>
          </h1>

          <p className="max-w-[700px] mx-auto text-gray-300 text-base md:text-lg leading-relaxed font-sans mb-12">
            Our team is currently preparing our suite of BIR-compliant SaaS software products. Detailed product specifications, feature modules, and subscription tiers will be posted soon.
          </p>

          {/* Early Access Waitlist Box */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 max-w-[620px] mx-auto shadow-2xl relative mb-16">
            <h3 className="text-xl font-bold text-white uppercase mb-2">
              Be The First To Know
            </h3>
            <p className="text-xs text-gray-400 font-sans mb-6">
              Subscribe to get notified as soon as our products are officially posted and available for live preview.
            </p>

            {joinedWaitlist ? (
              <div className="p-4 rounded-xl bg-tech-indigo/20 border border-tech-indigo/40 text-tech-sky font-medium text-xs font-mono">
                <i className="fa-solid fa-circle-check text-tech-sky mr-2"></i>
                You are on the waitlist! We will notify you once products are posted.
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="flex gap-3 flex-col sm:flex-row">
                <input
                  type="email"
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  placeholder="enter your email address"
                  required
                  className="flex-1 p-4 rounded-xl bg-tech-black/90 border border-white/15 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-tech-sky font-mono"
                />
                <button
                  type="submit"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-tech-blue to-tech-indigo text-white font-bold text-xs uppercase tracking-wider hover:shadow-tech cursor-pointer whitespace-nowrap transition-all"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>

          {/* Alternative Services CTA Card */}
          <div className="glass-panel p-8 rounded-2xl border border-white/10 max-w-[720px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div>
              <h4 className="text-base font-bold text-white uppercase mb-1">
                Need Custom IT Solutions Today?
              </h4>
              <p className="text-xs text-gray-400 font-sans">
                Our engineering team is actively accepting custom web apps, mobile solutions, and IT consultancy projects.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-transparent border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 hover:border-tech-sky whitespace-nowrap transition-all"
            >
              Contact Engineering &gt;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
