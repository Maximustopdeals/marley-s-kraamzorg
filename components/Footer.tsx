"use client";

import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <>
      {/* ═══════ HERO SECTION ═══════ */}
      <section
        className="relative w-full min-h-[40vh] md:min-h-[35vh] overflow-hidden flex items-center justify-center bg-[#FFF5FA]"
      >
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20 md:pt-24 pb-12">
          <div className="inline-flex items-center gap-2 bg-white/70 border border-gray-300 rounded-full px-5 py-2 mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9A1E61" strokeWidth="2">
              <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="font-cinzel text-xs uppercase tracking-[0.12em] text-gray-500">
              Privacy & Cookies
            </span>
          </div>

          <h1 className="font-cinzel text-2xl md:text-4xl lg:text-5xl uppercase leading-tight tracking-tight mb-6" style={{ color: "#9A1E61" }}>
            Cookiebeleid
          </h1>

          <div className="w-16 h-0.5 bg-gray-400 mx-auto mb-6" style={{ opacity: 0.3 }} />

          <p className="font-body text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Marley&apos;s Kraamzorg — Rotterdam
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs font-cinzel uppercase tracking-wider">Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce-gentle">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ═══════ COOKIE POLICY CONTENT ═══════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="font-cinzel text-2xl md:text-3xl mb-4" style={{ color: "#9A1E61" }}>
                Cookieverklaring
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welkom op de website van Marley&apos;s Kraamzorg. Wij vinden uw privacy belangrijk en gaan zorgvuldig om met persoonsgegevens. Op deze pagina leggen wij uit welke cookies wij gebruiken, waarom wij deze gebruiken en hoe u uw voorkeuren kunt beheren.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Door gebruik te maken van onze website gaat u akkoord met het gebruik van cookies zoals beschreven in deze verklaring.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="font-cinzel text-xl mb-4" style={{ color: "#9A1E61" }}>
                Wat zijn cookies?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Cookies zijn kleine tekstbestanden die tijdens uw bezoek aan onze website op uw computer, tablet of smartphone worden opgeslagen. Deze bestanden helpen de website correct te functioneren en geven ons inzicht in het gebruik van de website, zodat wij onze dienstverlening kunnen verbeteren.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="font-cinzel text-xl mb-6" style={{ color: "#9A1E61" }}>
                Welke cookies gebruiken wij?
              </h3>

              <div className="mb-8 bg-[#FFF5FA] rounded-2xl p-6">
                <h4 className="font-cinzel text-lg mb-3" style={{ color: "#9A1E61" }}>
                  1. Functionele cookies
                </h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Deze cookies zijn noodzakelijk voor het goed functioneren van de website. Zonder deze cookies kunnen bepaalde onderdelen van de website niet correct werken.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2 font-semibold">Voorbeelden:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Het onthouden van cookievoorkeuren</li>
                  <li>Beveiliging van formulieren</li>
                  <li>Correct functioneren van de website op verschillende apparaten</li>
                </ul>
                <p className="text-gray-600 text-sm mt-3 italic">
                  Deze cookies verzamelen geen persoonlijke gegevens.
                </p>
              </div>

              <div className="mb-8 bg-gray-50 rounded-2xl p-6">
                <h4 className="font-cinzel text-lg mb-3" style={{ color: "#9A1E61" }}>
                  2. Analytische cookies
                </h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Wij gebruiken analytische cookies om inzicht te krijgen in het gebruik van onze website. Hiermee kunnen wij de prestaties van de website verbeteren en de gebruikservaring optimaliseren.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2 font-semibold">Wij gebruiken onder andere:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Google Analytics</li>
                </ul>
                <p className="text-gray-600 text-sm mt-3 italic">
                  De gegevens worden zoveel mogelijk geanonimiseerd en niet gebruikt om bezoekers persoonlijk te identificeren.
                </p>
              </div>

              <div className="mb-8 bg-[#FFF5FA] rounded-2xl p-6">
                <h4 className="font-cinzel text-lg mb-3" style={{ color: "#9A1E61" }}>
                  3. Marketing- en trackingcookies
                </h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Met marketingcookies kunnen wij relevante informatie en advertenties tonen via externe platforms zoals Google of social media.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2 font-semibold">Deze cookies kunnen bijvoorbeeld gebruikt worden voor:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Het meten van advertentieprestaties</li>
                  <li>Remarketingcampagnes</li>
                  <li>Het tonen van relevante content</li>
                </ul>
                <p className="text-gray-600 text-sm mt-3 italic">
                  Deze cookies worden alleen geplaatst nadat u hiervoor toestemming heeft gegeven.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="font-cinzel text-xl mb-4" style={{ color: "#9A1E61" }}>
                Cookies beheren of uitschakelen
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Bij uw eerste bezoek aan onze website kunt u uw cookievoorkeuren instellen via de cookiebanner.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                U kunt cookies daarnaast altijd verwijderen of blokkeren via de instellingen van uw browser. Houd er rekening mee dat sommige onderdelen van de website hierdoor mogelijk minder goed functioneren.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2 font-semibold">
                Meer informatie over het beheren van cookies vindt u via de helpfunctie van uw browser:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Google Chrome</li>
                <li>Mozilla Firefox</li>
                <li>Safari</li>
                <li>Microsoft Edge</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="font-cinzel text-xl mb-4" style={{ color: "#9A1E61" }}>
                Persoonsgegevens en privacy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Voor meer informatie over hoe wij omgaan met persoonsgegevens verwijzen wij u naar onze privacyverklaring.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="font-cinzel text-xl mb-4" style={{ color: "#9A1E61" }}>
                Wijzigingen in deze cookieverklaring
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Marley&apos;s Kraamzorg behoudt zich het recht voor deze cookieverklaring te wijzigen. Wij adviseren u deze pagina regelmatig te raadplegen zodat u op de hoogte blijft van eventuele wijzigingen.
              </p>
            </div>

            <div className="bg-[#FFF5FA] rounded-2xl p-8 text-center">
              <h3 className="font-cinzel text-xl mb-4" style={{ color: "#9A1E61" }}>
                Contactgegevens
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Marley&apos;s Kraamzorg</strong><br />
                Rotterdam, Nederland
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Heeft u vragen over ons cookiebeleid of uw privacy? Neem dan gerust contact met ons op via het contactformulier op onze website.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300"
                style={{ backgroundColor: "#9A1E61", color: "white" }}
              >
                Ga naar contactformulier
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
