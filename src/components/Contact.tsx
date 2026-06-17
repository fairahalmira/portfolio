import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Instagram, Send, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { portfolioOwner } from '../data';

export default function Contact() {
  const [subject, setSubject] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioOwner.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!subject || !message) return;

    // Constructing standard pre-filled mailto anchor action
    const emailBody = `Hi Fairah,\n\n${message}${company ? `\n\nBest regards,\nFrom ${company}` : ''}`;
    const mailtoUrl = `mailto:${portfolioOwner.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open system client
    window.location.href = mailtoUrl;

    // Toast feedback
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setSubject('');
      setCompany('');
      setMessage('');
    }, 4000);
  };

  const socialChannels = [
    {
      name: 'Email Address',
      value: portfolioOwner.email,
      icon: Mail,
      action: handleCopyEmail,
      isCopy: true,
      href: `mailto:${portfolioOwner.email}`,
      color: 'text-rose-500'
    },
    {
      name: 'GitHub Repository',
      value: 'github.com/fairahalmira',
      icon: Github,
      action: null,
      isCopy: false,
      href: portfolioOwner.github,
      color: 'text-white'
    },
    {
      name: 'LinkedIn Directory',
      value: 'linkedin.com/in/fairahalmira',
      icon: Linkedin,
      action: null,
      isCopy: false,
      href: portfolioOwner.linkedin,
      color: 'text-blue-500'
    },
    {
      name: 'Instagram Profile',
      value: 'instagram.com/fairahalmira',
      icon: Instagram,
      action: null,
      isCopy: false,
      href: portfolioOwner.instagram,
      color: 'text-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-zinc-950/20">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-16 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-blue-500" />
            <span className="font-mono text-zinc-500 text-xs sm:text-sm uppercase tracking-widest leading-none">
              Initiate Connections
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Contact Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Direct Outreach Form (Left Column) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-zinc-905/40 border border-zinc-850 shadow-2xs relative">
              
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                This compiles your query into a preloaded client mail request. Fill inside and tap send to engage.
              </p>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] text-zinc-400 uppercase font-bold tracking-wider">
                      Subject Matter *
                    </label>
                    <input
                      required
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. AI Internship Collaboration"
                      className="px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950/80 text-sm text-zinc-200 focus:outline-hidden focus:border-zinc-700 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] text-zinc-400 uppercase font-bold tracking-wider">
                      Affiliation Company / School
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Infinite Learning Team"
                      className="px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950/80 text-sm text-zinc-200 focus:outline-hidden focus:border-zinc-700 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] text-zinc-400 uppercase font-bold tracking-wider">
                    Full Description Inquiry *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your requirements, project criteria, or introductory messages..."
                    className="px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950/80 text-sm text-zinc-200 focus:outline-hidden focus:border-zinc-700 transition-colors resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!subject || !message}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border border-blue-500/10 font-medium text-sm transition-all shadow-sm hover:scale-102 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={14} />
                  <span>Execute Mail Dispatch</span>
                </button>
              </form>

              {/* Form Dispatch Feedback Toast */}
              <AnimatePresence>
                {formSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute inset-x-8 bottom-8 p-4 bg-emerald-500 text-white rounded-xl flex items-center gap-3 shadow-md border border-emerald-400"
                  >
                    <Sparkles size={18} className="animate-pulse" />
                    <div>
                      <p className="text-xs font-bold font-display leading-tight">Mail Draft Compiled!</p>
                      <p className="text-[11px] leading-tight opacity-90">Your email client has been summoned successfully.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Social Indexes Cards (Right Column) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {socialChannels.map((s, index) => (
              <div
                key={index}
                className="group p-5 rounded-xl bg-zinc-905/40 border border-zinc-850 shadow-2xs flex items-center justify-between gap-4 hover:border-zinc-800 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className={`p-2.5 rounded-lg bg-zinc-950 border border-zinc-800/50 ${s.color} group-hover:scale-105 transition-transform`}>
                    <s.icon size={18} />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] sm:text-[10px] text-zinc-400 uppercase font-semibold leading-none mb-1">
                      {s.name}
                    </span>
                    <span className="font-sans font-semibold text-xs sm:text-sm text-zinc-200 break-all select-all">
                      {s.value}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {s.isCopy ? (
                    <button
                      onClick={s.action!}
                      className="p-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copied ? <Check size={14} className="text-emerald-500 animate-bounce" /> : <Copy size={14} />}
                    </button>
                  ) : (
                    <a
                      href={s.href}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="p-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-805 transition-all cursor-pointer"
                      title={`Open external ${s.name}`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}

            <div className="p-6 rounded-2xl border border-dashed border-zinc-850 text-center text-zinc-500 font-sans text-xs flex flex-col items-center gap-2">
              <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                Local Clock Alignment
              </span>
              <p className="text-zinc-400">
                Porting smart pipelines from West Sumatra / Indonesia to global servers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
