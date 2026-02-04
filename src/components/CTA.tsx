'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 via-transparent to-[#ff00ff]/10" />
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Geometric Elements */}
      <motion.div
        initial={{ opacity: 0, rotate: -15 }}
        whileInView={{ opacity: 0.1, rotate: 0 }}
        viewport={{ once: true }}
        className="absolute -top-20 -left-20 w-64 h-64 border border-[#00f0ff]"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 15 }}
        whileInView={{ opacity: 0.1, rotate: 0 }}
        viewport={{ once: true }}
        className="absolute -bottom-20 -right-20 w-64 h-64 border border-[#ff00ff]"
      />

      <div className="container mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] pulse-glow" />
            <span className="text-xs font-display font-medium text-gray-300 uppercase tracking-wider">
              Ready to Start?
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Let&apos;s build something{' '}
            <span className="neon-text-cyan">extraordinary</span>
          </h2>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Whether you need a full system overhaul or strategic guidance on your next move,
            I&apos;m here to help you scale with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-10 py-5">
              Start a Project
            </Link>
            <Link href="/work" className="btn-secondary text-lg px-10 py-5">
              View Case Studies
            </Link>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-gray-500"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00f0ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-body text-sm">No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00f0ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-body text-sm">Transparent pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00f0ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-body text-sm">Direct communication</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
