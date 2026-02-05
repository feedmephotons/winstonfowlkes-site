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
    <section className="section bg-black">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <p className="section-label">Results</p>
          <h2 className="section-title">
            Numbers That Matter
          </h2>
          <p className="section-desc">
            Real outcomes from real projects. These metrics represent aggregate results across client engagements.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
              whileHover={{ y: -5 }}
              className="card-elevated p-8 text-center border border-white/5 bg-black-card hover:border-accent/30 group transition-colors duration-300"
            >
              {/* Value */}
              <div className="font-display font-bold text-4xl md:text-5xl text-white mb-4 group-hover:text-accent transition-colors duration-300">
                {metric.value}
              </div>

              {/* Label */}
              <p className="text-grey-300 text-sm font-medium mb-2 leading-snug">
                {metric.label}
              </p>

              {/* Context */}
              <p className="text-grey-500 text-xs uppercase tracking-wide">
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
          className="text-center text-grey-600 text-xs mt-12"
        >
          Results vary by project scope and industry. These figures represent best-case outcomes.
        </motion.p>
      </div>
    </section>
  );
}
