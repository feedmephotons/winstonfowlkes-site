'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const systems = [
  {
    id: 'visual',
    title: 'Visual & Brand Systems',
    description: 'Photography, video, 3D, motion graphics, and design that tells your story with precision.',
    services: ['Photography', 'Video Production', '3D & VFX', 'Graphic Design'],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="10" r="2" />
        <path d="M21 15l-5-4-3 2.5-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: 'marketing',
    title: 'Marketing & Growth Systems',
    description: 'Strategic campaigns, SEO, social media, and analytics that drive real business results.',
    services: ['Paid Advertising', 'SEO & Content', 'Social Media', 'Analytics'],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 20l4-4 3 3 6-8 5 5" />
        <circle cx="20" cy="6" r="2" />
      </svg>
    ),
  },
  {
    id: 'software',
    title: 'Web & Software Systems',
    description: 'High-performance websites, custom applications, and AI integration built for scale.',
    services: ['Web Development', 'Custom Software', 'AI Integration', 'Automation'],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 10l-2 2 2 2" />
        <path d="M16 10l2 2-2 2" />
        <path d="M12 9l-1 6" />
      </svg>
    ),
  },
  {
    id: 'consulting',
    title: 'Consulting & Advisory',
    description: 'Strategic guidance for businesses ready to scale with modern tools and approaches.',
    services: ['Strategy', 'Tech Architecture', 'AI Guidance', 'Fractional Support'],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20c0-4 2.5-6 6-6s6 2 6 6" />
        <path d="M17 6l2-2m0 0h-2m2 0v2" />
      </svg>
    ),
  },
];

export default function SystemsOverview() {
  return (
    <section className="section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center md:flex md:flex-col md:items-center"
        >
          <p className="section-label">What I Build</p>
          <h2 className="section-title">Connected Systems, Not Services</h2>
          <p className="section-desc">
            Every piece works together. Visual identity informs marketing. Marketing drives to software.
            Software enables automation. One operator, one vision.
          </p>
        </motion.div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {systems.map((system, index) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card group p-8 hover:bg-white/[0.02] transition-colors duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300">
                {system.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {system.title}
              </h3>

              {/* Description */}
              <p className="text-grey-400 text-sm leading-relaxed mb-6">
                {system.description}
              </p>

              {/* Services List */}
              <div className="flex flex-wrap gap-2 mb-8">
                {system.services.map((service) => (
                  <span key={service} className="tag bg-white/5 border border-white/5 text-grey-400">
                    {service}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link href={`/services#${system.id}`} className="link-arrow text-sm font-medium">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-grey-500 text-sm mt-12 font-medium tracking-wide uppercase"
        >
          All systems designed to work together for maximum impact
        </motion.p>
      </div>
    </section>
  );
}
