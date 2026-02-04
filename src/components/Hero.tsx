'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/backgrounds/hero-abstract.png"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-[#0a0a0a]/60 to-[#0a0a0a]" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-4xl">
          {/* Status Badge - Simple, not pulsing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 card px-4 py-2 mb-8"
          >
            <span className="status-dot" />
            <span className="text-sm font-medium text-gray-400">
              Available for Projects
            </span>
          </motion.div>

          {/* Main Headline - NO neon glow */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 tracking-tight"
          >
            I design, build & automate{' '}
            <span className="text-[#00d4ff]">modern digital systems</span>{' '}
            that actually scale.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
          >
            From cinematic visuals to AI-powered software — I help companies move faster,
            look better, and operate smarter.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Book a Consult
            </Link>
            <Link href="/work" className="btn-secondary text-base px-8 py-4">
              View Work
            </Link>
          </motion.div>

          {/* Stats - Simplified */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 pt-12 border-t border-white/5"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12">
              {[
                { value: '50+', label: 'Projects Delivered' },
                { value: '4', label: 'System Specialties' },
                { value: '10+', label: 'Years Experience' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-display font-bold text-3xl md:text-4xl text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Simplified */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
