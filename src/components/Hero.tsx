import React from 'react';
import { motion } from 'motion/react';
import { BRIDE_NAME, GROOM_NAME } from '../config';

interface HeroProps {
  event?: string | null;
  inviteeName?: string;
}

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

export const Hero: React.FC<HeroProps> = () => {
  const scrollDown = () => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });

  return (
    <section className="min-h-[100dvh] w-full flex items-center justify-center p-4 md:p-12 relative overflow-hidden bg-gradient-to-b from-[#fdfbf7] via-white to-[#fdfbf7]">
      {/* Watermark background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/ChatGPT Image Jul 5, 2026, 02_20_06 AM.png"
          alt=""
          className="w-full h-full object-cover opacity-20 mix-blend-multiply"
        />
      </div>

      {/* Slowly rotating mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vh] h-[75vh] max-w-[550px] max-h-[550px] pointer-events-none z-0 opacity-[0.12] md:opacity-[0.15]">
        <motion.div
          className="w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        >
          <Mandala />
        </motion.div>
      </div>

      {/* Floating pearls */}
      <div className="absolute inset-0 pointer-events-none z-[5]">
        <Pearl className="top-[15%] left-[10%] w-6 h-6 opacity-60" />
        <Pearl className="bottom-[20%] right-[12%] w-4 h-4 opacity-40" />
        <Pearl className="top-[60%] left-[8%] w-3 h-3 opacity-30" />
      </div>

      {/* Monogram watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Cinzel'] text-[45vw] text-stone-500 pointer-events-none select-none z-0 opacity-[0.03] whitespace-nowrap">
        {BRIDE_NAME[0]}&amp;{GROOM_NAME[0]}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[440px] h-[85vh] md:h-[80vh] bg-white/55 backdrop-blur-md rounded-[3rem] shadow-[0_45px_100px_-20px_rgba(135,108,74,0.15)] border border-white/70 flex flex-col items-center overflow-hidden p-6 pt-12 md:p-10 md:pt-16"
      >
        <div className="absolute inset-5 border border-brand-plum/20 rounded-[2.5rem] pointer-events-none" />
        <div className="absolute inset-8 border-[0.5px] border-brand-plum/10 rounded-[2.2rem] pointer-events-none" />
        <div className="absolute top-7 left-7 w-5 h-5 border-t border-l border-brand-plum/65 pointer-events-none rounded-tl-sm" />
        <div className="absolute top-7 right-7 w-5 h-5 border-t border-r border-brand-plum/65 pointer-events-none rounded-tr-sm" />
        <div className="absolute bottom-7 left-7 w-5 h-5 border-b border-l border-brand-plum/65 pointer-events-none rounded-bl-sm" />
        <div className="absolute bottom-7 right-7 w-5 h-5 border-b border-r border-brand-plum/65 pointer-events-none rounded-br-sm" />



        <div className="flex flex-col items-center text-center space-y-4 flex-1 w-full relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="block text-[10px] uppercase tracking-[0.8em] text-[#8a6d2f] font-bold mb-4 font-sans"
          >
            The Wedding Of
          </motion.span>

          <div className="space-y-2 py-4 flex-1 flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.7 }}
              className="font-['Playball'] text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] gold-shimmer-text leading-tight"
            >
              {BRIDE_NAME}
            </motion.h1>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="relative my-3 flex items-center justify-center"
            >
              <div className="w-9 h-9 rounded-full border border-brand-plum/40 flex items-center justify-center bg-white/60 shadow-sm">
                <span className="font-['Playball'] text-xl text-[#8a6d2f] italic -mt-1">&amp;</span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 1.1 }}
              className="font-['Playball'] text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] gold-shimmer-text leading-tight"
            >
              {GROOM_NAME}
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-auto pb-6 w-full flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-6 mb-8 w-full px-12">
              <div className="h-px w-full bg-brand-plum/30" />
              <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-brand-plum/70" />
              <div className="h-px w-full bg-brand-plum/30" />
            </div>
            <div className="font-['Cinzel'] space-y-2">
              <p className="text-sm md:text-lg text-stone-800 tracking-[0.4em] font-light">04 DECEMBER 2026</p>
              <p className="text-[10px] text-[#8a6d2f] tracking-[0.35em] uppercase font-bold leading-relaxed">
                The Crystal Atrium
                <br />
                Paradise Inn Bolgoda
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Explore indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        onClick={scrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-20 group"
      >
        <span className="text-[9px] uppercase tracking-[1em] text-brand-plum/80 group-hover:text-[#8a6d2f] transition-colors font-bold font-sans">
          Explore
        </span>
        <div className="w-px h-12 relative overflow-hidden bg-brand-plum/15">
          <motion.div
            className="w-full h-10 bg-brand-plum"
            animate={{ y: ['-100%', '120%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};
