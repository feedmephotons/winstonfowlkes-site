'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    id: 'visual',
    title: 'Visual & Brand Systems',
    tagline: 'Visuals that tell your story with precision',
    description: 'From photography to video to 3D — I create cohesive visual identities that capture your brand essence and connect with your audience.',
    color: '#00f0ff',
    offerings: [
      {
        name: 'Photography',
        description: 'Professional photography for products, events, headshots, and brand imagery that elevates your presence.',
        deliverables: ['Product Photography', 'Event Coverage', 'Headshots & Portraits', 'Brand Lifestyle'],
      },
      {
        name: 'Video Production',
        description: 'Full-service video from concept to delivery. Quick turnarounds to comprehensive productions with VFX and post.',
        deliverables: ['Promotional Videos', 'Documentaries', 'Social Content', 'Motion Graphics'],
      },
      {
        name: '3D & VFX',
        description: '3D modeling, rendering, compositing, AR/VR development, and visual effects that create lasting impressions.',
        deliverables: ['3D Modeling', 'Product Renders', 'Architectural Viz', 'VFX Compositing'],
      },
      {
        name: 'Graphic Design',
        description: 'Visual concepts that inspire, inform, and captivate. From logos to complete brand systems.',
        deliverables: ['Logo Design', 'Brand Guidelines', 'Print Materials', 'Vehicle Wraps'],
      },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing & Growth Systems',
    tagline: 'Strategic growth that drives real results',
    description: 'I help businesses cut through the noise with strategic marketing that actually converts — not vanity metrics.',
    color: '#ff00ff',
    offerings: [
      {
        name: 'Paid Advertising',
        description: 'Strategic ad campaigns across platforms that maximize ROI and drive qualified leads.',
        deliverables: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Retargeting'],
      },
      {
        name: 'SEO & Content',
        description: 'Search optimization and content strategy that builds organic traffic over time.',
        deliverables: ['Technical SEO', 'Content Strategy', 'Keyword Research', 'Local SEO'],
      },
      {
        name: 'Social Media',
        description: 'Brand visibility and engagement strategies that keep your audience connected.',
        deliverables: ['Content Creation', 'Community Management', 'Influencer Strategy', 'Analytics'],
      },
      {
        name: 'Analytics & Optimization',
        description: 'Data-driven insights that inform decisions and continuously improve performance.',
        deliverables: ['Tracking Setup', 'Dashboard Creation', 'A/B Testing', 'Conversion Optimization'],
      },
    ],
  },
  {
    id: 'software',
    title: 'Web, Software & Automation',
    tagline: 'Technology that scales with you',
    description: 'High-performance websites, custom applications, and AI integration built on modern stacks that grow with your business.',
    color: '#00f0ff',
    offerings: [
      {
        name: 'Web Development',
        description: 'Fast, responsive websites built with modern frameworks like Next.js. Performance is a feature.',
        deliverables: ['Marketing Sites', 'E-commerce', 'Web Applications', 'Landing Pages'],
      },
      {
        name: 'Custom Software',
        description: 'Bespoke applications that solve specific business problems others can\'t address.',
        deliverables: ['Internal Tools', 'Customer Portals', 'API Development', 'Database Design'],
      },
      {
        name: 'AI Integration',
        description: 'Practical AI implementation that adds real value — chatbots, automation, and intelligent features.',
        deliverables: ['AI Chatbots', 'Process Automation', 'Content Generation', 'Data Analysis'],
      },
      {
        name: 'Automation',
        description: 'Connect your tools and eliminate repetitive tasks so you can focus on growth.',
        deliverables: ['Workflow Automation', 'System Integration', 'CRM Setup', 'Email Automation'],
      },
    ],
  },
  {
    id: 'consulting',
    title: 'Consulting & Advisory',
    tagline: 'Strategic guidance when you need it',
    description: 'For businesses that need a thinking partner — not another vendor. I help you make better technical and creative decisions.',
    color: '#ff00ff',
    offerings: [
      {
        name: 'Strategy',
        description: 'High-level guidance on digital strategy, market positioning, and growth planning.',
        deliverables: ['Digital Strategy', 'Market Analysis', 'Competitive Research', 'Roadmapping'],
      },
      {
        name: 'Tech Architecture',
        description: 'Making smart technology decisions before you commit — stack selection, vendor evaluation, build vs buy.',
        deliverables: ['Stack Selection', 'Vendor Evaluation', 'System Design', 'Security Review'],
      },
      {
        name: 'AI Guidance',
        description: 'Practical advice on where AI fits (and doesn\'t fit) in your business operations.',
        deliverables: ['AI Readiness', 'Tool Selection', 'Implementation Planning', 'Team Training'],
      },
      {
        name: 'Fractional Support',
        description: 'Ongoing advisory and execution support without the full-time commitment.',
        deliverables: ['Weekly Calls', 'Async Support', 'Project Oversight', 'Team Extension'],
      },
    ],
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 md:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="font-display text-sm font-medium text-[#00f0ff] uppercase tracking-wider mb-4 block">
              Services
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Connected systems,<br />not disconnected services
            </h1>
            <p className="font-body text-xl text-gray-400 max-w-2xl leading-relaxed">
              Every piece I build works together. Visual identity informs marketing.
              Marketing drives to software. Software enables automation. One operator, one vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section relative overflow-hidden ${index % 2 === 1 ? 'bg-[#0d0d0d]' : ''}`}
        >
          <div className="absolute inset-0 grid-bg opacity-30" />

          <div className="container mx-auto px-6 md:px-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div
                className="w-16 h-1 mb-6"
                style={{ background: service.color }}
              />
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-2">
                {service.title}
              </h2>
              <p
                className="font-display font-medium text-lg mb-4"
                style={{ color: service.color }}
              >
                {service.tagline}
              </p>
              <p className="font-body text-gray-400 max-w-2xl">
                {service.description}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {service.offerings.map((offering) => (
                <motion.div
                  key={offering.name}
                  variants={itemVariants}
                  className="glass-card glass-card-hover p-8"
                >
                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    {offering.name}
                  </h3>
                  <p className="font-body text-gray-400 mb-6 leading-relaxed">
                    {offering.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {offering.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="px-3 py-1 text-xs font-display font-medium text-gray-300 border border-white/10 rounded-full"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

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
              Not sure what you need?
            </h2>
            <p className="font-body text-gray-400 mb-8 text-lg">
              Let&apos;s talk. I&apos;ll help you figure out what systems will have the biggest impact on your business.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-10 py-5">
              Book a Consult
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
