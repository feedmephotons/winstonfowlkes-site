'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Deep dive into your business, goals, and current systems. Understanding the full picture before making any moves.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Map out the architecture. Define what gets built, in what order, and how it all connects together.',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Build with precision. Whether it\'s code, content, or campaigns — everything ships with quality.',
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'Measure, iterate, improve. Systems get stronger over time through data-driven refinement.',
  },
];

export default function Process() {
  return (
    <section className="section bg-black-soft">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center md:flex md:flex-col md:items-center"
        >
          <p className="section-label">How I Work</p>
          <h2 className="section-title">A Process That Delivers</h2>
          <p className="section-desc">
            Every project follows the same proven framework. Clear phases, transparent communication, measurable outcomes.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting Line Background (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-white/5 z-0" />
          
          {/* Animated Progress Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden lg:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-accent/20 via-accent to-accent/20 origin-left z-0"
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative z-10"
            >
              <div className="card p-6 h-full relative group hover:-translate-y-1 transition-transform duration-300 bg-black-card border-white/5">
                {/* Step Number Badge */}
                <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center font-display font-bold text-xl text-white mb-6 group-hover:border-accent/50 group-hover:text-accent transition-colors duration-300 relative">
                   {step.number}
                   {/* Pulse effect behind badge */}
                   <div className="absolute inset-0 rounded-full bg-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-grey-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
