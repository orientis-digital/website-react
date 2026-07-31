import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    topic: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.full_name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ full_name: '', email: '', topic: '', message: '' });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-tech-gray/80 p-8 rounded-2xl border border-impeccable-amber/30 text-center glass-panel">
        <div className="text-4xl text-impeccable-amber mb-4 drop-shadow-[0_0_15px_rgba(204,136,0,0.4)]">
          <i className="fa-regular fa-paper-plane"></i>
        </div>
        <h3 className="text-xl font-bold font-display mb-3 text-white uppercase">Message Received</h3>
        <p className="text-gray-300 text-xs mb-6 font-sans">
          Thank you, <span className="text-impeccable-amber font-semibold">{formData.full_name}</span>. We will get back to you shortly.
        </p>
        <button
          onClick={handleReset}
          className="px-6 py-2.5 font-bold font-display uppercase tracking-wider text-xs rounded-xl bg-transparent text-white border border-white/20 hover:border-impeccable-amber hover:bg-impeccable-amber/10 transition-all"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-impeccable-amber text-xs font-mono font-bold uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full bg-tech-black/60 border border-white/10 rounded-xl p-3 text-white placeholder-gray-600 focus:outline-none focus:border-impeccable-amber font-sans text-xs"
          />
        </div>

        <div>
          <label className="block text-impeccable-amber text-xs font-mono font-bold uppercase tracking-wider mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="w-full bg-tech-black/60 border border-white/10 rounded-xl p-3 text-white placeholder-gray-600 focus:outline-none focus:border-impeccable-amber font-sans text-xs"
          />
        </div>
      </div>

      <div>
        <label className="block text-impeccable-amber text-xs font-mono font-bold uppercase tracking-wider mb-1.5">
          Subject / Project Topic *
        </label>
        <input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          placeholder="e.g. Custom Software Engineering"
          required
          className="w-full bg-tech-black/60 border border-white/10 rounded-xl p-3 text-white placeholder-gray-600 focus:outline-none focus:border-impeccable-amber font-sans text-xs"
        />
      </div>

      <div>
        <label className="block text-impeccable-amber text-xs font-mono font-bold uppercase tracking-wider mb-1.5">
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your project goals or IT requirements..."
          required
          className="w-full bg-tech-black/60 border border-white/10 rounded-xl p-3 text-white placeholder-gray-600 focus:outline-none focus:border-impeccable-amber font-sans min-h-[100px] resize-none text-xs leading-relaxed"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-impeccable-amber via-amber-500 to-impeccable-orange text-white border-0 shadow-impeccable hover:shadow-[0_0_25px_rgba(204,136,0,0.5)] hover:-translate-y-0.5 transition-all px-8 py-3.5 w-full rounded-xl text-xs font-bold font-display uppercase tracking-widest mt-2 cursor-pointer flex items-center justify-center gap-2"
      >
        <span>Send Message</span>
        <i className="fa-solid fa-paper-plane text-[10px]"></i>
      </button>
    </form>
  );
}

