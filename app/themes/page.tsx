'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/components/ThemeProvider';
import { themes, THEME_ORDER, ThemeId } from '@/lib/themes';

// ── Mini hero preview for each theme ────────────────────────────────────────
function ThemePreview({ themeId }: { themeId: ThemeId }) {
  const t = themes[themeId];
  const isC = themeId === 'korvataanko-c';

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${t.heroBg} p-6 h-48 flex flex-col justify-center items-center text-center`}
    >
      {/* Blobs */}
      <div className={`absolute -top-8 -right-8 w-32 h-32 ${t.heroBlob1} rounded-full blur-2xl`} />
      <div className={`absolute -bottom-8 -left-8 w-32 h-32 ${t.heroBlob2} rounded-full blur-2xl`} />

      {/* Option C: faint watermark */}
      {isC && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="text-blue-200/[0.08] font-mono font-black text-4xl whitespace-nowrap"
            style={{ transform: 'rotate(-20deg)', letterSpacing: '0.15em' }}
          >
            KÄSITTELYSSÄ
          </span>
        </div>
      )}

      {/* Option C: form number */}
      {isC && (
        <div className="absolute top-3 right-3 font-mono text-[9px] text-blue-400/40 text-right">
          <div>LOMAKE A-247</div>
        </div>
      )}

      {/* Badge */}
      <span className={`relative z-10 inline-block ${t.heroBadgeBg} ${t.heroBadgeText} text-[10px] font-semibold px-2.5 py-1 rounded-full mb-3 border ${t.heroBadgeBorder} ${isC ? 'font-mono' : ''}`}>
        {isC ? 'Nro 2024-AI-001' : t.heroBadgeContent.length > 28 ? t.heroBadgeContent.slice(0, 28) + '…' : t.heroBadgeContent}
      </span>

      {/* Brand name */}
      <span className={`relative z-10 text-2xl font-black tracking-tight ${t.brandClasses}`}>
        {t.brandName}
      </span>

      {/* Tagline */}
      <span className={`relative z-10 mt-1.5 text-[11px] ${t.heroSubtitleColor} opacity-70 ${isC ? 'font-mono' : ''}`}>
        {t.tagline}
      </span>
    </div>
  );
}

// ── Theme detail data ─────────────────────────────────────────────────────────
const THEME_STORIES: Record<ThemeId, {
  concept: string;
  designDecisions: { label: string; value: string }[];
  tone: string;
  bestFor: string;
  funFact: string;
}> = {
  shift: {
    concept: 'AI is not coming — it\'s already here. The name "SHIFT." is a definitive statement, not a question. The period ends the debate. The gradient from indigo (Jere\'s traditional world) through purple and into teal (Maiju\'s AI-enabled future) is the visual metaphor: the gradient itself IS the shift happening between the two.',
    designDecisions: [
      { label: 'Palette', value: 'Indigo → Purple → Teal on deep slate' },
      { label: 'Typography', value: 'Geist Sans — clean, modern, Vercel-era' },
      { label: 'Tone', value: 'Confident, forward-looking, no hedging' },
      { label: 'Language', value: 'English — international by design' },
    ],
    tone: 'Professional, direct, globally legible',
    bestFor: 'LinkedIn posts, international audiences, video thumbnails, conference decks',
    funFact: 'The gradient direction is intentional: left-to-right reads as time moving forward. Indigo = past, teal = future.',
  },
  'korvataanko-a': {
    concept: 'Finnish has a word that English doesn\'t. "Korvata" means both "to replace" and "to compensate." "Korvataanko?" — will we be replaced? Will we be compensated? One word, two existential questions, zero comfortable answers. The warm amber palette was chosen to feel human and close, not corporate and cold. This isn\'t a tech announcement — it\'s a conversation.',
    designDecisions: [
      { label: 'Palette', value: 'Amber → Orange → Rose on warm stone-black' },
      { label: 'Typography', value: 'Geist Sans — same font, warmer soul' },
      { label: 'Tone', value: 'Conversational, slightly ironic, Finnish-direct' },
      { label: 'Language', value: 'Finnish first — authentic to the story\'s origin' },
    ],
    tone: 'Human, warm, slightly self-aware, culturally rooted',
    bestFor: 'Finnish social media, talks to Finnish audiences, personal brand content',
    funFact: 'The story was originally inspired by a Finnish LinkedIn post by Juhani Mykkänen. "Korvataanko?" brings it home.',
  },
  'korvataanko-c': {
    concept: 'What if the insurance company issued an official form about the AI disruption of its own workforce? LOMAKE A-247/2024 — VAHINGONKORVAUSILMOITUS. Jere works for an insurance company. Now he needs to file a claim against his own displacement. The joke writes itself. The monospace font, form grid background, "KÄSITTELYSSÄ" watermark, and fine print (*"Vakuutusyhtiö ei vastaa mahdollisista ammatin katoamisista"*) are the punchline.',
    designDecisions: [
      { label: 'Palette', value: 'Institutional blue + cream paper on white' },
      { label: 'Typography', value: 'Geist Mono — typewriter, bureaucratic, official' },
      { label: 'Decorations', value: 'Form grid, diagonal watermark, form reference numbers' },
      { label: 'CTAs', value: 'Red rubber stamp style, square corners, ALL CAPS' },
    ],
    tone: 'Officially absurd, bureaucratically ironic, knowing wink',
    bestFor: 'Conferences, humor-aware audiences, creative industry talks, viral Finnish content',
    funFact: 'The fine print says: "The insurance company is not responsible for possible job losses. See general terms section 7.3: Automation."',
  },
};

const ACCENT_COLORS: Record<ThemeId, string> = {
  'shift': 'from-indigo-500 to-teal-500',
  'korvataanko-a': 'from-amber-500 to-orange-500',
  'korvataanko-c': 'from-blue-700 to-red-600',
};

const BORDER_COLORS: Record<ThemeId, string> = {
  'shift': 'border-indigo-100 hover:border-indigo-300',
  'korvataanko-a': 'border-amber-100 hover:border-amber-300',
  'korvataanko-c': 'border-blue-100 hover:border-blue-300',
};

const ACTIVATE_BTN: Record<ThemeId, string> = {
  'shift': 'bg-indigo-600 hover:bg-indigo-700 text-white',
  'korvataanko-a': 'bg-amber-600 hover:bg-amber-500 text-white',
  'korvataanko-c': 'bg-red-600 hover:bg-red-700 text-white font-mono uppercase tracking-wide',
};

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ThemesPage() {
  const { themeId, theme, setThemeId } = useTheme();
  const router = useRouter();

  function activateTheme(id: ThemeId) {
    setThemeId(id);
    router.push('/');
  }

  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            Design System
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Three Brands.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-amber-500 to-blue-600">
              One Story.
            </span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
            The same narrative about AI and the future of work — told through three completely
            different visual identities. Each brand makes a different argument about tone,
            audience, and meaning.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-sm text-slate-400">Currently active:</span>
            <span className={`text-sm font-black px-3 py-1 rounded-full bg-slate-100 ${theme.brandClasses}`}>
              {theme.brandName}
            </span>
          </div>
        </div>
      </section>

      {/* ── THEME CARDS ── */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {THEME_ORDER.map((id, index) => {
            const t = themes[id];
            const story = THEME_STORIES[id];
            const isActive = id === themeId;

            return (
              <div
                key={id}
                className={`rounded-3xl border-2 transition-all duration-300 overflow-hidden ${
                  isActive
                    ? 'border-slate-900 shadow-2xl shadow-slate-200'
                    : `border-slate-100 ${BORDER_COLORS[id]} shadow-lg`
                }`}
              >
                {/* Active badge */}
                {isActive && (
                  <div className="bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 text-center">
                    ✓ Currently active
                  </div>
                )}

                <div className="p-8 md:p-10">
                  <div className="grid md:grid-cols-2 gap-8 items-start">

                    {/* Left: preview + activate */}
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${ACCENT_COLORS[id]}`} />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                          Theme {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <ThemePreview themeId={id} />

                      {/* Colour swatches */}
                      <div className="mt-4 flex gap-2">
                        {id === 'shift' && (
                          <>
                            <div className="flex-1 h-2 rounded-full bg-indigo-500" title="Indigo" />
                            <div className="flex-1 h-2 rounded-full bg-purple-500" title="Purple" />
                            <div className="flex-1 h-2 rounded-full bg-teal-500" title="Teal" />
                            <div className="flex-1 h-2 rounded-full bg-slate-900" title="Slate" />
                          </>
                        )}
                        {id === 'korvataanko-a' && (
                          <>
                            <div className="flex-1 h-2 rounded-full bg-amber-500" title="Amber" />
                            <div className="flex-1 h-2 rounded-full bg-orange-500" title="Orange" />
                            <div className="flex-1 h-2 rounded-full bg-rose-500" title="Rose" />
                            <div className="flex-1 h-2 rounded-full bg-stone-900" title="Stone" />
                          </>
                        )}
                        {id === 'korvataanko-c' && (
                          <>
                            <div className="flex-1 h-2 rounded-full bg-blue-800" title="Navy" />
                            <div className="flex-1 h-2 rounded-full bg-blue-200" title="Light blue" />
                            <div className="flex-1 h-2 rounded-full bg-red-600" title="Stamp red" />
                            <div className="flex-1 h-2 rounded-full bg-slate-100" title="Paper" />
                          </>
                        )}
                      </div>

                      {/* Activate button */}
                      <button
                        onClick={() => activateTheme(id)}
                        disabled={isActive}
                        className={`mt-5 w-full py-3.5 rounded-xl font-semibold text-sm transition-all active:scale-[0.98] ${
                          isActive
                            ? 'bg-slate-100 text-slate-400 cursor-default'
                            : ACTIVATE_BTN[id]
                        }`}
                      >
                        {isActive
                          ? '✓ Active'
                          : id === 'korvataanko-c'
                          ? `[ AKTIVOI: ${t.brandName} ]`
                          : `Activate ${t.brandName}`}
                      </button>
                    </div>

                    {/* Right: story */}
                    <div>
                      <h2 className={`text-3xl font-black mb-1 ${t.brandClasses}`}>
                        {t.brandName}
                      </h2>
                      <p className="text-slate-400 text-sm mb-5">{t.tagline}</p>

                      {/* Concept */}
                      <p className="text-slate-700 leading-relaxed mb-6 text-sm">
                        {story.concept}
                      </p>

                      {/* Design decisions */}
                      <div className="space-y-2 mb-5">
                        {story.designDecisions.map((d) => (
                          <div key={d.label} className="flex items-start gap-2 text-sm">
                            <span className="flex-shrink-0 font-semibold text-slate-500 w-24 pt-0.5">{d.label}</span>
                            <span className="text-slate-700">{d.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Best for */}
                      <div className="bg-slate-50 rounded-2xl p-4 mb-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Best for</p>
                        <p className="text-slate-600 text-sm">{story.bestFor}</p>
                      </div>

                      {/* Fun fact */}
                      <div className={`rounded-2xl p-4 bg-gradient-to-r ${ACCENT_COLORS[id]} bg-opacity-5`}>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">✦ Design note</p>
                        <p className="text-slate-600 text-sm italic">{story.funFact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            Under the Hood
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
            Built with a live theme engine
          </h2>
          <p className="text-slate-500 leading-relaxed mb-8">
            Switching themes isn&apos;t just a colour swap — the brand name, tagline, badge
            content, button style, typography flavour, and even decorative elements all
            change simultaneously. Option C adds a form grid background, diagonal watermark,
            monospace type, and fine print that&apos;s specific to the insurance narrative.
            All transitions are 500–700ms CSS so the change feels intentional on camera.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { label: 'Themes', value: '3' },
              { label: 'Design tokens per theme', value: '20+' },
              { label: 'Lines of TypeScript', value: '~100' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 text-left font-mono text-sm overflow-x-auto">
            <p className="text-slate-400 mb-3 text-xs">// lib/themes.ts — each theme is just a typed object</p>
            <p className="text-indigo-400">{'const themes: Record<ThemeId, SiteTheme> = {'}</p>
            <p className="text-white ml-4">{'shift: { brandName: "SHIFT.", heroBg: "from-slate-900...", ... },'}</p>
            <p className="text-amber-400 ml-4">{"'korvataanko-a': { brandName: \"Korvataanko?\", heroBg: \"from-stone-900...\", ... },"}</p>
            <p className="text-blue-300 ml-4">{"'korvataanko-c': { brandName: \"KORVATAANKO?\", heroIsLight: true, ... },"}</p>
            <p className="text-indigo-400">{'}'}</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER NAV ── */}
      <section className="py-12 px-4 border-t border-slate-100">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="text-slate-600 hover:text-slate-900 font-semibold text-sm px-6 py-3 rounded-xl border border-slate-200 hover:border-slate-400 transition-all"
          >
            ← Back to main site
          </Link>
          <Link
            href="/maiju"
            className="text-teal-700 hover:text-teal-900 font-semibold text-sm px-6 py-3 rounded-xl border border-teal-200 hover:border-teal-400 bg-teal-50 hover:bg-teal-100 transition-all"
          >
            ✦ See Maiju&apos;s Strategy Demo →
          </Link>
        </div>
      </section>
    </main>
  );
}
