'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const footerLinks = {
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  services: [
    { href: '/services#visual', label: 'Visual & Brand' },
    { href: '/services#marketing', label: 'Marketing & Growth' },
    { href: '/services#software', label: 'Web & Software' },
    { href: '/services#consulting', label: 'Consulting' },
  ],
  social: [
    { href: 'https://instagram.com/winstonfowlkes', label: 'Instagram', icon: 'IG' },
    { href: 'https://youtube.com/channel/UCVTOJiDAZvz1tCn1J1r9e0g', label: 'YouTube', icon: 'YT' },
    { href: 'https://facebook.com/winstonfowlkescreative', label: 'Facebook', icon: 'FB' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0a]">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Main Footer Content */}
        <div className="py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Image
              src="/Winston_Logo_Light.png"
              alt="Winston Fowlkes"
              width={160}
              height={44}
              className="h-10 w-auto mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-body">
              Design, build, and automate modern digital systems that actually scale.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-card flex items-center justify-center text-gray-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/30 transition-all duration-300 text-xs font-display font-semibold"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#00f0ff] transition-colors text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#00f0ff] transition-colors text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:winston@winstonfowlkes.com"
                  className="text-gray-400 hover:text-[#00f0ff] transition-colors text-sm font-body"
                >
                  winston@winstonfowlkes.com
                </a>
              </li>
              <li>
                <a
                  href="tel:239-271-8495"
                  className="text-gray-400 hover:text-[#00f0ff] transition-colors text-sm font-body"
                >
                  239-271-8495
                </a>
              </li>
              <li className="text-gray-400 text-sm font-body">
                Jacksonville, FL
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-body">
            &copy; {new Date().getFullYear()} Winston Fowlkes. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] pulse-glow" />
            <span className="font-body">Systems Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
