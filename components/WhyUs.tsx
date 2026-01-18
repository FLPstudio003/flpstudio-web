import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function WhyUs() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <section
      ref={ref}
      className="max-w-[1200px] mx-auto px-6 py-16 overflow-hidden"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
        variants={headingVariants}
        initial="hidden"
        animate={controls}
      >
        <span className="text-white">Prečo práve </span>
        <span className="text-red-600">FLPstudio.sk</span>
        <span className="text-white">?</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-6 text-center hover:shadow-2xl transition hover:scale-[1.02]"
            custom={i}
            variants={boxVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="text-4xl mb-4">
              {i === 0 ? "⚡" : i === 1 ? "🎯" : "🤝"}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {i === 0
                ? "Rýchle dodanie"
                : i === 1
                ? "Unikátny vizuál"
                : "Osobný prístup"}
            </h3>
            <p className="text-sm text-gray-200">
              {i === 0
                ? "Vaše zadanie vieme spracovať expresne rýchlo a kvalitne."
                : i === 1
                ? "Každý dizajn tvoríme na mieru, nič nie je prefabrikované."
                : "Sme tu pre vás – komunikácia, konzultácie a podpora."}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
