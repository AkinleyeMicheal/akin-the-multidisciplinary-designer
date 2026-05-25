// ─────────────────────────────────────────────────────────────
// HeroContent — text layer + profile picture for the hero.
// Single Responsibility: renders only the hero text + CTA + image.
// ─────────────────────────────────────────────────────────────

import { motion } from 'motion/react';
import { GlitchText } from './GlitchText';

export function HeroContent() {
  return (
    <div className="relative z-10 max-w-400 mx-auto w-full flex flex-col items-center">
      {/* Profile picture + Name — responsive layout */}
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-16 mb-8">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="shrink-0"
        >
          <div className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border-2 border-zinc-700/50 shadow-2xl">
            <img
              src="/images/IMG-20260525-WA0002.jpg"
              alt="Emmanuel Akinleye"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tighter text-zinc-100 text-center lg:text-left leading-none"
        >
          <GlitchText text="Emmanuel Akinleye" delay={0.3} />
          <span className="text-[#FF4F00]">.</span>
        </motion.h1>
      </div>

      {/* Meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full flex flex-col md:flex-row justify-between items-start md:items-end text-xs uppercase tracking-widest text-zinc-500 mb-12 gap-4"
      >
        <div className='hidden md:block'>
          <p className="text-zinc-300 mb-1">AKIN</p>
          <p>MULTIDISCIPLINARY DESIGNER</p>
        </div>
        <div className="hidden md:block text-center">
          <p className="text-zinc-300 mb-1">BRAND &amp; LOGO DESIGNER</p>
          <p>NIGERIA — Lagos</p>
        </div>
        <div className="text-right flex flex-col items-end gap-2 hidden md:block">
          <div className="flex items-center gap-4">
            <a
              href="#work"
              className="text-zinc-100 border border-zinc-800 hover:bg-[#FF4F00] hover:border-[#FF4F00] hover:text-white transition-colors duration-300 px-4 py-2 rounded-full"
            >
              View Work
            </a>
          </div>
        </div>
      </motion.div>

      {/* Discipline strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
        className="w-full sm:mt-16 md:mt-24 pt-8 flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-8 text-xs md:text-sm font-medium uppercase tracking-widest text-zinc-400 border-t border-zinc-800/50"
      >
        {['Brand Designer', 'Social Media Marketer', 'No-code Website Designer', 'Resume Writer'].map(
          (label, idx, arr) => (
            <span key={label}>
              {label}
              {idx < arr.length - 1 && (
                <span className="hidden md:inline ml-4 md:ml-8 w-1 h-1 rounded-full bg-[#ff4f00] inline-block" />
              )}
            </span>
          )
        )}
      </motion.div>
    </div>
  );
}
