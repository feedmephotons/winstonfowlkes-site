'use client';

import Link from 'next/link';
import Image from 'next/image';

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
      <div className="container mx-auto px-6 lg:px-16 relative">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Image
              src="/Winston_Logo_Light.png"
              alt="Winston Fowlkes"
              width={160}
              height={44}
              className="h-10 w-auto mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Design, build, and automate modern digital systems that actually scale.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#222] transition-all duration-200 text-xs font-display font-semibold"
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
                    className="text-gray-400 hover:text-white transition-colors text-sm"
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
                    className="text-gray-400 hover:text-white transition-colors text-sm"
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
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  winston@winstonfowlkes.com
                </a>
              </li>
              <li>
                <a
                  href="tel:239-271-8495"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  239-271-8495
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                Jacksonville, FL
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Winston Fowlkes. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Jacksonville, FL
          </p>
        </div>
      </div>
    </footer>
  );
}
