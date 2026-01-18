import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

export default function CenovaPonuka() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const services = [
    "Grafický dizajn",
    "Tvorba webstránok",
    "Správa sociálnych sietí",
    "Video produkcia",
    "Fotografické služby",
    "Iné"
  ];

  return (
    <>
      <Head>
        <title>FLPstudio.sk | Cenová ponuka</title>
        <meta name="description" content="Požiadaj o nezáväznú cenovú ponuku na mieru." />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center text-white px-6 py-20 max-w-[900px] mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Získaj <span className="text-red-600">cenovú ponuku</span>
        </h1>

        <p className="text-center text-white/80 mb-10 max-w-[600px]">
          Vyber si typ služby a napíš nám detaily svojho projektu. Ozveme sa čo najskôr s ponukou na mieru.
        </p>

        <form className="w-full max-w-xl space-y-4">
          {/* Meno */}
          <div>
            <label className="block text-sm mb-1">Meno a priezvisko</label>
            <input
              type="text"
              className="w-full bg-transparent border border-red-600 rounded-md px-4 py-2 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Tvoje meno"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full bg-transparent border border-red-600 rounded-md px-4 py-2 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="napr. tvoj@email.com"
            />
          </div>

          {/* Custom dropdown */}
          <div className="relative">
            <label className="block text-sm mb-1">Vyber službu</label>
            <div
              className="w-full bg-black border border-red-600 rounded-md px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-neutral-900 transition"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="text-white/90">
                {selectedService || "-- Vyber službu --"}
              </span>
              <ChevronDown className="w-5 h-5 text-white/70" />
            </div>

            {dropdownOpen && (
              <div className="absolute z-50 mt-2 w-full bg-neutral-900 border border-red-600 rounded-md shadow-xl">
                {services.map((service) => (
                  <div
                    key={service}
                    className="px-4 py-2 hover:bg-red-600 hover:text-white text-sm flex items-center justify-between cursor-pointer transition"
                    onClick={() => {
                      setSelectedService(service);
                      setDropdownOpen(false);
                    }}
                  >
                    <span>{service}</span>
                    {selectedService === service && <Check className="w-4 h-4" />}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Správa */}
          <div>
            <label className="block text-sm mb-1">Správa</label>
            <textarea
              rows={4}
              className="w-full bg-transparent border border-red-600 rounded-md px-4 py-2 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Napíš podrobnosti k tomu, čo konkrétne potrebuješ"
            />
          </div>

          <button
            type="submit"
            className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition block mx-auto mt-4"
          >
            Odoslať požiadavku
          </button>
        </form>
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}
