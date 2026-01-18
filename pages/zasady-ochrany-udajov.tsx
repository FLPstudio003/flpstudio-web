import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Zásady ochrany údajov | FLPstudio.sk</title>
        <meta name="description" content="Zásady ochrany osobných údajov pre FLPstudio.sk" />
      </Head>

      <Header />

      <main className="max-w-[900px] mx-auto px-6 py-20 text-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Zásady <span className="text-red-600">ochrany osobných údajov</span>
        </h1>

        <div className="space-y-8 text-white/90 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-red-600 mb-2">1. Základné informácie</h2>
            <p>
              Tieto zásady upravujú spôsob, akým spoločnosť FLPstudio.sk zhromažďuje, používa a chráni osobné údaje svojich klientov
              v súlade s Nariadením GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-red-600 mb-2">2. Prevádzkovateľ</h2>
            <p>
              FLPstudio.sk<br />
              Meno: Filip Pavlík<br />
              Sídlo: 1. Mája 372, 049 41, Krásnohorské Podhradie<br />
              IČO: 56410697<br />
              Email: info@flpstudio.sk
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-red-600 mb-2">3. Aké údaje spracovávame?</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Meno a priezvisko</li>
              <li>Emailová adresa</li>
              <li>Telefónne číslo</li>
              <li>Prípadné ďalšie informácie poskytnuté v správe</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-red-600 mb-2">4. Účel spracovania údajov</h2>
            <p>Údaje používame výlučne na účely:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>vybavenia dopytu klienta,</li>
              <li>komunikácie ohľadom objednávok,</li>
              <li>vyhotovenia a doručenia služieb,</li>
              <li>fakturácie.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-red-600 mb-2">5. Právny základ</h2>
            <p>
              Spracovanie údajov je založené na článku 6 ods. 1 písm. b) GDPR – plnenie zmluvy a predzmluvných opatrení.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-red-600 mb-2">6. Cookies</h2>
            <p>
              Na webe používame súbory cookies pre technické a analytické účely. Cookies môžete spravovať cez cookie banner.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-red-600 mb-2">7. Doba uchovávania údajov</h2>
            <p>
              Osobné údaje uchovávame po dobu nevyhnutnú na vybavenie dopytu a archiváciu účtovných dokladov v súlade s platnou legislatívou.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-red-600 mb-2">8. Vaše práva</h2>
            <p>Máte právo:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>na prístup k údajom</li>
              <li>na opravu</li>
              <li>na vymazanie</li>
              <li>na obmedzenie spracovania</li>
              <li>na prenositeľnosť údajov</li>
              <li>namietať voči spracovaniu</li>
              <li>podať sťažnosť na Úrad na ochranu osobných údajov</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-red-600 mb-2">9. Kontakt</h2>
            <p>
              Ak máte akékoľvek otázky ohľadom ochrany osobných údajov, kontaktujte nás na adrese info@flpstudio.sk.
            </p>
          </section>

          <p className="text-white/60 mt-8 text-sm text-center">
            Posledná aktualizácia: január 2026
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
