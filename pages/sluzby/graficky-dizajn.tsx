import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function GrafickyDizajn() {
  return (
    <>
      <Head>
        <title>Grafický dizajn | FLPstudio.sk</title>
        <meta name="description" content="Grafika na mieru – logá, tlačoviny, branding, bannery a viac." />
      </Head>

      <div className="bg-black text-white min-h-screen flex flex-col bg-[url('/images/bg_n.png')] bg-cover bg-center bg-no-repeat bg-fixed">
        <Header />

        <main className="flex-grow max-w-[1200px] mx-auto px-6 py-24 text-white">
          {/* Späť na všetky služby */}
          <div className="mb-10">
            <Link href="/sluzby">
              <span className="inline-block border border-red-600 text-white px-4 py-2 rounded-full text-sm hover:bg-red-600 hover:text-white transition">
                ← Späť na všetky služby
              </span>
            </Link>
          </div>

          {/* Nadpis */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-6"
          >
            <span className="text-white">Grafický </span>
            <span className="text-red-600">dizajn</span>
          </motion.h1>

          {/* Podnadpis */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-white/80 max-w-[800px] mx-auto mb-12 text-lg"
          >
            Tvoja značka si zaslúži jedinečný a profesionálny vizuál. Navrhneme ti logá, bannery, vizitky,
            tlačoviny či grafiku pre web a sociálne siete – na mieru a s dôrazom na detail.
          </motion.p>

          {/* Karty */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid gap-6 md:grid-cols-2"
          >
            <div className="bg-neutral-900 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition">
              <h3 className="text-lg font-semibold mb-2">Logá & branding</h3>
              <p className="text-white/70 text-sm">
                Vizuálna identita značky, ktorá zapamätateľne reprezentuje tvoje hodnoty.
              </p>
            </div>

            <div className="bg-neutral-900 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition">
              <h3 className="text-lg font-semibold mb-2">Tlačoviny</h3>
              <p className="text-white/70 text-sm">
                Vizitky, plagáty, letáky, jedálne listy alebo iné promo materiály.
              </p>
            </div>

            <div className="bg-neutral-900 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition">
              <h3 className="text-lg font-semibold mb-2">Online grafika</h3>
              <p className="text-white/70 text-sm">
                Bannery, príspevky a stories pre sociálne siete, webové prvky a ďalšie.
              </p>
            </div>

            <div className="bg-neutral-900 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition">
              <h3 className="text-lg font-semibold mb-2">Na mieru</h3>
              <p className="text-white/70 text-sm">
                Ak potrebuješ niečo špecifické, prispôsobíme návrh tvojim požiadavkám.
              </p>
            </div>
          </motion.div>

          {/* CTA button */}
          <div className="mt-12 text-center">
            <Link
              href="/cenova-ponuka"
              className="inline-block bg-white text-red-600 font-semibold text-sm sm:text-base px-6 py-3 rounded-full hover:bg-white/90 transition"
            >
              Chcem grafický dizajn na mieru
            </Link>
          </div>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}
