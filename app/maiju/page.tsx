'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const SLIDE_TITLES = [
  'Executive Summary',
  'Market Size',
  'Market Trends',
  'Competitive Landscape',
  'Competitive White Space',
  'The Customer',
  'The AI Opportunity',
  'Business Model Options',
  'Strategic Options',
  'Our Recommendation',
  'Go-to-Market Roadmap',
  'Key Risks & Mitigations',
];

const PHASES = [
  {
    number: '01',
    icon: '🧠',
    color: 'from-indigo-500 to-purple-600',
    bgLight: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    badgeColor: 'bg-indigo-100 text-indigo-700',
    title: 'The Brief',
    subtitle: 'Research plan in professional strategy format',
    description:
      'The client — a Lean Six Sigma Master Black Belt with a software idea — walked into the room. Rather than jumping to answers, Maiju first decomposed the central question into a structured issue tree and defined 6 testable hypotheses. A full research plan was written before a single data point was collected.',
    artifact: 'LSS-Software-Research-Plan.md',
    detail: 'Issue tree · 6 hypotheses · 5 workstreams defined',
  },
  {
    number: '02',
    icon: '⚡',
    color: 'from-amber-500 to-orange-500',
    bgLight: 'bg-amber-50',
    borderColor: 'border-amber-200',
    badgeColor: 'bg-amber-100 text-amber-700',
    title: 'Parallel Research',
    subtitle: '5 AI subagents fired simultaneously',
    description:
      'Five independent research workstreams ran in parallel — exactly as a top-tier strategy firm would deploy junior analysts. Market sizing, competitive intelligence, customer pain points, technology disruption, and business model benchmarks were all investigated simultaneously.',
    artifact: 'Workstreams A–E (parallel execution)',
    detail: 'Market sizing · Competitive landscape · Customer intelligence · AI disruption · Business models',
  },
  {
    number: '03',
    icon: '🎯',
    color: 'from-teal-500 to-emerald-500',
    bgLight: 'bg-teal-50',
    borderColor: 'border-teal-200',
    badgeColor: 'bg-teal-100 text-teal-700',
    title: 'The Deliverable',
    subtitle: '12-slide strategy deck',
    description:
      'Findings were synthesized into a board-ready 12-slide strategy presentation — hypothesis validation, competitive white space analysis, a customer profile, an AI opportunity assessment, three strategic options, and a clear recommendation with 90-day go-to-market roadmap.',
    artifact: 'LSS-Software-Strategy.pptx',
    detail: '12 slides · Strategic recommendation · Go-to-market roadmap',
  },
];

