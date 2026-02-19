'use client';

import { useLang } from './LanguageProvider';

export function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur rounded-full px-1 py-1">
      <button
        onClick={() => setLang('en')}
        className={`min-w-[44px] min-h-[44px] px-3 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-200 ${
          lang === 'en'
            ? 'bg-white text-slate-900 shadow-sm'
            : 'text-white/80 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('fi')}
        className={`min-w-[44px] min-h-[44px] px-3 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-200 ${
          lang === 'fi'
            ? 'bg-white text-slate-900 shadow-sm'
            : 'text-white/80 hover:text-white'
        }`}
      >
        FI
      </button>
    </div>
  );
}
