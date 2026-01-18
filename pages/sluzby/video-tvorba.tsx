import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function VideoTvorbaPage() {
  return (
    <>
      <Head>
        <title>Video tvorba | FLPstudio.sk</title>
        <meta
          name="description"
          content="Reklamné videá, reels, promo videá, produktové aj eventové natáčanie – profesionálna video produkcia na mieru."
        />
      </Head>

      <div className="relative text-white min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow max-w-[1000px] mx-auto px-6 py-20 text-center">
          <div className="mb-10 text-left">
            <Link
              href="/sluzby"
              className="inline-block border border-red-600 text-red-600 px-4 py-2 rounded-full text-sm hover:bg-red-600 hover:text-white transition"
            >
              ← Späť na všetky služby
            </Link>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Video <span className="text-red-600">tvorba</span>
          </h1>
          <p className="text-white/80 max-w-[700px] mx-auto mb-12">
            Pomáhame značkám zaujať cez pohyb. Vytvárame dynamické a pútavé videá, ktoré zaujmú – od natáčania po strih a postprodukciu.
          </p>

          <div className="grid gap-6 md:grid-cols-2 text-left">
            <Card title="Reklamné videá" desc="Spoty, kampane, firemné videá pre online aj TV." />
            <Card title="Reels a sociálne siete" desc="Krátke formáty navrhnuté pre maximálny dosah." />
            <Card title="Produktové video" desc="Prezentácia produktu v pohybe – vizuálne aj funkčne." />
            <Card title="Eventy a aftermovies" desc="Zachytíme atmosféru, energiu a momenty z tvojho podujatia." />
          </div>

          <div className="mt-12">
            <Link
              href="/cenova-ponuka"
              className="inline-block bg-white text-red-600 font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/90 transition"
            >
              Chcem video na mieru
            </Link>
          </div>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-neutral-900 p-6 rounded-xl shadow-md border border-white/10 hover:bg-neutral-800 transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-white/70">{desc}</p>
    </div>
  );
}
