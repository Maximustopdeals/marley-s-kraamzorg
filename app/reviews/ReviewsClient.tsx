"use client";

import { StarIcon } from "@/components/StarIcon";

export default function ReviewsClient() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section
        className="relative w-full min-h-[60vh] md:min-h-[55vh] overflow-hidden flex items-center justify-center bg-[#FFF5FA]"
      >
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20 md:pt-24 pb-12">
          {/* Badge - zwart/grijs */}
          <div className="inline-flex items-center gap-2 bg-white/70 border border-gray-300 rounded-full px-5 py-2 mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
              <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="font-cinzel text-xs uppercase tracking-[0.12em] text-gray-500">
              Reviews
            </span>
          </div>

          {/* ALLEEN de titel heeft kleur #9A1E61 */}
          <h1 className="font-cinzel text-2xl md:text-4xl lg:text-5xl uppercase leading-tight tracking-tight mb-6" style={{ color: "#9A1E61" }}>
            Vertel over uw ervaring met Marley&apos;s Kraamzorg
          </h1>

          {/* Lijn onder titel - zwart/grijs */}
          <div className="w-16 h-0.5 bg-gray-400 mx-auto mb-6" style={{ opacity: 0.3 }} />

          {/* Paragraaf - zwart/grijs */}
          <p className="font-body text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Bij Marley&apos;s Kraamzorg ben ik, Lisa, dankbaar dat ik met liefde en zorg zoveel gezinnen
            heb mogen ondersteunen in de bijzondere periode na de geboorte. Jouw ervaring is niet
            alleen belangrijk voor mij, maar ook voor toekomstige ouders in Rotterdam en omgeving
            die een zorgverlener zoeken waar ze op kunnen vertrouwen.
          </p>

          <div className="flex justify-center">
            <StarIcon size="md" fillColor="#9A1E61" strokeColor="#4A1A3D" animate />
          </div>
        </div>

        {/* Scroll indicator - zwart/grijs */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs font-cinzel uppercase tracking-wider">Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce-gentle">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ═══════ ELFSIGHT GOOGLE REVIEWS WIDGET ═══════ */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-main max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-5 py-2 mb-6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span className="font-cinzel text-xs uppercase tracking-[0.12em] text-gray-500">
                Echte ervaringen
              </span>
            </div>
            <h2 className="font-cinzel text-2xl md:text-3xl lg:text-4xl uppercase mb-4" style={{ color: "#9A1E61" }}>
              Wat ouders zeggen
            </h2>
            <div className="w-16 h-0.5 bg-gray-400 mx-auto mb-6" style={{ opacity: 0.3 }} />
            <p className="font-body text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Lees hieronder de ervaringen van gezinnen die ik heb mogen begeleiden tijdens hun kraamperiode.
            </p>
          </div>

          {/* ═══════ ELFSIGHT WIDGET ═══════ */}
          <div className="max-w-5xl mx-auto">
            <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
            <div className="elfsight-app-217006b8-8c72-4abf-a112-e77497452b93" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>
    </>
  );
}
