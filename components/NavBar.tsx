'use client';

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

        {/* Nav links */}
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
        </div>
      </div>
    </nav>
  );
}
