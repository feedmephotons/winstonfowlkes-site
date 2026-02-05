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
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        
        {/* Animated Glow */}
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"
        />
      </div>

      <div className="container relative flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl w-full text-center"
        >
          {/* Headline */}
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Ready to build something{' '}
            <span className="text-accent relative inline-block">
              extraordinary
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-30" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 2.99986 63.2646 0.854301 99.9996 5.20463C136.735 9.55496 179.053 7.4532 198.001 2.00017" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
            </span>?
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-grey-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you need a full system overhaul or strategic guidance on your next move,
            I&apos;m here to help you scale with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary min-w-[160px] text-base">
              Start a Project
            </Link>
            <Link href="/work" className="btn-secondary min-w-[160px] text-base">
              View Case Studies
            </Link>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-grey-500"
          >
            {[
              'No long-term contracts',
              'Transparent pricing',
              'Direct communication',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 group cursor-default">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <span className="text-sm font-medium group-hover:text-grey-400 transition-colors">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
