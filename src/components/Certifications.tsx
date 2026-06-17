import { Award, ShieldCheck, ExternalLink, Calendar } from 'lucide-react';
import { certifications } from '../data';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32 relative overflow-hidden bg-[#0A0A0A]">
      {/* Visual glowing elements */}
      <div className="absolute left-10 bottom-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-16 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-blue-500" />
            <span className="font-mono text-zinc-500 text-xs sm:text-sm uppercase tracking-widest leading-none">
              Acolytes & Credentials
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Certifications & Awards
          </h2>
        </div>

        {/* Credentials Cards Deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group p-8 rounded-2xl bg-zinc-900/40 border border-zinc-850 relative flex flex-col sm:flex-row gap-6 items-start hover:border-zinc-800 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-transparent to-blue-500/5 rounded-bl-3xl group-hover:bg-blue-500/10 transition-colors" />

              {/* Verified Icon Badge */}
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 shadow-2xs text-blue-400 group-hover:scale-105 group-hover:text-purple-400 transition-all duration-300 flex-shrink-0">
                <Award size={24} />
              </div>

              <div className="flex-1 space-y-3">
                {/* Certified Issuer Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/10 text-[9px] sm:text-[10px] uppercase font-mono font-bold tracking-wider text-purple-400">
                  <ShieldCheck size={11} /> Verified Credential
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-white leading-snug group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>

                <div className="flex flex-col gap-1 text-xs text-zinc-400">
                  <p className="font-sans font-medium text-zinc-300">
                    Issuer: <span className="font-semibold text-white">{cert.issuer}</span>
                  </p>
                  
                  {cert.date && (
                    <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-500 mt-1">
                      <Calendar size={12} />
                      Conferred {cert.date}
                    </div>
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
