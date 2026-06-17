import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Cpu,
  Terminal,
  Grid,
  CheckCircle2,
  X,
  Sparkles,
  Award,
  Play,
  RotateCcw,
  Sliders,
  Compass,
  MapPin,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // --- INTERACTIVE SIMULATORS FOR MODALS ---

  // 1. Grocery Association Rule Simulator
  const GrocerySimulator = () => {
    const [anchor, setAnchor] = useState('Bread');
    const db: Record<string, { rec: string; conf: number; supp: number; lift: number; placement: string }[]> = {
      Bread: [
        { rec: 'Butter & Jam', conf: 0.82, supp: 0.15, lift: 2.1, placement: 'Adjacent Shelf A2' },
        { rec: 'Fresh Milk', conf: 0.65, supp: 0.12, lift: 1.5, placement: 'End-cap Aisle 3' }
      ],
      Milk: [
        { rec: 'Cereal Pack', conf: 0.88, supp: 0.18, lift: 2.4, placement: 'Eye-Level Shelf D1' },
        { rec: 'Chocolate Powder', conf: 0.58, supp: 0.09, lift: 1.8, placement: 'Lower Basket D3' }
      ],
      Coffee: [
        { rec: 'Brown Sugar', conf: 0.74, supp: 0.11, lift: 1.9, placement: 'Sugar Section B5' },
        { rec: 'Cookies & Biscuits', conf: 0.61, supp: 0.08, lift: 1.4, placement: 'Direct Facing Shelf C2' }
      ],
      Apple: [
        { rec: 'Yogurt Dip', conf: 0.52, supp: 0.06, lift: 1.3, placement: 'refrigerated Rack E2' },
        { rec: 'Organic Oats', conf: 0.45, supp: 0.05, lift: 1.1, placement: 'Lower Shelf E4' }
      ]
    };

    return (
      <div className="p-5 sm:p-6 bg-neutral-100 dark:bg-neutral-900/80 rounded-xl border border-neutral-200/50 dark:border-neutral-800/80">
        <div className="flex items-center gap-2 mb-4">
          <Sliders size={16} className="text-teal-500 animate-pulse" />
          <span className="font-mono text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
            Association Rule Mining Simulator
          </span>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4 leading-normal">
          Select an anchor item to trigger the Association model and generate spatial layout optimization recommendations.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {Object.keys(db).map((item) => (
            <button
              key={item}
              onClick={() => setAnchor(item)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                anchor === item
                  ? 'bg-teal-500 text-white shadow-xs'
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <div className="text-xs font-mono font-bold text-neutral-400 uppercase">
            Model Recommendations for: "{anchor}"
          </div>
          {db[anchor].map((r, i) => (
            <div
              key={i}
              className="p-3.5 rounded-lg bg-white dark:bg-neutral-950 border border-neutral-200/40 dark:border-neutral-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-neutral-800 dark:text-neutral-200"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-teal-500/10 text-teal-500 rounded-md">
                  <ShoppingBag size={14} />
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.rec}</div>
                  <div className="text-[10px] sm:text-xs font-mono text-neutral-400">
                    Recommended Placement: <span className="font-semibold text-teal-500">{r.placement}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
                <div>
                  <span className="block text-[9px] text-zinc-400 uppercase">Confidence</span>
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">{(r.conf * 100).toFixed(0)}%</span>
                </div>
                <div>
                  <span className="block text-[9px] text-zinc-400 uppercase">Support</span>
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">{(r.supp * 100).toFixed(0)}%</span>
                </div>
                <div>
                  <span className="block text-[9px] text-zinc-400 uppercase">Lift Score</span>
                  <span className="font-semibold text-emerald-500">{r.lift}x</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 2. EduSolo Itinerary Simulator
  const ToursSimulator = () => {
    const [persona, setPersona] = useState('History');
    const itineraries: Record<string, { spot: string; dur: string; description: string; lat: string }[]> = {
      History: [
        { spot: 'Keraton Surakarta Hadiningrat', dur: '09:00 - 11:30 AM', description: 'Royal palace displaying sacred cultural relics, heirloom carriages, and classical architecture.', lat: 'Solo Center' },
        { spot: 'Pura Mangkunegaran', dur: '01:00 - 03:00 PM', description: 'Stately palace estate featuring highly preserved Javanese-European wood craftsmanship and history tracks.', lat: 'Kraton District' }
      ],
      Academic: [
        { spot: 'Museum Danar Hadi Heritage', dur: '10:00 - 12:00 PM', description: 'The absolute largest collection of authentic batik fabrics, textile patterns, and preservation analytics.', lat: 'Slamet Riyadi' },
        { spot: 'Kampung Batik Kauman', dur: '02:00 - 04:30 PM', description: 'An interactive heritage village supporting open batik sketching, wax boiling, and design workshops.', lat: 'Njeron Bet' }
      ],
      Nature: [
        { spot: 'Taman Balekambang Park', dur: '08:00 - 10:30 AM', description: 'Historic botanical sanctuary designed by royals featuring freely roaming deer and lush canopies.', lat: 'Manahan District' },
        { spot: 'Kawasan Wisata Bengawan Solo', dur: '04:00 - 06:15 PM', description: 'Scenic riverfront paths mapping ecological models and local folklore histories of central Java.', lat: 'Jurug East' }
      ]
    };

    return (
      <div className="p-5 sm:p-6 bg-neutral-100 dark:bg-neutral-900/80 rounded-xl border border-neutral-200/50 dark:border-neutral-800/80">
        <div className="flex items-center gap-2 mb-4">
          <Compass size={16} className="text-indigo-500 animate-pulse" />
          <span className="font-mono text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
            EduSolo Travel Path Scoring Engine
          </span>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4 leading-normal">
          Pick a demographic focus filter. Our recommender computes interest weights to draft the optimal Solonese educational route.
        </p>

        <div className="flex gap-2 mb-6">
          {['History', 'Academic', 'Nature'].map((cat) => (
            <button
              key={cat}
              onClick={() => setPersona(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                persona === cat
                  ? 'bg-indigo-500 text-white shadow-xs'
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              {cat} Traveler
            </button>
          ))}
        </div>

        <div className="relative border-l-2 border-dashed border-indigo-200 dark:border-indigo-800/60 pl-5 space-y-5">
          {itineraries[persona].map((item, id) => (
            <div key={id} className="relative">
              {/* Connector dot */}
              <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-indigo-500 border border-white dark:border-neutral-900" />
              
              <div className="text-xs font-mono text-neutral-400 flex items-center gap-1.5 mb-1">
                <span>{item.dur}</span>
                <span>•</span>
                <span className="flex items-center gap-0.5 text-[10px] text-zinc-500 uppercase font-bold">
                  <MapPin size={10} /> {item.lat}
                </span>
              </div>
              <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white">
                {item.spot}
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-normal mt-0.5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 3. Iris Classification Web App Simulator
  const IrisSimulator = () => {
    const [sepalLen, setSepalLen] = useState(5.1);
    const [sepalWid, setSepalWid] = useState(3.5);
    const [petalLen, setPetalLen] = useState(1.4);
    const [petalWid, setPetalWid] = useState(0.2);

    // Compute mock classification probabilities based on classical botanical criteria
    // Setosa: small petals, wider sepals
    // Veriscolor: medium petals
    // Virginica: large petals, long sepals
    const classify = () => {
      const vol = petalLen * petalWid;
      if (vol < 0.8) {
        return {
          species: 'Iris Setosa',
          probs: { setosa: 0.98, versicolor: 0.02, virginica: 0.00 },
          desc: 'Distinctive miniature petals with expansive sepal parameters, typical of wetland taxonomy.'
        };
      } else if (vol < 4.5) {
        // Versicolor vs Virginica border
        const versicolorRatio = Math.max(0.05, 1 - (vol - 0.8) / 3.7);
        return {
          species: 'Iris Versicolor',
          probs: { setosa: 0.00, versicolor: Number(versicolorRatio.toFixed(2)), virginica: Number((1 - versicolorRatio).toFixed(2)) },
          desc: 'Medium proportions across all anatomical segments, highly localized in moderate woodland soil.'
        };
      } else {
        const virginicaRatio = Math.min(0.99, 0.4 + (vol - 4.5) / 10);
        return {
          species: 'Iris Virginica',
          probs: { setosa: 0.00, versicolor: Number((1 - virginicaRatio).toFixed(2)), virginica: Number(virginicaRatio.toFixed(2)) },
          desc: 'Expansive petal length and heavy stem structures, standard for late-season high-latitude blooms.'
        };
      }
    };

    const res = classify();

    return (
      <div className="p-5 sm:p-6 bg-neutral-100 dark:bg-neutral-900/80 rounded-xl border border-neutral-200/50 dark:border-neutral-800/80">
        <div className="flex items-center gap-2 mb-4">
          <Sliders size={16} className="text-violet-500 animate-pulse" />
          <span className="font-mono text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
            Iris Classifier Real-time Workspace
          </span>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-6 leading-normal">
          Adjust anatomical metrics sliders. The mathematical inference model re-evaluates probabilities instantly inside the workspace.
        </p>

        {/* Grid Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs text-neutral-700 dark:text-neutral-300">
              <span className="font-medium">Sepal Length</span>
              <span className="font-mono font-bold text-indigo-500">{sepalLen}cm</span>
            </div>
            <input
              type="range"
              min="4.0"
              max="8.0"
              step="0.1"
              value={sepalLen}
              onChange={(e) => setSepalLen(parseFloat(e.target.value))}
              className="w-full accent-indigo-500 cursor-ew-resize h-1 bg-neutral-250 dark:bg-neutral-700 rounded-lg appearance-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs text-neutral-700 dark:text-neutral-300">
              <span className="font-medium">Sepal Width</span>
              <span className="font-mono font-bold text-indigo-500">{sepalWid}cm</span>
            </div>
            <input
              type="range"
              min="2.0"
              max="4.5"
              step="0.1"
              value={sepalWid}
              onChange={(e) => setSepalWid(parseFloat(e.target.value))}
              className="w-full accent-indigo-500 cursor-ew-resize h-1 bg-neutral-250 dark:bg-neutral-700 rounded-lg appearance-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs text-neutral-700 dark:text-neutral-300">
              <span className="font-medium">Petal Length</span>
              <span className="font-mono font-bold text-indigo-500">{petalLen}cm</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="7.0"
              step="0.1"
              value={petalLen}
              onChange={(e) => setPetalLen(parseFloat(e.target.value))}
              className="w-full accent-indigo-500 cursor-ew-resize h-1 bg-neutral-250 dark:bg-neutral-700 rounded-lg appearance-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs text-neutral-700 dark:text-neutral-300">
              <span className="font-medium">Petal Width</span>
              <span className="font-mono font-bold text-indigo-500">{petalWid}cm</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="2.5"
              step="0.1"
              value={petalWid}
              onChange={(e) => setPetalWid(parseFloat(e.target.value))}
              className="w-full accent-indigo-500 cursor-ew-resize h-1 bg-neutral-250 dark:bg-neutral-700 rounded-lg appearance-none"
            />
          </div>
        </div>

        {/* Classification Result UI */}
        <div className="p-4 bg-white dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-800/50 rounded-xl">
          <div className="flex items-center justify-between gap-4 mb-4 pb-2.5 border-b border-neutral-100 dark:border-neutral-900">
            <div>
              <span className="block text-[9px] text-zinc-400 uppercase font-bold tracking-wider">Classification species</span>
              <span className="text-base font-bold text-neutral-900 dark:text-white">{res.species}</span>
            </div>
            <div className="px-2.5 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-mono font-bold rounded-lg border border-emerald-500/10">
              Predicted Tag
            </div>
          </div>

          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-normal mb-4">
            {res.desc}
          </p>

          <div className="space-y-2">
            <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase">Softmax output probabilities</div>
            
            {/* Softmax Bars */}
            <div className="space-y-1.5 text-xs text-neutral-700 dark:text-slate-300">
              <div>
                <div className="flex justify-between text-[11px] mb-0.5">
                  <span>Iris Setosa</span>
                  <span className="font-mono font-bold">{(res.probs.setosa * 100).toFixed(0)}%</span>
                </div>
                <div className="w-full h-1.5 bg-neutral-150 dark:bg-neutral-900 rounded-full overflow-hidden">
                  <div className="h-full bg-violet-500 rounded-full" style={{ width: `${res.probs.setosa * 100}%` }} />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-[11px] mb-0.5">
                  <span>Iris Versicolor</span>
                  <span className="font-mono font-bold">{(res.probs.versicolor * 100).toFixed(0)}%</span>
                </div>
                <div className="w-full h-1.5 bg-neutral-150 dark:bg-neutral-900 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${res.probs.versicolor * 100}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-0.5">
                  <span>Iris Virginica</span>
                  <span className="font-mono font-bold">{(res.probs.virginica * 100).toFixed(0)}%</span>
                </div>
                <div className="w-full h-1.5 bg-neutral-150 dark:bg-neutral-900 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${res.probs.virginica * 100}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render correct simulator in modal
  const renderSimulator = (projId: string) => {
    switch (projId) {
      case 'product-layout-recommendation':
        return <GrocerySimulator />;
      case 'educational-tourism-recommendation':
        return <ToursSimulator />;
      case 'iris-classification':
        return <IrisSimulator />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden bg-zinc-950/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-20 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-blue-500" />
            <span className="font-mono text-zinc-500 text-xs sm:text-sm uppercase tracking-widest leading-none">
              Engineering Lab
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="flex flex-col bg-zinc-900/40 rounded-2xl border border-zinc-850 overflow-hidden shadow-xs relative hover:border-zinc-800 transition-all duration-300 group"
            >
              {/* Card visual mockup top representation (Aesthetic placeholder) */}
              <div className="h-48 bg-[#121212]/40 border-b border-zinc-850/60 flex items-center justify-center p-6 relative overflow-hidden">
                {/* Visual vectors for mockup card */}
                {proj.image === 'layout' && (
                  <div className="w-full h-full flex flex-col gap-2 p-3 bg-zinc-950/85 border border-zinc-800/80 rounded-lg shadow-2xs opacity-85 group-hover:opacity-100 transition-opacity">
                    <div className="flex justify-between items-center pb-2 border-b border-zinc-900 font-mono text-[9px] text-zinc-500 uppercase font-bold">
                      <span>Grid Spatial Analytics</span>
                      <span className="text-blue-400 animate-pulse">Running Apriori</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 flex-1">
                      <div className="border border-blue-500/20 bg-blue-500/5 rounded-md flex flex-col items-center justify-center text-[10px] font-mono text-zinc-300">
                        <span className="text-zinc-500 uppercase font-bold text-[8px]">Shelf A</span>
                        <span className="font-semibold">Bread</span>
                      </div>
                      <div className="border border-zinc-800 rounded-md flex flex-col items-center justify-center text-[10px] font-mono text-zinc-500">
                        <span className="text-[8px] uppercase font-bold">Shelf B</span>
                        <span>Water</span>
                      </div>
                      <div className="border border-blue-500/20 bg-blue-500/5 rounded-md flex flex-col items-center justify-center text-[10px] font-mono text-zinc-300">
                        <span className="text-zinc-500 uppercase font-bold text-[8px]">Shelf C</span>
                        <span className="font-semibold">Jam-A</span>
                      </div>
                      <div className="border border-zinc-800 rounded-md flex flex-col items-center justify-center text-[10px] font-mono text-zinc-500">
                        <span className="text-[8px] uppercase font-bold">Shelf D</span>
                        <span>Soda</span>
                      </div>
                    </div>
                  </div>
                )}

                {proj.image === 'tourism' && (
                  <div className="w-full h-full flex flex-col gap-2 p-3 bg-zinc-950/85 border border-zinc-800/80 rounded-lg shadow-2xs opacity-85 group-hover:opacity-100 transition-opacity">
                    <div className="flex justify-between items-center pb-2 border-b border-zinc-900 font-mono text-[9px] text-zinc-500 uppercase font-bold">
                      <span>Solo Recommender</span>
                      <span className="text-purple-400 font-bold">EduSolo UI</span>
                    </div>
                    <div className="flex gap-2 items-center flex-1">
                      <div className="flex-1 space-y-1">
                        <div className="h-2 bg-zinc-850 rounded-md w-full" />
                        <div className="h-2.5 bg-zinc-800 rounded-md w-[80%]" />
                        <div className="h-2 bg-zinc-800 rounded-md w-[50%]" />
                      </div>
                      <div className="p-2.5 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center">
                        <Compass size={22} className="animate-spin-slow" />
                      </div>
                    </div>
                  </div>
                )}

                {proj.image === 'iris' && (
                  <div className="w-full h-full flex flex-col justify-between p-3 bg-zinc-950/85 border border-zinc-800/80 rounded-lg shadow-2xs opacity-85 group-hover:opacity-100 transition-opacity">
                    <div className="flex justify-between items-center pb-1 border-b border-zinc-900 font-mono text-[9px] text-zinc-500 uppercase font-bold">
                      <span>Model Classification</span>
                      <span className="text-blue-400">Flask Server Active</span>
                    </div>
                    <div className="flex gap-4 items-end justify-center h-16 pt-2">
                      <div className="w-8 bg-zinc-800 rounded-t-sm h-[20%]" />
                      <div className="w-8 bg-zinc-800 rounded-t-sm h-[35%]" />
                      <div className="w-8 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-sm h-[88%]" />
                    </div>
                  </div>
                )}
              </div>

              {/* Text metadata */}
              <div className="flex-1 p-6 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex gap-1.5 flex-wrap mb-3.5">
                    {proj.tech.slice(0, 3).map((t) => (
                      <span key={t} className="font-mono text-[10px] text-zinc-400 px-2 py-0.5 bg-zinc-950 border border-zinc-800/60 rounded-md">
                        {t}
                      </span>
                    ))}
                    {proj.tech.length > 3 && (
                      <span className="font-mono text-[10px] text-zinc-500 px-1 py-0.5">
                        +{proj.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="font-sans text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-850/60 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="group/btn text-xs font-semibold text-zinc-300 hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    View Case Study
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="p-1.5 rounded-lg border border-zinc-800 text-zinc-450 hover:text-white hover:bg-zinc-900 bg-zinc-950/60 transition-colors cursor-pointer"
                        title="Open Live Web Application"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CASE STUDY MODAL WORKSPACE */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-[#121212] border border-zinc-850 w-full max-w-4xl max-h-[85vh] rounded-2xl shadow-2xl relative z-10 overflow-y-auto"
            >
              {/* Floating Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:scale-105 active:scale-95 transition-all z-20 cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="p-6 sm:p-10">
                {/* Header Section */}
                <div className="mb-8">
                  <div className="flex gap-2 mb-3">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-blue-400 px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/15 flex items-center gap-1">
                      <Cpu size={10} /> Active Case study
                    </span>
                    {selectedProject.role.includes('Developer') && (
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-purple-450 px-2.5 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/15 flex items-center gap-1 animate-pulse">
                        <Terminal size={10} /> Engineering Role
                      </span>
                    )}
                  </div>

                  <h2 className="font-display font-extrabold text-2xl sm:text-3.5xl text-white leading-tight mb-4 font-sans">
                    {selectedProject.title}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-y border-zinc-900">
                    <div className="pb-4 pt-1">
                      <span className="block font-mono text-[10px] text-zinc-500 uppercase">My Role</span>
                      <span className="font-sans font-semibold text-sm text-zinc-200">{selectedProject.role}</span>
                    </div>
                    <div className="pb-4 pt-1">
                      <span className="block font-mono text-[10px] text-zinc-500 uppercase">Deployment link</span>
                      {selectedProject.link ? (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          referrerPolicy="no-referrer"
                          className="font-sans font-semibold text-sm text-blue-400 hover:underline flex items-center gap-1 cursor-pointer hover:text-blue-300"
                        >
                          Visit Live Application <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="font-sans text-sm text-zinc-500">Offline (Physical System Design)</span>
                      )}
                    </div>
                    <div className="pb-4 pt-1">
                      <span className="block font-mono text-[10px] text-zinc-500 uppercase">Featured Tech</span>
                      <span className="font-sans font-semibold text-sm text-zinc-200">{selectedProject.tech.slice(0,4).join(', ')}</span>
                    </div>
                  </div>
                </div>

                {/* Subhead Context Description and Simulator row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
                  <div className="lg:col-span-6 flex flex-col gap-6">
                    <div>
                      <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-2.5">
                        Overview & Challenge
                      </h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {selectedProject.longDescription || selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-3.5">
                        Key Accomplishments
                      </h4>
                      <ul className="space-y-3">
                        {selectedProject.achievements.map((ach, idx) => (
                           <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-zinc-400 leading-relaxed">
                            <CheckCircle2 size={16} className="mt-0.5 text-blue-400 flex-shrink-0" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
                      <Sparkles size={14} className="text-purple-400 animate-pulse" /> Live Interactive Simulator Workspace
                    </h4>
                    {renderSimulator(selectedProject.id)}
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-900 flex justify-between items-center flex-wrap gap-4 font-mono text-xs text-zinc-500">
                  <span>Press escape or background to dismiss</span>
                  <div className="flex gap-2">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-zinc-950 border border-zinc-900 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
