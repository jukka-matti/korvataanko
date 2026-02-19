'use client';

import Link from 'next/link';
import { useLang } from '@/components/LanguageProvider';
import { useTheme } from '@/components/ThemeProvider';
import { t } from '@/lib/translations';

export default function MakingOfPage() {
    const { lang } = useLang();
    const { theme } = useTheme();
    const tr = t[lang].makingOf;

    // Placeholder video ID until provided by user
    const VIDEO_ID = 'dQw4w9WgXcQ';

    return (
        <main className="min-h-screen bg-slate-900 text-white">
            {/* Hero Section */}
            <section className="py-24 px-4 flex flex-col items-center justify-center text-center relative overflow-hidden bg-slate-900 text-white">

                {/* Background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <span className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 text-sm font-semibold px-4 py-2 rounded-full mb-8 border border-indigo-500/30">
                        {tr.subtitle}
                    </span>

                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
                        {tr.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                        {tr.description}
                    </p>

                    {/* Video Embed */}
                    <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 relative group">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>

                    <div className="mt-12">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-slate-300 hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 border border-slate-600 hover:border-slate-400"
                        >
                            ← {tr.back}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer-like closer */}
            <section className="py-16 px-4 bg-slate-950 border-t border-slate-800 text-center">
                <p className="text-slate-500 text-sm font-mono">
                    Variation Scouting
                </p>
            </section>
        </main>
    );
}
