'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Rast Bryant',
    title: 'Owner, Lloyd Roofing',
    quote: "Winston has an uncanny ability to execute on poorly described high level concepts. He just gets it and delivers beyond expectations.",
    category: 'Video & Marketing',
  },
  {
    name: 'Weston Beckwith',
    title: 'Creative Director',
    quote: "Winston has an enormous amount of talent and resources. He's the rare creative who can execute across every medium with equal skill.",
    category: 'Creative Systems',
  },
  {
    name: 'Emily DiRoma',
    title: 'Graphic Designer',
    quote: "It doesn't matter what type of project you bring to Winston — the quality is always top notch. Consistent excellence across the board.",
    category: 'Design',
  },
  {
    name: 'Joshua Voisin',
    title: 'Owner, Inspect LA',
    quote: "Highly recommend Winston for website and marketing. He understood our business and built systems that actually work for us.",
    category: 'Web & Marketing',
  },
  {
    name: 'Omar Soto',
    title: 'Owner, Sideline Barbershop',
    quote: "Best customer service and photography company I've worked with. The video he created brought in more clients than any other marketing we've done.",
    category: 'Video & Photo',
  },
  {
    name: 'Amanda Keen',
    title: 'Owner, Keen & Co.',
    quote: "Winston's label design and photography work completely elevated our brand. He sees the big picture and executes on every detail.",
    category: 'Brand Design',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section relative overflow-hidden bg-[#0d0d0d]">
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
            Testimonials
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Real feedback from businesses who&apos;ve built systems with me.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="card-elevated p-10 md:p-12 text-center">
            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8">
              &ldquo;{testimonials[activeIndex].quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center">
              {/* Avatar - Simple initials */}
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 font-display font-semibold mb-3">
                {testimonials[activeIndex].name.charAt(0)}
              </div>
              <div className="font-display font-semibold text-white">
                {testimonials[activeIndex].name}
              </div>
              <div className="text-sm text-gray-500 mb-2">
                {testimonials[activeIndex].title}
              </div>
              <span className="tag">
                {testimonials[activeIndex].category}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mb-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Mini Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`card p-4 text-left transition-all duration-200 ${
                index === activeIndex
                  ? 'border-white/20 bg-[#1a1a1a]'
                  : 'hover:border-white/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center text-gray-500 font-display font-medium text-xs shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="font-medium text-sm text-white truncate">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500 truncate">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
