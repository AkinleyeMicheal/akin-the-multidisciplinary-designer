import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, animate } from 'framer-motion';

const GALLERY_IMAGES = [
  {
    src: '/images/emma-brand-works/3riumf/3riumf (3).png',
    alt: 'logo design',
    label: 'Logo Design',
  },
  {
    src: 'images/emma-brand-works/abby-couture/abby-couture-img (1).png',
    alt: 'brand design',
    label: 'Brand Design',
  },
  {
    src: 'images/emma-brand-works/christ-connect/christ-connect-img (3).png',
    alt: 'mockups',
    label: 'Mockups',
  },
  {
    src: 'images/emma-brand-works/sMMs/smms-design-img (4).png',
    alt: 'Social Media Marketing',
    label: 'Social Media Marketing',
  },
  {
    src: '/images/emma-brand-works/iDiploy/iDiploy-img (6).png',
    alt: 'website design',
    label: 'No-Code Web Design',
  },

];

// Gap between images in px
const GAP = 12;
// The "hero" image takes this fraction of total width
const HERO_FRACTION = 0.60;

export const HorizontalGallery: React.FC = () => {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Which image index is currently "hero" (large)
  const [activeIndex, setActiveIndex] = useState(0);

  // Whether we are "locked" — intercepting wheel events
  const lockedRef   = useRef(false);
  // Debounce flag so one fast wheel burst doesn't skip multiple images
  const cooldownRef = useRef(false);

  const count = GALLERY_IMAGES.length;

  // ── width calculation ──────────────────────────────────────
  // hero image  = HERO_FRACTION of container
  // rest images = equal share of remaining (1 - HERO_FRACTION)
  const getWidths = useCallback((containerW: number) => {
    const heroW = containerW * HERO_FRACTION
      - (GAP * (count - 1) * HERO_FRACTION);               // proportional gap deduction
    const restTotal = containerW - heroW - GAP * (count - 1);
    const restW = restTotal / (count - 1);
    return { heroW, restW };
  }, [count]);

  // ── scroll interception ────────────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      const inView =
        rect.top <= window.innerHeight * 0.5 &&
        rect.bottom >= window.innerHeight * 0.5;

      if (!inView) return;

      const goingDown = e.deltaY > 0;
      const goingUp   = e.deltaY < 0;

      // If at last image scrolling down — release
      if (goingDown && activeIndex >= count - 1) {
        lockedRef.current = false;
        return;
      }
      // If at first image scrolling up — release
      if (goingUp && activeIndex <= 0) {
        lockedRef.current = false;
        return;
      }

      // Otherwise intercept
      if (cooldownRef.current) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      cooldownRef.current = true;
      setTimeout(() => { cooldownRef.current = false; }, 480);

      if (goingDown) setActiveIndex(i => Math.min(i + 1, count - 1));
      if (goingUp)   setActiveIndex(i => Math.max(i - 1, 0));
    };

    // passive: false so we can call preventDefault
    section.addEventListener('wheel', onWheel, { passive: false });
    return () => section.removeEventListener('wheel', onWheel);
  }, [activeIndex, count]);

  // ── touch support ──────────────────────────────────────────
  const touchStartY = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(delta) < 30) return;
    if (delta > 0) setActiveIndex(i => Math.min(i + 1, count - 1));
    else            setActiveIndex(i => Math.max(i - 1, 0));
  };

  return (
    <div
      ref={sectionRef}
      className="w-full px-4 md:px-8 py-12 overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Track */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: 'clamp(260px, 42vw, 620px)' }}
      >
        <div className="absolute inset-0 flex" style={{ gap: GAP }}>
          {GALLERY_IMAGES.map((img, idx) => {
            const isHero = idx === activeIndex;

            return (
              <motion.div
                key={idx}
                layout
                layoutId={`gallery-${idx}`}
                animate={{
                  flex: isHero ? HERO_FRACTION : (1 - HERO_FRACTION) / (count - 1),
                }}
                transition={{
                  layout:  { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
                  flex:    { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
                }}
                className="relative rounded-2xl overflow-hidden cursor-pointer shrink-0 h-full"
                style={{ minWidth: 0 }}
                onClick={() => setActiveIndex(idx)}
              >
                {/* Image with subtle ken-burns on active */}
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{
                    scale:   isHero ? 1.04 : 1.0,
                    opacity: isHero ? 0.85 : 0.45,
                    filter:  isHero ? 'grayscale(0%)' : 'grayscale(80%)',
                  }}
                  transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                />

                {/* Dark scrim on non-hero */}
                <motion.div
                  className="absolute inset-0 bg-[#050505]"
                  animate={{ opacity: isHero ? 0 : 0.35 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Label — only visible when hero */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 px-5 pb-5 flex items-end justify-between"
                  animate={{ opacity: isHero ? 1 : 0, y: isHero ? 0 : 8 }}
                  transition={{ duration: 0.4, delay: isHero ? 0.2 : 0 }}
                >
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-300">
                    {img.label}
                  </span>
                  <span className="text-[10px] text-zinc-500 tabular-nums">
                    {String(idx + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
                  </span>
                </motion.div>

                {/* Thin orange accent line on active */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#FF4F00] origin-left"
                  animate={{ scaleX: isHero ? 1 : 0, opacity: isHero ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: isHero ? 0.15 : 0 }}
                  style={{ width: '100%' }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Dot nav */}
      <div className="flex justify-center items-center gap-2 mt-5">
        {GALLERY_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            aria-label={`View image ${idx + 1}`}
            className="focus:outline-none"
          >
            <motion.div
              animate={{
                width:           activeIndex === idx ? 20 : 6,
                backgroundColor: activeIndex === idx ? '#FF4F00' : 'rgba(161,161,170,0.4)',
              }}
              transition={{ duration: 0.3 }}
              className="h-0.75 rounded-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
};