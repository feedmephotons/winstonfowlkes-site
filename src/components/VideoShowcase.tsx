'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

// Video IDs from Winston Fowlkes YouTube channel
const videos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Chateau Green Shingle Re-Roof',
    client: 'Affinity Roofing',
    category: 'Commercial',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Tile Re-Roof Cape Coral',
    client: 'Affinity Roofing',
    category: 'Commercial',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Target Roofing - TPO Flute Fill',
    client: 'Target Roofing',
    category: 'Process',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Roofing & Construction Reel',
    client: 'Various Clients',
    category: 'Reel',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'In Living Color Tattoo',
    client: 'Amber Petaccio',
    category: 'Business Promo',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Sideline Barbershop',
    client: 'Omar Soto',
    category: 'Business Promo',
  },
];

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/backgrounds/services-texture.png"
          alt=""
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
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
          <p className="section-label">Video Production</p>
          <h2 className="section-title">Stories That Move</h2>
          <p className="section-desc">
            From quick turnaround content to full-scale productions with VFX and post.
          </p>
        </motion.div>

        {/* Main Video Player */}
        <div className="relative max-w-5xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVideo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="aspect-video rounded-xl overflow-hidden card-elevated border border-white/10 shadow-2xl shadow-black/50"
            >
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                  title={activeVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  className="relative w-full h-full cursor-pointer group"
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${activeVideo.id}/maxresdefault.jpg`}
                    alt={activeVideo.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:bg-accent group-hover:border-accent transition-all duration-300"
                    >
                      <svg className="w-8 h-8 text-white group-hover:text-black ml-1 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Video Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="tag tag-accent mb-3 inline-block">
                        {activeVideo.category}
                      </span>
                      <h3 className="font-display font-bold text-2xl text-white mb-1">
                        {activeVideo.title}
                      </h3>
                      <p className="text-grey-400 text-sm">
                        {activeVideo.client}
                      </p>
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {videos.map((video, index) => (
            <motion.button
              key={`${video.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => {
                setActiveVideo(video);
                setIsPlaying(false);
              }}
              className={`relative aspect-video rounded-lg overflow-hidden group transition-all duration-300 border ${
                activeVideo.id === video.id && activeVideo.title === video.title
                  ? 'border-accent shadow-[0_0_15px_rgba(0,212,255,0.3)] ring-1 ring-accent scale-105 z-10'
                  : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105 hover:z-10'
              }`}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              
              {/* Playing Indicator */}
              {activeVideo.id === video.id && activeVideo.title === video.title && (
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex gap-1">
                      <motion.div animate={{ height: [8, 16, 8] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 bg-accent rounded-full" />
                      <motion.div animate={{ height: [12, 6, 12] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-accent rounded-full" />
                      <motion.div animate={{ height: [6, 14, 6] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1 bg-accent rounded-full" />
                    </div>
                 </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
