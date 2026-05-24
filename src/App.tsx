/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * App.tsx — root orchestrator only. No data, no business logic.
 */

import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight, Menu, Quote,
  ArrowLeft, ArrowRight, ArrowUp, XCircle,
  Phone, Award, ExternalLink,
} from 'lucide-react';

// ── Components ────────────────────────────────────────────────
import { HeroContent }   from './components/HeroContent';
import { WorkModal }     from './components/WorkModal';
import { BTSModal }      from './components/BTSModal';
import { ContactForm }   from './components/ContactForm';
import { HorizontalGallery } from './components/HorizontalGallery';

// ── Hooks ─────────────────────────────────────────────────────
import {
  useScrolled, useBodyLock, useEscapeKey,
  useDragScroll, useBTSCarousel,
  useTestimonial, useWorkModal,
} from '../hooks';

// ── Data ──────────────────────────────────────────────────────
import {
  PROJECTS, BTS_DATA, TESTIMONIALS,
  CLIENT_TABS, NAV_LINKS, SERVICES,
  GRAPHICS_SHOWCASE, TOOLS, CERTIFICATIONS,
  BEYOND_DESIGN, SOCIAL_LINKS,
} from '../data';

// ── React Icons ───────────────────────────────────────────────
import { DiPhotoshop, DiIllustrator } from 'react-icons/di';
import { SiFigma, SiCanva, SiPinterest, SiX, SiBehance } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import type { IconType } from 'react-icons';

const TOOL_ICONS: Record<string, IconType> = {
  adobephotoshop: DiPhotoshop,
  adobeillustrator: DiIllustrator,
  figma: SiFigma,
  canva: SiCanva,
  pinterest: SiPinterest,
};

const SOCIAL_ICONS: Record<string, IconType> = {
  linkedin: FaLinkedin,
  behance: SiBehance,
  x: SiX,
};

// ─────────────────────────────────────────────────────────────

