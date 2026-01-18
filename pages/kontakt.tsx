import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function KontaktPage() {
  return (
    <>
      <Head>
        <title>FLPstudio.sk | Kontakt</title>
        <meta name="description" content="Napíš nám a vytvorme niečo unikátne." />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center text-white px-6 py-20 max-w-[900px] mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Kontaktuj <span className="text-red-600">nás</span>
        </h1>

        <p className="text-center text-white/80 mb-10 max-w-[600px]">
          Máš projekt, nápad alebo otázku? Ozvi sa nám a spoločne vytvoríme niečo, čo bude vidieť.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12 w-full">
          {/* Kontakt info */}
          <div>
            <h3 className="font-semibold text-white mb-2">Kontakt</h3>
            <p className="text-sm text-white/80">📧 info@flpstudio.sk</p>
            <p className="text-sm text-white/80 mb-3">📞 +421 944 449 375</p>

            
          </div>

          {/* Adresa */}
          <div>
            <h3 className="font-semibold text-white mb-2">Sídlo</h3>
            <p className="text-sm text-white/80">📍 Slovensko (online spolupráca)</p>
            <p className="text-sm text-white/80">IČO: 56410697</p>
          </div>
        </div>

        {/* FORMULÁR */}
        <form className="w-full max-w-xl space-y-4">
          <div>
            <label className="block text-sm mb-1">Meno a priezvisko</label>
            <input
              type="text"
              className="w-full bg-transparent border border-red-600 rounded-md px-4 py-2 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Tvoje meno"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full bg-transparent border border-red-600 rounded-md px-4 py-2 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="napr. tvoj@email.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Správa</label>
            <textarea
              rows={4}
              className="w-full bg-transparent border border-red-600 rounded-md px-4 py-2 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Sem napíš svoju správu"
            />
          </div>

          <button
            type="submit"
            className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition block mx-auto mt-4"
          >
            Odoslať správu
          </button>
        </form>
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}
