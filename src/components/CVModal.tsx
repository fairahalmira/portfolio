import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Mail, Github, Linkedin, Calendar, MapPin, Sparkles } from 'lucide-react';
import { portfolioOwner, educations, experiences, skillCategories, certifications } from '../data';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          {/* Web backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm print:hidden"
          />

          {/* CV Card body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="bg-[#121212] border border-zinc-850 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl relative z-10 overflow-y-auto print:absolute print:inset-0 print:m-0 print:p-0 print:border-none print:shadow-none print:bg-white print:dark:bg-white print:text-black print:max-h-full"
          >
            {/* Top Toolbar (Hidden on print) */}
            <div className="sticky top-0 bg-zinc-950/95 border-b border-zinc-900 px-6 sm:px-8 py-4 flex items-center justify-between z-20 backdrop-blur-sm print:hidden">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-blue-400 animate-pulse" />
                <span className="font-display font-bold text-sm text-zinc-200">
                  Dynamic CV Portfolio Builder
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                {/* Print/Save Trigger */}
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border border-blue-500/10 text-xs font-semibold hover:opacity-90 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5 shadow-lg shadow-blue-500/10"
                >
                  <Printer size={13} />
                  <span>Save as PDF / Print</span>
                </button>

                {/* Close Overlay */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Formal Resume Document (Optimized for Standard Printing) */}
            <div id="printable-cv-area" className="p-8 sm:p-12 font-sans text-zinc-200 print:p-0 print:text-black print:bg-white print:dark:text-black">
              {/* Header block */}
              <div className="pb-6 border-b-2 border-zinc-850 flex flex-col sm:flex-row sm:items-end justify-between gap-6 print:border-black">
                <div>
                  <h1 className="font-display font-extrabold text-3.5xl sm:text-4xl text-white tracking-tight leading-none mb-1 print:text-black">
                    Fairah Almira
                  </h1>
                  <p className="font-sans font-semibold text-sm sm:text-base text-zinc-350 print:text-neutral-800 font-sans">
                    Informatics Engineering Student & AI Developer
                  </p>
                  <p className="text-xs text-zinc-400 max-w-lg mt-2 leading-relaxed print:text-neutral-700">
                    Self-motivated undergraduate specialized in developing classical Machine Learning models, predictive classification schemas, and full-stack software applications.
                  </p>
                </div>

                {/* Formal metadata block */}
                <div className="flex flex-col gap-1.5 text-xs font-medium text-zinc-450 font-mono print:text-neutral-800">
                  <span className="flex items-center gap-1.5 justify-start sm:justify-end">
                    <Mail size={12} /> fairahalmira27@gmail.com
                  </span>
                  <span className="flex items-center gap-1.5 justify-start sm:justify-end">
                    <Github size={12} /> github.com/fairahalmira
                  </span>
                  <span className="flex items-center gap-1.5 justify-start sm:justify-end">
                    <Linkedin size={12} /> linkedin.com/in/fairahalmira
                  </span>
                  <span className="flex items-center gap-1.5 justify-start sm:justify-end">
                    <MapPin size={12} /> Padang / West Sumatra, Indonesia
                  </span>
                </div>
              </div>

              {/* Main resume stack */}
              <div className="mt-8 space-y-8">
                {/* Education section */}
                <div>
                  <h2 className="font-display font-extrabold text-sm uppercase tracking-widest text-zinc-400 mb-4 pb-1 border-b border-zinc-900 print:text-zinc-500 print:border-neutral-300">
                    Education Detail
                  </h2>
                  <div className="space-y-5">
                    {educations.map((edu) => (
                      <div key={edu.id} className="flex justify-between items-start gap-4 flex-wrap">
                        <div>
                          <h3 className="font-sans font-extrabold text-sm sm:text-base text-white print:text-black">
                            {edu.institution}
                          </h3>
                          <p className="text-xs sm:text-sm text-zinc-400 print:text-neutral-800 font-medium">
                            {edu.degree}
                          </p>
                          {edu.specialization && (
                            <p className="text-xs text-zinc-500 print:text-neutral-600 italic">
                              Focus: {edu.specialization}
                            </p>
                          )}
                        </div>
                        <span className="font-mono text-xs text-zinc-450 print:text-neutral-700">
                          {edu.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience section */}
                <div>
                  <h2 className="font-display font-extrabold text-sm uppercase tracking-widest text-zinc-400 mb-4 pb-1 border-b border-zinc-900 print:text-zinc-500 print:border-neutral-300">
                    Work Experience
                  </h2>
                  <div className="space-y-6">
                    {experiences.map((exp) => (
                      <div key={exp.id}>
                        <div className="flex justify-between items-start gap-4 flex-wrap mb-2">
                          <div>
                            <h3 className="font-sans font-extrabold text-sm sm:text-base text-white print:text-black">
                              {exp.role}
                            </h3>
                            <p className="text-xs sm:text-sm text-blue-400 print:text-dark font-semibold">
                              {exp.company}
                            </p>
                          </div>
                          <span className="font-mono text-xs text-zinc-450 print:text-neutral-700">
                            {exp.period}
                          </span>
                        </div>
                        <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-400 leading-relaxed print:text-neutral-800">
                          {exp.description.map((bullet, idx) => (
                            <li key={idx}>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Skills Directory */}
                <div>
                  <h2 className="font-display font-extrabold text-sm uppercase tracking-widest text-zinc-400 mb-4 pb-1 border-b border-zinc-900 print:text-zinc-500 print:border-neutral-300">
                    Skill set Matrix
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-zinc-300 print:text-black">
                    {skillCategories.map((cat) => (
                      <div key={cat.id}>
                        <h4 className="font-sans font-bold text-white mb-2 pb-0.5 border-b border-zinc-900 print:text-black print:border-neutral-200">
                          {cat.title}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.skills.map((s, idx) => (
                            <span key={idx} className="font-mono text-[10px] px-2 py-0.5 bg-zinc-950 rounded-md border border-zinc-800 print:bg-neutral-50 print:text-black print:border-neutral-200">
                              {s.name} ({s.level.substring(0,3)})
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications and credentials section */}
                <div>
                  <h2 className="font-display font-extrabold text-sm uppercase tracking-widest text-zinc-400 mb-4 pb-1 border-b border-zinc-900 print:text-zinc-500 print:border-neutral-300">
                    Honors & Certifications
                  </h2>
                  <div className="space-y-4">
                    {certifications.map((cert) => (
                      <div key={cert.id} className="flex justify-between items-start gap-4 flex-wrap">
                        <div>
                          <h3 className="font-sans font-bold text-xs sm:text-sm text-white print:text-black">
                            {cert.title}
                          </h3>
                          <p className="text-[11px] text-zinc-450 print:text-neutral-800 leading-none mt-0.5">
                            Conferred by: {cert.issuer}
                          </p>
                        </div>
                        {cert.date && (
                          <span className="font-mono text-xs text-zinc-450 print:text-neutral-700">
                            {cert.date}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic printable footer info */}
              <div className="mt-12 pt-6 border-t border-zinc-900 text-center text-[10px] font-mono text-zinc-400 print:text-black print:border-neutral-300">
                Self-generated online transcript of Fairah Almira • Built on Informatics Engineering Principles • Padang, ID
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