export default function App() {

  // ── UI ────────────────────────────────────────────────────
  const isScrolled  = useScrolled(50);
  const [menuOpen, setMenuOpen] = useState(false);

  // ── Testimonials ──────────────────────────────────────────
  const {
    activeClient,
    opacity: testimonialOpacity,
    change:  changeTestimonial,
  } = useTestimonial('rendezvous');

  // ── Work modal ────────────────────────────────────────────
  const workModal = useWorkModal(PROJECTS.length);

  // ── BTS / Graphics modal ──────────────────────────────────
  const [btsModalOpen,    setBtsModalOpen]    = useState(false);
  const [currentBtsIndex, setCurrentBtsIndex] = useState(0);

  const openBtsModal = (idx: number) => {
    setCurrentBtsIndex(idx);
    setBtsModalOpen(true);
  };

  // ── Scroll carousels ──────────────────────────────────────
  const bts        = useBTSCarousel();
  const clientsRef = useRef<HTMLDivElement>(null);
  const btsDrag    = useDragScroll(bts.ref);
  const clientsDrag = useDragScroll(clientsRef);

  // ── Global side-effects ───────────────────────────────────
  useBodyLock(menuOpen, workModal.open, btsModalOpen);
  useEscapeKey(() => { workModal.close(); setBtsModalOpen(false); });

  // ─────────────────────────────────────────────────────────
  return (
    <div className="bg-[#050505] text-zinc-300 font-sans antialiased selection:bg-zinc-800 selection:text-zinc-100 overflow-x-hidden min-h-screen">

      {/* ══════════════════════════════════════════
          NAV
      ══════════════════════════════════════════ */}
      <nav className={`fixed w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center text-xs transition-all duration-300 font-raleway ${
        isScrolled
          ? 'top-0 backdrop-blur-md bg-[#050505]/90 border-b border-zinc-900 py-4'
          : 'top-4 md:top-6 mix-blend-difference'
      }`}>
        <a href="#" className="z-50 relative block">
          <img src='/images/emma-brand-works/Artboard 1.svg' alt="Logo" className="h-8 md:h-14 w-auto brightness-0 invert" />
        </a>

        <div className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-[#FF4F00] transition-colors duration-300">{label}</a>
          ))}
        </div>

        <div className="flex items-center space-x-8 z-50 relative">
          <span className="hidden lg:inline text-zinc-500">Lagos/Nigeria {'{WAT}'}</span>
          <a href="#contact" className="hidden md:flex items-center gap-1 hover:text-[#FF4F00] transition-colors duration-300">
            <Phone size={14} strokeWidth={1.5} /><span>Contact</span>
          </a>
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden text-zinc-100 hover:text-zinc-400 transition-colors focus:outline-none flex items-center p-2 -mr-2 rounded-full bg-transparent hover:bg-zinc-900/50"
            aria-label="Toggle menu"
          >
            {menuOpen ? <XCircle size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* ══════════════════════════════════════════
          MOBILE MENU
      ══════════════════════════════════════════ */}
      <div className={`fixed inset-0 bg-[#050505]/98 backdrop-blur-2xl z-40 flex-col justify-center items-center transition-opacity duration-300 ${
        menuOpen ? 'flex opacity-100' : 'hidden opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center space-y-6 text-2xl font-light tracking-tight text-zinc-300 w-full px-8">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}
              className="w-full text-center py-4 hover:text-[#FF4F00] transition-colors duration-300 border-b border-zinc-900/50">
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            className="w-full justify-center hover:text-[#FF4F00] transition-colors duration-300 flex items-center gap-2 mt-4 pt-4 text-lg">
            Contact <ArrowUpRight size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>


      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <header className="relative pt-40 pb-20 px-6 md:px-12 w-full flex flex-col items-center justify-center min-h-[90vh] overflow-hidden">
        {/* Gradient overlay for text legibility over Unicorn Studio bg */}
        <div className="absolute inset-0 bg-linear-to-b from-[#050505]/80 via-[#050505]/40 to-[#050505] pointer-events-none z-0" />
        <HeroContent />
      </header>

      {/* ══════════════════════════════════════════
          ABOUT (without services — moved to standalone)
      ══════════════════════════════════════════ */}
      <section id="about" className="py-16 px-6 md:px-12 max-w-400 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-3 flex lg:justify-start">
            <span className="text-xs text-[#FF4F00] uppercase font-mono">% Who is AKIN?</span>
          </div>
          <div className="lg:col-span-9 font-raleway">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extralight tracking-tight text-zinc-100 leading-tight max-w-5xl"
            >
              Operating under the moniker{' '}
              <span className="text-zinc-100 font-normal relative inline-block">
                <span className="relative z-10">Akin</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                  className="absolute bottom-2 left-0 w-full h-3 bg-[#FF4F00]/40 z-0 -rotate-1 origin-left"
                />
              </span>
              , Emmanuel Akinleye is a Multi-disciplinary Designer crafting high-end visual identities
              known for a <span className="italic text-zinc-300">detailed and creative approach</span> and meticulous
              attention to detail, he transforms concepts into striking, immersive experiences for brands across Africa and beyond.
            </motion.h2>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES (standalone section)
      ══════════════════════════════════════════ */}
      <section id="services" className="py-16 px-6 md:px-12 max-w-400 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-12">
          <div className="lg:col-span-3 flex lg:justify-start">
            <span className="text-xs text-[#FF4F00] uppercase font-mono">% What I do</span>
          </div>
          <div className="lg:col-span-9 font-sans">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-extralight tracking-tighter text-zinc-100"
            >
              Services<span className="text-[#FF4F00]">.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-3" />
          <div className="lg:col-span-9 flex flex-col">
            {SERVICES.map(({ title, body, delay }, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay }}
                className={`grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t ${
                  i === SERVICES.length - 1 ? 'border-b' : ''
                } border-zinc-900 hover:bg-zinc-900/20 transition-colors duration-300 px-4 -mx-4 rounded-lg`}
              >
                <h3 className="text-xl tracking-tight text-zinc-100 font-light font-raleway">{title}</h3>
                <p className="md:col-span-2 text-sm text-zinc-400 font-light leading-relaxed font-raleway">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop only — horizontal scroll gallery */}
      <div className="hidden lg:block">
        <HorizontalGallery />
      </div>


      {/* ══════════════════════════════════════════
          SELECTED WORK
      ══════════════════════════════════════════ */}
      <section id="work" className="py-16 px-6 md:px-12 max-w-400 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-12">
          <div className="lg:col-span-3 flex lg:justify-start">
            <span className="text-xs text-[#FF4F00] uppercase font-mono">% What has been done?</span>
          </div>
          <div className="lg:col-span-9 font-sans">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-extralight tracking-tighter text-zinc-100/90"
            >
              Selected Work<span className="text-[#FF4F00]">.</span>
            </motion.h2>
          </div>
        </div>

        <div className="flex flex-col border-t border-zinc-900">
          {PROJECTS.slice(0, 3).map((proj, idx) => (
            <motion.div key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-full group relative flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-zinc-900 hover:bg-zinc-900/20 transition-colors px-4 -mx-4"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 z-10">
                <h3 className="text-4xl md:text-5xl font-raleway font-extralight tracking-tighter text-zinc-100 group-hover:text-[#FF4F00] transition-colors duration-300">{proj.title}</h3>
                <span className="text-xs text-zinc-500 uppercase tracking-widest">{proj.category}</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mt-4 md:mt-0 z-10">
                <span className="text-xs text-zinc-500">{proj.year}</span>
                <span className="text-xs text-zinc-500 hidden md:block">{proj.role}</span>
                <button
                  onClick={() => workModal.openDetail(idx)}
                  className="text-xs uppercase tracking-widest text-zinc-100 border border-zinc-700 px-4 py-2 rounded-full hover:bg-[#FF4F00] hover:border-[#FF4F00] hover:text-white transition-all duration-300 focus:outline-none cursor-pointer whitespace-nowrap"
                >
                  View Details
                </button>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-100 aspect-video rounded-lg overflow-hidden opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-none z-0 hidden lg:block shadow-2xl">
                <img src={proj.cover} alt={proj.title} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <button onClick={workModal.openGrid}
            className="text-xs font-raleway font-semibold opacity-90 uppercase tracking-widest text-zinc-100 border-b border-zinc-700 pb-1 hover:text-[#FF4F00] hover:border-[#FF4F00] transition-colors duration-300 focus:outline-none cursor-pointer">
            View All Works
          </button>
        </motion.div>
      </section>

            {/* ══════════════════════════════════════════
          GRAPHICS SHOWCASE (formerly BTS)
      ══════════════════════════════════════════ */}
      <section id="graphics" className="py-16 px-6 md:px-12 max-w-400 mx-auto overflow-hidden relative group/section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-12">
          <div className="lg:col-span-3 flex lg:justify-start">
            <span className="text-xs text-[#FF4F00] uppercase font-mono">% Visual explorations</span>
          </div>
          <div className="lg:col-span-9 font-sans">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-extralight tracking-tighter text-zinc-100"
            >
              Graphics Showcase<span className="text-[#FF4F00]">.</span>
            </motion.h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full group/carousel"
        >
          {[-1, 1].map(dir => (
            <button key={dir} onClick={() => bts.scrollBy(dir)} aria-label={dir === -1 ? 'Previous' : 'Next'}
              className={`absolute ${dir === -1 ? 'left-2 md:left-6' : 'right-2 md:right-6'} top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-zinc-700/50 bg-[#050505]/60 backdrop-blur-md flex items-center justify-center text-zinc-300 hover:text-[#FF4F00] hover:border-[#FF4F00] hover:bg-zinc-900 transition-all duration-300 focus:outline-none shadow-2xl opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100`}
            >
              {dir === -1 ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </button>
          ))}

          <div ref={bts.ref} onScroll={bts.onScroll}
            className="flex overflow-x-auto gap-6 md:gap-8 pb-12 pt-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:-mx-12 md:px-12 cursor-grab"
            {...btsDrag}
          >
            {GRAPHICS_SHOWCASE.map((item, idx) => (
              <div key={idx}
                className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[30vw] snap-center group block"
              >
                <div className="aspect-4/5 rounded-xl overflow-hidden mb-4 relative bg-zinc-900">
                  <img src={item.img} alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" />
                </div>
                {/* <div className="flex justify-between items-center text-xs font-medium tracking-wider text-zinc-100">
                  <span className="font-sans uppercase">{item.title}</span>
                  <span className="text-zinc-500 font-raleway">{item.category}</span>
                </div> */}
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-3 mt-2 mb-2">
            {GRAPHICS_SHOWCASE.map((_, idx) => (
              <button key={idx} aria-label={`Go to graphics item ${idx + 1}`} onClick={() => bts.scrollTo(idx)}
                className={`rounded-full transition-all duration-300 focus:outline-none hover:scale-150 ${
                  bts.activeDot === idx
                    ? 'w-3 h-3 bg-zinc-100 shadow-[0_0_12px_rgba(255,255,255,0.6)]'
                    : 'w-2 h-2 bg-zinc-700 hover:bg-zinc-500'
                }`} />
            ))}
          </div>
        </motion.div>
      </section>


      {/* ══════════════════════════════════════════
          TOOLS
      ══════════════════════════════════════════ */}
      <section id="tools" className="py-16 px-6 md:px-12 max-w-400 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-12">
          <div className="lg:col-span-3 flex lg:justify-start">
            <span className="text-xs text-[#FF4F00] uppercase font-mono">% Tools of the trade</span>
          </div>
          <div className="lg:col-span-9 font-sans">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-extralight tracking-tighter text-zinc-100"
            >
              My Toolkit<span className="text-[#FF4F00]">.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-3" />
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12">
              {TOOLS.map((tool, idx) => {
                const icon = TOOL_ICONS[tool.slug];
                return (
                  <motion.div
                    key={tool.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col items-center gap-4 group"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/30 group-hover:border-zinc-600 group-hover:bg-zinc-900/60 transition-all duration-300">
                      {icon && (
                        (() => {
                          const Icon = icon;
                          return <Icon className="w-8 h-8 md:w-10 md:h-10 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100 text-zinc-300 group-hover:text-zinc-100" />;
                        })()
                      )}
                    </div>
                    <span className="text-[10px] md:text-xs text-zinc-500 group-hover:text-zinc-300 uppercase tracking-wider text-center transition-colors duration-300 font-medium">
                      {tool.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>





      {/* ══════════════════════════════════════════
          BEYOND DESIGN
      ══════════════════════════════════════════ */}
      <section id="beyond" className="py-16 px-6 md:px-12 max-w-400 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-12">
          <div className="lg:col-span-3 flex lg:justify-start">
            <span className="text-xs text-[#FF4F00] uppercase font-mono">% More than design</span>
          </div>
          <div className="lg:col-span-9 font-sans">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-extralight tracking-tighter text-zinc-100"
            >
              Beyond Design<span className="text-[#FF4F00]">.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-3" />
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {BEYOND_DESIGN.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300"
                >
                  <h3 className="text-lg font-light text-zinc-100 mb-2 font-raleway">{item.title}</h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CERTIFICATIONS
      ══════════════════════════════════════════ */}
      <section id="certifications" className="py-16 px-6 md:px-12 max-w-400 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-12">
          <div className="lg:col-span-3 flex lg:justify-start">
            <span className="text-xs text-[#FF4F00] uppercase font-mono">% Credentials</span>
          </div>
          <div className="lg:col-span-9 font-sans">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-extralight tracking-tighter text-zinc-100"
            >
              Certifications<span className="text-[#FF4F00]">.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-3" />
          <div className="lg:col-span-9 flex flex-col">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col sm:flex-row sm:items-center justify-between py-6 border-t ${
                  idx === CERTIFICATIONS.length - 1 ? 'border-b' : ''
                } border-zinc-900 hover:bg-zinc-900/20 transition-colors duration-300 px-4 -mx-4 rounded-lg gap-4`}
              >
                <div className="flex items-start gap-4">
                  <Award size={20} className="text-[#FF4F00]/60 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg font-light text-zinc-100 font-raleway">{cert.title}</h3>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">{cert.issuer} · {cert.year}</p>
                  </div>
                </div>
                {cert.credentialUrl && cert.credentialUrl !== '#' && (
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-zinc-400 hover:text-[#FF4F00] transition-colors duration-300 flex items-center gap-1 shrink-0">
                    View <ExternalLink size={12} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          SELECT CLIENTS
      ══════════════════════════════════════════ */}
      <section id="clients" className="py-16 px-6 md:px-12 max-w-400 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-12">
          <div className="lg:col-span-3 flex lg:justify-start">
            <span className="text-xs text-[#FF4F00] uppercase font-mono">% just a few of those clients...</span>
          </div>
          <div className="lg:col-span-9 font-sans">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-extralight tracking-tighter text-zinc-100"
            >
              Select Brands<span className="text-[#FF4F00]">.</span>
            </motion.h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          <div className="lg:col-span-2" />
          <div className="lg:col-span-10 flex flex-col gap-12 md:gap-16">
            <div ref={clientsRef}
              className="w-full flex overflow-x-auto scrollbar-hide gap-3 pb-6 snap-x border-b border-zinc-900 cursor-grab"
              {...clientsDrag}
            >
              {CLIENT_TABS.map(({ id, label, className }) => (
                <button key={id} onClick={() => changeTestimonial(id)}
                  className={`snap-start shrink-0 px-6 py-3 rounded-full border transition-all duration-300 focus:outline-none ${
                    activeClient === id
                      ? 'text-white border-[#FF4F00] bg-[#FF4F00]/10'
                      : 'border-zinc-800 text-zinc-500 bg-transparent hover:text-zinc-100 hover:border-zinc-500'
                  }`}
                >
                  <span className={`text-sm md:text-base uppercase ${className}`}>{label}</span>
                </button>
              ))}
            </div>

            <div className="border-l border-zinc-800 pl-6 md:pl-16 lg:pl-20 py-2">
              <div className="flex flex-col gap-6 transition-opacity duration-300" style={{ opacity: testimonialOpacity }}>
                <Quote size={32} className="text-[#ff4f00]/40" />
                <p className="text-2xl md:text-3xl lg:text-4xl font-raleway font-extralight leading-relaxed text-zinc-200">
                  {TESTIMONIALS[activeClient as keyof typeof TESTIMONIALS].text}
                </p>
                <div className="flex flex-col mt-4">
                  <span className="text-sm font-medium text-zinc-100 font-clash -tracking-tight">
                    {TESTIMONIALS[activeClient as keyof typeof TESTIMONIALS].name}
                  </span>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider mt-1">
                    {TESTIMONIALS[activeClient as keyof typeof TESTIMONIALS].role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>


      {/* ══════════════════════════════════════════
          BOOKINGS / CONTACT
      ══════════════════════════════════════════ */}
      <section id="contact" className="py-16 px-6 md:px-12 max-w-400 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-12">
          <div className="lg:col-span-3 flex lg:justify-start">
            <span className="text-xs text-[#FF4F00] uppercase font-mono">% you can always reach out</span>
          </div>
          <div className="lg:col-span-9 font-sans">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-extralight tracking-tighter text-zinc-100"
            >
              Bookings<span className="text-[#FF4F00]">.</span>
            </motion.h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          <div className="lg:col-span-2" />
          <ContactForm />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="pt-20 pb-8 px-6 md:px-12 w-full flex flex-col items-center overflow-hidden relative">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end text-xs uppercase tracking-widest text-zinc-500 mb-20 gap-8 max-w-400 mx-auto">
          <div>
            <p className="text-zinc-300 mb-1">Emmanuel Akinleye</p>
            <p>Multi-disciplinary Designer</p>
          </div>
          <div className="text-left sm:text-center">
            <p className="text-zinc-300 mb-1">Operating out of</p>
            <p>Nigeria — Lagos</p>
          </div>
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => {
              const icon = SOCIAL_ICONS[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#FF4F00] hover:border-[#FF4F00] transition-all duration-300"
                >
                  {icon && (
                    (() => {
                      const Icon = icon;
                      return <Icon className="w-4 h-4" />;
                    })()
                  )}
                </a>
              );
            })}
          </div>
        </div>

        {/* AKIN + gradient overlay wrapper */}
        <div className="relative w-full mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[18vw] leading-[0.8] font-clash tracking-wide text-zinc-100/70 opacity-20 text-center uppercase select-none w-full"
          >
            AKIN
          </motion.h1>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />
        </div>

        <div className="w-full max-w-400 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-wider font-raleway">
          <span className="text-zinc-100/80">Crafted by{" "}
            <span>
              <a href="https://linkedin.com/micheal-akinleye" className="cursor-pointer underline text-[#ff4f00]/80">Micheal Akinleye</a>
            </span>
          </span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-zinc-500 hover:text-[#FF4F00] transition-colors duration-300 flex items-center gap-1 focus:outline-none">
            Back to top <ArrowUp size={14} />
          </button>
          <span className="text-zinc-500">&copy; {new Date().getFullYear()} All Rights Reserved</span>
        </div>
      </footer>

      {/* ══════════════════════════════════════════
          MODALS
      ══════════════════════════════════════════ */}
      <WorkModal
        open={workModal.open}
        view={workModal.view}
        projects={PROJECTS}
        currentIndex={workModal.projectIndex}
        onClose={workModal.close}
        onSetView={workModal.setView}
        onOpenDetail={workModal.openDetail}
        onNavigate={workModal.navigate}
      />

      <BTSModal
        open={btsModalOpen}
        items={BTS_DATA}
        currentIndex={currentBtsIndex}
        onClose={() => setBtsModalOpen(false)}
      />
    </div>
  );
}
