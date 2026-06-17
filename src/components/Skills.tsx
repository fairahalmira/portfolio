import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Brain, Code, Settings, Trophy, HelpCircle } from 'lucide-react';
import { skillCategories } from '../data';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = skillCategories.map((cat) => {
    const matchedSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, skills: matchedSkills };
  }).filter((cat) => cat.skills.length > 0);

  // Category Icon Resolver
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ai-ds':
        return <Brain size={18} className="text-teal-500" />;
      case 'software-dev':
        return <Code size={18} className="text-indigo-500" />;
      case 'frameworks-tools':
        return <Settings size={18} className="text-violet-500" />;
      default:
        return <Trophy size={18} className="text-zinc-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background gradients for design interest */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading & Subhead */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-blue-500" />
              <span className="font-mono text-zinc-500 text-xs sm:text-sm uppercase tracking-widest leading-none">
                Core Competence
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Tech Stack & Expertise
            </h2>
          </div>

          {/* Quick Search Filtering Interaction */}
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
            <input
              type="text"
              placeholder="Search skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/50 text-sm text-zinc-200 focus:outline-hidden focus:border-zinc-700 transition-colors placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Skill Category Selector Panels */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4.5 py-2 rounded-full font-medium text-xs sm:text-sm transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-zinc-900 border border-zinc-850 text-zinc-400 hover:bg-zinc-800 hover:text-white'
            }`}
          >
            All Fields
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4.5 py-2 rounded-full font-medium text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-zinc-900 border border-zinc-850 text-zinc-400 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Skills Deck Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories
            .filter((cat) => activeCategory === 'all' || cat.id === activeCategory)
            .map((cat) => (
              <div
                key={cat.id}
                className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-850 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-zinc-800/80">
                    <div className="p-2 bg-zinc-950/85 border border-zinc-800 rounded-lg shadow-2xs">
                      {getCategoryIcon(cat.id)}
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-5">
                    {cat.skills.map((skill, index) => (
                      <div key={index} className="group">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="font-sans font-medium text-sm text-zinc-300 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-zinc-500 uppercase tracking-wide">
                            {skill.level}
                          </span>
                        </div>
                        
                        {/* Dynamic Rating bar meter representation */}
                        <div className="w-full h-1.5 bg-zinc-950 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ${
                              skill.level === 'Advanced'
                                ? 'w-[90%] bg-blue-500'
                                : skill.level === 'Intermediate'
                                ? 'w-[75%] bg-purple-500'
                                : 'w-[55%] bg-zinc-800'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="flex items-center gap-1">
                    <HelpCircle size={12} /> Hover to review details
                  </span>
                  <span>{cat.skills.length} items</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
