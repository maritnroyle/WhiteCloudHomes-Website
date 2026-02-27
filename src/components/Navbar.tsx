import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onBookNow: (e: React.MouseEvent) => void;
}

export default function Navbar({ onBookNow }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Overview', href: '#overview' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-widest font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-600 hover:text-brand-600'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              onClick={onBookNow}
              className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
                isScrolled
                  ? 'bg-brand-800 text-white hover:bg-brand-900'
                  : 'bg-white text-brand-900 hover:bg-gray-100'
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-900 border-b border-gray-100 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  onBookNow(e);
                }}
                className="block w-full text-center px-6 py-4 text-base font-semibold text-white bg-brand-800 uppercase tracking-wider"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
