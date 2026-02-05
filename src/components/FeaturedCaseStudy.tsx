'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

export default function FeaturedCaseStudy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className="section bg-black-soft relative overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/backgrounds/services-texture.png"
          alt=""
          fill
          className="object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black-soft via-transparent to-black-soft" />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:text-center md:flex md:flex-col md:items-center"
        >
          <p className="section-label">Featured Work</p>
          <h2 className="section-title">Case Study: Affinity Roofing</h2>
        </motion.div>

        {/* Case Study Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Video */}
          <motion.div
            style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? y : 0 }}
            className="relative"
          >
            <div className="aspect-video rounded-xl overflow-hidden card-elevated shadow-2xl shadow-accent/5 border border-white/10 relative z-10 group">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Affinity Roofing Case Study"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -inset-4 bg-accent/5 rounded-2xl -z-0 blur-xl opacity-50" />
          </motion.div>

          {/* Right: Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Challenge */}
            <div className="mb-8 group">
              <h3 className="font-display font-semibold text-white text-lg mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                The Challenge
              </h3>
              <p className="text-grey-400 text-sm leading-relaxed pl-4 border-l border-white/10 group-hover:border-accent/30 transition-colors">
                Affinity Roofing needed a complete digital presence overhaul. Their existing marketing wasn&apos;t capturing the quality of their work, and leads weren&apos;t converting.
              </p>
            </div>

            {/* Solution */}
            <div className="mb-8 group">
              <h3 className="font-display font-semibold text-white text-lg mb-2 flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                The Solution
              </h3>
              <p className="text-grey-400 text-sm leading-relaxed pl-4 border-l border-white/10 group-hover:border-accent/30 transition-colors">
                Built an integrated system: professional video content showcasing their craftsmanship, a high-converting website, and targeted ad campaigns that pre-qualified leads.
              </p>
            </div>

            {/* Results */}
            <div className="mb-8">
              <h3 className="font-display font-semibold text-white text-lg mb-4">
                The Results
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                    { val: '3x', label: 'Lead Volume' },
                    { val: '47%', label: 'Higher Close Rate' },
                    { val: '$890K', label: 'Revenue Attributed' }
                ].map((stat, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -5 }}
                        className="text-center p-4 rounded-lg bg-white/5 border border-white/5 hover:border-accent/30 hover:bg-white/10 transition-all duration-300"
                    >
                        <div className="font-display font-bold text-2xl text-white mb-1">{stat.val}</div>
                        <div className="text-grey-500 text-[10px] uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                ))}
              </div>
            </div>

            {/* Services Used */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Video Production', 'Web Development', 'Paid Advertising', 'SEO'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-black border border-white/10 text-grey-400">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link href="/work" className="btn-secondary text-sm px-6 py-2.5">
              View All Case Studies
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
