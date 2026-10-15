import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const COVER_IMAGE = '/Champagne%20Monogram%20Wedding%20Invitation.png';

interface CoverPageProps {
  key?: React.Key;
  onComplete: () => void;
  onMusicStart?: () => void;
  inviteeName?: string;
  readyToTransition?: boolean;
}

export function CoverPage({
  onComplete,
  onMusicStart,
  inviteeName = '',
  readyToTransition = true,
}: CoverPageProps) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened && readyToTransition) onComplete();
  }, [opened, readyToTransition, onComplete]);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    onMusicStart?.();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      onClick={handleOpen}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f5ede1] cursor-pointer"
    >
      <div className="relative w-full h-[100dvh] max-w-[500px] flex items-center justify-center overflow-hidden sm:shadow-[0_0_60px_rgba(184,150,69,0.15)]">
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center text-center w-full px-6 max-w-[320px]">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.95, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-1.5"
          >
            <span className="text-[8px] uppercase tracking-[0.4em] text-brand-plum font-bold block font-sans">
              {inviteeName ? 'Exclusively Invited' : 'You Are Invited'}
            </span>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-6 bg-brand-plum/40" />
              <div className="w-1 h-1 rounded-full bg-brand-plum/70" />
              <div className="h-px w-6 bg-brand-plum/40" />
            </div>
            <p className="font-['Cinzel'] text-xs md:text-sm text-stone-800 tracking-[0.1em] font-extrabold uppercase leading-normal pt-1.5">
              {inviteeName || 'To celebrate the wedding of Shani & Kasun'}
            </p>
          </motion.div>
        </div>

        <img
          src={COVER_IMAGE}
          alt="Shani & Kasun Wedding Invitation Cover"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-6 w-full px-6">
          <motion.button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleOpen();
            }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="bg-[#8a6d2f] text-white font-['Cinzel'] text-[10px] md:text-xs tracking-[0.3em] font-bold px-8 py-4 rounded-full border border-brand-plum shadow-[0_10px_30px_rgba(135,108,74,0.3)] hover:bg-[#6f5725] transition-colors duration-300 flex items-center justify-center gap-2 uppercase cursor-pointer"
          >
            <span className="w-1.5 h-1.5 bg-white rotate-45" />
            {opened ? 'Opening…' : 'View Invitation'}
            <span className="w-1.5 h-1.5 bg-white rotate-45" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
