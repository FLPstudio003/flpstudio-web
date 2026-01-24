import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useState } from "react";

export default function KontaktPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          service: "Kontakt – všeobecná správa", // Musí byť poslané, lebo backend ho vyžaduje
        }),
      });

      if (response.ok) {
        setSuccessMessage("Správa bola úspešne odoslaná ✅");
        setFormData({ name: "", email: "", message: "" });
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
          <div>
            <h3 className="font-semibold text-white mb-2">Kontakt</h3>
            <p className="text-sm text-white/80">📧 info@flpstudio.sk</p>
            <p className="text-sm text-white/80 mb-3">📞 +421 944 449 375</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Sídlo</h3>
            <p className="text-sm text-white/80">📍 Slovensko (online spolupráca)</p>
            <p className="text-sm text-white/80">IČO: 56410697</p>
          </div>
        </div>

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

          <div>
            <label className="block text-sm mb-1">Správa</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-transparent border border-red-600 rounded-md px-4 py-2 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Sem napíš svoju správu"
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
            {loading ? "Odosielam..." : "Odoslať správu"}
          </button>
        </form>
      </main>

      <ScrollToTop />
      <Footer />
    </>
  );
}
