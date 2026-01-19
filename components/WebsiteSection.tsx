import Image from "next/image";

export default function WebsiteSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 text-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Obrázok naľavo na PC, dole na mobile */}
        <div className="order-2 md:order-1">
          <div className="w-full h-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden">
            <Image
              src="/images/view2.png"
              alt="Ukážka webu"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Text napravo na PC, hore na mobile */}
        <div className="order-1 md:order-2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Web, ktorý <span className="text-red-600">predáva</span> a{" "}
            <span className="text-red-600">reprezentuje</span>
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Nepotrebujete len stránku. Potrebujete nástroj, ktorý vašich
            zákazníkov presvedčí, zaujme a dovedie k akcii. Navrhneme web s
            dôrazom na používateľský zážitok, vizuál, aj funkčnosť.
          </p>

          <ul className="space-y-3 text-gray-200 mb-8">
            <li>✅ Dizajn na mieru – žiadne šablóny</li>
            <li>✅ Mobilná responzivita a moderné technológie</li>
            <li>✅ Obsah a call-to-action prvky, ktoré fungujú</li>
            <li>✅ Zabezpečenie, optimalizácia rýchlosti a SEO</li>
            <li>✅ Jednoduchá správa a následná podpora</li>
          </ul>

          <a
            href="/cenova-ponuka"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
          >
            Nechaj si navrhnúť svoj vlastný web
          </a>
        </div>
      </div>
    </section>
  );
}
