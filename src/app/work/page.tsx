'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const categories = ['All', 'Branding', 'Web', 'Video', '3D'];

const projects = [
  {
    id: 'affinity-roofing',
    title: 'Affinity Roofing',
    category: 'Branding',
    tags: ['Brand Identity', 'Video', 'Web', 'Print'],
    description: 'Complete brand overhaul including identity system, marketing materials, fleet graphics, and promotional videos.',
    results: 'Full retainer client with continuous creative and marketing support.',
    color: '#00f0ff',
    services: ['Logo & Brand Guidelines', 'Truck Wraps', 'Uniforms', 'Video Production', 'Website', 'Print Materials'],
  },
  {
    id: 'extreme-roofing',
    title: 'Extreme Roofing',
    category: 'Branding',
    tags: ['Brand Identity', 'Web', 'Print'],
    description: 'Brand development and web presence for a growing roofing company in Southwest Florida.',
    results: 'Established market presence with cohesive brand identity across all touchpoints.',
    color: '#ff00ff',
    services: ['Business Cards', 'Yard Signs', 'Website Design', 'Social Assets'],
  },
  {
    id: 'roof-wars',
    title: 'Roof Wars',
    category: 'Branding',
    tags: ['Brand Identity', 'Print', 'Fleet'],
    description: 'Bold brand identity and fleet graphics for an aggressive roofing company.',
    results: 'Stand-out presence in a competitive market with memorable brand assets.',
    color: '#00f0ff',
    services: ['Logo Design', 'Truck Wrap', 'Magnets', 'Business Cards', 'Social Media'],
  },
  {
    id: 'target-builders',
    title: 'Target Builders',
    category: 'Web',
    tags: ['Web Development', 'Video'],
    description: 'High-performance website and video content for commercial roofing operations.',
    results: 'Modern web presence showcasing large-scale commercial projects.',
    color: '#ff00ff',
    services: ['Website Design', 'Video Production', 'Process Documentation'],
  },
  {
    id: 'redline-demolition',
    title: 'Redline Demolition',
    category: 'Web',
    tags: ['Web Development', 'Brand'],
    description: 'Website and brand materials for demolition and site prep services.',
    results: 'Professional digital presence that communicates capability and reliability.',
    color: '#00f0ff',
    services: ['Website', 'Brand Collateral'],
  },
  {
    id: 'creative-spaces',
    title: 'Creative Spaces Collection',
    category: '3D',
    tags: ['3D Visualization', 'Interior Design', 'Architecture'],
    description: 'Portfolio of architectural renderings and creative space visualizations for various clients.',
    results: '25+ 3D visualizations helping clients see possibilities before construction.',
    color: '#ff00ff',
    services: ['3D Modeling', 'Interior Viz', 'Exterior Renders', 'Concept Art'],
  },
  {
    id: 'sideline-barbershop',
    title: 'Sideline Barbershop',
    category: 'Video',
    tags: ['Video Production', 'Photography'],
    description: 'Promotional video and photography showcasing barbershop services in Port Charlotte.',
    results: 'Increased foot traffic and social engagement with authentic brand content.',
    color: '#00f0ff',
    services: ['Promotional Video', 'Photography', 'Social Content'],
  },
  {
    id: 'in-living-color',
    title: 'In Living Color Tattoo',
    category: 'Video',
    tags: ['Video Production', 'Brand Story'],
    description: 'Brand story video for a tattoo parlor showcasing the artist and atmosphere.',
    results: 'Authentic content that captures the personality and artistry of the business.',
    color: '#ff00ff',
    services: ['Brand Video', 'Business Profile'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#ff00ff]/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 md:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="font-display text-sm font-medium text-[#ff00ff] uppercase tracking-wider mb-4 block">
              Selected Work
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Systems built,<br />results delivered
            </h1>
            <p className="font-body text-xl text-gray-400 max-w-2xl leading-relaxed">
              Real projects. Real outcomes. Each case study shows how connected systems
              create compounding value for businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative pb-8">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-display font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#00f0ff] text-black'
                    : 'glass-card text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section relative overflow-hidden pt-8">
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="container mx-auto px-6 md:px-12 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="glass-card glass-card-hover overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className="px-3 py-1 text-xs font-display font-medium rounded-full"
                      style={{
                        color: project.color,
                        border: `1px solid ${project.color}30`,
                        background: `${project.color}10`,
                      }}
                    >
                      {project.category}
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-500 group-hover:text-[#00f0ff] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-[#00f0ff] transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-body text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-display text-gray-500 border border-white/5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Indicator */}
                <div
                  className="h-1 w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: project.color }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative glass-card p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <span
              className="px-3 py-1 text-xs font-display font-medium rounded-full inline-block mb-4"
              style={{
                color: selectedProject.color,
                border: `1px solid ${selectedProject.color}30`,
                background: `${selectedProject.color}10`,
              }}
            >
              {selectedProject.category}
            </span>

            <h2 className="font-display font-bold text-3xl text-white mb-4">
              {selectedProject.title}
            </h2>

            <p className="font-body text-gray-300 mb-6 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="mb-6">
              <h4 className="font-display font-semibold text-white mb-3">Results</h4>
              <p className="font-body text-gray-400">{selectedProject.results}</p>
            </div>

            <div className="mb-8">
              <h4 className="font-display font-semibold text-white mb-3">Services Provided</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 text-sm font-display text-gray-300 border border-white/10 rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="btn-primary inline-block"
              onClick={() => setSelectedProject(null)}
            >
              Start a Similar Project
            </Link>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="section relative overflow-hidden bg-[#0d0d0d]">
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="container mx-auto px-6 md:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
              Ready to be the next case study?
            </h2>
            <p className="font-body text-gray-400 mb-8 text-lg">
              Let&apos;s build something worth talking about.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-10 py-5">
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
