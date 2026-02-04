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
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20c0-4 2.5-6 6-6s6 2 6 6" />
        <path d="M17 6l2-2m0 0h-2m2 0v2" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function SystemsOverview() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-[#00d4ff] uppercase tracking-wider mb-4 block">
            What I Build
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Connected Systems, Not Services
          </h2>
          <p className="text-gray-400 max-w-xl leading-relaxed">
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
              className="card card-interactive p-8"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6 text-gray-400">
                {system.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {system.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                {system.description}
              </p>

              {/* Services List */}
              <div className="flex flex-wrap gap-2 mb-6">
                {system.services.map((service) => (
                  <span
                    key={service}
                    className="tag"
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                href={`/services#${system.id}`}
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Learn More
                <svg
                  className="w-4 h-4"
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

        {/* Simple tagline instead of dots visualization */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-500 text-sm mt-12"
        >
          All systems designed to work together for maximum impact
        </motion.p>
      </div>
    </section>
  );
}
