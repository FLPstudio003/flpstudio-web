import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function FotoPage() {
  return (
    <>
      <Head>
        <title>Fotografické služby | FLPstudio.sk</title>
        <meta
          name="description"
          content="Portrétna, produktová aj eventová fotografia – zachytíme tvoju značku v najlepšom svetle."
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
            Fotografické <span className="text-red-600">služby</span>
          </h1>
          <p className="text-white/80 max-w-[700px] mx-auto mb-12">
            Sme pripravení zachytiť tvoju značku, produkty aj tím profesionálne a štýlovo – bez kompromisov.
          </p>

          <div className="grid gap-6 md:grid-cols-2 text-left">
            <Card title="Produktová fotografia" desc="Fotky pre e-shopy, katalógy a sociálne siete." />
            <Card title="Portréty a profilovky" desc="Osobné aj tímové fotografie pre weby, LinkedIn a tlač." />
            <Card title="Eventová fotografia" desc="Zachytenie momentov z eventov, konferencií, osláv." />
            <Card title="Na mieru" desc="Špeciálne požiadavky, lokácie, rekvizity? Všetko vieme zladiť." />
          </div>

          <div className="mt-12">
            <Link
              href="/cenova-ponuka"
              className="inline-block bg-white text-red-600 font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/90 transition"
            >
              Chcem fotenie na mieru
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
