import React from 'react';
import { motion } from 'motion/react';
import { BRIDE_NAME, GROOM_NAME } from '../config';

interface HeroProps {
  event?: string | null;
  inviteeName?: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const Mandala = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="#b89645" strokeWidth="0.6">
    <circle cx="100" cy="100" r="96" />
    <circle cx="100" cy="100" r="88" strokeDasharray="2 3" />
    <circle cx="100" cy="100" r="30" />
    <circle cx="100" cy="100" r="18" />
    {Array.from({ length: 16 }).map((_, i) => (
      <g key={i} transform={`rotate(${i * 22.5} 100 100)`}>
        <path d="M100 30 C112 48 112 62 100 70 C88 62 88 48 100 30 Z" />
        <path d="M100 12 C106 20 106 26 100 30 C94 26 94 20 100 12 Z" />
        <circle cx="100" cy="76" r="2" />
      </g>
    ))}
  </svg>
);

const Pearl = ({ className }: { className: string }) => (
  <motion.div
    animate={{ y: [0, -14, 0], x: [0, 6, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    className={`absolute rounded-full bg-gradient-to-br from-white via-stone-100 to-stone-200 shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.1),2px_2px_10px_rgba(0,0,0,0.05)] ${className}`}
  />
);

/** Gold flourish line used either side of the ampersand. */
const Flourish = ({ flip = false }: { flip?: boolean }) => (
  <svg
    viewBox="0 0 80 14"
    className={`w-14 sm:w-20 h-3.5 text-brand-plum ${flip ? '-scale-x-100' : ''}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="0.8"
    strokeLinecap="round"
  >
    <path d="M2 7 H46 C54 7 57 2 62 2 C67 2 68 7 64 9 C60 11 58 7 62 6" />
    <path d="M30 7 C36 10 40 11 44 9" opacity="0.6" />
    <circle cx="76" cy="7" r="1.6" fill="currentColor" stroke="none" />
  </svg>
);

/** Monogram seal with a slowly turning dashed ring. */
const Monogram = () => (
  <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
    <motion.svg
      viewBox="0 0 100 100"
      className="absolute inset-0 w-full h-full text-brand-plum"
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
    >
      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1.5 3.5" />
    </motion.svg>
    <div className="absolute inset-[12%] rounded-full border border-brand-plum/50 bg-white/70 shadow-[0_6px_20px_rgba(184,150,69,0.15)]" />
    <div className="absolute inset-[17%] rounded-full border-[0.5px] border-brand-plum/25" />
    <span className="relative flex items-center gap-1.5 font-['Cinzel'] text-xl sm:text-2xl text-[#8a6d2f] leading-none">
      {BRIDE_NAME[0]}
      <span className="w-1 h-1 rotate-45 bg-brand-plum" />
      {GROOM_NAME[0]}
    </span>
  </div>
);

export const Hero: React.FC<HeroProps> = () => {
  const scrollDown = () => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });

  return (
    <section className="min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 pt-8 pb-6 md:px-12 md:py-10 relative overflow-hidden bg-gradient-to-b from-[#fdfbf7] via-white to-[#fdfbf7]">
      {/* Watermark background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/ChatGPT Image Jul 5, 2026, 02_20_06 AM.png"
          alt=""
          className="w-full h-full object-cover opacity-20 mix-blend-multiply"
        />
      </div>

      {/* Soft peach and gold glows */}
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-brand-lavender/25 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-32 w-[30rem] h-[30rem] rounded-full bg-[#ecd9b0]/30 blur-[110px] pointer-events-none" />

      {/* Slowly rotating mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] max-w-[620px] max-h-[620px] pointer-events-none z-0 opacity-[0.12] md:opacity-[0.15]">
        <motion.div
          className="w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <Mandala />
        </motion.div>
      </div>

      {/* Floating pearls */}
      <div className="absolute inset-0 pointer-events-none z-[5]">
        <Pearl className="top-[14%] left-[9%] w-6 h-6 opacity-60" />
        <Pearl className="bottom-[22%] right-[10%] w-4 h-4 opacity-40" />
        <Pearl className="top-[58%] left-[6%] w-3 h-3 opacity-30" />
        <Pearl className="top-[24%] right-[14%] w-3 h-3 opacity-40" />
      </div>

      {/* Arch card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, ease: EASE }}
        className="relative z-10 w-full max-w-[420px] h-[78dvh] min-h-[520px] max-h-[740px]"
      >
        {/* Outer arch with glass fill */}
        <div className="absolute inset-0 rounded-t-[210px] rounded-b-[2.5rem] bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_45px_100px_-20px_rgba(135,108,74,0.22)]" />
        {/* Gold arch lines */}
        <div className="absolute inset-3 rounded-t-[200px] rounded-b-[2rem] border border-brand-plum/40 pointer-events-none" />
        <div className="absolute inset-[18px] rounded-t-[192px] rounded-b-[1.7rem] border-[0.5px] border-brand-plum/20 pointer-events-none" />
        {/* Keystone ornament */}
        <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#fdfbf7] border border-brand-plum/60 pointer-events-none" />
        {/* Base corners */}
        <div className="absolute bottom-6 left-6 w-5 h-5 border-b border-l border-brand-plum/70 rounded-bl-sm pointer-events-none" />
        <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-brand-plum/70 rounded-br-sm pointer-events-none" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center text-center px-8 pt-14 sm:pt-16 pb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
          >
            <Monogram />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.3em' }}
            animate={{ opacity: 1, letterSpacing: '0.7em' }}
            transition={{ duration: 1.6, delay: 0.7 }}
            className="block mt-6 text-[9px] sm:text-[10px] uppercase text-[#8a6d2f] font-bold font-sans pl-[0.7em]"
          >
            The Wedding Of
          </motion.span>

          <div className="flex-1 flex flex-col justify-center w-full">
            <motion.h1
              initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.4, delay: 0.9, ease: EASE }}
              className="font-['Playball'] text-[3.4rem] sm:text-[4.5rem] gold-shimmer-text leading-[1.15]"
            >
              {BRIDE_NAME}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0.4 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: EASE }}
              className="flex items-center justify-center gap-3 my-1"
            >
              <Flourish flip />
              <span className="font-display text-3xl sm:text-4xl text-[#8a6d2f] leading-none">&amp;</span>
              <Flourish />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.4, delay: 1.3, ease: EASE }}
              className="font-['Playball'] text-[3.4rem] sm:text-[4.5rem] gold-shimmer-text leading-[1.15]"
            >
              {GROOM_NAME}
            </motion.h1>
          </div>

          {/* Date & venue */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.6, ease: EASE }}
            className="w-full flex flex-col items-center font-['Cinzel']"
          >
            <div className="flex items-center justify-center w-full max-w-[290px]">
              <span className="flex-1 py-2 border-y border-brand-plum/35 text-[10px] sm:text-[11px] tracking-[0.3em] text-stone-600 uppercase">
                Friday
              </span>
              <span className="px-4 text-4xl sm:text-5xl text-stone-800 leading-none font-normal">04</span>
              <span className="flex-1 py-2 border-y border-brand-plum/35 text-[10px] sm:text-[11px] tracking-[0.3em] text-stone-600 uppercase">
                December
              </span>
            </div>
            <span className="mt-2 text-xs sm:text-sm tracking-[0.6em] text-[#8a6d2f] pl-[0.6em]">2026</span>

            <div className="flex items-center gap-2 my-4">
              <span className="h-px w-8 bg-brand-plum/40" />
              <span className="w-1 h-1 rotate-45 bg-brand-plum/70" />
              <span className="h-px w-8 bg-brand-plum/40" />
            </div>

            <p className="text-[10px] sm:text-[11px] text-stone-700 tracking-[0.3em] uppercase font-bold leading-relaxed">
              The Crystal Atrium
            </p>
            <p className="text-[9px] sm:text-[10px] text-[#8a6d2f] tracking-[0.3em] uppercase leading-relaxed">
              Paradise Inn Bolgoda
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Explore indicator, kept below the card so it never covers the text */}
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={scrollDown}
        className="relative z-20 mt-6 flex flex-col items-center gap-3 cursor-pointer group"
      >
        <span className="text-[9px] uppercase tracking-[1em] pl-[1em] text-brand-plum/80 group-hover:text-[#8a6d2f] transition-colors font-bold font-sans">
          Explore
        </span>
        <div className="w-px h-10 relative overflow-hidden bg-brand-plum/15">
          <motion.div
            className="w-full h-8 bg-brand-plum"
            animate={{ y: ['-100%', '130%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.button>
    </section>
  );
};
