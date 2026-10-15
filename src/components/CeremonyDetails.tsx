import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Heart } from 'lucide-react';

interface CeremonyDetailsProps {
  event?: string | null;
}

const VerticalDivider = () => (
  <>
    <div className="hidden md:flex flex-col items-center gap-3">
      <div className="w-px h-12 bg-brand-plum/25" />
      <div className="w-1.5 h-1.5 rounded-full bg-brand-plum/70" />
      <div className="w-px h-12 bg-brand-plum/25" />
    </div>
    <div className="md:hidden flex flex-row items-center gap-3">
      <div className="h-px w-10 bg-brand-plum/25" />
      <div className="w-1.5 h-1.5 rounded-full bg-brand-plum/70" />
      <div className="h-px w-10 bg-brand-plum/25" />
    </div>
  </>
);

interface DetailProps {
  icon: React.ElementType;
  label: string;
  value: string;
  sub: string;
}

const Detail = ({ icon: Icon, label, value, sub }: DetailProps) => (
  <div className="flex flex-col items-center flex-1">
    <Icon className="w-6 h-6 md:w-8 md:h-8 text-brand-plum mb-4 opacity-80" />
    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-stone-400 font-bold mb-3 font-sans">
      {label}
    </p>
    <p className="font-['Cinzel'] text-lg sm:text-xl md:text-2xl lg:text-3xl text-stone-800 tracking-widest font-bold whitespace-nowrap">
      {value}
    </p>
    <p className="font-['Cinzel'] text-xs md:text-sm text-[#8a6d2f] tracking-[0.2em] mt-3 uppercase">{sub}</p>
  </div>
);

export const CeremonyDetails: React.FC<CeremonyDetailsProps> = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-16 md:mb-20"
      >
        <span className="text-brand-plum uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[11px] sm:text-xs font-bold block mb-4">
          The Wedding Day
        </span>
        <h2 className="text-5xl sm:text-6xl font-display text-stone-800 leading-[1.1]">
          Save the <span className="italic font-light text-brand-plum">Date</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-12 lg:gap-20 text-center w-full max-w-5xl px-4"
      >
        <Detail icon={Calendar} label="The Date" value="FRIDAY, 04 DECEMBER" sub="2026" />
        <VerticalDivider />
        <Detail icon={Clock} label="The Time" value="4:30 PM" sub="Onwards" />
        <VerticalDivider />
        <Detail icon={Heart} label="The Ceremony" value="5:00 PM" sub="Poruwa Ceremony" />
      </motion.div>
    </div>
  );
};
