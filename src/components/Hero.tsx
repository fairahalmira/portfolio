import { motion } from 'motion/react';
import { ArrowDown, Mail, Download, Sparkles, Terminal, Database, Cpu } from 'lucide-react';
import { portfolioOwner } from '../data';

interface HeroProps {
  onViewProjects: () => void;
  onContactMe: () => void;
  onDownloadCV: () => void;
}

export default function Hero({ onViewProjects, onContactMe, onDownloadCV }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Absolute ambient light effects (Elegant Dark aesthetic) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-64 sm:w-[450px] h-64 sm:h-[450px] bg-purple-500/8  rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-indigo-500/8 rounded-full blur-[130px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:14px_24px]"
        style={{ maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)' }}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Top Status Capsule */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-md rounded-full shadow-xs mb-8 hover:scale-103 transition-transform cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-blue-500 absolute" />
            <span className="font-mono text-[10px] sm:text-[11px] font-medium text-zinc-350 ml-1.5 flex items-center gap-1">
              Active Informatics Engineer Student <Sparkles size={11} className="text-blue-400" />
            </span>
          </motion.div>

          {/* Subhead / Welcome */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-zinc-500 tracking-widest uppercase mb-4 text-xs"
          >
            Hello there, I am
          </motion.p>

          {/* Prompt Highlight Name heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight leading-none mb-6 select-none"
          >
            <span className="text-gradient-purple">Fairah Almira</span>
          </motion.h1>

          {/* Multi-discipline subtitle with beautiful icons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-3 max-w-2xl mb-8 bg-zinc-900/40 border border-zinc-800/60 rounded-2xl px-5 py-3.5 backdrop-blur-xs"
          >
            <div className="flex items-center gap-1.5 font-sans font-semibold text-zinc-200 text-sm sm:text-base">
              <Cpu size={15} className="text-blue-400" />
              <span>AI & ML Enthusiast</span>
            </div>
            <span className="text-zinc-800 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 font-sans font-semibold text-zinc-200 text-sm sm:text-base">
              <Database size={15} className="text-purple-400" />
              <span>Data Engineer</span>
            </div>
            <span className="text-zinc-800 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 font-sans font-semibold text-[#EDEDED] text-sm sm:text-base">
              <Terminal size={15} className="text-indigo-400" />
              <span>Software Developer</span>
            </div>
          </motion.div>

          {/* Professional Introduction paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-zinc-400 max-w-xl mb-12 font-sans font-normal leading-relaxed text-center"
          >
            {portfolioOwner.aboutBrief}
          </motion.p>

          {/* CTA Action Bar buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* View Projects */}
            <button
              onClick={onViewProjects}
              className="w-full sm:w-auto py-3.5 px-7 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium text-sm transition-all hover:shadow-lg shadow-blue-500/20 active:scale-98 cursor-pointer flex items-center justify-center gap-2 border border-blue-500/20"
            >
              <span>View Projects</span>
              <ArrowDown size={15} />
            </button>

            {/* Download CV */}
            <button
              onClick={onDownloadCV}
              className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-200 font-medium text-sm shadow-xs transition-all hover:scale-102 active:scale-98 cursor-pointer flex items-center justify-center gap-2"
            >
              <Download size={15} className="animate-bounce" />
              <span>Download CV</span>
            </button>

            {/* Contact Me */}
            <button
              onClick={onContactMe}
              className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-transparent hover:bg-zinc-900 text-zinc-400 hover:text-white font-medium text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Mail size={15} />
              <span>Contact Me</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Dynamic Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.8, 0.3], y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer hidden md:flex"
          onClick={onViewProjects}
        >
          <span className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            Scroll to discover
          </span>
          <ArrowDown size={12} className="text-zinc-400 dark:text-zinc-500" />
        </motion.div>
      </div>
    </section>
  );
}
