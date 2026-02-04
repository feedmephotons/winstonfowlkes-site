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
    <section className="section relative overflow-hidden bg-[#0d0d0d]">
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
            How I Work
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            A Process That Delivers
          </h2>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            Every project follows the same proven framework. Clear phases, transparent communication, measurable outcomes.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent z-0" />
              )}

              <div className="card p-8 h-full relative z-10">
                {/* Step Number */}
                <div className="text-5xl font-display font-bold text-white/5 mb-4">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
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
