export type ThemeId = 'shift' | 'korvataanko-a' | 'korvataanko-c';

export interface SiteTheme {
  id: ThemeId;
  // Identity
  brandName: string;
  brandClasses: string;
  tagline: string;
  // Hero
  heroBg: string;
  heroBlob1: string;
  heroBlob2: string;
  heroBadgeBg: string;
  heroBadgeText: string;
  heroBadgeBorder: string;
  heroBadgeContent: string;
  heroTitleColor: string;
  heroTitleAccent: string;
  heroSubtitleColor: string;
  heroPrimaryBtn: string;
  heroSecondaryBtn: string;
  heroScrollDot: string;
  heroIsLight: boolean;
  // Nav
  navBg: string;
  navLinkColor: string;
  navMaijuLink: string;
  navMaijuLinkActive: string;
  // Story section
  storyInsightBg: string;
  // Footer
  footerBg: string;
  footerBorder: string;
  footerBrandClasses: string;
  footerAccentLink: string;
  // Switcher preview
  switcherPreviewFrom: string;
  switcherPreviewTo: string;
  switcherLabel: string;
  switcherLabelClasses: string;
  switcherDescription: string;
}

export const themes: Record<ThemeId, SiteTheme> = {

  // ── Theme 1: SHIFT. ─────────────────────────────────────────────────────────
  shift: {
    id: 'shift',
    brandName: 'SHIFT.',
    brandClasses: 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400',
    tagline: 'AI & The Future of Work',

    heroBg: 'from-slate-900 via-slate-800 to-indigo-900',
    heroBlob1: 'bg-indigo-500/10',
    heroBlob2: 'bg-purple-500/10',
    heroBadgeBg: 'bg-indigo-500/20',
    heroBadgeText: 'text-indigo-300',
    heroBadgeBorder: 'border-indigo-500/30',
    heroBadgeContent: 'AI & The Future of Work',
    heroTitleColor: 'text-white',
    heroTitleAccent: 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400',
    heroSubtitleColor: 'text-slate-300',
    heroPrimaryBtn: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-900/50 hover:shadow-indigo-900/70',
    heroSecondaryBtn: 'text-slate-300 hover:text-white border border-slate-600 hover:border-slate-400',
    heroScrollDot: 'bg-white',
    heroIsLight: false,

    navBg: 'bg-slate-900/80 backdrop-blur-md border-b border-white/10',
    navLinkColor: 'text-slate-300 hover:text-white',
    navMaijuLink: 'text-teal-400 hover:text-teal-300 border border-teal-500/30 hover:bg-teal-500/10',
    navMaijuLinkActive: 'bg-teal-500/20 text-teal-300 border border-teal-500/30',

    storyInsightBg: 'from-slate-900 to-indigo-900',

    footerBg: 'bg-slate-900',
    footerBorder: 'border-slate-800',
    footerBrandClasses: 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400',
    footerAccentLink: 'text-teal-400 hover:text-teal-300',

    switcherPreviewFrom: 'from-slate-900',
    switcherPreviewTo: 'to-indigo-800',
    switcherLabel: 'SHIFT.',
    switcherLabelClasses: 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400',
    switcherDescription: 'International · Professional',
  },

  // ── Theme 2: Korvataanko? A — Finnish, human, warm ──────────────────────────
  'korvataanko-a': {
    id: 'korvataanko-a',
    brandName: 'Korvataanko?',
    brandClasses: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400',
    tagline: 'Tekoäly ja työn tulevaisuus',

    heroBg: 'from-stone-900 via-amber-950 to-orange-900',
    heroBlob1: 'bg-amber-500/10',
    heroBlob2: 'bg-orange-500/10',
    heroBadgeBg: 'bg-amber-500/20',
    heroBadgeText: 'text-amber-300',
    heroBadgeBorder: 'border-amber-500/30',
    heroBadgeContent: '🇫🇮 Tekoäly & työn tulevaisuus',
    heroTitleColor: 'text-white',
    heroTitleAccent: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400',
    heroSubtitleColor: 'text-amber-100/80',
    heroPrimaryBtn: 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-950/60',
    heroSecondaryBtn: 'text-amber-200 hover:text-white border border-amber-700/50 hover:border-amber-500',
    heroScrollDot: 'bg-amber-300',
    heroIsLight: false,

    navBg: 'bg-stone-900/90 backdrop-blur-md border-b border-amber-900/30',
    navLinkColor: 'text-amber-200/70 hover:text-white',
    navMaijuLink: 'text-amber-400 hover:text-amber-300 border border-amber-600/40 hover:bg-amber-500/10',
    navMaijuLinkActive: 'bg-amber-500/20 text-amber-300 border border-amber-500/40',

    storyInsightBg: 'from-stone-900 to-amber-950',

    footerBg: 'bg-stone-900',
    footerBorder: 'border-stone-800',
    footerBrandClasses: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400',
    footerAccentLink: 'text-amber-400 hover:text-amber-300',

    switcherPreviewFrom: 'from-stone-900',
    switcherPreviewTo: 'to-orange-900',
    switcherLabel: 'Korvataanko?',
    switcherLabelClasses: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400',
    switcherDescription: 'Finnish · Human · Warm',
  },

  // ── Theme 3: Korvataanko? C — Insurance document aesthetic ──────────────────
  'korvataanko-c': {
    id: 'korvataanko-c',
    brandName: 'KORVATAANKO?',
    brandClasses: 'font-mono text-blue-900 tracking-widest',
    tagline: 'Lomake A-247 · Vakuutusvirasto',

    heroBg: 'from-slate-200 via-blue-50 to-slate-100',
    heroBlob1: 'bg-blue-300/40',
    heroBlob2: 'bg-slate-300/40',
    heroBadgeBg: 'bg-blue-100',
    heroBadgeText: 'text-blue-800',
    heroBadgeBorder: 'border-blue-300',
    heroBadgeContent: 'Virallinen tiedote nro 2024-AI-001',
    heroTitleColor: 'text-slate-900',
    heroTitleAccent: 'text-blue-800',
    heroSubtitleColor: 'text-slate-600',
    heroPrimaryBtn: 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/20 font-mono uppercase tracking-widest',
    heroSecondaryBtn: 'text-blue-800 hover:text-blue-950 border-2 border-blue-300 hover:border-blue-500 font-mono',
    heroScrollDot: 'bg-slate-700',
    heroIsLight: true,

    navBg: 'bg-blue-950/95 backdrop-blur-md border-b border-blue-900',
    navLinkColor: 'text-blue-200 hover:text-white',
    navMaijuLink: 'text-red-400 hover:text-red-300 border border-red-500/30 hover:bg-red-500/10',
    navMaijuLinkActive: 'bg-red-500/20 text-red-300 border border-red-500/30',

    storyInsightBg: 'from-blue-950 to-slate-900',

    footerBg: 'bg-blue-950',
    footerBorder: 'border-blue-900',
    footerBrandClasses: 'font-mono text-blue-300 tracking-widest',
    footerAccentLink: 'text-red-400 hover:text-red-300',

    switcherPreviewFrom: 'from-blue-50',
    switcherPreviewTo: 'to-slate-200',
    switcherLabel: 'KORVATAANKO?',
    switcherLabelClasses: 'font-mono text-blue-900 tracking-wider',
    switcherDescription: 'Insurance · Document · Ironic',
  },
};

export const THEME_ORDER: ThemeId[] = ['shift', 'korvataanko-a', 'korvataanko-c'];
