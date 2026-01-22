import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

export default function CenovaPonuka() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const services = [
    "Grafický dizajn",
    "Tvorba webstránok",
    "Správa sociálnych sietí",
    "Video produkcia",
    "Fotografické služby",
    "Iné"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const fullMessage = `${selectedService ? `Typ služby: ${selectedService}\n\n` : ""}${formData.message}`;

    try {
      const response = await fetch("/api/contact.ts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: fullMessage,
        }),
      });

      if (response.ok) {
        setSuccessMessage("Požiadavka bola úspešne odoslaná ✅");
        setFormData({ name: "", email: "", message: "" });
        setSelectedService(null);
      } else {
        setErrorMessage("Nastala chyba pri odosielaní.");
      }
    } catch (err) {
      setErrorMessage("Chyba spojenia so serverom.");
    } finally {
      setLoading(false);
    }
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

        <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-4">
          <div>
            <label className="block text-sm mb-1">Meno a priezvisko</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border border-red-600 rounded-md px-4 py-2 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Tvoje meno"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border border-red-600 rounded-md px-4 py-2 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="napr. tvoj@email.com"
              required
            />
          </div>

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

          <div>
            <label className="block text-sm mb-1">Správa</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-transparent border border-red-600 rounded-md px-4 py-2 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Napíš podrobnosti k tomu, čo konkrétne potrebuješ"
              required
            />
          </div>

          {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

          <button
            type="submit"
            className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition block mx-auto mt-4"
            disabled={loading}
          >
            {loading ? "Odosielam..." : "Odoslať požiadavku"}
          </button>
        </form>
      </main>

      <ScrollToTop />
      <Footer />
    </>
  );
}

