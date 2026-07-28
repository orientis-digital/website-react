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
      <div className="bg-tech-gray/80 p-10 rounded-2xl border border-tech-indigo/30 text-center glass-panel">
        <div className="text-5xl text-tech-indigo mb-6 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">
          <i className="fa-regular fa-paper-plane"></i>
        </div>
        <h3 className="text-2xl font-extrabold mb-4 text-white">Message Received</h3>
        <p className="text-muted mb-6">
          Thank you, <span className="text-tech-sky font-semibold">{formData.full_name}</span>. We'll get back to you shortly.
        </p>
        <button
          onClick={handleReset}
          className="px-8 py-3 font-semibold rounded-full transition-all duration-200 text-sm bg-transparent text-tech-sky border border-tech-sky/40 hover:border-tech-sky hover:bg-tech-sky/10"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-tech-sky text-xs font-bold uppercase tracking-wider mb-2">
          &gt; Name
        </label>
        <input
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          placeholder="John Doe"
          required
          className="w-full bg-tech-black/40 border border-white/10 rounded-xl p-3.5 md:p-4 text-white placeholder-gray-600 focus:outline-none focus:border-tech-blue focus:ring-1 focus:ring-tech-blue/30 transition-all font-sans text-sm"
        />
      </div>

      <div>
        <label className="block text-tech-sky text-xs font-bold uppercase tracking-wider mb-2">
          &gt; Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
          className="w-full bg-tech-black/40 border border-white/10 rounded-xl p-3.5 md:p-4 text-white placeholder-gray-600 focus:outline-none focus:border-tech-blue focus:ring-1 focus:ring-tech-blue/30 transition-all font-sans text-sm"
        />
      </div>

      <div>
        <label className="block text-tech-sky text-xs font-bold uppercase tracking-wider mb-2">
          &gt; Subject
        </label>
        <input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          placeholder="e.g. Project Inquiry"
          required
          className="w-full bg-tech-black/40 border border-white/10 rounded-xl p-3.5 md:p-4 text-white placeholder-gray-600 focus:outline-none focus:border-tech-blue focus:ring-1 focus:ring-tech-blue/30 transition-all font-sans text-sm"
        />
      </div>

      <div>
        <label className="block text-tech-sky text-xs font-bold uppercase tracking-wider mb-2">
          &gt; Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          required
          className="w-full bg-tech-black/40 border border-white/10 rounded-xl p-3.5 md:p-4 text-white placeholder-gray-600 focus:outline-none focus:border-tech-blue focus:ring-1 focus:ring-tech-blue/30 transition-all font-sans min-h-[140px] resize-none text-sm"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-tech-blue to-tech-indigo text-white border-0 hover:shadow-tech hover:opacity-90 transition-all px-8 py-3 w-full rounded-xl text-sm font-bold uppercase tracking-widest mt-4 cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
}
