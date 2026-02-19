'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from './LanguageProvider';
import { useTheme } from './ThemeProvider';
import { LanguageToggle } from './LanguageToggle';
import { t } from '@/lib/translations';

export function NavBar() {
  const { lang } = useLang();
  const { theme } = useTheme();
  const tr = t[lang];
  const pathname = usePathname();
  const isMaiju = pathname === '/maiju';
  const isThemes = pathname === '/themes';
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${theme.navBg} transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="group flex items-center gap-3">
          <span className={`text-xl font-black tracking-tight ${theme.brandClasses} transition-all duration-500`}>
            {theme.brandName}
          </span>
          <span className={`hidden md:block text-xs font-medium border-l pl-3 leading-tight transition-colors duration-500 ${theme.heroIsLight
              ? 'text-blue-300/60 border-blue-700'
              : 'text-slate-500 border-slate-700'
            }`}>
            {theme.tagline.split(' · ').map((part, i) => (
              <span key={i} className="block">{part}</span>
            ))}
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="flex items-center gap-6">
          {!isMaiju && (
            <>
              <a
                href="#story"
                className={`text-sm font-medium transition-colors hidden sm:block ${theme.navLinkColor}`}
              >
                {tr.nav.story}
              </a>
              <a
                href="#simulator"
                className={`text-sm font-medium transition-colors hidden sm:block ${theme.navLinkColor}`}
              >
                {tr.nav.simulator}
              </a>
            </>
          )}

          {/* Themes link */}
          <Link
            href="/themes"
            className={`text-sm font-medium transition-colors hidden sm:block ${isThemes
                ? 'text-white font-semibold'
                : theme.navLinkColor
              }`}
          >
            {tr.nav.themes}
          </Link>

          {/* Making Of link */}
          <Link
            href="/making-of"
            className={`text-sm font-medium transition-colors hidden sm:block ${pathname === '/making-of'
                ? 'text-indigo-400 font-semibold'
                : theme.navLinkColor
              }`}
          >
            {tr.makingOf.navLabel}
          </Link>

          {/* AI Strategy pill */}
          <Link
            href="/maiju"
            className={`text-sm font-semibold px-3 py-1.5 rounded-full transition-colors hidden sm:block ${isMaiju ? theme.navMaijuLinkActive : theme.navMaijuLink
              }`}
          >
            ✦ {tr.nav.strategy}
          </Link>

          <LanguageToggle />

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="sm:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${theme.navLinkColor} ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${theme.navLinkColor} ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${theme.navLinkColor} ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div className={`sm:hidden overflow-hidden transition-all duration-300 ${theme.navBg} ${mobileOpen ? 'max-h-80 border-t border-white/10' : 'max-h-0'}`}>
        <div className="px-4 py-3 flex flex-col gap-1">
          {!isMaiju && (
            <>
              <a
                href="#story"
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${theme.navLinkColor} hover:bg-white/10`}
              >
                {tr.nav.story}
              </a>
              <a
                href="#simulator"
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${theme.navLinkColor} hover:bg-white/10`}
              >
                {tr.nav.simulator}
              </a>
            </>
          )}
          <Link
            href="/themes"
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors hover:bg-white/10 ${isThemes ? 'text-white font-semibold' : theme.navLinkColor}`}
          >
            {tr.nav.themes}
          </Link>
          <Link
            href="/making-of"
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors hover:bg-white/10 ${pathname === '/making-of' ? 'text-indigo-400 font-semibold' : theme.navLinkColor}`}
          >
            {tr.makingOf.navLabel}
          </Link>
          <Link
            href="/maiju"
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors hover:bg-white/10 ${isMaiju ? theme.navMaijuLinkActive : theme.navMaijuLink}`}
          >
            ✦ {tr.nav.strategy}
          </Link>
        </div>
      </div>
    </nav>
  );
}
