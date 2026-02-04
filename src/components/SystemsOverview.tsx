'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const systems = [
  {
    id: 'visual',
    title: 'Visual & Brand',
    subtitle: 'Systems',
    description: 'Photography, video, 3D, motion graphics, and design that tells your story with precision.',
    services: ['Photography', 'Video Production', '3D & VFX', 'Graphic Design'],
    color: '#00f0ff',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="6" width="24" height="16" rx="2" />
        <circle cx="12" cy="14" r="3" />
        <path d="M28 18l-6-4-4 3-6-5-8 8" />
        <line x1="16" y1="26" x2="16" y2="22" />
        <line x1="10" y1="26" x2="22" y2="26" />
      </svg>
    ),
  },
  {
    id: 'marketing',
    title: 'Marketing & Growth',
    subtitle: 'Systems',
    description: 'Strategic campaigns, SEO, social media, and analytics that drive real business results.',
    services: ['Paid Advertising', 'SEO & Content', 'Social Media', 'Analytics'],
    color: '#ff00ff',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 24l6-6 4 4 8-10 6 6" />
        <circle cx="28" cy="8" r="3" />
        <line x1="4" y1="28" x2="28" y2="28" />
        <line x1="4" y1="4" x2="4" y2="28" />
      </svg>
    ),
  },
  {
    id: 'software',
    title: 'Web & Software',
    subtitle: 'Systems',
    description: 'High-performance websites, custom applications, and AI integration built for scale.',
    services: ['Web Development', 'Custom Software', 'AI Integration', 'Automation'],
    color: '#00f0ff',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="26" height="20" rx="2" />
        <line x1="3" y1="10" x2="29" y2="10" />
        <circle cx="6" cy="7" r="1" fill="currentColor" />
        <circle cx="9" cy="7" r="1" fill="currentColor" />
        <circle cx="12" cy="7" r="1" fill="currentColor" />
        <path d="M10 16l-3 3 3 3" />
        <path d="M22 16l3 3-3 3" />
        <line x1="14" y1="22" x2="18" y2="14" />
        <line x1="9" y1="28" x2="23" y2="28" />
      </svg>
    ),
  },
  {
    id: 'consulting',
    title: 'Consulting &',
    subtitle: 'Advisory',
    description: 'Strategic guidance for businesses ready to scale with modern tools and approaches.',
    services: ['Strategy', 'Tech Architecture', 'AI Guidance', 'Fractional Support'],
    color: '#ff00ff',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="10" r="6" />
        <path d="M6 28c0-6 4-10 10-10s10 4 10 10" />
        <path d="M22 8l4-4m0 0h-4m4 0v4" />
        <circle cx="26" cy="4" r="2" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function SystemsOverview() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-display text-sm font-medium text-[#00f0ff] uppercase tracking-wider mb-4 block">
            What I Build
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Connected Systems, Not Services
          </h2>
          <p className="font-body text-gray-400 max-w-2xl mx-auto">
            Every piece works together. Visual identity informs marketing. Marketing drives to software.
            Software enables automation. One operator, one vision.
          </p>
        </motion.div>

        {/* Systems Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {systems.map((system) => (
            <motion.div
              key={system.id}
              variants={cardVariants}
              className="glass-card glass-card-hover p-8 md:p-10 group"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                style={{
                  background: `${system.color}10`,
                  color: system.color,
                }}
              >
                {system.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-2xl text-white mb-1">
                {system.title}
              </h3>
              <span
                className="font-display font-semibold text-lg mb-4 block"
                style={{ color: system.color }}
              >
                {system.subtitle}
              </span>

              {/* Description */}
              <p className="font-body text-gray-400 mb-6 leading-relaxed">
                {system.description}
              </p>

              {/* Services List */}
              <div className="flex flex-wrap gap-2 mb-6">
                {system.services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 text-xs font-display font-medium text-gray-300 border border-white/10 rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                href={`/services#${system.id}`}
                className="inline-flex items-center gap-2 font-display font-medium text-sm text-white group-hover:text-[#00f0ff] transition-colors"
              >
                Learn More
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Connection Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 glass-card px-8 py-4">
            <span className="w-3 h-3 rounded-full bg-[#00f0ff]" />
            <span className="w-16 h-px bg-gradient-to-r from-[#00f0ff] to-[#ff00ff]" />
            <span className="w-3 h-3 rounded-full bg-[#ff00ff]" />
            <span className="w-16 h-px bg-gradient-to-r from-[#ff00ff] to-[#00f0ff]" />
            <span className="w-3 h-3 rounded-full bg-[#00f0ff]" />
            <span className="w-16 h-px bg-gradient-to-r from-[#00f0ff] to-[#ff00ff]" />
            <span className="w-3 h-3 rounded-full bg-[#ff00ff]" />
          </div>
          <p className="font-body text-sm text-gray-500 mt-4">
            All systems interconnected for maximum impact
          </p>
        </motion.div>
      </div>
    </section>
  );
}
