'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ARTISTS', href: '/artists' },
    { name: 'EVENTS', href: '/events' },
    { name: 'MERCH', href: '/merch' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled 
          ? 'bg-flowcore-black/90 backdrop-blur-md border-b border-silver/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/flowcore-logo.png"
                alt="Flowcore"
                width={35}
                height={35}
                className="transition-all duration-300 group-hover:animate-pulse filter brightness-0 invert"
              />
              <div className="absolute inset-0 bg-pure-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full blur-lg"></div>
            </div>
            <span className="ml-2 text-lg font-orbitron font-bold text-pure-white">
              FC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative group text-pure-white hover:text-light-text transition-colors duration-300 font-cs-felice text-sm tracking-cs-wider"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-silver group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-shadow-mono"></span>
                </Link>
              </motion.div>
            ))}
            
            {/* Cart Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              onClick={() => setIsCartOpen(true)}
              className="relative group p-2 text-pure-white hover:text-light-text transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 5M7 13l-1.5 5m0 0h9.5M6 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-pure-white text-flowcore-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-cs-felice badge-pulse">
                  {getTotalItems()}
                </span>
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1 group"
          >
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 8 : 0,
              }}
              className="w-6 h-0.5 bg-pure-white transition-all duration-300 group-hover:bg-light-text"
            />
            <motion.span
              animate={{
                opacity: isOpen ? 0 : 1,
              }}
              className="w-6 h-0.5 bg-pure-white transition-all duration-300 group-hover:bg-light-text"
            />
            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -8 : 0,
              }}
              className="w-6 h-0.5 bg-pure-white transition-all duration-300 group-hover:bg-light-text"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="bg-flowcore-black/95 backdrop-blur-md rounded-lg border border-silver/20 p-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-pure-white hover:text-light-text transition-colors duration-300 font-cs-felice tracking-cs-wider border-b border-silver/10 last:border-b-0"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation; 