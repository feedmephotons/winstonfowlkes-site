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
  {
    name: 'Jason Springs',
    title: 'Musician',
    quote: "From my logo to design to graphics to my music video — Winston delivered on every single piece. True multi-talent.",
    category: 'Full Creative',
  },
  {
    name: 'Joey B',
    title: 'Web Designer',
    quote: "Always punctual with reasonable pricing. Winston's technical skills combined with his creative eye is a rare combination.",
    category: 'Web Development',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section relative overflow-hidden bg-[#0d0d0d]">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00f0ff]/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-display text-sm font-medium text-[#00f0ff] uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            What Clients Say
          </h2>
          <p className="font-body text-gray-400 max-w-xl mx-auto">
            Real feedback from businesses who&apos;ve built systems with me.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="glass-card p-8 md:p-12 text-center relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-8 text-[#00f0ff]/20 text-6xl font-serif">
              &ldquo;
            </div>

            {/* Quote */}
            <blockquote className="font-body text-xl md:text-2xl text-white leading-relaxed mb-8 relative z-10">
              {testimonials[activeIndex].quote}
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#ff00ff] flex items-center justify-center text-black font-display font-bold text-lg mb-3">
                {testimonials[activeIndex].name.charAt(0)}
              </div>
              <div className="font-display font-semibold text-white">
                {testimonials[activeIndex].name}
              </div>
              <div className="font-body text-sm text-gray-400">
                {testimonials[activeIndex].title}
              </div>
              <span className="mt-2 px-3 py-1 text-xs font-display font-medium text-[#00f0ff] border border-[#00f0ff]/30 rounded-full">
                {testimonials[activeIndex].category}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-[#00f0ff]'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Mini Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-4 text-left transition-all duration-300 ${
                index === activeIndex
                  ? 'border-[#00f0ff]/50 bg-[#00f0ff]/5'
                  : 'hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00f0ff]/50 to-[#ff00ff]/50 flex items-center justify-center text-white font-display font-semibold text-xs">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display font-medium text-sm text-white truncate">
                    {testimonial.name}
                  </div>
                  <div className="font-body text-xs text-gray-500 truncate">
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
