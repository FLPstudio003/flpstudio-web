import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Ako prebieha celý proces spolupráce?",
    answer:
      "Po úvodnej konzultácii navrhneme riešenie, upravíme ho podľa tvojich pripomienok a následne doručíme finálny výstup – či už ide o logo, web alebo celý branding.",
  },
  {
    question: "Koľko trvá dodanie projektu?",
    answer:
      "Záleží od rozsahu, no väčšinu menších projektov vieme doručiť v priebehu niekoľkých dní. Väčšie spolupráce (branding + web) trvajú zvyčajne 1–3 týždne.",
  },
  {
    question: "Môžem dodať vlastný návrh alebo inšpiráciu?",
    answer:
      "Samozrejme! Ak máš predstavu, moodboard, náčrt alebo referencie, radi ich zohľadníme pri tvorbe návrhu.",
  },
  {
    question: "Aké výstupné formáty dostanem?",
    answer:
      "Dodávame všetky bežné formáty – PNG, JPG, SVG, PDF alebo AI (vektor). Weby odovzdávame ako hotové riešenie alebo vieme zabezpečiť aj prevádzku.",
  },
  {
    question: "Pomáhate aj s obsahom alebo reklamou?",
    answer:
      "Áno, vieme pripraviť texty, grafiku na sociálne siete, ale aj nastaviť platenú reklamu či pomôcť so stratégiou.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-[900px] mx-auto px-6 py-24 text-white relative z-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Najčastejšie <span className="text-red-600">otázky</span>
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-5 flex items-center justify-between text-white font-medium"
            >
              <span>{faq.question}</span>
              <span className="text-red-500 text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-5 text-sm text-white/80">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
