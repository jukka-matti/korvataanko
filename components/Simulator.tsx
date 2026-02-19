'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useLang } from './LanguageProvider';
import { t } from '@/lib/translations';
import { claims } from '@/lib/claimsData';

type Mode = 'before' | 'after';
type Decision = 'approve' | 'reject' | 'flag';

interface ProcessedClaim {
  id: string;
  decision: Decision;
  timeSpent: number;
}

export function Simulator() {
  const { lang } = useLang();
  const tr = t[lang].simulator;
  const [mode, setMode] = useState<Mode>('before');
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [processed, setProcessed] = useState<ProcessedClaim[]>([]);
  const [done, setDone] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  // Per-claim AI progress tracked as a record to avoid setState in effect body
  const [claimProgress, setClaimProgress] = useState<Record<number, number>>({});
  const currentProgress = claimProgress[currentIndex] ?? 0;
  const aiProcessing = mode === 'after' && started && !done && currentProgress < 100;
  const [manualStep, setManualStep] = useState(0);
  const [justification, setJustification] = useState('');
  const [approvedAmountInput, setApprovedAmountInput] = useState('');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const claim = claims[currentIndex];

  useEffect(() => {
    if (started && !done) {
      timerRef.current = setInterval(() => setElapsedSeconds(s => s + 1), 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [started, done]);

  useEffect(() => {
    if (!started || mode !== 'after' || done) return;
    // Only setState inside the interval callback — never synchronously in effect body
    const interval = setInterval(() => {
      setClaimProgress(prev => {
        const current = prev[currentIndex] ?? 0;
        if (current >= 100) { clearInterval(interval); return prev; }
        return { ...prev, [currentIndex]: Math.min(current + 8, 100) };
      });
    }, 120);
    return () => clearInterval(interval);
  }, [currentIndex, started, mode, done]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const handleDecision = (decision: Decision) => {
    const newProcessed = [...processed, { id: claim.id, decision, timeSpent: elapsedSeconds }];
    setProcessed(newProcessed);
    setJustification('');
    setApprovedAmountInput('');
    setManualStep(0);
    if (currentIndex + 1 >= claims.length) {
      setDone(true);
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      setCurrentIndex(i => i + 1);
    }

    // Scroll back to top of simulator for the next claim
    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const reset = useCallback((newMode?: Mode) => {
    setStarted(false);
    setCurrentIndex(0);
    setProcessed([]);
    setDone(false);
    setElapsedSeconds(0);
    setClaimProgress({});
    setManualStep(0);
    setJustification('');
    setApprovedAmountInput('');
    if (newMode) setMode(newMode);

    // Scroll back to top when resetting/starting
    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const decisionColor = (d: Decision) =>
    d === 'approve' ? 'text-emerald-600' : d === 'reject' ? 'text-red-600' : 'text-amber-600';

  const decisionIcon = (d: Decision) =>
    d === 'approve' ? '✓' : d === 'reject' ? '✗' : '⚑';

  const manualSteps = [
    lang === 'fi' ? tr.readPolicy : tr.readPolicy,
    lang === 'fi' ? tr.checkCoverage : tr.checkCoverage,
    lang === 'fi' ? tr.calculateAmount : tr.calculateAmount,
  ];

  return (
    <section id="simulator" className="py-24 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{tr.title}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{tr.subtitle}</p>
        </div>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-lg border border-slate-200">
            <button
              onClick={() => { if (mode !== 'before') reset('before'); }}
              className={`px-5 py-3 sm:px-6 sm:py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${mode === 'before'
                ? 'bg-slate-800 text-white shadow-md'
                : 'text-slate-500 hover:text-slate-700'
                }`}
            >
              {tr.beforeLabel}
            </button>
            <button
              onClick={() => { if (mode !== 'after') reset('after'); }}
              className={`px-5 py-3 sm:px-6 sm:py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${mode === 'after'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-500 hover:text-slate-700'
                }`}
            >
              {tr.afterLabel}
            </button>
          </div>
        </div>

        {/* Main Panel */}
        <div
          ref={containerRef}
          className={`rounded-3xl shadow-2xl overflow-hidden border transition-all duration-500 scroll-mt-24 ${mode === 'before' ? 'border-slate-300' : 'border-indigo-200'
            }`}
        >
          {/* Header bar */}
          <div className={`px-4 py-3 sm:px-6 md:px-8 md:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 ${mode === 'before' ? 'bg-slate-800' : 'bg-indigo-600'
            }`}>
            <div>
              <h3 className="text-white font-bold text-base sm:text-lg">
                {mode === 'before' ? tr.beforeTitle : tr.afterTitle}
              </h3>
              {started && !done && (
                <p className="text-white/70 text-sm mt-0.5">
                  {tr.claim} {currentIndex + 1} {tr.of} {claims.length}
                </p>
              )}
            </div>
            {started && (
              <div className="flex gap-4 sm:gap-6 sm:text-right">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide">{tr.timeElapsed}</p>
                  <p className="text-white font-mono text-lg sm:text-xl font-bold">{formatTime(elapsedSeconds)}</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide">{tr.claimsProcessed}</p>
                  <p className="text-white font-mono text-lg sm:text-xl font-bold">{processed.length}</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white">
            {/* Not started */}
            {!started && !done && (
              <div className="flex flex-col items-center justify-center py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 text-center">
                {mode === 'before' ? (
                  <>
                    <div className="text-6xl mb-6">📋</div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-3">
                      {lang === 'fi' ? 'Olet Jere. Työvuoro alkaa.' : "You are Jere. Your shift starts."}
                    </h4>
                    <p className="text-slate-500 mb-2 max-w-md">
                      {lang === 'fi'
                        ? 'Sinulla on pino hakemuksia. Jokainen pitää lukea huolella, tarkistaa vakuutusehdoista ja perustella päätös.'
                        : 'You have a stack of claims. Each one needs to be read carefully, checked against the policy, and your decision justified.'}
                    </p>
                    <p className="text-slate-400 text-sm mb-8">
                      {lang === 'fi' ? `${claims.length} tapausta odottaa` : `${claims.length} claims waiting`}
                    </p>
                    <button
                      onClick={() => setStarted(true)}
                      className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.97]"
                    >
                      {tr.startBefore}
                    </button>
                  </>
                ) : (
                  <>
                    <div className="text-6xl mb-6">🤖</div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-3">
                      {lang === 'fi' ? 'Olet Jere. Mutta nyt sinulla on apuri.' : "You are Jere. But now you have a partner."}
                    </h4>
                    <p className="text-slate-500 mb-2 max-w-md">
                      {lang === 'fi'
                        ? 'Tekoäly käy läpi jokaisen hakemuksen ennen sinua. Se tekee yhteenvedon, tarkistaa ehdot ja ehdottaa ratkaisua. Sinä tarkistat ja päätät.'
                        : 'AI pre-processes every claim before you see it. It summarizes, checks policy, and recommends a resolution. You review and decide.'}
                    </p>
                    <p className="text-slate-400 text-sm mb-8">
                      {lang === 'fi' ? `${claims.length} tapausta jonossa` : `${claims.length} claims in queue`}
                    </p>
                    <button
                      onClick={() => setStarted(true)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.97]"
                    >
                      {tr.startAfter}
                    </button>
                  </>
                )}
              </div>
            )}

            {/* BEFORE mode - active */}
            {started && !done && mode === 'before' && claim && (
              <div className="p-4 sm:p-6 md:p-8">
                {/* Claim header */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">{claim.id}</span>
                    <h4 className="text-xl font-bold text-slate-900 mt-1">
                      {lang === 'fi' ? claim.type : claim.typeEn}
                    </h4>
                    <p className="text-slate-500 text-sm">{claim.claimant} · {lang === 'fi' ? 'Vakuutus' : 'Policy'} {claim.policyNumber}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 uppercase tracking-wide">{lang === 'fi' ? 'Vaadittu korvaus' : 'Claimed'}</p>
                    <p className="text-2xl sm:text-3xl font-bold text-slate-900">€{claim.claimedAmount.toLocaleString()}</p>
                  </div>
                </div>


                {/* Raw description */}
                <div className={`mb-6 rounded-2xl p-6 border transition-all duration-300 ${manualStep >= 1 ? 'bg-emerald-50/50 border-emerald-100' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{lang === 'fi' ? 'Vahinkoilmoitus' : 'Claim Description'}</p>
                    {manualStep >= 1 && <span className="text-emerald-600 text-xs font-bold">✓ {lang === 'fi' ? 'Luettu' : 'Read'}</span>}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    {lang === 'fi' ? claim.rawDescription : claim.rawDescriptionEn}
                  </p>
                  {manualStep === 0 && (
                    <button
                      onClick={() => setManualStep(1)}
                      className="w-full bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold py-3.5 rounded-xl transition-all active:scale-[0.98]"
                    >
                      {lang === 'fi' ? 'Merkitse luetuksi' : 'Mark as read'} 📖
                    </button>
                  )}
                </div>

                {/* Policy excerpt */}
                <div className={`mb-6 rounded-2xl p-6 border transition-all duration-300 ${manualStep < 1 ? 'opacity-50 grayscale pointer-events-none' : manualStep >= 2 ? 'bg-emerald-50/50 border-emerald-100' : 'bg-amber-50 border-amber-200'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">{lang === 'fi' ? 'Vakuutusehdot (ote)' : 'Policy Terms (excerpt)'}</p>
                    {manualStep >= 2 && <span className="text-emerald-600 text-xs font-bold">✓ {lang === 'fi' ? 'Tarkistettu' : 'Checked'}</span>}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    {lang === 'fi' ? claim.policyExcerpt : claim.policyExcerptEn}
                  </p>
                  {manualStep === 1 && (
                    <button
                      onClick={() => setManualStep(2)}
                      className="w-full bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold py-3.5 rounded-xl transition-all active:scale-[0.98]"
                    >
                      {lang === 'fi' ? 'Tarkista ehdot' : 'Check coverage'} 🔍
                    </button>
                  )}
                </div>

                {/* Amount input block */}
                <div className={`mb-6 rounded-2xl p-6 border transition-all duration-300 ${manualStep < 2 ? 'opacity-50 grayscale pointer-events-none' : manualStep >= 3 ? 'bg-emerald-50/50 border-emerald-100' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{lang === 'fi' ? 'Laskenta' : 'Calculation'}</p>
                    {manualStep >= 3 && <span className="text-emerald-600 text-xs font-bold">✓ {lang === 'fi' ? 'Laskettu' : 'Calculated'}</span>}
                  </div>

                  {manualStep >= 2 && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">{tr.approvedAmount} (€)</label>
                          <input
                            type="number"
                            value={approvedAmountInput}
                            onChange={e => setApprovedAmountInput(e.target.value)}
                            placeholder={claim.approvedAmount.toString()}
                            className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-800 font-mono text-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">{tr.policyLimit} (€)</label>
                          <div className="border border-slate-200 bg-white rounded-xl px-4 py-3 text-slate-600 font-mono text-lg">
                            {claim.policyLimit.toLocaleString()}
                          </div>
                        </div>
                      </div>

                      {manualStep === 2 ? (
                        <button
                          onClick={() => setManualStep(3)}
                          className="w-full bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold py-3.5 rounded-xl transition-all active:scale-[0.98]"
                        >
                          {lang === 'fi' ? 'Vahvista laskelma' : 'Confirm calculation'} 🧮
                        </button>
                      ) : (
                        <div className="mb-0">
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-2">{tr.justification}</p>
                          <textarea
                            value={justification}
                            onChange={e => setJustification(e.target.value)}
                            placeholder={tr.justification}
                            className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-700 text-base sm:text-sm resize-none focus:outline-none focus:ring-2 focus:ring-slate-400 h-24"
                          />
                        </div>
                      )}
                    </>
                  )}
                </div>


                {/* Decision buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => handleDecision('approve')}
                    disabled={manualStep < 3 || justification.length < 5}
                    className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white py-4 sm:py-3 rounded-xl font-semibold transition-all duration-200 active:scale-[0.98]"
                  >
                    ✓ {tr.approve}
                  </button>
                  <button
                    onClick={() => handleDecision('reject')}
                    disabled={manualStep < 3 || justification.length < 5}
                    className="bg-red-600 hover:bg-red-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white py-4 sm:py-3 rounded-xl font-semibold transition-all duration-200 active:scale-[0.98]"
                  >
                    ✗ {tr.reject}
                  </button>
                  <button
                    onClick={() => handleDecision('flag')}
                    disabled={manualStep < 3 || justification.length < 5}
                    className="bg-amber-500 hover:bg-amber-600 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white py-4 sm:py-3 rounded-xl font-semibold transition-all duration-200 active:scale-[0.98]"
                  >
                    ⚑ {tr.flag}
                  </button>
                </div>
                {manualStep < 3 && (
                  <p className="text-center text-slate-400 text-sm mt-3">
                    {lang === 'fi' ? 'Suorita kaikki vaiheet ennen päätöstä' : 'Complete all steps before deciding'}
                  </p>
                )}
                {manualStep >= 3 && justification.length < 5 && (
                  <p className="text-center text-slate-400 text-sm mt-3">
                    {lang === 'fi' ? 'Kirjoita perustelu päätökselle' : 'Write a justification before deciding'}
                  </p>
                )}
              </div>
            )}

            {/* AFTER mode - active */}
            {started && !done && mode === 'after' && claim && (
              <div className="p-4 sm:p-6 md:p-8">
                {/* AI processing animation */}
                {aiProcessing ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full border-4 border-indigo-100 border-t-indigo-600 animate-spin"></div>
                      <span className="absolute inset-0 flex items-center justify-center text-2xl">🤖</span>
                    </div>
                    <p className="text-indigo-600 font-semibold text-lg mb-4">{tr.aiThinking}</p>
                    <div className="w-64 bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="h-full bg-indigo-500 rounded-full transition-all duration-150"
                        style={{ width: `${currentProgress}%` }}
                      />
                    </div>
                    <p className="text-slate-400 text-sm mt-3">{currentProgress}%</p>
                  </div>
                ) : (
                  <>
                    {/* Claim header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">{claim.id}</span>
                          <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-0.5 rounded-full">AI {lang === 'fi' ? 'Analysoitu' : 'Analyzed'}</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900">
                          {lang === 'fi' ? claim.type : claim.typeEn}
                        </h4>
                        <p className="text-slate-500 text-sm">{claim.claimant} · {lang === 'fi' ? 'Vakuutus' : 'Policy'} {claim.policyNumber}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-400 uppercase tracking-wide">{lang === 'fi' ? 'Vaadittu korvaus' : 'Claimed'}</p>
                        <p className="text-2xl sm:text-3xl font-bold text-slate-900">€{claim.claimedAmount.toLocaleString()}</p>
                      </div>
                    </div>

                    {/* AI Summary card */}
                    <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 mb-4">
                      <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide mb-2">🤖 {tr.aiSummary}</p>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {lang === 'fi' ? claim.aiSummary : claim.aiSummaryEn}
                      </p>
                    </div>

                    {/* AI Recommendation */}
                    <div className={`rounded-2xl p-5 mb-6 border ${claim.aiRecommendation === 'approve'
                      ? 'bg-emerald-50 border-emerald-200'
                      : claim.aiRecommendation === 'reject'
                        ? 'bg-red-50 border-red-200'
                        : 'bg-amber-50 border-amber-200'
                      }`}>
                      <div className="flex items-center justify-between mb-2">
                        <p className={`text-xs font-semibold uppercase tracking-wide ${claim.aiRecommendation === 'approve' ? 'text-emerald-600'
                          : claim.aiRecommendation === 'reject' ? 'text-red-600' : 'text-amber-600'
                          }`}>
                          {tr.aiRecommendation}: {claim.aiRecommendation === 'approve'
                            ? (lang === 'fi' ? '✓ Hyväksy' : '✓ Approve')
                            : claim.aiRecommendation === 'reject'
                              ? (lang === 'fi' ? '✗ Hylkää' : '✗ Reject')
                              : (lang === 'fi' ? '⚑ Tarkista' : '⚑ Flag')}
                        </p>
                        <span className="text-xs font-bold text-slate-600 bg-white rounded-full px-3 py-1 border">
                          {tr.confidence}: {claim.aiConfidence}%
                        </span>
                      </div>
                      <p className="text-slate-700 text-sm">
                        {lang === 'fi' ? claim.aiReasoning : claim.aiReasoningEn}
                      </p>
                      {claim.approvedAmount > 0 && claim.aiRecommendation === 'approve' && (
                        <div className="mt-3 pt-3 border-t border-white/50">
                          <span className="text-xs text-slate-500">{tr.approvedAmount}: </span>
                          <span className="font-bold text-slate-800">€{claim.approvedAmount.toLocaleString()}</span>
                        </div>
                      )}
                    </div>

                    {/* Decision buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button
                        onClick={() => handleDecision('approve')}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white py-4 sm:py-3 rounded-xl font-semibold transition-all duration-200 active:scale-[0.98] shadow-sm"
                      >
                        ✓ {tr.approve}
                      </button>
                      <button
                        onClick={() => handleDecision('reject')}
                        className="bg-red-600 hover:bg-red-700 text-white py-4 sm:py-3 rounded-xl font-semibold transition-all duration-200 active:scale-[0.98] shadow-sm"
                      >
                        ✗ {tr.reject}
                      </button>
                      <button
                        onClick={() => handleDecision('flag')}
                        className="bg-amber-500 hover:bg-amber-600 text-white py-4 sm:py-3 rounded-xl font-semibold transition-all duration-200 active:scale-[0.98] shadow-sm"
                      >
                        ⚑ {tr.flag}
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Done / Summary */}
            {done && (
              <div className="p-4 sm:p-6 md:p-8">
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">{mode === 'before' ? '😓' : '⚡'}</div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">
                    {mode === 'before' ? tr.beforeSummaryTitle : tr.afterSummaryTitle}
                  </h4>
                  <p className="text-slate-600 max-w-lg mx-auto">
                    {mode === 'before'
                      ? tr.beforeSummaryText(processed.length)
                      : tr.afterSummaryText(processed.length)}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
                  <div className="bg-slate-50 rounded-2xl p-3 sm:p-4 text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-slate-900">{processed.length}</p>
                    <p className="text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wide">{lang === 'fi' ? 'Tapausta' : 'Claims'}</p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-3 sm:p-4 text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-slate-900">{formatTime(elapsedSeconds)}</p>
                    <p className="text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wide">{lang === 'fi' ? 'Kokonaisaika' : 'Total time'}</p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-3 sm:p-4 text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {mode === 'before' ? '18' : '35'}
                    </p>
                    <p className="text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wide">{lang === 'fi' ? 'Tapauksia/pv' : 'Claims/day'}</p>
                  </div>
                </div>

                {/* Decision breakdown */}
                <div className="mb-8 space-y-2">
                  {processed.map((p) => (
                    <div key={p.id} className="flex items-center justify-between bg-slate-50 rounded-xl px-4 py-3">
                      <span className="text-slate-500 text-sm font-mono">{p.id}</span>
                      <span className={`font-bold text-sm ${decisionColor(p.decision)}`}>
                        {decisionIcon(p.decision)} {lang === 'fi'
                          ? (p.decision === 'approve' ? 'Hyväksytty' : p.decision === 'reject' ? 'Hylätty' : 'Tarkistukseen')
                          : (p.decision === 'approve' ? 'Approved' : p.decision === 'reject' ? 'Rejected' : 'Flagged')}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Insight box for before mode */}
                {mode === 'before' && (
                  <div className="bg-slate-900 rounded-2xl p-6 mb-6 text-center">
                    <p className="text-white/60 text-sm mb-2">{lang === 'fi' ? 'Nyt kokeile tekoälyn kanssa' : 'Now try with AI assistance'}</p>
                    <p className="text-white text-lg font-semibold mb-4">
                      {lang === 'fi' ? 'Kuinka paljon nopeammin pärjäät?' : 'How much faster can you go?'}
                    </p>
                    <button
                      onClick={() => reset('after')}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 active:scale-[0.97]"
                    >
                      {tr.tryOtherMode}
                    </button>
                  </div>
                )}

                {mode === 'after' && (
                  <div className="bg-indigo-600 rounded-2xl p-6 mb-6 text-center">
                    <p className="text-white/80 text-sm mb-2">{lang === 'fi' ? 'Haluatko kokea eron?' : 'Want to feel the difference?'}</p>
                    <p className="text-white text-lg font-semibold mb-4">
                      {lang === 'fi' ? 'Kokeile ilman tekoälyä — ja tunne ero.' : 'Try without AI — and feel the difference.'}
                    </p>
                    <button
                      onClick={() => reset('before')}
                      className="bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 active:scale-[0.97]"
                    >
                      {tr.tryManualMode}
                    </button>
                  </div>
                )}

                <div className="text-center">
                  <button
                    onClick={() => reset()}
                    className="text-slate-400 hover:text-slate-600 text-sm underline transition-colors"
                  >
                    {tr.resetShift}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
