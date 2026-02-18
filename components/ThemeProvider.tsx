'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeId, SiteTheme, themes } from '@/lib/themes';

interface ThemeContextType {
  themeId: ThemeId;
  theme: SiteTheme;
  setThemeId: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  themeId: 'shift',
  theme: themes['shift'],
  setThemeId: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>('shift');

  return (
    <ThemeContext.Provider value={{ themeId, theme: themes[themeId], setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
