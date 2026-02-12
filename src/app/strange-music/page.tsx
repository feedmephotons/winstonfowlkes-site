'use client';

import { useState } from 'react';
import Image from 'next/image';

const STYLE_CATEGORIES = [
  { id: 'all', label: 'All Designs' },
  { id: 'gothic', label: 'Dark & Gothic' },
  { id: 'street', label: 'Street & Urban' },
  { id: 'tech', label: 'Tech & Futuristic' },
  { id: 'fineart', label: 'Fine Art & Cultural' },
  { id: 'material', label: 'Material & Texture' },
] as const;

type Category = (typeof STYLE_CATEGORIES)[number]['id'];

interface DesignItem {
  src: string;
  title: string;
  category: Category;
}

const DESIGNS: DesignItem[] = [
  // Dark & Gothic
  { src: '/strange/gothic_cathedral_glass.png', title: 'Gothic Cathedral Stained Glass', category: 'gothic' },
  { src: '/strange/dark_fantasy_painting.png', title: 'Dark Fantasy Oil Painting', category: 'gothic' },
  { src: '/strange/blackletter_heraldic.png', title: 'Blackletter Heraldic Shield', category: 'gothic' },
  { src: '/strange/horror_woodcut.png', title: 'Victorian Horror Woodcut', category: 'gothic' },
  { src: '/strange/occult_sigil.png', title: 'Occult Sigil', category: 'gothic' },
  { src: '/strange/victorian_engraving.png', title: 'Victorian Copper Engraving', category: 'gothic' },
  { src: '/strange/dark_art_nouveau.png', title: 'Dark Art Nouveau', category: 'gothic' },
  { src: '/strange/gargoyle_stone.png', title: 'Gargoyle Stone Carving', category: 'gothic' },
  { src: '/strange/illuminated_manuscript.png', title: 'Illuminated Manuscript', category: 'gothic' },
  { src: '/strange/dark_romanticism.png', title: 'Dark Romanticism', category: 'gothic' },
  { src: '/strange/macabre_botanical.png', title: 'Macabre Botanical', category: 'gothic' },
  { src: '/strange/memento_mori.png', title: 'Memento Mori Still Life', category: 'gothic' },
  { src: '/strange/cemetery_iron.png', title: 'Cemetery Wrought Iron', category: 'gothic' },
  { src: '/strange/grimoire_page.png', title: 'Ancient Grimoire Page', category: 'gothic' },
  { src: '/strange/stygian_portrait.png', title: 'Stygian Dark Portrait', category: 'gothic' },
  // Street & Urban
  { src: '/strange/wildstyle_graffiti.png', title: 'Wildstyle Graffiti', category: 'street' },
  { src: '/strange/wheat_paste_poster.png', title: 'Wheat Paste Poster', category: 'street' },
  { src: '/strange/stencil_street_art.png', title: 'Stencil Street Art', category: 'street' },
  { src: '/strange/throwup_chrome.png', title: 'Chrome Throw-Up', category: 'street' },
  { src: '/strange/urban_mural.png', title: 'Urban Mural', category: 'street' },
  { src: '/strange/90s_hip_hop_flyer.png', title: '90s Hip-Hop Flyer', category: 'street' },
  { src: '/strange/skateboard_deck.png', title: 'Skateboard Deck', category: 'street' },
  { src: '/strange/vinyl_center_label.png', title: 'Vinyl Center Label', category: 'street' },
  { src: '/strange/concert_poster_screenprint.png', title: 'Concert Screen Print', category: 'street' },
  { src: '/strange/boombox_integrated.png', title: 'Boombox Integration', category: 'street' },
  { src: '/strange/subway_mosaic.png', title: 'Subway Tile Mosaic', category: 'street' },
  { src: '/strange/barbed_wire_chain.png', title: 'Barbed Wire & Chain', category: 'street' },
  { src: '/strange/spray_paint_drip.png', title: 'Spray Paint Drip', category: 'street' },
  { src: '/strange/block_letter_mural.png', title: 'Block Letter Mural', category: 'street' },
  { src: '/strange/urban_decay_distressed.png', title: 'Urban Decay', category: 'street' },
  // Tech & Futuristic
  { src: '/strange/neon_cyberpunk.png', title: 'Neon Cyberpunk', category: 'tech' },
  { src: '/strange/glitch_art.png', title: 'Glitch Art', category: 'tech' },
  { src: '/strange/circuit_board.png', title: 'Circuit Board', category: 'tech' },
  { src: '/strange/holographic_foil.png', title: 'Holographic Foil', category: 'tech' },
  { src: '/strange/chrome_3d_render.png', title: '3D Chrome Render', category: 'tech' },
  { src: '/strange/low_poly_geometric.png', title: 'Low Poly Geometric', category: 'tech' },
  { src: '/strange/blueprint_wireframe.png', title: 'Blueprint Wireframe', category: 'tech' },
  { src: '/strange/pixel_art_retro.png', title: 'Retro Pixel Art', category: 'tech' },
  { src: '/strange/vaporwave_aesthetic.png', title: 'Vaporwave', category: 'tech' },
  { src: '/strange/led_display.png', title: 'LED Billboard', category: 'tech' },
  { src: '/strange/matrix_code.png', title: 'Matrix Code Rain', category: 'tech' },
  { src: '/strange/laser_cut.png', title: 'Laser Cut Acrylic', category: 'tech' },
  { src: '/strange/ar_overlay.png', title: 'AR Hologram', category: 'tech' },
  { src: '/strange/generative_algorithm.png', title: 'Generative Algorithm', category: 'tech' },
  { src: '/strange/hud_display.png', title: 'HUD Display', category: 'tech' },
  // Fine Art & Cultural
  { src: '/strange/sumi_e_ink.png', title: 'Japanese Sumi-e Ink', category: 'fineart' },
  { src: '/strange/watercolor_splatter.png', title: 'Watercolor Splatter', category: 'fineart' },
  { src: '/strange/classical_oil.png', title: 'Classical Oil Painting', category: 'fineart' },
  { src: '/strange/art_deco_gold.png', title: 'Art Deco Gold', category: 'fineart' },
  { src: '/strange/psychedelic_60s.png', title: '60s Psychedelic Poster', category: 'fineart' },
  { src: '/strange/constructivist.png', title: 'Russian Constructivist', category: 'fineart' },
  { src: '/strange/ukiyo_e.png', title: 'Ukiyo-e Woodblock', category: 'fineart' },
  { src: '/strange/chinese_papercut.png', title: 'Chinese Paper Cut', category: 'fineart' },
  { src: '/strange/tribal_tattoo.png', title: 'Polynesian Tribal Tattoo', category: 'fineart' },
  { src: '/strange/celtic_knotwork.png', title: 'Celtic Knotwork', category: 'fineart' },
  { src: '/strange/aztec_stone.png', title: 'Aztec Stone Carving', category: 'fineart' },
  { src: '/strange/aboriginal_dots.png', title: 'Aboriginal Dot Painting', category: 'fineart' },
  { src: '/strange/islamic_geometric.png', title: 'Islamic Geometric', category: 'fineart' },
  { src: '/strange/renaissance_fresco.png', title: 'Renaissance Fresco', category: 'fineart' },
  { src: '/strange/warhol_pop_art.png', title: 'Warhol Pop Art', category: 'fineart' },
  // Material & Texture
  { src: '/strange/fire_flames.png', title: 'Fire & Flames', category: 'material' },
  { src: '/strange/ice_frost.png', title: 'Crystalline Ice', category: 'material' },
  { src: '/strange/liquid_mercury.png', title: 'Liquid Mercury', category: 'material' },
  { src: '/strange/smoke_shadow.png', title: 'Smoke & Shadow', category: 'material' },
  { src: '/strange/embossed_leather.png', title: 'Embossed Leather', category: 'material' },
  { src: '/strange/carved_obsidian.png', title: 'Carved Obsidian', category: 'material' },
  { src: '/strange/ruby_encrusted.png', title: 'Ruby & Black Diamond', category: 'material' },
  { src: '/strange/blood_splatter.png', title: 'Blood Splatter', category: 'material' },
  { src: '/strange/lava_magma.png', title: 'Lava & Magma', category: 'material' },
  { src: '/strange/crystal_geode.png', title: 'Crystal Geode', category: 'material' },
  { src: '/strange/brushed_steel.png', title: 'Brushed Steel Industrial', category: 'material' },
  { src: '/strange/carbon_fiber.png', title: 'Carbon Fiber', category: 'material' },
  { src: '/strange/gold_foil_black.png', title: 'Gold Foil on Black', category: 'material' },
  { src: '/strange/neon_tube_sign.png', title: 'Neon Tube Sign', category: 'material' },
  { src: '/strange/concrete_brutalist.png', title: 'Brutalist Concrete', category: 'material' },
];