export default function MaijuPage() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(idx);
      setTimeout(() => setIsAnimating(false), 300);
    },
    [isAnimating]
  );

  const prev = useCallback(() => goTo((current - 1 + 12) % 12), [current, goTo]);
  const next = useCallback(() => goTo((current + 1) % 12), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next]);

  return (
    <main>
      {/* ── HERO ── */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
        {/* background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 text-sm font-semibold px-4 py-2 rounded-full mb-8 border border-teal-500/30">
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            Maiju in Action — Live Demo
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            From Idea to Strategy.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              In Minutes.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-6 leading-relaxed max-w-3xl mx-auto">
            A Lean Six Sigma practitioner walks in with a business idea. Maiju — powered by AI — runs a full
            professional market research engagement and delivers a 12-slide strategy deck.
          </p>
          <p className="text-slate-400 text-base mb-12 italic">
            Research plan → parallel subagent research → board-ready deliverable
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#deck"
              className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 shadow-lg shadow-teal-900/50 hover:shadow-teal-900/70 active:scale-[0.97]"
            >
              View the Strategy Deck →
            </a>
            <Link
              href="/"
              className="text-slate-300 hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 border border-slate-600 hover:border-slate-400"
            >
              ← Jere&apos;s World
            </Link>
          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1 opacity-40">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </section>

      {/* ── PROCESS TIMELINE ── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-600 mb-4">
              The Methodology
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              How Maiju works with AI
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Not just faster — structurally better. A hypothesis-first, evidence-driven approach that matches
              what top-tier strategy firms would deploy for a market entry assessment.
            </p>
          </div>

          <div className="space-y-8">
            {PHASES.map((phase) => (
              <div
                key={phase.number}
                className={`rounded-3xl p-8 border ${phase.bgLight} ${phase.borderColor} relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${phase.color} blur-3xl`} />
                </div>
                <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                  {/* Phase number + icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center text-2xl shadow-lg`}
                    >
                      {phase.icon}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-black text-slate-400 tracking-widest uppercase">
                        Phase {phase.number}
                      </span>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${phase.badgeColor}`}>
                        {phase.subtitle}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3">{phase.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{phase.description}</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2 bg-white/70 rounded-xl px-3 py-2 border border-slate-200">
                        <span className="text-xs text-slate-400 font-medium">Output:</span>
                        <span className="text-xs font-semibold text-slate-700 font-mono">{phase.artifact}</span>
                      </div>
                      <span className="text-xs text-slate-500">{phase.detail}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* The insight */}
          <div className="mt-12 bg-gradient-to-r from-slate-900 to-teal-900 rounded-3xl p-8 text-center">
            <p className="text-white text-xl md:text-2xl font-semibold leading-relaxed max-w-3xl mx-auto">
              &ldquo;Maiju doesn&apos;t replace thinking. She starts at 70%, focuses her energy on judgment and
              synthesis — and delivers in minutes what used to take days.&rdquo;
            </p>
            <p className="text-teal-300 text-sm mt-4">— The AI Advantage</p>
          </div>
        </div>
      </section>

      {/* ── RESEARCH PLAN ── */}
      <section className="py-24 px-4 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4">
              Phase 01 — The Brief
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              The Research Plan
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Before a single data point was collected, a full professional research plan
              was written — with an issue tree, six testable hypotheses, and five parallel workstreams.
            </p>
          </div>

          {/* Central question */}
          <div className="bg-slate-900 rounded-3xl p-8 mb-10 text-center">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">Central Question</p>
            <p className="text-white text-xl md:text-2xl font-semibold leading-relaxed">
              &ldquo;Is there a defensible, monetizable market opportunity for a new LSS statistical
              analysis software — and if so, what does the winning product and strategy look like?&rdquo;
            </p>
            <p className="text-slate-500 text-xs mt-4 font-mono">
              Analogous to: &ldquo;New Market Entry Evaluation&rdquo; · &ldquo;Build-vs-Buy Software Assessment&rdquo;
            </p>
          </div>

          {/* Issue Tree */}
          <div className="mb-12">
            <h3 className="text-xl font-black text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-7 h-7 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center text-sm font-black">1</span>
              The Issue Tree
            </h3>
            <p className="text-slate-500 text-sm mb-6">Every research activity must answer a branch of this tree. No data collected without a hypothesis to test.</p>
            <div className="grid md:grid-cols-5 gap-3">
              {[
                { icon: '📈', q: 'Is the market attractive?', subs: ['Market size & CAGR', 'Structural trends', 'AI & no-code wave'] },
                { icon: '🗺️', q: 'Is the landscape penetrable?', subs: ['Incumbent entrenchment', 'White spaces', 'Switching costs'] },
                { icon: '💰', q: 'Is the customer willing to pay?', subs: ['Who is the buyer?', 'Current pain points', 'WTP signals'] },
                { icon: '🏆', q: 'Is the client uniquely positioned?', subs: ['Unfair advantage', 'Distribution channel', 'Capability gaps'] },
                { icon: '🎯', q: 'What does the winning strategy look like?', subs: ['MVP scope', 'Business model', 'Go-to-market'] },
              ].map((branch, i) => (
                <div key={i} className="bg-gradient-to-b from-indigo-50 to-white rounded-2xl p-4 border border-indigo-100">
                  <div className="text-2xl mb-2">{branch.icon}</div>
                  <p className="text-slate-800 font-semibold text-sm leading-snug mb-3">{branch.q}</p>
                  <ul className="space-y-1">
                    {branch.subs.map((s) => (
                      <li key={s} className="text-xs text-slate-500 flex items-start gap-1.5">
                        <span className="text-indigo-400 mt-0.5 flex-shrink-0">›</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Hypotheses */}
          <div className="mb-12">
            <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-7 h-7 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center text-sm font-black">2</span>
              6 Starting Hypotheses
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wide w-10">#</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wide">Hypothesis</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wide w-28">Confidence</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wide w-24">Priority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { id: 'H1', h: 'LSS training market is growing globally, driven by manufacturing, healthcare & process industries', conf: 'Medium', pri: 'High', confC: 'bg-amber-100 text-amber-700', priC: 'bg-indigo-100 text-indigo-700' },
                    { id: 'H2', h: 'Current legacy tools are expensive, desktop-heavy, and not designed for learning contexts', conf: 'High', pri: 'High', confC: 'bg-emerald-100 text-emerald-700', priC: 'bg-indigo-100 text-indigo-700' },
                    { id: 'H3', h: 'There is no dominant browser-based, AI-assisted LSS statistical tool on the market', conf: 'Medium', pri: 'Critical', confC: 'bg-amber-100 text-amber-700', priC: 'bg-red-100 text-red-700' },
                    { id: 'H4', h: 'Training providers are the most leverageable go-to-market channel (bundled software + training)', conf: 'Medium', pri: 'High', confC: 'bg-amber-100 text-amber-700', priC: 'bg-indigo-100 text-indigo-700' },
                    { id: 'H5', h: 'Willingness to pay is higher in enterprise training contexts than individual practitioner contexts', conf: 'Low', pri: 'Medium', confC: 'bg-slate-100 text-slate-600', priC: 'bg-slate-100 text-slate-600' },
                    { id: 'H6', h: 'AI-assisted interpretation of statistical outputs is the key differentiator opportunity', conf: 'Medium', pri: 'Critical', confC: 'bg-amber-100 text-amber-700', priC: 'bg-red-100 text-red-700' },
                  ].map((row) => (
                    <tr key={row.id} className="bg-white hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 font-mono font-bold text-slate-400 text-xs">{row.id}</td>
                      <td className="px-4 py-3 text-slate-700 leading-snug">{row.h}</td>
                      <td className="px-4 py-3"><span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${row.confC}`}>{row.conf}</span></td>
                      <td className="px-4 py-3"><span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${row.priC}`}>{row.pri}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Parallel Workstreams */}
          <div className="mb-10">
            <h3 className="text-xl font-black text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-7 h-7 bg-teal-100 text-teal-700 rounded-lg flex items-center justify-center text-sm font-black">3</span>
              5 Parallel Workstreams
            </h3>
            <p className="text-slate-500 text-sm mb-6">Each workstream was designed to run independently — executed simultaneously by AI subagents.</p>
            <div className="grid md:grid-cols-5 gap-3">
              {[
                { label: 'A', title: 'Market Sizing', icon: '📊', obj: 'Quantify the addressable market and structural trends', out: 'TAM/SAM/SOM table, trend summary' },
                { label: 'B', title: 'Competitive Landscape', icon: '🗺️', obj: 'Map incumbents and identify white spaces', out: 'Competitive matrix, white space map' },
                { label: 'C', title: 'Customer Intelligence', icon: '👥', obj: 'Understand buyer behaviour and pain points', out: 'Buyer personas, pain point ranking' },
                { label: 'D', title: 'Tech & AI Disruption', icon: '🤖', obj: 'How AI and modern tech are reshaping the space', out: 'Technology landscape, AI opportunity' },
                { label: 'E', title: 'Business Models', icon: '💼', obj: 'Identify optimal pricing and monetisation', out: 'Model options, pricing architecture' },
              ].map((ws) => (
                <div key={ws.label} className="bg-gradient-to-b from-teal-50 to-white rounded-2xl p-4 border border-teal-100 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-7 bg-teal-600 text-white rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0">{ws.label}</span>
                    <span className="text-lg">{ws.icon}</span>
                  </div>
                  <p className="text-slate-800 font-bold text-sm mb-2">{ws.title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed mb-3 flex-1">{ws.obj}</p>
                  <div className="border-t border-teal-100 pt-2">
                    <p className="text-xs text-teal-700 font-medium">{ws.out}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── SLIDE DECK ── */}
      <section id="deck" className="py-24 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-600 mb-4">
              The Deliverable
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              The Strategy Deck
            </h2>
            <p className="text-slate-500 text-lg">
              A professional market entry assessment for a new Lean Six Sigma statistical software product.
              12 slides. Built from scratch with AI.
            </p>
            <p className="text-slate-400 text-sm mt-2">
              Use ← → arrow keys or the buttons to navigate
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Main slide */}
            <div
              className={`bg-white rounded-3xl shadow-2xl shadow-slate-300/60 overflow-hidden border border-slate-200 transition-opacity duration-300 ${isAnimating ? 'opacity-60' : 'opacity-100'
                }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/maiju-slides/slide-${String(current + 1).padStart(2, '0')}.png`}
                alt={`Slide ${current + 1}: ${SLIDE_TITLES[current]}`}
                className="w-full h-auto block"
                draggable={false}
              />
            </div>

            {/* Nav arrows */}
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:shadow-xl transition-all active:scale-[0.92] focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:shadow-xl transition-all active:scale-[0.92] focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide info bar */}
          <div className="mt-6 flex items-center justify-between px-2">
            <span className="text-slate-500 text-sm">
              <span className="font-semibold text-slate-800">{current + 1}</span>
              <span className="mx-1 text-slate-300">/</span>
              <span>12</span>
            </span>
            <span className="text-slate-700 font-semibold text-sm">{SLIDE_TITLES[current]}</span>
          </div>

          {/* Thumbnail strip */}
          <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {SLIDE_TITLES.map((title, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}: ${title}`}
                className={`flex-shrink-0 w-20 rounded-xl overflow-hidden border-2 transition-all duration-200 focus:outline-none ${i === current
                    ? 'border-teal-500 shadow-lg shadow-teal-200/60 scale-105'
                    : 'border-transparent opacity-50 hover:opacity-80 hover:border-slate-300'
                  }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/maiju-slides/slide-${String(i + 1).padStart(2, '0')}.png`}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-auto block"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING FOOTER ── */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400">
              SHIFT.
            </span>
            <p className="text-slate-500 text-xs mt-1 uppercase tracking-widest">
              AI &amp; The Future of Work · Built with Claude Cowork
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="text-slate-300 hover:text-white px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-200 border border-slate-600 hover:border-slate-400"
            >
              ← The Simulator
            </Link>
            <Link
              href="/themes"
              className="text-teal-400 hover:text-teal-300 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-200 border border-teal-700/50 hover:border-teal-500"
            >
              Explore Themes →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
