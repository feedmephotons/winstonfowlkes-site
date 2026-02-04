'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const timeline = [
  {
    period: 'Early Years',
    title: 'Creative Foundation',
    description: 'Started with graphic design and photography, learning to see the world through a visual lens.',
  },
  {
    period: 'Growth Phase',
    title: 'Expanding Skills',
    description: 'Added video production, 3D visualization, and web development to the toolkit. Began seeing how systems connect.',
  },
  {
    period: 'Systems Thinking',
    title: 'The Integration',
    description: 'Realized that the best results come from connected systems, not isolated services. Started building holistically.',
  },
  {
    period: 'Present',
    title: 'Full-Stack Operator',
    description: 'Now helping businesses design, build, and automate complete digital systems that actually scale.',
  },
];

const values = [
  {
    title: 'Systems Over Services',
    description: 'Every piece should connect. I think in systems, not silos. Your visual identity, marketing, and technology should work together.',
  },
  {
    title: 'Outcomes Over Output',
    description: 'I care about what happens after delivery. Did it move the needle? Did it solve the problem? That\'s what matters.',
  },
  {
    title: 'Clarity Over Complexity',
    description: 'Simple doesn\'t mean basic. I aim for solutions that feel obvious in hindsight — elegant, not convoluted.',
  },
  {
    title: 'Partnership Over Projects',
    description: 'The best work comes from ongoing relationships. I prefer to grow with clients rather than just deliver and disappear.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00f0ff]/5 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 md:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-display text-sm font-medium text-[#00f0ff] uppercase tracking-wider mb-4 block">
                About
              </span>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                One operator.<br />Full systems.
              </h1>
              <p className="font-body text-xl text-gray-400 leading-relaxed mb-6">
                I&apos;m Winston Fowlkes — a multidisciplinary systems builder based in Jacksonville, FL.
                I help businesses design, build, and automate modern digital systems that actually scale.
              </p>
              <p className="font-body text-gray-400 leading-relaxed mb-8">
                Over 10+ years, I&apos;ve built expertise across visual production, marketing, web development,
                and AI integration. But more importantly, I&apos;ve learned how to connect these disciplines
                into cohesive systems that compound results.
              </p>
              <p className="font-body text-gray-400 leading-relaxed">
                I work with businesses who are ready to stop patching and start building.
                If you need a vendor, there are plenty out there. If you need a partner who
                thinks in systems and executes across mediums — let&apos;s talk.
              </p>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Abstract geometric representation */}
                <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-[#ff00ff]/10" />
                  <div className="absolute inset-0 grid-bg opacity-50" />

                  {/* Interconnected nodes visualization */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <defs>
                      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.5" />
                      </linearGradient>
                    </defs>

                    {/* Connection lines */}
                    <motion.line
                      x1="100" y1="100" x2="200" y2="200"
                      stroke="url(#lineGrad)" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                    <motion.line
                      x1="200" y1="200" x2="300" y2="100"
                      stroke="url(#lineGrad)" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                    />
                    <motion.line
                      x1="200" y1="200" x2="300" y2="300"
                      stroke="url(#lineGrad)" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                    />
                    <motion.line
                      x1="200" y1="200" x2="100" y2="300"
                      stroke="url(#lineGrad)" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 1.1 }}
                    />

                    {/* Nodes */}
                    <motion.circle
                      cx="200" cy="200" r="20"
                      fill="#00f0ff"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
                    <motion.circle
                      cx="100" cy="100" r="12"
                      fill="#ff00ff"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    />
                    <motion.circle
                      cx="300" cy="100" r="12"
                      fill="#00f0ff"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    />
                    <motion.circle
                      cx="300" cy="300" r="12"
                      fill="#ff00ff"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    />
                    <motion.circle
                      cx="100" cy="300" r="12"
                      fill="#00f0ff"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                    />
                  </svg>

                  {/* Labels */}
                  <div className="absolute top-[18%] left-[18%] text-xs font-display text-gray-400">Visual</div>
                  <div className="absolute top-[18%] right-[15%] text-xs font-display text-gray-400">Marketing</div>
                  <div className="absolute bottom-[18%] right-[15%] text-xs font-display text-gray-400">Software</div>
                  <div className="absolute bottom-[18%] left-[15%] text-xs font-display text-gray-400">Automation</div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-display font-semibold text-white">
                    Systems
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section relative overflow-hidden bg-[#0d0d0d]">
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="container mx-auto px-6 md:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-display text-sm font-medium text-[#ff00ff] uppercase tracking-wider mb-4 block">
              Philosophy
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              How I Think About Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 font-display font-bold text-lg"
                  style={{
                    background: index % 2 === 0 ? '#00f0ff10' : '#ff00ff10',
                    color: index % 2 === 0 ? '#00f0ff' : '#ff00ff',
                  }}
                >
                  {index + 1}
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="container mx-auto px-6 md:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-display text-sm font-medium text-[#00f0ff] uppercase tracking-wider mb-4 block">
              Journey
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              How I Got Here
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l border-white/10 last:pb-0"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-2 top-0 w-4 h-4 rounded-full"
                  style={{ background: index % 2 === 0 ? '#00f0ff' : '#ff00ff' }}
                />

                <span className="font-display text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {item.period}
                </span>
                <h3 className="font-display font-bold text-xl text-white mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-[#00f0ff]/5 to-[#ff00ff]/5">
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="container mx-auto px-6 md:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
              Let&apos;s build something together
            </h2>
            <p className="font-body text-gray-400 mb-8 text-lg">
              If you&apos;re looking for someone who thinks in systems and executes across mediums, I&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-10 py-5">
                Get in Touch
              </Link>
              <Link href="/work" className="btn-secondary text-lg px-10 py-5">
                See My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
