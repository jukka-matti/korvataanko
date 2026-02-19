import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { NavBar } from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://korvataanko.fi'),
  title: {
    default: "SHIFT. — AI & The Future of Work",
    template: "%s | SHIFT."
  },
  description: "Two people. One AI revolution. An interactive experience showing how AI is fundamentally shifting the way we work — and what it means for all of us.",

  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'fi-FI': '/fi',
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SHIFT.",
  },
  openGraph: {
    title: "SHIFT. — AI & The Future of Work",
    description: "Meet Jere and Maiju. Two people navigating the AI shift — in completely different ways. Experience both worlds interactively.",
    url: 'https://korvataanko.fi',
    siteName: 'SHIFT.',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHIFT. — AI & The Future of Work',
    description: 'An interactive exploration of how AI is changing knowledge work.',
    creator: '@JuhaniMykkanen',
  },
};

export const viewport: Viewport = {
  themeColor: "#1e293b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SHIFT. / Korvataanko.fi',
    url: 'https://korvataanko.fi',
    description: 'An interactive exploration of AI\'s impact on knowledge work.',
    author: {
      '@type': 'Person',
      name: 'Juhani Mykkänen',
    },
    publisher: {
      '@type': 'Organization',
      name: 'RDMAIC Oy',
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <ThemeProvider>
            <NavBar />
            {children}
            <ThemeSwitcher />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
