'use client';

import { useLang } from '@/components/LanguageProvider';
import { useTheme } from '@/components/ThemeProvider';
import Link from 'next/link';

const content = {
    fi: {
        title: 'Tietosuojaseloste',
        lastUpdated: 'Päivitetty 19.2.2026',
        sections: [
            {
                heading: '1. Rekisterinpitäjä',
                body: 'RDMAIC Oy\n\nYhteystiedot tietosuoja-asioissa: tietosuoja@korvataanko.fi',
            },
            {
                heading: '2. Mitä tietoja kerätään',
                body: 'Korvataanko.fi ei kerää henkilötietoja eikä vaadi kirjautumista. Sivusto ei käytä lomakkeita, käyttäjätilejä tai evästepohjaista analytiikkaa.\n\nSivusto on täysin staattinen interaktiivinen kokemus, joka toimii selaimessa ilman käyttäjätietojen tallentamista.',
            },
            {
                heading: '3. Evästeet',
                body: 'Sivusto ei käytä evästeitä. Emme aseta toiminnallisia, analytiikka- tai markkinointievästeitä.\n\nSivuston PWA-toiminnallisuus (Progressive Web App) tallentaa sivuston tiedostoja laitteesi välimuistiin offline-käyttöä varten. Tämä on teknisesti välttämätöntä palvelun toiminnalle eikä sisällä henkilötietoja.',
            },
            {
                heading: '4. Hosting ja palvelinlokit',
                body: 'Sivusto on isännöity Vercel Inc:n palvelimilla. Vercel voi kerätä teknisiä lokitietoja, kuten:\n\n• IP-osoite\n• Selaimen tyyppi (User Agent)\n• Pyydetty sivu ja aikaleima\n\nNämä tiedot käsitellään Vercelin oman tietosuojakäytännön mukaisesti palvelun teknisen toiminnan, tietoturvan ja väärinkäytösten estämisen varmistamiseksi.',
            },
            {
                heading: '5. Fontit',
                body: 'Sivusto käyttää Google Fonts -fontteja (Geist), jotka ladataan paikallisesti Next.js:n font-optimoinnin kautta. Fontteja ei ladata Googlen palvelimilta ajon aikana, joten Google ei saa tietoja kävijöistä.',
            },
            {
                heading: '6. Ulkoiset linkit',
                body: 'Sivusto sisältää linkkejä ulkoisiin palveluihin (esim. X/Twitter). Nämä palvelut noudattavat omia tietosuojakäytäntöjään, joista emme vastaa.',
            },
            {
                heading: '7. Rekisteröidyn oikeudet',
                body: 'EU:n yleisen tietosuoja-asetuksen (GDPR) nojalla sinulla on oikeus:\n\n• Saada tietoa henkilötietojesi käsittelystä\n• Pyytää tietojesi oikaisemista tai poistamista\n• Vastustaa tietojen käsittelyä\n• Tehdä valitus tietosuojavaltuutetulle (tietosuoja.fi)\n\nKoska emme kerää henkilötietoja, näitä oikeuksia ei käytännössä tarvitse käyttää tämän sivuston osalta.',
            },
            {
                heading: '8. Muutokset',
                body: 'Päivitämme tätä tietosuojaselostetta tarvittaessa. Mahdollisista merkittävistä muutoksista ilmoitetaan sivustolla.',
            },
        ],
    },
    en: {
        title: 'Privacy Policy',
        lastUpdated: 'Last updated February 19, 2026',
        sections: [
            {
                heading: '1. Data Controller',
                body: 'RDMAIC Oy\n\nContact for privacy matters: tietosuoja@korvataanko.fi',
            },
            {
                heading: '2. Data Collection',
                body: 'Korvataanko.fi does not collect personal data and does not require login. The site does not use forms, user accounts, or cookie-based analytics.\n\nThe site is a fully static interactive experience that runs in your browser without storing user data.',
            },
            {
                heading: '3. Cookies',
                body: 'This site does not use cookies. We do not set functional, analytics, or marketing cookies.\n\nThe site\'s PWA (Progressive Web App) functionality caches site assets on your device for offline use. This is technically necessary for the service to function and does not contain personal data.',
            },
            {
                heading: '4. Hosting & Server Logs',
                body: 'The site is hosted on Vercel Inc. servers. Vercel may collect technical log data such as:\n\n• IP address\n• Browser type (User Agent)\n• Requested page and timestamp\n\nThis data is processed in accordance with Vercel\'s own privacy policy to ensure service operation, security, and abuse prevention.',
            },
            {
                heading: '5. Fonts',
                body: 'The site uses Google Fonts (Geist), which are loaded locally via Next.js font optimization. Fonts are not loaded from Google\'s servers at runtime, so Google does not receive visitor data.',
            },
            {
                heading: '6. External Links',
                body: 'The site contains links to external services (e.g., X/Twitter). These services follow their own privacy policies, for which we are not responsible.',
            },
            {
                heading: '7. Your Rights',
                body: 'Under the EU General Data Protection Regulation (GDPR), you have the right to:\n\n• Access information about the processing of your personal data\n• Request rectification or erasure of your data\n• Object to data processing\n• Lodge a complaint with the Data Protection Ombudsman (tietosuoja.fi)\n\nSince we do not collect personal data, these rights do not need to be exercised in relation to this site in practice.',
            },
            {
                heading: '8. Changes',
                body: 'We will update this privacy policy as needed. Any significant changes will be communicated on the site.',
            },
        ],
    },
};

export default function TietosuojaPage() {
    const { lang } = useLang();
    const { theme } = useTheme();
    const c = content[lang];
    const isC = theme.id === 'korvataanko-c';

    return (
        <main className={`min-h-screen bg-gradient-to-br ${theme.heroBg} transition-all duration-700`}>
            <div className="max-w-3xl mx-auto px-4 pt-28 pb-20">

                {/* Header */}
                <div className="mb-12">
                    <h1 className={`text-4xl md:text-5xl font-black mb-3 ${theme.heroTitleColor} ${isC ? 'font-mono' : ''}`}>
                        {c.title}
                    </h1>
                    <p className={`text-sm ${theme.heroSubtitleColor} ${isC ? 'font-mono' : ''}`}>
                        {c.lastUpdated}
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {c.sections.map((section, i) => (
                        <section key={i}>
                            <h2 className={`text-xl font-bold mb-3 ${theme.heroTitleColor} ${isC ? 'font-mono' : ''}`}>
                                {section.heading}
                            </h2>
                            <div className={`text-sm leading-relaxed ${theme.heroSubtitleColor} whitespace-pre-line ${isC ? 'font-mono' : ''}`}>
                                {section.body}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Back link */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <Link
                        href="/"
                        className={`text-sm font-medium transition-colors ${theme.footerAccentLink} ${isC ? 'font-mono' : ''}`}
                    >
                        ← {lang === 'fi' ? 'Takaisin etusivulle' : 'Back to home'}
                    </Link>
                </div>
            </div>
        </main>
    );
}
