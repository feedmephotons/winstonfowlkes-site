'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const projectTypes = [
  'Visual & Brand',
  'Marketing & Growth',
  'Web & Software',
  'Consulting',
  'Full System',
  'Not Sure Yet',
];

const budgetRanges = [
  'Under $5K',
  '$5K - $15K',
  '$15K - $50K',
  '$50K+',
  'Ongoing Retainer',
  'Let\'s Discuss',
];

const timelines = [
  'ASAP',
  '1-2 Weeks',
  '1-2 Months',
  '3+ Months',
  'Flexible',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f0ff]/10 rounded-full blur-[150px]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="container mx-auto px-6 md:px-12 relative text-center"
        >
          <div className="max-w-xl mx-auto glass-card p-12">
            <div className="w-20 h-20 rounded-full bg-[#00f0ff]/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#00f0ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Message Received
            </h2>
            <p className="font-body text-gray-400 mb-8">
              Thanks for reaching out. I&apos;ll review your project details and get back to you within 24-48 hours.
            </p>
            <a
              href="/"
              className="btn-secondary inline-block"
            >
              Back to Home
            </a>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#ff00ff]/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 md:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="font-display text-sm font-medium text-[#00f0ff] uppercase tracking-wider mb-4 block">
              Start a Project
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Let&apos;s build<br />something great
            </h1>
            <p className="font-body text-xl text-gray-400 max-w-2xl leading-relaxed">
              Tell me what you&apos;re working on. I&apos;ll get back to you within 24-48 hours to discuss next steps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section relative overflow-hidden pt-8">
        <div className="container mx-auto px-6 md:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-display font-medium text-white mb-2 text-sm">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-display font-medium text-white mb-2 text-sm">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block font-display font-medium text-white mb-2 text-sm">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Your company name"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block font-display font-medium text-white mb-2 text-sm">
                    What do you need? *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-4 py-3 rounded-lg font-display text-sm transition-all duration-300 ${
                          formData.projectType === type
                            ? 'bg-[#00f0ff] text-black'
                            : 'glass-card text-gray-400 hover:text-white hover:border-white/20'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget & Timeline Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-display font-medium text-white mb-2 text-sm">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="input-field appearance-none cursor-pointer"
                    >
                      <option value="">Select budget...</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-display font-medium text-white mb-2 text-sm">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="input-field appearance-none cursor-pointer"
                    >
                      <option value="">Select timeline...</option>
                      {timelines.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block font-display font-medium text-white mb-2 text-sm">
                    Tell me about your project *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input-field resize-none"
                    placeholder="What are you trying to build? What's the problem you're solving? Any context that helps me understand your needs..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full md:w-auto text-lg px-10 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="glass-card p-6">
                <h3 className="font-display font-bold text-white mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:winston@winstonfowlkes.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-[#00f0ff] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#00f0ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="font-body text-sm">winston@winstonfowlkes.com</span>
                  </a>
                  <a
                    href="tel:239-271-8495"
                    className="flex items-center gap-3 text-gray-400 hover:text-[#00f0ff] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#00f0ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="font-body text-sm">239-271-8495</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-400">
                    <div className="w-10 h-10 rounded-lg bg-[#ff00ff]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#ff00ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="font-body text-sm">Jacksonville, FL</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-6">
                <h3 className="font-display font-bold text-white mb-4">
                  Connect
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/winstonfowlkes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass-card flex items-center justify-center text-gray-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/30 transition-all"
                  >
                    <span className="font-display font-semibold text-xs">IG</span>
                  </a>
                  <a
                    href="https://youtube.com/channel/UCVTOJiDAZvz1tCn1J1r9e0g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass-card flex items-center justify-center text-gray-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/30 transition-all"
                  >
                    <span className="font-display font-semibold text-xs">YT</span>
                  </a>
                  <a
                    href="https://facebook.com/winstonfowlkescreative"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass-card flex items-center justify-center text-gray-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/30 transition-all"
                  >
                    <span className="font-display font-semibold text-xs">FB</span>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="glass-card p-6 border-[#00f0ff]/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#00f0ff] pulse-glow" />
                  <span className="font-display font-medium text-[#00f0ff] text-sm">
                    Quick Response
                  </span>
                </div>
                <p className="font-body text-gray-400 text-sm">
                  I typically respond within 24-48 hours. For urgent matters, give me a call.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
