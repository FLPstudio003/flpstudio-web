import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

export default function CenovaPonuka() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const services = [
    "Grafický dizajn",
    "Tvorba webstránok",
    "Správa sociálnych sietí",
    "Video produkcia",
    "Fotografické služby",
    "Iné"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message: `Služba: ${selectedService || "Nezadané"}\n\nSpráva: ${message}`
        })
      });

      if (res.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setSelectedService(null);
      } else {
        const data = await res.json();
        setError(data.message || "Chyba pri odosielaní");
      }
    } catch (err) {
      setError("Nastala chyba pri odosielaní.");
    }

    setIsSending(false);
  };

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

        <form className="w-full max-w-xl space-y-4" onSubmit={handleSubmit}>
          {/* Meno */}
          <div>
            <label className="block text-sm mb-1">Meno a priezvisko</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border border-red-600 rounded-md px-4 py-2 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Tvoje meno"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border border-red-600 rounded-md px-4 py-2 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="napr. tvoj@email.com"
              required
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent border border-red-600 rounded-md px-4 py-2 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Napíš podrobnosti k tomu, čo konkrétne potrebuješ"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition block mx-auto mt-4"
          >
            {isSending ? "Odosielam..." : "Odoslať požiadavku"}
          </button>

          {success && (
            <p className="text-green-500 text-center mt-4">Správa bola úspešne odoslaná.</p>
          )}
          {error && (
            <p className="text-red-500 text-center mt-4">{error}</p>
          )}
        </form>
      </main>

      <ScrollToTop />
      <Footer />
    </>
  );
}
