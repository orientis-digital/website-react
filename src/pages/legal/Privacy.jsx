import React from 'react';

export default function Privacy() {
  return (
    <main className="flex-1">
      <section className="min-h-[80vh] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tech-blue/5 rounded-full blur-[100px] -z-10"></div>

        <div className="container mx-auto px-[5%] max-w-[900px] fade-up">
          <div className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
              Privacy <span className="text-tech-blue">Policy</span>
            </h1>
            <p className="text-gray-400 text-sm uppercase tracking-widest">Last Updated: Jan 25, 2026</p>
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden">
            <div className="space-y-12 text-gray-400">
              <section>
                <h3 className="text-2xl font-bold mb-4 text-white hover:text-tech-sky transition-colors">
                  1. Information Collection
                </h3>
                <p className="text-lg leading-relaxed">
                  We collect information necessary to provide our technology solutions, including basic contact details and technical logs. This may include IP addresses, device information, and usage data required for system optimization.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-4 text-white hover:text-tech-sky transition-colors">
                  2. Data Usage
                </h3>
                <p className="text-lg leading-relaxed">
                  Your data is used solely for the purpose of service delivery, platform improvement, and legal compliance. We do not sell your data. We may use aggregated, anonymized data to improve our platform efficiency.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-4 text-white hover:text-tech-sky transition-colors">
                  3. Security
                </h3>
                <p className="text-lg leading-relaxed">
                  We employ industry-standard encryption and security protocols to protect your personal information. Access to your data is strictly limited to authorized personnel with a legitimate business need.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
