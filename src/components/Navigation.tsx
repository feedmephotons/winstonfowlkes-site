'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 lg:px-16 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/Winston_Logo_Light.png"
              alt="Winston Fowlkes"
              width={180}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary text-sm px-6 py-3"
            >
              Book a Consult
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white origin-center"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white origin-center"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#111111] border-l border-white/5 flex flex-col justify-center px-8"
            >
              <div className="space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block font-display text-3xl font-semibold text-white hover:text-gray-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary inline-block text-center w-full"
                  >
                    Book a Consult
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
