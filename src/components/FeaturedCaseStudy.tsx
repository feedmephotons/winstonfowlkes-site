'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedCaseStudy() {
  return (
    <section className="section relative overflow-hidden bg-[#0d0d0d]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/backgrounds/services-texture.png"
          alt=""
          fill
          className="object-cover opacity-5"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-[#00d4ff] uppercase tracking-wider mb-4 block">
            Featured Work
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
            Case Study: Affinity Roofing
          </h2>
        </motion.div>

        {/* Case Study Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-video rounded-xl overflow-hidden card-elevated">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Affinity Roofing Case Study"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Right: Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Challenge */}
            <div className="mb-8">
              <h3 className="font-display font-semibold text-white text-lg mb-3">
                The Challenge
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Affinity Roofing needed a complete digital presence overhaul. Their existing marketing wasn&apos;t capturing the quality of their work, and leads weren&apos;t converting.
              </p>
            </div>

            {/* Solution */}
            <div className="mb-8">
              <h3 className="font-display font-semibold text-white text-lg mb-3">
                The Solution
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Built an integrated system: professional video content showcasing their craftsmanship, a high-converting website, and targeted ad campaigns that pre-qualified leads.
              </p>
            </div>

            {/* Results */}
            <div className="mb-8">
              <h3 className="font-display font-semibold text-white text-lg mb-4">
                The Results
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="font-display font-bold text-2xl text-white">3x</div>
                  <div className="text-gray-500 text-xs mt-1">Lead Volume</div>
                </div>
                <div className="text-center">
                  <div className="font-display font-bold text-2xl text-white">47%</div>
                  <div className="text-gray-500 text-xs mt-1">Higher Close Rate</div>
                </div>
                <div className="text-center">
                  <div className="font-display font-bold text-2xl text-white">$890K</div>
                  <div className="text-gray-500 text-xs mt-1">Revenue Attributed</div>
                </div>
              </div>
            </div>

            {/* Services Used */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Video Production', 'Web Development', 'Paid Advertising', 'SEO'].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              View All Case Studies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
