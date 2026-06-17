import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { educations } from '../data';

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 relative overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-16 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-blue-500" />
            <span className="font-mono text-zinc-500 text-xs sm:text-sm uppercase tracking-widest leading-none">
              Academic Blueprint
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Education
          </h2>
        </div>

        {/* Academic Pathway Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pl-0 sm:pl-4">
          {educations.map((edu, index) => (
            <div
              key={edu.id}
              className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-zinc-850 shadow-xs hover:border-zinc-800 transition-all duration-300"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex gap-4 items-start">
                {/* Academic Icon Hub */}
                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-zinc-350 group-hover:scale-105 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <GraduationCap size={20} />
                </div>

                <div className="flex-1">
                  {/* Duration Capsule */}
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-zinc-950 border border-zinc-800/80 rounded-full mb-4">
                    <Calendar size={11} className="text-zinc-400" />
                    <span className="font-mono text-[10px] sm:text-[11px] font-medium text-zinc-300">
                      {edu.period}
                    </span>
                  </div>

                  {/* Institution Title */}
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {edu.institution}
                  </h3>

                  {/* Degree Name */}
                  <p className="font-sans font-medium text-sm text-zinc-300 mb-4 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {edu.degree}
                  </p>

                  {/* Focus Spec Tags */}
                  {edu.specialization && (
                    <div className="p-3.5 rounded-xl bg-[#121212]/30 border border-zinc-900 text-zinc-400 text-xs sm:text-sm mb-4 leading-normal font-sans flex items-start gap-2.5">
                      <BookOpen size={15} className="mt-0.5 text-blue-400 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-zinc-200 block mb-0.5">Focus Track</span>
                        {edu.specialization}
                      </div>
                    </div>
                  )}

                  {/* Context commentary */}
                  {edu.details && (
                    <p className="font-sans text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
