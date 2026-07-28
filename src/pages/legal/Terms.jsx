import React from 'react';

export default function Terms() {
  return (
    <main className="flex-1">
      <section className="min-h-[80vh] pt-32 pb-20 relative overflow-hidden bg-tech-black">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tech-blue/5 rounded-full blur-[100px] -z-10"></div>

        <div className="container mx-auto px-[5%] max-w-[900px] fade-up">
          <div className="mb-12 border-b border-tech-blue/30 pb-8">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight leading-[1.1] mb-6 text-white">
              Terms of <span className="text-tech-blue">Service</span>
            </h1>
            <p className="text-gray-500 text-sm font-sans">
              &gt; Last Updated: <span className="text-tech-blue">Jan 25, 2026</span>
            </p>
          </div>

          <div className="space-y-12 text-gray-400">
            <section className="border-l-2 border-gray-800 pl-6 hover:border-tech-blue transition-colors py-2">
              <h3 className="text-xl font-bold mb-4 text-white hover:text-tech-blue transition-colors">
                &gt; 1. Agreement
              </h3>
              <p className="text-[0.95rem] leading-relaxed">
                By using Orientis Digital: Unified Tech Solutions services, you agree to these terms. These terms constitute a legally binding agreement between you and Orientis Digital: Unified Tech Solutions. Please read them carefully before accessing or using our services.
              </p>
            </section>

            <section className="border-l-2 border-gray-800 pl-6 hover:border-tech-blue transition-colors py-2">
              <h3 className="text-xl font-bold mb-4 text-white hover:text-tech-blue transition-colors">
                &gt; 2. Service Availability
              </h3>
              <p className="text-[0.95rem] leading-relaxed">
                We strive for 99.9% uptime on all managed services but do not guarantee uninterrupted access in force majeure events, scheduled maintenance, or unforeseen technical issues beyond our reasonable control.
              </p>
            </section>

            <section className="border-l-2 border-gray-800 pl-6 hover:border-tech-blue transition-colors py-2">
              <h3 className="text-xl font-bold mb-4 text-white hover:text-tech-blue transition-colors">
                &gt; 3. Limitation of Liability
              </h3>
              <p className="text-[0.95rem] leading-relaxed">
                Orientis Digital: Unified Tech Solutions is not liable for indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
