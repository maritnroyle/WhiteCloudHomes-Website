import React from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onBookNow: (e: React.MouseEvent) => void;
}

export default function Hero({ onBookNow }: HeroProps) {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/pw/AP1GczNEt-0e3kbjbKrgsOVuFdikYTDKTICsvMMc9HeY1yC3g7O_KYawXQhx-FT2Abw467MZIUfpl7CH7At6NmdPF2QCZLVMWAev6Wgwlm7cZFdL7YYxb2wzV9WwmsXQlow7n_S8NXY-H0u1m5HQp5xd76yX=w1231-h792-s-no?authuser=0"
          alt="Homestay Exterior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center justify-center h-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h2 className="text-white/80 uppercase tracking-[0.3em] text-sm font-semibold mb-6">
            Welcome
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
            Our home is <br /> your home
          </h1>
          <a
            href="#"
            onClick={onBookNow}
            className="inline-block bg-white text-brand-900 px-10 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-brand-50 transition-colors duration-300 shadow-lg"
          >
            Book Now
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <span className="text-white/60 text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-white absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
