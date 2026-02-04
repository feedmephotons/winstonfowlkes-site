'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

// Video IDs from Winston Fowlkes YouTube channel
// Update these with actual video IDs from: https://www.youtube.com/channel/UCVTOJiDAZvz1tCn1J1r9e0g
const videos = [
  {
    id: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
    title: 'Chateau Green Shingle Re-Roof',
    client: 'Affinity Roofing',
    category: 'Commercial',
  },
  {
    id: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
    title: 'Tile Re-Roof Cape Coral',
    client: 'Affinity Roofing',
    category: 'Commercial',
  },
  {
    id: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
    title: 'Target Roofing - TPO Flute Fill',
    client: 'Target Roofing',
    category: 'Process',
  },
  {
    id: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
    title: 'Roofing & Construction Reel',
    client: 'Various Clients',
    category: 'Reel',
  },
  {
    id: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
    title: 'In Living Color Tattoo',
    client: 'Amber Petaccio',
    category: 'Business Promo',
  },
  {
    id: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
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
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-[#00d4ff] uppercase tracking-wider mb-4 block">
            Video Production
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Stories That Move
          </h2>
          <p className="text-gray-400 max-w-lg">
            From quick turnaround content to full-scale productions with VFX and post.
          </p>
        </motion.div>

        {/* Main Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto mb-8"
        >
          <div className="aspect-video rounded-xl overflow-hidden card-elevated">
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
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />

                {/* Play Button - Clean white, no neon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                    <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <span className="tag tag-accent mb-2 inline-block">
                    {activeVideo.category}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white">
                    {activeVideo.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {activeVideo.client}
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
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
              className={`relative aspect-video rounded-lg overflow-hidden group transition-all duration-200 ${
                activeVideo === video
                  ? 'ring-2 ring-white ring-offset-2 ring-offset-[#0a0a0a]'
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
                <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                  <svg className="w-3 h-3 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
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
