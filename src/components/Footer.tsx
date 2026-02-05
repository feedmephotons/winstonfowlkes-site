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
    <footer className="border-t border-white/5 bg-black pt-16 pb-8">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/Winston_Logo_Light.png"
                alt="Winston Fowlkes"
                width={140}
                height={38}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-grey-400 text-sm leading-relaxed mb-6 max-w-sm">
              Design, build, and automate modern digital systems that actually scale.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-grey-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-xs font-display font-bold"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer (Desktop) */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-grey-400 hover:text-accent transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-grey-400 hover:text-accent transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:winston@winstonfowlkes.com"
                  className="text-grey-400 hover:text-white transition-colors text-sm font-medium block"
                >
                  winston@winstonfowlkes.com
                </a>
              </li>
              <li>
                <a
                  href="tel:239-271-8495"
                  className="text-grey-400 hover:text-white transition-colors text-sm font-medium block"
                >
                  239-271-8495
                </a>
              </li>
              <li className="text-grey-500 text-sm mt-4">
                Jacksonville, FL
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-grey-600 text-sm">
            &copy; {new Date().getFullYear()} Winston Fowlkes. All rights reserved.
          </p>
          <div className="flex gap-6">
             <Link href="/privacy" className="text-grey-600 hover:text-grey-400 text-sm transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="text-grey-600 hover:text-grey-400 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
