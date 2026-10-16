import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { BRIDE_NAME, GROOM_NAME } from '../config';

export const COVER_IMAGE = '/Champagne%20Monogram%20Wedding%20Invitation.png';

const EASE = [0.76, 0, 0.24, 1] as const;

interface CoverPageProps {
  key?: React.Key;
  onComplete: () => void;
  onMusicStart?: () => void;
  inviteeName?: string;
  readyToTransition?: boolean;
}

/** Full-screen cover artwork, centred in a phone-width column on larger screens. */
const CoverScene = () => (
  <div className="absolute inset-0 bg-[#f5ede1] flex items-center justify-center">
    <div className="relative w-full h-full max-w-[500px] overflow-hidden sm:shadow-[0_0_60px_rgba(184,150,69,0.18)]">
      <motion.img
        src={COVER_IMAGE}
        alt=""
        loading="eager"
        decoding="async"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </div>
  </div>
);

const Flourish = ({ flip = false }: { flip?: boolean }) => (
  <svg
    viewBox="0 0 60 12"
    className={`w-12 h-3 text-brand-plum ${flip ? '-scale-x-100' : ''}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="0.8"
  >
    <path d="M2 6 H34 C40 6 42 2 46 2 C50 2 51 6 48 7.5 C45 9 43 6 46 5" strokeLinecap="round" />
    <circle cx="56" cy="6" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);

export function CoverPage({
  onComplete,
  onMusicStart,
  inviteeName = '',
  readyToTransition = true,
}: CoverPageProps) {
  const [opened, setOpened] = useState(false);

  // Tiny gold sparkles drifting upward
  const sparkles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: 20 + Math.random() * 75,
        size: Math.random() * 2.5 + 1.5,
        duration: Math.random() * 6 + 6,
        delay: Math.random() * -12,
      })),
    [],
  );

  useEffect(() => {
    if (!opened || !readyToTransition) return;
    // Let the text fade and the light bloom before revealing the invitation
    const timer = window.setTimeout(onComplete, 700);
    return () => window.clearTimeout(timer);
  }, [opened, readyToTransition, onComplete]);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    onMusicStart?.();
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 1.1 }}
      onClick={handleOpen}
      className="fixed inset-0 z-[100] cursor-pointer overflow-hidden"
    >
      {/* Artwork: gently zooms toward the monogram and dissolves into the invitation */}
      <motion.div
        animate={opened ? { scale: 1.04 } : { scale: 1 }}
        exit={{ scale: 1.15, opacity: 0, filter: 'blur(8px)' }}
        transition={{ duration: 1.3, ease: EASE }}
        className="absolute inset-0"
      >
        <CoverScene />
      </motion.div>

      {/* Golden light that blooms from the monogram when opening */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={opened ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        exit={{ scale: 2.2, opacity: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmin] h-[120vmin] rounded-full bg-[radial-gradient(circle,rgba(255,250,235,0.95)_0%,rgba(243,223,162,0.45)_35%,transparent_70%)] pointer-events-none z-20"
      />

      {/* Overlay content, centred on the artwork column */}
      <motion.div
        animate={{ opacity: opened ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex justify-center pointer-events-none z-30"
      >
        <div className="relative w-full h-full max-w-[500px]">
          {/* Light sweep across the monogram */}
          <motion.div
            className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/45 to-transparent skew-x-[-20deg] mix-blend-soft-light"
            animate={{ x: ['0%', '400%'] }}
            transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 3.5, ease: 'easeInOut', delay: 1.5 }}
          />

          {/* Sparkles */}
          {sparkles.map((s) => (
            <motion.span
              key={s.id}
              className="absolute rounded-full bg-[#e8c982] shadow-[0_0_6px_rgba(232,201,130,0.9)]"
              style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size }}
              animate={{ y: [0, -120], opacity: [0, 0.9, 0] }}
              transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: 'easeOut' }}
            />
          ))}

          {/* Fine gold frame */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.2 }}
            className="absolute inset-4 sm:inset-5"
          >
            <div className="absolute inset-0 border border-brand-plum/30 rounded-[2rem]" />
            <div className="absolute inset-2 border-[0.5px] border-brand-plum/15 rounded-[1.6rem]" />
            <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-brand-plum/70 rounded-tl-sm" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-brand-plum/70 rounded-tr-sm" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-brand-plum/70 rounded-bl-sm" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-brand-plum/70 rounded-br-sm" />
          </motion.div>

          {/* Invitee */}
          <div className="absolute top-[9%] left-1/2 -translate-x-1/2 w-full px-10 max-w-[360px] text-center">
            <motion.span
              initial={{ opacity: 0, letterSpacing: '0.2em' }}
              animate={{ opacity: 1, letterSpacing: '0.5em' }}
              transition={{ duration: 1.6, delay: 0.4 }}
              className="block text-[8px] sm:text-[9px] uppercase text-[#8a6d2f] font-semibold font-sans"
            >
              {inviteeName ? 'Exclusively Invited' : 'You Are Invited'}
            </motion.span>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="flex items-center justify-center gap-2 my-3"
            >
              <Flourish flip />
              <span className="w-1.5 h-1.5 rotate-45 bg-brand-plum/80" />
              <Flourish />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.4, delay: 1.1 }}
              className="font-['Cinzel'] text-sm sm:text-base gold-shimmer-text tracking-[0.12em] font-bold uppercase leading-relaxed"
            >
              {inviteeName || `${BRIDE_NAME} & ${GROOM_NAME}`}
            </motion.p>
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.6 }}
            className="absolute bottom-[9%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 w-full px-6 pointer-events-auto"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleOpen();
              }}
              className="group relative overflow-hidden rounded-full px-9 py-4 bg-white/45 backdrop-blur-md border border-brand-plum/60 shadow-[0_12px_35px_rgba(135,108,74,0.18)] hover:bg-white/70 transition-colors duration-500 cursor-pointer"
            >
              {/* soft pulse ring */}
              <motion.span
                className="absolute inset-0 rounded-full border border-brand-plum/50"
                animate={{ scale: [1, 1.18], opacity: [0.6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
              />
              {/* shimmer */}
              <motion.span
                className="absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-20deg]"
                animate={{ x: ['0%', '500%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
              />
              <span className="relative flex items-center gap-3 font-['Cinzel'] text-[10px] sm:text-xs tracking-[0.35em] font-bold uppercase text-[#8a6d2f]">
                <span className="w-1.5 h-1.5 rotate-45 border border-[#8a6d2f]" />
                {opened ? 'Opening' : 'Open Invitation'}
                <span className="w-1.5 h-1.5 rotate-45 border border-[#8a6d2f]" />
              </span>
            </button>
            <motion.span
              animate={{ opacity: [0.35, 0.8, 0.35] }}
              transition={{ duration: 2.4, repeat: Infinity }}
              className="text-[8px] uppercase tracking-[0.45em] text-[#8a6d2f]/80 font-sans"
            >
              Tap anywhere to begin
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
