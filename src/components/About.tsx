import { motion } from 'motion/react';
import { Target, Lightbulb, TrendingUp, Cpu, Database, Award } from 'lucide-react';
import { portfolioOwner } from '../data';

export default function About() {
  const coreValues = [
    {
      icon: Cpu,
      title: 'Problem solver with AI',
      desc: 'Formulating complex problems into quantitative tasks, developing predictive systems, and fine-tuning neural weights.',
      color: 'text-indigo-500'
    },
    {
      icon: Database,
      title: 'Data & Software pipelines',
      desc: 'Structuring robust database models, creating APIs, and managing server pipelines for seamless, secure data flow.',
      color: 'text-teal-500'
    },
    {
      icon: TrendingUp,
      title: 'Obsessed with growth',
      desc: 'Active study participant continuously taking on challenges, exchange cohorts, and collaborative open-source projects.',
      color: 'text-violet-500'
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-zinc-950/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-16 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-blue-500" />
            <span className="font-mono text-zinc-500 text-xs sm:text-sm uppercase tracking-widest leading-none">
              A Closer Look
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="font-display font-semibold text-xl sm:text-2xl text-zinc-205">
              Informatics Engineering Student bridging data science with functional software.
            </h3>
            
            {/* Split paragraphs for outstanding readability */}
            {portfolioOwner.aboutFull.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-zinc-400 text-base leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {/* Quick Summary Highlights */}
            <div className="pt-6 border-t border-zinc-900 grid grid-cols-2 gap-6">
              <div>
                <span className="font-display font-bold text-3xl sm:text-4xl text-white">
                  20+
                </span>
                <p className="text-zinc-500 text-xs uppercase font-mono mt-1">
                  AI Model Pipelines Built
                </p>
              </div>
              <div>
                <span className="font-display font-bold text-3xl sm:text-4xl text-white">
                  98%
                </span>
                <p className="text-zinc-500 text-xs uppercase font-mono mt-1">
                  Classifier Accuracy Scores
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Dashboard Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 pb-10 rounded-2xl bg-zinc-900/40 border border-zinc-850 shadow-xs relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white">
                  <Target size={20} className="text-blue-400" />
                </div>
                <h4 className="font-display font-bold text-lg text-white">
                  Core Philosophy
                </h4>
              </div>

              {/* Core Philosophy items */}
              <div className="flex flex-col gap-6">
                {coreValues.map((val, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="p-1.5 rounded-lg bg-zinc-950/60 border border-zinc-800/60 mt-1 flex-shrink-0 text-blue-400">
                      <val.icon size={16} />
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-sm text-zinc-205 mb-1">
                        {val.title}
                      </h5>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Context callout card */}
            <div className="p-6 rounded-2xl bg-zinc-950/40 border border-zinc-900 flex items-center gap-4">
              <Award size={24} className="text-purple-400 flex-shrink-0" />
              <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-normal">
                Committed to delivering modular, modern, clean, and highly persistent digital products aligning core Informatics concepts with premium human UX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