const skills = [
  { name: 'Photoshop', years: '15+', detail: 'Photo manipulation, compositing, digital painting' },
  { name: 'Illustrator', years: '15+', detail: 'Vector design, logo creation, brand identity' },
  { name: 'InDesign', years: '12+', detail: 'Print layouts, editorial design, brand collateral' },
  { name: 'Blender', years: '18+', detail: '3D modeling, rendering, animation' },
  { name: 'After Effects', years: '10+', detail: 'Motion graphics, visual effects, video compositing' },
  { name: 'DaVinci Resolve', years: '11+', detail: 'Video editing, color grading, post-production' },
];

export default function StrangeMusicPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredDesigns = activeCategory === 'all'
    ? DESIGNS
    : DESIGNS.filter(d => d.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'Satoshi', 'Inter', sans-serif" }}>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/strange/hero-bg.png"
            alt=""
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#1a0000]/60 to-black/80" />
        </div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 40%, #dc2626 0%, transparent 50%), radial-gradient(circle at 70% 60%, #991b1b 0%, transparent 50%)',
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Strange Music logo */}
          <div className="mb-10 flex justify-center">
            <div className="w-28 h-28 relative opacity-80">
              <Image
                src="/strange/snake-bat-original.jpg"
                alt="Strange Music Logo"
                fill
                className="object-contain rounded-full"
                priority
              />
            </div>
          </div>

          <p className="text-red-500 uppercase tracking-[0.3em] text-sm font-semibold mb-6">
            Design Portfolio Submission
          </p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95] tracking-tight"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            <span className="text-white">Winston</span>{' '}
            <span className="text-red-600">Fowlkes</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
            Graphic Designer &amp; Creative Director
          </p>
          <p className="text-base text-gray-500 max-w-xl mx-auto mb-12">
            15+ years across the Adobe Creative Suite, 3D, motion, and digital design.
            <br />
            Strange Music fan since 2003.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="#designs"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-900/30"
            >
              View My Work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:border-white/40 hover:bg-white/5 transition-all"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-red-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* About / Personal Connection */}
      <section id="about" className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-red-500 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
                Not Just a Designer
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                A Strange Music fan since{' '}
                <span className="text-red-600">2003</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I discovered Tech N9ne over two decades ago and Strange Music has been a part of my life ever since.
                  From buying every album to catching shows across Florida, this brand means something to me beyond just the music.
                </p>
                <p>
                  When I saw the post looking for a graphic designer, I knew I had to go all in.
                  I bring 15+ years of professional design experience across the full Adobe Creative Suite &mdash;
                  Photoshop, Illustrator, InDesign &mdash; plus 18 years in Blender for 3D work,
                  After Effects for motion graphics, and DaVinci Resolve for video and color grading.
                </p>
                <p>
                  I understand the Strange Music aesthetic at a deep level &mdash; the snake and bat isn&rsquo;t just a logo,
                  it&rsquo;s the Rod of Asclepius meeting the darkness. Healing through the grind.
                  That philosophy resonates in every piece of work I create.
                </p>
              </div>
            </div>

            {/* Personal photos */}
            <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-red-900/10">
                <Image
                  src="/strange/tech-winston.jpg"
                  alt="Winston Fowlkes with Tech N9ne at 105.5 The Beat Live Lounge"
                  width={800}
                  height={533}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-sm text-gray-300">With Tech N9ne &mdash; 105.5 The Beat Live Lounge, Fort Myers</p>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-red-900/10">
                <Image
                  src="/strange/tech-fort-myers.jpg"
                  alt="Tech N9ne performing - photo by Winston Fowlkes"
                  width={800}
                  height={533}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-sm text-gray-300">Tech N9ne &mdash; photo by Winston Fowlkes</p>
                </div>
              </div>
            </div>
          </div>

          {/* YouTube video */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <p className="text-red-500 uppercase tracking-[0.2em] text-xs font-semibold mb-3">
                From the Crowd
              </p>
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                Tech N9ne Live at Jannus Live, Tampa FL
              </h3>
              <p className="text-gray-500 mt-2">Fan video from the crowd &mdash; circa 2017</p>
            </div>
            <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/RZFjAumA-wc"
                  title="Tech N9ne Live at Jannus Live - Fan Video by Winston Fowlkes"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-24 md:py-32 bg-black border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-500 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
              Professional Background
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              10+ Years as a Remote Contractor
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              I&rsquo;ve spent the last decade working 100% remotely as an independent contractor
              across creative and technical disciplines. I&rsquo;m not just a designer &mdash; I&rsquo;m a
              software engineer and systems architect who happens to have nearly two decades of design experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] text-center">
              <div className="text-3xl font-bold text-red-600 mb-1" style={{ fontFamily: "'Clash Display', sans-serif" }}>10+</div>
              <div className="text-sm text-gray-400">Years Remote Contracting</div>
            </div>
            <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] text-center">
              <div className="text-3xl font-bold text-red-600 mb-1" style={{ fontFamily: "'Clash Display', sans-serif" }}>5.0</div>
              <div className="text-sm text-gray-400">Google Rating (20 Reviews)</div>
            </div>
            <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] text-center">
              <div className="text-3xl font-bold text-red-600 mb-1" style={{ fontFamily: "'Clash Display', sans-serif" }}>100%</div>
              <div className="text-sm text-gray-400">Remote &amp; Self-Directed</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <h3 className="text-white font-semibold mb-2">Graphic Design &amp; Brand Identity</h3>
              <p className="text-sm text-gray-500">
                Logo design, brand systems, print collateral, packaging, merch design, social media
                content, album artwork, event graphics, and visual identity across all media.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <h3 className="text-white font-semibold mb-2">Video &amp; Motion</h3>
              <p className="text-sm text-gray-500">
                Cinematography, video editing, color grading in DaVinci Resolve,
                motion graphics in After Effects, 3D animation in Blender, and full post-production workflows.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <h3 className="text-white font-semibold mb-2">Software Engineering</h3>
              <p className="text-sm text-gray-500">
                Full-stack development, systems architecture, API design, AI integration,
                web applications, and custom tooling. I build the platforms, not just the graphics.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <h3 className="text-white font-semibold mb-2">Marketing &amp; Consulting</h3>
              <p className="text-sm text-gray-500">
                Digital advertising, brand strategy, social media management, analytics,
                and consulting for businesses of all sizes. I see the big picture and execute the details.
              </p>
            </div>
          </div>

          {/* Client Reviews */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <p className="text-red-500 uppercase tracking-[0.2em] text-xs font-semibold mb-3">
                Client Reviews
              </p>
              <p className="text-gray-500 text-sm">
                Perfect 5.0 rating across 20 Google reviews &mdash;{' '}
                <a
                  href="https://share.google/ZZW8DLwVjw0qnrp5v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 underline underline-offset-2 hover:text-red-400 transition-colors"
                >
                  see all reviews
                </a>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <blockquote className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  &ldquo;It doesn&rsquo;t matter what type of project &mdash; from photography, video editing, and digital
                  renders to web design, custom graphics and marketing, Winston is the real deal!
                  His raw talent, attention to detail, professionalism, and enthusiasm for his work is unmatched.&rdquo;
                </p>
                <cite className="text-xs text-gray-600 not-italic">&mdash; Emily DiRoma</cite>
              </blockquote>

              <blockquote className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  &ldquo;Winston can take a poorly described high level concept from us and make it into exactly
                  what we were looking for. From design, brand management, digital advertising, and websites,
                  he&rsquo;s got a great skill set in a wide variety of marketing areas.&rdquo;
                </p>
                <cite className="text-xs text-gray-600 not-italic">&mdash; Rast Bryant</cite>
              </blockquote>

              <blockquote className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  &ldquo;If you&rsquo;re looking for creative services look no further. Like seriously stop.
                  You&rsquo;ve found it. Search over. Winston has an enormous amount of talent and resources
                  to make any creative project come to fruition.&rdquo;
                </p>
                <cite className="text-xs text-gray-600 not-italic">&mdash; Weston Beckwith</cite>
              </blockquote>

              <blockquote className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  &ldquo;Quality of work is off the charts! I have used a few other digital content creation
                  firms before but Winston is speedy, friendly, and delivered exactly what I wanted.
                  Strongly recommend.&rdquo;
                </p>
                <cite className="text-xs text-gray-600 not-italic">&mdash; Wyatt G.</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Skills / Capabilities */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-500 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
              Capabilities
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              Full Creative Suite Proficiency
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-red-600/30 hover:bg-red-600/[0.03] transition-all duration-300"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-red-500 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-red-600 text-sm font-bold">{skill.years} yrs</span>
                </div>
                <p className="text-sm text-gray-500">{skill.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Also experienced with Figma, Lightroom, Audition, XD, and the full range of
              modern design and prototyping tools. Comfortable working independently or
              collaborating with creative teams in fast-paced environments.
            </p>
          </div>
        </div>
      </section>

      {/* AI-Augmented Workflow */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
            <div>
              <p className="text-red-500 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
                The Multiplier
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                AI Is Part of{' '}
                <span className="text-red-600">My Toolkit</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Yes, I use AI. Every one of the 75 logo concepts on this page was generated
                  through AI tools that I directed, prompted, and curated &mdash; in under 10 minutes.
                  That&rsquo;s the point.
                </p>
                <p>
                  AI doesn&rsquo;t replace the 15+ years I&rsquo;ve spent mastering Photoshop, Illustrator,
                  and Blender. It amplifies them. I know what good design looks like because
                  I&rsquo;ve been doing it by hand for almost two decades. AI lets me explore 75 directions
                  in the time it used to take to mock up 3.
                </p>
                <p>
                  I leverage every tool available to get the job done &mdash; that&rsquo;s what I do best.
                  The experience across every discipline is what makes AI useful in my hands.
                  Without the eye, the craft, and the taste, it&rsquo;s just noise.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-red-600/20 bg-red-600/[0.04]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold">Speed Without Sacrifice</h3>
                </div>
                <p className="text-sm text-gray-500">
                  75 unique logo concepts across 5 style categories, generated, curated, and presented
                  on a custom-built page &mdash; all within a single working session. AI lets me
                  move at the speed of ideas.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold">The Eye Still Matters</h3>
                </div>
                <p className="text-sm text-gray-500">
                  AI generates options. Experience decides which ones are worth a damn.
                  Every prompt, every direction, every selection on this page comes from
                  years of knowing what works and what doesn&rsquo;t.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.18A1.001 1.001 0 014.5 17.5V6.5a1 1 0 011.536-.849l5.384 3.18a1 1 0 010 1.698zM15.75 7.5v9m3-9v9" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold">Traditional + AI = Unfair Advantage</h3>
                </div>
                <p className="text-sm text-gray-500">
                  I don&rsquo;t choose between hand-crafted and AI-assisted. I do both.
                  Start in Illustrator, explore with AI, refine in Photoshop, render in Blender,
                  animate in After Effects. Whatever the job needs, I bring it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Gallery */}
      <section id="designs" className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-red-500 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
              Design Showcase
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              Snake &amp; Bat Reimagined
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              75 original interpretations of the Strange Music logo across five distinct creative
              categories &mdash; demonstrating range, versatility, and deep understanding of the brand.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {STYLE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-900/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/[0.06]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          {filteredDesigns.length > 0 ? (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {filteredDesigns.map((design, i) => (
                <div
                  key={design.src}
                  className="break-inside-avoid group relative rounded-xl overflow-hidden border border-white/[0.06] cursor-pointer hover:border-red-600/30 transition-all duration-300"
                  onClick={() => setLightboxImage(design.src)}
                >
                  <img
                    src={design.src}
                    alt={design.title}
                    className="w-full h-auto block"
                    loading={i < 8 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-sm text-white font-medium">{design.title}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 text-gray-600">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-6">
                <svg className="w-8 h-8 text-red-600 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              </div>
              <p className="text-lg font-medium text-gray-400">Designs loading...</p>
              <p className="text-sm text-gray-600 mt-2">75 original variations are being generated</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors cursor-pointer"
            onClick={() => setLightboxImage(null)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightboxImage}
            alt="Design preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA / Contact */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #dc2626 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 relative opacity-60">
              <Image
                src="/strange/snake-bat-original.jpg"
                alt="Strange Music"
                fill
                className="object-contain rounded-full"
              />
            </div>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Let&rsquo;s Build Something{' '}
            <span className="text-red-600">Strange</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            I&rsquo;m ready to bring the same energy and craft to the Strange Music brand
            every day. Whether it&rsquo;s merch, album art, social content, or something
            nobody&rsquo;s thought of yet &mdash; I&rsquo;m all in.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:winston@winstonf.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-900/30"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              winston@winstonf.com
            </a>
            <a
              href="tel:239-271-8495"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              239-271-8495
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-5">
            <a
              href="https://facebook.com/winston.fowlkes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-500 transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/winstonfowlkes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-500 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
          <div className="mt-4 flex justify-center">
            <a
              href="https://winstonf.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-red-500 transition-colors underline underline-offset-2"
            >
              winstonf.com &mdash; Full Portfolio &amp; Services
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#050505] border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Winston Fowlkes
          </p>
          <p className="text-xs text-gray-700">
            Made with passion for Strange Music
          </p>
        </div>
      </footer>
    </div>
  );
}
