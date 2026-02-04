'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const videos = [
  {
    id: 'vGRXYbJMEeM',
    title: 'Chateau Green Shingle Re-Roof',
    client: 'Affinity Roofing',
    category: 'Commercial',
  },
  {
    id: 'h0CiYVsYlLs',
    title: 'Tile Re-Roof Cape Coral',
    client: 'Affinity Roofing',
    category: 'Commercial',
  },
  {
    id: 'KwqmDl_E5tE',
    title: 'Target Roofing - TPO Flute Fill',
    client: 'Target Roofing',
    category: 'Process',
  },
  {
    id: 'W1jJnHfPQCE',
    title: 'Roofing & Construction Reel',
    client: 'Various Clients',
    category: 'Reel',
  },
  {
    id: 'XnVpJZKmBqA',
    title: 'In Living Color Tattoo',
    client: 'Amber Petaccio',
    category: 'Business Promo',
  },
  {
    id: 'LjJHnAGk_L0',
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
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#ff00ff]/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-display text-sm font-medium text-[#ff00ff] uppercase tracking-wider mb-4 block">
            Video Production
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Stories That Move
          </h2>
          <p className="font-body text-gray-400 max-w-xl mx-auto">
            From quick turnaround content to full-scale productions with VFX and post.
          </p>
        </motion.div>

        {/* Main Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto mb-8"
        >
          <div className="aspect-video rounded-2xl overflow-hidden glass-card">
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
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#00f0ff] flex items-center justify-center group-hover:scale-110 transition-transform neon-glow-cyan">
                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-[#00f0ff] text-xs font-display font-medium uppercase tracking-wider">
                    {activeVideo.category}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white mt-1">
                    {activeVideo.title}
                  </h3>
                  <p className="font-body text-gray-400 text-sm">
                    {activeVideo.client}
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {videos.map((video, index) => (
            <motion.button
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                setActiveVideo(video);
                setIsPlaying(false);
              }}
              className={`relative aspect-video rounded-lg overflow-hidden group transition-all duration-300 ${
                activeVideo.id === video.id
                  ? 'ring-2 ring-[#00f0ff] ring-offset-2 ring-offset-[#0a0a0a]'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                  <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
