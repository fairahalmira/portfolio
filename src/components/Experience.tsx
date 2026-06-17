import { Briefcase, Calendar, CheckCircle2, Award } from 'lucide-react';
import { experiences } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden bg-zinc-950/20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-20">
          <div className="flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-blue-500" />
            <span className="font-mono text-zinc-500 text-xs sm:text-sm uppercase tracking-widest leading-none">
              Professional Journey
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Work Experience
          </h2>
        </div>

        {/* Chronological Vertical Timeline Stack */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-900 flex flex-col gap-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Bullet Anchor */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-[#0A0A0A] border-2 border-zinc-800 flex items-center justify-center transition-all duration-300 group-hover:border-blue-500 group-hover:scale-110">
                <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-blue-500 transition-all duration-300" />
              </div>

              {/* Card Container */}
              <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    {/* Role Title */}
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1">
                      {exp.role}
                    </h3>
                    
                    {/* Brand/Company */}
                    <p className="font-sans font-semibold text-sm text-blue-400 flex items-center gap-2">
                      <Briefcase size={14} />
                      {exp.company}
                    </p>
                  </div>

                  {/* Date & Tags capsules */}
                  <div className="flex flex-col sm:items-end gap-1.5">
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-zinc-400 px-2.5 py-1 bg-zinc-950 border border-zinc-800/80 rounded-md">
                      <Calendar size={11} />
                      {exp.period}
                    </span>
                    {exp.tag && (
                      <span className="inline-flex text-[9px] font-mono font-bold tracking-wider uppercase text-purple-400 bg-purple-500/5 px-2 py-0.5 rounded-full border border-purple-500/10 self-start sm:self-end">
                        {exp.tag}
                      </span>
                    )}
                  </div>
                </div>

                {/* Achievements details listing */}
                <ul className="flex flex-col gap-3.5">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      <CheckCircle2 size={15} className="mt-0.5 text-blue-400 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
