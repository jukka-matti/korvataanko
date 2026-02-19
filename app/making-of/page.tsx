'use client';

import Link from 'next/link';
import { useLang } from '@/components/LanguageProvider';
import { useTheme } from '@/components/ThemeProvider';
import { t } from '@/lib/translations';

export default function MakingOfPage() {
    const { lang } = useLang();
    const { theme } = useTheme();
    const tr = t[lang].makingOf;

    const VIDEO_ID = '_DJopVhdVRY';

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
                </div>
            </section>

            {/* Tech Details Section */}
            <section className="py-20 px-4 bg-slate-950 border-t border-slate-800">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
                        {tr.techTitle}
                    </h2>
                    <p className="text-slate-400 text-center text-lg mb-12 max-w-2xl mx-auto">
                        {tr.techDescription}
                    </p>

                    {/* GitHub Card */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-3xl p-8 border border-slate-700 mb-12 text-center">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            {/* GitHub icon */}
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xl font-bold font-mono text-white">jukka-matti/korvataanko</span>
                        </div>
                        <a
                            href="https://github.com/jukka-matti/korvataanko"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-2xl hover:bg-slate-200 transition-all duration-200 text-lg"
                        >
                            {tr.githubButton}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile Fix Story */}
                    <div className="bg-gradient-to-br from-indigo-950/50 to-purple-950/50 rounded-3xl p-8 md:p-10 border border-indigo-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-indigo-500/20 text-indigo-300 text-xs font-bold px-3 py-1.5 rounded-full border border-indigo-500/30">
                                Claude Code & Opus 4.6
                            </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-black mb-4">
                            {tr.mobileFixTitle}
                        </h3>

                        <p className="text-slate-300 text-lg leading-relaxed">
                            {tr.mobileFixDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Back + Footer */}
            <section className="py-16 px-4 bg-slate-950 border-t border-slate-800 text-center">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 border border-slate-600 hover:border-slate-400 mb-8"
                >
                    ← {tr.back}
                </Link>
                <p className="text-slate-500 text-sm font-mono mt-4">
                    Variation Scouting
                </p>
            </section>
        </main>
    );
}
