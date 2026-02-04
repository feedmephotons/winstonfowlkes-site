'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function CTA() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/backgrounds/cta-pattern.png"
          alt=""
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Ready to build something{' '}
            <span className="text-[#00d4ff]">extraordinary</span>?
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Whether you need a full system overhaul or strategic guidance on your next move,
            I&apos;m here to help you scale with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary text-base px-10 py-4">
              Start a Project
            </Link>
            <Link href="/work" className="btn-secondary text-base px-10 py-4">
              View Case Studies
            </Link>
          </div>

          {/* Trust Indicators - Simplified */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 text-gray-500"
          >
            {[
              'No long-term contracts',
              'Transparent pricing',
              'Direct communication',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
