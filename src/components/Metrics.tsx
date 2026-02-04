'use client';

import { motion } from 'framer-motion';

const metrics = [
  {
    value: '340%',
    label: 'Average increase in qualified leads',
    context: 'for marketing clients',
  },
  {
    value: '52%',
    label: 'Reduction in customer acquisition cost',
    context: 'through optimized funnels',
  },
  {
    value: '$2.3M',
    label: 'Revenue tracked from campaigns',
    context: 'across all clients',
  },
  {
    value: '4.9/5',
    label: 'Average client satisfaction score',
    context: 'from project reviews',
  },
];

export default function Metrics() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#00d4ff] uppercase tracking-wider mb-4 block">
            Results
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Numbers That Matter
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Real outcomes from real projects. These metrics represent aggregate results across client engagements.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card-elevated p-8 text-center"
            >
              {/* Value */}
              <div className="font-display font-bold text-4xl md:text-5xl text-white mb-3">
                {metric.value}
              </div>

              {/* Label */}
              <p className="text-gray-300 text-sm font-medium mb-2">
                {metric.label}
              </p>

              {/* Context */}
              <p className="text-gray-500 text-xs">
                {metric.context}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-600 text-xs mt-8"
        >
          Results vary by project scope and industry. These figures represent best-case outcomes.
        </motion.p>
      </div>
    </section>
  );
}
