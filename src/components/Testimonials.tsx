'use client';

import { motion, AnimatePresence } from 'framer-motion';
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
    <section className="section bg-black-soft">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">
            What Clients Say
          </h2>
          <p className="section-desc">
            Real feedback from businesses who&apos;ve built systems with me.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16 h-[300px] flex items-center justify-center relative">
           <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full absolute inset-0 flex items-center"
            >
              <div className="card-elevated p-10 md:p-14 text-center w-full border border-white/5 bg-black-card shadow-2xl">
                {/* Quote Icon */}
                <div className="text-accent/20 text-6xl font-display font-bold leading-none mb-6">
                  &ldquo;
                </div>
                
                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-medium">
                  {testimonials[activeIndex].quote}
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-grey-800 flex items-center justify-center text-grey-400 font-display font-bold text-lg border border-white/5">
                        {testimonials[activeIndex].name.charAt(0)}
                    </div>
                    <div className="text-left">
                        <div className="font-display font-bold text-white text-base">
                            {testimonials[activeIndex].name}
                        </div>
                        <div className="text-sm text-accent">
                            {testimonials[activeIndex].title}
                        </div>
                    </div>
                  </div>
                  <span className="text-xs text-grey-500 uppercase tracking-widest mt-2 border-t border-white/5 pt-2 px-4">
                    {testimonials[activeIndex].category}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-accent'
                  : 'w-2 bg-grey-700 hover:bg-grey-500'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Mini Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`card p-4 text-left transition-all duration-300 group ${
                index === activeIndex
                  ? 'border-accent/50 bg-white/5 shadow-[0_0_15px_rgba(0,212,255,0.1)]'
                  : 'hover:border-white/20 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-xs shrink-0 transition-colors ${
                    index === activeIndex ? 'bg-accent text-black' : 'bg-grey-800 text-grey-500 group-hover:bg-grey-700'
                }`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className={`font-medium text-xs truncate transition-colors ${
                      index === activeIndex ? 'text-white' : 'text-grey-400 group-hover:text-white'
                  }`}>
                    {testimonial.name}
                  </div>
                  <div className="text-[10px] text-grey-600 truncate">
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
