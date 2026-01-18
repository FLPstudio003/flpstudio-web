import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";

const categories = ["Všetko", "Grafika", "Web", "Sociálne siete", "Video", "Foto"];

const portfolioItems = [
  {
    title: "Logo pre reštauráciu",
    category: "Grafika",
    image: "/images/portfolio/grof_web.png",
  },
  {
    title: "Responzívny web pre Občianske združenie",
    category: "Web",
    image: "/images/portfolio/web1.png",
  },
  {
    title: "Instagram vizuály",
    category: "Sociálne siete",
    image: "/images/portfolio/prve_bb.png",
  },
  {
    title: "Plagát na udalosť",
    category: "Grafika",
    image: "/images/portfolio/plagat.png",
  },
  {
    title: "Fotenie novej kolekcie",
    category: "Foto",
    image: "/images/portfolio/about.jpg",
  },
  {
    title: "Obalový dizajn",
    category: "Grafika",
    image: "/images/portfolio/etiketa.png",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Všetko");

  const filteredItems =
    activeCategory === "Všetko"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Head>
        <title>Portfólio | FLPstudio.sk</title>
        <meta
          name="description"
          content="Ukážka našej práce – dizajn, web, sociálne siete, video a foto."
        />
      </Head>

      <div className="relative text-white min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow max-w-[1200px] mx-auto px-6 py-20">
          {/* Hero sekcia */}
          <section className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Naše <span className="text-red-600">portfólio</span>
            </h1>
            <p className="text-white/70 max-w-[700px] mx-auto">
              Pozri si naše práce podľa toho, čo ťa zaujíma. Grafika, weby, obsah, fotky aj videá – všetko nájdeš tu.
            </p>
          </section>

          {/* IG oznam */}
          <div className="bg-neutral-900 border border-white/10 text-center p-6 rounded-2xl mb-14 shadow-lg">
            <p className="text-white/80 text-lg sm:text-xl font-medium mb-2">
              📸 Kompletné portfólio nájdeš na našom Instagrame:
            </p>
            <a
              href="https://www.instagram.com/flpstudio.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-white/90 transition"
            >
              @flpstudio.sk
            </a>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition 
                ${
                  activeCategory === cat
                    ? "bg-white text-red-600"
                    : "border-white/30 text-white hover:border-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filteredItems.map((item, i) => (
              <div
                key={i}
                className="bg-neutral-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition hover:scale-[1.02] cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-[220px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.category}</p>
                </div>
              </div>
            ))}
          </section>

          {/* CTA */}
          <div className="text-center mt-20">
            <p className="text-white/70 mb-4 text-lg">
              Zaujal ťa náš štýl? Ozvi sa a vytvorme niečo výnimočné pre tvoju značku.
            </p>
            <a
              href="/cenova-ponuka"
              className="inline-block bg-white text-red-600 font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/90 transition"
            >
              Chcem s vami spolupracovať
            </a>
          </div>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}
