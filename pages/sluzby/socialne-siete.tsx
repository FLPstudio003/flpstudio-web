import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function SocialneSietePage() {
  return (
    <>
      <Head>
        <title>Správa sociálnych sietí | FLPstudio.sk</title>
        <meta
          name="description"
          content="Obsah, stratégia a rast tvojej značky na sociálnych sieťach – správa s dôrazom na výsledky."
        />
      </Head>

      <div className="relative text-white min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow max-w-[1000px] mx-auto px-6 py-20 text-center">
          {/* Späť na služby */}
          <div className="mb-10 text-left">
            <Link
              href="/sluzby"
              className="inline-block border border-red-600 text-red-600 px-4 py-2 rounded-full text-sm hover:bg-red-600 hover:text-white transition"
            >
              ← Späť na všetky služby
            </Link>
          </div>

          {/* Nadpis */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Správa <span className="text-red-600">sociálnych sietí</span>
          </h1>

          {/* Popis */}
          <p className="text-white/80 max-w-[700px] mx-auto mb-12">
            Pomôžeme ti rásť online – vytvárame obsah, plánujeme stratégie a spravujeme účty tak, aby tvoja značka vynikla na sociálnych sieťach.
          </p>

          {/* Karty */}
          <div className="grid gap-6 md:grid-cols-2 text-left">
            {/* Karta 1 */}
            <div className="bg-neutral-900 p-6 rounded-xl shadow-md border border-white/10 hover:bg-neutral-800 transition">
              <h3 className="text-lg font-semibold mb-2">Tvorba obsahu</h3>
              <p className="text-sm text-white/70">
                Príspevky, stories, reels, vizuály aj texty šité na mieru pre tvoju cieľovku.
              </p>
            </div>

            {/* Karta 2 */}
            <div className="bg-neutral-900 p-6 rounded-xl shadow-md border border-white/10 hover:bg-neutral-800 transition">
              <h3 className="text-lg font-semibold mb-2">Stratégia</h3>
              <p className="text-sm text-white/70">
                Plánovanie, zverejňovanie a optimalizácia na základe cieľov značky.
              </p>
            </div>

            {/* Karta 3 */}
            <div className="bg-neutral-900 p-6 rounded-xl shadow-md border border-white/10 hover:bg-neutral-800 transition">
              <h3 className="text-lg font-semibold mb-2">Komunita</h3>
              <p className="text-sm text-white/70">
                Správa komentárov, odpovedanie na správy, budovanie vzťahu s publikom.
              </p>
            </div>

            {/* Karta 4 */}
            <div className="bg-neutral-900 p-6 rounded-xl shadow-md border border-white/10 hover:bg-neutral-800 transition">
              <h3 className="text-lg font-semibold mb-2">Analytika</h3>
              <p className="text-sm text-white/70">
                Sledovanie úspešnosti, interakcie a štatistiky pre zlepšenie dosahu.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <Link
              href="/cenova-ponuka"
              className="inline-block bg-white text-red-600 font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/90 transition"
            >
              Chcem správu sociálnych sietí
            </Link>
          </div>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}
