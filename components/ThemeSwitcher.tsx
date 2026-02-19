'use client';

import { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { themes, THEME_ORDER, ThemeId } from '@/lib/themes';

const THEME_ICONS: Record<ThemeId, string> = {
  'shift': '⚡',
  'korvataanko-a': '🇫🇮',
  'korvataanko-c': '📋',
};

export function ThemeSwitcher() {
  const { themeId, setThemeId } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none">

      {/* Panel */}
      <div
        className={`mb-3 transition-all duration-300 origin-bottom-right ${
          open
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden w-64 sm:w-72">
          {/* Header */}
          <div className="px-4 py-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Choose Theme
            </p>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-slate-600 transition-colors text-lg leading-none"
              aria-label="Close theme panel"
            >
              ×
            </button>
          </div>

          {/* Theme options */}
          <div className="p-2">
            {THEME_ORDER.map((id) => {
              const t = themes[id];
              const isActive = id === themeId;
              return (
                <button
                  key={id}
                  onClick={() => { setThemeId(id); setOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-3.5 rounded-xl transition-all duration-200 text-left group active:scale-[0.98] ${
                    isActive
                      ? 'bg-slate-900 shadow-lg'
                      : 'hover:bg-slate-50 active:bg-slate-100'
                  }`}
                >
                  {/* Color swatch */}
                  <div
                    className={`w-12 h-10 rounded-lg flex-shrink-0 bg-gradient-to-br ${t.switcherPreviewFrom} ${t.switcherPreviewTo} border border-slate-200/50 flex items-center justify-center text-lg shadow-sm`}
                  >
                    {THEME_ICONS[id]}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-black truncate ${
                      isActive ? t.switcherLabelClasses + ' !text-white' : 'text-slate-800'
                    }`}
                    style={isActive ? {} : undefined}
                    >
                      {isActive ? (
                        <span className="text-white">{t.switcherLabel}</span>
                      ) : (
                        <span className={t.switcherLabelClasses}>{t.switcherLabel}</span>
                      )}
                    </div>
                    <div className={`text-xs mt-0.5 truncate ${
                      isActive ? 'text-slate-400' : 'text-slate-400'
                    }`}>
                      {t.switcherDescription}
                    </div>
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <div className="flex-shrink-0">
                      <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100">
            <p className="text-xs text-slate-400 text-center">
              Three brands. One story.
            </p>
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={`pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 rounded-2xl shadow-xl flex items-center justify-center text-lg sm:text-xl transition-all duration-200 hover:shadow-2xl active:scale-[0.92] border ${
          open
            ? 'bg-slate-900 border-slate-700 rotate-12'
            : 'bg-white border-slate-200 hover:border-slate-300'
        }`}
        aria-label="Switch site theme"
        title="Switch theme"
      >
        🎨
      </button>
    </div>
  );
}
