'use client';

import { useLang } from '@/components/LanguageProvider';
import { useTheme } from '@/components/ThemeProvider';
import { t } from '@/lib/translations';
import { Simulator } from '@/components/Simulator';
import Link from 'next/link';

export default function Home() {
  const { lang } = useLang();
  const { theme } = useTheme();
  const tr = t[lang];
  const isC = theme.id === 'korvataanko-c';

  return (
    <main>
      {/* ── HERO ── */}
      <section
        className={`min-h-screen bg-gradient-to-br ${theme.heroBg} flex flex-col items-center justify-center px-4 text-center relative overflow-hidden transition-all duration-700`}
      >
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute -top-40 -right-40 w-96 h-96 ${theme.heroBlob1} rounded-full blur-3xl transition-colors duration-700`} />
          <div className={`absolute -bottom-40 -left-40 w-96 h-96 ${theme.heroBlob2} rounded-full blur-3xl transition-colors duration-700`} />
        </div>

        {/* ── Option C decorations: insurance form elements ── */}
        {isC && (
          <>
            {/* Form reference number */}
            <div className="absolute top-20 right-6 md:right-12 font-mono text-xs text-blue-400/50 text-right pointer-events-none select-none">
              <div>LOMAKE A-247/2024</div>
              <div>VAHINGONKORVAUSILMOITUS</div>
            </div>
            {/* Subtle grid lines (form paper effect) */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, #1e3a5f 0px, #1e3a5f 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #1e3a5f 0px, #1e3a5f 1px, transparent 1px, transparent 80px)',
              }}
            />
            {/* Diagonal watermark */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
              aria-hidden="true"
            >
              <span
                className="text-blue-200/[0.07] font-mono font-black text-8xl md:text-9xl whitespace-nowrap"
                style={{ transform: 'rotate(-25deg)', letterSpacing: '0.2em' }}
              >
                KÄSITTELYSSÄ
              </span>
            </div>
          </>
        )}

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">

          {/* Badge */}
          <span className={`inline-block ${theme.heroBadgeBg} ${theme.heroBadgeText} text-sm font-semibold px-4 py-2 rounded-full mb-8 border ${theme.heroBadgeBorder} transition-all duration-500 ${isC ? 'font-mono text-xs' : ''}`}>
            {theme.heroBadgeContent}
          </span>

          {/* Title */}
          <h1 className={`text-6xl md:text-8xl font-black ${theme.heroTitleColor} mb-6 leading-tight tracking-tight transition-colors duration-500 ${isC ? 'font-mono text-5xl md:text-7xl' : ''}`}>
            {tr.hero.title}
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl ${theme.heroSubtitleColor} mb-12 leading-relaxed transition-colors duration-500 ${isC ? 'font-mono text-lg md:text-xl' : ''}`}>
            {isC
              ? `[${tr.hero.subtitle}]`
              : tr.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#simulator"
              className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 active:scale-95 ${theme.heroPrimaryBtn} ${isC ? 'rounded-none border-2 border-red-600' : ''}`}
            >
              {isC ? `[ ${tr.hero.cta} ]` : `${tr.hero.cta} →`}
            </a>
            <a
              href="#story"
              className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${theme.heroSecondaryBtn} ${isC ? 'rounded-none' : ''}`}
            >
              {isC ? `> ${tr.hero.scroll}` : `${tr.hero.scroll} ↓`}
            </a>
          </div>

          {/* Option C: fine print */}
          {isC && (
            <p className="mt-8 font-mono text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
              * Tämä ilmoitus on laadittu tekoälyavusteisesti. Vakuutusyhtiö ei vastaa mahdollisista ammatin katoamisista. Ks. yleiset sopimusehdot kohta 7.3: &quot;Automaatio&quot;.
            </p>
          )}
        </div>

        {/* Scroll dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1 opacity-50">
          {[0, 150, 300].map((delay) => (
            <div
              key={delay}
              className={`w-1.5 h-1.5 ${theme.heroScrollDot} rounded-full animate-bounce transition-colors duration-500`}
              style={{ animationDelay: `${delay}ms` }}
            />
          ))}
        </div>
      </section>

      {/* ── STORY SECTION ── (white bg, always the same) */}
      <section id="story" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 text-center mb-16">
            {tr.story.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Maiju Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/30 rounded-full -translate-y-8 translate-x-8 blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">{tr.story.maijuTitle}</h3>
                    <p className="text-emerald-700 font-medium text-sm">{tr.story.maijuRole}</p>
                  </div>
                  <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {tr.story.maijuLabel}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/60 rounded-2xl p-4">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                      {lang === 'fi' ? 'Ennen' : 'Before'}
                    </p>
                    <p className="text-slate-700 text-sm">{tr.story.maijuBefore}</p>
                  </div>
                  <div className="bg-emerald-100/60 rounded-2xl p-4">
                    <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1">
                      {lang === 'fi' ? 'Nyt' : 'Now'}
                    </p>
                    <p className="text-slate-700 text-sm">{tr.story.maijuAfter}</p>
                  </div>
                </div>
                <p className="mt-6 text-slate-600 text-sm leading-relaxed italic border-l-4 border-emerald-400 pl-4">
                  {tr.story.maijuResult}
                </p>
              </div>
            </div>

            {/* Jere Card */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-300/30 rounded-full -translate-y-8 translate-x-8 blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">{tr.story.jereTitle}</h3>
                    <p className="text-slate-500 font-medium text-sm">{tr.story.jereRole}</p>
                  </div>
                  <span className="bg-slate-700 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {tr.story.jereLabel}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/60 rounded-2xl p-4">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                      {lang === 'fi' ? 'Ennen' : 'Before'}
                    </p>
                    <p className="text-slate-700 text-sm">{tr.story.jereBefore}</p>
                  </div>
                  <div className="bg-slate-200/60 rounded-2xl p-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                      {lang === 'fi' ? 'Nyt' : 'Now'}
                    </p>
                    <p className="text-slate-700 text-sm">{tr.story.jereAfter}</p>
                  </div>
                </div>
                <p className="mt-6 text-slate-600 text-sm leading-relaxed italic border-l-4 border-slate-400 pl-4">
                  {tr.story.jereResult}
                </p>
              </div>
            </div>
          </div>

          {/* Insight banner — theme-aware */}
          <div className={`mt-12 bg-gradient-to-r ${theme.storyInsightBg} rounded-3xl p-8 text-center transition-all duration-700`}>
            <p className={`text-white text-xl md:text-2xl font-semibold leading-relaxed ${isC ? 'font-mono' : ''}`}>
              &ldquo;{tr.story.insight}&rdquo;
            </p>
            <p className="text-indigo-300 text-sm mt-4">— Juhani Mykkänen</p>
          </div>
        </div>
      </section>

      {/* ── SIMULATOR ── */}
      <Simulator />

      {/* ── FOOTER ── */}
      <footer className={`${theme.footerBg} py-16 px-4 text-center border-t ${theme.footerBorder} transition-all duration-700`}>

        {/* Brand wordmark */}
        <div className="mb-6">
          <span className={`text-4xl font-black tracking-tight ${theme.footerBrandClasses} transition-all duration-500`}>
            {theme.brandName}
          </span>
          <p className={`text-slate-500 text-xs mt-1 uppercase tracking-widest font-medium ${isC ? 'font-mono' : ''}`}>
            {theme.tagline}
          </p>
        </div>

        {/* Cross-link to Maiju */}
        <div className="mb-8">
          <a
            href="/maiju"
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${theme.footerAccentLink}`}
          >
            ✦ {tr.nav.strategy} →
          </a>
        </div>

        <div className="max-w-lg mx-auto space-y-2 mb-6">
          <p className={`text-slate-300 font-semibold text-sm ${isC ? 'font-mono' : ''}`}>{tr.footer.built}</p>
          <p className="text-slate-400 text-sm">
            {tr.footer.inspired}{' '}
            <a
              href="https://x.com/JuhaniMykkanen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 underline"
            >
              Juhani Mykkänen
            </a>
          </p>
        </div>

        <p className={`text-slate-600 text-xs max-w-lg mx-auto leading-relaxed ${isC ? 'font-mono' : ''}`}>
          {isC
            ? `§ ${tr.footer.description} — Vakuutuskirja nro AI-2024-001`
            : tr.footer.description}
        </p>

        {/* Privacy policy link */}
        <div className="mt-6">
          <Link
            href="/tietosuoja"
            className={`text-xs transition-colors ${isC ? 'font-mono text-blue-400/60 hover:text-blue-300' : 'text-slate-500 hover:text-slate-300'}`}
          >
            {tr.footer.privacy}
          </Link>
        </div>
      </footer>
    </main>
  );
}
